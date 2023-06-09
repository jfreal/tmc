import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlify'
})
export class UrlifyPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.toLocaleLowerCase().replace(/ /g, '-');
  }
}