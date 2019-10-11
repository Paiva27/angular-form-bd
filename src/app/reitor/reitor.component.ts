import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reitor',
  templateUrl: './reitor.component.html',
  styleUrls: ['./reitor.component.css']
})
export class ReitorComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Paiva', 'Antonio'];
  public barChartType = 'bar';
  public barChartLegend = 'true';
  public barChartData = [
    { data: [5, 500], label: 'Mais gay' },
    { data: [500, 500], label: 'Mais gente boa' },
    { data: [500, 125], label: 'Mais Bonito' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
