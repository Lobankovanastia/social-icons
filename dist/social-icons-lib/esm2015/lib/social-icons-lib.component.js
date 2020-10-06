import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Doctolib } from './doctolib';
let SocialIconsLibComponent = class SocialIconsLibComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.svg = this.sanitizer.bypassSecurityTrustHtml(Doctolib.svg);
    }
};
SocialIconsLibComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
SocialIconsLibComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'social-icon',
        template: "<div class=\"svg\" [innerHTML]=\"svg\"></div>\n"
    })
], SocialIconsLibComponent);
export { SocialIconsLibComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWljb25zLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zb2NpYWwtaWNvbnMtbGliLyIsInNvdXJjZXMiOlsibGliL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQVlwQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUlsQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBRUYsQ0FBQTs7WUFOZ0MsWUFBWTs7QUFKaEMsdUJBQXVCO0lBVm5DLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsYUFBYTtRQUN2QiwyREFBZ0Q7S0FHakQsQ0FBQztHQUlXLHVCQUF1QixDQVVuQztTQVZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0RvY3RvbGlifSBmcm9tICcuL2RvY3RvbGliJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzb2NpYWwtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2NpYWwtaWNvbnMtbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgU29jaWFsSWNvbnNMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzdmc6IFNhZmVIdG1sO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3ZnID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoRG9jdG9saWIuc3ZnKTtcbiAgfVxuXG59XG4iXX0=