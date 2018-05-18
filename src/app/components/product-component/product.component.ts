import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService, IProductsService } from '../../services';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  onBuy() {
      console.log('A good has been purchased');
      this.cartService.addProduct(this.product);
  }
}
