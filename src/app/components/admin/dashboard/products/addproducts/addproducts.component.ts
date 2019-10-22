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
  constructor(private location: Location,
    public moddingServ: ModdingService) { }

  ngOnInit() {
    this.moddingServ.getAllProducts()
      .then((res)=> {
        console.log(res);
      });
  }

  changeFile(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.readThis(file);
    }
  }

  readThis(file: any): void {
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.imgURL = myReader.result; 
      this.product['principalImg'] = myReader.result.split('base64,')[1];
    }
    myReader.readAsDataURL(file);
  }


  preview(evt) {
    if (evt.target.files.length === 0)return;
    var reader = new FileReader();
    this.imagePath = evt.target.files[0].name;
    reader.readAsDataURL(evt.target.files[0]); 
    reader.onload = (_event) => {
      this.imgURL = reader.result; 
    }
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