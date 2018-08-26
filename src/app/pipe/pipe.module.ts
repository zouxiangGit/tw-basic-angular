import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'pipe',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent]
})
export class PipeModule { }
