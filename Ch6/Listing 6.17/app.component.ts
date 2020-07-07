import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);
import cylinder from 'highcharts/modules/cylinder.src';
cylinder(Highcharts);
import funnel3d from 'highcharts/modules/funnel3d.src';
funnel3d(Highcharts);

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'myHighChartsApp';
highcharts = Highcharts;
chartOptions = {
title: {
text: 'Highcharts Funnel3D Chart'
    },

chart: {
renderTo: 'container',
type: 'funnel3d',
      options3d: {
enabled: true,
alpha: 10,
depth: 50,
viewDistance: 50
      }
    },
series: [{
name: 'Customers',
data: [
        ['Customer visits Website totally', 8000],
        ['App Downloads', 5150],
        ['Requested price list', 2000],
        ['Proposal sent', 1600],
      ]
    }],

plotOptions: {
series: {
dataLabels: {
enabled: true,
format: '<b>{point.name}</b> ({point.y:,.0f})',
allowOverlap: true,
        },
height: '50%',
width: '40%',
neckWidth: '15%',
neckHeight: '15%',
      }
    },
  }
}
