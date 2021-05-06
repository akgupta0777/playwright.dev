(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return b}));var r=o(3),n=o(7),a=(o(0),o(152)),i=(o(155),o(156),{id:"browsers",title:"Browsers"}),s={unversionedId:"browsers",id:"browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment.",source:"@site/docs/browsers.mdx",slug:"/browsers",permalink:"/csharp/docs/browsers",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/csharp/docs/auth"},next:{title:"Dialogs",permalink:"/csharp/docs/dialogs"}},c=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[{value:"Firefox-Stable",id:"firefox-stable",children:[]}]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]}],l={toc:c};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#chromium"}),"Chromium")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#firefox"}),"Firefox")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#webkit"}),"WebKit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"))),Object(a.b)("h2",{id:"chromium"},"Chromium"),Object(a.b)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. These builds match the current ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/9027636?hl=en"}),"Chrome Dev Channel")," at the time of each Playwright release, i.e. it is new with every Playwright update. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome 89, Playwright already supports Chromium 91 that will hit Google Chrome and Microsoft Edge if a few weeks."),Object(a.b)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),Object(a.b)("h2",{id:"firefox"},"Firefox"),Object(a.b)("p",null,"Playwright's Firefox version matches the recent ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/"}),"Firefox Beta")," build."),Object(a.b)("h3",{id:"firefox-stable"},"Firefox-Stable"),Object(a.b)("p",null,"Playwright team maintains a Playwright Firefox version that matches the latest Firefox Stable, a.k.a. ",Object(a.b)("inlineCode",{parentName:"p"},"firefox-stable"),"."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"firefox-stable")," is a 2-steps process:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Installing ",Object(a.b)("inlineCode",{parentName:"p"},"firefox-stable")," with Playwright CLI.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Using ",Object(a.b)("inlineCode",{parentName:"p"},"firefox-stable")," channel when launching browser."))),Object(a.b)("h2",{id:"webkit"},"WebKit"),Object(a.b)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. We are also working on a dedicated support for builds that would match Apple Safari Technology Preview."),Object(a.b)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),Object(a.b)("p",null,"While Playwright will download and use the recent Chromium build by default, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Playwright bundles a recent Chromium build, but not Google Chrome or Microsoft Edge browsers - these should be installed manually before use."))),Object(a.b)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Defaults")),Object(a.b)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Regression testing")),Object(a.b)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",Object(a.b)("inlineCode",{parentName:"p"},'"chrome"')," or ",Object(a.b)("inlineCode",{parentName:"p"},'"msedge"'),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Media codecs")),Object(a.b)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Enterprise policy")),Object(a.b)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."))}b.isMDXComponent=!0},151:function(e,t,o){"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=b(o),p=r,d=h["".concat(i,".").concat(p)]||h[p]||u[p]||a;return o?n.a.createElement(d,s(s({ref:t},l),{},{components:o})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},153:function(e,t,o){"use strict";var r=o(0),n=o(154);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,o){"use strict";var r=o(0),n=Object(r.createContext)(void 0);t.a=n},155:function(e,t,o){"use strict";o(0),o(153),o(151),o(53)},156:function(e,t,o){"use strict";o(3),o(0)}}]);