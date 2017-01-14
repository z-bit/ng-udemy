import { Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  number: number = 1000;
  lc: boolean = false;
  destroyed: string = '';
  destroyMessage: string = 'Here will appear the OnDestroy Message after the component was ended.';
  start(){
    this.destroyed = '';
    this.lc = true;
  }
  end(){
    this.lc = false;
  }
  onDeleted(value: string){
    this.number = 1000;
    this.destroyed = 'red';
    this.destroyMessage = value;
  }
  onChangeNumber(){
    this.number = 3000;
  }
}
