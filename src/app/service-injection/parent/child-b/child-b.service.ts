import { Injectable } from '@angular/core';

@Injectable()
export class ChildBService {
  value = 'child b value';

  constructor () {
  }

  changeValue () {
    this.value = 'NEW ' + this.value;
  }
}
