import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completarCeros'
})
export class CompletarCerosPipe implements PipeTransform {

  transform(value: number): string {
    let idCompleto: string

    if (value > 0 && value < 10) {
      idCompleto = '00'+ value
    } else {
      if (value >= 10 && value < 100) {
        idCompleto = '0'+ value
      } else {
        idCompleto = value.toString()
      }
    }
    return idCompleto;
  }

}
