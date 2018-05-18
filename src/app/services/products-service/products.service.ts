import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { IProductsService } from '../products.interface';
import { Category } from '../../enums/category.enum';

@Injectable()
export class ProductsService implements IProductsService {
  products: Product[];
  constructor() {
    this.products = [
      { name: 'Audi', description: 'Good Car', category: Category.Cars, isAvailable: true, price: 20000 },
      { name: 'BMW', description: 'Excellent Car', category: Category.Cars, isAvailable: true, price: 40000 },
      { name: 'Boeing', description: 'Bold airplane', category: Category.Airplanes, isAvailable: true, price: 120E6 },
      { name: 'Airbus', description: 'Great airplane', category: Category.Airplanes, isAvailable: true, price: 190E6 }
    ];
  }
}
