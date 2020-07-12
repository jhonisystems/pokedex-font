import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appValidaSecuencia]'
})
export class ValidaSecuenciaDirective {

  @Input('appValidaSecuencia') valorEntrada: number

  constructor(
    private el: ElementRef
  ) { 
    console.log(this.valorEntrada)
  }

  @HostListener('keyup') keyup(){
    console.log(this.el)
    if (this.el.nativeElement.valueAsNumber > 0 && this.el.nativeElement.valueAsNumber < 1000) {
      return true
    } else {
      return false
    }
  }

}
