import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Sankey from 'highcharts/modules/sankey';
import Organisation from 'highcharts/modules/organization';
Sankey(Highcharts);
Organisation(Highcharts);

@Component({
selector: 'app-root',
templateUrl: 'app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'myHighChartsApp';
highcharts = Highcharts;

chartOptions = {
chart: {
inverted: true,
height: 400,
    },

title: {
text: 'Reporting Structure For IECE Group'
    },

series: [{
type: 'organization',
name: 'IECE',
keys: ['from', 'to'],

data: [
        ['Managing Director', 'CEO'],
        ['CEO', 'CFO'],
        ['CEO', 'CTO'],
        ['CEO', 'HR Head'],
        ['CFO', 'Finance GM'],
        ['CTO', 'Architect'],
        ['HR Head', 'Recruiter'],
        ['Architect', 'Technical Lead'],
        ['Technical Lead', 'Module Lead'],
        ['Module Lead', 'Developer']
      ],

color: 'blue',
dataLabels: {
color: 'white'
      },
borderColor: 'white',
nodeWidth: 25
    }],
tooltip: {
outside: true
    },
  };
}
