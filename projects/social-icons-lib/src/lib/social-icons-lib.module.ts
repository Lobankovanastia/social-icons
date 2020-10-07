import { NgModule } from '@angular/core';
import { SocialIconsLibComponent } from './social-icons-lib.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [SocialIconsLibComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [SocialIconsLibComponent]
})
export class SocialIconsLibModule { }
