import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { curso } from '../curso.model/curso.model';
import { cursos } from '../curso.data/curso.data';

@Component({
  selector: 'app-detalle-curso',
  imports: [NgIf, RouterModule],
  templateUrl: './detalle-curso.html',
  styleUrl: './detalle-curso.css'
})
export class DetalleCurso {
  curso?: curso;

  constructor(private route: ActivatedRoute){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.curso = cursos.find(c => c.id === id);
    console.log(this.curso);

  }

}
