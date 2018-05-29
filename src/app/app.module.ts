import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/';
import { ProductsModule  } from './products/products.module';
import { CartModule  } from './cart/cart.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
