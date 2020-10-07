import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AwesomeIconsProvider } from './awesome-icons-provider.service';
import { CustomBrandsProviderService } from './custom-brands-provider.service';
export declare class SocialIconsLibComponent implements OnInit {
    private sanitizer;
    readonly awesomeIconsProvider: AwesomeIconsProvider;
    readonly customBrandsProvider: CustomBrandsProviderService;
    brand: string;
    size: number;
    constructor(sanitizer: DomSanitizer, awesomeIconsProvider: AwesomeIconsProvider, customBrandsProvider: CustomBrandsProviderService);
    ngOnInit(): void;
    iconExists(): boolean;
    getSvg(): SafeHtml;
}
