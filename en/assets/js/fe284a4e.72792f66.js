"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5620],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),k=o,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77285:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={sidebar_position:1,title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1"},c=void 0,p={unversionedId:"developer_cookbook/security/SECURITY-001-how_designed",id:"developer_cookbook/security/SECURITY-001-how_designed",title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1",description:"tKeel \u5b89\u5168\u673a\u5236",source:"@site/docs/developer_cookbook/security/SECURITY-001-how_designed.md",sourceDirName:"developer_cookbook/security",slug:"/developer_cookbook/security/SECURITY-001-how_designed",permalink:"/en/developer_cookbook/security/SECURITY-001-how_designed",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/security/SECURITY-001-how_designed.md",tags:[],version:"current",lastUpdatedAt:1638450187,formattedLastUpdatedAt:"12/2/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5b89\u5168\u4f53\u7cfb\u8bbe\u8ba1"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u63d2\u4ef6\u524d\u7aef\u754c\u9762",permalink:"/en/developer_cookbook/tkeel_plugin/create_console"},next:{title:"\u591a\u79df\u6237",permalink:"/en/developer_cookbook/security/SECURITY-003-multi_tenancy.md"}},u={},d=[{value:"tKeel \u5b89\u5168\u673a\u5236",id:"tkeel-\u5b89\u5168\u673a\u5236",level:2},{value:"\u63d2\u4ef6\u9694\u79bb",id:"\u63d2\u4ef6\u9694\u79bb",level:3},{value:"\u63d2\u4ef6\u6743\u9650",id:"\u63d2\u4ef6\u6743\u9650",level:3},{value:"\u5e73\u53f0\u7684\u63a7\u5236\u8005",id:"\u5e73\u53f0\u7684\u63a7\u5236\u8005",level:3},{value:"\u5e73\u53f0\u7684\u79df\u6237",id:"\u5e73\u53f0\u7684\u79df\u6237",level:3},{value:"\u5e73\u53f0\u7684\u7528\u6237",id:"\u5e73\u53f0\u7684\u7528\u6237",level:3},{value:"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\u7684\u6838\u5fc3",id:"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\u7684\u6838\u5fc3",level:3},{value:"\u5e94\u7528\u63a5\u53e3\u7684\u8bbf\u95ee",id:"\u5e94\u7528\u63a5\u53e3\u7684\u8bbf\u95ee",level:3}],s={toc:d};function k(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tkeel-\u5b89\u5168\u673a\u5236"},"tKeel \u5b89\u5168\u673a\u5236"),(0,l.kt)("p",null,"tKeel \u5b89\u5168\u7531\u4ee5\u4e0b\u4e0d\u540c\u6a21\u5757\u7684\u5b89\u5168\u673a\u5236\u5171\u540c\u5b8c\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5b89\u5168\u673a\u5236\uff1a\u57fa\u4e8e Dapr \u6743\u9650\u6a21\u578b\uff0c\u9694\u79bb\u63d2\u4ef6\uff0c\u63d2\u4ef6\u53ea\u53ef\u4ee5\u4e0e\u6838\u5fc3\u63d2\u4ef6\u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u5b89\u5168\u673a\u5236\uff1a\u7528\u6237\u91c7\u7528\u591a\u79df\u6237\u67b6\u6784\uff0c\u5728\u7a7a\u95f4\u4e0a\u5212\u5206\u4e3a\u5e73\u53f0\u3001\u79df\u6237\uff0c\u5e73\u53f0\u5177\u5907\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u79df\u6237\u7a7a\u95f4\u5185\u6709\u6743\u9650\u63a7\u5236(RBAC \u57fa\u4e8e\u89d2\u8272\u6743\u9650\u63a7\u5236)"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\uff1a\u7531\u5e73\u53f0\u4e3a\u5b9e\u4f53\u9881\u53d1\u5b9e\u4f53 Token \uff0c\u4f5c\u4e3a\u5b9e\u4f53\u63a5\u5165\u5e73\u53f0\u7684\u8eab\u4efd\u552f\u4e00\u6807\u8bc6")),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u9694\u79bb"},"\u63d2\u4ef6\u9694\u79bb"),(0,l.kt)("p",null,"\u63d2\u4ef6\u8fd0\u884c\u65f6\u7531\u63a7\u5236\u53f0\u542f\u52a8\uff0c\u901a\u8fc7\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f7f\u63d2\u4ef6\u7684 dapr \u8fb9\u8f66\u53ea\u80fd\u4e0e tKeel \u4e2d ",(0,l.kt)("a",{parentName:"p",href:"/en/internal_concepts/keel"},"Keel")," \u6a21\u5757\u901a\u4fe1\u3002\u6240\u6709\u8bf7\u6c42\u90fd\u9700\u8981\u901a\u8fc7 mTLS \u673a\u5236\u5b9e\u73b0\uff0c\u975e mTLS \u8bf7\u6c42\u5219\u65e0\u6cd5\u8bbf\u95ee\u63d2\u4ef6\u7684 dapr \u8fb9\u8f66\u3002"),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u6743\u9650"},"\u63d2\u4ef6\u6743\u9650"),(0,l.kt)("p",null,"\u63d2\u4ef6\u6240\u6709\u7684\u8bbf\u95ee\u5747\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/en/internal_concepts/keel"},"Keel")," \u4ee3\u7406\uff0c",(0,l.kt)("a",{parentName:"p",href:"/en/internal_concepts/keel"},"Keel")," \u901a\u8fc7\u89e3\u6790\u63d2\u4ef6 ID \u83b7\u53d6\u79df\u6237\u7a7a\u95f4\u7ea7\u522b\u7684\u8bbf\u95ee\u6743\u9650\u5e76 \u8fdb\u884c\u63a7\u5236\u3002"),(0,l.kt)("h3",{id:"\u5e73\u53f0\u7684\u63a7\u5236\u8005"},"\u5e73\u53f0\u7684\u63a7\u5236\u8005"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ba1\u7406\u5458")," \uff1a\u7cfb\u7edf\u7ba1\u7406\u5458\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u89d2\u8272\uff0c\u62e5\u6709\u6574\u4e2a tkeel \u5e73\u53f0\u7684\u6700\u9ad8\u6743\u9650\uff0c\u7cfb\u7edf\u5b89\u88c5\u3001\u7cfb\u7edf\u914d\u7f6e\u3001\u63d2\u4ef6\u7ba1\u7406\u3001\u79df\u6237\u7ba1\u7406\u7b49\uff0c\u5747\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u76f4\u63a5\u6216\u95f4\u63a5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/en/internal_concepts/rudder"},"rudder")," \u7ba1\u7406\u3002"),(0,l.kt)("h3",{id:"\u5e73\u53f0\u7684\u79df\u6237"},"\u5e73\u53f0\u7684\u79df\u6237"),(0,l.kt)("p",null,"tkeel \u5728\u8bbe\u8ba1\u65f6\u8003\u8651\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\uff0c\u5e76\u4fdd\u8bc1\u5404\u7528\u6237\u95f4\u6570\u636e\u7684\u9694\u79bb\u6027\uff0c\u51b3\u5b9a\u53c2\u8003\u591a\u79df\u6237\u7684\u8f6f\u4ef6\u67b6\u6784\u8bbe\u8ba1\u3002",(0,l.kt)("a",{parentName:"p",href:"/en/developer_cookbook/security/SECURITY-003-multi_tenancy.md"},"tkeelMultiTenancy")," "),(0,l.kt)("h3",{id:"\u5e73\u53f0\u7684\u7528\u6237"},"\u5e73\u53f0\u7684\u7528\u6237"),(0,l.kt)("p",null,"\u7528\u6237\u90fd\u5c5e\u4e8e\u67d0\u4e2a\u79df\u6237\u7a7a\u95f4\u5185\uff0c\u7528\u6237\u7684\u533a\u522b\u7531\u89d2\u8272\u5b9a\u4e49\uff0c\u5728\u521b\u5efa\u79df\u6237\u65f6\u53ef\u9644\u5e26\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u7cfb\u7edf\u4f1a\u9ed8\u8ba4\u521b\u5efa ",(0,l.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458")," \u89d2\u8272\uff0c\u5e76\u8d4b\u4e88\u8be5\u521b\u5efa\u7684\u7528\u6237\uff0c\u5176\u4ed6\u89d2\u8272\u7531\u79df\u6237\u7ba1\u7406\u5458\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u4ece\u8fd9\u4e0d\u96be\u770b\u51fa\u5728\u79df\u6237\u7a7a\u95f4\u5185\u79df\u6237\u7ba1\u7406\u5458\u6709\u7740\u6700\u5927\u6743\u9650\uff0c\u7ba1\u7406\u5458\u53ef\u57fa\u4e8e\u89d2\u8272\u505a ",(0,l.kt)("a",{parentName:"p",href:"#%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6"},"\u6743\u9650")," \u5206\u914d\uff0c\u4fdd\u8bc1\u79df\u6237\u7a7a\u95f4\u7684\u6570\u636e\u8bbf\u95ee\u5b89\u5168\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\u7684\u6838\u5fc3"},"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\u7684\u6838\u5fc3"),(0,l.kt)("p",null,"\u5b9e\u4f53\u5b89\u5168\u673a\u5236\u7684\u6838\u5fc3\u662f\u5e73\u53f0\u4e3a\u5b9e\u4f53\u9881\u53d1\u7684\u8eab\u4efd\u4ee4\u724c\uff0c\u4f5c\u4e3a\u5b9e\u4f53\u7684\u51ed\u8bc1\uff0c\u5b9e\u4f53\u63a5\u5165\u5e73\u53f0\u4f1a\u57fa\u4e8e\u6b64\u51ed\u8bc1\u8ba4\u8bc1\u5b9e\u4f53\u662f\u5426\u5408\u6cd5\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bbe\u5907\u4fbf\u662f\u4e00\u79cd\u5b9e\u4f53\u3002")),(0,l.kt)("h3",{id:"\u5e94\u7528\u63a5\u53e3\u7684\u8bbf\u95ee"},"\u5e94\u7528\u63a5\u53e3\u7684\u8bbf\u95ee"),(0,l.kt)("p",null,"\u5f53\u5916\u90e8\u4ee5\u8c03\u7528\u63a5\u53e3\u7684\u65b9\u5f0f\u8bbf\u95ee\u5e73\u53f0\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u5e73\u53f0\u7684\u8ba4\u8bc1\u670d\u52a1\u7684\u6210\u529f\u8ba4\u8bc1\u624d\u80fd\u8bbf\u95ee\u5230\u76f8\u5e94\u63a5\u53e3\u3002",(0,l.kt)("a",{parentName:"p",href:"/en/developer_cookbook/security/SECURITY-004-authentication"},"\u8ba4\u8bc1\u670d\u52a1")," \u7684\u8eab\u4efd\u9a8c\u8bc1\u591a\u6837\u5316\u7684\u3002"))}k.isMDXComponent=!0}}]);