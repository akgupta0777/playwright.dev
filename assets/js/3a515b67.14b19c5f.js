(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[11764],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return g},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,l(l({ref:t},g),{},{components:r})):n.createElement(m,l({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(67294),a=r(80944),i=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var g=function(e){var t=e.lazy,r=e.block,g=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=(0,a.Z)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,b=(0,n.useState)(g),v=b[0],k=b[1],y=n.Children.toArray(e.children),N=[];if(null!=p){var O=f[p];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&k(O)}var w=function(e){var t=e.currentTarget,r=N.indexOf(t),n=u[r].value;k(n),null!=p&&(h(p,n),setTimeout((function(){var e,r,n,a,i,l,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case s:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},80944:function(e,t,r){"use strict";var n=r(67294),a=r(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9409:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return g}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l=(r(41395),r(58215),{id:"class-logger",title:"Logger"}),o={unversionedId:"api/class-logger",id:"api/class-logger",isDocsHomePage:!1,title:"Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/docs/api/class-logger.mdx",sourceDirName:"api",slug:"/api/class-logger",permalink:"/docs/next/api/class-logger",version:"current",frontMatter:{id:"class-logger",title:"Logger"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/next/api/class-keyboard"},next:{title:"Mouse",permalink:"/docs/next/api/class-mouse"}},s=[{value:"logger.isEnabled(name, severity)",id:"logger-is-enabled",children:[]},{value:"logger.log(name, severity, message, args, hints)",id:"logger-log",children:[]}],c={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'browser',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  ...\n})();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-logger#logger-is-enabled"},"logger.isEnabled(name, severity)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-logger#logger-log"},"logger.log(name, severity, message, args, hints)"))),(0,i.kt)("h2",{id:"logger-is-enabled"},"logger.isEnabled(name, severity)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,i.kt)("a",{href:"#logger-is-enabled-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"severity"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,i.kt)("a",{href:"#logger-is-enabled-option-severity",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,i.kt)("a",{href:"#logger-is-enabled-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Determines whether sink is interested in the logger with the given name and severity."),(0,i.kt)("h2",{id:"logger-log"},"logger.log(name, severity, message, args, hints)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,i.kt)("a",{href:"#logger-log-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"severity"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,i.kt)("a",{href:"#logger-log-option-severity",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-message"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"),">"," log message format",(0,i.kt)("a",{href:"#logger-log-option-message",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-args"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," message arguments",(0,i.kt)("a",{href:"#logger-log-option-args",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hints"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-option-hints"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," optional formatting hints",(0,i.kt)("a",{href:"#logger-log-option-hints",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional preferred logger color."))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#logger-log-return",class:"list-anchor"},"#"))))}g.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);