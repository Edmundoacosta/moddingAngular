import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'; 

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class UpdateproductsComponent implements OnInit {
  public colors:Array<any> = [
    {
      name : "red"
    },
    {
      name : "polar white"
    },
    {
      name : "black"
    },
    {
      name : "purple"
    },
    {
      name : "acid green"
    },
    {
      name : "passion pink"
    },
    {
      name : "gold"
    },
    {
      name : "electric blue"
    },
    {
      name : "lambent orange"
    },
    {
      name : "carbon gray"
    }
  ]
  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
