import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'template-syntax',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent]
})
export class TemplateSyntaxModule { }
