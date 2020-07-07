import { Component, OnInit } from '@angular/core';
import { Stockmodel } from '../model/stockmodel';
import { StockService } from '../services/stock.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { element } from 'protractor';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {
  url: string = 'https://localhost:44311/api/Stock/AddStock';
  addForm: FormGroup;

  constructor(private stockService: StockService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      StockId: ['', Validators.required],
      StockName: ['', Validators.required],
      BuyPrice: ['', Validators.required],
      Qty: ['', Validators.required],
      IsActive: ['', Validators.required],
    });
  }

  
  postApiResponse(formVal, url) {
    return this.stockService.addStock(this.url, formVal)
      .toPromise().then(res => {
        return res;
      });

  }

  onSubmit() {
    console.log(this.addForm.value)
    
    this.postApiResponse(this.addForm.value, this.url).then(
      data => {
        if(data==true)
        {
          alert('Stock added Successfully')
        }
        else{
          alert('Stock not added Successfully')
        }
      });

  }

}
