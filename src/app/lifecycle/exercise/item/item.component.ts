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
  selector: 'app-lifecycle-exercise-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value;

  constructor(
    public logger: LoggerService
  ) {
    this.logger.log('constructor');
  }

  ngOnInit() {
    this.logger.log('ngOnInit');
  }

  ngAfterContentChecked (): void {
    this.logger.log('ngAfterContentChecked');
  }

  ngAfterContentInit (): void {
    this.logger.log('ngAfterContentInit');
  }

  ngAfterViewChecked (): void {
    this.logger.log('ngAfterViewChecked');
  }

  ngAfterViewInit (): void {
    this.logger.log('ngAfterViewInit');
  }

  ngDoCheck (): void {
    this.logger.log('ngDoCheck');
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    this.logger.log('ngOnChanges [' + this.value + ']');
  }

  ngOnDestroy (): void {
    this.logger.log('ngOnDestroy');
  }
}
