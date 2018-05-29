import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../shared';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() showBuy: boolean;
  @Output() buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() { }

  onBuy() {
      this.buy.emit(this.product);
  }
}
