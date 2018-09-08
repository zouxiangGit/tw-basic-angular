import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component ({
  selector: 'app-lifecycle-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: [ '../example/example.component.css' ],
})
export class ExerciseComponent implements OnInit {
  sharedValue = 'shared value';
  valueA = 'value a';
  hasItemA = false;
  hasItemB = false;
  hookLog: string[];

  constructor (public logger: LoggerService) {
    this.hookLog = logger.logs;
  }

  ngOnInit (): void {
    // this.hasItemA = true;
    // this.logger.tick();
    // this.logger.log('---------A Created---------');
    // this.hasItemB = true;
    // this.logger.tick();
    // this.logger.log('---------B Created---------');
  }

  updateSharedValue () {
    this.sharedValue = 'NEW ' + this.sharedValue;
    this.logger.tick();
    this.logger.log('---------A & B Changed---------');
  }

  updateValueA () {
    this.valueA = 'NEW ' + this.valueA;
    this.logger.tick();
    this.logger.log('---------A Changed---------');
  }

  removeItemA() {
    this.hasItemA = !this.hasItemA;
    if (this.hasItemA) {
      this.valueA = 'value a';
      this.sharedValue = 'shared value';
      if (!this.hasItemB) {
        this.logger.clear();
      }
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------A Created---------');
    } else {
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------A Deleted---------');
    }
  }

  removeItemB() {
    this.hasItemB = !this.hasItemB;
    if (this.hasItemB) {
      this.sharedValue = 'shared value';
      if (!this.hasItemA) {
        this.logger.clear();
      }
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------B Created---------');
    } else {
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------B Deleted---------');
    }
  }
}
