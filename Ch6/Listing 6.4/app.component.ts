import { Component } from '@angular/core';
import * as Highcharts from "highcharts";

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
type: 'line',
    },
title: {
text: 'Marks',
backgroundColor: '#FCFFC5',
borderColor: 'black',
borderRadius: 10,
borderWidth: 3
    },
xAxis: {
categories: ['English', 'Science', 'Maths'],
tickWidth: 1,
tickLength: 20,
tickPosition: 'inside',
tickColor: 'red',
    },

series: [{
name: 'Ram',
data: [40, 45, 50],
dashStyle: 'Dot'
    },
    {
name: 'Jack',
data: [44, 35, 30],
dashStyle: 'ShortDot'
    },
    {
name: 'John',
data: [34, 25, 32],
dashStyle: 'Dash'
    },
    {
name: 'kate',
data: [24, 38, 44],
dashStyle: 'ShortDashDot'
    },
    {
name: 'Kelly',
data: [28, 48, 24],
dashStyle: 'DotDash'
    }
    ]
  };
}
