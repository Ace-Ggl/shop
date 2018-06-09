import { InjectionToken } from '@angular/core';

export const ConstantsToken = new InjectionToken<string>('Constants');

export * from './products-service/products.service';
export * from './cart-service/cart.service';
export * from './local-storage/local-storage.service';
export * from './config-options/config-options.service';
export * from './generator/generator.service';
export * from './constants/constants';
