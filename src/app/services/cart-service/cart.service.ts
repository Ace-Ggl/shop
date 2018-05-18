import { Injectable } from '@angular/core';
import { IProductsService } from '../products.interface';
import { Product } from '../../models/product';

@Injectable()
export class CartService {
  private static products: Product[] = [];
  constructor() { }

  addProduct(product: Product) {
    CartService.products.push(product);
  }

  getProducts(): Product[] {
    return CartService.products;
  }

  getProductCount(): number {
    return CartService.products.length;
  }
}
