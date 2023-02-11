import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeVivienda'
})
export class TypeViviendaPipe implements PipeTransform {

  transform(value: any) {

    value=value.replace("-", " ");
    if(value=="verdestacados"){
      value="destacados"
    }
    if(value=="Atico"){
      value="Ático"
    }

    return value= value.charAt(0).toUpperCase() +  value.slice(1);
  }

}
