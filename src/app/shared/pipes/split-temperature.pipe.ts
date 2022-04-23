import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitTemperature',
})
export class SplitTemperaturePipe implements PipeTransform {
  transform(value: number, separator: string = '.'): string[] {
    if (!value) {
      return [];
    }

    return value.toString().split(separator);
  }
}
