(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6879:function(e,n,t){"use strict";t(7294);var r=t(1664),o=t(5893);n.Z=function(){return(0,o.jsx)("div",{children:(0,o.jsx)("nav",{children:(0,o.jsxs)("menu",{children:[(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"Home"})}),(0,o.jsx)(r.default,{href:"/about",children:(0,o.jsx)("a",{children:"About"})})]})})})}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),i=t(7426);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var E=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,g=i.useIntersection({rootMargin:"200px"}),j=r(g,2),m=j[0],x=j[1],L=a.default.useCallback((function(e){m(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,m]);a.default.useEffect((function(){var e=x&&t&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=l[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(o,d,v,{locale:n})}),[v,d,x,_,t,o]);var M={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,v,h,b,y,_)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof _?_:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(v,w,o&&o.locales,o&&o.domainLocales);M.href=k||c.addBasePath(c.addLocale(v,w,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],v=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[v,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},7406:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(6879),o=t(5893);n.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Z,{}),(0,o.jsx)("h1",{children:"Hola Mundo!!!!"})]})}},3685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7406)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);