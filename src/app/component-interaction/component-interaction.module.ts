import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventInteractionComponent } from './event/event.component';
import { ChildComponent } from './event/child/child.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'component-interaction',
      component: EventInteractionComponent
    }])
  ],
  declarations: [EventInteractionComponent, ChildComponent]
})
export class ComponentInteractionModule { }
