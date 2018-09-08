import { Component } from '@angular/core';

@Component({
  selector: 'app-local-variable-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class LocalVariableInteractionChildComponent {
  isQuited = false;
  step;
  stepArray = [];

  nextStep() {
    // TODO: next step
  }

  startOver() {
    // TODO: start over
  }

  onQuit() {
    // TODO: quit game
  }
}
