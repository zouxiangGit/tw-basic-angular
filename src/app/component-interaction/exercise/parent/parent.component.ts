import { Component, OnInit } from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [StepService]
})
export class ParentComponent implements OnInit {
  stepValue = 0;
  isQuited = false;

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  nextStep() {
    this.stepValue += 1;
    this.stepService.nextStep(this.stepValue);
  }

  startOver() {
    this.stepValue = 0;
    this.stepService.nextStep(0);
    this.isQuited = false;
  }

  onChildQuit() {
    this.isQuited = true;
  }
}
