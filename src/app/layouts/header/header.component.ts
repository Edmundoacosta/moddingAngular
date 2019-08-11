import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../providers/session.service';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ Location, {provide: LocationStrategy, useClass: PathLocationStrategy},
  	FormBuilder
  ]
})
export class HeaderComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public session: SessionService,
    public _modService: ModdingService,
    private _fb: FormBuilder,
    private location: Location) { }

  ngOnInit() {
  	this.userForm = this._fb.group({
  		email: ['', Validators.required],
  		password: ['', Validators.required]
    })
  }

  onSubmit(user, valid){
  	if (valid) {
  		this._modService.login({user: user}).then((res) => {
        window.location.reload();
        console.log(this.session.getObject('user'));
	  		console.log(res);
	  	});
  	}
  }

}
