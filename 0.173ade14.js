/*! For license information please see 0.173ade14.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},198:function(e,t,a){"use strict";var n=a(0),r=a(55);t.a=function(){return Object(n.useContext)(r.a)}},199:function(e,t,a){"use strict";a(51);var n=a(0),r=a.n(n),c=a(35);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,l=e.href,s=a||l,u=i.test(s),d=!1,h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,u]),s&&u?r.a.createElement(c.b,o({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;h&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",o({},e,{href:s}))}},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(217);var n=a(198);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(54),o=a(198),i=a(200),l=(a(51),a(24),a(19),a(20),a(52),a(199)),s=a(197),u=a.n(s),d=a(55),h=(a(244),function(e){var t=Object(n.useState)(!0),c=t[0],o=t[1],i=Object(n.useRef)(null),l=Object(n.useContext)(d.a);Object(n.useEffect)((function(){var e=l.siteConfig,t=(void 0===e?{}:e).themeConfig.algolia;"undefined"!=typeof window?a.e(77).then(a.t.bind(null,507,7)).then((function(e){(0,e.default)({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})})):(console.warn("Search has failed to load and now is being disabled"),o(!1))}),[]);var s=Object(n.useCallback)((function(t){i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:u()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:s,onKeyDown:s,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:u()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:s,onBlur:s,ref:i})):null}),f=a(245),p=a.n(f),m=a(249),v=a.n(m);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b=function(){return r.a.createElement("span",{className:u()(v.a.toggle,v.a.moon)})},k=function(){return r.a.createElement("span",{className:u()(v.a.toggle,v.a.sun)})},y=function(e){return r.a.createElement(p.a,g({icons:{checked:r.a.createElement(b,null),unchecked:r.a.createElement(k,null)}},e))},E=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},_=a(250),w=a.n(_);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e){var t=e.to,a=e.href,n=e.label,c=(e.position,function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","href","label","position"])),o=Object(i.a)(t);return r.a.createElement(l.a,O({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:o},c),n)}var x=function(){var e=Object(o.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],d=Object(n.useState)(!1),f=d[0],p=d[1],m=E(),v=m[0],g=m[1],b=e.siteConfig,k=void 0===b?{}:b,_=k.baseUrl,x=k.themeConfig,j=void 0===x?{}:x,N=j.navbar,S=void 0===N?{}:N,T=j.disableDarkMode,M=void 0!==T&&T,P=S.title,B=S.logo,F=void 0===B?{}:B,I=S.links,X=void 0===I?[]:I,L=Object(n.useCallback)((function(){s(!0)}),[s]),D=Object(n.useCallback)((function(){s(!1)}),[s]),R=Object(n.useCallback)((function(e){return g(e.target.checked?"dark":"")}),[g]),W=Object(i.a)(F.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":v})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(l.a,{className:"navbar__brand",to:_},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=P&&r.a.createElement("strong",{className:f?w.a.hideLogoText:""},P)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(C,O({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(C,O({},e,{key:t}))})),!M&&r.a.createElement(y,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===v,onChange:R}),r.a.createElement(h,{handleSearchBarToggle:p,isSearchBarExpanded:f}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(l.a,{className:"navbar__brand",onClick:D,to:_},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=P&&r.a.createElement("strong",null,P)),!M&&a&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===v,onChange:R})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(C,O({className:"menu__link"},e,{onClick:D})))}))))))))},j=a(208);a(251);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,p=e.noFooter,m=e.description,v=e.image,g=e.keywords,b=e.permalink,k=f||s+" \xb7 "+l,y=v||u,E=d+Object(i.a)(y),_=Object(i.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:E}),y&&r.a.createElement("meta",{property:"twitter:image",content:E}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(x,null),r.a.createElement("div",{className:"main-wrapper"},h),!p&&r.a.createElement(j.a,null))}},217:function(e,t,a){"use strict";var n=a(13),r=a(34),c=a(218),o="".startsWith;n(n.P+n.F*a(219)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},218:function(e,t,a){var n=a(74),r=a(25);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},219:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},244:function(e,t,a){},245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=h(c),i=h(a(197)),l=h(a(9)),s=h(a(246)),u=h(a(247)),d=a(248);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},246:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},248:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},249:function(e,t,a){e.exports={toggle:"toggle_keGJ",moon:"moon_1gwN",sun:"sun_3CPA"}},250:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_1gtM",hideLogoText:"hideLogoText_1pX_"}},251:function(e,t,a){}}]);