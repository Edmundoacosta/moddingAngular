import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { SuccessMComponent } from '../success-m/success-m.component';

@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent implements OnInit {

  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit() {
  }

  goLogin() {
    this.dialog.open(LoginModalComponent);
  }
  successRecovery() {
    this.dialog.open(SuccessMComponent);
  }
}
