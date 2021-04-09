(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(152)),i=(a(155),a(156),{id:"core-concepts",title:"Core concepts"}),o={unversionedId:"core-concepts",id:"core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/docs/core-concepts.mdx",slug:"/core-concepts",permalink:"/csharp/docs/core-concepts",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/csharp/docs/intro"},next:{title:"Debugging tools",permalink:"/csharp/docs/debug"}},l=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),Object(c.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#execution-contexts-playwright-and-browser"}),"Execution contexts: Playwright and Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#evaluation-argument"}),"Evaluation Argument"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser"},"Browser"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-browser",title:"Browser"}),"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),Object(c.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-browser",title:"Browser"}),"Browser"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. Browser contexts can be used to parallelize isolated test executions."),Object(c.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(c.b)("p",null,"A Browser context can have multiple pages. A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Read more on ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/navigations"}),"page navigation and loading"),".")),Object(c.b)("p",null,"A page can have one or more ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",Object(c.b)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),Object(c.b)("p",null,"A page can have additional frames attached with the ",Object(c.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page",title:"Page"}),"Page")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-frame",title:"Frame"}),"Frame")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pageframename"}),"Page.Frame(name)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"selectors"},"Selectors"),Object(c.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(c.b)("inlineCode",{parentName:"p"},"id"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(c.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(c.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(c.b)("p",null,"Learn more about selectors and selector engines ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/selectors"}),"here"),"."),Object(c.b)("p",null,"Some examples below:"),Object(c.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(c.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(c.b)("br",null),Object(c.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(c.b)("p",null,"Actions like ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#pageclickselector-options"}),"Page.Click(selector[, options])")," and ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#pagefillselector-value-options"}),"Page.Fill(selector, value[, options])")," auto-wait for the element to be visible and ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/actionability"}),"actionable"),". For example, click will:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(c.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(c.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(c.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(c.b)("li",{parentName:"ul"},"scroll the element into view"),Object(c.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(c.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(c.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(c.b)("p",null,"... or to become hidden or detached"),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pageclickselector-options"}),"Page.Click(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pagefillselector-value-options"}),"Page.Fill(selector, value[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pagewaitforselectorselector-options"}),"Page.WaitForSelector(selector[, options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),Object(c.b)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#pageevaluateexpression-arg"}),"Page.Evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",Object(c.b)("inlineCode",{parentName:"p"},"window")," and ",Object(c.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(c.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(c.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(c.b)("h2",{id:"evaluation-argument"},"Evaluation Argument"),Object(c.b)("p",null,"Playwright evaluation methods like ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#pageevaluateexpression-arg"}),"Page.Evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),Object(c.b)("p",null,"Right:"),Object(c.b)("p",null,"Wrong:"),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pageevaluateexpression-arg"}),"Page.Evaluate(expression[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-frame#frameevaluateexpression-arg"}),"Frame.Evaluate(expression[, arg])")),Object(c.b)("li",{parentName:"ul"},"[EvaluationArgument]")),Object(c.b)("br",null))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return a?n.a.createElement(h,o(o({ref:t},s),{},{components:a})):n.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var r=a(0),n=a(154);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)}}]);