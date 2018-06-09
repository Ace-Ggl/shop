import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService<T> {
  private static items: any[] = [];

  constructor() { }

  getItem(index: number): T {
    return LocalStorageService.items[index] as T;
  }

  setItem(item: T, index?: number): number {
    LocalStorageService.items[index ? index : LocalStorageService.items.length] = item;

    return index ? index : LocalStorageService.items.length;
  }

  removeItem(index: number) {
    LocalStorageService.items.splice(index, 1);
  }
}
