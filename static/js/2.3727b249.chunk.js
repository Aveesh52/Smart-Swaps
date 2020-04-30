(this.webpackJsonpsmartswap=this.webpackJsonpsmartswap||[]).push([[2],{919:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var r=n(8),a=n(2),u=n(0),i=n.n(u),c=n(3),o=n(49),s=n(11),l=n(7),d=n(10);function p(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",";\n\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return b=function(){return e},e}function m(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return m=function(){return e},e}function h(){var e=Object(a.a)(["\n  flex: 1;\n"]);return h=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n"]);return v=function(){return e},e}function y(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return y=function(){return e},e}var E=c.d.div(y(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var t=e.theme;return Object(s.c)(.95,t.shadowColor)}),(function(e){return e.theme.inputBackground})),O=c.d.div(v(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.mercuryGray}),(function(e){return e.theme.inputBackground})),T=c.d.div(h()),j=c.d.div(m(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),g=c.d.div(b()),w=c.d.div(f(),(function(e){return e.theme.flexRowNoWrap})),C=c.d.input(p(),(function(e){return e.theme.inputBackground}),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.royalBlue}),(function(e){return e.theme.placeholderGray}));function N(e){var t=e.title,n=e.initialInput,a=void 0===n?"":n,c=e.onChange,s=void 0===c?function(){}:c,p=e.onError,f=void 0===p?function(){}:p,b=Object(o.b)().t,m=Object(d.n)().library,h=Object(u.useState)(a.address?a.address:""),v=Object(r.a)(h,2),y=v[0],N=v[1],k=Object(d.e)(y,150),D=Object(u.useState)({address:void 0,name:void 0}),S=Object(r.a)(D,2),x=S[0],A=S[1],I=Object(u.useState)(!1),U=Object(r.a)(I,2),P=U[0],L=U[1];return Object(u.useEffect)((function(){s({address:x.address,name:x.name})}),[s,x.address,x.name]),Object(u.useEffect)((function(){f(P)}),[f,P]),Object(u.useEffect)((function(){var e=!1;if(Object(l.A)(k))try{m.lookupAddress(k).then((function(t){e||(t?N(t):(A({address:k,name:""}),L(null)))})).catch((function(){e||(A({address:k,name:""}),L(null))}))}catch(t){A({address:k,name:""}),L(null)}else if(""!==k)try{m.resolveName(k).then((function(t){e||(t?(A({address:t,name:k}),L(null)):L(!0))})).catch((function(){e||L(!0)}))}catch(n){L(!0)}return function(){e=!0}}),[k,m,s,f]),i.a.createElement(E,null,i.a.createElement(O,{error:""!==y&&P},i.a.createElement(T,null,i.a.createElement(j,null,i.a.createElement(g,null,i.a.createElement("span",null,t||b("recipientAddress")))),i.a.createElement(w,null,i.a.createElement(C,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==y&&P,onChange:function(e){void 0===x.address&&void 0===x.name||A({address:void 0,name:void 0}),void 0!==P&&L();var t=e.target.value,n=Object(l.A)(t);N(n||t)},value:y})))))}},963:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n(13),a=n.n(r),u=n(93),i=n(29),c=n(8),o=n(4),s=n(108),l=n(2),d=n(0),p=n.n(d),f=n(59),b=n(44),m=n(15),h=n(3),v=n(49),y=n(10),E=n(16),O=n(7),T=n(77),j=n(78),g=n(73),w=n(147),C=n(36),N=n(18),k=n(915),D=n(919),S=n(837),x=n(964),A=n(880),I=n(859);function U(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return U=function(){return e},e}function P(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return P=function(){return e},e}function L(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n"]);return L=function(){return e},e}function R(){var e=Object(l.a)(["\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n  cursor: ",";\n"]);return R=function(){return e},e}function V(){var e=Object(l.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return V=function(){return e},e}var Z=m.ethers.utils.bigNumberify(1e5),_=h.d.div(V(),(function(e){return e.theme.flexRowNoWrap})),F=Object(h.d)((function(e){e.clickable,e.active;var t=Object(s.a)(e,["clickable","active"]);return p.a.createElement(A.a,t)}))(R(),(function(e){var t=e.theme;return e.active?t.royalBlue:t.chaliceGray}),(function(e){return e.clickable&&"pointer"})),H=h.d.div(L(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),M=h.d.span(P(),(function(e){return e.theme.doveGray})),B=h.d.div(U());function W(e,t,n){var r=e.mul(m.ethers.utils.bigNumberify(997)),a=r.mul(n),u=t.mul(m.ethers.utils.bigNumberify(1e3)).add(r);return a.div(u)}function G(e,t,n){var r=t.mul(e).mul(m.ethers.utils.bigNumberify(1e3)),a=n.sub(e).mul(m.ethers.utils.bigNumberify(997));return r.div(a).add(m.ethers.constants.One)}function z(e){return{independentValue:e.exactFieldURL&&e.exactAmountURL?e.exactAmountURL:"",dependentValue:"",independentField:"output"===e.exactFieldURL?1:0,inputCurrency:e.inputCurrencyURL?e.inputCurrencyURL:"ETH",outputCurrency:e.outputCurrencyURL?"ETH"===e.outputCurrencyURL?e.inputCurrencyURL&&"ETH"!==e.inputCurrencyURL?"ETH":"":e.outputCurrencyURL:e.initialCurrency?e.initialCurrency:""}}function q(e,t){switch(t.type){case"FLIP_INDEPENDENT":var n=e.independentField,r=e.inputCurrency,a=e.outputCurrency;return Object(o.a)(Object(o.a)({},e),{},{dependentValue:"",independentField:0===n?1:0,inputCurrency:a,outputCurrency:r});case"SELECT_CURRENCY":var u=e.inputCurrency,i=e.outputCurrency,c=t.payload,s=c.field,l=c.currency,d=0===s?l:u,p=1===s?l:i;return d===p?Object(o.a)(Object(o.a)({},e),{},{inputCurrency:0===s?l:"",outputCurrency:1===s?l:""}):Object(o.a)(Object(o.a)({},e),{},{inputCurrency:d,outputCurrency:p});case"UPDATE_INDEPENDENT":var f=t.payload,b=f.field,m=f.value,h=e.dependentValue,v=e.independentValue;return Object(o.a)(Object(o.a)({},e),{},{independentValue:m,dependentValue:m===v?h:"",independentField:b});case"UPDATE_DEPENDENT":return Object(o.a)(Object(o.a)({},e),{},{dependentValue:t.payload});default:return z()}}function Y(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var u=m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18));return a?e.mul(u).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(r))).div(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(t))).div(n):n.mul(u).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(t))).div(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(r))).div(e)}}catch(i){}}function J(e){var t=e.initialCurrency,n=e.sending,r=void 0!==n&&n,o=e.params,s=(e.nft,Object(v.b)().t),l=Object(y.n)(),h=l.account,A=l.chainId,U=l.library,P=l.error,L={};o.inputCurrency&&(L[o.inputCurrency]=!0),o.outputCurrency&&(L[o.outputCurrency]=!0),Object(O.A)(t)&&(L[t]=!0);var R=Object(j.e)(),V=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Number.parseInt(o.slippage);return!isNaN(e)&&(0===e||e>=1)?e:50},J=Object(d.useState)(),K=Object(c.a)(J,2),Q=K[0],X=K[1],$=Object(d.useState)(900),ee=Object(c.a)($,2),te=ee[0],ne=ee[1],re=Object(d.useState)((function(){return V()})),ae=Object(c.a)(re,2),ue=ae[0],ie=ae[1],ce=Object(d.useState)((function(){return V(!0)})),oe=Object(c.a)(ce,2),se=oe[0],le=oe[1],de=m.ethers.utils.bigNumberify(ue),pe=m.ethers.utils.bigNumberify(se);Object(d.useEffect)((function(){f.a.pageview(window.location.pathname+window.location.search)}),[]);var fe=Object(d.useReducer)(q,{initialCurrency:t,inputCurrencyURL:o.inputCurrency,outputCurrencyURL:o.outputCurrency,exactFieldURL:o.exactField,exactAmountURL:o.exactAmount},z),be=Object(c.a)(fe,2),me=be[0],he=be[1],ve=me.independentValue,ye=me.dependentValue,Ee=me.independentField,Oe=me.inputCurrency,Te=me.outputCurrency;Object(d.useEffect)((function(){X(!1);for(var e=0;e<E.e.length;e++)E.e[e].toLowerCase()!==Te.toLowerCase()&&E.e[e].toLowerCase()!==Oe.toLowerCase()||X(!0)}),[Te,Oe]);var je=Object(d.useState)({address:r&&o.recipient?o.recipient:"",name:""}),ge=Object(c.a)(je,2),we=ge[0],Ce=ge[1],Ne=Object(d.useState)(),ke=Object(c.a)(Ne,2),De=ke[0],Se=ke[1],xe=function(e,t){return e&&t?"ETH"===e?0:"ETH"===t?1:2:null}(Oe,Te),Ae=Object(T.d)(Oe),Ie=Ae.symbol,Ue=Ae.decimals,Pe=Ae.exchangeAddress,Le=Object(T.d)(Te),Re=Le.symbol,Ve=Le.decimals,Ze=Le.exchangeAddress;"LAND"!==Ie&&"LAND"!==Re||(Q=!0);var _e=Object(y.h)(Pe),Fe=Object(y.h)(Ze),He=Object(y.b)("0xf190929858f5f6dC55A03B40C25545fE9c79CF8c"),Me=0===xe?Fe:_e,Be=Object(y.d)(Oe),We=Object(w.b)(h,Oe,Pe),Ge=Object(g.f)(Oe),ze=Ge.reserveETH,qe=Ge.reserveToken,Ye=Object(g.f)(Te),Je=Ye.reserveETH,Ke=Ye.reserveToken,Qe=Object(g.c)(h,Oe),Xe=Object(g.c)(h,Te),$e=Qe&&Number.isInteger(Ue)?Object(O.a)(Qe,Ue,Math.min(4,Ue)):"",et=Xe&&Number.isInteger(Ve)?Object(O.a)(Xe,Ve,Math.min(4,Ve)):"",tt=0===Ee?Ue:Ve,nt=1===Ee?Ue:Ve,rt=Object(d.useState)(),at=Object(c.a)(rt,2),ut=at[0],it=at[1],ct=ye&&(nt||0===nt)?Object(O.a)(ye,nt,Math.min(4,nt),!1):"",ot=0===Ee?ut:ye,st=0===Ee?ve:ct,lt=1===Ee?ut:ye,dt=1===Ee?ve:ct,pt=Object(d.useState)(),ft=Object(c.a)(pt,2),bt=ft[0],mt=ft[1];Object(d.useEffect)((function(){if(ve&&(tt||0===tt)){try{var e=m.ethers.utils.parseUnits(ve,tt);if(e.lte(m.ethers.constants.Zero)||e.gte(m.ethers.constants.MaxUint256))throw Error();it(e),mt(null)}catch(t){mt(s("inputNotValid"))}return function(){it(),mt()}}}),[ve,tt,s]);var ht=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(e){var a=e.mul(t?n:r).div(m.ethers.utils.bigNumberify(1e4)),u=e.sub(a),i=e.add(a);return{minimum:u.lt(m.ethers.constants.Zero)?m.ethers.constants.Zero:u,maximum:i.gt(m.ethers.constants.MaxUint256)?m.ethers.constants.MaxUint256:i}}return{}}(ye,2===xe,pe,de),vt=ht.minimum,yt=ht.maximum,Et=Object(d.useState)(),Ot=Object(c.a)(Et,2),Tt=Ot[0],jt=Ot[1],gt=Object(d.useState)(!1),wt=Object(c.a)(gt,2),Ct=wt[0],Nt=wt[1];Object(d.useEffect)((function(){var e=0===Ee?ut:yt;if(Qe&&(We||"ETH"===Oe)&&e)return Qe.lt(e)?jt(s("insufficientBalance")):"ETH"!==Oe&&We.lt(e)?(jt(s("unlockTokenCont")),Nt(!0)):(jt(null),Nt(!1)),function(){jt(),Nt(!1)}}),[Ee,ut,yt,Qe,Oe,We,s]),Object(d.useEffect)((function(){var e=ut;if(0===xe){var t=Je,n=Ke;if(e&&t&&n){try{var r=0===Ee?W(e,t,n):G(e,t,n);if(r.lte(m.ethers.constants.Zero))throw Error();he({type:"UPDATE_DEPENDENT",payload:r})}catch(h){mt(s("insufficientLiquidity"))}return function(){he({type:"UPDATE_DEPENDENT",payload:""})}}}else if(1===xe){var a=ze,u=qe;if(e&&a&&u){try{var i=0===Ee?W(e,u,a):G(e,u,a);if(i.lte(m.ethers.constants.Zero))throw Error();he({type:"UPDATE_DEPENDENT",payload:i})}catch(v){mt(s("insufficientLiquidity"))}return function(){he({type:"UPDATE_DEPENDENT",payload:""})}}}else if(2===xe){var c=ze,o=qe,l=Je,d=Ke;if(e&&c&&o&&l&&d){try{if(0===Ee){var p=W(e,o,c);if("CDAI"!=Re&&p.lte(m.ethers.constants.Zero))throw Error();var f=W(p,l,d);if("CDAI"!=Re&&f.lte(m.ethers.constants.Zero))throw Error();he({type:"UPDATE_DEPENDENT",payload:f})}else{var b=G(e,l,d);if("CDAI"!=Re&&b.lte(m.ethers.constants.Zero))throw Error();f=G(b,o,c);if("CDAI"!=Re&&f.lte(m.ethers.constants.Zero))throw Error();he({type:"UPDATE_DEPENDENT",payload:f})}}catch(y){mt(s("insufficientLiquidity"))}return function(){he({type:"UPDATE_DEPENDENT",payload:""})}}}}),[ut,xe,Je,Ke,ze,qe,Ee,s]),Object(d.useEffect)((function(){Object(b.a)().push(window.location.pathname+"")}),[]);var kt=Object(d.useState)(!1),Dt=Object(c.a)(kt,2),St=Dt[0],xt=Dt[1],At=Y(ot,Ue,lt,Ve),It=Y(ot,Ue,lt,Ve,!0);"CDAI"!==Ie&&"CDAI"!==Re||r&&(Q=!0),("CDAI"==Ie&&"DAI"!=Re||"DAI"!=Ie&&"CDAI"==Re)&&(Q=!0);var Ut=function(e,t,n,r,a,u,i){var c=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(0===e)return Y(a,18,u,i,c);if(1===e)return Y(n,r,t,18,c);if(2===e){var o=m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18)),s=Y(n,r,t,18),l=Y(a,18,u,i);try{return s&&l?s.mul(l).div(o):void 0}catch(d){}}}(xe,ze,qe,Ue,Je,Ke,Ve),Pt=At&&Ut&&!Ut.isZero()?At.sub(Ut).abs().mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18))).div(Ut).sub(m.ethers.utils.bigNumberify(3).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(15)))):void 0,Lt=Pt&&Object(O.a)(Pt,16,2),Rt=Pt&&Pt.gte(m.ethers.utils.parseEther(".05"))&&Pt.lt(m.ethers.utils.parseEther(".2")),Vt=Pt&&Pt.gte(m.ethers.utils.parseEther(".2")),Zt=r?At&&null===Tt&&null===bt&&null===De&&te:At&&null===Tt&&null===bt&&te,_t="(".concat(s("estimated"),")");function Ft(e){return"Balance: ".concat(e)}function Ht(){return(Ht=Object(i.a)(a.a.mark((function e(){var t,n,i,c,o,s,l,d,p,b,v,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(900!==te&&f.a.event({category:"Advanced Interaction",action:"Set Custom Deadline",value:te/60}),t=Math.ceil(Date.now()/1e3)+te,2===xe?50!==parseInt(pe.toString())&&f.a.event({category:"Advanced Interaction",action:"Set Custom Slippage",value:parseInt(pe.toString())}):50!==parseInt(de.toString())&&f.a.event({category:"Advanced Interaction",action:"Set Custom Slippage",value:parseInt(de.toString())}),s=1,"ETH"!==Oe&&(s=qe&&ze?ze/qe:null),l=s*st,d="",p="","CDAI"!=Re||"DAI"!=Ie||r){e.next=23;break}return n=Be.estimate.approve,i=Be.approve,c=[Te,ut],o=m.ethers.constants.Zero,e.next=15,n.apply(void 0,Object(u.a)(c).concat([{value:o}]));case 15:b=e.sent,i.apply(void 0,Object(u.a)(c).concat([{value:o,gasLimit:Object(O.b)(b,Z)}])).then((function(e){R(e)})),n=He.estimate.mint,i=He.mint,c=[ut],o=m.ethers.constants.Zero,e.next=36;break;case 23:if("DAI"!=Re||"CDAI"!=Ie||r){e.next=35;break}return e.next=26,Object(O.g)(h,Oe,U);case 26:v=e.sent,v[1].toString()<ut&&(Q=!0),n=He.estimate.redeem,i=He.redeem,c=[ut],o=m.ethers.constants.Zero,e.next=36;break;case 35:0===Ee?(d=r?"SendInput":"SwapInput",p=Te,0===xe?(n=r?Me.estimate.ethToTokenTransferInput:Me.estimate.ethToTokenSwapInput,i=r?Me.ethToTokenTransferInput:Me.ethToTokenSwapInput,c=r?[vt,t,we.address]:[vt,t],o=ut):1===xe?(n=r?Me.estimate.tokenToEthTransferInput:Me.estimate.tokenToEthSwapInput,i=r?Me.tokenToEthTransferInput:Me.tokenToEthSwapInput,c=r?[ut,vt,t,we.address]:[ut,vt,t],o=m.ethers.constants.Zero):2===xe&&(n=r?Me.estimate.tokenToTokenTransferInput:Me.estimate.tokenToTokenSwapInput,i=r?Me.tokenToTokenTransferInput:Me.tokenToTokenSwapInput,c=r?[ut,vt,m.ethers.constants.One,t,we.address,Te]:[ut,vt,m.ethers.constants.One,t,Te],o=m.ethers.constants.Zero)):1===Ee&&(d=r?"SendOutput":"SwapOutput",p=Te,0===xe?(n=r?Me.estimate.ethToTokenTransferOutput:Me.estimate.ethToTokenSwapOutput,i=r?Me.ethToTokenTransferOutput:Me.ethToTokenSwapOutput,c=r?[ut,t,we.address]:[ut,t],o=yt):1===xe?(n=r?Me.estimate.tokenToEthTransferOutput:Me.estimate.tokenToEthSwapOutput,i=r?Me.tokenToEthTransferOutput:Me.tokenToEthSwapOutput,c=r?[ut,yt,t,we.address]:[ut,yt,t],o=m.ethers.constants.Zero):2===xe&&(n=r?Me.estimate.tokenToTokenTransferOutput:Me.estimate.tokenToTokenSwapOutput,i=r?Me.tokenToTokenTransferOutput:Me.tokenToTokenSwapOutput,c=r?[ut,yt,m.ethers.constants.MaxUint256,t,we.address,Te]:[ut,yt,m.ethers.constants.MaxUint256,t,Te],o=m.ethers.constants.Zero));case 36:return e.next=38,n.apply(void 0,Object(u.a)(c).concat([{value:o}]));case 38:y=e.sent,i.apply(void 0,Object(u.a)(c).concat([{value:o,gasLimit:Object(O.b)(y,Z)}])).then((function(e){R(e),f.a.event({category:"Transaction",action:d,label:p,value:l,dimension1:e.hash}),f.a.event({category:"Hash",action:e.hash,label:l.toString()})}));case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Mt=Object(d.useState)(""),Bt=Object(c.a)(Mt,2),Wt=Bt[0],Gt=Bt[1],zt=Object(C.e)(),qt="ETH"!==Oe&&Oe&&!T.a[A].hasOwnProperty(Oe),Yt="ETH"!==Te&&Te&&!T.a[A].hasOwnProperty(Te),Jt=Object(d.useState)(!1),Kt=Object(c.a)(Jt,2),Qt=Kt[0],Xt=Kt[1],$t=Object(d.useState)(!1),en=Object(c.a)($t,2),tn=en[0],nn=en[1];return Object(d.useEffect)((function(){Xt(!!qt)}),[qt,Xt]),Object(d.useEffect)((function(){nn(!!Yt)}),[Yt,nn]),p.a.createElement(p.a.Fragment,null,Qt&&p.a.createElement(I.a,{onDismiss:function(){Xt(!1)},urlAddedTokens:L,currency:Oe}),tn&&p.a.createElement(I.a,{onDismiss:function(){nn(!1)},urlAddedTokens:L,currency:Te}),p.a.createElement(k.a,{title:s("input"),urlAddedTokens:L,description:st&&1===Ee?_t:"",extraText:$e&&Ft($e),extraTextClickHander:function(){if(Qe&&Ue){var e="ETH"===Oe?Qe.sub(m.ethers.utils.parseEther(".1")):Qe;e.gt(m.ethers.constants.Zero)&&he({type:"UPDATE_INDEPENDENT",payload:{value:Object(O.a)(e,Ue,Ue,!1),field:0}})}},onCurrencySelected:function(e){he({type:"SELECT_CURRENCY",payload:{currency:e,field:0}})},onValueChange:function(e){he({type:"UPDATE_INDEPENDENT",payload:{value:e,field:0}})},showUnlock:Ct,selectedTokens:[Oe,Te],selectedTokenAddress:Oe,value:st,errorMessage:Tt||(0===Ee?bt:"")}),p.a.createElement(S.a,null,p.a.createElement(_,null,p.a.createElement(F,{onClick:function(){he({type:"FLIP_INDEPENDENT"})},clickable:!0,alt:"swap",active:Zt}))),p.a.createElement(k.a,{title:s("output"),description:dt&&0===Ee?_t:"",extraText:et&&Ft(et),urlAddedTokens:L,onCurrencySelected:function(e){he({type:"SELECT_CURRENCY",payload:{currency:e,field:1}})},onValueChange:function(e){he({type:"UPDATE_INDEPENDENT",payload:{value:e,field:1}})},selectedTokens:[Oe,Te],selectedTokenAddress:Te,value:dt,errorMessage:1===Ee?bt:"",disableUnlock:!0}),r?p.a.createElement(p.a.Fragment,null,p.a.createElement(S.a,null,p.a.createElement(_,null,p.a.createElement(F,{active:Zt,alt:"arrow"}))),p.a.createElement(D.a,{onChange:Ce,onError:Se,initialInput:we})):"",p.a.createElement(S.a,{hideBottom:!0},p.a.createElement(H,{onClick:function(){xt((function(e){return!e}))}},p.a.createElement(M,null,s("exchangeRate")),St?p.a.createElement("span",null,At?"1 ".concat(Ie," = ").concat(Object(O.a)(At,18,6,!1)," ").concat(Re):" 0 "):p.a.createElement("span",null,At?"1 ".concat(Re," = ").concat(Object(O.a)(It,18,6,!1)," ").concat(Ie):" 0 "))),p.a.createElement(x.a,{account:h,setRawSlippage:ie,setRawTokenSlippage:le,rawSlippage:ue,slippageWarning:Rt,highSlippageWarning:Vt,brokenTokenWarning:Q,setDeadline:ne,deadline:te,inputError:Tt,independentError:bt,inputCurrency:Oe,outputCurrency:Te,independentValue:ve,independentValueParsed:ut,independentField:Ee,INPUT:0,inputValueParsed:ot,outputValueParsed:lt,inputSymbol:Ie,outputSymbol:Re,dependentValueMinumum:vt,dependentValueMaximum:yt,dependentDecimals:nt,independentDecimals:tt,percentSlippageFormatted:Lt,setcustomSlippageError:Gt,recipientAddress:we.address,sending:r}),p.a.createElement(B,null,p.a.createElement(N.b,{disabled:!!Q||!(!h&&!P)&&(!Zt||"invalid"===Wt),onClick:h&&!P?function(){return Ht.apply(this,arguments)}:zt,warning:Vt||"warning"===Wt,loggedOut:!h},Q?"Swap":s(h?r?Vt||"warning"===Wt?"sendAnyway":"send":Vt||"warning"===Wt?"swapAnyway":"swap":"connectToWallet"))))}}}]);
//# sourceMappingURL=2.3727b249.chunk.js.map