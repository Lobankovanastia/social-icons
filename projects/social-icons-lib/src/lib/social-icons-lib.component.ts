import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Doctolib} from './doctolib';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'social-icon',
  templateUrl: './social-icons-lib.component.html',
  styles: [
  ]
})



export class SocialIconsLibComponent implements OnInit {

  public svg: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.svg = this.sanitizer.bypassSecurityTrustHtml(Doctolib.svg);
  }

}
