import { CustomBrandInterface } from '../custom-brand.interface';
export declare class Doctolib implements CustomBrandInterface {
    readonly name = "doctolib";
    getSvg(sizeInPX: number): string;
}
