import { Product } from '../models/product';

export interface ICartService {
    getProducts(): Product[];
    getProductCount(): number;
    getProductSum(): number;
    addProduct(product: Product);
    deleteProduct(product: Product);
}
