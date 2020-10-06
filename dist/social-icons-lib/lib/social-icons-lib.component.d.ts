import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class SocialIconsLibComponent implements OnInit {
    private sanitizer;
    svg: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}
