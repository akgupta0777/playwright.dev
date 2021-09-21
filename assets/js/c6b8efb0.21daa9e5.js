"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3800],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,h=f.setTabGroupChoices,w=(0,r.useState)(a),g=w[0],b=w[1],y=r.Children.toArray(e.children),k=[];if(null!=p){var N=v[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&b(N)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),r=u[n].value;b(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case d:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case c:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},8800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=(n(55064),n(58215),{id:"class-android",title:"Android"}),l=void 0,s={unversionedId:"api/class-android",id:"version-1.13/api/class-android",isDocsHomePage:!1,title:"Android",description:"Playwright has experimental support for Android automation. See here for more information. You can access android namespace via:",source:"@site/versioned_docs/version-1.13/api/class-android.mdx",sourceDirName:"api",slug:"/api/class-android",permalink:"/docs/1.13/api/class-android",version:"1.13",frontMatter:{id:"class-android",title:"Android"},sidebar:"version-1.13/api",previous:{title:"TestResult",permalink:"/docs/1.13/api/class-testresult"},next:{title:"AndroidDevice",permalink:"/docs/1.13/api/class-androiddevice"}},c=[{value:"android.devices()",id:"android-devices",children:[]},{value:"android.setDefaultTimeout(timeout)",id:"android-set-default-timeout",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright has ",(0,i.kt)("strong",{parentName:"p"},"experimental")," support for Android automation. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.13/mobile"},"here")," for more information. You can access android namespace via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { _android: android } = require('playwright');\n")),(0,i.kt)("p",null,"An example of the Android automation script would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { _android: android } = require('playwright');\n\n(async () => {\n  // Connect to the device.\n  const [device] = await android.devices();\n  console.log(`Model: ${device.model()}`);\n  console.log(`Serial: ${device.serial()}`);\n  // Take screenshot of the whole device.\n  await device.screenshot({ path: 'device.png' });\n\n  {\n    // --------------------- WebView -----------------------\n\n    // Launch an application with WebView.\n    await device.shell('am force-stop org.chromium.webview_shell');\n    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');\n    // Get the WebView.\n    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });\n\n    // Fill the input box.\n    await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');\n    await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');\n\n    // Work with WebView's page as usual.\n    const page = await webview.page();\n    await page.waitForNavigation({ url: /.*microsoft\\/playwright.*/ });\n    console.log(await page.title());\n  }\n\n  {\n    // --------------------- Browser -----------------------\n\n    // Launch Chrome browser.\n    await device.shell('am force-stop com.android.chrome');\n    const context = await device.launchBrowser();\n\n    // Use BrowserContext as usual.\n    const page = await context.newPage();\n    await page.goto('https://webkit.org/');\n    console.log(await page.evaluate(() => window.location.href));\n    await page.screenshot({ path: 'page.png' });\n\n    await context.close();\n  }\n\n  // Close the device.\n  await device.close();\n})();\n")),(0,i.kt)("p",null,"Note that since you don't need Playwright to install web browsers when testing Android, you can omit browser download via setting the following environment variable when installing Playwright:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-android#android-devices"},"android.devices()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-android#android-set-default-timeout"},"android.setDefaultTimeout(timeout)"))),(0,i.kt)("h2",{id:"android-devices"},"android.devices()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-androiddevice",title:"AndroidDevice"},"AndroidDevice"),">>",">",(0,i.kt)("a",{href:"#android-devices-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns the list of detected Android devices."),(0,i.kt)("h2",{id:"android-set-default-timeout"},"android.setDefaultTimeout(timeout)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-param-timeout"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Maximum time in milliseconds",(0,i.kt)("a",{href:"#android-set-default-timeout-param-timeout",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#android-set-default-timeout-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"This setting will change the default maximum time for all the methods accepting ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," option."))}u.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);