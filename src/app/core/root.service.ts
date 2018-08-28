import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  value = 'root value';

  constructor() { }

  changeValue() {
    this.value = 'NEW ' + this.value;
  }
}
