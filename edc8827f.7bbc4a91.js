(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{559:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),o=a(7),n=(a(0),a(599)),c={id:"class-chromiumcoverage",title:"ChromiumCoverage"},i={unversionedId:"api/class-chromiumcoverage",id:"version-1.3.0/api/class-chromiumcoverage",isDocsHomePage:!1,title:"ChromiumCoverage",description:"Coverage gathers information about parts of JavaScript and CSS that were used by the page.",source:"@site/versioned_docs/version-1.3.0/api/class-chromiumcoverage.mdx",slug:"/api/class-chromiumcoverage",permalink:"/docs/1.3.0/api/class-chromiumcoverage",version:"1.3.0",sidebar:"version-1.3.0/api",previous:{title:"ChromiumBrowserContext",permalink:"/docs/1.3.0/api/class-chromiumbrowsercontext"},next:{title:"CDPSession",permalink:"/docs/1.3.0/api/class-cdpsession"}},l=[{value:"chromiumCoverage.startCSSCoverage(options)",id:"chromiumcoveragestartcsscoverageoptions",children:[]},{value:"chromiumCoverage.startJSCoverage(options)",id:"chromiumcoveragestartjscoverageoptions",children:[]},{value:"chromiumCoverage.stopCSSCoverage()",id:"chromiumcoveragestopcsscoverage",children:[]},{value:"chromiumCoverage.stopJSCoverage()",id:"chromiumcoveragestopjscoverage",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Coverage gathers information about parts of JavaScript and CSS that were used by the page."),Object(n.b)("p",null,"An example of using JavaScript coverage to produce Istambul report for page load:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\nconst v8toIstanbul = require('v8-to-istanbul');\n\n(async() => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.coverage.startJSCoverage();\n  await page.goto('https://chromium.org');\n  const coverage = await page.coverage.stopJSCoverage();\n  for (const entry of coverage) {\n    const converter = new v8toIstanbul('', 0, { source: entry.source });\n    await converter.load();\n    converter.applyCoverage(entry.functions);\n    console.log(JSON.stringify(converter.toIstanbul()));\n  }\n  await browser.close();\n})();\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-chromiumcoverage#chromiumcoveragestartcsscoverageoptions"}),"chromiumCoverage.startCSSCoverage([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-chromiumcoverage#chromiumcoveragestartjscoverageoptions"}),"chromiumCoverage.startJSCoverage([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-chromiumcoverage#chromiumcoveragestopcsscoverage"}),"chromiumCoverage.stopCSSCoverage()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-chromiumcoverage#chromiumcoveragestopjscoverage"}),"chromiumCoverage.stopJSCoverage()"))),Object(n.b)("h2",{id:"chromiumcoveragestartcsscoverageoptions"},"chromiumCoverage.startCSSCoverage(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Set of configurable options for coverage",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"resetOnNavigation")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to reset coverage on every navigation. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"> Promise that resolves when coverage is started")),Object(n.b)("h2",{id:"chromiumcoveragestartjscoverageoptions"},"chromiumCoverage.startJSCoverage(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Set of configurable options for coverage",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"resetOnNavigation")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to reset coverage on every navigation. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"reportAnonymousScripts")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether anonymous scripts generated by the page should be reported. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"> Promise that resolves when coverage is started")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE")," Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",Object(n.b)("inlineCode",{parentName:"p"},"eval")," or ",Object(n.b)("inlineCode",{parentName:"p"},"new Function"),". If ",Object(n.b)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",Object(n.b)("inlineCode",{parentName:"p"},"true"),", anonymous scripts will have ",Object(n.b)("inlineCode",{parentName:"p"},"__playwright_evaluation_script__")," as their URL.")),Object(n.b)("h2",{id:"chromiumcoveragestopcsscoverage"},"chromiumCoverage.stopCSSCoverage()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>> Promise that resolves to the array of coverage reports for all stylesheets",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"url")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> StyleSheet URL"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"text")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> StyleSheet content, if available."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ranges")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">> StyleSheet ranges that were used. Ranges are sorted and non-overlapping.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"start")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> A start offset in text, inclusive"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"end")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> An end offset in text, exclusive")))))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE")," CSS Coverage doesn't include dynamically injected style tags without sourceURLs.")),Object(n.b)("h2",{id:"chromiumcoveragestopjscoverage"},"chromiumCoverage.stopJSCoverage()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>> Promise that resolves to the array of coverage reports for all scripts",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"url")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Script URL"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"scriptId")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Script ID"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"source")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Script content, if applicable."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"functions")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">> V8-specific coverage format.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"functionName")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isBlockCoverage")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ranges")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"count")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"startOffset")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"endOffset")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),">")))))))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE")," JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are\nreported.")))}s.isMDXComponent=!0},599:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return a?o.a.createElement(O,i(i({ref:t},b),{},{components:a})):o.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<n;b++)c[b]=a[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);