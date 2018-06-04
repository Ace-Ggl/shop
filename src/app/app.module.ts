import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/';
import { ProductsModule  } from './products/products.module';
import { CartModule  } from './cart/cart.module';
import { CoreModule } from './shared/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
