import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) private childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  nextStep() {
    this.childComponent.nextStep();
  }

  startOver() {
    this.childComponent.startOver();
  }

  isQuited() {
    return this.childComponent.isQuited;
  }
}
