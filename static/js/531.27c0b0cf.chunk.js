(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[531],{614:function(t,r,e){!function(t){"use strict";var r={mscgen:{keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},xu:{keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},msgenny:{keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}};function e(t){return new RegExp("\\b("+t.join("|")+")\\b","i")}function n(t){return new RegExp("("+t.join("|")+")","i")}function o(){return{inComment:!1,inString:!1,inAttributeList:!1,inScript:!1}}function i(t){return{inComment:t.inComment,inString:t.inString,inAttributeList:t.inAttributeList,inScript:t.inScript}}t.defineMode("mscgen",(function(t,a){var c,s=r[a&&a.language||"mscgen"];return{startState:o,copyState:i,token:(c=s,function(t,r){if(t.match(n(c.brackets),!0,!0))return"bracket";if(!r.inComment){if(t.match(/\/\*[^\*\/]*/,!0,!0))return r.inComment=!0,"comment";if(t.match(n(c.singlecomment),!0,!0))return t.skipToEnd(),"comment"}if(r.inComment)return t.match(/[^\*\/]*\*\//,!0,!0)?r.inComment=!1:t.skipToEnd(),"comment";if(!r.inString&&t.match(/\"(\\\"|[^\"])*/,!0,!0))return r.inString=!0,"string";if(r.inString)return t.match(/[^\"]*\"/,!0,!0)?r.inString=!1:t.skipToEnd(),"string";if(c.keywords&&t.match(e(c.keywords),!0,!0))return"keyword";if(t.match(e(c.options),!0,!0))return"keyword";if(t.match(e(c.arcsWords),!0,!0))return"keyword";if(t.match(n(c.arcsOthers),!0,!0))return"keyword";if(c.operators&&t.match(n(c.operators),!0,!0))return"operator";if(c.constants&&t.match(n(c.constants),!0,!0))return"variable";if(!c.inAttributeList&&c.attributes&&t.match(/\[/,!0,!0))return c.inAttributeList=!0,"bracket";if(c.inAttributeList){if(null!==c.attributes&&t.match(e(c.attributes),!0,!0))return"attribute";if(t.match(/]/,!0,!0))return c.inAttributeList=!1,"bracket"}return t.next(),"base"}),lineComment:"#",blockCommentStart:"/*",blockCommentEnd:"*/"}})),t.defineMIME("text/x-mscgen","mscgen"),t.defineMIME("text/x-xu",{name:"mscgen",language:"xu"}),t.defineMIME("text/x-msgenny",{name:"mscgen",language:"msgenny"})}(e(38))}}]);
//# sourceMappingURL=531.27c0b0cf.chunk.js.map