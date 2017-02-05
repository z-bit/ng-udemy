import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(price: number, ust: number): number {
    return Math.round(price * (100 + (ust)))/100;
  }

}
