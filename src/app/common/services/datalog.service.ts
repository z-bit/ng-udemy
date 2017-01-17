import { Injectable } from '@angular/core';
import { LogService } from './log.service';


@Injectable()
export class DatalogService {

  constructor(
      private logService: LogService
  ) { }

  items: number[] = [];

  addData(item: number) {
    this.items.push(item);
    this.logService.log(`DataService added number ${item}.`);
  }
  getData(): number[] {
    return this.items;
  }

  getLogs() {
    return this.logService.getLog();
  }

}
