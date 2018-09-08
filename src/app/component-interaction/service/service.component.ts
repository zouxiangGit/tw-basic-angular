import { Component, OnInit } from '@angular/core';
import { StepService } from './step.service';

@Component({
  selector: 'app-service-interaction',
  templateUrl: './service.component.html',
  providers: [StepService]
})
export class ServiceInteractionComponent implements OnInit{
  isQuited = false;

  constructor(private stepService: StepService) { }

  ngOnInit (): void {
    // TODO: subscribe on quite in step service
  }

  nextStep() {
    // TODO: next step
  }

  startOver() {
    // TODO: start over
  }
}
