import { Injectable } from '@angular/core';

@Injectable()
export class ModuleService {
  value = 'module value';

  constructor() { }

  changeValue() {
    this.value = 'NEW ' + this.value;
  }
}
