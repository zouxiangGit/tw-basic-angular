import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-interaction',
  templateUrl: './event.component.html'
})
export class EventInteractionComponent {
  stepValue = 0;
  isQuited = false;

  constructor() { }

  nextStep() {
    this.stepValue += 1;
  }

  startOver() {
    this.stepValue = 0;
    this.isQuited = false;
  }

  onChildQuit() {
    this.isQuited = true;
  }
}
