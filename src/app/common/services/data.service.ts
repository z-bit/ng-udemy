import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {

  private data: number[] = [];
  dataPusher = new EventEmitter<string>();

  constructor() { }

  addData(value: number) {
    this.data.push(value);
  }
  getData() {
    return this.data;
  }
  pushData(value: string) {
    this.dataPusher.emit(value);
  }

}
