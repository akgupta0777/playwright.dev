(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(152)),a=(n(155),n(156),{id:"extensibility",title:"Extensibility"}),c={unversionedId:"extensibility",id:"extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/docs/extensibility.mdx",slug:"/extensibility",permalink:"/csharp/docs/extensibility",version:"current",sidebar:"docs",previous:{title:"Events",permalink:"/csharp/docs/events"},next:{title:"Input",permalink:"/csharp/docs/input"}},l=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),Object(o.b)("h2",{id:"custom-selector-engines"},"Custom selector engines"),Object(o.b)("p",null,"Playwright supports custom selector engines, registered with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-selectors#selectorsregistername-script-options"}),"Selectors.Register(name, script[, options])"),"."),Object(o.b)("p",null,"Selector engine should have the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",Object(o.b)("inlineCode",{parentName:"li"},"root")," (root is either a ",Object(o.b)("inlineCode",{parentName:"li"},"Document"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Element"),") to a ",Object(o.b)("inlineCode",{parentName:"li"},"target")," element."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",Object(o.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(o.b)("inlineCode",{parentName:"li"},"root"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",Object(o.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(o.b)("inlineCode",{parentName:"li"},"root"),".")),Object(o.b)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",Object(o.b)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",Object(o.b)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),Object(o.b)("p",null,"An example of registering selector engine that queries elements based on a tag name:"))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";var r=n(0),i=n(154);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},155:function(e,t,n){"use strict";n(0),n(153),n(151),n(53)},156:function(e,t,n){"use strict";n(3),n(0)}}]);