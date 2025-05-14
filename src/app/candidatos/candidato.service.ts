import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidato } from './candidato.modelo';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private baseUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';

  constructor(private http: HttpClient) {}

  // Función para consultar el listado de todos los candidatos
  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.baseUrl}/candidates.json`);
  }

  // Función para consultar el detalle de un candidato por ID
  getCandidatoDetalle(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.baseUrl}/${id}/candidates.json`);
  }

  // Función para obtener un candidato aleatorio
  getCandidatoRandom(): Observable<Candidato> {
    return this.getCandidatos().pipe(
      map((candidatos: Candidato[]) => {
        const randomIndex = Math.floor(Math.random() * candidatos.length);
        return candidatos[randomIndex];
      })
    );
  }
}
