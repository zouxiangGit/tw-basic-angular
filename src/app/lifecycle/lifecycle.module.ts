import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { ItemComponent } from './exercise/item/item.component';
import { LoggerService } from '../shared/logger.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'lifecycle',
      component: ExerciseComponent
    }])
  ],
  providers: [LoggerService],
  declarations: [ExerciseComponent, ItemComponent]
})
export class LifecycleModule { }
