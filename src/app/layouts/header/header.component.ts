import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../providers/session.service';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from 'src/app/components/modals/login-modal/login-modal.component';


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

  constructor(
    public session: SessionService,
    public router: Router,
    public _modService: ModdingService,
    private _fb: FormBuilder,
    public dialog : MatDialog
    ) { }

  ngOnInit() {
    console.log(1);
    this.logged = this.session.getItem('token')?true:false;
  }

  openLogin() {
    if (this.logged) {
      this.router.navigate(['/user_dashboard']);
    } else {
      this.dialog.open(LoginModalComponent);
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
