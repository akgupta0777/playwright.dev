(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,j=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(j,s(s({ref:t},l),{},{components:r})):n.a.createElement(j,s({ref:t},l))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var a=r(0),n=r(154);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(55)},156:function(e,t,r){"use strict";r(3),r(0)},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(152)),c=(r(155),r(156),{id:"network",title:"Network"}),s={unversionedId:"network",id:"network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",slug:"/network",permalink:"/java/docs/network",version:"current",sidebar:"docs",previous:{title:"Navigations",permalink:"/java/docs/navigations"},next:{title:"Page Object Models",permalink:"/java/docs/pom"}},i=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"HTTP Proxy",id:"http-proxy",children:[]},{value:"Network events",id:"network-events",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handle requests",id:"handle-requests",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides APIs to ",Object(o.b)("strong",{parentName:"p"},"monitor")," and ",Object(o.b)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .withHttpCredentials("bill", "pa55w0rd"));\nPage page = context.newPage();\npage.navigate("https://example.com");\n')),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(o.b)("h2",{id:"http-proxy"},"HTTP Proxy"),Object(o.b)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),Object(o.b)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),Object(o.b)("p",null,"Here is an example of a global proxy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .withProxy(new Proxy(\"http://myproxy.com:3128\")\n  .withUsername('usr')\n  .withPassword('pwd'));\n")),Object(o.b)("p",null,"When specifying proxy for each context individually, you need to give Playwright a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .withProxy(new Proxy("per-context"));\nBrowserContext context = chromium.launch(new Browser.NewContextOptions()\n  .withProxy(new Proxy("http://myproxy.com:3128"));\n')),Object(o.b)("h2",{id:"network-events"},"Network events"),Object(o.b)("p",null,"You can monitor all the requests and responses:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onRequest(request -> System.out.println(">> " + request.method() + " " + request.url()));\n      page.onResponse(response -> System.out.println("<<" + response.status() + " " + response.url()));\n      page.navigate("https://example.com");\n      browser.close();\n    }\n  }\n}\n')),Object(o.b)("p",null,"Or wait for a network response after the button click:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Use a glob URL pattern\nResponse response = page.waitForResponse("**/api/fetch_data", () -> {\n  page.click("button#update");\n});\n')),Object(o.b)("h4",{id:"variations"},"Variations"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Use a RegExp\nResponse response = page.waitForResponse(Pattern.compile("\\\\.jpeg$"), () -> {\n  page.click("button#update");\n});\n\n// Use a predicate taking a Response object\nResponse response = page.waitForResponse(r -> r.url().contains(token), () -> {\n  page.click("button#update");\n});\n')),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-request",title:"Request"}),"Request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-response",title:"Response"}),"Response")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageonrequesthandler"}),"Page.onRequest(handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageonresponsehandler"}),"Page.onResponse(handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforrequesturlorpredicate-options-callback"}),"Page.waitForRequest(urlOrPredicate[, options, callback])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforresponseurlorpredicate-options-callback"}),"Page.waitForResponse(urlOrPredicate[, options, callback])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"handle-requests"},"Handle requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'page.route("**/api/fetch_data", route -> route.fulfill(new Route.FulfillOptions()\n  .withStatus(200)\n  .withBody(testData)));\npage.navigate("https://example.com");\n')),Object(o.b)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.b)("h4",{id:"variations-1"},"Variations"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'browserContext.route("**/api/login", route -> route.fulfill(new Route.FulfillOptions()\n  .withStatus(200)\n  .withBody("accept")));\npage.navigate("https://example.com");\n')),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextrouteurl-handler"}),"BrowserContext.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextunrouteurl-handler"}),"BrowserContext.unroute(url[, handler])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagerouteurl-handler"}),"Page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageunrouteurl-handler"}),"Page.unroute(url[, handler])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-route",title:"Route"}),"Route"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"modify-requests"},"Modify requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Delete header\npage.route("**/*", route -> {\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.remove("X-Secret");\n    route.resume(new Route.ResumeOptions().withHeaders(headers));\n});\n\n// Continue requests as POST.\npage.route("**/*", route -> route.resume(new Route.ResumeOptions().withMethod("POST")));\n')),Object(o.b)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.b)("h2",{id:"abort-requests"},"Abort requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'page.route("**/*.{png,jpg,jpeg}", route -> route.abort());\n\n// Abort based on the request type\npage.route("**/*", route -> {\n  if ("image".equals(route.request().resourceType()))\n    route.abort();\n  else\n    route.resume();\n});\n')),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagerouteurl-handler"}),"Page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextrouteurl-handler"}),"BrowserContext.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-route#routeaborterrorcode"}),"Route.abort([errorCode])"))),Object(o.b)("br",null))}p.isMDXComponent=!0}}]);