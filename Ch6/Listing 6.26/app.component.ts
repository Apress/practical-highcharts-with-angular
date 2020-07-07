import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Bellcurve from 'highcharts/modules/histogram-bellcurve';
Bellcurve(Highcharts);

@Component({
selector: 'app-root',
templateUrl: 'app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'myHighChartsApp';
highcharts = Highcharts;

chartOptions = {
title: {
text: 'Bell Curve'
    },

xAxis: [{
title: { text: 'Data' },
    }, {
title: { text: 'Bell Curve' },
opposite: true
    }],

yAxis: [{
title: { text: 'Data' }
    }, {
title: { text: 'Bell Curve' },
opposite: true
    }],

series: [{
name: 'Bell Curve',
type: 'bellcurve',


xAxis: 1,
yAxis: 1,
baseSeries: 'series1',
zIndex: -1
    }, 
     {
name: 'Data',
type: 'scatter',
data: [5, 5.2, 5.4, 5.5, 5.6, 5.9, 6],
visible: true,
id: 'series1',
    }]
  };
}
