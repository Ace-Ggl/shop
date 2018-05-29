import { Category } from '../enums/category.enum';

export class Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: Category;
    isAvailable: boolean;
}
