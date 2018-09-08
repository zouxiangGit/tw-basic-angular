import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StepService {
  private stepSource = new Subject<number>();
  private onQuiteSource = new Subject<boolean>();
  step$ = this.stepSource.asObservable();
  onQuit$ = this.onQuiteSource.asObservable();

  constructor() { }

  nextStep(step: number) {
    this.stepSource.next(step);
  }

  onQuite(isQuited: boolean) {
    this.onQuiteSource.next(isQuited);
  }
}
