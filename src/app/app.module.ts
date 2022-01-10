import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandleImageErrorDirective } from './directives/handle-image-error.directive';
import { ScrollToElementDirective } from './directives/scroll-to-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    HandleImageErrorDirective,
    ScrollToElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
