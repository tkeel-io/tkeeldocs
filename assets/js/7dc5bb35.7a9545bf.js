"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[825],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={title:"\u6d88\u606f\u89c4\u8303",sidebar_position:3},u=void 0,p={unversionedId:"developer_cookbook/iothub/message_spec",id:"developer_cookbook/iothub/message_spec",title:"\u6d88\u606f\u89c4\u8303",description:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",source:"@site/docs/developer_cookbook/iothub/message_spec.md",sourceDirName:"developer_cookbook/iothub",slug:"/developer_cookbook/iothub/message_spec",permalink:"/developer_cookbook/iothub/message_spec",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/iothub/message_spec.md",tags:[],version:"current",lastUpdatedAt:1653662429,formattedLastUpdatedAt:"2022/5/27",sidebarPosition:3,frontMatter:{title:"\u6d88\u606f\u89c4\u8303",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",permalink:"/developer_cookbook/iothub/devices_access_specification"},next:{title:"\ud83d\uddfa\ufe0f Roadmap",permalink:"/roadmap"}},c={},s=[{value:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",id:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b",level:2},{value:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e",id:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e",level:3},{value:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0",id:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0",level:4},{value:"\u5c5e\u6027\u6570\u636e",id:"\u5c5e\u6027\u6570\u636e",level:3},{value:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0",id:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0",level:4},{value:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316",id:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316",level:4},{value:"\u9065\u6d4b\u6570\u636e",id:"\u9065\u6d4b\u6570\u636e",level:3},{value:"\u547d\u4ee4\u6570\u636e",id:"\u547d\u4ee4\u6570\u636e",level:3},{value:"\u53cd\u63a7\u6570\u636e",id:"\u53cd\u63a7\u6570\u636e",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b"},"\u6d88\u606f\u683c\u5f0f\u5206\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e09\u7c7b\u4e0a\u884c\u6570\u636e\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\uff0c \u5c5e\u6027\uff0c \u9065\u6d4b\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e24\u7c7b\u4e0b\u884c\u6570\u636e\uff08\u5c5e\u6027\uff08\u53ef\u5199\uff09\uff0c \u547d\u4ee4\uff09")),(0,a.kt)("h3",{id:"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e"},"\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e"),(0,a.kt)("h4",{id:"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0"},"\u63a8\u9001\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u5230\u5e73\u53f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"topic\uff1a \u5408\u6cd5\u7684\u975e\u5e73\u53f0\u9884\u5b9a\u4e49\u7684 topic \u5747\u4f5c\u4e3a\u539f\u59cb\u6570\u636etopic, \u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"payload\uff1a \u4e0a\u884c\u539f\u59cb\u6570\u636e\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\uff0c \u6bd4\u5982 json, \u4e8c\u8fdb\u5236\u6570\u636e\u7b49\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e.")),(0,a.kt)("h3",{id:"\u5c5e\u6027\u6570\u636e"},"\u5c5e\u6027\u6570\u636e"),(0,a.kt)("p",null,"\u5c5e\u6027API\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316")),(0,a.kt)("h4",{id:"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"},"\u8bbe\u5907\u63a8\u9001\u5c5e\u6027\u6570\u636e\u5230\u5e73\u53f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"topic: ",(0,a.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes")),(0,a.kt)("li",{parentName:"ul"},"payload:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attribute1": "value1",\n   "attribute2": "value2"\n}\n')),(0,a.kt)("h4",{id:"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316"},"\u8ba2\u9605\u5e73\u53f0\u5c5e\u6027\u53d8\u5316"),(0,a.kt)("p",null,"\u8bbe\u5907\u8ba2\u9605 topic: ",(0,a.kt)("inlineCode",{parentName:"p"},"v1/devices/me/attributes")),(0,a.kt)("p",null,"\u5e73\u53f0\u4fa7\u4fee\u6539\u5c5e\u6027\u540e\u8bbe\u5907\u4fa7\u4f1a\u6536\u5230\u53d8\u66f4\u7684\u5c5e\u6027 payload\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "attribute1": "value1",\n   "attribute2": "value2"\n}\n')),(0,a.kt)("h3",{id:"\u9065\u6d4b\u6570\u636e"},"\u9065\u6d4b\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a8\u9001\u9065\u6d4b\u6570\u636e\u5230\u5e73\u53f0"),(0,a.kt)("li",{parentName:"ul"},"topic: ",(0,a.kt)("inlineCode",{parentName:"li"},"v1/devices/me/telemetry")),(0,a.kt)("li",{parentName:"ul"},"payload:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "telemetry1": "value1",\n   "telemetry2": "value2"\n}\n')),(0,a.kt)("h3",{id:"\u547d\u4ee4\u6570\u636e"},"\u547d\u4ee4\u6570\u636e"),(0,a.kt)("p",null,"\u8bbe\u5907\u8ba2\u9605topic: ",(0,a.kt)("inlineCode",{parentName:"p"},"v1/devices/me/commands")),(0,a.kt)("p",null,"\u5e73\u53f0\u53d1\u9001\u547d\u4ee4\u540e\u5728\u8bbe\u5907\u4fa7\u4f1a\u6536\u5230\u5982\u4e0b\u4fe1\u606f payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "ota",\n   "paras": {\n      "firmware_address": "http://xxx.yyy.com",\n      "version": "latest",\n      "secret": "****",\n      "http_method": "GET"\n   },\n   "ts": 1646964832292\n}\n')),(0,a.kt)("p",null,"\u6ce8\uff1ats \u4e3a\u6beb\u79d2"),(0,a.kt)("p",null,"\u8bbe\u5907\u6536\u5230\u547d\u4ee4\u6d88\u606f\u4e4b\u540e\u53ef\u4ee5\u5c06\u6267\u884c\u7ed3\u679c\u53d1\u9001\u5230"),(0,a.kt)("p",null,"topic: ",(0,a.kt)("inlineCode",{parentName:"p"},"v1/devices/me/command/response")),(0,a.kt)("p",null,"payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "ota",\n   "ota": {\n     "output": {\n       "success": true,\n       "ts": 12345\n     }\n   }\n}\n')),(0,a.kt)("h3",{id:"\u53cd\u63a7\u6570\u636e"},"\u53cd\u63a7\u6570\u636e"),(0,a.kt)("p",null,"\u8bbe\u5907\u8ba2\u9605 v1/devices/me/raw"),(0,a.kt)("p",null,"\u5e73\u53f0\u63a8\u9001\u6570\u636e\u5230\u8bbe\u5907\u7684 topic(v1/devices/me/raw)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tips:\n\u547d\u4ee4\u8ddf\u53cd\u63a7\u7684\u533a\u522b\u5728\u4e8e\u547d\u4ee4\u4e0b\u53d1\u7684\u662f\u683c\u5f0f\u5316\u7684\u6570\u636e\uff08json\uff09\uff0c\u800c\u53cd\u63a7\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u6570\u636e\n")),(0,a.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6709\u5b50\u8bbe\u5907\u7684\u8bbe\u5907\u6bd4\u5982\u91c7\u96c6\u7f51\u5173\uff0c\u5176\u4e0a\u62a5\u7684\u9065\u6d4b\u3001\u5c5e\u6027\u53ca\u5176\u4ed6\u7c7b\u578b\u7684\u6570\u636e\u53ef\u4f7f\u7528 key \u8fdb\u884c\u533a\u5206\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "telemetry1_opcua": "value1",\n   "telemetry2_modbus": "value2"\n}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u8868\u793a telemetry1 \u6765\u81ea opcua, telemetry2 \u6765\u81ea modbus"))}m.isMDXComponent=!0}}]);