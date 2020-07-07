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
events: {
render: function () {
var chart = this,
renderer = chart.renderer,
bg = chart.plotBackground;

renderer.image('https://www.highcharts.com/samples/graphics/sun.png', 100, 100, 30, 30).add();
        }
      },
    },

title: {
text: 'Yearly Temprature in Summar Season'
    },

xAxis: {
name: 'Year',
categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 
2017, 2018, 2019],
    },

series: [{
name: 'Temprature',
data: [42.5, 41.3, 43.0, 44.0, 41.25, 42.52, 40.25, 44.50    
, 48.0, 48.2]
    }]
  }
}
