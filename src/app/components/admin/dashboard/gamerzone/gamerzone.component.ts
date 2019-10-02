import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-gamerzone',
  templateUrl: './gamerzone.component.html',
  styleUrls: ['./gamerzone.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class GamerzoneComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
