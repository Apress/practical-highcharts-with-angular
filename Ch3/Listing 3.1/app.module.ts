import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule  } from 'highcharts-angular';
@NgModule({
 declarations: [
 AppComponent,

 ],
 imports: [
 BrowserModule,
 AppRoutingModule,
 HighchartsChartModule 
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
