import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);
import cylinder from 'highcharts/modules/cylinder.src'
cylinder(Highcharts);


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
renderTo: 'container',
type: 'cylinder',
      options3d:
      {
enabled: true,
beta: 15,
alpha: 15,
viewDistance: 15,
depth: 50,
      }
    },

title: {
text: 'Real Time Data Example'
    },

xAxis: {
categories: ['English', 'Maths', 'Science']
    },

yAxis: {
title: {
text: 'Marks'
      },
    },

plotOptions: {
series: {
depth: 25,
colorByPoint: true
      }
    },

series: [{
data: [35, 49, 42]
    }],
  }
}
