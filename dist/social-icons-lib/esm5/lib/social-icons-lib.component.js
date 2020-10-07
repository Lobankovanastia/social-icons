import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AwesomeIconsProvider } from './awesome-icons-provider.service';
import { CustomBrandsProviderService } from './custom-brands-provider.service';
var SocialIconsLibComponent = /** @class */ (function () {
    function SocialIconsLibComponent(sanitizer, awesomeIconsProvider, customBrandsProvider) {
        this.sanitizer = sanitizer;
        this.awesomeIconsProvider = awesomeIconsProvider;
        this.customBrandsProvider = customBrandsProvider;
    }
    SocialIconsLibComponent.prototype.ngOnInit = function () {
        if (this.size === undefined || this.size === null) {
            this.size = 18;
        }
        else {
            this.size = Math.round(this.size);
        }
    };
    SocialIconsLibComponent.prototype.iconExists = function () {
        return this.awesomeIconsProvider.hasIcon(this.brand) || this.customBrandsProvider.hasIcon(this.brand);
    };
    SocialIconsLibComponent.prototype.getSvg = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.customBrandsProvider.getSvg(this.brand.toLowerCase(), this.size));
    };
    SocialIconsLibComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: AwesomeIconsProvider },
        { type: CustomBrandsProviderService }
    ]; };
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
    return SocialIconsLibComponent;
}());
export { SocialIconsLibComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWljb25zLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zb2NpYWwtaWNvbnMtbGliLyIsInNvdXJjZXMiOlsibGliL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBVzdFO0lBUUUsaUNBQ1UsU0FBdUIsRUFDZixvQkFBMEMsRUFDMUMsb0JBQWlEO1FBRnpELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7SUFDL0QsQ0FBQztJQUVMLDBDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVNLDRDQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7O2dCQXJCb0IsWUFBWTtnQkFDTyxvQkFBb0I7Z0JBQ3BCLDJCQUEyQjs7SUFSbkU7UUFEQyxLQUFLLEVBQUU7MERBQ2E7SUFHckI7UUFEQyxLQUFLLEVBQUU7eURBQ1k7SUFOVCx1QkFBdUI7UUFUbkMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLDIwQkFBZ0Q7O1NBRWpELENBQUM7T0FJVyx1QkFBdUIsQ0ErQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0F3ZXNvbWVJY29uc1Byb3ZpZGVyfSBmcm9tICcuL2F3ZXNvbWUtaWNvbnMtcHJvdmlkZXIuc2VydmljZSc7XG5pbXBvcnQge0N1c3RvbUJyYW5kc1Byb3ZpZGVyU2VydmljZX0gZnJvbSAnLi9jdXN0b20tYnJhbmRzLXByb3ZpZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NvY2lhbC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2NpYWwtaWNvbnMtbGliLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWxJY29uc0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJyYW5kOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHB1YmxpYyByZWFkb25seSBhd2Vzb21lSWNvbnNQcm92aWRlcjogQXdlc29tZUljb25zUHJvdmlkZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGN1c3RvbUJyYW5kc1Byb3ZpZGVyOiBDdXN0b21CcmFuZHNQcm92aWRlclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaXplID09PSB1bmRlZmluZWQgfHwgdGhpcy5zaXplID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNpemUgPSAxODtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaXplID0gTWF0aC5yb3VuZCh0aGlzLnNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpY29uRXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmF3ZXNvbWVJY29uc1Byb3ZpZGVyLmhhc0ljb24odGhpcy5icmFuZCkgfHwgdGhpcy5jdXN0b21CcmFuZHNQcm92aWRlci5oYXNJY29uKHRoaXMuYnJhbmQpO1xuICB9XG5cbiAgZ2V0U3ZnKCk6IFNhZmVIdG1se1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuY3VzdG9tQnJhbmRzUHJvdmlkZXIuZ2V0U3ZnKHRoaXMuYnJhbmQudG9Mb3dlckNhc2UoKSwgdGhpcy5zaXplKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==