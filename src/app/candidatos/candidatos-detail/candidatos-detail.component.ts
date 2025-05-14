import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatosService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-detail',
  templateUrl: './candidatos-detail.component.html',
  standalone: false,
  styleUrls: ['./candidatos-detail.component.css']
})
export class CandidatosDetailComponent implements OnInit {
  candidato: any;

  constructor(private route: ActivatedRoute, private candidatoService: CandidatosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const numericId = Number(id); 
      this.candidatoService.getCandidatoDetalle(numericId).subscribe(data => {
        this.candidato = data;
      });
    }
  }
}
