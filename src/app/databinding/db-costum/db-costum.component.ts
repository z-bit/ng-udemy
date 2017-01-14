import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-db-costum',
  templateUrl: './db-costum.component.html',
  styleUrls: ['./db-costum.component.css']
})
export class DbCostumComponent implements OnInit {
  @Input() number: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
