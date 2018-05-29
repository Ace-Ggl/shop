import { Component, Input, Output, OnInit, EventEmitter, DoCheck } from '@angular/core';
import { Product } from '../../../models/product';
import { PaintUponLookDirective } from '../../../shared/paint-upon-look/paint-upon-look.directive';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: Product;
  @Output() update: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() del: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    if (event.target) {
      this.product.quantity = parseInt(event.target.value, 10);
      this.update.emit(this.product);
    }
  }

  onDelete() {
    this.del.emit(this.product);
  }
}
