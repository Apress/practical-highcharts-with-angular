import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

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
type: 'column',

      options3d:
      {
enabled: true,
alpha: 10,
beta: 45,
depth: 150,
viewDistance: 50,
axisLabelPosition: "auto",
fitToPlot: true,



frame: {
bottom: {
size: 10,
color: 'orange'
          },
back: {
size: 10,
color: 'orange'
          },
side: {
size: 10,
color: 'orange'
          },
        }
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
column: {
depth: 65
      }
    },

series: [{
data: [35, 49, 42]
    }]
  }
}
