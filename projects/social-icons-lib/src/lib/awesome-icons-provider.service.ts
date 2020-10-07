import {Injectable} from '@angular/core';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faVk,
  faWeibo,
  faTencentWeibo,
  faYoutube,
  faTelegram,
  faWhatsapp,
  faQq,
  faTumblr,
  faYelp,
  faSnapchat,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import {IconsSourceInterface} from './icons-source.interface';

type SocialNetworkIcon = 'facebook' |
  'linkedin' |
  'twitter' |
  'instagram' |
  'vk' |
  'weibo' |
  'tencent' |
  'youtube' |
  'telegram' |
  'whatsapp' |
  'qq' |
  'tumblr' |
  'yelp' |
  'snapchat';

@Injectable({
  providedIn: 'root'
})
export class AwesomeIconsProvider implements IconsSourceInterface{

  public readonly icons: Record<SocialNetworkIcon, IconDefinition> = {
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

  hasIcon(provider: string): boolean {
    return this.icons[provider.toLowerCase()] !== undefined;
  }

  getSize(size: number): string {
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
}
