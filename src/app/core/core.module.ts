import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootService } from './root.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [RootService],
  declarations: []
})
export class CoreModule { }
