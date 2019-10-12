import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../shared/departamento.service';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  constructor(private service: DepartamentoService) { }

  ngOnInit() {
  }

}
