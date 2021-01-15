(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(599)),i={id:"multi-pages",title:"Multi-page scenarios"},c={unversionedId:"multi-pages",id:"version-1.5.0/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple",source:"@site/versioned_docs/version-1.5.0/multi-pages.mdx",slug:"/multi-pages",permalink:"/docs/1.5.0/multi-pages",version:"1.5.0",sidebar:"version-1.5.0/docs",previous:{title:"Navigations",permalink:"/docs/1.5.0/navigations"},next:{title:"Authentication",permalink:"/docs/1.5.0/auth"}},p=[{value:"Multiple contexts",id:"multiple-contexts",children:[]},{value:"Multiple pages",id:"multiple-pages",children:[]},{value:"Handling new pages",id:"handling-new-pages",children:[]},{value:"Handling popups",id:"handling-popups",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple\ntabs in a browser window."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),Object(o.b)("h2",{id:"multiple-contexts"},"Multiple contexts"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/core-concepts#browser-contexts"}),"Browser contexts")," are isolated environments\non a single browser instance. Playwright can create multiple browser contexts\nwithin a single scenario. This is useful when you want to test for\nmulti-user functionality, like chat."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Load user and admin cookies\nawait userContext.addCookies(userCookies);\nawait adminContext.addCookies(adminCookies);\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#class-browsercontext"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browsernewcontextoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextaddcookiescookies"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.addCookies(cookies)")))),Object(o.b)("h2",{id:"multiple-pages"},"Multiple pages"),Object(o.b)("p",null,"Each browser context can host multiple pages (tabs)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front\nis not required."),Object(o.b)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes,\ncustom network routes or browser locale.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a brower context\nconst allPages = context.pages();\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#class-page"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"Page"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextnewpage"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.newPage()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextpages"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.pages()")))),Object(o.b)("h2",{id:"handling-new-pages"},"Handling new pages"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are\ncreated in the context. This can be used to handle new pages opened by\n",Object(o.b)("inlineCode",{parentName:"p"},'target="_blank"')," links."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),Object(o.b)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  await page.title();\n})\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#event-page"}),"event: 'page'"))),Object(o.b)("h2",{id:"handling-popups"},"Handling popups"),Object(o.b)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the\n",Object(o.b)("inlineCode",{parentName:"p"},"popup")," event on the page."),Object(o.b)("p",null,"This event is emitted in addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but\nonly for popups relevant to this page."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nawait popup.title();\n")),Object(o.b)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#event-popup"}),"event: 'popup'"))))}s.isMDXComponent=!0},599:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),g=a,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);