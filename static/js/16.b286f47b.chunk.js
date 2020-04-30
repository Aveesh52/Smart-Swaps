(this.webpackJsonpsmartswap=this.webpackJsonpsmartswap||[]).push([[16],{1063:function(e,n,t){"use strict";t.r(n);var r=t(13),a=t.n(r),o=t(29),c=t(8),u=t(2),i=t(0),l=t.n(i),d=t(64),s=t(44),f=t(15),m=t(3),v=t(49),b=t(59),p=t(10),h=t(18),j=t(919),O=t(837),E=t(77),g=t(78);function x(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(u.a)(["\n  font-size: 0.75rem;\n  color: ",";\n"]);return w=function(){return e},e}function y(){var e=Object(u.a)(["\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return k=function(){return e},e}function A(){var e=Object(u.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return A=function(){return e},e}function C(){var e=Object(u.a)(["\n  ",";\n  padding: 1rem 0;\n"]);return C=function(){return e},e}var S=m.d.div(C(),(function(e){return e.theme.flexColumnNoWrap})),W=m.d.div(A(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),z=m.d.span(k(),(function(e){return e.theme.doveGray})),G=m.d.div(y(),(function(e){return e.theme.doveGray})),N=m.d.div(w(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed})),R=m.d.div(x());n.default=Object(d.g)((function(e){var n=e.location,t=e.params,r=Object(v.b)().t,u=Object(p.n)().account,d=Object(i.useState)(),m=(Object(c.a)(d,1)[0],Object(p.i)()),x=Object(i.useState)({address:t.tokenAddress?t.tokenAddress:"",name:""}),w=Object(c.a)(x,2),y=w[0],k=w[1],A=Object(i.useState)(),C=Object(c.a)(A,2),B=C[0],T=C[1],I=Object(E.d)(y.address),J=I.name,D=I.symbol,F=I.decimals,L=I.exchangeAddress,Z=Object(g.e)();Object(i.useEffect)((function(){Object(s.a)().push(window.location.pathname+"")}),[]);var q=Object(i.useState)(!u&&r("noWallet")),H=Object(c.a)(q,2),K=H[0],M=H[1];function P(){return(P=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.estimate.createExchange(y.address);case 2:n=e.sent,m.createExchange(y.address,{gasLimit:n}).then((function(e){b.a.event({category:"Transaction",action:"Create Exchange"}),Z(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){return B?M(r("invalidTokenAddress")):void 0===D||void 0===F||void 0===L?M():null===D?M(r("invalidSymbol")):null===F?M(r("invalidDecimals")):L!==f.ethers.constants.AddressZero?M(r("exchangeExists")):M(u?null:r("noWallet")),function(){M()}}),[y.address,D,F,L,u,r,B]);var Q=null===K;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{title:r("tokenAddress"),initialInput:t.tokenAddress?{address:t.tokenAddress}:{address:n.state&&n.state.tokenAddress||""},onChange:k,onError:T}),l.a.createElement(O.a,{hideBottom:!0},l.a.createElement(S,null,l.a.createElement(W,null,l.a.createElement(z,null,r("name")),l.a.createElement("span",null,J||" - ")),l.a.createElement(W,null,l.a.createElement(z,null,r("symbol")),l.a.createElement("span",null,D||" - ")),l.a.createElement(W,null,l.a.createElement(z,null,r("decimals")),l.a.createElement("span",null,F||0===F?F:" - ")))),l.a.createElement(G,null,l.a.createElement(N,null,K||r("enterTokenCont"))),l.a.createElement(R,null,l.a.createElement(h.b,{disabled:!Q,onClick:function(){return P.apply(this,arguments)}},r("createExchange"))))}))},919:function(e,n,t){"use strict";t.d(n,"a",(function(){return A}));var r=t(8),a=t(2),o=t(0),c=t.n(o),u=t(3),i=t(49),l=t(11),d=t(7),s=t(10);function f(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",";\n\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return m=function(){return e},e}function v(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return v=function(){return e},e}function b(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return b=function(){return e},e}function p(){var e=Object(a.a)(["\n  flex: 1;\n"]);return p=function(){return e},e}function h(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n"]);return h=function(){return e},e}function j(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return j=function(){return e},e}var O=u.d.div(j(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(l.c)(.95,n.shadowColor)}),(function(e){return e.theme.inputBackground})),E=u.d.div(h(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.inputBackground})),g=u.d.div(p()),x=u.d.div(b(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),w=u.d.div(v()),y=u.d.div(m(),(function(e){return e.theme.flexRowNoWrap})),k=u.d.input(f(),(function(e){return e.theme.inputBackground}),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue}),(function(e){return e.theme.placeholderGray}));function A(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,u=e.onChange,l=void 0===u?function(){}:u,f=e.onError,m=void 0===f?function(){}:f,v=Object(i.b)().t,b=Object(s.n)().library,p=Object(o.useState)(a.address?a.address:""),h=Object(r.a)(p,2),j=h[0],A=h[1],C=Object(s.e)(j,150),S=Object(o.useState)({address:void 0,name:void 0}),W=Object(r.a)(S,2),z=W[0],G=W[1],N=Object(o.useState)(!1),R=Object(r.a)(N,2),B=R[0],T=R[1];return Object(o.useEffect)((function(){l({address:z.address,name:z.name})}),[l,z.address,z.name]),Object(o.useEffect)((function(){m(B)}),[m,B]),Object(o.useEffect)((function(){var e=!1;if(Object(d.A)(C))try{b.lookupAddress(C).then((function(n){e||(n?A(n):(G({address:C,name:""}),T(null)))})).catch((function(){e||(G({address:C,name:""}),T(null))}))}catch(n){G({address:C,name:""}),T(null)}else if(""!==C)try{b.resolveName(C).then((function(n){e||(n?(G({address:n,name:C}),T(null)):T(!0))})).catch((function(){e||T(!0)}))}catch(t){T(!0)}return function(){e=!0}}),[C,b,l,m]),c.a.createElement(O,null,c.a.createElement(E,{error:""!==j&&B},c.a.createElement(g,null,c.a.createElement(x,null,c.a.createElement(w,null,c.a.createElement("span",null,n||v("recipientAddress")))),c.a.createElement(y,null,c.a.createElement(k,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==j&&B,onChange:function(e){void 0===z.address&&void 0===z.name||G({address:void 0,name:void 0}),void 0!==B&&T();var n=e.target.value,t=Object(d.A)(n);A(t||n)},value:j})))))}}}]);
//# sourceMappingURL=16.b286f47b.chunk.js.map