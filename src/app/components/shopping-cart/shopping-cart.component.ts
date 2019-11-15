import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/providers/session.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public products:Array<any> = [];

  constructor(public session: SessionService) { }

  ngOnInit() {
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
}