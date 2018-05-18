import { Component, OnInit } from '@angular/core';
import { IProductsService, ProductsService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productService: IProductsService;

  constructor() { }

  ngOnInit() {
    this.productService = new ProductsService();
  }
}
