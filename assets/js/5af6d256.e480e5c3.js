"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9160],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},55064:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(67294),i=t(79443);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var g=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,g=e.values,u=e.groupId,d=e.className,m=o(),f=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,n.useState)(i),h=v[0],w=v[1],N=n.Children.toArray(e.children),y=[];if(null!=u){var b=f[u];null!=b&&b!==h&&g.some((function(e){return e.value===b}))&&w(b)}var x=function(e){var a=e.currentTarget,t=y.indexOf(a),n=g[t].value;w(n),null!=u&&(k(u,n),setTimeout((function(){var e,t,n,i,o,r,l,s;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,t>=0&&o<=s&&i<=l&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(p),setTimeout((function(){return a.classList.remove(p)}),2e3))}),150))},C=function(e){var a,t;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case s:var i=y.indexOf(e.target)-1;t=y[i]||y[y.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},d)},g.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":h===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),a?(0,n.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},33549:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var n=t(22122),i=t(19756),o=(t(67294),t(3905)),r=(t(55064),t(58215),{id:"navigations",title:"Navigations"}),l=void 0,p={unversionedId:"navigations",id:"version-1.13/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.13/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/docs/1.13/navigations",version:"1.13",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.13/docs",previous:{title:"Multi-page scenarios",permalink:"/docs/1.13/multi-pages"},next:{title:"Network",permalink:"/docs/1.13/network"}},s=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],c={toc:s};function g(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-url"},"page.url()")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-dom-content-loaded"},"page.on('domcontentloaded')")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-load"},"page.on('load')")," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Navigate the page\nawait page.goto('https://example.com');\n")),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Navigate and wait until network is idle\nawait page.goto('https://example.com', { waitUntil: 'networkidle' });\n")),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-click"},"page.click(selector[, options])")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Navigate and wait for element\nawait page.goto('https://example.com');\nawait page.waitForSelector('text=Example Domain');\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.goto('https://example.com');\nawait page.click('text=Example Domain');\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-goto"},"page.goto(url[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-reload"},"page.reload([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-go-back"},"page.goBack([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-go-forward"},"page.goForward([options])"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-click"},"page.click(selector[, options])")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-click"},"page.click(selector[, options])")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Click will auto-wait for navigation to complete\nawait page.click('text=Login');\n\n// Fill will auto-wait for element on navigated page\nawait page.fill('#username', 'John Doe');\n")),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-load-state"},"page.waitForLoadState([state, options])")," to wait for a loading event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('button'); // Click triggers navigation\nawait page.waitForLoadState('networkidle'); // This resolves after 'networkidle'\n")),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-click"},"page.click(selector[, options])")," auto-wait for elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Click will auto-wait for the element and trigger navigation\nawait page.click('text=Login');\n// Wait for the element\nawait page.waitForSelector('#username');\n\n// Click triggers navigation\nawait page.click('text=Login');\n// Fill will auto-wait for element\nawait page.fill('#username', 'John Doe');\n")),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-navigation"},"page.waitForNavigation([options])"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  page.waitForNavigation(), // Waits for the next navigation\n  page.click('div.delayed-navigation'), // Triggers a navigation after a timeout\n]);\n")),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-navigation"},"page.waitForNavigation([options])")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  page.waitForNavigation({ url: '**/login' }),\n  page.click('a'), // Triggers a navigation with a script redirect\n]);\n")),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-load-state"},"page.waitForLoadState([state, options])")," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [ popup ] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('a[target=\"_blank\"]'),  // Opens popup\n]);\nawait popup.waitForLoadState('load');\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-click"},"page.click(selector[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-wait-for-load-state"},"page.waitForLoadState([state, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-wait-for-navigation"},"page.waitForNavigation([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-wait-for-function"},"page.waitForFunction(pageFunction[, arg, options])"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.13/api/class-page#page-wait-for-function"},"page.waitForFunction(pageFunction[, arg, options])")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-wait-for-function"},"page.waitForFunction(pageFunction[, arg, options])"))))}g.isMDXComponent=!0},86010:function(e,a,t){function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function i(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}t.d(a,{Z:function(){return i}})}}]);