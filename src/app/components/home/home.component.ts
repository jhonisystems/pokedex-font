import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('contenedorTarjeta') contenedorTarjeta: ElementRef;
  lstAllpokemon = [];

  mostrarBoton = false;
  loading = false;
  
  constructor(
    private _pokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    
    this._pokemon.getAllPokemones().subscribe( resp => {
      this.lstAllpokemon = resp
      this.loading = false
    } );
  }

  @HostListener("scroll", ["$event"])
  getEventScroll($event: Event) {
    let scrollOffset = $event.srcElement['scrollTop'];
    if (scrollOffset > 0) {
      this.mostrarBoton = true;
    } else {
      this.mostrarBoton = false;
    }
  }

  inicio(){
    this.contenedorTarjeta.nativeElement.scrollTop = 0;
  }

}
