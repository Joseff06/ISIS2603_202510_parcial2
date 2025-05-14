import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar rutas
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,// Asegúrate de importar RouterModule para manejar rutas
    HttpClientModule // Asegúrate de importar HttpClientModule para hacer peticiones HTTP
  ],
  exports: [
    CandidatosListComponent,
    CandidatosDetailComponent // Exporta ambos componentes si se usan fuera del módulo
  ]
})
export class CandidatosModule { }
