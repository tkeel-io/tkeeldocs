"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8005],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(87462),l=r(63366),o=(r(67294),r(3905)),a=["components"],i={sidebar_position:2,title:"Keel",slug:"/internal_concepts/keel"},c="Keel",p={unversionedId:"concepts/keel",id:"concepts/keel",title:"Keel",description:"Keel \u662f tKeel \u7684\u4e00\u4e2a\u7edf\u4e00\u7f51\u5173\uff0c\u62e5\u6709\u52a8\u6001\u6ce8\u518c\u8def\u7531\u80fd\u529b\uff0c\u6240\u6709\u5bf9\u5e73\u53f0\u7684\u8bbf\u95ee\u5747\u901a\u8fc7 Keel \u8fdb\u884c\u8f6c\u53d1\u3002",source:"@site/docs/concepts/keel.md",sourceDirName:"concepts",slug:"/internal_concepts/keel",permalink:"/internal_concepts/keel",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/keel.md",tags:[],version:"current",lastUpdatedAt:1638864606,formattedLastUpdatedAt:"2021/12/7",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Keel",slug:"/internal_concepts/keel"},sidebar:"tutorialSidebar",previous:{title:"Platform",permalink:"/internal_concepts/platform"},next:{title:"Rudder",permalink:"/internal_concepts/rudder"}},u={},s=[{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keel"},"Keel"),(0,o.kt)("p",null,"Keel \u662f tKeel \u7684\u4e00\u4e2a\u7edf\u4e00\u7f51\u5173\uff0c\u62e5\u6709\u52a8\u6001\u6ce8\u518c\u8def\u7531\u80fd\u529b\uff0c\u6240\u6709\u5bf9\u5e73\u53f0\u7684\u8bbf\u95ee\u5747\u901a\u8fc7 Keel \u8fdb\u884c\u8f6c\u53d1\u3002"),(0,o.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"image keel arch",src:r(54201).Z,width:"1200",height:"679"})),(0,o.kt)("p",null,"Keel \u7531\u56db\u4e2a Filter\uff0c\u4e00\u4e2a Operator \u548c\u4e00\u4e2a Proxy \u7ec4\u4ef6\u7ec4\u6210\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter \u5bf9 HTTP \u6d41\u91cf\u8fdb\u884c\u7b5b\u9009\u8fc7\u6ee4\uff0c\u7528\u4e8e\u63a7\u5236\u8bf7\u6c42\u7684\u6d41\u5411\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Oprator \u662f\u4e00\u79cd\u62bd\u8c61\u5f62\u6001\uff0c\u4e3b\u8981\u7528\u4e8e\u5bf9\u67d0\u79cd\u6216\u67d0\u7c7b\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Proxy \u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406 HTTP \u8f6c\u53d1\u7684\u7ec4\u4ef6\u3002\u6839\u636e\u4e0d\u540c\u7684 upstream server \u9009\u62e9\u4e0d\u540c\u7684\u8f6c\u53d1\u6a21\u5f0f\u8fdb\u884c\u8f6c\u53d1\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Plugin Filter"),"\uff1a\u901a\u8fc7\u5bf9 HTTP \u8bf7\u6c42\u4e2d Header \u7684 x-plugin-jwt \u5934\u8fdb\u884c\u89e3\u6790\uff0c\u83b7\u53d6\u5bf9\u5e94\u8bf7\u6c42\u6765\u6e90\u7684 plugin_id\uff08\u5982\u679c\u662f\u5916\u90e8\u8bf7\u6c42\u5219\u4e3a\u7a7a\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Path Filter"),"\uff1a\u901a\u8fc7\u5bf9 HTTP \u8bf7\u6c42\u7684 Path \u8fdb\u884c\u5904\u7406\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"/apis/security"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"/apis/rudder"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"/apis/core"),"\u4e3a root path \u7684\u8bf7\u6c42\u76f4\u63a5\u8fdb\u884c\u8f6c\u53d1\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"/addons")," \u4e3a root path \u7684\u8bf7\u6c42\u53bb\u7f13\u5b58\u7684\u8def\u7531\u8868\u4e2d\u5bfb\u627e\u5bf9\u5e94\u7684\u63d2\u4ef6\u6269\u5c55\u70b9\u627e\u5230\u5bf9\u5e94\u7684\u4e0a\u6e38\u63d2\u4ef6\uff0c\u8fdb\u884c\u8f6c\u53d1\uff0c\u5176\u4ed6\u7684\u5219\u9700\u8981\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"Auth Filter")," \u8fdb\u884c\u9274\u6743\u5904\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auth Filter"),"\uff1a\u6839\u636e plugin_id \u662f\u5426\u4e3a\u7a7a\u5224\u5b9a\u662f\u5426\u4e3a\u5916\u90e8\u8bf7\u6c42\uff0c\u5bf9\u5916\u90e8\u8bf7\u6c42\u8fdb\u884c\u9274\u6743\u518d\u8fc7\u6ee4\u5230\u7f13\u5b58\u7684\u8def\u7531\u8868\u67e5\u627e\u4e0a\u6e38\u63d2\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tKeel Version Filter"),"\uff1a\u5224\u65ad\u4e0a\u6e38\u63d2\u4ef6\u548c\u8bf7\u6c42\u6e90\u63d2\u4ef6\u7684\u6240\u4f9d\u8d56\u7684 tKeel \u7684\u7248\u672c\u662f\u5426\u6709\u6548\uff08\u8bf7\u6c42\u6e90\u63d2\u4ef6\u7684\u4f9d\u8d56\u5e94\u5927\u4e8e\u6216\u7b49\u4e8e\u4e0a\u6e38\u63d2\u4ef6\u4f9d\u8d56\u7248\u672c\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PluginRoute Operator"),"\uff1a\u8def\u7531\u8868\u64cd\u4f5c\u5458\uff0ckeel \u4e2d\u7528\u6765\u76d1\u542c\u8def\u7531\u8868\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u5982\u5df2\u53d8\u5316\u5219\u66f4\u65b0\u7f13\u5b58\u7684\u8def\u7531\u8868\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proxy"),"\uff1a\u6839\u636e\u4e0a\u6e38\u670d\u52a1\u7684\u4e0d\u540c\uff0c\u9009\u62e9\u4e0d\u540c\u7684\u8bbf\u95ee\u6a21\u5f0f\u8fdb\u884c\u8bbf\u95ee\uff08\u5bf9\u4e8e\u63d2\u4ef6\u4f7f\u7528 dapr \u7684 invoke \u6a21\u5f0f\u8bbf\u95ee\uff0c\u5bf9\u4e8e\u6838\u5fc3\u7ec4\u4ef6\u76f4\u63a5\u8bbf\u95ee\uff09\u3002")))}m.isMDXComponent=!0},54201:function(e,t,r){t.Z=r.p+"assets/images/keel_arch-baed2b6b7e18c6440d09b36edb46cf04.png"}}]);