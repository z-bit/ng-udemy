import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer
  ) {
      // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

      // code above works (without renderer) but directly manipulates the DOM,
      // which is no good when target other than browser, better:

      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
