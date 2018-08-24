import { Component, EventEmitter, Output } from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  step;
  @Output() quit = new EventEmitter<any>();
  stepArray = [];

  constructor(private stepService: StepService) {
    this.stepService.step$.subscribe(step => {
      this.step = step;
      this.stepArray = Array.from(new Array(this.step), (val, index) => index);
    });
  }

  onQuit() {
    this.quit.emit();
  }

}
