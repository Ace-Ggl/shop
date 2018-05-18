import { Component, OnInit } from '@angular/core';
import { IProductsService, CartService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }
}
