import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../shared/aluno.service';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private service: AlunoService) { }

  ocupacoes = [
    { id: 1, value: 'Aluno' },
    { id: 2, value: 'Professor' },
    { id: 3, value: 'Pro-Reitor' }
  ];

  cursos = [
    { id: 1, value: 'Computação' },
    { id: 2, value: 'Matemática' },
    { id: 3, value: 'Zootecnia' }
  ];
  
  departamentos = [
    { id: 1, value: 'DCOMP' },
    { id: 2, value: 'DMAT' },
    { id: 3, value: 'DZOO' }
  ];
  
  estados = [
    { id: 1, value: 'AC' }, { id: 2, value: 'AL' }, { id: 3, value: 'AP' }, { id: 3, value: 'AM' }, { id: 4, value: 'BA' },
    { id: 5, value: 'CE' }, { id: 6, value: 'DF' }, { id: 7, value: 'ES' }, { id: 8, value: 'GO' }, { id: 9, value: 'MA' },
    { id: 10, value: 'MT' }, { id: 11, value: 'MS' }, { id: 12, value: 'MG' }, { id: 13, value: 'PA' }, { id: 14, value: 'PB' },
    { id: 15, value: 'PR' }, { id: 16, value: 'PE' }, { id: 17, value: 'PI' }, { id: 18, value: 'RJ' }, { id: 19, value: 'RN' },
    { id: 20, value: 'RS' }, { id: 21, value: 'RS' }, { id: 22, value: 'RR' }, { id: 23, value: 'SC' }, { id: 24, value: 'SP' },
    { id: 25, value: 'SE' }, { id: 26, value: 'TO' },

  ]
  
  ngOnInit() {
  }

}
