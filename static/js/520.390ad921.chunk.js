(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[520],{602:function(r,t,n){!function(r){"use strict";r.defineMode("http",(function(){function r(r,t){return r.skipToEnd(),t.cur=c,"error"}function t(t,e){return t.match(/^HTTP\/\d\.\d/)?(e.cur=n,"keyword"):t.match(/^[A-Z]+/)&&/[ \t]/.test(t.peek())?(e.cur=u,"keyword"):r(t,e)}function n(t,n){var u=t.match(/^\d+/);if(!u)return r(t,n);n.cur=e;var i=Number(u[0]);return i>=100&&i<200?"positive informational":i>=200&&i<300?"positive success":i>=300&&i<400?"positive redirect":i>=400&&i<500?"negative client-error":i>=500&&i<600?"negative server-error":"error"}function e(r,t){return r.skipToEnd(),t.cur=c,null}function u(r,t){return r.eatWhile(/\S/),t.cur=i,"string-2"}function i(t,n){return t.match(/^HTTP\/\d\.\d$/)?(n.cur=c,"keyword"):r(t,n)}function c(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function o(r){return r.skipToEnd(),null}return{token:function(r,t){var n=t.cur;return n!=c&&n!=o&&r.eatSpace()?null:n(r,t)},blankLine:function(r){r.cur=o},startState:function(){return{cur:t}}}})),r.defineMIME("message/http","http")}(n(38))}}]);
//# sourceMappingURL=520.390ad921.chunk.js.map