import { Injectable } from '@angular/core';
import {CustomBrandInterface} from './custom-brand.interface';
import {Doctolib} from './custom/doctolib';
import {Sanego} from './custom/sanego';
import {Doctena} from './custom/doctena';
import {IconsSourceInterface} from './icons-source.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomBrandsProviderService implements IconsSourceInterface{

  readonly providers: {[key: string]: CustomBrandInterface};

  constructor() {
    const doctolib = new Doctolib();
    const sanego = new Sanego();
    const doctena = new Doctena();
    const providers = {};
    providers[doctolib.name] = doctolib;
    providers[sanego.name] = sanego;
    providers[doctena.name] = doctena;
    this.providers = providers;
  }

  hasIcon(provider: string): boolean {
    return this.providers.hasOwnProperty(provider);
  }

  getSvg(provider: string, size: number): string | null{
    return this.hasIcon(provider.toLowerCase()) ? this.providers[provider.toLowerCase()].getSvg(Math.round(size)) : null;
  }
}
