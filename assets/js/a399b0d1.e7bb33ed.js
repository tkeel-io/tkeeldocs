"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6299],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=r,c=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92363:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"\u5b9e\u4f53",sidebar_position:1},o=void 0,d={unversionedId:"developer_cookbook/core/specs/entity",id:"developer_cookbook/core/specs/entity",title:"\u5b9e\u4f53",description:"\u5b9e\u4f53\uff08Entity\uff09",source:"@site/docs/developer_cookbook/core/specs/entity.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/entity",permalink:"/developer_cookbook/core/specs/entity",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/entity.md",tags:[],version:"current",lastUpdatedAt:1650618052,formattedLastUpdatedAt:"2022/4/22",sidebarPosition:1,frontMatter:{title:"\u5b9e\u4f53",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u7a7a\u95f4\u5173\u7cfb\u53d8\u66f4\u521b\u5efa\u6620\u5c04",permalink:"/developer_cookbook/core/tutorial/mapper-for-space-relationships"},next:{title:"\u6620\u5c04",permalink:"/developer_cookbook/core/specs/mapper"}},m={},u=[{value:"\u5b9e\u4f53\uff08Entity\uff09",id:"\u5b9e\u4f53entity",level:2},{value:"\u7ec4\u6210",id:"\u7ec4\u6210",level:2},{value:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",level:2},{value:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",level:2},{value:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",level:2},{value:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027",id:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027",level:2},{value:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5",id:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5",level:3}],k={toc:u};function s(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b9e\u4f53entity"},"\u5b9e\u4f53\uff08Entity\uff09"),(0,l.kt)("p",null,"\u5728\u6570\u5b57\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u5bf9\u4e8e\u4e00\u4e2a\u7269\u7406\u5bf9\u8c61\u7684\u62bd\u8c61\u65f6\u9700\u8981\u5b9a\u4e49\u5b83\u7684\u72b6\u6001\u548c\u884c\u4e3a\uff0c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7269\u8054\u7f51\u4e16\u754c\u91cc\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u5bf9\u8c61\u7ec4\u5408\u62bd\u8c61\u51fa\u6765\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u7f51\u5173\uff0c\u8bbe\u5907\uff0c\u8bbe\u5907\u7684\u805a\u5408\u62bd\u8c61\u7b49\u7b49\u3002")),(0,l.kt)("h2",{id:"\u7ec4\u6210"},"\u7ec4\u6210"),(0,l.kt)("p",null,"\u5b9e\u4f53\uff08Entity\uff09\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7684\u5c5e\u6027\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b9e\u4f53\u7684\u5404\u79cd\u6307\u6807\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7684\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f\uff0c\u7528\u4e8e\u5b9a\u4e49\u5b9e\u4f53\u7684\u5c5e\u6027\u3002")),(0,l.kt)("p",null,"\u5c5e\u6027\u5177\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u56fa\u5b9a")," \u4e14 ",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u7684\u5b57\u6bb5\uff0c\u4e5f\u6709 ",(0,l.kt)("em",{parentName:"p"},"\u53ef\u9009")," \u7684\u5b57\u6bb5\uff0c\u5c5e\u6027\u4ee5 Key-Value \u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u4ee5\u63d0\u4f9b\u826f\u597d\u7684\u6269\u5c55\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5177\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5c5e\u6027\u7684\u7c7b\u578b\u53ef\u4ee5\u662f ",(0,l.kt)("em",{parentName:"p"},"\u4efb\u610f\u7c7b\u578b"),"\uff0c\u6ee1\u8db3 ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," \u89c4\u8303 \u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f53 ",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u5177\u6709\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684id\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u5b9e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u5b9e\u4f53\u5206\u7c7b\uff0c\u8bf8\u5982\u8bbe\u5907\uff0c\u7a7a\u95f4\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u62e5\u6709\u8005ID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b9e\u4f53\u7684\u63d2\u4ef6\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7248\u672c\u53f7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"last_time"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u6700\u8fd1\u4fee\u6539\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7ee7\u627f\u7684\u6a21\u677fID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u63cf\u8ff0\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\u3002")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Example\n{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "version": 1,\n    "last_time": 1650613276000,\n    "template_id": "",\n    "description": "",\n    "scheme": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "properties": {\n        "status": "online",\n        "temp": 20\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"},"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"),(0,l.kt)("p",null,"\u5b9e\u4f53\u662f\u5bf9\u7269\u8054\u7f51\u4e16\u754c\u4e2d\u7684\u64cd\u4f5c\u5bf9\u8c61\u7684\u6570\u5b57\u5316\u62bd\u8c61\uff0c\u6211\u4eec\u4e0d\u4ec5\u62bd\u8c61\u5176\u72b6\u6001\uff0c\u4e5f\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u62bd\u8c61\u3002\u6240\u4ee5\u6211\u4eec\u4e3a\u5b9e\u4f53\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001\u5b58\u50a8")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u65f6Actor"),"\uff0c\u7528\u4e8e\u73b0\u7269\u7406\u4e16\u754c\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u884c\u4e3a"),"\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"},"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f\u4ece\u7528\u6237\u521b\u5efa\u5b9e\u4f53\u5f00\u59cb\uff0c\u5230\u7528\u6237\u5220\u9664\u5b9e\u4f53\u7ed3\u675f\u3002\u521b\u5efa\u5b8c\u6210\u540e\u5b9e\u4f53\u7684\u72b6\u6001\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"PowerOn"),"\uff0c\u5b9e\u4f53\u5b58\u5728\u4e8e Runtime \u6267\u884c\u5b9e\u4f53\u6d88\u606f\uff0c\u5f53\u4e00\u5b9a\u65f6\u95f4\u5185\u5b9e\u4f53\u6ca1\u6709\u53ef\u4ee5\u5904\u7406\u7684\u6d88\u606f\u65f6\uff0cRuntime \u5c06\u5b9e\u4f53 Unload \u5230\u72b6\u6001\u5b58\u50a8\u3002\u5f53\u4e0b\u4e00\u6b21 Runtime \u6536\u5230\u5b9e\u4f53\u7684\u6d88\u606f\uff0cLoad \u5b9e\u4f53\u5230 Runtime \u5e76\u6267\u884c\u6d88\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-life-cycle",src:n(40585).Z,width:"692",height:"371"})),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"},"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"),(0,l.kt)("p",null,"\u5b9e\u4f53\u7684\u72b6\u6001\u6570\u636e\uff0c\u5373\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6211\u4eec\u6839\u636e\u9700\u6c42\u5c06\u5176\u9009\u62e9\u6027\u7684\u5b58\u50a8\u5230\u72b6\u6001\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8 \u548c \u641c\u7d22\u5f15\u64ce\u3002"),(0,l.kt)("p",null,"\u5b9e\u4f53\u72b6\u6001\u6570\u636e\u7684\u6301\u4e45\u5316\u5177\u6709\u4e24\u65b9\u9762\u7279\u5f81\uff1a\u9009\u62e9\u6027\uff0c\u7b56\u7565\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u6765\u6307\u5b9a\u6240\u914d\u7f6e\u7684\u5c5e\u6027\u662f\u5426\u8fdb\u884c\u6301\u4e45\u5316\uff0c",(0,l.kt)("a",{parentName:"li",href:"/developer_cookbook/core/specs/model"},"\u8be6\u60c5\u8bf7\u67e5\u770b"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5bf9\u670d\u52a1\u8282\u70b9\u914d\u7f6e\u4fe1\u606f\u8fdb\u884c\u8c03\u8282\uff0c\u6765\u63a7\u5236\u5b9e\u4f53\u6570\u636e\u7684",(0,l.kt)("a",{parentName:"li",href:"/developer_cookbook/core/specs/persistent-strategy"},"\u6301\u4e45\u5316\u7b56\u7565"),"\u3002")),(0,l.kt)("h2",{id:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027"},"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"id, type, owner, source")," \u7b49\u5b57\u6bb5\u4e5f\u53ef\u4ee5\u770b\u505a\u5b9e\u4f53\u7684\u5fc5\u987b\u5c5e\u6027\u5b57\u6bb5\uff0c\u662f\u88ab Core \u4fdd\u7559\u7684\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b9e\u4f53\uff0c\u7528\u6237\u4e0d\u80fd\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u6545\uff0c\u5b9e\u4f53\u53ef\u4ee5\u5b58\u5728\u4e24\u79cd\u5c55\u793a\u5f62\u5f0f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Structured:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "properties": {\n        "status": "end",\n        "temp": 20\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tiled\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "status": "end",\n    "temp": 20\n}\n')),(0,l.kt)("h3",{id:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5"},"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684id\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u5b9e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u5b9e\u4f53\u5206\u7c7b\uff0c\u8bf8\u5982\u8bbe\u5907\uff0c\u7a7a\u95f4\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u62e5\u6709\u8005ID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b9e\u4f53\u7684\u63d2\u4ef6\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7248\u672c\u53f7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"last_time"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u6700\u8fd1\u4fee\u6539\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7ee7\u627f\u7684\u6a21\u677fID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u63cf\u8ff0\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7ed3\u6784\u5316\u5c55\u793a\u5b9e\u4f53\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5c55\u793a\u5b9e\u4f53\u5c5e\u6027\u5b9a\u4e49\u4fe1\u606f\u3002")))))}s.isMDXComponent=!0},40585:function(t,e,n){e.Z=n.p+"assets/images/entity=life-cycle-8e5de582ef47a884d8ee4fff62e59ca1.png"}}]);