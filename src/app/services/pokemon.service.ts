import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lstPokemones } from "../shared/data/pokemones";
import { lstMovimientos } from "../shared/data/movimientos";
import { lstTipos } from "../shared/data/tipos";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }

  getAllPokemones(): Observable<any> {
    return this.http.get(`${environment.url}/api/pokemones`);
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get(`${environment.url}/api/pokemones/${id}`);
  }

  getPokemonByText(text: string): Observable<any> {
    return this.http.get(`${environment.url}/api/pokemones/texto/${text}`);
  }

  getPokemonBySecuen(inicio: number, fin: number): Observable<any> {
    return this.http.get(`${environment.url}/api/pokemones/${inicio}/${fin}`);
  }

  getPokemonByfilters(inicio: number, fin: number, tipo: string): Observable<any> {
    return this.http.get(`${environment.url}/api/pokemones/${inicio}/${fin}/${tipo}`);
  }

  getMovimientosPorTipo(tipos: string[]): Observable<any> {
    return this.http.get<any>(`${environment.url}/api/movimientos`).pipe(map(resp => {
      let lstMovimientos: any[] = []
      for (const i of tipos) {
        for (const j of resp) {
          if (j.type.toLowerCase() === i.toLowerCase() && j.accuracy !== null && j.power !== null) {
            lstMovimientos.push(j)
          }
        }
      }
      return lstMovimientos
    }));
  }

  getTipos(): Observable<any> {
    return this.http.get<any>(`${environment.url}/api/tipos`);
  }
}
