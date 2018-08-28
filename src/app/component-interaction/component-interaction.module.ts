import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ParentComponent } from './exercise/parent/parent.component';
import { ChildComponent } from './exercise/child/child.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'component-interaction',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent, ParentComponent, ChildComponent]
})
export class ComponentInteractionModule { }
