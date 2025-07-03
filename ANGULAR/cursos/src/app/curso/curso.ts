import { Component } from '@angular/core';
import { curso } from './curso.model/curso.model';
import { cursos } from './curso.data/curso.data';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-curso',
  imports: [NgFor],
  templateUrl: './curso.html',
  styleUrl: './curso.css'
})
export class Curso {
    cursos: curso[] = cursos;

  constructor(private router: Router){}

  verDetalleCurso(Param_id: number){
    this.router.navigate(['/detalleCurso', Param_id])
  }
}



