import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    public router: Router,
    ) { }

  ngOnInit() {
  }
  sModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    setTimeout(() => {
      this.modalService.hide(1);
      this.router.navigate(['/home']);
      setTimeout(() => {
        location.reload();
      },1002);
    }, 1000);
    
  }

}
