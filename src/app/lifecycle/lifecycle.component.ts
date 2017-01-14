import {
  Component,
  EventEmitter,
  Output,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Output() deleted = new EventEmitter<string>();
  title: string = 'Component Lifecycle Hooks';
  lifecycleHooks: string[] = [];
  constructor() { }

  ngOnChanges() {
    this.logit('OnChanges');
  };
  ngOnInit() {
    this.logit('OnInit');
  }
  ngDoCheck() {
    this.logit('DoCheck');
  }
  ngAfterContentInit() {
    this.logit('AfterContentInit');
  }
  ngAfterContentChecked() {
    this.logit('AfterContentChecked');
  }
  ngAfterViewInit() {
    this.logit('AfterContentInit');
  }
  ngAfterViewChecked() {
    this.logit('AfterViewChecked');
  }
  ngOnDestroy() {
    this.deleted.emit('OnDestroy: Component LifeCycleHooks was deletet.');
  }
  private logit(hook) {
    this.lifecycleHooks.push(hook)
  }
  
}
