import { Component, OnInit } from '@angular/core';
import { ListenService } from '../../../providers/listen.service';
import { SessionService } from 'src/app/providers/session.service';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.scss']
})
export class Checkout2Component implements OnInit {

  constructor(
    public session: SessionService
  ) { }

  ngOnInit() {
  }

}
