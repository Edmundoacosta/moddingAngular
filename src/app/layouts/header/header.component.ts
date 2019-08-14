import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../providers/session.service';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    FormBuilder
  ]
})
export class HeaderComponent implements OnInit {
  public logged:boolean = false;
  public userForm: FormGroup;
  modalRef: BsModalRef;

  constructor(
    public session: SessionService,
    public router: Router,
    private modalService: BsModalService,
    public _modService: ModdingService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    console.log(1);
    this.logged = this.session.getItem('token')?true:false;
  	this.userForm = this._fb.group({
  		email: ['', Validators.required],
  		password: ['', Validators.required]
    })
  }

  openModal(template: TemplateRef<any>) {
    if (this.logged) {
      this.router.navigate(['/user_dashboard']);
    } else {
      this.modalService.show(template);
    }
  }

  onSubmit(user, valid){
  	if (valid) {
  		this._modService.login({user: user}).then((res) => {
        this.session.setObject('user', res['user']);
        this.session.setItem('token', res['user'].token);
        location.reload();
	  	});
  	}
  }

  logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
      setTimeout(() => {
        location.reload();
      }, 200);
  }
}
