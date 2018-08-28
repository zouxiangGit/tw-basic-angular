import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';
import { ModuleService } from './module.service';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { ChildBComponent } from './parent/child-b/child-b.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'service-injection',
      component: ParentComponent
    }])
  ],
  providers: [ModuleService],
  declarations: [ParentComponent, ChildAComponent, ChildBComponent]
})
export class ServiceInjectionModule { }
