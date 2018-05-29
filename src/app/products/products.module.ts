import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductComponent, ProductListComponent } from './components/';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ ProductComponent, ProductListComponent ],
  providers: [ ],
  exports: [ ProductComponent, ProductListComponent ],
  imports: [ BrowserModule, SharedModule ]
})
export class ProductsModule { }
