import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommunicationService {
  dataPushed = new EventEmitter<string>();
  constructor() { }

  pushData(value: string) {
    this.dataPushed.emit(value);
  }
}
