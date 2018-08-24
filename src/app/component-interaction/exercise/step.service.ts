import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private stepSource = new Subject<number>();
  step$ = this.stepSource.asObservable();

  constructor() { }

  nextStep(step: number) {
    this.stepSource.next(step);
  }
}
