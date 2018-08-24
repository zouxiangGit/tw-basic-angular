import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component ({
  selector: 'app-lifecycle-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: [ './exercise.component.css' ],
})
export class ExerciseComponent implements OnInit {
  item = 'name';
  hasItem = false;
  hookLog: string[];

  constructor (public logger: LoggerService) {
    this.hookLog = logger.logs;
  }

  ngOnInit (): void {
    this.hasItem = true;
    this.logger.tick();
    this.logger.log('---------Created---------');
  }

  updateItem () {
    this.item = 'NEW ' + this.item;
    this.logger.tick();
    this.logger.log('---------Changed---------');
  }

  removeItem() {
    this.hasItem = !this.hasItem;
    if (this.hasItem) {
      this.item = 'name';
      this.logger.clear();
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------Recreated---------');
    } else {
      this.hookLog = this.logger.logs;
      this.logger.tick();
      this.logger.log('---------Deleted---------');
    }
  }
}
