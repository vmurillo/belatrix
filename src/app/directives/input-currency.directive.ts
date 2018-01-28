import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {InputformatPipe} from '../pipes/inputformat.pipe';

@Directive({
  selector: '[appInputCurrency]'
})
export class InputCurrencyDirective {
  private el: HTMLInputElement;
  @Input('currency') currency: string;

  constructor(private pipe: InputformatPipe, private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = '';
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.pipe.transform(value, this.currency);
  }
}
