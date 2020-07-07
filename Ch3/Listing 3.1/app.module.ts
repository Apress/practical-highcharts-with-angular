import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
declarations: [
AppComponent,
HighchartsChartComponent
  ],
imports: [
BrowserModule,
AppRoutingModule
  ],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
