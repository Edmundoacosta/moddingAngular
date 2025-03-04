import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ModdingService } from '../../../../providers/moddinpc.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class UsersListComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {
  	
      }
  goBack(){
    this.location.back();
  }
}


