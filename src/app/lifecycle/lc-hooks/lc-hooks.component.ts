import {
  Component,
  EventEmitter,
  Output,
  Input,
  ViewChild,
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
  selector: 'app-lc-hooks',
  templateUrl: './lc-hooks.component.html',
  styleUrls: ['./lc-hooks.component.css']
})
export class LcHooksComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy {
  @Output() deleted = new EventEmitter<string>();
  @Input() number: number = 0;
  @ViewChild('par') in: HTMLElement;
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
    this.logit('AfterViewInit');
    console.log(this.in);
  }
  ngAfterViewChecked() {
    this.logit('AfterViewChecked');
  }
  ngOnDestroy() {
    this.deleted.emit('OnDestroy: Component LifecycleHooks was deletet.');
  }
  private logit(hook) {
    this.lifecycleHooks.push(hook)
  }
  onChange() {
    this.lifecycleHooks.push('*** Entry added to watch the hooks! ***');
  }
}
