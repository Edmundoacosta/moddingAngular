import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../providers/session.service';
import { ModdingService } from '../../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RecoveryPassComponent } from '../recovery-pass/recovery-pass.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    public dialog : MatDialog,
    public session: SessionService,
    public router: Router,
    public _modService: ModdingService,
    private _fb: FormBuilder,
    public toastr: ToastrService,
   ) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit() {
  	this.userForm = this._fb.group({
  		email: new FormControl('', [Validators.required, Validators.email]),
  		password: ['', Validators.required]
    })
  }
  get u() {return this.userForm.controls;}

  openDialog() {
    this.dialog.open(RecoveryPassComponent);
  }

  onSubmit(user, valid){
  	if (valid) {
  		this._modService.login({user: user}).then((res) => {
        this.session.setObject('user', res['user']);
        this.session.setItem('token', res['user'].token);
        setTimeout(() => {
          location.reload();
        }, 100);
        this.toastr.success('Bienvenido','', {
          timeOut: 1000
        });
      }, (err) => {
        this.toastr.error('Correo o contraseña incorrecta', '', {
          timeOut: 2000
        });
      });
  	}else if(valid){
      this.toastr.error('Ingrese un correo o contraseña valida','', {
        timeOut: 1000
      });
    }
  }
}