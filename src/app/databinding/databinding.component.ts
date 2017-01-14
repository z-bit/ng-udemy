import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  string: string = 'This is a string.';
  number: number = 6;
  constructor() { }

  ngOnInit() {}
  
  onClicked(value: string) {
    alert(value);
  }

}
