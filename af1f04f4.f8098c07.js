(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{408:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),i=(t(0),t(599)),a={id:"troubleshooting",title:"Troubleshooting"},l={unversionedId:"troubleshooting",id:"version-1.5.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Chromium",source:"@site/versioned_docs/version-1.5.0/troubleshooting.mdx",slug:"/troubleshooting",permalink:"/docs/1.5.0/troubleshooting",version:"1.5.0"},s=[{value:"Chromium",id:"chromium",children:[{value:"Chrome headless doesn&#39;t launch on Windows",id:"chrome-headless-doesnt-launch-on-windows",children:[]},{value:"Chrome headless doesn&#39;t launch on Linux/WSL",id:"chrome-headless-doesnt-launch-on-linuxwsl",children:[]},{value:"Setting Up Chrome Linux Sandbox",id:"setting-up-chrome-linux-sandbox",children:[]}]},{value:"Firefox",id:"firefox",children:[{value:"Firefox headless doesn&#39;t launch on Linux/WSL",id:"firefox-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"WebKit",id:"webkit",children:[{value:"WebKit headless doesn&#39;t launch on Linux/WSL",id:"webkit-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],c={toc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#chromium"}),"Chromium"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#chrome-headless-doesnt-launch-on-windows"}),"Chrome headless doesn't launch on Windows")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#chrome-headless-doesnt-launch-on-linuxwsl"}),"Chrome headless doesn't launch on Linux/WSL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#setting-up-chrome-linux-sandbox"}),"Setting Up Chrome Linux Sandbox")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#firefox"}),"Firefox"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#firefox-headless-doesnt-launch-on-linuxwsl"}),"Firefox headless doesn't launch on Linux/WSL")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#webkit"}),"WebKit"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#webkit-headless-doesnt-launch-on-linuxwsl"}),"WebKit headless doesn't launch on Linux/WSL")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#code-transpilation-issues"}),"Code transpilation issues")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#nodejs-requirements"}),"Node.js requirements"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#referenceerror-url-is-not-defined"}),"ReferenceError: URL is not defined"))))),Object(i.b)("h2",{id:"chromium"},"Chromium"),Object(i.b)("h3",{id:"chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows"),Object(i.b)("p",null,"Some ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/7532015?hl=en"}),"chrome policies")," might enforce running Chrome/Chromium\nwith certain extensions."),Object(i.b)("p",null,"Playwright passes ",Object(i.b)("inlineCode",{parentName:"p"},"--disable-extensions")," flag by default and will fail to launch when such policies are active."),Object(i.b)("p",null,"To work around this, try running without the flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await playwright.chromium.launch({\n  ignoreDefaultArgs: ['--disable-extensions'],\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Context: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/3681#issuecomment-447865342"}),"Puppeteer#3681"),".")),Object(i.b)("h3",{id:"chrome-headless-doesnt-launch-on-linuxwsl"},"Chrome headless doesn't launch on Linux/WSL"),Object(i.b)("p",null,"Make sure all the necessary dependencies are installed. You can run ",Object(i.b)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Dockerfile")," which is used to run our tests."),Object(i.b)("p",null,"The common ones for Debian and CentOS are provided below."),Object(i.b)("details",null,Object(i.b)("summary",null,"Debian (e.g. Ubuntu) Dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"gconf-service\nlibasound2\nlibatk1.0-0\nlibatk-bridge2.0-0\nlibc6\nlibcairo2\nlibcups2\nlibdbus-1-3\nlibexpat1\nlibfontconfig1\nlibgcc1\nlibgconf-2-4\nlibgdk-pixbuf2.0-0\nlibglib2.0-0\nlibgtk-3-0\nlibnspr4\nlibpango-1.0-0\nlibpangocairo-1.0-0\nlibstdc++6\nlibx11-6\nlibx11-xcb1\nlibxcb1\nlibxcomposite1\nlibxcursor1\nlibxdamage1\nlibxext6\nlibxfixes3\nlibxi6\nlibxrandr2\nlibxrender1\nlibxss1\nlibxtst6\nca-certificates\nfonts-liberation\nlibappindicator1\nlibnss3\nlsb-release\nxdg-utils\nwget\nlibgbm1\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"CentOS Dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"pango.x86_64\nlibXcomposite.x86_64\nlibXcursor.x86_64\nlibXdamage.x86_64\nlibXext.x86_64\nlibXi.x86_64\nlibXtst.x86_64\ncups-libs.x86_64\nlibXScrnSaver.x86_64\nlibXrandr.x86_64\nGConf2.x86_64\nalsa-lib.x86_64\natk.x86_64\ngtk3.x86_64\nipa-gothic-fonts\nxorg-x11-fonts-100dpi\nxorg-x11-fonts-75dpi\nxorg-x11-utils\nxorg-x11-fonts-cyrillic\nxorg-x11-fonts-Type1\nxorg-x11-fonts-misc\n")),Object(i.b)("p",null,"After installing dependencies you need to update nss library using this command"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yum update nss -y\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"Check out discussions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/290"}),"Puppeteer#290")," - Debian troubleshooting ",Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/391"}),"Puppeteer#391")," - CentOS troubleshooting ",Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/379"}),"Puppeteer#379")," - Alpine troubleshooting ",Object(i.b)("br",null)))),Object(i.b)("p",null,"Please file new issues in this repo for things relating to Playwright."),Object(i.b)("h3",{id:"setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox"),Object(i.b)("p",null,"In order to protect the host environment from untrusted web content, Chrome uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_sandboxing.mdx"}),"multiple layers of sandboxing"),". For this to work properly,\nthe host should be configured first. If there's no good sandbox for Chrome to use, it will crash\nwith the error ",Object(i.b)("inlineCode",{parentName:"p"},"No usable sandbox!"),"."),Object(i.b)("p",null,"If you ",Object(i.b)("strong",{parentName:"p"},"absolutely trust")," the content you open in Chrome, you can launch Chrome\nwith the ",Object(i.b)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," option:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await playwright.chromium.launch({ chromiumSandbox: false });\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE"),": Running without a sandbox is ",Object(i.b)("strong",{parentName:"p"},"strongly discouraged"),". Consider configuring a sandbox instead.")),Object(i.b)("p",null,"To enable Chromium sandbox, you should enable ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"user namespace cloning"),"."),Object(i.b)("p",null,"User namespace cloning is only supported by modern kernels. Unprivileged user\nnamespaces are generally fine to enable, but in some cases they open up more\nkernel attack surface for (unsandboxed) non-root processes to elevate to kernel\nprivileges."),Object(i.b)("p",null,"In general, user namespace cloning can be enabled with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo sysctl -w kernel.unprivileged_userns_clone=1\n")),Object(i.b)("p",null,"In case of Docker, containers need to be run with a custom ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/security/seccomp/"}),"security profile")," that enables\nuser namespace cloning. You can download this profile here: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"}),Object(i.b)("inlineCode",{parentName:"a"},"seccomp_profile.json"))),Object(i.b)("p",null,"With the downloaded profile, docker container could be run like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"docker run --rm --security-opt seccomp=/path/to/seccomp/profile.json -it my-image-name\n")),Object(i.b)("h2",{id:"firefox"},"Firefox"),Object(i.b)("h3",{id:"firefox-headless-doesnt-launch-on-linuxwsl"},"Firefox headless doesn't launch on Linux/WSL"),Object(i.b)("p",null,"Make sure all the necessary dependencies are installed. You can run ",Object(i.b)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Dockerfile")," which is used to run our tests."),Object(i.b)("h2",{id:"webkit"},"WebKit"),Object(i.b)("h3",{id:"webkit-headless-doesnt-launch-on-linuxwsl"},"WebKit headless doesn't launch on Linux/WSL"),Object(i.b)("p",null,"Make sure all the necessary dependencies are installed. You can run ",Object(i.b)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Dockerfile")," which is used to run our tests."),Object(i.b)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),Object(i.b)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",Object(i.b)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",Object(i.b)("inlineCode",{parentName:"p"},"playwright")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",Object(i.b)("inlineCode",{parentName:"p"},"playwright"),"."),Object(i.b)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",Object(i.b)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),Object(i.b)("h2",{id:"nodejs-requirements"},"Node.js requirements"),Object(i.b)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),Object(i.b)("p",null,"Playwright requires Node.js 10 or higher. Node.js 8 is not supported, and will cause you to receive this error."),Object(i.b)("h1",{id:"please-file-an-issue"},"Please file an issue"),Object(i.b)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}b.isMDXComponent=!0},599:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),b=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return t?o.a.createElement(h,l(l({ref:n},c),{},{components:t})):o.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);