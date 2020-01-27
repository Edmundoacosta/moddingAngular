import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/providers/session.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ListenService } from '../../providers/listen.service';
import { ToastrService } from 'ngx-toastr';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public products:Array<any> = [];
  public logged:boolean = false;
  constructor(public session: SessionService,
              public router: Router,
              public listen: ListenService,
              public toastr: ToastrService,
              public dialog : MatDialog,
    ) { }

  ngOnInit() {
    this.logged = this.session.getItem('token')?true:false;
    this.products = JSON.parse(this.session.getItem('inCart'));
    this.totalPrice();
  }

  totalPrice(){
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price * this.products[i].quantity;
    }
    return total;
  }

  remove(i) {i
    this.products.splice(i,1);
    this.session.setObject('inCart', this.products);
    this.listen.filter('remove');
    console.log(this.products);
    this.toastr.error('Se eliminó un producto de su carrito','', {
      timeOut: 1000
      
    });
  } 

  checkout() {
    if (this.logged) {
      this.router.navigate(['/Checkout']);
    } else {
      this.dialog.open(LoginModalComponent);
    }
  }
  

}