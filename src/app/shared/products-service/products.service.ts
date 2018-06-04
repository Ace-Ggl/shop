import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../enums/category.enum';

@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return [
      { name: 'Audi', description: 'Good Car', category: Category.Cars, isAvailable: true, price: 20000, quantity: 1 },
      { name: 'BMW', description: 'Excellent Car', category: Category.Cars, isAvailable: true, price: 40000, quantity: 1 },
      { name: 'Boeing', description: 'Bold airplane', category: Category.Airplanes, isAvailable: false, price: 120E6, quantity: 1 },
      { name: 'Airbus', description: 'Great airplane', category: Category.Airplanes, isAvailable: true, price: 190E6, quantity: 1 }
    ];
  }
}
