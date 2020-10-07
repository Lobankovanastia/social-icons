import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AwesomeIconsProvider } from './awesome-icons-provider.service';
import { CustomBrandsProviderService } from './custom-brands-provider.service';
let SocialIconsLibComponent = class SocialIconsLibComponent {
    constructor(sanitizer, awesomeIconsProvider, customBrandsProvider) {
        this.sanitizer = sanitizer;
        this.awesomeIconsProvider = awesomeIconsProvider;
        this.customBrandsProvider = customBrandsProvider;
    }
    ngOnInit() {
        if (this.size === undefined || this.size === null) {
            this.size = 18;
        }
        else {
            this.size = Math.round(this.size);
        }
    }
    iconExists() {
        return this.awesomeIconsProvider.hasIcon(this.brand.toLowerCase()) || this.customBrandsProvider.hasIcon(this.brand.toLowerCase());
    }
    getSvg() {
        return this.sanitizer.bypassSecurityTrustHtml(this.customBrandsProvider.getSvg(this.brand.toLowerCase(), this.size));
    }
};
SocialIconsLibComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: AwesomeIconsProvider },
    { type: CustomBrandsProviderService }
];
__decorate([
    Input()
], SocialIconsLibComponent.prototype, "brand", void 0);
__decorate([
    Input()
], SocialIconsLibComponent.prototype, "size", void 0);
SocialIconsLibComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'social-icon',
        template: "<ng-container *ngIf=\"brand != undefined\">\n  <div class=\"social-icon\" style=\"display: inline-block;\">\n    <ng-container *ngIf=\"iconExists(); else noicon\">\n        <fa-icon style=\"float: left\" *ngIf=\"awesomeIconsProvider.hasIcon(brand)\" [icon]=\"awesomeIconsProvider.icons[brand.toLowerCase()]\" [size]=\"awesomeIconsProvider.getSize(size)\" title=\"{{ brand }}\"></fa-icon>\n        <span style=\"float: left\" *ngIf=\"customBrandsProvider.hasIcon(brand.toLowerCase())\" class=\"svg\" [innerHTML]=\"getSvg()\" title=\"{{ brand }}\"></span>\n    </ng-container>\n\n    <ng-template #noicon>\n      <span class=\"undefined\" style=\"font-size: {{ size }}px; float: left;\" title=\"{{ brand }}\">{{ brand.toLowerCase()[0] }}</span>\n    </ng-template>\n    <div style=\"clear: both;\"></div>\n  </div>\n</ng-container>\n",
        styles: [".undefined{font-weight:700}.social-icon .svg{display:block;margin-bottom:-3px}"]
    })
], SocialIconsLibComponent);
export { SocialIconsLibComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWljb25zLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zb2NpYWwtaWNvbnMtbGliLyIsInNvdXJjZXMiOlsibGliL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBVzdFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUWxDLFlBQ1UsU0FBdUIsRUFDZixvQkFBMEMsRUFDMUMsb0JBQWlEO1FBRnpELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7SUFDL0QsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBdEJzQixZQUFZO1lBQ08sb0JBQW9CO1lBQ3BCLDJCQUEyQjs7QUFSbkU7SUFEQyxLQUFLLEVBQUU7c0RBQ2E7QUFHckI7SUFEQyxLQUFLLEVBQUU7cURBQ1k7QUFOVCx1QkFBdUI7SUFUbkMsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLDIwQkFBZ0Q7O0tBRWpELENBQUM7R0FJVyx1QkFBdUIsQ0ErQm5DO1NBL0JZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QXdlc29tZUljb25zUHJvdmlkZXJ9IGZyb20gJy4vYXdlc29tZS1pY29ucy1wcm92aWRlci5zZXJ2aWNlJztcbmltcG9ydCB7Q3VzdG9tQnJhbmRzUHJvdmlkZXJTZXJ2aWNlfSBmcm9tICcuL2N1c3RvbS1icmFuZHMtcHJvdmlkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc29jaWFsLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc29jaWFsLWljb25zLWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50LmNzcyddXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFNvY2lhbEljb25zTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYnJhbmQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGF3ZXNvbWVJY29uc1Byb3ZpZGVyOiBBd2Vzb21lSWNvbnNQcm92aWRlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgY3VzdG9tQnJhbmRzUHJvdmlkZXI6IEN1c3RvbUJyYW5kc1Byb3ZpZGVyU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNpemUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNpemUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IDE4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpemUgPSBNYXRoLnJvdW5kKHRoaXMuc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGljb25FeGlzdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXdlc29tZUljb25zUHJvdmlkZXIuaGFzSWNvbih0aGlzLmJyYW5kLnRvTG93ZXJDYXNlKCkpIHx8IHRoaXMuY3VzdG9tQnJhbmRzUHJvdmlkZXIuaGFzSWNvbih0aGlzLmJyYW5kLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgZ2V0U3ZnKCk6IFNhZmVIdG1se1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuY3VzdG9tQnJhbmRzUHJvdmlkZXIuZ2V0U3ZnKHRoaXMuYnJhbmQudG9Mb3dlckNhc2UoKSwgdGhpcy5zaXplKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==