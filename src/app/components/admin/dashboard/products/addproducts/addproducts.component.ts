import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'; 

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AddproductsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }

}
