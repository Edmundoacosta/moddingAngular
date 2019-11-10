import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from '../../providers/session.service';
import { ModdingService } from '../../providers/moddinpc.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from 'src/app/components/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-layouts/main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [
    FormBuilder
  ]
})
export class MainNavComponent {
  public logged:boolean = false;
  public userForm: FormGroup;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver,
    public session: SessionService,
    public router: Router,
    public _modService: ModdingService,
    private _fb: FormBuilder,
    public dialog : MatDialog,
    ) {}

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

