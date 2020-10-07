import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faVk, faWeibo, faTencentWeibo, faYoutube, faTelegram, faWhatsapp, faQq, faTumblr, faYelp, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

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
    AwesomeIconsProvider.ɵprov = ɵɵdefineInjectable({ factory: function AwesomeIconsProvider_Factory() { return new AwesomeIconsProvider(); }, token: AwesomeIconsProvider, providedIn: "root" });
    AwesomeIconsProvider = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AwesomeIconsProvider);
    return AwesomeIconsProvider;
}());

var Doctolib = /** @class */ (function () {
    function Doctolib() {
        this.name = 'doctolib';
    }
    Doctolib.prototype.getSvg = function (sizeInPX) {
        return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
            '<!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n' +
            '\n' +
            '<svg\n' +
            '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
            '   xmlns:cc="http://creativecommons.org/ns#"\n' +
            '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
            '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
            '   xmlns="http://www.w3.org/2000/svg"\n' +
            '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
            '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
            '   version="1.1"\n' +
            '   id="Calque_1"\n' +
            '   x="0px"\n' +
            '   y="0px"\n' +
            '   viewBox="0 0 135.05391 135.05391"\n' +
            '   enable-background="new 0 0 685 327"\n' +
            '   xml:space="preserve"\n' +
            '   sodipodi:docname="doctolib.svg"\n' +
            '   width="' + sizeInPX + 'px"\n' +
            '   height="' + sizeInPX + 'px"\n' +
            '   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"><metadata\n' +
            '   id="metadata39"><rdf:RDF><cc:Work\n' +
            '       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type\n' +
            '         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\n' +
            '   id="defs37">\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '</defs><sodipodi:namedview\n' +
            '   pagecolor="#ffffff"\n' +
            '   bordercolor="#666666"\n' +
            '   borderopacity="1"\n' +
            '   objecttolerance="10"\n' +
            '   gridtolerance="10"\n' +
            '   guidetolerance="10"\n' +
            '   inkscape:pageopacity="0"\n' +
            '   inkscape:pageshadow="2"\n' +
            '   inkscape:window-width="1920"\n' +
            '   inkscape:window-height="1017"\n' +
            '   id="namedview35"\n' +
            '   showgrid="false"\n' +
            '   inkscape:zoom="2.4838561"\n' +
            '   inkscape:cx="113.58992"\n' +
            '   inkscape:cy="18.576024"\n' +
            '   inkscape:window-x="0"\n' +
            '   inkscape:window-y="0"\n' +
            '   inkscape:window-maximized="1"\n' +
            '   inkscape:current-layer="Calque_1" />\n' +
            '<path\n' +
            '   style="fill:#000000"\n' +
            '   inkscape:connector-curvature="0"\n' +
            '   id="path26"\n' +
            '   d="m 16.065685,68.01944 c 0,0 -0.1,0.3 -0.4,0.9 -0.3,0.6 -0.6,1.4 -1,2.4 -0.8,2.1 -1.9,5.2 -2.4,8.9 -0.2,1.9 -0.4,3.9 -0.3,6 0,1.1 0.1,2.2 0.3,3.3 0.1,0.6 0.1,1.1 0.2,1.3 0.1,0.4 0.2,0.8 0.4,1.3 1.2,3.500001 4.9,7.700001 10,11.4 5.1,3.7 11.5,7.2 18.5,10.6 7,3.3 15,6.5 23.7,7.8 4.4,0.6 8.9,0.7 13.4,0.1 2.2,-0.3 4.5,-0.8 6.7,-1.4 2.2,-0.7 4.3,-1.5 6.4,-2.5 4.1,-2 7.8,-4.8 10.900005,-8.1 3,-3.3 5.4,-7.2 7.2,-11.299999 0.9,-2 1.6,-4.1 2.3,-6.200001 0.6,-2.1 1.1,-4.2 1.7,-6.7 0.1,-0.6 0.3,-1.2 0.4,-1.8 l 0.4,-1.7 c 0.2,-1.1 0.5,-2.2 0.7,-3.3 0.2,-1.1 0.5,-2.3 0.7,-3.4 0.2,-1.1 0.4,-2.2 0.6,-3.3 1.5,-8.9 1.8,-17.6 0.4,-25 -0.7,-3.7 -1.9,-7 -3.4,-9.8 -0.8,-1.4 -1.7,-2.7 -2.6,-4 -1,-1.2 -2,-2.4 -3.2,-3.4 -4.7,-4.2 -11.000005,-7.1 -17.300005,-8.9 -6.4,-1.8 -12.7,-2.8 -18.4,-3.4 -5.7,-0.6 -10.8,-0.8 -15.1,-0.9 -4.2,-0.1 -7.6,-0.1 -9.9,-0.1 -2.3,0 -3.5,0 -3.5,0 h -0.9 l -0.3,-1.2 0.8,-0.4 c 0,0 1.1,-0.6 3.3,-1.5 2.2,-0.9 5.4,-2.2 9.7,-3.4 4.2,-1.3000004 9.5,-2.5000004 15.7,-3.4000004 6.2,-0.8 13.4,-1.3 21.5,-0.3 4,0.5 8.300005,1.3 12.700005,2.9 1.1,0.4 2.2,0.8000004 3.3,1.3000004 1.1,0.5 2.2,1 3.3,1.6 2.2,1.1 4.4,2.5 6.4,4.1 2.1,1.6 4,3.5 5.9,5.5 1.8,2.1 3.4,4.4 4.7,6.8 1.3,2.5 2.5,5 3.2,7.7 0.5,1.3 0.7,2.7 1.1,4 0.3,1.3 0.5,2.7 0.7,4 0.7,5.4 0.6,10.7 0,15.9 -0.6,5.2 -1.7,10.3 -3,15.2 -0.4,1.2 -0.7,2.5 -1.1,3.7 -0.4,1.2 -0.8,2.4 -1.2,3.6 -0.4,1.2 -0.9,2.4 -1.4,3.6 l -0.7,1.8 c -0.2,0.6 -0.5,1.1 -0.7,1.7 l -1.5,3.5 c -0.6,1.200001 -1.2,2.400001 -1.8,3.600001 -1.3,2.4 -2.7,4.699999 -4.4,6.799999 -3.2,4.3 -7.1,8.2 -11.3,11.3 -4.2,3.2 -8.800005,5.7 -13.500005,7.6 -1.2,0.5 -2.4,0.9 -3.5,1.3 -1.2,0.4 -2.4,0.8 -3.6,1.1 -2.4,0.7 -4.8,1.3 -7.2,1.7 -4.8,1 -9.7,1.6 -14.5,1.9 -9.6,0.6 -19.2,0.1 -28,-2.1 -8.8,-2.2 -16.8,-6.2 -23.2,-11.6 -3.3,-2.6 -6.0999996,-5.6 -8.4999996,-8.9 -2.3,-3.3 -4.2,-7.099999 -4.99999998,-11.199999 -0.2,-1 -0.3,-2.000001 -0.4,-3.100001 -0.1,-1.2 -0.1,-2.1 0.1,-2.9 0.1,-0.8 0.2,-1.6 0.4,-2.4 0.1,-0.8 0.3,-1.5 0.49999998,-2.3 0.8,-3 1.9,-5.5 3.2,-7.7 2.6,-4.3 5.5,-6.8 7.5999996,-8.2 0.5,-0.4 1,-0.7 1.4,-0.9 0.4,-0.3 0.8,-0.4 1,-0.6 0.6,-0.3 0.9,-0.4 0.9,-0.4 l 0.8,-0.4 0.8,0.7 z" /><g\n' +
            '   id="g30"\n' +
            '   transform="translate(-136.23431,-96.080557)"\n' +
            '   style="fill:#000000">\n' +
            '\t\t<path\n' +
            '   style="fill:#000000"\n' +
            '   inkscape:connector-curvature="0"\n' +
            '   id="path28"\n' +
            '   d="m 209.6,132.8 c -3.7,18.7 -7.3,37.3 -11,56 -1.2,6.1 11.5,-1 12.4,-5.1 3.7,-18.7 7.3,-37.3 11,-56 1.1,-6.2 -11.6,0.9 -12.4,5.1 z" />\n' +
            '\t</g>\n' +
            '</svg>';
    };
    return Doctolib;
}());

