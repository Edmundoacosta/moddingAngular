import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-success-register',
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss']
})
export class SuccessRegisterComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialog.closeAll();
    }, 2000);
  }

}
