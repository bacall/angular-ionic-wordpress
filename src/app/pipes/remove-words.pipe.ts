import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWords'
})
export class RemoveWordsPipe implements PipeTransform {

  transform(value: any) {
    return value.replace(/&nbsp;/gi,'');
  }
}
