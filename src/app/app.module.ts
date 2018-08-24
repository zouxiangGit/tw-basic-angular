import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';
import { RouterModule } from '@angular/router';
import { LifecycleModule } from './lifecycle/lifecycle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TemplateSyntaxModule,
    LifecycleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
