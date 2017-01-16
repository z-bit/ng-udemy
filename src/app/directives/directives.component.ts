import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  private switch: boolean = true;
  items = [1, 2, 3];
  value = 99;
  constructor() { }

  ngOnInit() {
  }

  onSwitch(){
    this.switch = !this.switch;
  }

}
