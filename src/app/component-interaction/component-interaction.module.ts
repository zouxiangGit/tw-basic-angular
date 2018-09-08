import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventInteractionComponent } from './event/event.component';
import { EventInteractionChildComponent } from './event/child/child.component';
import { SharedModule } from '../shared/shared.module';
import { LocalVariableInteractionComponent } from './local-variable/local-variable.component';
import { LocalVariableInteractionChildComponent } from './local-variable/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'component-interaction',
      component: EventInteractionComponent
    }, {
      path: 'component-interaction/local-variable',
      component: LocalVariableInteractionComponent
    }
    ])
  ],
  declarations: [
    EventInteractionComponent,
    EventInteractionChildComponent,
    LocalVariableInteractionComponent,
    LocalVariableInteractionChildComponent
  ]
})
export class ComponentInteractionModule { }
