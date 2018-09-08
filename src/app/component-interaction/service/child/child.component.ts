import { Component, OnInit } from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'app-service-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class ServiceInteractionChildComponent implements OnInit {
  step;
  stepArray = [];

  constructor(private stepService: StepService) { }

  ngOnInit() {
    // TODO: subscribe next step in step service
  }

  onQuit() {
    // TODO: on quite
  }
}
