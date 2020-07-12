import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() lstPokemons: any

  urlprueba: any;
  constructor(
    private router: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {

  }
  verPokemon(pokemon: any){
    this.router.navigate(['Pokemon',pokemon.id])
  }
}
