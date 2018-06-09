import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../../shared';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  onDelete(product: Product) {
    this.cartService.deleteProduct(product);
  }
}
