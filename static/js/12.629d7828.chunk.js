(this.webpackJsonpsmartswap=this.webpackJsonpsmartswap||[]).push([[12],{1066:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return D}));var r=t(0),a=t.n(r),c=t(59),i=t(64),o=t(8),u=t(108),l=t(2),m=t(101),f=t(49),d=t(3),h=t(837),s=t(858),p=t(144),b=t(10),g=t(11);function v(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(l.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  padding: 2rem 0 2rem 0;\n"]);return y=function(){return e},e}function O(){var e=Object(l.a)(["\n  ","\n  padding: 1rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  font-size: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",";\n  font-size: 1rem;\n\n  &."," {\n    background-color: ",";\n    border-radius: 3rem;\n    border: 1px solid ",";\n    font-weight: 500;\n    color: ",";\n  }\n"]);return O=function(){return e},e}function E(){var e=Object(l.a)(["\n  flex: 1 0 auto;\n"]);return E=function(){return e},e}function j(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  padding: 1rem 1rem;\n  font-size: 1rem;\n  color: ",";\n  font-weight: 500;\n  cursor: pointer;\n\n  :hover {\n    color: ",";\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return j=function(){return e},e}var x=[{path:"/add-liquidity",textKey:"addLiquidity",regex:/\/add-liquidity/},{path:"/remove-liquidity",textKey:"removeLiquidity",regex:/\/remove-liquidity/},{path:"/create-exchange",textKey:"createExchange",regex:/\/create-exchange.*/}],w=d.d.div(j(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue}),(function(e){var n=e.theme;return Object(g.b)(.1,n.royalBlue)})),k=d.d.span(E()),q=Object(d.d)(m.c).attrs({activeClassName:"MODE"})(O(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray}),"MODE",(function(e){return e.theme.inputBackground}),(function(e){return e.theme.mercuryGray}),(function(e){return e.theme.royalBlue})),B=d.d.div(y(),(function(e){return e.theme.inputBackground})),z=Object(d.d)((function(e){e.isError,e.highSlippageWarning;var n=Object(u.a)(e,["isError","highSlippageWarning"]);return a.a.createElement(s.a,n)}))(v(),(function(e){return e.theme.royalBlue}));var A=Object(i.g)((function(e){var n=e.location.pathname,t=e.history,c=Object(f.b)().t,i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],m=u[1],d=x[x.findIndex((function(e){var t=e.regex;return n.match(t)}))].textKey,s=Object(r.useCallback)((function(e){var r=x.findIndex((function(e){var t=e.regex;return n.match(t)}));t.push(x[(r+x.length+e)%x.length].path)}),[n,t]),g=Object(r.useCallback)((function(){s(1)}),[s]),v=Object(r.useCallback)((function(){s(-1)}),[s]);return Object(b.a)("ArrowDown",g,l),Object(b.a)("ArrowUp",v,l),a.a.createElement(h.a,{hideTop:!0},a.a.createElement(w,{onClick:function(){m(!0)}},a.a.createElement(k,null,c(d)),a.a.createElement(z,{alt:"arrow down"})),a.a.createElement(p.a,{isOpen:l,maxHeight:50,onDismiss:function(){m(!1)}},a.a.createElement(B,null,x.map((function(e){var n=e.path,t=e.textKey,r=e.regex;return a.a.createElement(q,{key:n,to:n,isActive:function(e,n){return n.pathname.match(r)},onClick:function(){m(!1)}},c(t))})))))})),C=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,1065))})),R=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,1062))})),S=Object(r.lazy)((function(){return t.e(16).then(t.bind(null,1063))}));function D(e){var n=e.params;Object(r.useEffect)((function(){c.a.pageview(window.location.pathname+window.location.search)}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null),a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(i.d,null,a.a.createElement(i.b,{exact:!0,strict:!0,path:"/add-liquidity",component:function(){return a.a.createElement(C,{params:n})}}),a.a.createElement(i.b,{exact:!0,strict:!0,path:"/remove-liquidity",component:function(){return a.a.createElement(R,{params:n})}}),a.a.createElement(i.b,{exact:!0,strict:!0,path:"/create-exchange",component:function(){return a.a.createElement(S,{params:n})}}),a.a.createElement(i.b,{path:"/create-exchange/:tokenAddress",render:function(e){var n=e.match;return a.a.createElement(i.a,{to:{pathname:"/create-exchange",state:{tokenAddress:n.params.tokenAddress}}})}}),a.a.createElement(i.a,{to:"/add-liquidity"}))))}},837:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(2),a=t(0),c=t.n(a),i=t(3);function o(){var e=Object(r.a)(["\n  position: absolute;\n  top: 80%;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  width: calc(100% - 1rem);\n  margin: 0 auto;\n  border-radius: 0.625rem;\n"]);return l=function(){return e},e}var m=i.d.div(l(),(function(e){return e.theme.concreteGray})),f=i.d.div(u(),(function(e){return e.theme.concreteGray})),d=i.d.div(o(),(function(e){return e.theme.concreteGray}));function h(e){var n=e.hideTop,t=e.hideBottom,r=e.children;return c.a.createElement(m,null,n||c.a.createElement(f,null),r,t||c.a.createElement(d,null))}},858:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#2F80ED"}),u=function(e){var n=e.svgRef,t=e.title,r=i(e,["svgRef","title"]);return a.a.createElement("svg",c({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,o)},l=a.a.forwardRef((function(e,n){return a.a.createElement(u,c({svgRef:n},e))}));t.p}}]);
//# sourceMappingURL=12.629d7828.chunk.js.map