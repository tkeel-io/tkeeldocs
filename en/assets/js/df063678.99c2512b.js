"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>s});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,g=m["".concat(u,".").concat(s)]||m[s]||c[s]||r;return n?l.createElement(g,i(i({ref:t},o),{},{components:n})):l.createElement(g,i({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var l=n(87462),a=(n(67294),n(3905));const r={},i=void 0,p={unversionedId:"api/appendix/plantuml/plugin-manager-tenant",id:"api/appendix/plantuml/plugin-manager-tenant",title:"plugin-manager-tenant",description:"1.3.1 \u63d2\u4ef6\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/plugin-manager-tenant.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/plugin-manager-tenant",permalink:"/en/api/appendix/plantuml/plugin-manager-tenant",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/plugin-manager-tenant.md",tags:[],version:"current",lastUpdatedAt:1656384840,formattedLastUpdatedAt:"6/28/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"plugin-manager-admin",permalink:"/en/api/appendix/plantuml/plugin-manager-admin"},next:{title:"rudder",permalink:"/en/api/appendix/plantuml/rudder"}},u={},d=[{value:"1.3.1 \u63d2\u4ef6\u7ba1\u7406",id:"131-\u63d2\u4ef6\u7ba1\u7406",level:3},{value:"1.3.1.1 \u67e5\u770b\u63d2\u4ef6\u5217\u8868",id:"1311-\u67e5\u770b\u63d2\u4ef6\u5217\u8868",level:4},{value:"1.3.1.1.1 \u65f6\u5e8f\u56fe",id:"13111-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.1.2 \u72b6\u6001\u56fe",id:"13112-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13113-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.2 \u542f\u7528\u63d2\u4ef6",id:"1312-\u542f\u7528\u63d2\u4ef6",level:4},{value:"1.3.1.2.1 \u65f6\u5e8f\u56fe",id:"13121-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.2.2 \u72b6\u6001\u56fe",id:"13122-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13123-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.3 \u505c\u7528\u7528\u63d2\u4ef6",id:"1313-\u505c\u7528\u7528\u63d2\u4ef6",level:4},{value:"1.3.1.3.1 \u65f6\u5e8f\u56fe",id:"13131-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.3.2 \u72b6\u6001\u56fe",id:"13132-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13133-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",id:"1314-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",level:4},{value:"1.3.1.4.1 \u65f6\u5e8f\u56fe",id:"13141-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.1.4.2 \u72b6\u6001\u56fe",id:"13142-\u72b6\u6001\u56fe",level:5},{value:"1.3.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13143-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5}],o={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"131-\u63d2\u4ef6\u7ba1\u7406"},"1.3.1 \u63d2\u4ef6\u7ba1\u7406"),(0,a.kt)("h4",{id:"1311-\u67e5\u770b\u63d2\u4ef6\u5217\u8868"},"1.3.1.1 \u67e5\u770b\u63d2\u4ef6\u5217\u8868"),(0,a.kt)("h5",{id:"13111-\u65f6\u5e8f\u56fe"},"1.3.1.1.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gggeD2K5QWI4YIhzhAVnoSxMfnkRm2fIad8IAz6Lv5OM5-Q0fS4iBYwGKnHqxS2MALWfFEsV-6BhzXVhjp_RsCG55aEMQtesTSEp1GjVhkfHW4j270AKVh6X-VcK5Kzsp7hQjH3e1Ywe1509r2KWDNtRd_PFUzO_wSdkRKyxfhzOk88B9ca3L0Xs4qZP-jqWPK3BUjSztJKPoIY4RKWcFU_QzgoXaKIJm1u7AjW_vUdiUSztJtusRmuNbqDgNWemsW00",alt:null}),(0,a.kt)("h5",{id:"13112-\u72b6\u6001\u56fe"},"1.3.1.1.2 \u72b6\u6001\u56fe"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,a.kt)("h5",{id:"13113-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,a.kt)("h4",{id:"1312-\u542f\u7528\u63d2\u4ef6"},"1.3.1.2 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("h5",{id:"13121-\u65f6\u5e8f\u56fe"},"1.3.1.2.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bP9DJi905CVtSue9Arru0MCCdi4J53iBOY7O3nDsKCKOWnO12GA23K69YROa8YfHBjDvBRTmEbDDQrZeQbxU_pV_zp6JrdH9rOsSWWhipEvb2r9Unob38seAIneEWwIqKyZk4lMGg6lxX2Zhd0gZ9AKQiXnPY30fGxNilLNenEI4d56aucyaLzGE52xp2A6m5RonpOlXJKojos0w2vmPJ4p4St7DX2iNRktbGnN_YA8H9WVkaTySUwyTUcQp7b0an14Obc0m0glkpL-WxT3Q7NriqzxuZspDOGLMiSjIdNxKXIvkU9ytmRGLOwCPH9E28Nafen2u655h62EZlOK3nmpHTtgB8Nnt8N1oJIkZS2ddJ_IziT84ki_GSeM9tpdsxmTmElCMDfITVthofs8ZB9gqs_Vd3UZt44gJlCm-sXS0",alt:null}),(0,a.kt)("h5",{id:"13122-\u72b6\u6001\u56fe"},"1.3.1.2.2 \u72b6\u6001\u56fe"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,a.kt)("h5",{id:"13123-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,a.kt)("h4",{id:"1313-\u505c\u7528\u7528\u63d2\u4ef6"},"1.3.1.3 \u505c\u7528\u7528\u63d2\u4ef6"),(0,a.kt)("h5",{id:"13131-\u65f6\u5e8f\u56fe"},"1.3.1.3.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/dPBDJi9058NtynGJLhhm1Omn-0m-GR6pQ2oajiM4dLGnnA1LGSDVW0Ohn4GBYOhAWfVft9QtS7wgASQuS3KtSxvxxZsPoLgsOjh5l8uCTcfxcg4KR9mfMiJCOCN2l5YLTWnjbvY7n5pR9qHV5nIlLYcpgAg9XInNPQYLm_SAdJg2K7EwKlg9v4lMWIvaKI74Ly4Rss8OtiJKlOfVPd4mWwc3n5rQS-1c0WDl-L33tw9SXCdnv3XgZCEtDZtps0ue4T8838-WxuDx7SvVeHdGotlwsAJTSOfDPaapIQgQfUHq0XS-TOSfD0d8DwiEbgsxQDI7wYngdyYsSE51EK1Vr1Rh49avVzgY5P-7EN-Y7_K_FAKLyvJc__JaqJlFS3lvJHOlm18l6hJJY-Prw7LHbXHKzdq-0G00",alt:null}),(0,a.kt)("h5",{id:"13132-\u72b6\u6001\u56fe"},"1.3.1.3.2 \u72b6\u6001\u56fe"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,a.kt)("h5",{id:"13133-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,a.kt)("h4",{id:"1314-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"},"1.3.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"),(0,a.kt)("h5",{id:"13141-\u65f6\u5e8f\u56fe"},"1.3.1.4.1 \u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIe0qfd9cGM9UIKAIgN5gKLA2ed52Y06gfHZGMPmQb5PQf56TcfgZYPO5OY5gggeD2K5QWI4YIhzhAVnoSxMfnkRm2fIad8IAz6Lv5OM5-Q0fS4iBYwGKnHqxS2MALWfFEsV-6BhzXVhjp_RsCG55aEMQtesTSEp1GjVhkfHW4j270AKVh6X-VcK5Kzsp7hQjH3e1Ywe1BAIPuiRdirV-gn_qfFTsvxDMFzqmhAdQsSydRC2IItKrI3p-hO_xPy6KVna_y9dZUkvO98sG8LWzuEKhTyDKWPqME-wfxic8na5zXfGmVufJsVFUxvxyhDvSxWSKlDIWF420000",alt:null}),(0,a.kt)("h5",{id:"13142-\u72b6\u6001\u56fe"},"1.3.1.4.2 \u72b6\u6001\u56fe"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,a.kt)("h5",{id:"13143-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1"))}c.isMDXComponent=!0}}]);