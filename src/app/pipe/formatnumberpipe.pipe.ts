import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatnumberpipe'
})
export class FormatnumberpipePipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null) return '';

    const num = typeof value === 'number' ? value : parseFloat(value);
  
    if (isNaN(num)) return value.toString();

    return num.toLocaleString('fr-FR').replace(/,/g, ' ');
  }

}
