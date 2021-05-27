(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{893:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(o,".").concat(f)]||b[f]||p[f]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},894:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},895:function(e,t,n){"use strict";var r=n(0),a=n(896);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},896:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},897:function(e,t,n){"use strict";n(0),n(895),n(894),n(55)},898:function(e,t,n){"use strict";n(3),n(0)},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(893)),o=(n(897),n(898),{id:"test-runner-intro",title:"Playwright Tests"}),i={unversionedId:"test-runner-intro",id:"test-runner-intro",isDocsHomePage:!1,title:"Playwright Tests",description:"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:",source:"@site/docs/test-runner-intro.mdx",slug:"/test-runner-intro",permalink:"/docs/next/test-runner-intro",version:"current",sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/videos"},next:{title:"Configuration",permalink:"/docs/next/test-runner-configuration"}},c=[{value:"Installation",id:"installation",children:[]},{value:"First test",id:"first-test",children:[]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Test and assertion features",id:"test-and-assertion-features",children:[{value:"Focus or skip tests",id:"focus-or-skip-tests",children:[]},{value:"Group tests together",id:"group-tests-together",children:[]},{value:"Use test hooks",id:"use-test-hooks",children:[]}]},{value:"Write a configuration file",id:"write-a-configuration-file",children:[]},{value:"Run the test suite",id:"run-the-test-suite",children:[{value:"Configure NPM scripts",id:"configure-npm-scripts",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Run tests across all browsers."),Object(s.b)("li",{parentName:"ul"},"Execute tests in parallel."),Object(s.b)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),Object(s.b)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),Object(s.b)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),Object(s.b)("p",null,"There are many more exciting features, so read on!"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#first-test"}),"First test")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#test-fixtures"}),"Test fixtures")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#test-and-assertion-features"}),"Test and assertion features")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#write-a-configuration-file"}),"Write a configuration file")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#run-the-test-suite"}),"Run the test suite"))),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @playwright/test@1.0.0-alpha\n")),Object(s.b)("h2",{id:"first-test"},"First test"),Object(s.b)("p",null,"Create ",Object(s.b)("inlineCode",{parentName:"p"},"tests/foo.spec.ts")," to define your test."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('is a basic test with the page', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const name = await page.innerText('.navbar__title');\n  expect(name).toBe('Playwright');\n});\n")),Object(s.b)("p",null,"Now run your tests:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Assuming that test files are in the tests directory.\nnpx folio -c tests\n")),Object(s.b)("h2",{id:"test-fixtures"},"Test fixtures"),Object(s.b)("p",null,"You noticed an argument ",Object(s.b)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"test('basic test', async ({ page }) => {\n  ...\n")),Object(s.b)("p",null,"We call these arguments ",Object(s.b)("inlineCode",{parentName:"p"},"fixtures"),". Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"page"),": ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-page",title:"Page"}),"Page")," - Isolated page for this test run."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"context"),": ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," - Isolated context for this test run. The ",Object(s.b)("inlineCode",{parentName:"li"},"page")," fixture belongs to this context as well. Learn how to ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#modify-options"}),"configure context")," below."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"browser"),": ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-browser",title:"Browser"}),"Browser")," - Browsers are shared across tests to optimize resources. Learn how to ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"#modify-options"}),"configure browser")," below."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"browserName")," - The name of the browser currently running the test. Either ",Object(s.b)("inlineCode",{parentName:"li"},"chromium"),", ",Object(s.b)("inlineCode",{parentName:"li"},"firefox")," or ",Object(s.b)("inlineCode",{parentName:"li"},"webkit"),".")),Object(s.b)("h2",{id:"test-and-assertion-features"},"Test and assertion features"),Object(s.b)("h3",{id:"focus-or-skip-tests"},"Focus or skip tests"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\n// You can focus single test.\ntest.only('focus this test', async ({ page }) => {\n  // Only this test in the entire project runs.\n});\n\n// You can skip tests.\ntest.skip('skip this test', async ({ page }) => {\n});\n")),Object(s.b)("h3",{id:"group-tests-together"},"Group tests together"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest.describe('two tests', () => {\n  test.only('one', async ({ page }) => {\n    // ...\n  });\n\n  test.skip('two', async ({ page }) => {\n    // ...\n  });\n});\n")),Object(s.b)("h3",{id:"use-test-hooks"},"Use test hooks"),Object(s.b)("p",null,"You can use ",Object(s.b)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",Object(s.b)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",Object(s.b)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",Object(s.b)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://my.start.url');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    expect(page.url()).toBe('https://my.start.url');\n  });\n});\n")),Object(s.b)("h2",{id:"write-a-configuration-file"},"Write a configuration file"),Object(s.b)("p",null,"Create ",Object(s.b)("inlineCode",{parentName:"p"},"config.ts")," to configure your tests: specify browser launch options, run tests in multiple browsers and much more. Here is an example configuration that runs every test in Chromium, Firefox and WebKit."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 30000,  // Each test is given 30 seconds.\n\n  // A project per browser, each running all the tests.\n  projects: [\n    {\n      name: 'chromium',\n      use: {\n        browserName: 'chromium',\n        headless: true,\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n\n    {\n      name: 'webkit',\n      use: {\n        browserName: 'webkit',\n        headless: true,\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n\n    {\n      name: 'firefox',\n      use: {\n        browserName: 'firefox',\n        headless: true,\n        viewport: { width: 1280, height: 720 },\n      },\n    }\n  ],\n};\nexport default config;\n")),Object(s.b)("h2",{id:"run-the-test-suite"},"Run the test suite"),Object(s.b)("p",null,"Tests can be run in single or multiple browsers, in parallel or sequentially."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Run all tests across Chromium, Firefox and WebKit\nnpx folio --config=config.ts\n\n# Run tests on a single browser\nnpx folio --config=config.ts --project=chromium\n\n# Run tests sequentially\nnpx folio --config=config.ts --workers=1\n\n# Retry failing tests\nnpx folio --config=config.ts --retries=2\n\n# See all options\nnpx folio --help\n")),Object(s.b)("p",null,"Refer to the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/folio#command-line"}),"command line documentation")," for all options."),Object(s.b)("h3",{id:"configure-npm-scripts"},"Configure NPM scripts"),Object(s.b)("p",null,"Save the run command as an NPM script."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "npx folio --config=config.ts"\n  }\n}\n')))}u.isMDXComponent=!0}}]);