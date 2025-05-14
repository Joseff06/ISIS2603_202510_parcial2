import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosModule } from './candidatos/candidatos.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para hacer peticiones HTTP 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatosModule,
    HttpClientModule // Asegúrate de importar HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
