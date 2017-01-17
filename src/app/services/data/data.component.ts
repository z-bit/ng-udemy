import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/common/services/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: number[]= [];
  itemString = this.items.join(', ');
  inputValue = '';
  constructor(
      private dataService: DataService
  ) { }

  ngOnInit() {
  }
  onClick(value) {
      this.add(value);
  }
  onKey(e) {
    if (e.key == 'Enter') {
      this.add(e.target.value);
    }
  }
  add(value) {
    this.dataService.addData(value);
    this.items = this.dataService.getData();
    this.itemString = this.items.join(', ');
    this.inputValue = '';
  }
}
