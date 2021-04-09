(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(152)),c=(r(155),r(156),{id:"class-playwright",title:"Playwright"}),o={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/csharp/docs/api/class-playwright",version:"current",sidebar:"api",next:{title:"Browser",permalink:"/csharp/docs/api/class-browser"}},l=[{value:"Playwright.Chromium",id:"playwrightchromium",children:[]},{value:"Playwright.Firefox",id:"playwrightfirefox",children:[]},{value:"Playwright.Selectors",id:"playwrightselectors",children:[]},{value:"Playwright.Webkit",id:"playwrightwebkit",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-playwright#playwrightchromium"}),"Playwright.Chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-playwright#playwrightfirefox"}),"Playwright.Firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-playwright#playwrightselectors"}),"Playwright.Selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-playwright#playwrightwebkit"}),"Playwright.Webkit"))),Object(i.b)("h2",{id:"playwrightchromium"},"Playwright.Chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/csharp/docs/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightfirefox"},"Playwright.Firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/csharp/docs/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightselectors"},"Playwright.Selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/csharp/docs/selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"Playwright.Webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/csharp/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/csharp/docs/api/class-browser",title:"Browser"}),"Browser"),"."))}p.isMDXComponent=!0},151:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(c,".").concat(h)]||u[h]||b[h]||i;return r?n.a.createElement(f,o(o({ref:t},s),{},{components:r})):n.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var a=r(0),n=r(154);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(53)},156:function(e,t,r){"use strict";r(3),r(0)}}]);