import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsPerSlide = 3;
 
  slides = [
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_pc_components.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_water_cooling.png'},
    {image: '../../../assets/imagenes/home-view-img/baner-uvcables.png'},
    {image: '../../../assets/imagenes/home-view-img/baner-uvcables2.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'},
    {image: '../../../assets/imagenes/home-view-img/baner_light.png'}
  ];
  constructor() { }

  ngOnInit() {
    (function ($) {
      
    })
  }
  

}
