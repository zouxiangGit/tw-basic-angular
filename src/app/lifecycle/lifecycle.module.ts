import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ItemComponent } from './exercise/item/item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'lifecycle',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent, ItemComponent]
})
export class LifecycleModule { }
