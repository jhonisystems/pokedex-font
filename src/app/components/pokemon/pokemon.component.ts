import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any = {
    name: {
      english: ""
    }
  }
  movimientos: any[] = []
  results: any[] = [];

  view: any[] = [0, 0];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Estadisticas';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = 'neons';
  loading = false;
  constructor(
    private _pokemon: PokemonService,
    private routerActivate: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {
  }

  ngOnInit(): void {
    this.routerActivate.params.subscribe(
      params => {
        this.getPokemon(params['id'])
      }
    );
  }

  getPokemon(id: number) {
    this.loading = true
    this._pokemon.getPokemonById(id).subscribe(
      resp => {
        this.pokemon = resp
        this.results = [
          { name: 'Ataque', value: resp.base.Attack },
          { name: 'Defensa', value: resp.base.Defense },
          { name: 'Vida', value: resp.base.HP },
          { name: 'Ataque Especial', value: resp.base['Sp. Attack'] },
          { name: 'Defensa Especial', value: resp.base['Sp. Defense'] },
          { name: 'Velocidad', value: resp.base.Speed },
        ]
        this.getMovimientosPorTipo(resp.type);
        this.loading = false
      }
    );
  }

  getMovimientosPorTipo(tipos: string[]) {
    this._pokemon.getMovimientosPorTipo(tipos).subscribe(resp => this.movimientos = resp);
  }

  regresar() {
    this.router.navigate(['Home'])
  }

}
