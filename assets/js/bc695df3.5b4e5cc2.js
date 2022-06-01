"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5176],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,d=m["".concat(l,".").concat(k)]||m[k]||s[k]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86931:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Cache",sidebar_position:32},l=void 0,c={unversionedId:"developer_cookbook/core/specs/cache",id:"developer_cookbook/core/specs/cache",title:"Cache",description:"Cache \u662f\u6307\u5728 Runtime \u4e0a\u7f13\u5b58\u7684\u5176\u4ed6 Runtime \u4e2d\u6267\u884c\u7684\u5b9e\u4f53\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u7f13\u5b58\u5b9e\u4f53\u4fe1\u606f\u4e3b\u8981\u7528\u4e8e Expression \u7684\u8ba1\u7b97\u3002",source:"@site/docs/developer_cookbook/core/specs/cache.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/cache",permalink:"/developer_cookbook/core/specs/cache",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/cache.md",tags:[],version:"current",lastUpdatedAt:1651038165,formattedLastUpdatedAt:"2022/4/27",sidebarPosition:32,frontMatter:{title:"Cache",sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/developer_cookbook/core/specs/event"},next:{title:"tKeel \u63d2\u4ef6",permalink:"/developer_cookbook/tkeel_plugin/overview"}},u={},s=[{value:"\u540c\u6b65 vs. \u89e6\u53d1",id:"\u540c\u6b65-vs-\u89e6\u53d1",level:2},{value:"\u540c\u6b65\u6574\u4e2a\u5b9e\u4f53\u72b6\u6001",id:"\u540c\u6b65\u6574\u4e2a\u5b9e\u4f53\u72b6\u6001",level:3},{value:"\u540c\u6b65\u5408\u5e76 path \u6570\u636e",id:"\u540c\u6b65\u5408\u5e76-path-\u6570\u636e",level:3},{value:"\u6309\u7167\u8ba2\u9605 path \u540c\u6b65",id:"\u6309\u7167\u8ba2\u9605-path-\u540c\u6b65",level:3},{value:"\u6309\u7167\u53d8\u66f4 path \u540c\u6b65",id:"\u6309\u7167\u53d8\u66f4-path-\u540c\u6b65",level:3}],m={toc:s};function k(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cache \u662f\u6307\u5728 Runtime \u4e0a\u7f13\u5b58\u7684\u5176\u4ed6 Runtime \u4e2d\u6267\u884c\u7684\u5b9e\u4f53\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u7f13\u5b58\u5b9e\u4f53\u4fe1\u606f\u4e3b\u8981\u7528\u4e8e Expression \u7684\u8ba1\u7b97\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"runtime-cache-001",src:r(68133).Z,width:"855",height:"255"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c Runtime1 \u8ba2\u9605\u4e86 Runtime2 \u4e2d\u5b9e\u4f53 E11 \u7684\u5c5e\u6027\u3002\u5982\u4e0b\uff0cRuntime1 \u8ba2\u9605\u4e86 E11 \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"properties.metrics, properties.attributes, properties.basic.name"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"runtime-cache-002",src:r(44060).Z,width:"886",height:"379"})),(0,i.kt)("p",null,"\u5f53 E11 \u7684\u90e8\u5206\u5c5e\u6027 (",(0,i.kt)("inlineCode",{parentName:"p"},"properties.metrics.cpu, properties.basic.name"),") \u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u8fd9\u65f6\u6839\u636e ",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/mapper#path-%E5%8C%B9%E9%85%8D%E5%8E%9F%E5%88%99"},"\u8ba2\u9605 path \u5339\u914d\u89c4\u5219"),"\uff0c\u5176\u5339\u914d\u7ed3\u679c\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"runtime-cache-003",src:r(79261).Z,width:"967",height:"400"})),(0,i.kt)("p",null,"\u4ece\u4e0a\u56fe\u4e2d\u6211\u4eec\u53ef\u4ee5\u5f97\u77e5\uff0c\u5f53 E11 \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"properties.metrics.cpu, properties.basic.name")," \u53d1\u751f\u53d8\u5316\u4e4b\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"properties.metrics \u548c properties.basic.name")," \u4f1a\u88ab\u5339\u914d\uff0c\u90a3\u4e48\u4f1a\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898\uff0cRuntime2 \u5411 Runtime1 \u540c\u6b65\u7684\u5230\u5e95\u662f\u4ec0\u4e48\u6570\u636e\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65 E11 \u6574\u4e2a\u5b9e\u4f53\u7684\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65 E11 \u7684 properties"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65 properties.metrics \u548c properties.basic.name"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65 properties.metrics.cpu, properties.basic.name")),(0,i.kt)("p",null,"\u540c\u6b65\u5176\u5b9e\u4e5f\u662f\u5206\u4e3a\u4e24\u90e8\u5206\u7684\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u4ee5\u88ab\u8ba2\u9605\u8005\u63a5\u53d7\u5e76\u66f4\u65b0\u7f13\u5b58\u7684 Patch \u64cd\u4f5c\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u544a\u8bc9\u8ba2\u9605\u8005\u88ab\u8ba2\u9605\u5b9e\u4f53\u53d8\u66f4\u7684 path\u3002")),(0,i.kt)("h2",{id:"\u540c\u6b65-vs-\u89e6\u53d1"},"\u540c\u6b65 vs. \u89e6\u53d1"),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4 Runtime \u4e4b\u95f4\u7684\u8ba2\u9605\uff0c\u5176\u5b9e\u5206\u4e3a\u540c\u6b65\u548c\u89e6\u53d1\u4e24\u4e2a\u9636\u6bb5\u3002"),(0,i.kt)("p",null,"\u89e6\u53d1\u5e76\u65e0\u592a\u591a\u96be\u70b9\uff0c\u76f4\u63a5\u5c06\u53d1\u751f\u53d8\u66f4\u7684 path \u4f20\u9012\u7ed9\u8ba2\u9605\u8005\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u540c\u6b65\u6574\u4e2a\u5b9e\u4f53\u72b6\u6001"},"\u540c\u6b65\u6574\u4e2a\u5b9e\u4f53\u72b6\u6001"),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355")),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 Expression \u6570\u91cf\u5927\u65f6\u4f1a\u5bfc\u81f4 Runtime \u4e4b\u95f4\u540c\u6b65\u8d1f\u8f7d\u589e\u9ad8\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u5b9e\u4f53\u6d88\u606f\u4e0a\u62a5\u9891\u7387\u8fc7\u9ad8\uff0c\u4f1a\u5bfc\u81f4Runtime \u4e4b\u95f4\u540c\u6b65\u8d1f\u8f7d\u589e\u9ad8\u3002")),(0,i.kt)("h3",{id:"\u540c\u6b65\u5408\u5e76-path-\u6570\u636e"},"\u540c\u6b65\u5408\u5e76 path \u6570\u636e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8ba2\u9605 path\uff1a\ndev.attributes.metrics\ndev.attributes.metrics.cpu_used\ndev.attributes.temp\n\n# \u5408\u5e76 \u8ba2\u9605 path\n## 1. \u5408\u5e76\u6210\u591a\u6761\ndev.attributes.metrics\ndev.attributes.temp\n\n## 2. \u5408\u5e76\u6210\u4e00\u6761 path\ndev.attributes\n")),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u7684\u7c92\u5ea6\u66f4\u5c0f\uff0c\u4f18\u5316\u4f20\u8f93\u6548\u7387")),(0,i.kt)("h3",{id:"\u6309\u7167\u8ba2\u9605-path-\u540c\u6b65"},"\u6309\u7167\u8ba2\u9605 path \u540c\u6b65"),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2apath\u53ef\u80fd\u5b58\u5728\u6570\u636e\u5197\u4f59")),(0,i.kt)("h3",{id:"\u6309\u7167\u53d8\u66f4-path-\u540c\u6b65"},"\u6309\u7167\u53d8\u66f4 path \u540c\u6b65"),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65\u6700\u5c11\u6570\u636e")),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u589e\u91cf\u540c\u6b65\u662f\u9700\u8981\u6709\u4e00\u4e2a\u521d\u59cb\u503c\u7684\uff0c\u6240\u4ee5\u5b9e\u4f53\u7f13\u5b58\u9700\u8981\u521d\u59cb\u5316\u3002")))}k.isMDXComponent=!0},68133:function(e,t,r){t.Z=r.p+"assets/images/runtime-cache-001-46f6b8f17588a98aac6e8bbaa501c180.png"},44060:function(e,t,r){t.Z=r.p+"assets/images/runtime-cache-002-c5afa521ef94fe521fbb9211d7b9ff00.png"},79261:function(e,t,r){t.Z=r.p+"assets/images/runtime-cache-003-7048eba8a9c79c225f491b53d87cca8f.png"}}]);