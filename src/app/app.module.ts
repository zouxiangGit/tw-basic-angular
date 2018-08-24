import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';
import { RouterModule } from '@angular/router';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { SharedModule } from './shared/shared.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    TemplateSyntaxModule,
    LifecycleModule,
    ComponentInteractionModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
