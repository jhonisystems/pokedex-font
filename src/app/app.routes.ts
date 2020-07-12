import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Busqueda', component: BusquedaComponent },
    { path: 'Pokemon/:id', component: PokemonComponent },
    { path: '', pathMatch: 'full', redirectTo: 'Home' },
    { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
