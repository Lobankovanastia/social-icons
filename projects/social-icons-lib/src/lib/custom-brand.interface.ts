export interface CustomBrandInterface {
  readonly name: string;
  getSvg(sizeInPX: number): string;
}
