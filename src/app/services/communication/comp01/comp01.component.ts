import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'app/common/services/communication.service';


@Component({
  selector: 'app-comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.css']
})
export class Comp01Component implements OnInit {
  inputValue: string;
  constructor(
      private communicationService: CommunicationService
  ) { }

  ngOnInit() {}

  onSend(value: string){
    this.communicationService.pushData(value);
    this.inputValue = '';
  }
}
