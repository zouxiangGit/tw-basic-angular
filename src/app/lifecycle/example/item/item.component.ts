import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { LoggerService } from '../../../shared/logger.service';

@Component({
  selector: 'app-lifecycle-item',
  template: '<div></div>'
})
export class ItemComponent implements OnChanges, OnInit, OnDestroy {

  @Input() value;

  constructor(
    public logger: LoggerService
  ) {
    this.logger.log('constructor');
  }

  ngOnInit() {
    this.logger.log('ngOnInit');
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    this.logger.log('ngOnChanges [' + this.value + ']');
  }

  ngOnDestroy (): void {
    this.logger.log('ngOnDestroy');
  }
}
