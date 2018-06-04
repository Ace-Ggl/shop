import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class CartService {
  private static products: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return CartService.products;
  }

  getProductCount(): number {
    let count = 0;

    CartService.products.map(p => count += p.quantity);

    return count;
  }

  getProductSum(): number {
    let sum = 0;

    CartService.products.map(p => sum += p.price * p.quantity);

    return sum;
  }

  addProduct(product: Product) {
    CartService.products.push(product);
  }

  deleteProduct(product: Product) {
    const index: number = CartService.products.indexOf(product);

    if (index >= 0) {
      CartService.products.splice(index, 1);
    }
  }
}
