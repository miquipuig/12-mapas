import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
// maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
