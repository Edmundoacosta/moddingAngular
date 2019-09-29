import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../../../providers/moddinpc.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
	public users:Array<any> = [];
  constructor(public modServ: ModdingService) { }

  ngOnInit() {
  	this.modServ.getAllUsers()
  		.then((res) => {
  			console.log(res);
  			this.users = res.result;
  		});
  }

}
