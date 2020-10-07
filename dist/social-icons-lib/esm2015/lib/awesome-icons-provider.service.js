import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faVk, faWeibo, faTencentWeibo, faYoutube, faTelegram, faWhatsapp, faQq, faTumblr, faYelp, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import * as i0 from "@angular/core";
let AwesomeIconsProvider = class AwesomeIconsProvider {
    constructor() {
        this.icons = {
            facebook: faFacebook,
            linkedin: faLinkedin,
            twitter: faTwitter,
            instagram: faInstagram,
            vk: faVk,
            weibo: faWeibo,
            tencent: faTencentWeibo,
            youtube: faYoutube,
            telegram: faTelegram,
            whatsapp: faWhatsapp,
            qq: faQq,
            tumblr: faTumblr,
            yelp: faYelp,
            snapchat: faSnapchat
        };
    }
    hasIcon(provider) {
        return this.icons[provider.toLowerCase()] !== undefined;
    }
    getSize(size) {
        switch (true) {
            case size <= 13:
                return 'xs';
            case size <= 15:
                return 'sm';
            case size <= 19:
                return '1x';
            case size <= 27:
                return 'lg';
            case size <= 40:
                return '2x';
            case size <= 56:
                return '3x';
            case size <= 72:
                return '4x';
            case size <= 88:
                return '5x';
            case size <= 104:
                return '6x';
            case size <= 120:
                return '7x';
            case size <= 136:
                return '8x';
            case size <= 152:
                return '9x';
            case size > 152:
                return '10x';
        }
        return 'sm';
    }
};
AwesomeIconsProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function AwesomeIconsProvider_Factory() { return new AwesomeIconsProvider(); }, token: AwesomeIconsProvider, providedIn: "root" });
AwesomeIconsProvider = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AwesomeIconsProvider);
export { AwesomeIconsProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdlc29tZS1pY29ucy1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc29jaWFsLWljb25zLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hd2Vzb21lLWljb25zLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxJQUFJLEVBQ0osT0FBTyxFQUNQLGNBQWMsRUFDZCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixVQUFVLEVBRVgsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFxQjVDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBRWtCLFVBQUssR0FBOEM7WUFDakUsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsRUFBRSxFQUFFLElBQUk7WUFDUixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEVBQUUsRUFBRSxJQUFJO1lBQ1IsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO0tBc0NIO0lBcENDLE9BQU8sQ0FBQyxRQUFnQjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQzFELENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEdBQUc7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxHQUFHLEdBQUc7Z0JBQ2IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztBQXZEWSxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQXVEaEM7U0F2RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGZhRmFjZWJvb2ssXG4gIGZhTGlua2VkaW4sXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG4gIGZhVmssXG4gIGZhV2VpYm8sXG4gIGZhVGVuY2VudFdlaWJvLFxuICBmYVlvdXR1YmUsXG4gIGZhVGVsZWdyYW0sXG4gIGZhV2hhdHNhcHAsXG4gIGZhUXEsXG4gIGZhVHVtYmxyLFxuICBmYVllbHAsXG4gIGZhU25hcGNoYXQsXG4gIEljb25EZWZpbml0aW9uXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHtJY29uc1NvdXJjZUludGVyZmFjZX0gZnJvbSAnLi9pY29ucy1zb3VyY2UuaW50ZXJmYWNlJztcblxudHlwZSBTb2NpYWxOZXR3b3JrSWNvbiA9ICdmYWNlYm9vaycgfFxuICAnbGlua2VkaW4nIHxcbiAgJ3R3aXR0ZXInIHxcbiAgJ2luc3RhZ3JhbScgfFxuICAndmsnIHxcbiAgJ3dlaWJvJyB8XG4gICd0ZW5jZW50JyB8XG4gICd5b3V0dWJlJyB8XG4gICd0ZWxlZ3JhbScgfFxuICAnd2hhdHNhcHAnIHxcbiAgJ3FxJyB8XG4gICd0dW1ibHInIHxcbiAgJ3llbHAnIHxcbiAgJ3NuYXBjaGF0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXdlc29tZUljb25zUHJvdmlkZXIgaW1wbGVtZW50cyBJY29uc1NvdXJjZUludGVyZmFjZXtcblxuICBwdWJsaWMgcmVhZG9ubHkgaWNvbnM6IFJlY29yZDxTb2NpYWxOZXR3b3JrSWNvbiwgSWNvbkRlZmluaXRpb24+ID0ge1xuICAgIGZhY2Vib29rOiBmYUZhY2Vib29rLFxuICAgIGxpbmtlZGluOiBmYUxpbmtlZGluLFxuICAgIHR3aXR0ZXI6IGZhVHdpdHRlcixcbiAgICBpbnN0YWdyYW06IGZhSW5zdGFncmFtLFxuICAgIHZrOiBmYVZrLFxuICAgIHdlaWJvOiBmYVdlaWJvLFxuICAgIHRlbmNlbnQ6IGZhVGVuY2VudFdlaWJvLFxuICAgIHlvdXR1YmU6IGZhWW91dHViZSxcbiAgICB0ZWxlZ3JhbTogZmFUZWxlZ3JhbSxcbiAgICB3aGF0c2FwcDogZmFXaGF0c2FwcCxcbiAgICBxcTogZmFRcSxcbiAgICB0dW1ibHI6IGZhVHVtYmxyLFxuICAgIHllbHA6IGZhWWVscCxcbiAgICBzbmFwY2hhdDogZmFTbmFwY2hhdFxuICB9O1xuXG4gIGhhc0ljb24ocHJvdmlkZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25zW3Byb3ZpZGVyLnRvTG93ZXJDYXNlKCldICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTaXplKHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHNpemUgPD0gMTM6XG4gICAgICAgIHJldHVybiAneHMnO1xuICAgICAgY2FzZSBzaXplIDw9IDE1OlxuICAgICAgICByZXR1cm4gJ3NtJztcbiAgICAgIGNhc2Ugc2l6ZSA8PSAxOTpcbiAgICAgICAgcmV0dXJuICcxeCc7XG4gICAgICBjYXNlIHNpemUgPD0gMjc6XG4gICAgICAgIHJldHVybiAnbGcnO1xuICAgICAgY2FzZSBzaXplIDw9IDQwOlxuICAgICAgICByZXR1cm4gJzJ4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSA1NjpcbiAgICAgICAgcmV0dXJuICczeCc7XG4gICAgICBjYXNlIHNpemUgPD0gNzI6XG4gICAgICAgIHJldHVybiAnNHgnO1xuICAgICAgY2FzZSBzaXplIDw9IDg4OlxuICAgICAgICByZXR1cm4gJzV4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSAxMDQ6XG4gICAgICAgIHJldHVybiAnNngnO1xuICAgICAgY2FzZSBzaXplIDw9IDEyMDpcbiAgICAgICAgcmV0dXJuICc3eCc7XG4gICAgICBjYXNlIHNpemUgPD0gMTM2OlxuICAgICAgICByZXR1cm4gJzh4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSAxNTI6XG4gICAgICAgIHJldHVybiAnOXgnO1xuICAgICAgY2FzZSBzaXplID4gMTUyOlxuICAgICAgICByZXR1cm4gJzEweCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzbSc7XG4gIH1cbn1cbiJdfQ==