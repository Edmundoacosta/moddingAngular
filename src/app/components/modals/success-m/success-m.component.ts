import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-m',
  templateUrl: './success-m.component.html',
  styleUrls: ['./success-m.component.scss']
})
export class SuccessMComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      location.reload();
    }, 1500);
  }

}
