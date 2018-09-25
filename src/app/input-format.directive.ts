import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;

  constructor(private element: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    console.log('on blur');
  }

  @HostListener('click') onClick() {
    console.log('click');
  }

  @HostListener('keyup') onKeyUp() {
    const value: string = this.element.nativeElement.value;


    if (this.format === 'lowercase') {
      this.element.nativeElement.value = value.toLocaleLowerCase();
    } else {
      this.element.nativeElement.value = value.toLocaleUpperCase();
    }

    console.log(value);
  }


}
