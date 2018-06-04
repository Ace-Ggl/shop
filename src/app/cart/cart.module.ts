import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductsModule } from '../products/products.module';
import { PaintUponLookDirective, CartComponent, CartListComponent } from './components/';

@NgModule({
  declarations: [ CartComponent, CartListComponent ],
  imports: [ BrowserModule, ProductsModule ],
  exports: [ CartListComponent, ProductsModule ],
  providers: [ ]
})
export class CartModule { }
