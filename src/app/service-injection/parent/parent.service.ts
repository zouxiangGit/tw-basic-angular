import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {
  value = 'parent value';

  constructor () {
  }

  changeValue () {
    this.value = 'NEW ' + this.value;
  }
}
