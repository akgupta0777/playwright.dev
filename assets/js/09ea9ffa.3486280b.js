(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[45239],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,r,t){"use strict";var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},41395:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(67294),a=t(80944),o=t(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var r=e.lazy,t=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=(0,a.Z)(),f=h.tabGroupChoices,w=h.setTabGroupChoices,b=(0,n.useState)(p),g=b[0],v=b[1],k=n.Children.toArray(e.children),N=[];if(null!=m){var y=f[m];null!=y&&y!==g&&u.some((function(e){return e.value===y}))&&v(y)}var C=function(e){var r=e.currentTarget,t=N.indexOf(r),n=u[t].value;v(n),null!=m&&(w(m,n),setTimeout((function(){var e,t,n,a,o,i,c,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&a<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},x=function(e){var r,t;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),r?(0,n.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},79443:function(e,r,t){"use strict";var n=(0,t(67294).createContext)(void 0);r.Z=n},80944:function(e,r,t){"use strict";var n=t(67294),a=t(79443);r.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},85797:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=(t(41395),t(58215),{id:"class-chromiumbrowser",title:"ChromiumBrowser"}),s={unversionedId:"api/class-chromiumbrowser",id:"version-1.10.0/api/class-chromiumbrowser",isDocsHomePage:!1,title:"ChromiumBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.10.0/api/class-chromiumbrowser.mdx",sourceDirName:"api",slug:"/api/class-chromiumbrowser",permalink:"/docs/1.10.0/api/class-chromiumbrowser",version:"1.10.0",frontMatter:{id:"class-chromiumbrowser",title:"ChromiumBrowser"},sidebar:"version-1.10.0/api",previous:{title:"CDPSession",permalink:"/docs/1.10.0/api/class-cdpsession"},next:{title:"ChromiumBrowserContext",permalink:"/docs/1.10.0/api/class-chromiumbrowsercontext"}},c=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser",title:"Browser"},"Browser"))),(0,o.kt)("p",null,"Chromium-specific features including Tracing, service worker support, etc. You can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing([page, options])")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()")," to create a trace file which can be opened in Chrome DevTools or ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/timeline-viewer/"},"timeline viewer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-chromiumbrowser",title:"ChromiumBrowser"},"ChromiumBrowser")," can also be used for testing Chrome Extensions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Extensions in Chrome / Chromium currently only work in non-headless mode."))),(0,o.kt)("p",null,"The following is code for getting a handle to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"background page")," of an extension whose source is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing([page, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browserondisconnected"},"browser.on('disconnected')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browserclose"},"browser.close()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browsercontexts"},"browser.contexts()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browserisconnected"},"browser.isConnected()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browsernewpageoptions"},"browser.newPage([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-browser#browserversion"},"browser.version()"))),(0,o.kt)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-cdpsession",title:"CDPSession"},"CDPSession"),">>")),(0,o.kt)("p",null,"Returns the newly created browser session."),(0,o.kt)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page")," <",(0,o.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page",title:"Page"},"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"categories")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">> specify custom categories to use instead of default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> A path to write the trace file to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"screenshots")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"> captures screenshots in the trace.")))),(0,o.kt)("p",null,"Only one trace can be active at a time per browser."),(0,o.kt)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">>")),(0,o.kt)("p",null,"Returns the buffer with trace data."))}p.isMDXComponent=!0},86010:function(e,r,t){"use strict";function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);