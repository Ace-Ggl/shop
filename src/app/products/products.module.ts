import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductComponent, ProductListComponent } from './components/';

@NgModule({
  declarations: [ ProductComponent, ProductListComponent ],
  imports: [ BrowserModule ],
  exports: [ ProductComponent, ProductListComponent ],
  providers: [ ]
})
export class ProductsModule { }
