(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3181],{5111:function(e,t,n){"use strict";n.r(t);var r=n(7294),u=n(6742),a=n(4543),s=n(907);t.default=function(){var e=(0,s.useVersions)(),t=(0,s.useLatestVersion)(),n=e.find((function(e){return"current"===e.name})),l=e.filter((function(e){return e!==t&&"current"!==e.name})),i=t,o="https://github.com/microsoft/playwright";return r.createElement(a.Z,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.createElement("main",{className:"container margin-vert--lg"},r.createElement("h1",null,"Versions"),i&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Latest version"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,i.name),r.createElement("td",null,r.createElement(u.Z,{to:i.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:o+"/releases/tag/v"+i.name},"Release Notes")))))),n!==t&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Next"),r.createElement("td",null,r.createElement(u.Z,{to:n.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:o},"Source Code")))))),l.length>0&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"archive"},"Past versions"),r.createElement("table",null,r.createElement("tbody",null,l.map((function(e){return r.createElement("tr",{key:e.name},r.createElement("th",null,e.label),r.createElement("td",null,r.createElement(u.Z,{to:e.path+"/api/class-playwright"},"Documentation")),r.createElement("td",null,r.createElement("a",{href:o+"/releases/tag/v"+e.name},"Release Notes")))})))))))}},8219:function(e,t,n){"use strict";var r=n(2122),u=n(9756),a=n(7294),s=n(6010),l=n(6742),i=n(4996),o=n(5977),c=n(6700);function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,s=e.to,c=e.href,h=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,p=e["data-language-prefix"],v=(0,u.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),D=(0,i.Z)(s),g=(0,i.Z)(t),F=(0,i.Z)(c,{forcePrependBaseUrl:!0}),E=(0,o.TH)();if(p){c="pathname://"+p+E.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+E.hash,v.autoAddBaseUrl=!1,v.target="_self";var C=["java","dotnet","python"].some((function(e){return E.pathname.startsWith("/"+e)}));(E.pathname.startsWith(p)&&C&&p.length>1||1===p.length&&!C)&&(v.className+=" "+m)}return a.createElement(l.Z,(0,r.Z)({},c?{href:f?F:c}:Object.assign({isNavLink:!0,activeClassName:m,to:D},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),v),h)}function d(e){var t,n=e.items,l=e.position,i=e.className,o=(0,u.Z)(e,["items","position","className"]),c=(0,a.useRef)(null),d=(0,a.useRef)(null),m=(0,a.useState)(!1),f=m[0],p=m[1];(0,a.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var v=function(e,t){return void 0===t&&(t=!1),(0,s.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?a.createElement("div",{ref:c,className:(0,s.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l,"dropdown--show":f})},a.createElement(h,(0,r.Z)({className:v(i)},o,{onClick:o.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p(!f))}}),null!=(t=o.children)?t:o.label),a.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var s=e.className,l=(0,u.Z)(e,["className"]);return a.createElement("li",{key:t},a.createElement(h,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:v(s,!0)},l)))})))):a.createElement(h,(0,r.Z)({className:v(i)},o))}function m(e){var t,n,l,i=e.items,d=e.className,m=(e.position,(0,u.Z)(e,["items","className","position"])),f=(0,a.useRef)(null),p=(0,o.TH)().pathname,v=(0,a.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,c.Mg)(e.to,p)}))))||e})),D=v[0],g=v[1],F=function(e,t){return void 0===t&&(t=!1),(0,s.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return a.createElement("li",{className:"menu__list-item"},a.createElement(h,(0,r.Z)({className:F(d)},m)));var E=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return a.createElement("li",{className:(0,s.Z)("menu__list-item",{"menu__list-item--collapsed":D})},a.createElement(h,(0,r.Z)({role:"button",className:F(d,!0)},m,{onClick:function(e){e.preventDefault(),g((function(e){return!e}))}}),null!=(l=m.children)?l:m.label),a.createElement("ul",{className:"menu__list",ref:f,style:{height:D?void 0:E}},i.map((function(e,t){var n=e.className,s=(0,u.Z)(e,["className"]);return a.createElement("li",{className:"menu__list-item",key:t},a.createElement(h,(0,r.Z)({activeClassName:"menu__link--active",className:F(n)},s,{onClick:m.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,u.Z)(e,["mobile"]),s=n?m:d;return a.createElement(s,r)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function s(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){"use strict";n.d(t,{w:function(){return c}});var r=n(8173),u=n(2137),a=n(7757),s=n.n(a),l=n(5850),i=n.n(l),o=n(8141);function c(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(s().mark((function e(t){var n,u,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+o.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:i().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(8141),u=n(8173),a=n(2137),s=n(7757),l=n.n(s),i=n(7294),o=n(8695),c=n(2263),h=n(412),d=n(5977),m=n(3551),f=n(8938),p=n(6092),v=n(5401),D=n(5579),g="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",C="cursor_6rPN",A="hitTree_2sUa",k="hitIcon_3jP2",_="hitPath_3Lax",x="noResultsIcon_1rmk",b="hitFooter_1JML",w="hitWrapper_4Hzp",y="hitTitle_2AMl",Z="hitAction_2kg3",N="noResults_1vI5",B="searchBarContainer_2P1H",z="searchBarLoadingRing_1FtX",L="searchIndexLoading_1eRR",I="input_1tay",R="hint_1WuO",S="suggestions_1cWc",H="dataset_3Xc2",j="empty_2isC";function T(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,s=e.isInterOfTree,l=e.isLastOfTree,i=0===n,o=1===n,c=[];s?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):l&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=c.map((function(e){return'<span class="'+A+'">'+e+"</span>"})),d='<span class="'+k+'">'+(i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",m=['<span class="'+y+'">'+(0,v.o)(t.t,(0,D.m)(u,"t"),a)+"</span>"];return i||m.push('<span class="'+_+'">'+(0,p.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(h,[d,'<span class="'+w+'">'],m,["</span>",'<span class="'+Z+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function M(){return'<span class="'+N+'"><span class="'+x+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=n(4535);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V="_highlight";var O=function(e){var t,n=e.handleSearchBarToggle,s=(0,c.default)().siteConfig.baseUrl,p=(0,d.k6)(),v=(0,d.TH)(),D=(0,i.useRef)(null),A=(0,i.useRef)("empty"),k=(0,i.useRef)(!1),_=(0,i.useState)(!1),x=_[0],w=_[1],y=(0,i.useState)(!1),Z=y[0],N=y[1],U=(0,i.useCallback)((0,a.Z)(l().mark((function e(){var t,n,a,i,o,c,h;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===A.current){e.next=2;break}return e.abrupt("return");case 2:return A.current="loading",w(!0),e.next=6,Promise.all([(0,m.w)(s),W()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,i=n.zhDictionary,o=t[1],c=o(D.current,{hint:!1,autoselect:!0,cssClasses:{root:g,noPrefix:!0,dropdownMenu:F,input:I,hint:R,suggestions:S,suggestion:E,cursor:C,dataset:H,empty:j}},[{source:(0,f.v)(a,i,r.qo),templates:{suggestion:T,empty:M,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=s+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),p.push(u))}));var a=document.createElement("div");return a.className=b,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,s=n.h,l=t.tokens,i=a;if(r.vc&&l.length>0){for(var o,c=new URLSearchParams,h=(0,u.Z)(l);!(o=h()).done;){var d=o.value;c.append(V,d)}i+="?"+c.toString()}s&&(i+=s),p.push(i)})),A.current="done",w(!1),k.current&&((h=D.current).value&&c.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[s,p]);(0,i.useEffect)((function(){if(r.vc){var e=h.Z.canUseDOM?new URLSearchParams(v.search).getAll(V):[];if(0!==e.length){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}}}),[v.search]);var O=(0,i.useCallback)((function(){k.current=!0,U(),null==n||n(!0)}),[n,U]),K=(0,i.useCallback)((function(){null==n||n(!1)}),[n]),Q=(0,i.useCallback)((function(){U()}),[U]),X=(0,i.useCallback)((function(e){e.target.value&&N(!0)}),[]);return i.createElement("div",{className:(0,o.Z)("navbar__search",B,(t={},t[L]=x&&Z,t))},i.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:O,onBlur:K,onChange:X,ref:D}),i.createElement(P.Z,{className:z}))}},8938:function(e,t,n){"use strict";n.d(t,{v:function(){return c}});var r=n(8173),u=n(5850),a=n.n(u);function s(e,t){var n=[];return function e(u,a){if(0!==u.length){var s=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(s))for(var l,i=function(e,t){var n=[];return function e(u,a){for(var s,l=0,i=!1,o=(0,r.Z)(t);!(s=o()).done;){var c=s.value;if(u.substr(0,c.length)===c){var h={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),h):n.push(h),i=!0}else for(var d=c.length-1;d>l;d-=1){var m=c.substr(0,d);if(u.substr(0,d)===m){l=d;var f={missed:a.missed,term:a.term.concat({value:m,trailing:!0})};u.length>d?e(u.substr(d),f):n.push(f),i=!0;break}}}i||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(s,t),o=(0,r.Z)(i);!(l=o()).done;){var c=l.value,h=a.concat.apply(a,c);e(u.slice(1),h)}else{var d=a.concat({value:s});e(u.slice(1),d)}}else n.push(a)}(e,[]),n}var l=n(8141);function i(e){return o(e).concat(o(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function o(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,o){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,l.dK);if(0!==c.length){var h=function(e,t){var n=s(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,o=(0,r.Z)(n);!(u=o()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var h,d,m=[],f=(0,r.Z)(l.dK);!(h=f()).done;){var p=h.value;if("en"===p)l._k||m.unshift(a().stopWordFilter);else{var v=a()[p];v.stopWordFilter&&m.unshift(v.stopWordFilter)}}if(m.length>0){var D=function(e){return m.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var g,F=[],E=(0,r.Z)(n);!(g=E()).done;){var C=g.value,A=D(C);d.push(A),A.length<C.length&&A.length>0&&F.push(A)}n.push.apply(n,F)}else d=n.slice();for(var k,_=[],x=(0,r.Z)(d);!(k=x()).done;){var b=k.value;if(b.length>2)for(var w=b.length-1;w>=0;w-=1)_.push(b.slice(0,w).concat(b.slice(w+1)))}return i(n).concat(i(_))}(c,t),d=[],m=function(){for(var t,u=f.value,a=u.term,s=u.tokens,l=function(){var u=t.value,l=u.documents,i=u.index,o=u.type;if(d.push.apply(d,i.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=l.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:o,page:0!==o&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:s,score:t.score}}))),d.length>=n)return{v:"break|search"}},i=(0,r.Z)(e);!(t=i()).done;){var o=l();if("object"==typeof o)return o.v}};e:for(var f,p=(0,r.Z)(h);!(f=p()).done;){if("break|search"===m())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),o(d)}else o([])}}},8740:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(8173),u=n(8740);function a(e,t,n){for(var s,l=[],i=(0,r.Z)(t);!(s=i()).done;){var o=s.value,c=e.toLowerCase().indexOf(o);if(c>=0){c>0&&l.push(a(e.substr(0,c),t)),l.push("<mark>"+(0,u.X)(e.substr(c,o.length))+"</mark>");var h=c+o.length;h<e.length&&l.push(a(e.substr(h),t));break}}return 0===l.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):l.join("")}},5401:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function s(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var l=n(8141);function i(e,t,n,r){void 0===r&&(r=l.Hk);for(var u={chunkIndex:-1},a=o(e,t,n,0,0,u),s=a.slice(0,u.chunkIndex),i=a[u.chunkIndex],c=[i.html],h=a.slice(u.chunkIndex+1),d=i.textLength,m=0,f=0,p=!1,v=!1;d<r;)if((m<=f||0===h.length)&&s.length>0){var D=s.pop();d+D.textLength<=r?(c.unshift(D.html),m+=D.textLength,d+=D.textLength):(p=!0,s.length=0)}else{if(!(h.length>0))break;var g=h.shift();d+g.textLength<=r?(c.push(g.html),f+=g.textLength,d+=g.textLength):(v=!0,h.length=0)}return(p||s.length>0)&&c.unshift("\u2026"),(v||h.length>0)&&c.push("\u2026"),c.join("")}function o(e,t,n,a,l,i){var c=[],h=t[a],d=h[0],m=h[1];if(d<l)(a+=1)<t.length&&c.push.apply(c,o(e,t,n,a,l));else{d>l&&c.push.apply(c,s(e.substring(l,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),i&&(i.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(d,m),n,!0),textLength:m});var f=d+m;(a+=1)<t.length?c.push.apply(c,o(e,t,n,a,f)):f<e.length&&c.push.apply(c,s(e.substr(f)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){"use strict";n.d(t,{vc:function(){return l},rx:function(){return i},dK:function(){return a},_k:function(){return s},Hk:function(){return c},qo:function(){return o},Iz:function(){return h}});var r=n(5850),u=n.n(r);n(8465)(u()),n(4376).w(u()),n(3609)(u());var a=["en","zh"],s=!1,l=null,i="4fc3c962",o=10,c=50,h={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){"use strict";function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);