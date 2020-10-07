import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Doctolib } from './custom/doctolib';
import { Sanego } from './custom/sanego';
import { Doctena } from './custom/doctena';
import * as i0 from "@angular/core";
var CustomBrandsProviderService = /** @class */ (function () {
    function CustomBrandsProviderService() {
        var doctolib = new Doctolib();
        var sanego = new Sanego();
        var doctena = new Doctena();
        var providers = {};
        providers[doctolib.name] = doctolib;
        providers[sanego.name] = sanego;
        providers[doctena.name] = doctena;
        this.providers = providers;
    }
    CustomBrandsProviderService.prototype.hasIcon = function (provider) {
        return this.providers.hasOwnProperty(provider);
    };
    CustomBrandsProviderService.prototype.getSvg = function (provider, size) {
        return this.hasIcon(provider.toLowerCase()) ? this.providers[provider.toLowerCase()].getSvg(Math.round(size)) : null;
    };
    CustomBrandsProviderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomBrandsProviderService_Factory() { return new CustomBrandsProviderService(); }, token: CustomBrandsProviderService, providedIn: "root" });
    CustomBrandsProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CustomBrandsProviderService);
    return CustomBrandsProviderService;
}());
export { CustomBrandsProviderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJyYW5kcy1wcm92aWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc29jaWFsLWljb25zLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYnJhbmRzLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7O0FBTXpDO0lBSUU7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDNUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELDZDQUFPLEdBQVAsVUFBUSxRQUFnQjtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw0Q0FBTSxHQUFOLFVBQU8sUUFBZ0IsRUFBRSxJQUFZO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkgsQ0FBQzs7SUFyQlUsMkJBQTJCO1FBSHZDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVywyQkFBMkIsQ0FzQnZDO3NDQWhDRDtDQWdDQyxBQXRCRCxJQXNCQztTQXRCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0N1c3RvbUJyYW5kSW50ZXJmYWNlfSBmcm9tICcuL2N1c3RvbS1icmFuZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtEb2N0b2xpYn0gZnJvbSAnLi9jdXN0b20vZG9jdG9saWInO1xuaW1wb3J0IHtTYW5lZ299IGZyb20gJy4vY3VzdG9tL3NhbmVnbyc7XG5pbXBvcnQge0RvY3RlbmF9IGZyb20gJy4vY3VzdG9tL2RvY3RlbmEnO1xuaW1wb3J0IHtJY29uc1NvdXJjZUludGVyZmFjZX0gZnJvbSAnLi9pY29ucy1zb3VyY2UuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQnJhbmRzUHJvdmlkZXJTZXJ2aWNlIGltcGxlbWVudHMgSWNvbnNTb3VyY2VJbnRlcmZhY2V7XG5cbiAgcmVhZG9ubHkgcHJvdmlkZXJzOiB7W2tleTogc3RyaW5nXTogQ3VzdG9tQnJhbmRJbnRlcmZhY2V9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRvY3RvbGliID0gbmV3IERvY3RvbGliKCk7XG4gICAgY29uc3Qgc2FuZWdvID0gbmV3IFNhbmVnbygpO1xuICAgIGNvbnN0IGRvY3RlbmEgPSBuZXcgRG9jdGVuYSgpO1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IHt9O1xuICAgIHByb3ZpZGVyc1tkb2N0b2xpYi5uYW1lXSA9IGRvY3RvbGliO1xuICAgIHByb3ZpZGVyc1tzYW5lZ28ubmFtZV0gPSBzYW5lZ287XG4gICAgcHJvdmlkZXJzW2RvY3RlbmEubmFtZV0gPSBkb2N0ZW5hO1xuICAgIHRoaXMucHJvdmlkZXJzID0gcHJvdmlkZXJzO1xuICB9XG5cbiAgaGFzSWNvbihwcm92aWRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmhhc093blByb3BlcnR5KHByb3ZpZGVyKTtcbiAgfVxuXG4gIGdldFN2Zyhwcm92aWRlcjogc3RyaW5nLCBzaXplOiBudW1iZXIpOiBzdHJpbmcgfCBudWxse1xuICAgIHJldHVybiB0aGlzLmhhc0ljb24ocHJvdmlkZXIudG9Mb3dlckNhc2UoKSkgPyB0aGlzLnByb3ZpZGVyc1twcm92aWRlci50b0xvd2VyQ2FzZSgpXS5nZXRTdmcoTWF0aC5yb3VuZChzaXplKSkgOiBudWxsO1xuICB9XG59XG4iXX0=