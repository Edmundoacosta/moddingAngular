import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ModdingService } from '../../../../providers/moddinpc.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class CategoryComponent implements OnInit {
  public category = {
    name: ''
  };

  public subCategory = {
    name: '',
    parent: ''
  };

  public allCategories = [];

  constructor(private location: Location,
    public moddingServ: ModdingService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.moddingServ.getAllCategory()
      .then(res => {
        this.allCategories = res['result'];
      });
  }

  newCategory(){
    this.moddingServ.createCategory(this.category)
      .then((res) => {
        this.category.name = '';
        this.allCategories.push(res['result']);
      });
  }

  newSubCategory(){
    this.moddingServ.createSubcategory(this.subCategory)
      .then((res) => {
        this.subCategory = {
          name: '',
          parent: ''
        };
        this.refresh();
      });
  }

  goBack(){
    this.location.back();
  }
}
