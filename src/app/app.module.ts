import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { AppRoutingModule } from "./app.routes";
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { SearchImgPipe } from './shared/pipes/search-img.pipe';
import { CompletarCerosPipe } from './shared/pipes/completar-ceros.pipe';
import { PokemonComponent } from './components/pokemon/pokemon.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ValidaSecuenciaDirective } from './shared/directives/valida-secuencia.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TarjetaComponent,
    SearchImgPipe,
    CompletarCerosPipe,
    PokemonComponent,
    BusquedaComponent,
    ValidaSecuenciaDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
