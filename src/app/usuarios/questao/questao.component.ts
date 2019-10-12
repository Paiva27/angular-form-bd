import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../../shared/questao.service';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  constructor(private service: QuestaoService) { }

  ngOnInit() {
  }

}
