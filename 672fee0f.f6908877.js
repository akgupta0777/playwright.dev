(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(893)),i=(n(897),n(898),{id:"test-runners",title:"Third party runners"}),c={unversionedId:"test-runners",id:"test-runners",isDocsHomePage:!1,title:"Third party runners",description:"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner.",source:"@site/docs/test-runners.mdx",slug:"/test-runners",permalink:"/docs/next/test-runners",version:"current",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/next/ci"}},s=[{value:"@playwright/test",id:"playwrighttest",children:[]},{value:"Jest / Jasmine",id:"jest--jasmine",children:[]},{value:"AVA",id:"ava",children:[]},{value:"Mocha",id:"mocha",children:[]},{value:"Multiple Browsers",id:"multiple-browsers",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#playwrighttest"}),"@playwright/test")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#jest--jasmine"}),"Jest / Jasmine")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#ava"}),"AVA")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#mocha"}),"Mocha")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#multiple-browsers"}),"Multiple Browsers"))),Object(o.b)("h2",{id:"playwrighttest"},"@playwright/test"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/test-runner-intro"}),"@playwright/test")," is our first-party recommended test runner to be used with Playwright. Learn more about it ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/test-runner-intro"}),"here"),"."),Object(o.b)("h2",{id:"jest--jasmine"},"Jest / Jasmine"),Object(o.b)("p",null,"For Jest, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/playwright-community/jest-playwright"}),"jest-playwright")," can be used. However for a light-weight solution, requiring playwright directly works fine. Jest shares it's syntax with Jasmine, so this applies to Jasmine as well."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst expect = require('expect');\nlet browser;\nlet page;\nbeforeAll(async () => {\n  browser = await chromium.launch();\n});\nafterAll(async () => {\n  await browser.close();\n});\nbeforeEach(async () => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  expect(await page.title()).toBe('Example Domain');\n});\n")),Object(o.b)("h2",{id:"ava"},"AVA"),Object(o.b)("p",null,"Tests run concurrently in AVA, so a single page variable cannot be shared between tests. Instead, create new pages with a macro function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst test = require('ava').default;\nconst browserPromise = chromium.launch();\n\nasync function pageMacro(t, callback) {\n  const browser = await browserPromise;\n  const page = await browser.newPage();\n  try {\n    await callback(t, page);\n  } finally {\n    await page.close();\n  }\n}\n\ntest('should work', pageMacro, async (t, page) => {\n  await page.goto('https://www.example.com/');\n  t.is(await page.title(), 'Example Domain');\n});\n")),Object(o.b)("h2",{id:"mocha"},"Mocha"),Object(o.b)("p",null,"Mocha looks very similar to the Jest/Jasmine setup, and functions in the same way."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst assert = require('assert');\nlet browser;\nbefore(async() => {\n  browser = await chromium.launch();\n});\nafter(async () => {\n  await browser.close();\n});\nlet page;\nbeforeEach(async() => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  assert.equal(await page.title(), 'Example Domain');\n});\n")),Object(o.b)("h2",{id:"multiple-browsers"},"Multiple Browsers"),Object(o.b)("p",null,"These simple examples can be extended to support multiple browsers using an environment variable."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {chromium, webkit, firefox} = require('playwright');\nconst browserName = process.env.BROWSER || 'webkit';\nlet browser;\nbeforeAll(async() => {\n  browser = await {chromium, webkit, firefox}[browserName].launch();\n});\n")),Object(o.b)("p",null,"Then set ",Object(o.b)("inlineCode",{parentName:"p"},"BROWSER=firefox")," to run your tests with firefox, or any other browser."))}u.isMDXComponent=!0},893:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return w}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,w=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(w,c(c({ref:t},l),{},{components:n})):a.a.createElement(w,c({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},894:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},895:function(e,t,n){"use strict";var r=n(0),a=n(896);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},896:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},897:function(e,t,n){"use strict";n(0),n(895),n(894),n(55)},898:function(e,t,n){"use strict";n(3),n(0)}}]);