var Sanego = /** @class */ (function () {
    function Sanego() {
        this.name = 'sanego';
    }
    Sanego.prototype.getSvg = function (sizeInPX) {
        return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
            '<!-- Created with Inkscape (http://www.inkscape.org/) -->\n' +
            '\n' +
            '<svg\n' +
            '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
            '   xmlns:cc="http://creativecommons.org/ns#"\n' +
            '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
            '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
            '   xmlns="http://www.w3.org/2000/svg"\n' +
            '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
            '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
            '   width="' + sizeInPX + 'px"\n' +
            '   height="' + sizeInPX + 'px"\n' +
            '   viewBox="0 0 103.654 103.654"\n' +
            '   version="1.1"\n' +
            '   id="svg833"\n' +
            '   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"\n' +
            '   sodipodi:docname="sanego.svg">\n' +
            '  <defs\n' +
            '     id="defs827" />\n' +
            '  <sodipodi:namedview\n' +
            '     id="base"\n' +
            '     pagecolor="#ffffff"\n' +
            '     bordercolor="#666666"\n' +
            '     borderopacity="1.0"\n' +
            '     inkscape:pageopacity="0.0"\n' +
            '     inkscape:pageshadow="2"\n' +
            '     inkscape:zoom="0.35"\n' +
            '     inkscape:cx="-938.23909"\n' +
            '     inkscape:cy="527.31021"\n' +
            '     inkscape:document-units="mm"\n' +
            '     inkscape:current-layer="layer1"\n' +
            '     showgrid="false"\n' +
            '     inkscape:window-width="1920"\n' +
            '     inkscape:window-height="1017"\n' +
            '     inkscape:window-x="0"\n' +
            '     inkscape:window-y="0"\n' +
            '     inkscape:window-maximized="1" />\n' +
            '  <metadata\n' +
            '     id="metadata830">\n' +
            '    <rdf:RDF>\n' +
            '      <cc:Work\n' +
            '         rdf:about="">\n' +
            '        <dc:format>image/svg+xml</dc:format>\n' +
            '        <dc:type\n' +
            '           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n' +
            '        <dc:title />\n' +
            '      </cc:Work>\n' +
            '    </rdf:RDF>\n' +
            '  </metadata>\n' +
            '  <g\n' +
            '     inkscape:label="Layer 1"\n' +
            '     inkscape:groupmode="layer"\n' +
            '     id="layer1"\n' +
            '     transform="translate(-59.254329,-93.98254)">\n' +
            '    <path\n' +
            '       style="fill:#000000;fill-rule:evenodd;stroke:none;stroke-width:0.26458332"\n' +
            '       inkscape:connector-curvature="0"\n' +
            '       d="M142.53734 117.23727L142.46674 118.12309L142.26831 119.56057L141.99182 120.87079L141.81243 121.68438L141.56637 122.63821L141.25707 123.78253L141.09117 124.36329L140.89115 124.9541L140.61651 125.7288L140.39902 126.23151L140.1863 126.62098L139.92674 127.16787L139.66269 127.73488L138.92397 129.02895L138.76258 129.34645L138.49799 129.80365L138.23341 130.24048L138.06857 130.50665L137.74525 130.96941L137.0068 132.24787L136.71946 132.75058L136.54352 132.93579L136.43424 133.08634L136.16966 133.55148L135.90508 133.94756L135.29653 134.67357L135.05841 135.02362L133.97362 136.15365L132.67346 137.38502L132.39114 137.59246L131.86568 138.01367L131.14258 138.65105L129.46009 139.92079L129.34341 140.01259L127.55853 141.32148L125.96786 142.20016L125.45747 142.52163L125.17596 142.67245L124.68674 142.93703L124.04751 143.20161L123.57549 143.41328L123.15163 143.62495L122.42138 143.88953L121.63557 144.15411L121.12201 144.3118L120.33117 144.58935L119.50091 144.83991L118.72409 145.03809L117.73164 145.31749L116.85825 145.52995L115.83987 145.75299L107.38299 145.79189L105.58383 145.52387L102.30299 144.88252L101.45633 144.61264L100.76021 144.30255L100.27152 144.15412L99.679909 143.94139L99.089099 143.6649L98.587709 143.40111L98.227349 143.20162L97.762209 142.93704L97.286759 142.67245L96.852579 142.46079L96.413099 142.24912L96.029189 142.06391L95.473569 141.69217L93.046809 140.05043L92.558119 139.6562L92.036629 139.20641L91.724689 138.96829L88.497029 135.8462L87.803559 134.99954L86.163409 132.93605L85.216469 131.64912L84.999239 131.20303L84.796309 130.92945L84.525639 130.51353L84.252319 130.01981L84.046739 129.73327L83.782159 129.31814L83.517579 128.79691L83.363849 128.531L83.093979 128.11958L82.824369 127.63962L82.670909 127.33932L82.406329 126.66913L82.141739 126.0082L81.930079 125.44914L81.718409 124.83954L81.516799 124.24846L81.238189 123.24463L80.963819 122.11036L80.761149 120.99911L80.591019 119.9712L80.325379 118.54245L79.858389 117.33595L79.280269 117.82675L77.815009 119.73175L77.473169 120.10217L75.341159 122.5112L74.666729 123.41079L72.952759 125.37743L71.029239 127.49648L69.717969 129.03054L68.171739 130.76938L67.510279 131.50439L65.789959 133.41204L64.760999 134.53281L64.354329 134.91276L65.220309 135.69698L66.361719 136.79236L67.219239 137.74353L68.224659 138.85478L68.912569 139.61943L69.812159 140.61664L73.780909 144.67853L77.820829 148.82031L80.538629 151.72676L82.088819 153.39708L83.868409 155.38648L84.195429 157.1658L82.934959 158.48845L81.480809 160.07595L80.872269 160.78107L80.005759 161.80183L79.593269 162.14579L79.495869 162.30454L79.408569 162.46329L78.780449 163.12475L77.657819 164.42121L76.830739 165.34725L75.914219 166.35266L74.538389 167.85365L71.451489 171.21862L71.029219 171.74355L69.337209 173.36412L69.177129 173.57579L68.996949 173.78746L68.647169 174.02558L67.618469 174.87066L65.684629 176.11711L66.013249 177.94036L67.269489 179.29079L69.742019 181.99271L70.342359 182.57162L71.029219 183.25954L71.739099 183.94746L76.215049 188.50014L76.426719 188.65704L76.638379 188.8351L77.035259 189.30395L78.107349 190.27073L80.140409 192.26569L81.304579 193.43753L82.882549 195.18643L82.980149 195.27163L83.729189 195.95849L85.114019 197.33327L85.884219 197.33527L86.083709 197.17652L86.390899 196.99132L86.970069 196.44786L87.803769 195.70306L88.862099 194.78654L91.078249 192.84688L93.209469 190.98527L93.880979 190.39102L95.053349 189.38798L96.491629 188.13042L97.440949 187.28111L98.172259 186.6432L99.127939 185.79653L99.953439 185.03215L100.13468 184.89986L103.15225 182.09527L107.30065 178.27813L109.37155 176.52685L110.21266 175.9535L110.55556 175.80216L112.79763 177.35685L115.0294 179.35366L115.79669 180.04819L115.92898 180.13789L116.49254 180.58768L118.01522 182.04236L119.60907 183.52403L120.82959 184.63528L123.24074 186.80116L123.82573 187.28111L126.06252 189.41207L126.30065 189.68988L126.91977 190.20476L127.78522 190.98528L130.27707 193.23424L130.9843 193.8957L131.70264 194.55716L132.90094 195.64195L134.2564 196.88629L136.16246 196.99503L138.55085 194.52382L141.14377 191.82454L142.36085 190.4786L143.31335 189.43852L144.26585 188.39712L146.78839 185.77616L151.35563 180.94355L153.60432 178.69538L155.06244 175.36666L154.21419 174.45263L152.99711 173.13183L150.99818 170.88499L150.13855 169.95471L148.99105 168.65455L148.18354 167.69835L147.97002 167.41604L147.57315 166.92841L146.87385 166.15239L144.24125 163.27266L142.82943 161.56107L142.17565 160.70223L141.93752 160.3842L141.64648 160.03495L139.55627 157.80161L138.15345 156.16357L137.9058 154.5639L139.97961 152.24297L143.25647 148.77005L147.43424 144.47719L155.80169 135.89781L157.041 134.52595L156.60973 132.59025L155.37836 131.2086L153.92315 129.57586L152.83836 128.36459L151.59481 127.03083L149.87502 125.15096L149.71865 124.90146L148.75081 123.7283L147.74063 122.51122L146.82993 121.54337L143.93645 118.3898L142.53733 117.23728"\n' +
            '       id="path0" />\n' +
            '    <path\n' +
            '       style="fill:#000000;fill-rule:evenodd;stroke:none;stroke-width:0.26458332"\n' +
            '       inkscape:connector-curvature="0"\n' +
            '       d="M109.31335 94.050244L107.67293 94.210584L105.43773 94.509564L104.40162 94.729964L103.64809 94.928664L102.9189 95.200124L102.4617 95.417874L102.0045 95.636424L101.41554 95.907884L101.00755 96.105794L100.53738 96.370374L100.02303 96.634964L99.710029 96.846624L99.449149 97.058294L99.162079 97.197724L98.706469 97.541684L96.032319 100.00019L93.995029 102.13406L93.250489 103.17916L93.042529 103.58582L92.830869 104.01445L92.619199 104.41371L92.423669 104.79629L92.152469 105.35774L91.871749 105.92765L91.666699 106.41528L91.513769 106.86057L91.233579 107.59849L90.967409 108.39568L90.712879 109.39687L90.485069 110.25544L90.451469 118.40328L90.709969 119.56745L90.982749 120.76496L91.304219 121.87621L91.616959 123.25019L92.476849 125.18403L92.672379 125.52799L92.840659 125.73912L93.034599 125.98254L93.481739 126.73025L94.047949 127.58168L97.389639 131.2578L98.783989 132.45689L99.055189 132.61829L99.356019 132.81858L99.905299 133.19191L100.2392 133.45914L100.55167 133.62265L101.1073 133.88115L101.61503 134.15076L102.03837 134.36719L102.66384 134.6278L103.35176 134.89185L103.94337 135.10537L104.53418 135.31836L105.27502 135.53268L106.16587 135.75942L114.89712 135.79252L116.16579 135.52768L116.96087 135.31707L117.75594 135.10275L118.44412 134.88685L119.13045 134.62915L119.81678 134.37277L120.28747 134.16031L120.90422 133.82852L121.31273 133.57082L121.54266 133.46472L122.88833 132.61832L123.06084 132.45957L123.22832 132.30082L125.06082 130.76623L126.28293 129.63911L127.38545 128.49135L127.99399 127.69945L128.28503 127.22346L128.99941 126.19714L129.23753 125.79286L129.45211 125.41821L129.72622 124.93349L129.93498 124.63875L130.0842 124.40883L130.33423 123.74393L131.10761 121.87174L131.30763 121.18382L131.55819 120.08342L131.85373 118.765L131.85873 110.92248L131.56399 109.70937L131.34571 108.84894L131.09462 108.15706L130.78029 107.27123L130.61361 106.77752L130.24134 105.93085L129.70794 104.9429L129.22772 104.20207L128.75331 103.46124L128.22943 102.66749L127.79552 102.05445L123.3566 97.799154L122.72954 97.296444L122.33584 97.058324L121.98765 96.846654L121.70005 96.634994L120.13557 95.889134L119.65932 95.685934L119.02326 95.420284L118.25067 95.167614L117.3839 94.888744L116.71001 94.729994L115.83979 94.514354L109.31305 94.050274"\n' +
            '       id="path1" />\n' +
            '  </g>\n' +
            '</svg>';
    };
    return Sanego;
}());

