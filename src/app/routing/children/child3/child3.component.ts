import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './child3.guard';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements ComponentCanDeactivate {
  done: boolean = false;
  constructor() { }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.done) {
      return true;
    } else {
      return confirm("Done isn't clicked yet! Leave anyway?");
    }
  }

}
