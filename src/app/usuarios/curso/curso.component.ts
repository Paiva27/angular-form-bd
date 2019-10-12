import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../shared/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private service: CursoService) { }

  ngOnInit() {
  }

}
