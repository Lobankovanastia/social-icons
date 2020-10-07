import { CustomBrandInterface } from './custom-brand.interface';
import { IconsSourceInterface } from './icons-source.interface';
export declare class CustomBrandsProviderService implements IconsSourceInterface {
    readonly providers: {
        [key: string]: CustomBrandInterface;
    };
    constructor();
    hasIcon(provider: string): boolean;
    getSvg(provider: string, size: number): string | null;
}
