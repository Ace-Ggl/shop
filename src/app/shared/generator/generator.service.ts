import { Injectable } from '@angular/core';

const alphaNumbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

@Injectable()
export class GeneratorService {
  constructor(private n: number) { }

  getRandomChars(): string {
    let outString = '';

    for (let i = 1; i <= this.n; i++) {
      outString += alphaNumbers.charAt(this.getRandomInteger());
    }

    return outString;
  }

  private getRandomInteger(): number {
    return Math.floor(Math.random() * alphaNumbers.length);
  }
}
