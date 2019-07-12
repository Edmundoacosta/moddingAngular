import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
	public category:string = '';
  public products:Array<any> = [
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '11.00',
      image: 'https://picsum.photos/300',
      category: 'refrigeracion',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '8.00',
      image: 'https://picsum.photos/300',
      category: 'refrigeracion',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '11.00',
      image: 'https://picsum.photos/300',
      category: 'refrigeracion',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '11.00',
      image: 'https://picsum.photos/300',
      category: 'refrigeracion',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'sistema',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'sistema',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'sistema',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'sistema',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    },
    {
      name: 'Lorem Ipsum Dolor Sit.',
      price: '10.00',
      image: 'https://picsum.photos/300',
      category: 'compu',
    }
  ];
  constructor(
  	public activatedRoute: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.activatedRoute.params
  		.subscribe(params => {
  			let name = params.type;
  			this.category = name.charAt(0).toUpperCase() + name.slice(1);
        this.products = this.products.filter(prod => prod.category == params.type);
  			});
  		};
  }


