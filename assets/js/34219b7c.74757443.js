(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[24636],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),a=n(80944),s=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=(0,a.Z)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,x=(0,r.useState)(p),v=x[0],w=x[1],k=r.Children.toArray(e.children),y=[];if(null!=d){var b=h[d];null!=b&&b!==v&&c.some((function(e){return e.value===b}))&&w(b)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),r=c[n].value;w(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,s,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,s=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&s<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case l:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},82197:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),o=n(41395),i=n(58215),l={id:"test-fixtures",title:"Advanced: fixtures"},u={unversionedId:"test-fixtures",id:"version-1.13.0/test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/versioned_docs/version-1.13.0/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/docs/test-fixtures",version:"1.13.0",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"},sidebar:"version-1.13.0/docs",previous:{title:"Advanced: configuration",permalink:"/docs/test-advanced"},next:{title:"Advanced: installing browsers",permalink:"/docs/test-install"}},p=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]},{value:"Overriding fixtures",id:"overriding-fixtures",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#introduction-to-fixtures"},"Introduction to fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#test-fixtures"},"Test fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#worker-fixtures"},"Worker fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#overriding-fixtures"},"Overriding fixtures"))),(0,s.kt)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),(0,s.kt)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),(0,s.kt)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),(0,s.kt)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),(0,s.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",(0,s.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),(0,s.kt)("h3",{id:"without-fixtures"},"Without fixtures"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst { test } = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\ntest.describe('todo tests', () => {\n  let todoPage;\n\n  test.beforeEach(async ({ page }) => {\n    todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n  });\n\n  test.afterEach(async () => {\n    await todoPage.removeAll();\n  });\n\n  test('should add an item', async () => {\n    await todoPage.addToDo('my item');\n    // ...\n  });\n\n  test('should remove an item', async () => {\n    await todoPage.remove('item1');\n    // ...\n  });\n});\n")),(0,s.kt)("h3",{id:"with-fixtures"},"With fixtures"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test as base } from '@playwright/test';\nimport { TodoPage } from './todo-page';\n\n// Extend basic test by providing a \"table\" fixture.\nconst test = base.extend<{ todoPage: TodoPage }>({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// todo.spec.js\nconst base = require('@playwright/test');\nconst { TodoPage } = require('./todo-page');\n\n// Extend basic test by providing a \"todoPage\" fixture.\nconst test = base.test.extend({\n  todoPage: async ({ page }, use) => {\n    const todoPage = new TodoPage(page);\n    await todoPage.goto();\n    await todoPage.addToDo('item1');\n    await todoPage.addToDo('item2');\n    await use(todoPage);\n    await todoPage.removeAll();\n  },\n});\n\ntest('should add an item', async ({ todoPage }) => {\n  await todoPage.addToDo('my item');\n  // ...\n});\n\ntest('should remove an item', async ({ todoPage }) => {\n  await todoPage.remove('item1');\n  // ...\n});\n")))),(0,s.kt)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",(0,s.kt)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),(0,s.kt)("p",null,"There are two types of fixtures: ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),(0,s.kt)("h2",{id:"test-fixtures"},"Test fixtures"),(0,s.kt)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// hello.spec.ts\nimport test from './hello';\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// hello.spec.js\nconst test = require('./hello');\n\ntest('hello', ({ hello }) => {\n  test.expect(hello).toBe('Hello');\n});\n\ntest('hello world', ({ helloWorld }) => {\n  test.expect(helloWorld).toBe('Hello, world!');\n});\n")))),(0,s.kt)("p",null,"It uses fixtures ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),(0,s.kt)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",(0,s.kt)("inlineCode",{parentName:"p"},"helloWorld")," uses ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// hello.ts\nimport { test as base } from '@playwright/test';\n\n// Define test fixtures \"hello\" and \"helloWorld\".\ntype TestFixtures = {\n  hello: string;\n  helloWorld: string;\n};\n\n// Extend base test with our fixtures.\nconst test = base.extend<TestFixtures>({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n\n// Now, this \"test\" can be used in multiple test files, and each of them will get the fixtures.\nexport default test;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// hello.js\nconst base = require('@playwright/test');\n\n// Extend base test with fixtures \"hello\" and \"helloWorld\".\n// This new \"test\" can be used in multiple test files, and each of them will get the fixtures.\nmodule.exports = base.test.extend({\n  // This fixture is a constant, so we can just provide the value.\n  hello: 'Hello',\n\n  // This fixture has some complex logic and is defined with a function.\n  helloWorld: async ({ hello }, use) => {\n    // Set up the fixture.\n    const value = hello + ', world!';\n\n    // Use the fixture value in the test.\n    await use(value);\n\n    // Clean up the fixture. Nothing to cleanup in this example.\n  },\n});\n")))),(0,s.kt)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),(0,s.kt)("h2",{id:"worker-fixtures"},"Worker fixtures"),(0,s.kt)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",(0,s.kt)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,s.kt)("p",null,"Here is how the test looks:"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// express.spec.ts\nimport test from './express-test';\nimport fetch from 'node-fetch';\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// express.spec.js\nconst test = require('./express-test');\nconst fetch = require('node-fetch');\n\ntest('fetch 1', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/1`);\n  test.expect(await result.text()).toBe('Hello World 1!');\n});\n\ntest('fetch 2', async ({ port }) => {\n  const result = await fetch(`http://localhost:${port}/2`);\n  test.expect(await result.text()).toBe('Hello World 2!');\n});\n")))),(0,s.kt)("p",null,"And here is how fixtures are declared and defined:"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// express-test.ts\nimport { test as base } from '@playwright/test';\nimport express from 'express';\nimport type { Express } from 'express';\n\n// Declare worker fixtures.\ntype ExpressWorkerFixtures = {\n  port: number;\n  express: Express;\n};\n\n// Note that we did not provide an test-scoped fixtures, so we pass {}.\nconst test = base.extend<{}, ExpressWorkerFixtures>({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n\nexport default test;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// express-test.js\nconst base = require('@playwright/test');\nconst express = require('express');\n\n// Define \"port\" and \"express\" worker fixtures.\nmodule.exports = base.test.extend({\n\n  // We pass a tuple to specify fixtures options.\n  // In this case, we mark this fixture as worker-scoped.\n  port: [ async ({}, use, workerInfo) => {\n    // \"port\" fixture uses a unique value of the worker process index.\n    await use(3000 + workerInfo.workerIndex);\n  }, { scope: 'worker' } ],\n\n  // \"express\" fixture starts automatically for every worker - we pass \"auto\" for that.\n  express: [ async ({ port }, use) => {\n    // Setup express app.\n    const app = express();\n    app.get('/1', (req, res) => {\n      res.send('Hello World 1!')\n    });\n    app.get('/2', (req, res) => {\n      res.send('Hello World 2!')\n    });\n\n    // Start the server.\n    let server;\n    console.log('Starting server...');\n    await new Promise(f => {\n      server = app.listen(port, f);\n    });\n    console.log('Server ready');\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    console.log('Stopping server...');\n    await new Promise(f => server.close(f));\n    console.log('Server stopped');\n  }, { scope: 'worker', auto: true } ],\n});\n")))),(0,s.kt)("h2",{id:"overriding-fixtures"},"Overriding fixtures"),(0,s.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," fixture by navigating to a specified URL:"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  page: async ({ baseURL, page }, use) => {\n    await page.goto(baseURL);\n    await use(page);\n  },\n});\n")))),(0,s.kt)("p",null,"Notice that in this example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built in fixtures such as ",(0,s.kt)("inlineCode",{parentName:"p"},"baseURL"),". This allows us to override the ",(0,s.kt)("inlineCode",{parentName:"p"},"baseURL")," used by the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," fixture in our tests using ",(0,s.kt)("inlineCode",{parentName:"p"},"test.use"),"."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test.use({ baseURL: 'https://playwright.dev' })\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test.use({ baseURL: 'https://playwright.dev' })\n")))),(0,s.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,s.kt)("inlineCode",{parentName:"p"},"storageState")," fixture to provide our own data."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { test as base } from '@playwright/test';\n\nexport const test = base.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const base = require('@playwright/test');\n\nexports.test = base.test.extend({\n  storageState: async ({}, use) => {\n    const cookie = await getAuthCookie();\n    await use({ cookies: [cookie] });\n  },\n});\n")))))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);