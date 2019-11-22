import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ListadoComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
 
}
