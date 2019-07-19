import { Component, OnInit } from '@angular/core';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
  	FormBuilder
  ]
})
export class LoginComponent implements OnInit {
	public userForm: FormGroup;

  constructor(
  	public _modService: ModdingService,
  	private _fb: FormBuilder) { }

  ngOnInit() {
  	this.userForm = this._fb.group({
  		email: ['test@test.com', Validators.required],
  		password: ['123', Validators.required]
  	})
  }

  onSubmit(user, valid){
  	if (valid) {
  		this._modService.login({user: user}).then((res) => {
	  		console.log(res);
	  	});
  	}
  }
}