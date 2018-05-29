import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { CartComponent, CartListComponent } from './components/';

@NgModule({
  declarations: [ CartComponent, CartListComponent ],
  imports: [ BrowserModule, SharedModule, ProductsModule ],
  exports: [ CartComponent, CartListComponent ],
  providers: [ ]
})
export class CartModule { }
