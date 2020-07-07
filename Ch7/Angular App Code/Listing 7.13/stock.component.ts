import { Component, OnInit } from '@angular/core';
import {Stockmodel} from '../model/stockmodel';
import { StockService } from '../services/stock.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as Highcharts from 'highcharts';
import { debug } from 'util';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
  url: string = 'https://localhost:44311/api/GetStockData';
  addForm: FormGroup;
  start:string //=  '2018-01-01';
  end:string //= '2019-01-20';
  stockDates: any;
  stockModel: Stockmodel[];
  SelStockId: string;
  SelPeriodId: string;
  Stocks:Stockmodel[];
  constructor(private stockService: StockService, private formBuilder: FormBuilder) {
  }
 
  public options: any = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'E- Portfolio'
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
    
  
  ngOnInit() {
      this.StockDDL();
      this.addForm = this.formBuilder.group({
      Stock: ['', Validators.required],
      Period: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
    });
  
  }
onSubmit() {
      this.stockService.GetStockByTicks(this.url, this.SelStockId, this.start, this.end, this.SelPeriodId)
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
        this.stockModel = stockData;
        this.stockDates = dates;
        var dataSeries = [];
        for (var i = 0; i < this.stockModel.length; i++) {
          dataSeries.push(
            this.stockModel[i]
          );
        }
        this.options.series = [{ data: dataSeries, name: this.SelStockId }]
        this.options.xAxis.categories = this.stockDates
        Highcharts.chart('container', this.options);
      },
        error => {
          console.log('Something went wrong.');
        });
  }

  StockDDL()
  {
     this.stockService.GetStocks("https://localhost:44311/api/getstock")
    .toPromise().then(data => {
      const stockLData = [];
      data.forEach(row => {
        stockLData.push({
          StockName: row.StockName,
          StockId:row.StockId
          
        });
      });
      return this.Stocks = stockLData;
    });
  }
}