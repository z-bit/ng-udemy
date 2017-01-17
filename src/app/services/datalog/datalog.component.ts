import { Component, OnInit } from '@angular/core';
import { DatalogService } from 'app/common/services/datalog.service';


@Component({
  selector: 'app-datalog',
  templateUrl: './datalog.component.html',
  styleUrls: ['./datalog.component.css']
})
export class DatalogComponent implements OnInit {
  items: number[] = [];
  itemString: string;
  logs: string[] = [];
  inputValue: string;
  constructor(
      private datalogService: DatalogService
  ) {}

  ngOnInit() {}

  onClick(value) {
    this.datalogService.addData(value);
    //alert(value);
    this.items = this.datalogService.getData();
    this.itemString = this.items.join(', ');
    this.logs = this.datalogService.getLogs();
    this.inputValue = '';
  }

}
