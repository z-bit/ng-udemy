import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  myValue = 'lowercase';
  myDate = new Date(2017, 1, 3);
  myPrice: number = 1.59;
  UstInProzent = 19;
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise( (resolve) => {
    setTimeout( () => resolve('Data just arrived!')
  ,3000)});

  constructor() { }

  ngOnInit() {
  }

}
