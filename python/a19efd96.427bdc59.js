(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(147)),o={id:"emulation",title:"Device and environment emulation"},i={unversionedId:"emulation",id:"emulation",isDocsHomePage:!1,title:"Device and environment emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/docs/emulation.mdx",slug:"/emulation",permalink:"/python/docs/emulation",version:"current",sidebar:"docs",previous:{title:"Element selectors",permalink:"/python/docs/selectors"},next:{title:"Extensibility",permalink:"/python/docs/extensibility"}},l=[{value:"Devices",id:"devices",children:[]},{value:"User agent",id:"user-agent",children:[]},{value:"Viewport",id:"viewport",children:[]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Geolocation",id:"geolocation",children:[]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(c.b)("li",{parentName:"ul"},"locale, timezone"),Object(c.b)("li",{parentName:"ul"},"color scheme"),Object(c.b)("li",{parentName:"ul"},"geolocation")),Object(c.b)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#devices"}),"Devices")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#viewport"}),"Viewport")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"devices"},"Devices"),Object(c.b)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\nimport asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = await playwright.webkit.launch(headless=False)\n    context = await browser.new_context(\n        **pixel_2,\n    )\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\nfrom playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = playwright.webkit.launch(headless=False)\n    context = browser.new_context(\n        **pixel_2,\n    )\n\nwith sync_playwright() as playwright:\n    run(playwright)\n")),Object(c.b)("p",null,"All pages created in the context above will share the same device parameters."),Object(c.b)("h4",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"user-agent"},"User agent"),Object(c.b)("p",null,"All pages created in the context above will share the user agent specified:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\ncontext = await browser.new_context(\n  user_agent='My user agent'\n)\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\ncontext = browser.new_context(\n  user_agent='My user agent'\n)\n")),Object(c.b)("h4",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"viewport"},"Viewport"),Object(c.b)("p",null,"Create a context with custom viewport size:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\n# Create context with given viewport\ncontext = await browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = await browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\n# Create context with given viewport\ncontext = browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\npage.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n")),Object(c.b)("h4",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageset_viewport_sizeviewport_size"}),"page.set_viewport_size(viewport_size)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\n# Emulate locale and time\ncontext = await browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\n# Emulate locale and time\ncontext = browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n")),Object(c.b)("h4",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"permissions"},"Permissions"),Object(c.b)("p",null,"Allow all pages in the context to show system notifications:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\ncontext = await browser.new_context(\n  permissions=['notifications'],\n)\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\ncontext = browser.new_context(\n  permissions=['notifications'],\n)\n")),Object(c.b)("p",null,"Grant all pages in the existing context access to current location:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\nawait context.grant_permissions(['geolocation'])\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\ncontext.grant_permissions(['geolocation'])\n")),Object(c.b)("p",null,"Grant notifications access from a specific domain:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\nawait context.grant_permissions(['notifications'], origin='https://skype.com')\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\ncontext.grant_permissions(['notifications'], origin='https://skype.com')\n")),Object(c.b)("p",null,"Revoke all permissions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\nawait context.clear_permissions()\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\ncontext.clear_permissions()\n")),Object(c.b)("h4",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextgrant_permissionspermissions-options"}),"browser_context.grant_permissions(permissions, **options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextclear_permissions"}),"browser_context.clear_permissions()"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"geolocation"},"Geolocation"),Object(c.b)("p",null,"Create a context with ",Object(c.b)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\ncontext = await browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\ncontext = browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n')),Object(c.b)("p",null,"Change the location later:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nawait context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\ncontext.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(c.b)("h4",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextset_geolocationgeolocation"}),"browser_context.set_geolocation(geolocation)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),Object(c.b)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# async\n\n# Create context with dark mode\ncontext = await browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = await browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\nawait page.emulate_media(color_scheme='dark')\n\n# Change media for page\nawait page.emulate_media(media='print')\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"# sync\n\n# Create context with dark mode\ncontext = browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\npage.emulate_media(color_scheme='dark')\n\n# Change media for page\npage.emulate_media(media='print')\n")),Object(c.b)("h4",{id:"api-reference-6"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageemulate_mediaoptions"}),"page.emulate_media(**options)"))))}b.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,O=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return n?r.a.createElement(O,i(i({ref:t},s),{},{components:n})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);