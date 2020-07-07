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
text: 'IECE Digital Bluechip Fund (LargeCap Category)'
    },
xAxis: [{
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }],
yAxis: [{
labels: {
format: '{value}%',
style: {
color: Highcharts.getOptions().colors[1]
        }
      },
title: {
text: 'Benchmark',
style: {
color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
title: {
text: 'Scheme',
style: {
color: Highcharts.getOptions().colors[0]
        }
      },
labels: {
format: '{value} %',
style: {
color: Highcharts.getOptions().colors[0]
        }
      },
opposite: true
    }],
tooltip: {
shared: true
    },
legend: {
layout: 'vertical',
align: 'left',
x: 170,
verticalAlign: 'top',
y: 70,
floating: true,
backgroundColor:
Highcharts.defaultOptions.legend.backgroundColor
    },
series: [{
name: 'Scheme',
type: 'column',
yAxis: 1,
data: [7.43, 8.5, 5.4, 8.2, 8.97, 6.9, 7.6, 8.5, 8.4, 8.9, 9.6, 10.4],
tooltip: {
valueSuffix: ' %'
      }

    }, {
name: 'Benchmark',
type: 'spline',
data: [4.12, 3.9, 2.68, 3.5, 4.2, 2.5, 3.2, 6.5, 6.3, 7.3, 7.9, 7.6],
tooltip: {
valueSuffix: '%'
      }
    }],
  }
}
