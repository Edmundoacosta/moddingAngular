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
import { ListenService } from '../../providers/listen.service';

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
  public inCart:number = 0;
  public categories:Array<any> = [];
  public userForm: FormGroup;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver,
    public session: SessionService,
    public listen: ListenService,
    public router: Router,
    public _modService: ModdingService,
    private _fb: FormBuilder,
    public dialog : MatDialog,
    ) {
      this.listen.listen().subscribe((val) => {
        val=='add'?this.inCart++:'';
      });
    }

    ngOnInit() {
      this.logged = this.session.getItem('token')?true:false;
      this.inCart = this.session.getItem('inCart')?JSON.parse(this.session.getItem('inCart')).length:0;
      console.log(this.inCart);
      this._modService.getCategoryHeader()
        .then((res) => {
          this.categories = res['result'];
        });
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

