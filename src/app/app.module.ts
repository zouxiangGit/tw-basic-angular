import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';
import { RouterModule } from '@angular/router';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { DirectiveModule } from './directive/directive.module';
import { PipeModule } from './pipe/pipe.module';
import { CoreModule } from './core/core.module';
import { ServiceInjectionModule } from './service-injection/service-injection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    TemplateSyntaxModule,
    LifecycleModule,
    ComponentInteractionModule,
    DirectiveModule,
    PipeModule,
    ServiceInjectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
