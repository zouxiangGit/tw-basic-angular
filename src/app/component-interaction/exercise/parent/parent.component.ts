import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  stepValue = 0;
  isQuited = false;

  constructor() { }

  ngOnInit() {
  }

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
