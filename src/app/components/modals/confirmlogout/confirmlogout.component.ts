import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmlogout',
  templateUrl: './confirmlogout.component.html',
  styleUrls: ['./confirmlogout.component.scss']
})
export class ConfirmlogoutComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  yes(){
    localStorage.removeItem('token');
        this.router.navigate(['/home']);
        setTimeout(() => {
          location.reload();
        }, 200);
  }
}
