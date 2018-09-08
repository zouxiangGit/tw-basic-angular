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
  selector: 'app-lifecycle-item-b',
  template: '<div></div>'
})
export class ItemBComponent implements OnChanges, OnInit, OnDestroy {

  @Input() sharedValue;

  constructor(
    public logger: LoggerService
  ) {
    this.logger.log('B constructor');
  }

  ngOnInit() {
    this.logger.log('B ngOnInit');
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    this.logger.log('B ngOnChanges [' + this.sharedValue + ']');
  }

  ngOnDestroy (): void {
    this.logger.log('B ngOnDestroy');
  }
}
