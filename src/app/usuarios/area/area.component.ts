import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../shared/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private service: AreaService) { }

  ngOnInit() {
  }

}
