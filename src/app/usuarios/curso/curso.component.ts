import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../shared/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private service: CursoService) { }

  departamentos = [
    { id: 1, value: 'DCOMP' },
    { id: 2, value: 'DMAT' },
    { id: 3, value: 'DZOO' }
  ];

  areas = [
    { id: 1, value: 'q' },
    { id: 2, value: 'é' },
    { id: 3, value: 'area' },
    { id: 4, value: 'mano?' }
  ]

  ngOnInit() {
  }

}
