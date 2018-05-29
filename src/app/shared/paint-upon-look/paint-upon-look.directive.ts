import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[app-paint-upon-look]',
})
export class PaintUponLookDirective {
  constructor() { }

  @HostBinding('class') className: string;

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.className = 'active';
    console.log('mouse enter');
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event) {
    this.className = 'inactive';
    console.log('mouse leave');
  }
}
