import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private loggedItems: string[] = [];
  constructor() { }

  log(input: string) {
    this.loggedItems.push(input);
  }

  getLog() {
    return this.loggedItems;
  }
}
