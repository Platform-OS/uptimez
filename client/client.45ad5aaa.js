function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function c(e,t,n,r,o,s,a){const c=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(c){const o=i(t,n,r,a);e.p(o,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function $(){return b("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e){return function(t){return t.preventDefault(),e.call(this,t)}}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:w(e,r,t[r])}function x(e){return Array.from(e.childNodes)}function S(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(r,1)[0]}}return r?g(t):m(t)}function P(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return b(t)}function A(e){return P(e," ")}function T(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function L(e,t){e.value=null==t?"":t}function I(e,t=document.body){return Array.from(t.querySelectorAll(e))}let R;function O(e){R=e}function N(){if(!R)throw new Error("Function called outside component initialization");return R}function j(e){N().$$.on_mount.push(e)}function k(e){N().$$.after_update.push(e)}function C(e){N().$$.on_destroy.push(e)}const U=[],H=[],G=[],q=[],D=Promise.resolve();let M=!1;function B(e){G.push(e)}let J=!1;const V=new Set;function z(){if(!J){J=!0;do{for(let e=0;e<U.length;e+=1){const t=U[e];O(t),F(t.$$)}for(O(null),U.length=0;H.length;)H.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];V.has(t)||(V.add(t),t())}G.length=0}while(U.length);for(;q.length;)q.pop()();M=!1,J=!1,V.clear()}}function F(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const K=new Set;let Y;function W(){Y={r:0,c:[],p:Y}}function Q(){Y.r||o(Y.c),Y=Y.p}function X(e,t){e&&e.i&&(K.delete(e),e.i(t))}function Z(e,t,n,r){if(e&&e.o){if(K.has(e))return;K.add(e),Y.c.push((()=>{K.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function ee(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const a=e[s],i=t[s];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[s]=i}else for(const e in a)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function te(e){return"object"==typeof e&&null!==e?e:{}}function ne(e){e&&e.c()}function re(e,t){e&&e.l(t)}function oe(e,t,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=e.$$;a&&a.m(t,r),B((()=>{const t=i.map(n).filter(s);c?c.push(...t):o(t),e.$$.on_mount=[]})),l.forEach(B)}function se(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(U.push(e),M||(M=!0,D.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,s,a,i,c,l=[-1]){const u=R;O(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(t,f,((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&ae(t,e)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const e=x(n.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&X(t.$$.fragment),oe(t,n.target,n.anchor),z()}O(u)}class ce{$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const le=[];function ue(t,n=e){let r;const o=[];function s(e){if(a(t,e)&&(t=e,r)){const e=!le.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),le.push(n,t)}if(e){for(let e=0;e<le.length;e+=2)le[e][0](le[e+1]);le.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(a,i=e){const c=[a,i];return o.push(c),1===o.length&&(r=n(s)||e),a(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const fe={};var pe={owner:"pavelloz",repo:"uptimez",sites:[{name:"Sydney",url:"https://prod01.sydney.platformos.com/ping"},{name:"Oregon",url:"https://prod01.oregon.platform-os.com/ping"},{name:"London",url:"https://prod01.london.platform-os.com/ping"},{name:"Oregon Staging",url:"https://staging.oregon.platformos.com/ping"},{name:"Partner Portal",url:"https://partners.platformos.com/"}],"status-website":{baseUrl:"/uptimez",name:"Uptime",introTitle:"platformOS status page",introMessage:"Learn uptime, average response times, ongoing and past incidents"},i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME%",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"Powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage"},path:"https://pavelloz.github.io/uptimez/"};function de(e,t,n){const r=e.slice();return r[1]=t[n],r}function he(e){let t,n,r,o,s,a,i=e[1].title+"";return{c(){t=m("li"),n=m("a"),r=b(i),a=v(),this.h()},l(e){t=S(e,"LI",{});var o=x(t);n=S(o,"A",{"aria-current":!0,href:!0,class:!0});var s=x(n);r=P(s,i),s.forEach(d),a=A(o),o.forEach(d),this.h()},h(){w(n,"aria-current",o=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),w(n,"href",s=e[1].href.replace("$OWNER",pe.owner).replace("$REPO",pe.repo)),w(n,"class","svelte-1lj8bp2")},m(e,o){p(e,t,o),f(t,n),f(n,r),f(t,a)},p(e,t){1&t&&o!==(o=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&w(n,"aria-current",o)},d(e){e&&d(t)}}}function me(t){let n,r,o,s,a,i=pe["status-website"]&&pe["status-website"].logoUrl&&function(t){let n,r,o,s,a,i,c,l,u=pe["status-website"].name+"";return{c(){n=m("div"),r=m("a"),o=m("img"),a=v(),i=m("div"),c=b(u),this.h()},l(e){n=S(e,"DIV",{});var t=x(n);r=S(t,"A",{href:!0,class:!0});var s=x(r);o=S(s,"IMG",{alt:!0,src:!0,class:!0}),a=A(s),i=S(s,"DIV",{});var l=x(i);c=P(l,u),l.forEach(d),s.forEach(d),t.forEach(d),this.h()},h(){w(o,"alt",""),o.src!==(s=pe["status-website"].logoUrl)&&w(o,"src",s),w(o,"class","svelte-1lj8bp2"),w(r,"href",l=pe["status-website"].logoHref||pe.path),w(r,"class","logo svelte-1lj8bp2")},m(e,t){p(e,n,t),f(n,r),f(r,o),f(r,a),f(r,i),f(i,c)},p:e,d(e){e&&d(n)}}}(),c=pe["status-website"]&&pe["status-website"].navbar&&function(e){let t,n=pe["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=he(de(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);p(e,t,n)},p(e,o){if(1&o){let s;for(n=pe["status-website"].navbar,s=0;s<n.length;s+=1){const a=de(e,n,s);r[s]?r[s].p(a,o):(r[s]=he(a),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){h(r,e),e&&d(t)}}}(t),l=pe["status-website"]&&pe["status-website"].navbarGitHub&&!pe["status-website"].navbar&&function(t){let n,r,o,s,a=pe.i18n.navGitHub+"";return{c(){n=m("li"),r=m("a"),o=b(a),this.h()},l(e){n=S(e,"LI",{});var t=x(n);r=S(t,"A",{href:!0,class:!0});var s=x(r);o=P(s,a),s.forEach(d),t.forEach(d),this.h()},h(){w(r,"href",s=`https://github.com/${pe.owner}/${pe.repo}`),w(r,"class","svelte-1lj8bp2")},m(e,t){p(e,n,t),f(n,r),f(r,o)},p:e,d(e){e&&d(n)}}}();return{c(){n=m("nav"),r=m("div"),i&&i.c(),o=v(),s=m("ul"),c&&c.c(),a=v(),l&&l.c(),this.h()},l(e){n=S(e,"NAV",{class:!0});var t=x(n);r=S(t,"DIV",{class:!0});var u=x(r);i&&i.l(u),o=A(u),s=S(u,"UL",{class:!0});var f=x(s);c&&c.l(f),a=A(f),l&&l.l(f),f.forEach(d),u.forEach(d),t.forEach(d),this.h()},h(){w(s,"class","svelte-1lj8bp2"),w(r,"class","container svelte-1lj8bp2"),w(n,"class","svelte-1lj8bp2")},m(e,t){p(e,n,t),f(n,r),i&&i.m(r,null),f(r,o),f(r,s),c&&c.m(s,null),f(s,a),l&&l.m(s,null)},p(e,[t]){pe["status-website"]&&pe["status-website"].logoUrl&&i.p(e,t),pe["status-website"]&&pe["status-website"].navbar&&c.p(e,t),pe["status-website"]&&pe["status-website"].navbarGitHub&&!pe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&d(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function ge(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class be extends ce{constructor(e){super(),ie(this,e,ge,me,a,{segment:0})}}var ve={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function $e(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ye(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _e(e,t){var n,r,o,s,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function p(e){var t=ve[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function d(){for(var e="";c.length;)e+=p(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=i.exec(e);)r=e.substring(f,o.index),f=i.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((a=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+$e(ye(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=o[6])?(a.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=_e($e(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+s+"</"+a+">"):o[8]?n='<img src="'+ye(o[8])+'" alt="'+ye(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+ye(o[11]||u[r.toLowerCase()])+'">'),n=d()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(a="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+_e(o[12]||o[15],u)+"</"+a+">":o[16]?n="<code>"+ye(o[16])+"</code>":(o[17]||o[1])&&(n=p(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function we(e){let t,n,r,o,s,a,l,u,h,g,b,$,y=_e(pe.i18n.footer.replace(/\$REPO/,`https://github.com/${pe.owner}/${pe.repo}`))+"";a=new be({props:{segment:e[0]}});const _=e[2].default,E=function(e,t,n,r){if(e){const o=i(e,t,n,r);return e[0](o)}}(_,e,e[1],null);return{c(){t=m("link"),r=m("link"),s=v(),ne(a.$$.fragment),l=v(),u=m("main"),E&&E.c(),h=v(),g=m("footer"),b=m("p"),this.h()},l(e){const n=I('[data-svelte="svelte-1t2b91p"]',document.head);t=S(n,"LINK",{rel:!0,type:!0,href:!0}),r=S(n,"LINK",{rel:!0,type:!0,href:!0}),n.forEach(d),s=A(e),re(a.$$.fragment,e),l=A(e),u=S(e,"MAIN",{class:!0});var o=x(u);E&&E.l(o),o.forEach(d),h=A(e),g=S(e,"FOOTER",{class:!0});var i=x(g);b=S(i,"P",{}),x(b).forEach(d),i.forEach(d),this.h()},h(){w(t,"rel","icon"),w(t,"type","image/svg"),w(t,"href",n=(pe["status-website"]||{}).faviconSvg||(pe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),w(r,"rel","icon"),w(r,"type","image/png"),w(r,"href",o=(pe["status-website"]||{}).favicon||"/logo-192.png"),w(u,"class","container"),w(g,"class","svelte-jbr799")},m(e,n){f(document.head,t),f(document.head,r),p(e,s,n),oe(a,e,n),p(e,l,n),p(e,u,n),E&&E.m(u,null),p(e,h,n),p(e,g,n),f(g,b),b.innerHTML=y,$=!0},p(e,[t]){const n={};1&t&&(n.segment=e[0]),a.$set(n),E&&E.p&&2&t&&c(E,_,e,e[1],t,null,null)},i(e){$||(X(a.$$.fragment,e),X(E,e),$=!0)},o(e){Z(a.$$.fragment,e),Z(E,e),$=!1},d(e){d(t),d(r),e&&d(s),se(a,e),e&&d(l),e&&d(u),E&&E.d(e),e&&d(h),e&&d(g)}}}function Ee(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class xe extends ce{constructor(e){super(),ie(this,e,Ee,we,a,{segment:0})}}function Se(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=b(r)},l(e){t=S(e,"PRE",{});var o=x(t);n=P(o,r),o.forEach(d)},m(e,r){p(e,t,r),f(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&T(n,r)},d(e){e&&d(t)}}}function Pe(t){let n,r,o,s,a,i,c,l,u,h=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&Se(t);return{c(){r=v(),o=m("h1"),s=b(t[0]),a=v(),i=m("p"),c=b(h),l=v(),g&&g.c(),u=$(),this.h()},l(e){I('[data-svelte="svelte-1moakz"]',document.head).forEach(d),r=A(e),o=S(e,"H1",{class:!0});var n=x(o);s=P(n,t[0]),n.forEach(d),a=A(e),i=S(e,"P",{class:!0});var f=x(i);c=P(f,h),f.forEach(d),l=A(e),g&&g.l(e),u=$(),this.h()},h(){w(o,"class","svelte-17w3omn"),w(i,"class","svelte-17w3omn")},m(e,t){p(e,r,t),p(e,o,t),f(o,s),p(e,a,t),p(e,i,t),f(i,c),p(e,l,t),g&&g.m(e,t),p(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&T(s,e[0]),2&t&&h!==(h=e[1].message+"")&&T(c,h),e[2]&&e[1].stack?g?g.p(e,t):(g=Se(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&d(r),e&&d(o),e&&d(a),e&&d(i),e&&d(l),g&&g.d(e),e&&d(u)}}}function Ae(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Te extends ce{constructor(e){super(),ie(this,e,Ae,Pe,a,{status:0,error:1})}}function Le(e){let n,r,o;const s=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ne(n.$$.fragment),r=$()},l(e){n&&re(n.$$.fragment,e),r=$()},m(e,t){n&&oe(n,e,t),p(e,r,t),o=!0},p(e,t){const o=16&t?ee(s,[te(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){W();const e=n;Z(e.$$.fragment,1,0,(()=>{se(e,1)})),Q()}a?(n=new a(i()),ne(n.$$.fragment),X(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(e){o||(n&&X(n.$$.fragment,e),o=!0)},o(e){n&&Z(n.$$.fragment,e),o=!1},d(e){e&&d(r),n&&se(n,e)}}}function Ie(e){let t,n;return t=new Te({props:{error:e[0],status:e[1]}}),{c(){ne(t.$$.fragment)},l(e){re(t.$$.fragment,e)},m(e,r){oe(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){Z(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Re(e){let t,n,r,o;const s=[Ie,Le],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=s[t](e),{c(){n.c(),r=$()},l(e){n.l(e),r=$()},m(e,n){a[t].m(e,n),p(e,r,n),o=!0},p(e,o){let c=t;t=i(e),t===c?a[t].p(e,o):(W(),Z(a[c],1,1,(()=>{a[c]=null})),Q(),n=a[t],n?n.p(e,o):(n=a[t]=s[t](e),n.c()),X(n,1),n.m(r.parentNode,r))},i(e){o||(X(n),o=!0)},o(e){Z(n),o=!1},d(e){a[t].d(e),e&&d(r)}}}function Oe(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Re]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new xe({props:s}),{c(){ne(n.$$.fragment)},l(e){re(n.$$.fragment,e)},m(e,t){oe(n,e,t),r=!0},p(e,[t]){const r=12&t?ee(o,[4&t&&{segment:e[2][0]},8&t&&te(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(X(n.$$.fragment,e),r=!0)},o(e){Z(n.$$.fragment,e),r=!1},d(e){se(n,e)}}}function Ne(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return k(l),u=fe,f=r,N().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,a,i,c,r,l]}class je extends ce{constructor(e){super(),ie(this,e,Ne,Oe,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ke=[],Ce=[{js:()=>Promise.all([import("./index.49b6c20e.js"),__inject_styles(["client-9c935b61.css","createOctokit-777bf8f6.css","index-87d8f7e9.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.56833a05.js"),__inject_styles(["client-9c935b61.css","rate-limit-exceeded-e1b7a1b3.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].e40d25e0.js"),__inject_styles(["client-9c935b61.css","createOctokit-777bf8f6.css","[number]-7cdb9800.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].36bb90f5.js"),__inject_styles(["client-9c935b61.css","createOctokit-777bf8f6.css","[number]-e7104239.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.84db00e0.js"),__inject_styles(["client-9c935b61.css","error-a44b661b.css"])]).then((function(e){return e[0]}))}],Ue=(He=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:He(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:He(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var He;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ge(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let De,Me=1;const Be="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Je={};let Ve,ze;function Fe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function Ke(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ve))return null;let t=e.pathname.slice(Ve.length);if(""===t&&(t="/"),!ke.some((e=>e.test(t))))for(let n=0;n<Ue.length;n+=1){const r=Ue[n],o=r.pattern.exec(t);if(o){const n=Fe(e.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:o,page:i}}}}function Ye(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ke(o);if(s){Xe(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),Be.pushState({id:De},"",o.href)}}function We(){return{x:pageXOffset,y:pageYOffset}}function Qe(e){if(Je[De]=We(),e.state){const t=Ke(new URL(location.href));t?Xe(t,e.state.id):location.href=location.href}else!function(e){Me=e}(Me+1),function(e){De=e}(Me),Be.replaceState({id:De},"",location.href)}function Xe(e,t,n,r){return Ge(this,void 0,void 0,(function*(){const o=!!t;if(o)De=t;else{const e=We();Je[De]=e,De=t=++Me,Je[De]=n?e:{x:0,y:0}}if(yield ze(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Je[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Je[De]=n,o||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ze(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let et,tt=null;function nt(e){const t=qe(e.target);t&&"prefetch"===t.rel&&function(e){const t=Ke(new URL(e,Ze(document)));if(t)tt&&e===tt.href||(tt={href:e,promise:$t(t)}),tt.promise}(t.href)}function rt(e){clearTimeout(et),et=setTimeout((()=>{nt(e)}),20)}function ot(e,t={noscroll:!1,replaceState:!1}){const n=Ke(new URL(e,Ze(document)));return n?(Be[t.replaceState?"replaceState":"pushState"]({id:De},"",e),Xe(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const st="undefined"!=typeof __SAPPER__&&__SAPPER__;let at,it,ct,lt=!1,ut=[],ft="{}";const pt={page:function(e){const t=ue(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:ue(null),session:ue(st&&st.session)};let dt,ht,mt;function gt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function bt(e){return Ge(this,void 0,void 0,(function*(){at&&pt.preloading.set(!0);const t=function(e){return tt&&tt.href===e.href?tt.promise:$t(e)}(e),n=it={},r=yield t,{redirect:o}=r;if(n===it)if(o)yield ot(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield vt(n,t,gt(t,e.page))}}))}function vt(e,t,n){return Ge(this,void 0,void 0,(function*(){pt.page.set(n),pt.preloading.set(!1),at?at.$set(t):(t.stores={page:{subscribe:pt.page.subscribe},preloading:{subscribe:pt.preloading.subscribe},session:pt.session},t.level0={props:yield ct},t.notify=pt.page.notify,at=new je({target:mt,props:t,hydrate:!0})),ut=e,ft=JSON.stringify(n.query),lt=!0,ht=!1}))}function $t(e){return Ge(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!ct){const e=()=>({});ct=st.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},dt)}let i,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>Ge(this,void 0,void 0,(function*(){const f=r[i];if(function(e,t,n,r){if(r!==ft)return!0;const o=ut[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[c]=r[i+1],!t)return{segment:f};const p=c++;if(!ht&&!u&&ut[i]&&ut[i].part===t.i)return ut[i];u=!1;const{default:d,preload:h}=yield Ce[t.i].js();let m;return m=lt||!st.preloaded[i+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},dt):{}:st.preloaded[i+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:t.i}})))))}catch(e){s.error=e,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var yt,_t,wt;pt.session.subscribe((e=>Ge(void 0,void 0,void 0,(function*(){if(dt=e,!lt)return;ht=!0;const t=Ke(new URL(location.href)),n=it={},{redirect:r,props:o,branch:s}=yield $t(t);n===it&&(r?yield ot(r.location,{replaceState:!0}):yield vt(s,o,gt(o,t.page)))})))),yt={target:document.querySelector("#sapper")},_t=yt.target,mt=_t,wt=st.baseUrl,Ve=wt,ze=bt,"scrollRestoration"in Be&&(Be.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Be.scrollRestoration="auto"})),addEventListener("load",(()=>{Be.scrollRestoration="manual"})),addEventListener("click",Ye),addEventListener("popstate",Qe),addEventListener("touchstart",nt),addEventListener("mousemove",rt),st.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:a}=st;ct||(ct=o&&o[0]);const i={error:a,status:s,session:r,level0:{props:ct},level1:{props:{status:s,error:a},component:Te},segments:o},c=Fe(n);vt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Be.replaceState({id:Me},"",t);const n=Ke(new URL(location.href));if(n)return Xe(n,Me,!0,e)}));export{se as A,u as B,I as C,_e as D,g as E,ot as F,L as G,y as H,_ as I,o as J,t as K,E as L,ee as M,k as N,C as O,l as P,H as Q,te as R,ce as S,x as a,P as b,S as c,d,m as e,w as f,p as g,f as h,ie as i,v as j,A as k,W as l,Z as m,e as n,Q as o,X as p,j as q,pe as r,a as s,b as t,T as u,$ as v,h as w,ne as x,re as y,oe as z};

import __inject_styles from './inject_styles.5607aec6.js';