import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ModdingService } from '../../../../providers/moddinpc.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ProductsComponent implements OnInit {
  
  public allProducts = [];
  constructor(private location: Location,
      public moddingServ: ModdingService) { }

  ngOnInit() {
    this.list();
  }
  list(){
    this.moddingServ.getAllProducts()
      .then(res => {
        this.allProducts = res['result']; 
      });
  }
  goBack(){
    this.location.back();
  }
}