var Doctena = /** @class */ (function () {
    function Doctena() {
        this.name = 'doctena';
    }
    Doctena.prototype.getSvg = function (sizeInPX) {
        return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
            '<!-- Created with Inkscape (http://www.inkscape.org/) -->\n' +
            '\n' +
            '<svg\n' +
            '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
            '   xmlns:cc="http://creativecommons.org/ns#"\n' +
            '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
            '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
            '   xmlns="http://www.w3.org/2000/svg"\n' +
            '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
            '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
            '   width="' + sizeInPX + 'px"\n' +
            '   height="' + sizeInPX + 'px"\n' +
            '   viewBox="0 0 18.743759 18.743759"\n' +
            '   version="1.1"\n' +
            '   id="svg848"\n' +
            '   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"\n' +
            '   sodipodi:docname="doctena.svg">\n' +
            '  <defs\n' +
            '     id="defs842" />\n' +
            '  <sodipodi:namedview\n' +
            '     id="base"\n' +
            '     pagecolor="#ffffff"\n' +
            '     bordercolor="#666666"\n' +
            '     borderopacity="1.0"\n' +
            '     inkscape:pageopacity="0.0"\n' +
            '     inkscape:pageshadow="2"\n' +
            '     inkscape:zoom="2.8"\n' +
            '     inkscape:cx="-39.75596"\n' +
            '     inkscape:cy="26.951376"\n' +
            '     inkscape:document-units="mm"\n' +
            '     inkscape:current-layer="layer1"\n' +
            '     showgrid="false"\n' +
            '     inkscape:window-width="1920"\n' +
            '     inkscape:window-height="1017"\n' +
            '     inkscape:window-x="0"\n' +
            '     inkscape:window-y="0"\n' +
            '     inkscape:window-maximized="1" />\n' +
            '  <metadata\n' +
            '     id="metadata845">\n' +
            '    <rdf:RDF>\n' +
            '      <cc:Work\n' +
            '         rdf:about="">\n' +
            '        <dc:format>image/svg+xml</dc:format>\n' +
            '        <dc:type\n' +
            '           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n' +
            '        <dc:title />\n' +
            '      </cc:Work>\n' +
            '    </rdf:RDF>\n' +
            '  </metadata>\n' +
            '  <g\n' +
            '     inkscape:label="Layer 1"\n' +
            '     inkscape:groupmode="layer"\n' +
            '     id="layer1"\n' +
            '     transform="translate(-16.028552,-278.25624)">\n' +
            '    <path\n' +
            '       inkscape:connector-curvature="0"\n' +
            '       style="fill:#000000;stroke-width:0.02125143"\n' +
            '       class="fil1"\n' +
            '       d="m 23.766437,284.24914 c 0.155907,0.003 0.272252,-0.0735 0.28156,-0.23376 l -0.02654,-2.08264 h 2.316406 v 2.10389 c 0.01064,0.12219 0.122197,0.19657 0.276268,0.21251 h 2.040137 v 2.31641 h -2.125143 c -0.10094,0.0266 -0.185937,0.10096 -0.191262,0.25502 v 2.08263 h -2.316406 v -2.06138 c -0.0078,-0.13763 -0.110694,-0.26312 -0.29752,-0.27627 H 21.6838 v -2.31641 z m -5.737885,1.02007 c 0,2.74144 1.402594,4.44155 2.953948,6.33293 0.7438,0.91381 1.360091,1.78512 2.040137,2.67768 0.340023,0.42502 0.680045,0.85005 0.998817,1.29633 0.29752,0.38253 0.871308,0.93507 1.020068,1.42385 0.616292,-0.17001 3.697749,-4.54781 4.101526,-5.03659 l 1.976382,-2.61393 c 3.463983,-5.65287 -1.105074,-11.09324 -5.652879,-11.09324 -4.271537,0 -7.437999,3.23022 -7.437999,7.01297 z"\n' +
            '       id="path12" />\n' +
            '  </g>\n' +
            '</svg>\n';
    };
    return Doctena;
}());

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
    CustomBrandsProviderService.ɵprov = ɵɵdefineInjectable({ factory: function CustomBrandsProviderService_Factory() { return new CustomBrandsProviderService(); }, token: CustomBrandsProviderService, providedIn: "root" });
    CustomBrandsProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CustomBrandsProviderService);
    return CustomBrandsProviderService;
}());

