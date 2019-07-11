import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
	public category:string = '';
  constructor(
  	public activatedRoute: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.activatedRoute.params
  		.subscribe(params => {
  			let name = params.type;
  			this.category = name.charAt(0).toUpperCase() + name.slice(1);
  			});
  		};
  }


