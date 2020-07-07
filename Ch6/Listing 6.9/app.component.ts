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
zoomType: 'xy'
    },
title: {
text: 'Mobile Operating System used by diffrent Countries in Percentage'
  },
labels: {
items: [{
html: 'Total product used',
style: {
left: '550px',
top: '18px',
color: ( 
Highcharts.defaultOptions.title.style&&
Highcharts.defaultOptions.title.style.color
            ) || 'black'
        }
    }]
},
xAxis: {
categories: ['IOS', 'Android', 'Windows', 'Black Berry', 'Symbian']
},

series: [{
type: 'column',
name: 'India',
data: [25, 55, 10, 5, 5]
  }, {
type: 'column',
name: 'UK',
data: [57, 30, 7, 3, 3]
  }, {
type: 'column',
name: 'US',
data: [50, 30, 15, 3, 2]
  }, {
type: 'spline',
name: 'Average',
data: [44, 38.3, 10.67, 3.67, 3.34],
marker: {
lineWidth: 2,
lineColor: Highcharts.getOptions().colors[4],
fillColor: 'white'
      }}, {
type: 'pie', //total
name: 'Total consumption',
data: [{
name: 'India',
y: 100,
color: Highcharts.getOptions().colors[0] 
      }, {
name: 'UK',
y: 100,
color: Highcharts.getOptions().colors[1] 
      }, {
name: 'US',
y: 100,
color: Highcharts.getOptions().colors[2] 
      }],
center: [590, 80],
size: 120,
showInLegend: false,
dataLabels: {
enabled: false
      }
  }],
  }
}
