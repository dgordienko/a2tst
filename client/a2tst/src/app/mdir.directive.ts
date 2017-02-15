import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMdir]'
})
export class MdirDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
