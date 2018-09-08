import { Component, ViewChild } from '@angular/core';
import { ViewChildInteractionChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchild-interaction',
  templateUrl: './viewchild.component.html'
})
export class ViewChildInteractionComponent {
  @ViewChild(ViewChildInteractionChildComponent) private childComponent: ViewChildInteractionChildComponent;

  constructor() { }

  nextStep() {
    // TODO: next step
  }

  startOver() {
    // TODO: start over
  }

  isQuited() {
    // TODO: quit game
  }
}
