import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class HttpService {
  baseUrl: string = 'https://ng-udemy.firebaseio.com/';
  constructor(
    private http: Http
  ) { }

  getData() {
    return this.http
      .get(this.baseUrl + 'title.json')
      .map( (response: Response) => response.json() )
    ;
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
        .post(this.baseUrl + 'user.json', body, {headers: headers})
        .map( (data:Response) => data.json() )
    ;

  }

  getUser() {
    return this.http
        .get(this.baseUrl + 'user.json')
        .map( (response: Response) => response.json() )
        ;
  }
}
