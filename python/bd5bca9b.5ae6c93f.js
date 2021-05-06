(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(331)),s=a(334),o=a(335),c={id:"class-jshandle",title:"JSHandle"},i={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluatehandle(expression, **kwargs) method.",source:"@site/docs/api/class-jshandle.mdx",slug:"/api/class-jshandle",permalink:"/python/docs/next/api/class-jshandle",version:"current",sidebar:"api",previous:{title:"Frame",permalink:"/python/docs/next/api/class-frame"},next:{title:"Keyboard",permalink:"/python/docs/next/api/class-keyboard"}},p=[{value:"js_handle.as_element()",id:"js_handleas_element",children:[]},{value:"js_handle.dispose()",id:"js_handledispose",children:[]},{value:"js_handle.evaluate(expression, **kwargs)",id:"js_handleevaluateexpression-kwargs",children:[]},{value:"js_handle.evaluate_handle(expression, **kwargs)",id:"js_handleevaluate_handleexpression-kwargs",children:[]},{value:"js_handle.get_properties()",id:"js_handleget_properties",children:[]},{value:"js_handle.get_property(property_name)",id:"js_handleget_propertyproperty_name",children:[]},{value:"js_handle.json_value()",id:"js_handlejson_value",children:[]}],b={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-kwargs"}),"page.evaluate_handle(expression, **kwargs)")," method."),Object(l.b)(s.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'window_handle = page.evaluate_handle("window")\n# ...\n'))),Object(l.b)(o.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'window_handle = await page.evaluate_handle("window")\n# ...\n')))),Object(l.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle#js_handledispose"}),"js_handle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.b)("p",null,"JSHandle instances can be used as an argument in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageeval_on_selectorselector-expression-kwargs"}),"page.eval_on_selector(selector, expression, **kwargs)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-kwargs"}),"page.evaluate_handle(expression, **kwargs)")," methods."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleas_element"}),"js_handle.as_element()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handledispose"}),"js_handle.dispose()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleevaluateexpression-kwargs"}),"js_handle.evaluate(expression, **kwargs)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleevaluate_handleexpression-kwargs"}),"js_handle.evaluate_handle(expression, **kwargs)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleget_properties"}),"js_handle.get_properties()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleget_propertyproperty_name"}),"js_handle.get_property(property_name)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handlejson_value"}),"js_handle.json_value()"))),Object(l.b)("h2",{id:"js_handleas_element"},"js_handle.as_element()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(l.b)("p",null,"Returns either ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(l.b)("h2",{id:"js_handledispose"},"js_handle.dispose()"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(l.b)("h2",{id:"js_handleevaluateexpression-kwargs"},"js_handle.evaluate(expression, **kwargs)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"Examples:"),Object(l.b)(s.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'tweet_handle = page.query_selector(".tweet .retweets")\nassert tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n'))),Object(l.b)(o.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'tweet_handle = await page.query_selector(".tweet .retweets")\nassert await tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n')))),Object(l.b)("h2",{id:"js_handleevaluate_handleexpression-kwargs"},"js_handle.evaluate_handle(expression, **kwargs)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," as a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"If the function passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-kwargs"}),"page.evaluate_handle(expression, **kwargs)")," for more details."),Object(l.b)("h2",{id:"js_handleget_properties"},"js_handle.get_properties()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <","[Map]","[",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"]",">")),Object(l.b)("p",null,"The method returns a map with ",Object(l.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(l.b)(s.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'handle = page.evaluate_handle("{window, document}")\nproperties = handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nhandle.dispose()\n'))),Object(l.b)(o.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'handle = await page.evaluate_handle("{window, document}")\nproperties = await handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nawait handle.dispose()\n')))),Object(l.b)("h2",{id:"js_handleget_propertyproperty_name"},"js_handle.get_property(property_name)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"property_name")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> property to get"),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Fetches a single property from the referenced object."),Object(l.b)("h2",{id:"js_handlejson_value"},"js_handle.json_value()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">")),Object(l.b)("p",null,"Returns a JSON representation of the object. If the object has a ",Object(l.b)("inlineCode",{parentName:"p"},"toJSON")," function, it ",Object(l.b)("strong",{parentName:"p"},"will not be called"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}d.isMDXComponent=!0},330:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,j=b["".concat(s,".").concat(u)]||b[u]||d[u]||l;return a?r.a.createElement(j,o(o({ref:t},i),{},{components:a})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},332:function(e,t,a){"use strict";var n=a(0),r=a(333);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},333:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},334:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(332),s=a(330),o=a(53),c=a.n(o),i=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,d=e.groupId,u=e.className,j=Object(l.a)(),h=j.tabGroupChoices,m=j.setTabGroupChoices,O=Object(n.useState)(o),f=O[0],v=O[1],y=n.Children.toArray(e.children);if(null!=d){var g=h[d];null!=g&&g!==f&&b.some((function(e){return e.value===g}))&&v(g)}var _=function(e){v(e),null!=d&&m(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return _(t)},onClick:function(){_(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},335:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);