import { Component, OnInit } from '@angular/core';
import { LogService } from 'app/common/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  inputValue: string = '';
  items: string[] = [];
  constructor(
      private logService: LogService
  ) { }

  ngOnInit() {
  }

  onClick(input) {
    this.log(input);
  }

  onKey(e: any) {
    if (e.key == 'Enter') {
      this.log(e.target.value);
    }
  }

  log(message) {
    this.logService.log(message);
    this.items = this.logService.getLog();
    this.inputValue = '';
  }

}
