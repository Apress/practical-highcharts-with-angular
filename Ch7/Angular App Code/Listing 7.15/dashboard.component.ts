import { Component, OnInit } from '@angular/core';
import {Stockmodel} from '../model/stockmodel';
import { StockService } from '../services/stock.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as Highcharts from 'highcharts';
import { debug } from 'util';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addForm: FormGroup;
  url: string = 'https://localhost:44311/api/GetStockData';
  Stocks:Stockmodel[];
  PortfolioStocks : Stockmodel[];//For holding Portfolio data with proffit/loss.
  constructor(private stockService: StockService, private formBuilder: FormBuilder) {
  }
ngOnInit() {
   // this.GetActiveStocks();
    this.GetDashboardPortfolioData();
  }
  GetDashboardPortfolioData()
  {
    this.stockService.GetStocks("https://localhost:44311/api/GetDashboardPortfolioData")
   .toPromise().then(data => {
     return this.PortfolioStocks = data;
   });
 }

 public proffitLossChart: any = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Proffit/Loss Chart'
  },
  credits: {
    enabled: false
  },
  series: [],
}

 GetProffitLossChart(){
   let totalInvestment:number=0;
   let totalGain:number=0;
 this.PortfolioStocks.forEach(row=>{
    totalInvestment+=row.TotalInvested;
    totalGain += row.CurrentValue;
  });
  this.GetTopGainerChart();
  this.GetTopLooserChart();
  this.proffitLossChart.series =[{
      data: [{
        name: 'Total Investment#',
        y: totalInvestment,
      },
      {
        name: 'Current Value',
        y: totalGain,
      }]
    }]       
    Highcharts.chart('containerProffitLoss', this.proffitLossChart); 
    
 }

 public topGainerChart: any = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Top Gainer'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: [],
    
  },
  yAxis: {
    title: {
      text: ''
    },
  },
  series: [],
}

  GetTopGainerChart() {
    let length = this.PortfolioStocks.length;
    if (length > 0) {
      this.stockService.GetGainerLooserStockData('https://localhost:44311/api/GetGainerLooserStockData', this.PortfolioStocks[length - 1].StockId, "Monthly")
      .toPromise().then(data => {
        const stockData = [];
        const dates = [];
        data.forEach(row => {
          const temp_row = [
            row.High,
          ];
          dates.push(row.Date);
          stockData.push(row.High);
        });
        var dataSeries = [];
        for (var i = 0; i < stockData.length; i++) {
          dataSeries.push(
            stockData[i]
          );
        }
        
        this.topGainerChart.series = [{ data: dataSeries, name: this.PortfolioStocks[length - 1].StockId }]
        this.topGainerChart.xAxis.categories = dates
        Highcharts.chart('topGainerChart', this.topGainerChart);
      },
        error => {
          console.log('Something went wrong.');
        });
    }
  }

  public topLooserChart: any = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Top Looser'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [],
      
    },
    yAxis: {
      title: {
        text: ''
      },
    },
    series: [],
  }
  
    GetTopLooserChart() {
      let length = this.PortfolioStocks.length;
      if (length > 0) {
        this.stockService.GetGainerLooserStockData('https://localhost:44311/api/GetGainerLooserStockData', this.PortfolioStocks[0].StockId, "Monthly")
        .toPromise().then(data => {
          const stockData = [];
          const dates = [];
          data.forEach(row => {
            const temp_row = [
              row.High,
            ];
            dates.push(row.Date);
            stockData.push(row.High);
          });
          
          var dataSeries = [];
          for (var i = 0; i < stockData.length; i++) {
            dataSeries.push(
              stockData[i]
            );
          }
          
          this.topLooserChart.series = [{ data: dataSeries, name: this.PortfolioStocks[0].StockId }]
          this.topLooserChart.xAxis.categories = dates
          Highcharts.chart('topLooserChart', this.topLooserChart);
        },
          error => {
            console.log('Something went wrong.');
          });
      }
    }
  
}
