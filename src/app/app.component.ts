import { Component } from '@angular/core';
import { RootService } from './core/root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( public rootService: RootService ) {}

  title = 'tw-basic-angular';
  showLifecycleList = false;

  changeRootValue() {
    this.rootService.changeValue();
  }
}
