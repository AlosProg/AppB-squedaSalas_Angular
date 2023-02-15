// Importanción de módulos y componentes
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosMadridComponent } from './datos-madrid/datos-madrid.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

// Declaración de mnódulos y componentes
@NgModule({
  declarations: [AppComponent, DatosMadridComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DatosMadridComponent],
})
export class AppModule {}
