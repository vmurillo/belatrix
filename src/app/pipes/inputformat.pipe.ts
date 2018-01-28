import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputformat'
})
export class InputformatPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 4 }).format(value);
  }

}
