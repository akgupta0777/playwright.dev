(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{151:function(e,t,a){"use strict";function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),f=r,h=b["".concat(o,".").concat(f)]||b[f]||u[f]||n;return a?i.a.createElement(h,l(l({ref:t},c),{},{components:a})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var r=a(0),i=a(154);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var r=a(0),i=Object(r.createContext)(void 0);t.a=i},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),i=a(7),n=(a(0),a(152)),o=(a(155),a(156),{id:"class-filechooser",title:"FileChooser"}),l={unversionedId:"api/class-filechooser",id:"api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/docs/api/class-filechooser.mdx",slug:"/api/class-filechooser",permalink:"/csharp/docs/api/class-filechooser",version:"current",sidebar:"api",previous:{title:"ElementHandle",permalink:"/csharp/docs/api/class-elementhandle"},next:{title:"Frame",permalink:"/csharp/docs/api/class-frame"}},s=[{value:"FileChooser.Element()",id:"filechooserelement",children:[]},{value:"FileChooser.IsMultiple()",id:"filechooserismultiple",children:[]},{value:"FileChooser.Page()",id:"filechooserpage",children:[]},{value:"FileChooser.SetFiles(files, options)",id:"filechoosersetfilesfiles-options",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/csharp/docs/api/class-page#eventpagefilechooser"}),"event Page.FileChooser")," event."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-filechooser#filechooserelement"}),"FileChooser.Element()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-filechooser#filechooserismultiple"}),"FileChooser.IsMultiple()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-filechooser#filechooserpage"}),"FileChooser.Page()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-filechooser#filechoosersetfilesfiles-options"}),"FileChooser.SetFiles(files[, options])"))),Object(n.b)("h2",{id:"filechooserelement"},"FileChooser.Element()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(n.b)("p",null,"Returns input element associated with this file chooser."),Object(n.b)("h2",{id:"filechooserismultiple"},"FileChooser.IsMultiple()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(n.b)("p",null,"Returns whether this file chooser accepts multiple files."),Object(n.b)("h2",{id:"filechooserpage"},"FileChooser.Page()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page",title:"Page"}),"Page"),">")),Object(n.b)("p",null,"Returns page this file chooser belongs to."),Object(n.b)("h2",{id:"filechoosersetfilesfiles-options"},"FileChooser.SetFiles(files","[, options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"files")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|","[IEnumerable]","<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">|",Object(n.b)("inlineCode",{parentName:"li"},"FilePayload"),"|","[IEnumerable]","<",Object(n.b)("inlineCode",{parentName:"li"},"FilePayload"),">>",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File name"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"mimeType")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File type"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"buffer")," <","[byte","[","]]","> File content"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("inlineCode",{parentName:"li"},"FileChooser.SetFilesOptions"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"noWaitAfter")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timeout")," <","[double]","> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(n.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"BrowserContext.SetDefaultTimeout(timeout)")," or ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/csharp/docs/api/class-page#pagesetdefaulttimeouttimeout"}),"Page.SetDefaultTimeout(timeout)")," methods.")))),Object(n.b)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(n.b)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0}}]);