var SocialIconsLibComponent = /** @class */ (function () {
    function SocialIconsLibComponent(sanitizer, awesomeIconsProvider, customBrandsProvider) {
        this.sanitizer = sanitizer;
        this.awesomeIconsProvider = awesomeIconsProvider;
        this.customBrandsProvider = customBrandsProvider;
    }
    SocialIconsLibComponent.prototype.ngOnInit = function () {
        if (this.size === undefined || this.size === null) {
            this.size = 18;
        }
        else {
            this.size = Math.round(this.size);
        }
    };
    SocialIconsLibComponent.prototype.iconExists = function () {
        return this.awesomeIconsProvider.hasIcon(this.brand) || this.customBrandsProvider.hasIcon(this.brand);
    };
    SocialIconsLibComponent.prototype.getSvg = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.customBrandsProvider.getSvg(this.brand.toLowerCase(), this.size));
    };
    SocialIconsLibComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: AwesomeIconsProvider },
        { type: CustomBrandsProviderService }
    ]; };
    __decorate([
        Input()
    ], SocialIconsLibComponent.prototype, "brand", void 0);
    __decorate([
        Input()
    ], SocialIconsLibComponent.prototype, "size", void 0);
    SocialIconsLibComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'social-icon',
            template: "<ng-container *ngIf=\"brand != undefined\">\n  <div class=\"social-icon\" style=\"display: inline-block;\">\n    <ng-container *ngIf=\"iconExists(); else noicon\">\n        <fa-icon style=\"float: left\" *ngIf=\"awesomeIconsProvider.hasIcon(brand)\" [icon]=\"awesomeIconsProvider.icons[brand.toLowerCase()]\" [size]=\"awesomeIconsProvider.getSize(size)\" title=\"{{ brand }}\"></fa-icon>\n        <span style=\"float: left\" *ngIf=\"customBrandsProvider.hasIcon(brand.toLowerCase())\" class=\"svg\" [innerHTML]=\"getSvg()\" title=\"{{ brand }}\"></span>\n    </ng-container>\n\n    <ng-template #noicon>\n      <span class=\"undefined\" style=\"font-size: {{ size }}px; float: left;\" title=\"{{ brand }}\">{{ brand.toLowerCase()[0] }}</span>\n    </ng-template>\n    <div style=\"clear: both;\"></div>\n  </div>\n</ng-container>\n",
            styles: [".undefined{font-weight:700}.social-icon .svg{display:block;margin-bottom:-3px}"]
        })
    ], SocialIconsLibComponent);
    return SocialIconsLibComponent;
}());

var SocialIconsLibModule = /** @class */ (function () {
    function SocialIconsLibModule() {
    }
    SocialIconsLibModule = __decorate([
        NgModule({
            declarations: [SocialIconsLibComponent],
            imports: [
                FontAwesomeModule,
                CommonModule
            ],
            exports: [SocialIconsLibComponent]
        })
    ], SocialIconsLibModule);
    return SocialIconsLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AwesomeIconsProvider, Doctolib, SocialIconsLibComponent, SocialIconsLibModule, CustomBrandsProviderService as ɵa };
//# sourceMappingURL=social-icons-lib.js.map
