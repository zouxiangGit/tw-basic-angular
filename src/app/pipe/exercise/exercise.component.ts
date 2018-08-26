import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  constructor() { }

  birthday = new Date(1988, 3, 15);
  toggle = true;

  get format()   {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}
