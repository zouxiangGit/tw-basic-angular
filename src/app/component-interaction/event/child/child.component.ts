import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() step;
  @Output() quit = new EventEmitter<any>();
  stepArray = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges ( changes: SimpleChanges ): void {
    this.stepArray = Array.from(new Array(this.step), (val, index) => index);
  }

  onQuit() {
    this.quit.emit();
  }

}
