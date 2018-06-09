import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, DemoComponent } from './components/';
import { ProductsModule  } from './products/products.module';
import { CartModule  } from './cart/cart.module';
import { CoreModule } from './shared/core.module';

@NgModule({
  declarations: [ AppComponent, DemoComponent ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
