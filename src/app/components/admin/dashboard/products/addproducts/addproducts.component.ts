import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'; 

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AddproductsComponent implements OnInit {
  urls = new Array<string>();
  public imagePath;
  imgURL: any;
  public product = {
    name: '',
    color: '',
    price: '',
    description: '',
    principalImg: '',
    images: [],
    price: 0,
    inStock: 0,
    subcategory: ''
  };
  constructor(private location: Location) { }

  ngOnInit() {
  }

  preview(file) {
    if (file.length === 0)
      return;
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  goBack(){
    this.location.back();
  }

}