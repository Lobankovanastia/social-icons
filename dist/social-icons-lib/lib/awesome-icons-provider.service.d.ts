import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconsSourceInterface } from './icons-source.interface';
declare type SocialNetworkIcon = 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'vk' | 'weibo' | 'tencent' | 'youtube' | 'telegram' | 'whatsapp' | 'qq' | 'tumblr' | 'yelp' | 'snapchat';
export declare class AwesomeIconsProvider implements IconsSourceInterface {
    readonly icons: Record<SocialNetworkIcon, IconDefinition>;
    hasIcon(provider: string): boolean;
    getSize(size: number): string;
}
export {};
