import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  standalone: false,
  styleUrls: ['./candidatos-list.component.css']
})
export class CandidatosListComponent implements OnInit {
   candidatos = [
    {
      id: 1,
      nombre: "Cardenal Pietro Parolin",
      pais_origen: "Italia",
      edad: 70,
      vertiente_religiosa: "Diócesis secular (Curia Romana)",
      foto: "https://upload.wikimedia.org/wikipedia/commons/0/00/Cardinal_Pietro_Parolin_par_Claude_Truong-Ngoc_juillet_2021.jpg"
    },
    {
      id: 2,
      nombre: "Cardenal Luis Antonio Tagle",
      pais_origen: "Filipinas",
      edad: 67,
      vertiente_religiosa: "Congregación para la Evangelización de los Pueblos",
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Cardinal_Luis_Antonio_Tagle_Sambuhay_2019.jpg"
    },
    {
      id: 3,
      nombre: "Cardenal Péter Erdő",
      pais_origen: "Hungría",
      edad: 72,
      vertiente_religiosa: "Diócesis secular",
      foto: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Peter-Erdo-mass.jpg"
    },
    {
      id: 4,
      nombre: "Cardenal Jean-Claude Hollerich",
      pais_origen: "Luxemburgo",
      edad: 66,
      vertiente_religiosa: "Jesuita",
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Jean-Claude_Hollerich.jpg"
    },
    {
      id: 5,
      nombre: "Cardenal Louis Raphaël I Sako",
      pais_origen: "Irak",
      edad: 76,
      vertiente_religiosa: "Caldeo",
      foto: "https://upload.wikimedia.org/wikipedia/commons/5/57/Louis_Rapha%C3%ABl_I_Sako_November_2015.jpg"
    }
  ];
  
  proximoPapa: any = null;

  constructor(private CandidatosService: CandidatosService, private router: Router) { }

  ngOnInit(): void {
    
    if (this.candidatos.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.candidatos.length);
      this.proximoPapa = this.candidatos[randomIndex];
    }
  }

  seleccionarCandidato(candidato: any) {
    // Navega al detalle del candidato usando su id
    this.router.navigate(['/candidatos', candidato.id]);
  }
}
