import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  ddTipo = 'Seleccione'
  BuscarDisabled = false
  lstTipos: any[] = []

  lstPokemones: any[] = []
  loading = false
  
  @ViewChild('txtInicio') txtInicio: ElementRef
  @ViewChild('txtFin') txtFin: ElementRef

  constructor(
    private _pokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this.getTipoPokemon()
  }

  seleccionar(valores: string) {
    this.ddTipo = valores
  }

  getTipoPokemon() {
    this._pokemon.getTipos().subscribe(resp => this.lstTipos = resp)
  }

  buscar(valor: string) {
    this.loading = true
    if(valor !== '') {
      if (isNaN(Number.parseInt(valor))) {
        this.buscarPorNombre(valor)
      } else {
        this.buscarPorId(Number.parseInt(valor))
      }
    } else {
      Swal.fire('Información', 'Debe de digitar un valor', 'info')
      this.loading = false;
    }
  }

  buscarAvanzado() {
    const inicio = Number.parseInt(this.txtInicio.nativeElement.value)
    const fin = Number.parseInt(this.txtFin.nativeElement.value)

    this.loading = true
    if (this.ddTipo === 'Seleccione' && isNaN(inicio) && isNaN(fin)) {
      Swal.fire('Información', 'Debe rellenar o selecciónar alguna opción', 'info')
      this.loading = false
    } else {
      if (this.ddTipo !== 'Seleccione' && isNaN(inicio) && isNaN(fin)) {
        this.buscarFiltros(0, 0, this.ddTipo)
      } else {
        if (!isNaN(inicio) && !isNaN(fin)) {
          if (inicio > fin) {
            Swal.fire('Información', 'el parametro inicio no debe de ser mayor que el parametro fin', 'info')
            this.loading = false
          } else {
            if (this.ddTipo !== 'Seleccione'){
              this.buscarFiltros(inicio,fin,this.ddTipo)
            } else {
              this.buscarSequiencia(inicio, fin)
            }
          }
        }
      }
    }

  }

  buscarSequiencia(inicio: number, fin: number) {
    this._pokemon.getPokemonBySecuen(inicio, fin).subscribe(resp => this.recibirRespuesta(resp))
  }

  buscarFiltros(inicio: number, fin: number, texto: string) {
    this._pokemon.getPokemonByfilters(inicio, fin, texto).subscribe(resp => this.recibirRespuesta(resp));
  }

  buscarPorNombre(valor: string) {
    this._pokemon.getPokemonByText(valor).subscribe(resp => this.recibirRespuesta(resp));
  }
  buscarPorId(valor: number) {
    this._pokemon.getPokemonById(valor).subscribe(resp => this.recibirRespuesta(resp, true));
  }

  recibirRespuesta(resp: any, obj?: boolean) {
    this.lstPokemones = []
    if (obj) {
      this.lstPokemones.push(resp)
    } else {
      this.lstPokemones = resp
    }

    if(this.lstPokemones.length == 0){
      Swal.fire('Información', 'No se encontro conicidencias, intente con otro(s) datos', 'info')
    }

    this.loading = false
  }
}
