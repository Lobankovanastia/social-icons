import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faVk, faWeibo, faTencentWeibo, faYoutube, faTelegram, faWhatsapp, faQq, faTumblr, faYelp, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import * as i0 from "@angular/core";
var AwesomeIconsProvider = /** @class */ (function () {
    function AwesomeIconsProvider() {
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
    AwesomeIconsProvider.prototype.hasIcon = function (provider) {
        return this.icons[provider.toLowerCase()] !== undefined;
    };
    AwesomeIconsProvider.prototype.getSize = function (size) {
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
    };
    AwesomeIconsProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function AwesomeIconsProvider_Factory() { return new AwesomeIconsProvider(); }, token: AwesomeIconsProvider, providedIn: "root" });
    AwesomeIconsProvider = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AwesomeIconsProvider);
    return AwesomeIconsProvider;
}());
export { AwesomeIconsProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdlc29tZS1pY29ucy1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc29jaWFsLWljb25zLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hd2Vzb21lLWljb25zLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxJQUFJLEVBQ0osT0FBTyxFQUNQLGNBQWMsRUFDZCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixVQUFVLEVBRVgsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFxQjVDO0lBQUE7UUFFa0IsVUFBSyxHQUE4QztZQUNqRSxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsV0FBVztZQUN0QixFQUFFLEVBQUUsSUFBSTtZQUNSLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLGNBQWM7WUFDdkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsRUFBRSxFQUFFLElBQUk7WUFDUixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7S0FzQ0g7SUFwQ0Msc0NBQU8sR0FBUCxVQUFRLFFBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLElBQUksR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssSUFBSSxJQUFJLEdBQUc7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLElBQUksSUFBSSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxJQUFJLEdBQUcsR0FBRztnQkFDYixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7SUF0RFUsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0F1RGhDOytCQTdGRDtDQTZGQyxBQXZERCxJQXVEQztTQXZEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFMaW5rZWRpbixcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbiAgZmFWayxcbiAgZmFXZWlibyxcbiAgZmFUZW5jZW50V2VpYm8sXG4gIGZhWW91dHViZSxcbiAgZmFUZWxlZ3JhbSxcbiAgZmFXaGF0c2FwcCxcbiAgZmFRcSxcbiAgZmFUdW1ibHIsXG4gIGZhWWVscCxcbiAgZmFTbmFwY2hhdCxcbiAgSWNvbkRlZmluaXRpb25cbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQge0ljb25zU291cmNlSW50ZXJmYWNlfSBmcm9tICcuL2ljb25zLXNvdXJjZS5pbnRlcmZhY2UnO1xuXG50eXBlIFNvY2lhbE5ldHdvcmtJY29uID0gJ2ZhY2Vib29rJyB8XG4gICdsaW5rZWRpbicgfFxuICAndHdpdHRlcicgfFxuICAnaW5zdGFncmFtJyB8XG4gICd2aycgfFxuICAnd2VpYm8nIHxcbiAgJ3RlbmNlbnQnIHxcbiAgJ3lvdXR1YmUnIHxcbiAgJ3RlbGVncmFtJyB8XG4gICd3aGF0c2FwcCcgfFxuICAncXEnIHxcbiAgJ3R1bWJscicgfFxuICAneWVscCcgfFxuICAnc25hcGNoYXQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBd2Vzb21lSWNvbnNQcm92aWRlciBpbXBsZW1lbnRzIEljb25zU291cmNlSW50ZXJmYWNle1xuXG4gIHB1YmxpYyByZWFkb25seSBpY29uczogUmVjb3JkPFNvY2lhbE5ldHdvcmtJY29uLCBJY29uRGVmaW5pdGlvbj4gPSB7XG4gICAgZmFjZWJvb2s6IGZhRmFjZWJvb2ssXG4gICAgbGlua2VkaW46IGZhTGlua2VkaW4sXG4gICAgdHdpdHRlcjogZmFUd2l0dGVyLFxuICAgIGluc3RhZ3JhbTogZmFJbnN0YWdyYW0sXG4gICAgdms6IGZhVmssXG4gICAgd2VpYm86IGZhV2VpYm8sXG4gICAgdGVuY2VudDogZmFUZW5jZW50V2VpYm8sXG4gICAgeW91dHViZTogZmFZb3V0dWJlLFxuICAgIHRlbGVncmFtOiBmYVRlbGVncmFtLFxuICAgIHdoYXRzYXBwOiBmYVdoYXRzYXBwLFxuICAgIHFxOiBmYVFxLFxuICAgIHR1bWJscjogZmFUdW1ibHIsXG4gICAgeWVscDogZmFZZWxwLFxuICAgIHNuYXBjaGF0OiBmYVNuYXBjaGF0XG4gIH07XG5cbiAgaGFzSWNvbihwcm92aWRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbnNbcHJvdmlkZXIudG9Mb3dlckNhc2UoKV0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNpemUoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Ugc2l6ZSA8PSAxMzpcbiAgICAgICAgcmV0dXJuICd4cyc7XG4gICAgICBjYXNlIHNpemUgPD0gMTU6XG4gICAgICAgIHJldHVybiAnc20nO1xuICAgICAgY2FzZSBzaXplIDw9IDE5OlxuICAgICAgICByZXR1cm4gJzF4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSAyNzpcbiAgICAgICAgcmV0dXJuICdsZyc7XG4gICAgICBjYXNlIHNpemUgPD0gNDA6XG4gICAgICAgIHJldHVybiAnMngnO1xuICAgICAgY2FzZSBzaXplIDw9IDU2OlxuICAgICAgICByZXR1cm4gJzN4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSA3MjpcbiAgICAgICAgcmV0dXJuICc0eCc7XG4gICAgICBjYXNlIHNpemUgPD0gODg6XG4gICAgICAgIHJldHVybiAnNXgnO1xuICAgICAgY2FzZSBzaXplIDw9IDEwNDpcbiAgICAgICAgcmV0dXJuICc2eCc7XG4gICAgICBjYXNlIHNpemUgPD0gMTIwOlxuICAgICAgICByZXR1cm4gJzd4JztcbiAgICAgIGNhc2Ugc2l6ZSA8PSAxMzY6XG4gICAgICAgIHJldHVybiAnOHgnO1xuICAgICAgY2FzZSBzaXplIDw9IDE1MjpcbiAgICAgICAgcmV0dXJuICc5eCc7XG4gICAgICBjYXNlIHNpemUgPiAxNTI6XG4gICAgICAgIHJldHVybiAnMTB4JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3NtJztcbiAgfVxufVxuIl19