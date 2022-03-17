import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "green"
    el.nativeElement.style.borderRadius = "19px"
    el.nativeElement.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"


  }

}
