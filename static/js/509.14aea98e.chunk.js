(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[509],{587:function(e,t,n){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,n){return t(n),n(e,t)}var t=/[a-z]/,n=/[A-Z]/,r=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,a=/[-&*+.\\/<>=?^|:]/,u=/[(),[\]{}]/,f=/[ \v\f]/;function s(){return function(h,x){if(h.eatWhile(f))return null;var k=h.next();if(u.test(k))return"{"===k&&h.eat("-")?e(h,x,function e(t){return 0==t?s():function(n,r){for(;!n.eol();){var i=n.next();if("{"==i&&n.eat("-"))++t;else if("-"==i&&n.eat("}")&&0===--t)return r(s()),"comment"}return r(e(t)),"comment"}}(1)):"["===k&&h.match("glsl|")?e(h,x,m):"builtin";if("'"===k)return e(h,x,p);if('"'===k)return h.eat('"')?h.eat('"')?e(h,x,c):"string":e(h,x,l);if(n.test(k))return h.eatWhile(r),"variable-2";if(t.test(k)){var d=1===h.pos;return h.eatWhile(r),d?"def":"variable"}if(i.test(k)){if("0"===k){if(h.eat(/[xX]/))return h.eatWhile(o),"number"}else h.eatWhile(i);return h.eat(".")&&h.eatWhile(i),h.eat(/[eE]/)&&(h.eat(/[-+]/),h.eatWhile(i)),"number"}return a.test(k)?"-"===k&&h.eat("-")?(h.skipToEnd(),"comment"):(h.eatWhile(a),"keyword"):"_"===k?"keyword":"error"}}function c(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string";return"string"}function l(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function p(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function m(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]"))return t(s()),"string";return"string"}var h={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return h.hasOwnProperty(r)?"keyword":n}}})),e.defineMIME("text/x-elm","elm")}(n(38))}}]);
//# sourceMappingURL=509.14aea98e.chunk.js.map