(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6763],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),p=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var s=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return s.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(7294),r=n(944),a=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,s.useState)(u),b=k[0],g=k[1],y=s.Children.toArray(e.children),j=[];if(null!=d){var N=h[d];null!=N&&N!==b&&c.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),s=c[n].value;g(s),null!=d&&(v(d,s),setTimeout((function(){var e,n,s,r,a,o,i,p;(e=t.getBoundingClientRect(),n=e.top,s=e.left,r=e.bottom,a=e.right,o=window,i=o.innerHeight,p=o.innerWidth,n>=0&&a<=p&&r<=i&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},R=function(e){var t,n;switch(e.keyCode){case p:var s=j.indexOf(e.target)+1;n=j[s]||j[0];break;case i:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return s.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:R,onFocus:x,onClick:x},n)}))),t?(0,s.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var s=(0,n(7294).createContext)(void 0);t.Z=s},944:function(e,t,n){"use strict";var s=n(7294),r=n(9443);t.Z=function(){var e=(0,s.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7206:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var s=n(2122),r=n(9756),a=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"class-response",title:"Response"}),l={unversionedId:"api/class-response",id:"api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/docs/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/next/api/class-response",version:"current",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/java/docs/next/api/class-request"},next:{title:"Route",permalink:"/java/docs/next/api/class-route"}},i=[{value:"Response.body()",id:"response-body",children:[]},{value:"Response.finished()",id:"response-finished",children:[]},{value:"Response.frame()",id:"response-frame",children:[]},{value:"Response.headers()",id:"response-headers",children:[]},{value:"Response.ok()",id:"response-ok",children:[]},{value:"Response.request()",id:"response-request",children:[]},{value:"Response.status()",id:"response-status",children:[]},{value:"Response.statusText()",id:"response-status-text",children:[]},{value:"Response.text()",id:"response-text",children:[]},{value:"Response.url()",id:"response-url",children:[]}],p={toc:i};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-body"},"Response.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-finished"},"Response.finished()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-frame"},"Response.frame()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-headers"},"Response.headers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-ok"},"Response.ok()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-request"},"Response.request()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-status"},"Response.status()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-status-text"},"Response.statusText()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-text"},"Response.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-url"},"Response.url()"))),(0,a.kt)("h2",{id:"response-body"},"Response.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">")),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",{id:"response-finished"},"Response.finished()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,a.kt)("p",null,"Waits for this response to finish, returns failure error if request failed."),(0,a.kt)("h2",{id:"response-frame"},"Response.frame()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame"),">")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,a.kt)("h2",{id:"response-headers"},"Response.headers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">>")),(0,a.kt)("p",null,"Returns the object with HTTP headers associated with the response. All header names are lower-case."),(0,a.kt)("h2",{id:"response-ok"},"Response.ok()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">")),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",{id:"response-request"},"Response.request()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">")),(0,a.kt)("p",null,"Returns the matching ",(0,a.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request",title:"Request"},"Request")," object."),(0,a.kt)("h2",{id:"response-status"},"Response.status()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">")),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",{id:"response-status-text"},"Response.statusText()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",{id:"response-text"},"Response.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",{id:"response-url"},"Response.url()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,a.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function s(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);