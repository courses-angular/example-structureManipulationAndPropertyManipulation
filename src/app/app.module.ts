import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoopDirective } from './loop.directive';
import { DeckDirective } from './cards/components/deck.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoopDirective,
    DeckDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
