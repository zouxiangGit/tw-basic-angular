import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  step = 0;
  isQuited = false;
  stepArray = [];

  constructor() { }

  ngOnInit() {

  }

  onQuit() {
    this.isQuited = true;
  }

  nextStep() {
    this.step += 1;
    this.stepArray = Array.from(new Array(this.step), (val, index) => index);
  }

  startOver() {
    this.step = 0;
    this.isQuited = false;
    this.stepArray = [];
  }
}
