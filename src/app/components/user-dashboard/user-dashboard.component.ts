import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(public _modService: ModdingService) { }

  public user;

  ngOnInit() {
  	this._modService.getUser()
  		.then((res) =>{
  			console.log(res);
  			this.user = res['user'];
  		});
  }

}
