import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private static config = {
    id: 0,
    login: 'maxim',
    email: '@epam.com'
  };

  constructor() { }

  getConfigOption(option: string): any {
    return ConfigOptionsService.config[option];
  }

  setConfigOption(option: string, value: any) {
    ConfigOptionsService.config[option] = value;
  }
}
