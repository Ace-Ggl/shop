import { Product } from '../models/product';

export interface IProductsService {
    getProducts(): Product[];
}
