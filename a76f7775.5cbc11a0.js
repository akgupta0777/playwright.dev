(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{392:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(599)),i={id:"class-route",title:"Route"},l={unversionedId:"api/class-route",id:"version-1.5.0/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with page.route(url, handler) or browserContext.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.5.0/api/class-route.mdx",slug:"/api/class-route",permalink:"/docs/1.5.0/api/class-route",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"Selectors",permalink:"/docs/1.5.0/api/class-selectors"},next:{title:"TimeoutError",permalink:"/docs/1.5.0/api/class-timeouterror"}},c=[{value:"route.abort(errorCode)",id:"routeaborterrorcode",children:[]},{value:"route.continue(overrides)",id:"routecontinueoverrides",children:[]},{value:"route.fulfill(response)",id:"routefulfillresponse",children:[]},{value:"route.request()",id:"routerequest",children:[]}],b={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Whenever a network route is set up with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextrouteurl-handler"}),"browserContext.route(url, handler)"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#routeaborterrorcode"}),"route.abort([errorCode])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#routecontinueoverrides"}),"route.continue([overrides])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#routefulfillresponse"}),"route.fulfill(response)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#routerequest"}),"route.request()"))),Object(o.b)("h2",{id:"routeaborterrorcode"},"route.abort(","[errorCode]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"errorCode")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Optional error code. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"failed"),", could be\none of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means\nthat there is no route to the specified host or network."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Aborts the route's request."),Object(o.b)("h2",{id:"routecontinueoverrides"},"route.continue(","[overrides]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overrides")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Optional request overrides, which can be one of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> If set changes the request method (e.g. GET or POST)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"postData")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> If set changes the post data of request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> If set changes the request HTTP headers. Header values will be converted to a string."))),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Continues route's request with optional overrides."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*', (route, request) => {\n  // Override headers\n  const headers = {\n    ...request.headers(),\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  };\n  route.continue({headers});\n});\n")),Object(o.b)("h2",{id:"routefulfillresponse"},"route.fulfill(response)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"response")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Response that will fulfill this route's request.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Response status code, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> Optional response headers. Header values will be converted to a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contentType")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> If set, equals to setting ",Object(o.b)("inlineCode",{parentName:"li"},"Content-Type")," response header."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"body")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> Optional response body."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Optional file path to respond with. The content type will be inferred from file extension. If ",Object(o.b)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),"."))),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Fulfills route's request with given response."),Object(o.b)("p",null,"An example of fulfilling all requests with 404 responses:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*', route => {\n  route.fulfill({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n")),Object(o.b)("p",null,"An example of serving static file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/xhr_endpoint', route => route.fulfill({ path: 'mock_data.json' }));\n")),Object(o.b)("h2",{id:"routerequest"},"route.request()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-request#class-request",title:"Request"}),"Request"),"> A request to be routed.")))}s.isMDXComponent=!0},599:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?n.a.createElement(m,l(l({ref:t},b),{},{components:r})):n.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);