import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, CartService } from '../../../shared';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductsService,
              public cartService: CartService) { }

  ngOnInit() { }

  onBuy(product: Product) {
    this.cartService.addProduct(product);
  }
}
