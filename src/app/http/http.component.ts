import { Component, OnInit } from '@angular/core';
import {HttpService} from "app/common/services/http.service";
import {Response} from "@angular/http";

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

  titleValue: string = '';
  postResponse: string = '';
  answerArrived: boolean = false;
  users: User[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
        (data: any) => this.titleValue = data

    );
  }

  onSubmit(username, email) {
    this.httpService
        .sendData({username: username, email: email})
        .subscribe( (data) => {
          this.postResponse = data.name;
          this.answerArrived = true;
        })
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
