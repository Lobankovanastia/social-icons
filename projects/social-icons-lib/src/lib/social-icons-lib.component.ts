import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {AwesomeIconsProvider} from './awesome-icons-provider.service';
import {CustomBrandsProviderService} from './custom-brands-provider.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'social-icon',
  templateUrl: './social-icons-lib.component.html',
  styleUrls: ['./social-icons-lib.component.css']
})



export class SocialIconsLibComponent implements OnInit {

  @Input()
  public brand: string;

  @Input()
  public size: number;

  constructor(
    private sanitizer: DomSanitizer,
    public readonly awesomeIconsProvider: AwesomeIconsProvider,
    public readonly customBrandsProvider: CustomBrandsProviderService
  ) { }

  ngOnInit(): void {
    if (this.size === undefined || this.size === null) {
      this.size = 18;
    } else {
      this.size = Math.round(this.size);
    }
  }

  public iconExists(): boolean {
    return this.awesomeIconsProvider.hasIcon(this.brand) || this.customBrandsProvider.hasIcon(this.brand);
  }

  getSvg(): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(
      this.customBrandsProvider.getSvg(this.brand.toLowerCase(), this.size)
    );
  }
}
