import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './exercise/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'directive',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent, HighlightDirective]
})
export class DirectiveModule { }
