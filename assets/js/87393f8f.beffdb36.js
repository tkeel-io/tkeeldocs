"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[3017],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return g}});var l=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=l.createContext({}),d=function(e){var t=l.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(i),g=n,k=s["".concat(u,".").concat(g)]||s[g]||o[g]||r;return i?l.createElement(k,a(a({ref:t},p),{},{components:i})):l.createElement(k,a({ref:t},p))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var d=2;d<r;d++)a[d]=i[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,i)}s.displayName="MDXCreateElement"},3983:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return o}});var l=i(7462),n=i(3366),r=(i(7294),i(3905)),a=["components"],c={title:"\u6700\u4f73\u5b9e\u8df51",sidebar_position:1},u=void 0,d={unversionedId:"developer_cookbook/device/practice/practice_1",id:"developer_cookbook/device/practice/practice_1",title:"\u6700\u4f73\u5b9e\u8df51",description:"1\u3001\u524d\u7f6e\u6761\u4ef6",source:"@site/docs/developer_cookbook/device/practice/practice_1.md",sourceDirName:"developer_cookbook/device/practice",slug:"/developer_cookbook/device/practice/practice_1",permalink:"/developer_cookbook/device/practice/practice_1",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/device/practice/practice_1.md",tags:[],version:"current",lastUpdatedAt:1648605825,formattedLastUpdatedAt:"2022/3/30",sidebarPosition:1,frontMatter:{title:"\u6700\u4f73\u5b9e\u8df51",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u4e49\u8bbe\u5907\u6a21\u677f",permalink:"/developer_cookbook/device/templates/template"},next:{title:"\u6279\u91cf\u5de5\u51771",permalink:"/developer_cookbook/device/batch/batch_1"}},p={},o=[{value:"1\u3001\u524d\u7f6e\u6761\u4ef6",id:"1\u524d\u7f6e\u6761\u4ef6",level:2},{value:"2\u3001 \u6211\u7684\u76ee\u5730",id:"2-\u6211\u7684\u76ee\u5730",level:2},{value:"3\u3001\u6211\u7684\u76f4\u89c2\u60ef\u6027\u601d\u7ef4",id:"3\u6211\u7684\u76f4\u89c2\u60ef\u6027\u601d\u7ef4",level:2},{value:"4\u3001\u6211\u53ef\u4ee5\u5206\u5982\u4e0b\u4e09\u6b65\u5b8c\u6210\u6b64\u76ee\u7684",id:"4\u6211\u53ef\u4ee5\u5206\u5982\u4e0b\u4e09\u6b65\u5b8c\u6210\u6b64\u76ee\u7684",level:2},{value:"4.1\u3001\u7b2c\u4e00\u6b65\uff1a\u5728\u5e73\u53f0\u4e0a\u5b9a\u4e49\u6b64\u8bbe\u5907\u7684\u6570\u5b57\u5316\u697c\u3001\u697c\u5c42\u3001\u623f\u95f4\u3001\u8bbe\u5907\u3001\u53ca\u5176\u6a21\u677f",id:"41\u7b2c\u4e00\u6b65\u5728\u5e73\u53f0\u4e0a\u5b9a\u4e49\u6b64\u8bbe\u5907\u7684\u6570\u5b57\u5316\u697c\u697c\u5c42\u623f\u95f4\u8bbe\u5907\u53ca\u5176\u6a21\u677f",level:3},{value:"4.1.1 \u5b9a\u4e49\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09\uff0c",id:"411-\u5b9a\u4e49\u8bbe\u5907\u7ec4\u53ef\u9009",level:4},{value:"4.1.1.1 \u5b9a\u4e49\u697c\u680b",id:"4111-\u5b9a\u4e49\u697c\u680b",level:5},{value:"4.1.1.2 \u5b9a\u4e49\u697c\u5c42",id:"4112-\u5b9a\u4e49\u697c\u5c42",level:5},{value:"4.1.1.3 \u5b9a\u4e49\u623f\u95f4",id:"4113-\u5b9a\u4e49\u623f\u95f4",level:5},{value:"4.1.1.4 \u9884\u671f\u7ed3\u679c",id:"4114-\u9884\u671f\u7ed3\u679c",level:5},{value:"4.1.2  \u5b9a\u4e49\u8bbe\u5907\u6a21\u677f\uff08\u53ef\u9009\uff09",id:"412--\u5b9a\u4e49\u8bbe\u5907\u6a21\u677f\u53ef\u9009",level:4},{value:"4.1.2.1 \u5b9a\u4e49\u6a21\u677f\u5bf9\u8c61",id:"4121-\u5b9a\u4e49\u6a21\u677f\u5bf9\u8c61",level:5},{value:"4.1.2.2 \u5b9a\u4e49\u5c5e\u6027",id:"4122-\u5b9a\u4e49\u5c5e\u6027",level:5},{value:"4.1.2.3 \u5b9a\u4e49\u9065\u6d4b",id:"4123-\u5b9a\u4e49\u9065\u6d4b",level:5},{value:"4.1.2.4 \u5b9a\u4e49\u547d\u4ee4",id:"4124-\u5b9a\u4e49\u547d\u4ee4",level:5},{value:"4.1.3 \u5b9a\u4e49\u8bbe\u5907",id:"413-\u5b9a\u4e49\u8bbe\u5907",level:4},{value:"4.2 \u7b2c\u4e8c\u6b65\uff1a\u53d1\u9001\u51b7\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u6570\u636e\u5230\u5e73\u53f0",id:"42-\u7b2c\u4e8c\u6b65\u53d1\u9001\u51b7\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u6570\u636e\u5230\u5e73\u53f0",level:3},{value:"4.2.1 \u6309\u7167\u5e73\u53f0\u6d88\u606f\u89c4\u8303\u53d1\u9001\u9065\u6d4b\u6570\u636e",id:"421-\u6309\u7167\u5e73\u53f0\u6d88\u606f\u89c4\u8303\u53d1\u9001\u9065\u6d4b\u6570\u636e",level:4},{value:"4.2.2  \u73b0\u5b9e\u60c5\u51b5\uff1a\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6a21\u677f \u6216\u8005 \u5b9e\u9645\u8bbe\u65bd\u7684\u6570\u636e\u4e0e\u5f15\u7528\u6a21\u677f\u6709\u5dee\u522b",id:"422--\u73b0\u5b9e\u60c5\u51b5\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6a21\u677f-\u6216\u8005-\u5b9e\u9645\u8bbe\u65bd\u7684\u6570\u636e\u4e0e\u5f15\u7528\u6a21\u677f\u6709\u5dee\u522b",level:4},{value:"4.2.2.1 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u5c5e\u6027",id:"4221-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u5c5e\u6027",level:5},{value:"4.2.2.2 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u9065\u6d4b",id:"4222-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u9065\u6d4b",level:5},{value:"4.2.2.3 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u547d\u4ee4",id:"4223-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u547d\u4ee4",level:5},{value:"4.2.2.4 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6ca1\u6709\u5f15\u7528\u6a21\u677f\uff0c\u9700\u8981\u5b9e\u9645\u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u81ea\u5b66\u4e60\u6210\u6a21\u677f",id:"4224-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6ca1\u6709\u5f15\u7528\u6a21\u677f\u9700\u8981\u5b9e\u9645\u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u81ea\u5b66\u4e60\u6210\u6a21\u677f",level:5},{value:"4.2.2.5 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u624d\u662f\u6700\u7ec8\u6a21\u677f\u7248\u672c\uff0c\u540c\u6b65\u5230\u6a21\u677f\u5e76\u540c\u6b65\u5230\u5176\u4ed6\u6240\u6709\u5f15\u7528\u6b64\u6a21\u677f\u7684\u8bbe\u5907",id:"4225-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u624d\u662f\u6700\u7ec8\u6a21\u677f\u7248\u672c\u540c\u6b65\u5230\u6a21\u677f\u5e76\u540c\u6b65\u5230\u5176\u4ed6\u6240\u6709\u5f15\u7528\u6b64\u6a21\u677f\u7684\u8bbe\u5907",level:5},{value:"4.2.2.6 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u5dee\u5f02\u90e8\u5206\u9700\u8981\u884d\u751f\u51fa\u53e6\u5916\u4e00\u79cd\u6a21\u677f\u800c\u4e0d\u5f71\u54cd\u5f53\u4e0b\u6a21\u677f\uff0c\u53e6\u5b58\u4e3a\u6a21\u677f",id:"4226-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u5dee\u5f02\u90e8\u5206\u9700\u8981\u884d\u751f\u51fa\u53e6\u5916\u4e00\u79cd\u6a21\u677f\u800c\u4e0d\u5f71\u54cd\u5f53\u4e0b\u6a21\u677f\u53e6\u5b58\u4e3a\u6a21\u677f",level:5},{value:"4.2.2 \u6309\u7167\u81ea\u5b9a\u4e49topic \u3001\u81ea\u5b9a\u4e49\u683c\u5f0f\u53d1\u9001\u539f\u59cb\u6570\u636e",id:"422-\u6309\u7167\u81ea\u5b9a\u4e49topic-\u81ea\u5b9a\u4e49\u683c\u5f0f\u53d1\u9001\u539f\u59cb\u6570\u636e",level:4},{value:"4.3  \u7b2c\u4e09\u6b65\uff1a\u67e5\u8be2\u3001\u8ba2\u9605\u3001\u8def\u7531\u3001\u53cd\u63a7\u8bbe\u5907\u6570\u636e",id:"43--\u7b2c\u4e09\u6b65\u67e5\u8be2\u8ba2\u9605\u8def\u7531\u53cd\u63a7\u8bbe\u5907\u6570\u636e",level:3},{value:"4.3.1 \u539f\u59cb\u6570\u636e",id:"431-\u539f\u59cb\u6570\u636e",level:4},{value:"4.3.1.1 \u67e5\u8be2",id:"4311-\u67e5\u8be2",level:5},{value:"4.3.1.4 \u53cd\u63a7",id:"4314-\u53cd\u63a7",level:5},{value:"4.3.1.2 \u8ba2\u9605",id:"4312-\u8ba2\u9605",level:5},{value:"4.3.1.4 \u8def\u7531",id:"4314-\u8def\u7531",level:5},{value:"4.3.2 \u6a21\u677f\u6570\u636e",id:"432-\u6a21\u677f\u6570\u636e",level:4},{value:"4.3.2.1 \u67e5\u8be2",id:"4321-\u67e5\u8be2",level:5},{value:"4.3.2.2 \u53cd\u63a7",id:"4322-\u53cd\u63a7",level:5},{value:"4.3.2.2 \u8ba2\u9605",id:"4322-\u8ba2\u9605",level:5},{value:"4.3.2.4 \u8def\u7531",id:"4324-\u8def\u7531",level:5}],s={toc:o};function g(e){var t=e.components,c=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,l.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u524d\u7f6e\u6761\u4ef6"},"1\u3001\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("p",null,"\u5047\u5982B\u53f7\u697c2\u5c42305\u7684\u673a\u623f\u91cc\u5b58\u5728\u4e00\u4e2a\u51b7\u51bb\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u8bbe\u5907 \uff0c\u5e76\u4e14\u6211\u80fd\u770b\u61c2\u8bbe\u5907\u64cd\u4f5c\u624b\u518c"),(0,r.kt)("h2",{id:"2-\u6211\u7684\u76ee\u5730"},"2\u3001 \u6211\u7684\u76ee\u5730"),(0,r.kt)("p",null,"\u6211\u4eec\u7684\u76ee\u7684\u662f\uff1a\u5c06\u6b64\u4e9b\u8bbe\u5907\u63a5\u5165\u5230\u7269\u8054\u7f51\u5e73\u53f0\u3001\u5e76\u53ef\u4f7f\u7528\u64cd\u4f5c"),(0,r.kt)("h2",{id:"3\u6211\u7684\u76f4\u89c2\u60ef\u6027\u601d\u7ef4"},"3\u3001\u6211\u7684\u76f4\u89c2\u60ef\u6027\u601d\u7ef4"),(0,r.kt)("p",null,"\u57fa\u4e8e\u76ee\u7684\uff0c\u9996\u5148\u4f1a\u51fa\u73b0\u4e00\u4e2a\u60ef\u6027\u601d\u7ef4\uff1a\n1\u3001\u6211\u8981\u5b9a\u4e49\u4e00\u4e2a\u697c\u3001\u4e00\u4e2a\u697c\u5c42\u3001\u4e00\u4e2a\u623f\u95f4\u3001\u4e00\u4e2a\u8bbe\u5907\u3001\u6b64\u7c7b\u8bbe\u5907\u7684\u6a21\u677f\uff08\u6839\u636e\u8bbe\u5907\u64cd\u4f5c\u624b\u518c\uff09\n2\u3001\u6211\u8981\u8fde\u63a5\u548c\u53d1\u9001\u6570\u636e\u5230\u5e73\u53f0\n3\u3001\u6211\u8981\u67e5\u8be2\u3001\u8ba2\u9605\u3001\u8def\u7531\u4f7f\u7528\u8bbe\u5907\u8bbe\u5907\u7684\u6570\u636e"),(0,r.kt)("h2",{id:"4\u6211\u53ef\u4ee5\u5206\u5982\u4e0b\u4e09\u6b65\u5b8c\u6210\u6b64\u76ee\u7684"},"4\u3001\u6211\u53ef\u4ee5\u5206\u5982\u4e0b\u4e09\u6b65\u5b8c\u6210\u6b64\u76ee\u7684"),(0,r.kt)("h3",{id:"41\u7b2c\u4e00\u6b65\u5728\u5e73\u53f0\u4e0a\u5b9a\u4e49\u6b64\u8bbe\u5907\u7684\u6570\u5b57\u5316\u697c\u697c\u5c42\u623f\u95f4\u8bbe\u5907\u53ca\u5176\u6a21\u677f"},"4.1\u3001\u7b2c\u4e00\u6b65\uff1a\u5728\u5e73\u53f0\u4e0a\u5b9a\u4e49\u6b64\u8bbe\u5907\u7684\u6570\u5b57\u5316\u697c\u3001\u697c\u5c42\u3001\u623f\u95f4\u3001\u8bbe\u5907\u3001\u53ca\u5176\u6a21\u677f"),(0,r.kt)("h4",{id:"411-\u5b9a\u4e49\u8bbe\u5907\u7ec4\u53ef\u9009"},"4.1.1 \u5b9a\u4e49\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09\uff0c"),(0,r.kt)("p",null,"\u200b\t\t\u4e5f\u53ef\u4ee5\u53eb\u505a\u7a7a\u95f4\u6811\u3001\u672c\u8d28\u4e5f\u662f\u4e00\u4e2a\u5b9e\u4f53\u3001\u7406\u89e3\u6210\u672c\u89d2\u5ea6\u770b\u76ee\u524d\u53eb\u8bbe\u5907\u7ec4"),(0,r.kt)("h5",{id:"4111-\u5b9a\u4e49\u697c\u680b"},"4.1.1.1 \u5b9a\u4e49\u697c\u680b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329182400041",src:i(2509).Z,width:"554",height:"476"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329172818882",src:i(4002).Z,width:"554",height:"473"})),(0,r.kt)("h5",{id:"4112-\u5b9a\u4e49\u697c\u5c42"},"4.1.1.2 \u5b9a\u4e49\u697c\u5c42"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329172851832",src:i(7577).Z,width:"554",height:"483"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329172901574",src:i(8376).Z,width:"554",height:"480"})),(0,r.kt)("h5",{id:"4113-\u5b9a\u4e49\u623f\u95f4"},"4.1.1.3 \u5b9a\u4e49\u623f\u95f4"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329172911442",src:i(7817).Z,width:"554",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329172924022",src:i(4159).Z,width:"554",height:"478"})),(0,r.kt)("h5",{id:"4114-\u9884\u671f\u7ed3\u679c"},"4.1.1.4 \u9884\u671f\u7ed3\u679c"),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a\u5de6\u4fa7\u5f97\u5230\u4e00\u4e2a\u7a7a\u95f4\u6811(\u5c42\u7ea7\u7ed3\u6784\u7684\u8bbe\u5907\u7ec4)\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329173441881",src:i(205).Z,width:"554",height:"211"})),(0,r.kt)("h4",{id:"412--\u5b9a\u4e49\u8bbe\u5907\u6a21\u677f\u53ef\u9009"},"4.1.2  \u5b9a\u4e49\u8bbe\u5907\u6a21\u677f\uff08\u53ef\u9009\uff09"),(0,r.kt)("h5",{id:"4121-\u5b9a\u4e49\u6a21\u677f\u5bf9\u8c61"},"4.1.2.1 \u5b9a\u4e49\u6a21\u677f\u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329173550772",src:i(3647).Z,width:"554",height:"338"})),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329173618371",src:i(1987).Z,width:"554",height:"119"})),(0,r.kt)("h5",{id:"4122-\u5b9a\u4e49\u5c5e\u6027"},"4.1.2.2 \u5b9a\u4e49\u5c5e\u6027"),(0,r.kt)("p",null,"\u4e00\u4e9b\u5173\u4e8e\u6b64\u7c7b\u8bbe\u5907\u81ea\u8eab\u7684\u9759\u6001\u6216\u534a\u9759\u6001\u4fe1\u606f\u3001\n\u5c5e\u6027\u9ed8\u8ba4\u503c\u8868\u793a\u6b64\u7c7b\u8bbe\u5907\u90fd\u901a\u7528\uff0c\u4f8b\uff1a\u8bbe\u5907\u578b\u53f7\u3001\u8f6f\u4ef6\u7248\u672c\n\u4e0d\u540c\u8bbe\u5907\u76f8\u540c\u5b9a\u4e49\u4f46\u4e0d\u540c\u503c\u7684\u5c5e\u6027\u53ef\u5728\u8bbe\u5907\u8be6\u60c5\u9875\u4fee\u6539\uff1a \u5982\u5e8f\u5217\u53f7"),(0,r.kt)("p",null,"\u8bfb\u5199\u7c7b\u578b\u7528\u4e8e\u533a\u5206\uff1a"),(0,r.kt)("p",null,"\u200b            1\u3001\u5e73\u53f0\u7aef\u5c5e\u6027\uff08\u53ea\u5199\uff09\uff0c\u8bf4\u660e\uff1aAPI OR \u5e73\u53f0\u754c\u9762\u66f4\u65b0\u503c\u3001\u8bbe\u5907\u7aef\u4e0d\u8ba2\u9605\u4e0d\u4f7f\u7528"),(0,r.kt)("p",null,"\u200b            2\u3001\u8bbe\u5907\u7aef\u5c5e\u6027\uff08\u53ea\u8bfb\uff09\uff0c\u8bf4\u660e\uff1a \u8bbe\u5907\u7aef\u4e0a\u62a5\u66f4\u65b0\u503c"),(0,r.kt)("p",null,"\u200b            3\u3001\u5e73\u53f0\u4e0e\u8bbe\u5907\u5171\u4eab\u5c5e\u6027\uff08\u8bfb\u5199\uff09\uff0c\u8bf4\u660e\uff1aAPI OR \u5e73\u53f0\u754c\u9762\u66f4\u65b0\u503c\u3001\u8bbe\u5907\u7aef\u53ef\u8ba2\u9605\u4f7f\u7528\u53cd\u63a7\uff08\u540e\u7eed\uff09"),(0,r.kt)("p",null,"\u6211\u6b64\u65f6\u8981\u52a0\u51b7\u51bb\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u6a21\u677f\u7684\u5982\u4e0b\u5c5e\u6027\uff0cid \u4e3a\u81ea\u5b9a\u4e49\uff1a\n1\u3001\t\u8bbe\u5907\u578b\u53f7\u3001\n2\u3001\t\u9001\u98ce\u6a21\u5f0f\u3001\n3\u3001\tEC\u9001\u98ce\u673a\u5f62\u5f0f\u3001\n4\u3001\t\u98ce\u91cf\u3001\n5\u3001\t\u8f93\u5165\u529f\u7387\u3001\n6\u3001\t\u673a\u7ec4\u6700\u5927\u8fd0\u884c\u529f\u7387\u3001\n7\u3001\t\u7535\u52a0\u70ed\u5f62\u5f0f\u3001\n8\u3001\t\u673a\u7ec4\u5916\u5f62\u3001\n9\u3001\t\u673a\u7ec4\u91cd\u91cf"),(0,r.kt)("p",null,"\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329173721202",src:i(6041).Z,width:"554",height:"520"})),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a\u5f97\u5230\u5c5e\u6027\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329173734404",src:i(5269).Z,width:"554",height:"242"})),(0,r.kt)("h5",{id:"4123-\u5b9a\u4e49\u9065\u6d4b"},"4.1.2.3 \u5b9a\u4e49\u9065\u6d4b"),(0,r.kt)("p",null,"\u5b9a\u4e49\u6b64\u7c7b\u8bbe\u5907\u5e26\u65f6\u95f4\u5e8f\u5217\u7684\u4e0a\u62a5\u6570\u636e"),(0,r.kt)("p",null,"\u6211\u6b64\u65f6\u8981\u6dfb\u52a0\u51b7\u51bb\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u7684\u5982\u4e0b\u9065\u6d4b\uff0cid\u5f15\u7528\u4e92\u8054\u7f51\u6570\u636e\u4e2d\u5fc3\u89c4\u8303\uff1a"),(0,r.kt)("p",null,"1\u3001\u9001\u98ce\u6e7f\u5ea6"),(0,r.kt)("p",null,"2\u3001\u9001\u98ce\u6e7f\u5ea6"),(0,r.kt)("p",null,"3\u3001\u56de\u98ce\u6e29\u5ea6"),(0,r.kt)("p",null,"4\u3001\u9891\u7387"),(0,r.kt)("p",null,"5\u3001\u8f93\u5165\u7535\u538b"),(0,r.kt)("p",null,"6\u3001\u5236\u51b7\u8d1f\u8f7d\u7387"),(0,r.kt)("p",null,"7\u3001\u5ba4\u5185\u98ce\u673a\u72b6\u6001"),(0,r.kt)("p",null,"8\u3001\u901a\u4fe1\u72b6\u6001"),(0,r.kt)("p",null,"\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174118258",src:i(994).Z,width:"554",height:"661"})),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a\u5f97\u5230\u9065\u6d4b\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174146266",src:i(4819).Z,width:"554",height:"231"})),(0,r.kt)("h5",{id:"4124-\u5b9a\u4e49\u547d\u4ee4"},"4.1.2.4 \u5b9a\u4e49\u547d\u4ee4"),(0,r.kt)("p",null,"to  do "),(0,r.kt)("h4",{id:"413-\u5b9a\u4e49\u8bbe\u5907"},"4.1.3 \u5b9a\u4e49\u8bbe\u5907"),(0,r.kt)("p",null,"\u200b    \u5b9a\u4e49\u6b64\u51b7\u51bb\u6c34\u578b\u7cbe\u5bc6\u7a7a\u5929\u8bbe\u5907\u7684\u6570\u5b57\u5316\u8f7d\u4f53"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174304879",src:i(6124).Z,width:"554",height:"498"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174315408",src:i(1531).Z,width:"554",height:"479"})),(0,r.kt)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a\u5f97\u5230\u4e00\u4e2a\u51b7\u5374\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u8bbe\u59071\u7684\u6570\u5b57\u5316\u8bbe\u5907\uff0c\u5e76\u83b7\u5f97\u8bbe\u5907ID \u53catoken \u7528\u4e8e\u8fde\u63a5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174345535",src:i(4712).Z,width:"554",height:"481"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220329174352900",src:i(2559).Z,width:"554",height:"241"})),(0,r.kt)("h5",{id:""}),(0,r.kt)("h3",{id:"42-\u7b2c\u4e8c\u6b65\u53d1\u9001\u51b7\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u6570\u636e\u5230\u5e73\u53f0"},"4.2 \u7b2c\u4e8c\u6b65\uff1a\u53d1\u9001\u51b7\u6c34\u578b\u7cbe\u5bc6\u7a7a\u8c03\u6570\u636e\u5230\u5e73\u53f0"),(0,r.kt)("h4",{id:"421-\u6309\u7167\u5e73\u53f0\u6d88\u606f\u89c4\u8303\u53d1\u9001\u9065\u6d4b\u6570\u636e"},"4.2.1 \u6309\u7167\u5e73\u53f0\u6d88\u606f\u89c4\u8303\u53d1\u9001\u9065\u6d4b\u6570\u636e"),(0,r.kt)("h4",{id:"422--\u73b0\u5b9e\u60c5\u51b5\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6a21\u677f-\u6216\u8005-\u5b9e\u9645\u8bbe\u65bd\u7684\u6570\u636e\u4e0e\u5f15\u7528\u6a21\u677f\u6709\u5dee\u522b"},"4.2.2  \u73b0\u5b9e\u60c5\u51b5\uff1a\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6a21\u677f \u6216\u8005 \u5b9e\u9645\u8bbe\u65bd\u7684\u6570\u636e\u4e0e\u5f15\u7528\u6a21\u677f\u6709\u5dee\u522b"),(0,r.kt)("h5",{id:"4221-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u5c5e\u6027"},"4.2.2.1 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u5c5e\u6027"),(0,r.kt)("h5",{id:"4222-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u9065\u6d4b"},"4.2.2.2 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u9065\u6d4b"),(0,r.kt)("h5",{id:"4223-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u547d\u4ee4"},"4.2.2.3 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6570\u636e\u591a\u6216\u5c11\u4e00\u4e2a\u547d\u4ee4"),(0,r.kt)("h5",{id:"4224-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6ca1\u6709\u5f15\u7528\u6a21\u677f\u9700\u8981\u5b9e\u9645\u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u81ea\u5b66\u4e60\u6210\u6a21\u677f"},"4.2.2.4 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u6ca1\u6709\u5f15\u7528\u6a21\u677f\uff0c\u9700\u8981\u5b9e\u9645\u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u81ea\u5b66\u4e60\u6210\u6a21\u677f"),(0,r.kt)("h5",{id:"4225-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u624d\u662f\u6700\u7ec8\u6a21\u677f\u7248\u672c\u540c\u6b65\u5230\u6a21\u677f\u5e76\u540c\u6b65\u5230\u5176\u4ed6\u6240\u6709\u5f15\u7528\u6b64\u6a21\u677f\u7684\u8bbe\u5907"},"4.2.2.5 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u624d\u662f\u6700\u7ec8\u6a21\u677f\u7248\u672c\uff0c\u540c\u6b65\u5230\u6a21\u677f\u5e76\u540c\u6b65\u5230\u5176\u4ed6\u6240\u6709\u5f15\u7528\u6b64\u6a21\u677f\u7684\u8bbe\u5907"),(0,r.kt)("h5",{id:"4226-\u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u5dee\u5f02\u90e8\u5206\u9700\u8981\u884d\u751f\u51fa\u53e6\u5916\u4e00\u79cd\u6a21\u677f\u800c\u4e0d\u5f71\u54cd\u5f53\u4e0b\u6a21\u677f\u53e6\u5b58\u4e3a\u6a21\u677f"},"4.2.2.6 \u5047\u5982\u5b9e\u9645\u8bbe\u5907\u7ecf\u8fc7\u6570\u636e\u9a8c\u8bc1\u540e\u5dee\u5f02\u90e8\u5206\u9700\u8981\u884d\u751f\u51fa\u53e6\u5916\u4e00\u79cd\u6a21\u677f\u800c\u4e0d\u5f71\u54cd\u5f53\u4e0b\u6a21\u677f\uff0c\u53e6\u5b58\u4e3a\u6a21\u677f"),(0,r.kt)("h4",{id:"422-\u6309\u7167\u81ea\u5b9a\u4e49topic-\u81ea\u5b9a\u4e49\u683c\u5f0f\u53d1\u9001\u539f\u59cb\u6570\u636e"},"4.2.2 \u6309\u7167\u81ea\u5b9a\u4e49topic \u3001\u81ea\u5b9a\u4e49\u683c\u5f0f\u53d1\u9001\u539f\u59cb\u6570\u636e"),(0,r.kt)("h3",{id:"43--\u7b2c\u4e09\u6b65\u67e5\u8be2\u8ba2\u9605\u8def\u7531\u53cd\u63a7\u8bbe\u5907\u6570\u636e"},"4.3  \u7b2c\u4e09\u6b65\uff1a\u67e5\u8be2\u3001\u8ba2\u9605\u3001\u8def\u7531\u3001\u53cd\u63a7\u8bbe\u5907\u6570\u636e"),(0,r.kt)("h4",{id:"431-\u539f\u59cb\u6570\u636e"},"4.3.1 \u539f\u59cb\u6570\u636e"),(0,r.kt)("h5",{id:"4311-\u67e5\u8be2"},"4.3.1.1 \u67e5\u8be2"),(0,r.kt)("h5",{id:"4314-\u53cd\u63a7"},"4.3.1.4 \u53cd\u63a7"),(0,r.kt)("h5",{id:"4312-\u8ba2\u9605"},"4.3.1.2 \u8ba2\u9605"),(0,r.kt)("h5",{id:"4314-\u8def\u7531"},"4.3.1.4 \u8def\u7531"),(0,r.kt)("h4",{id:"432-\u6a21\u677f\u6570\u636e"},"4.3.2 \u6a21\u677f\u6570\u636e"),(0,r.kt)("h5",{id:"4321-\u67e5\u8be2"},"4.3.2.1 \u67e5\u8be2"),(0,r.kt)("h5",{id:"4322-\u53cd\u63a7"},"4.3.2.2 \u53cd\u63a7"),(0,r.kt)("h5",{id:"4322-\u8ba2\u9605"},"4.3.2.2 \u8ba2\u9605"),(0,r.kt)("h5",{id:"4324-\u8def\u7531"},"4.3.2.4 \u8def\u7531"))}g.isMDXComponent=!0},4002:function(e,t,i){t.Z=i.p+"assets/images/image-20220329172818882-a5994476d61f4aec78fd4b140bc97301.png"},7577:function(e,t,i){t.Z=i.p+"assets/images/image-20220329172851832-4671e9dcc65a3535b461b07bc9790a3a.png"},8376:function(e,t,i){t.Z=i.p+"assets/images/image-20220329172901574-a5ceead34821da7e35450f1c3e39611f.png"},7817:function(e,t,i){t.Z=i.p+"assets/images/image-20220329172911442-c03c82fea2d705ee004d6faec0fc6eb2.png"},4159:function(e,t,i){t.Z=i.p+"assets/images/image-20220329172924022-6c597028f9563ee14dc7780dac553af0.png"},205:function(e,t,i){t.Z=i.p+"assets/images/image-20220329173441881-18bc5cede3f49fb27d94f618b7fc5870.png"},3647:function(e,t,i){t.Z=i.p+"assets/images/image-20220329173550772-9dde2c6f6210e84485318780589315ac.png"},1987:function(e,t){t.Z="data:image/png;base64,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"},6041:function(e,t,i){t.Z=i.p+"assets/images/image-20220329173721202-20f314063b1a85f5878239dba174498c.png"},5269:function(e,t,i){t.Z=i.p+"assets/images/image-20220329173734404-4b6eaf016d7ef0606b728fad0cc4d889.png"},994:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174118258-a947fcabf580d0b36777d17d3d472dd4.png"},4819:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174146266-6519b17312f60f7cb745ea2c78ac7a29.png"},6124:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174304879-33ebbe79224163b81bd3d848dac51d74.png"},1531:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174315408-b982e3761d87cc4fa8ed04ecf437bc2d.png"},4712:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174345535-2ba4a02e5d5693c903bd965c42f1ac7e.png"},2559:function(e,t,i){t.Z=i.p+"assets/images/image-20220329174352900-6fb3240e04fc5f7ff01c1836fc04a021.png"},2509:function(e,t,i){t.Z=i.p+"assets/images/image-20220329182400041-122a1ef865e19b97209decccc6de0f03.png"}}]);