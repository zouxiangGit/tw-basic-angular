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
  selector: 'app-lifecycle-item-a',
  template: '<div></div>'
})
export class ItemAComponent implements OnChanges, OnInit, OnDestroy {

  @Input() sharedValue;
  @Input() value;

  constructor(
    public logger: LoggerService
  ) {
    this.logger.log('A constructor');
  }

  ngOnInit() {
    this.logger.log('A ngOnInit');
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if (changes.sharedValue) {
      this.logger.log('A ngOnChanges sharedValue [' + this.sharedValue + ']');
    }
    if (changes.value) {
      this.logger.log('A ngOnChanges value [' + this.value + ']');
    }
  }

  ngOnDestroy (): void {
    this.logger.log('A ngOnDestroy');
  }
}
