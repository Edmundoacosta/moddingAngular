import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Instagram;
  }

  callTest(){
    test();
  }
  
}
function Instagram(Instafeed){
  var userFeed = new Instafeed({
    get: 'user',
    userId: '12494311822',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '12494311822.1677ed0.569e11e0cf574263b8b0082163a5ce1b',
    sortBy: 'most-recent',
    template: '<img src="{{image}}" alt="{{caption}}" class="img-fluid"/>',
  });
  userFeed.run();
}
function test() {
  alert("it works gaaaaaa!");
}

