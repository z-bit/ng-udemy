import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighOnMouseoverDirective {

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';
  // Naming main attribute equal to selector allows
  // <div [highlight]="'red'">...</div>
  // or <div [highlight]>...</div> using both default highlightColor as default backgroungColor
  // but <div highlight>...</div> does not work any longer
  private backgroundColor = this.defaultColor;

  @HostListener('mouseenter') mouseenter(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('click', ['$event']) onClick(event) {
    //console.log(event.target.innerText);
    event.target.innerText += ' clicked';
  }

  constructor() { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
