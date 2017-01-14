import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-two-way',
  templateUrl: './db-two-way.component.html',
  styleUrls: ['./db-two-way.component.css']
})
export class DbTwoWayComponent implements OnInit {
  person = {name: ''};
  constructor() { }

  ngOnInit() {
  }

}
