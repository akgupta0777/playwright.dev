(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{151:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,h=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(h,s(s({ref:t},l),{},{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var n=r(0),a=r(154);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(53)},156:function(e,t,r){"use strict";r(3),r(0)},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(152)),c=(r(155),r(156),{id:"screenshots",title:"Screenshots"}),s={unversionedId:"screenshots",id:"screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/docs/screenshots.mdx",slug:"/screenshots",permalink:"/csharp/docs/screenshots",version:"current"},i=[{value:"Full page screenshots",id:"full-page-screenshots",children:[]},{value:"Capture into buffer",id:"capture-into-buffer",children:[]},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[]}]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),Object(o.b)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#full-page-screenshots"}),"Full page screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#capture-into-buffer"}),"Capture into buffer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#element-screenshot"}),"Element screenshot"))),Object(o.b)("h2",{id:"full-page-screenshots"},"Full page screenshots"),Object(o.b)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),Object(o.b)("h2",{id:"capture-into-buffer"},"Capture into buffer"),Object(o.b)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),Object(o.b)("h2",{id:"element-screenshot"},"Element screenshot"),Object(o.b)("p",null,"Sometimes it is useful to take a screenshot of a single element."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pagescreenshotoptions"}),"Page.Screenshot([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/csharp/docs/api/class-elementhandle#elementhandlescreenshotoptions"}),"ElementHandle.Screenshot([options])"))))}u.isMDXComponent=!0}}]);