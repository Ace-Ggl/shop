import { NgModule } from '@angular/core';
import { CartService, ProductsService } from '.';
import { PaintUponLookDirective } from './paint-upon-look/paint-upon-look.directive';

@NgModule({
  declarations: [ PaintUponLookDirective ],
  imports: [ ],
  exports: [ PaintUponLookDirective ],
  providers: [ CartService, ProductsService ]
})
export class SharedModule { }
