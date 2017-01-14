import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-db-event',
  templateUrl: './db-event.component.html',
  styleUrls: ['./db-event.component.css']
})
export class DbEventComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  
  onClicked() {
    this.clicked.emit('The button was clicked!');
  }

}
