import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule  } from 'highcharts-angular';
import {RouterModule} from '@angular/router'
import { ReactiveFormsModule } from "@angular/forms";
import { StockComponent } from './stock/stock.component';
import { AddstockComponent } from './addstock/addstock.component';
import { DashboardComponent } from './dashboard/dashboard.component';  

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    AddstockComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,   
    RouterModule.forRoot([
      { path: 'stock', component: StockComponent },
      { path: 'addstock', component: AddstockComponent },
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
