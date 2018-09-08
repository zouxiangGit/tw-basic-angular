import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ItemComponent } from './example/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'lifecycle',
      component: ExampleComponent
    },
    {
      path: 'lifecycle/exercise',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExampleComponent, ExerciseComponent, ItemComponent]
})
export class LifecycleModule { }
