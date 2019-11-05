import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'; 
import { ModdingService } from '../../../../../providers/moddinpc.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AddproductsComponent implements OnInit {
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
  urls = new Array<string>();
  public imagePath;
  imgURL: any;
  public product = {
    name: '',
    color: '',
    description: '',
    principalImg: '',
    images: [],
    price: 0,
    inStock: 0,
    subcategory: ''
  };
  public subcategories = [];
  constructor(private location: Location,
    public moddingServ: ModdingService) { }

  ngOnInit() {
    this.moddingServ.getAllSubCategories()
      .then((res) => {
        this.subcategories = res['result'];
      });
  }

  changeFile(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.readThis(file, false);
    }
  }

  changeFiles(event){
    let fileList: FileList = event.target.files;
    for (var i = 0; i < fileList.length; i++) {
      this.readThis(fileList[i], true);
    }
  }

  readThis(file: any, files: boolean): void {
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      if (files) {
        this.urls.push(myReader.result);
        this.product['images'].push(myReader.result.split('base64,')[1]);
      } else {
        this.imgURL = myReader.result;
        this.product['principalImg'] = this.imgURL.split('base64,')[1];
      }
    }
    myReader.readAsDataURL(file);
  }

  goBack(){
    this.location.back();
  }

  create(){
    this.moddingServ.createProduct(this.product)
      .then((res) => {
        console.log(res);
      });
  }
}