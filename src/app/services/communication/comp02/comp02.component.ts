import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'app/common/services/communication.service';


@Component({
  selector: 'app-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.css']
})
export class Comp02Component implements OnInit {
  outputValue: string = '';
  constructor(
      private communicationService: CommunicationService
  ) { }

  ngOnInit() {
    this.communicationService.dataPushed.subscribe(
        data => this.outputValue = data
    );
  }

}
