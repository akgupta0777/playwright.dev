(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[82486],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(80944),s=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,i=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,h=e.className,d=(0,r.Z)(),g=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,a.useState)(c),v=y[0],b=y[1],x=a.Children.toArray(e.children),w=[];if(null!=m){var k=g[m];null!=k&&k!==v&&u.some((function(e){return e.value===k}))&&b(k)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),a=u[n].value;b(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,s,o,p,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,p=o.innerHeight,i=o.innerWidth,n>=0&&s<=i&&r<=p&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case i:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case p:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},43730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o=n(41395),l=n(58215),p={id:"test-snapshots",title:"Visual comparisons"},i={unversionedId:"test-snapshots",id:"version-1.12.0/test-snapshots",isDocsHomePage:!1,title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using expect(value).toMatchSnapshot(snapshotName). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/versioned_docs/version-1.12.0/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/1.12.0/test-snapshots",version:"1.12.0",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"version-1.12.0/docs",previous:{title:"Parallelism and sharding",permalink:"/docs/1.12.0/test-parallel"},next:{title:"Reporters",permalink:"/docs/1.12.0/test-reporters"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');\n});\n")))),(0,s.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,s.kt)("p",null,"Playwright Test uses the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch")," library. You can pass comparison ",(0,s.kt)("inlineCode",{parentName:"p"},"threshold")," as an option."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n")))),(0,s.kt)("p",null,"Apart from screenshots, ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," can also be used to compare text, png and jpeg images, or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,s.kt)("p",null,"Here we compare text content against the reference."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,s.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,s.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);