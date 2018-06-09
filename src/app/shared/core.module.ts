import { NgModule, InjectionToken } from '@angular/core';
import { CartService, ProductsService, LocalStorageService, ConfigOptionsService, GeneratorService, ConstantsToken, Constants } from '.';

@NgModule({
  declarations: [ ],
  imports: [ ],
  exports: [ ],
  providers: [ CartService, ProductsService, LocalStorageService, ConfigOptionsService,
             { provide: ConstantsToken, useValue: Constants },
             { provide: GeneratorService, useFactory: () => new GeneratorService(30) } ]
})
export class CoreModule { }
