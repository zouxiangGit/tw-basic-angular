import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../event/child/child.component.css']
})
export class ViewChildInteractionChildComponent {
  isQuited = false;
  step = 0;
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
