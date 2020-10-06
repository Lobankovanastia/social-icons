import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SocialIconsLibModule} from 'projects/social-icons-lib/src/lib/social-icons-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialIconsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
