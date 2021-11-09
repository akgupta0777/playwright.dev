"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9449],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),u="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=o(),g=v.tabGroupChoices,f=v.setTabGroupChoices,b=(0,a.useState)(r),h=b[0],y=b[1],w=a.Children.toArray(e.children),k=[];if(null!=d){var j=g[d];null!=j&&j!==h&&p.some((function(e){return e.value===j}))&&y(j)}var x=function(e){var t=e.currentTarget,n=k.indexOf(t),a=p[n].value;y(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,u,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,u=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case s:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7154:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"evaluating",title:"Evaluating JavaScript"}),u=void 0,l={unversionedId:"evaluating",id:"evaluating",isDocsHomePage:!1,title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/docs/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/java/docs/next/evaluating",version:"current",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"docs",previous:{title:"Emulation",permalink:"/java/docs/next/emulation"},next:{title:"Events",permalink:"/java/docs/next/events"}},s=[{value:"Evaluation Argument",id:"evaluation-argument",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String href = (String) page.evaluate("document.location.href");\n')),(0,o.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'int status = (int) page.evaluate("async () => {\\n" +\n  "  const response = await fetch(location.href);\\n" +\n  "  return response.status;\\n" +\n  "}");\n')),(0,o.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,o.kt)("p",null,"Playwright evaluation methods like ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// A primitive value.\npage.evaluate("num => num", 42);\n\n// An array.\npage.evaluate("array => array.length", Arrays.asList(1, 2, 3));\n\n// An object.\nMap<String, Object> obj = new HashMap<>();\nobj.put("foo", "bar");\npage.evaluate("object => object.foo", obj);\n\n// A single handle.\nElementHandle button = page.querySelector("button");\npage.evaluate("button => button.textContent", button);\n\n// Alternative notation using elementHandle.evaluate.\nbutton.evaluate("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nElementHandle button1 = page.querySelector(".button1");\nElementHandle button2 = page.querySelector(".button2");\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("o => o.button1.textContent + o.button2.textContent", arg);\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("({ button1, button2 }) => button1.textContent + button2.textContent", arg);\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\npage.evaluate(\n  "([b1, b2]) => b1.textContent + b2.textContent",\n  Arrays.asList(button1, button2));\n\n// Any non-cyclic mix of serializables and handles works.\nMap<String, Object> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("list", Arrays.asList(button2));\narg.put("foo", 0);\npage.evaluate(\n  "x => x.button1.textContent + x.list[0].textContent + String(x.foo)",\n  arg);\n')),(0,o.kt)("p",null,"Right:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\n// Pass |data| as a parameter.\nObject result = page.evaluate("data => {\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}", data);\n')),(0,o.kt)("p",null,"Wrong:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\nObject result = page.evaluate("() => {\\n" +\n  "  // There is no |data| in the web page.\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}");\n')))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);