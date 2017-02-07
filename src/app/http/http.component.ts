import { Component, OnInit } from '@angular/core';
import {HttpService} from "app/common/services/http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

class User {
  username: string = '';
  email: string = '';
  constructor(username, email){
    this.username = username;
    this.email = email;
  }
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  // to be set in onNgInit()
  titleString: string = '';
  titleError: string = '';

  asyncObservable: Observable<any>;
  asyncError: Observable<any>;
  realError: string = '';


  postResponse: string = '';
  answerArrived: boolean = false;
  users: User[] = [];
  sendError: string = '';
  postError: string = '';

  constructor(
    private httpService: HttpService
  ) {

}

  ngOnInit() {

    this.httpService.getDataObjectForSubscribe().subscribe(
      (data: any) => this.titleString = data.json()
    );

    // to demonstrate error handling by httpService
    this.httpService.getDataObjectForSubscribeError().subscribe(
      (data) => this.titleError = data.json(),
      (err)  => this.titleError = err.message
    );

    this.asyncObservable = this.httpService.getDataStringForAsync();

    this.asyncError  = this.httpService
    //asyncError is bound to async pipe, which accepts Observables, but will not display strings
      .getDataStringForAsyncError()
      .catch ( (err) => {
        this.realError = err.message;
        // realError has no pipe and accepts the error message as string
        return Observable.throw('none');
        // catch forces to return an ObservableInput<any, {}>
        // this one will live on uncaught as "Exception: none"
      })
    ;

  }

  onSubmit(username, email) {
    this.sendError = '';
    this.httpService
        .sendData({username: username, email: email})
        .subscribe(
          (data) => {
            this.postResponse = data.name;
            this.answerArrived = true;
          },
          (res: Response) => {
              console.log('error handled by subscription: ');
              console.log('status: ' + res.status);
              console.log('statusText: ' + res.statusText);
              console.log('error: ' + res.json().error);
              this.sendError = res.json().error +
                ' - Please set ".write" in Firebase rules back to true !';
          }
        )
    ;
  }

  onSubmitReadOnly(title, name, sex) {
    this.postError = '';
    this.httpService
      .sendToReadOnly(title, name, sex)
      .subscribe(
        (data) => console.log(data),
        (err)  => this.postError = err.json().error
      )
    ;
  }

  onGetUsers() {
    this.httpService
      .getUser()
      .subscribe(
          data => {
            const keyArray = [];
            for (let key in data) {
              keyArray.push(data[key])
            }
            this.users = keyArray;
          }
      )
    ;
  }
}
