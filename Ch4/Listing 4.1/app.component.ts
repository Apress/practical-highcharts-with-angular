import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHighChartsApp';
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Programming Languages used by developers worldwide'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
      name: 'Uses',
      colorByPoint: true,
      data: [{
        name: 'C#',
        y: 55,
        sliced: true,
        selected: true
      }, {
        name: 'VB',
        y: 25
      }, {
        name: 'J#',
        y: 10
           }, {
        name: 'VC++',
        y: 10
      }]
    }]
  };
}