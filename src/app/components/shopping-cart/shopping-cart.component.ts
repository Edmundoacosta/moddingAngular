import { Component, OnInit } from '@angular/core';
import { ListenService } from '../../providers/listen.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  quantity = 1;
  result = this.getResult();
  productPrice = 12.5;

  constructor() { }

  ngOnInit() {
  }

  getResult() {
    return this.productPrice * this.quantity;
  }

}
