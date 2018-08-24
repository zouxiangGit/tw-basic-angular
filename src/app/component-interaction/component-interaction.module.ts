import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../shared/logger.service';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ParentComponent } from './exercise/parent/parent.component';
import { ChildComponent } from './exercise/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'component-interaction',
      component: ExerciseComponent
    }])
  ],
  providers: [LoggerService],
  declarations: [ExerciseComponent, ParentComponent, ChildComponent]
})
export class ComponentInteractionModule { }
