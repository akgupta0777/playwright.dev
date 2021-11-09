"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4575],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,m=e.values,f=e.groupId,p=e.className,d=o(),v=d.tabGroupChoices,g=d.setTabGroupChoices,h=(0,r.useState)(a),b=h[0],y=h[1],k=r.Children.toArray(e.children),w=[];if(null!=f){var O=v[f];null!=O&&O!==b&&m.some((function(e){return e.value===O}))&&y(O)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;y(r),null!=f&&(g(f,r),setTimeout((function(){var e,n,r,a,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},5614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"frames",title:"Pages and frames"}),c=void 0,s={unversionedId:"frames",id:"frames",isDocsHomePage:!1,title:"Pages and frames",description:"- Frames",source:"@site/docs/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/dotnet/docs/next/frames",version:"current",frontMatter:{id:"frames",title:"Pages and frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/next/extensibility"},next:{title:"Handles",permalink:"/dotnet/docs/next/handles"}},l=[{value:"Frames",id:"frames",children:[]},{value:"Frame objects",id:"frame-objects",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frames"},"Frames")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frame-objects"},"Frame objects"))),(0,o.kt)("h2",{id:"frames"},"Frames"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page",title:"Page"},"Page")," can have one or more ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,o.kt)("p",null,"A page can have additional frames attached with the ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Locate element inside frame\nvar username = await page.FrameLocator(".frame-class").Locator("#username-input");\nawait username.FillAsync("John");\n')),(0,o.kt)("h2",{id:"frame-objects"},"Frame objects"),(0,o.kt)("p",null,"One can access frame objects using the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-frame"},"Page.Frame(name)")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Get frame using the frame\'s name attribute\nvar frame = page.Frame("frame-login");\n\n// Get frame using frame\'s URL\nvar frame = page.FrameByUrl("*domain.");\n\n// Get frame using any other selector\nvar frameElementHandle = await page.QuerySelectorAsync(".frame-class");\nvar frame = await frameElementHandle.ContentFrameAsync();\n\n// Interact with the frame\nawait frame.FillAsync("#username-input", "John");\n')))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);