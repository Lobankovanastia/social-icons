import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Doctolib } from './doctolib';
var SocialIconsLibComponent = /** @class */ (function () {
    function SocialIconsLibComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SocialIconsLibComponent.prototype.ngOnInit = function () {
        this.svg = this.sanitizer.bypassSecurityTrustHtml(Doctolib.svg);
    };
    SocialIconsLibComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SocialIconsLibComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'social-icon',
            template: "<div class=\"svg\" [innerHTML]=\"svg\"></div>\n"
        })
    ], SocialIconsLibComponent);
    return SocialIconsLibComponent;
}());
export { SocialIconsLibComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWljb25zLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zb2NpYWwtaWNvbnMtbGliLyIsInNvdXJjZXMiOlsibGliL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQVlwQztJQUlFLGlDQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUVoRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFKOEIsWUFBWTs7SUFKaEMsdUJBQXVCO1FBVm5DLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsYUFBYTtZQUN2QiwyREFBZ0Q7U0FHakQsQ0FBQztPQUlXLHVCQUF1QixDQVVuQztJQUFELDhCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7RG9jdG9saWJ9IGZyb20gJy4vZG9jdG9saWInO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NvY2lhbC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvY2lhbC1pY29ucy1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWxJY29uc0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHN2ZzogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdmcgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChEb2N0b2xpYi5zdmcpO1xuICB9XG5cbn1cbiJdfQ==