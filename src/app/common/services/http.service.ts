import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";


@Injectable()
export class HttpService {
  baseUrl: string = 'https://ng-udemy.firebaseio.com/';
  constructor(
    private http: Http
  ) { }

  getDataStringForAsync() {
    return this.http
      .get(this.baseUrl + 'title.json')
      .map( (response: Response) => this.checkNull(response).json() )
    ;
  }

  getDataStringForAsyncError() {
    return this.http
      .get(this.baseUrl + 'doesNotExist.json')
      .map( (response: Response) => this.checkNull(response).json() )
      .catch(this.handleError)
    ;
  }

  getDataObjectForSubscribe() {
    return this.http
      .get(this.baseUrl + 'title.json')
      .map( (response: Response) => this.checkNull(response) )
      .catch(this.handleError)
      ;
  }

  getDataObjectForSubscribeError() {
    return this.http
      .get(this.baseUrl + 'doesNotExist.json')
      .map( (response: Response) => this.checkNull(response) )
      .catch(this.handleError)
      ;
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
        .post(this.baseUrl + 'user.json', body, {headers: headers})
        .map( (data:Response) => data.json() )
        .catch(this.handleError)
    ;
  }

  sendToReadOnly(title: string, name: string, sex: string) {
    let user = {
      title,
      name,
      sex
    };
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.baseUrl + 'readOnly.json', body, {headers: headers})
      .map( (data:Response) => {
        console.log(data);
        console.log(data.json);
        return data.json();
      })
      .catch(this.handleError)
    ;
  }

  getUser() {
    return this.http
        .get(this.baseUrl + 'user.json')
        .map( (response: Response) => response.json() )
        ;
  }

  // If resource does not exist Firebase returns NULL.
  private checkNull(res: Response): Response  {
        if (!res.json()) {
          console.log('checkNull():');
          console.log(res);
          //return Observable.throw('Requested ressource does not exist.')
          throw new Error('Requested ressource does not exist.');
        } else {
          return res;
    }
  }

  private handleError(err) {
    console.log('HttpService.handleError(err):')
    console.log(err);
    /*
    if (res.status < 200 || res.status >= 300) {
      // Do something nice with this error, like loggong, mailing, etc.
      // You can not really catch it as it has to be thrown again due to the signiture
      console.log('HttpService.handleError():')
      console.log('This request has failed: ' + res.status + ' - ' + res.statusText + ' - ' + res.json().error);


    }
    */
    return Observable.throw(err);
  }
}
