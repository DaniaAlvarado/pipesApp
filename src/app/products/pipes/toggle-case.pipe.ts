import { Pipe, PipeTransform } from '@angular/core';

// danilea | togglecase = 'DANIELA'
// DANIELA | togglecase = 'daniela' []

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}
