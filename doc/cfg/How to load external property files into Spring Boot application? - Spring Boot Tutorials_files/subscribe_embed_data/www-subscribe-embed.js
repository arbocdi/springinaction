(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Wa:!0},ha={};try{ha.__proto__=fa;ea=ha.Wa;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
la("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
la("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function na(){na=function(){};
ka.Symbol||(ka.Symbol=oa)}
var oa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function qa(){na();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
qa=function(){}}
function ra(a){qa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||ta});
var ua=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
la("Reflect.construct",function(){return ua});
la("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){sa(a,f)||ja(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!sa(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return sa(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return sa(a,f)&&sa(a[f],this.b)};
b.prototype["delete"]=function(a){return sa(a,f)&&sa(a[f],this.b)?delete a[f][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return ra(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&sa(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,B:h}}return{id:c,list:d,index:-1,B:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(v){return!1}}())return a;
qa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.B?c.B.value=b:(c.B={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.B),this.b.previous.next=c.B,this.b.previous=c.B,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.B&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.B.previous.next=a.B.next,a.B.next.previous=a.B.previous,a.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).B};
e.prototype.get=function(a){return(a=d(this,a).B)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ma(this,a,"includes").indexOf(a,c||0)}});
var n=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function va(a){return"number"==typeof a}
function u(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function xa(a){a.ea=void 0;a.v=function(){return a.ea?a.ea:a.ea=new a}}
function ya(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function za(a){return"array"==ya(a)}
function Aa(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ba(a){return"function"==ya(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a){return a[Ea]||(a[Ea]=++Fa)}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Ga:w=Ha;return w.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Ja=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&r(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function y(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var z=window;function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Ka,Error);Ka.prototype.name="CustomError";var La;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=t(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d},Qa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Ra(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Sa(a,b){return 0<=Ma(a,b)}
function Ta(a){return Array.prototype.concat.apply([],arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Wa(a,b,c,d){return Array.prototype.splice.apply(a,Xa(arguments,1))}
function Xa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ya(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(za(d))for(var e=0;e<d.length;e+=8192)for(var f=Ya.apply(null,Xa(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function $a(a,b){for(var c=0,d=Za(String(a)).split("."),e=Za(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=ab(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||ab(0==h[2].length,0==l[2].length)||ab(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function ab(a,b){return a<b?-1:a>b?1:0}
;var bb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function cb(a){a=r(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return bb("0",Math.max(0,2-b))+a}
function db(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function eb(a){var b=t(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var fb;a:{var gb=n.navigator;if(gb){var hb=gb.userAgent;if(hb){fb=hb;break a}}fb=""}function C(a){return-1!=fb.indexOf(a)}
;function ib(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ob(a){var b=ya(a);if("object"==b||"array"==b){if(Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ob(a[c]);return b}return a}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function rb(){return C("Firefox")||C("FxiOS")}
function sb(){return C("Safari")&&!(tb()||C("Coast")||C("Opera")||C("Edge")||rb()||C("Silk")||C("Android"))}
function tb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function ub(){return C("Android")&&!(tb()||rb()||C("Opera")||C("Silk"))}
;function vb(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function wb(){return vb()||C("iPad")||C("iPod")}
;function xb(a){xb[" "](a);return a}
xb[" "]=wa;function yb(a,b){var c=zb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ab=C("Opera"),D=C("Trident")||C("MSIE"),Bb=C("Edge"),Cb=Bb||D,Db=C("Gecko")&&!(-1!=fb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Eb=-1!=fb.toLowerCase().indexOf("webkit")&&!C("Edge"),Fb=C("Macintosh"),Gb=C("Windows"),Hb=C("Android"),Ib=vb(),Jb=C("iPad"),Kb=C("iPod"),Lb=wb();function Mb(){var a=n.document;return a?a.documentMode:void 0}
var Nb;a:{var Ob="",Pb=function(){var a=fb;if(Db)return/rv:([^\);]+)(\)|;)/.exec(a);if(Bb)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Eb)return/WebKit\/(\S+)/.exec(a);if(Ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Pb&&(Ob=Pb?Pb[1]:"");if(D){var Qb=Mb();if(null!=Qb&&Qb>parseFloat(Ob)){Nb=String(Qb);break a}}Nb=Ob}var Rb=Nb,zb={};function Sb(a){return yb(a,function(){return 0<=$a(Rb,a)})}
var Tb;var Ub=n.document;Tb=Ub&&D?Mb()||("CSS1Compat"==Ub.compatMode?parseInt(Rb,10):5):void 0;var Vb=rb(),Wb=vb()||C("iPod"),Xb=C("iPad"),Yb=ub(),Zb=tb(),$b=sb()&&!wb();var ac=null,bc=null;function cc(a){this.b=a||{cookie:""}}
k=cc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ja()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);function ec(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fc=!Db&&!D||D&&9<=Number(Tb)||Db&&Sb("1.9.1"),gc=D&&!Sb("9");function hc(){this.b="";this.f=ic}
hc.prototype.da=!0;hc.prototype.ca=function(){return this.b};
var jc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ic={};function kc(a){var b=new hc;b.b=a;return b}
kc("about:blank");function lc(){this.b="";this.f=mc}
lc.prototype.da=!0;lc.prototype.ca=function(){return this.b};
function nc(a){if(a instanceof lc&&a.constructor===lc&&a.f===mc)return a.b;ya(a);return"type_error:SafeHtml"}
var mc={};function oc(a){var b=new lc;b.b=a;return b}
oc("<!DOCTYPE html>");oc("");oc("<br>");var pc=ec(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});
function qc(a,b){if(pc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=b}
;function E(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
k=E.prototype;k.clone=function(){return new E(this.x,this.y)};
k.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function rc(a,b){return new E(a.x-b.x,a.y-b.y)}
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function sc(a,b){this.width=a;this.height=b}
k=sc.prototype;k.clone=function(){return new sc(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function tc(a){return a?new uc(vc(a)):La||(La=new uc)}
function F(a){return t(a)?document.getElementById(a):a}
function wc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):xc(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):xc(c,"*",a,b)[0]||null}return c||null}
function xc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Sa(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function yc(a,b){ib(b,function(b,d){b&&"object"==typeof b&&b.da&&(b=b.ca());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:zc.hasOwnProperty(d)?a.setAttribute(zc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var zc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ac(a){a=a.document;a=Bc(a)?a.documentElement:a.body;return new sc(a.clientWidth,a.clientHeight)}
function Cc(a){var b=Dc(a);a=Ec(a);return D&&Sb("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Dc(a){return a.scrollingElement?a.scrollingElement:!Eb&&Bc(a)?a.documentElement:a.body||a.documentElement}
function Ec(a){return a.parentWindow||a.defaultView}
function Bc(a){return"CSS1Compat"==a.compatMode}
function Fc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Gc(a){return fc&&void 0!=a.children?a.children:Na(a.childNodes,function(a){return 1==a.nodeType})}
function Hc(a){return Ca(a)&&1==a.nodeType}
function Ic(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function vc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Jc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(vc(a).createTextNode(String(b)))}}
function Kc(a,b){var c=[];return Lc(a,b,c,!0)?c[0]:void 0}
function Lc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Lc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Mc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Oc={IMG:" ",BR:"\n"};function Pc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Qc(a)||Rc(a)):Qc(a)&&Rc(a))&&D){var c;!Ba(a.getBoundingClientRect)||D&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Qc(a){return D&&!Sb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Rc(a){a=a.tabIndex;return va(a)&&0<=a&&32768>a}
function Sc(a){if(gc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Tc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");gc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Tc(a,b,c){if(!(a.nodeName in Mc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Oc)b.push(Oc[a.nodeName]);else for(a=a.firstChild;a;)Tc(a,b,c),a=a.nextSibling}
function Uc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Vc(a,function(a){return(!e||a.nodeName==e)&&(!c||t(a.className)&&Sa(a.className.split(/\s+/),c))},!0,d)}
function H(a,b){return Uc(a,null,b,void 0)}
function Vc(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function uc(a){this.b=a||n.document||document}
uc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
uc.prototype.createElement=function(a){return this.b.createElement(String(a))};
uc.prototype.appendChild=function(a,b){a.appendChild(b)};
uc.prototype.isElement=Hc;function Wc(a){var b=Xc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Yc(){var a=[];Wc(function(b){a.push(b)});
return a}
var Xc={Fb:"allow-forms",Gb:"allow-modals",Hb:"allow-orientation-lock",Ib:"allow-pointer-lock",Jb:"allow-popups",Kb:"allow-popups-to-escape-sandbox",Lb:"allow-presentation",Mb:"allow-same-origin",Nb:"allow-scripts",Ob:"allow-top-navigation",Pb:"allow-top-navigation-by-user-activation"},Zc=ec(function(){return Yc()});
function $c(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};B(Zc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function ad(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=ad.prototype;k.getHeight=function(){return this.bottom-this.top};
k.clone=function(){return new ad(this.top,this.right,this.bottom,this.left)};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
bd.prototype.clone=function(){return new bd(this.left,this.top,this.width,this.height)};
bd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
bd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
bd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function cd(a,b,c){if(t(b))(b=dd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=dd(c,d);f&&(c.style[f]=e)}}
var ed={};function dd(a,b){var c=ed[b];if(!c){var d=db(b);c=d;void 0===a.style[d]&&(d=(Eb?"Webkit":Db?"Moz":D?"ms":Ab?"O":null)+eb(d),void 0!==a.style[d]&&(c=d));ed[b]=c}return c}
function fd(a,b){var c=vc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function gd(a,b){return fd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function hd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}D&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function id(a){if(D&&!(8<=Number(Tb)))return a.offsetParent;var b=vc(a),c=gd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=gd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function jd(a){for(var b=new ad(0,Infinity,Infinity,0),c=tc(a),d=c.b.body,e=c.b.documentElement,f=Dc(c.b);a=id(a);)if(!(D&&0==a.clientWidth||Eb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=gd(a,"overflow")){var g=kd(a),h=new E(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Ac(Ec(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function kd(a){var b=vc(a),c=new E(0,0);var d=b?vc(b):document;d=!D||9<=Number(Tb)||Bc(tc(d).b)?d.documentElement:d.body;if(a==d)return c;a=hd(a);b=Cc(tc(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ld(a){a=hd(a);return new E(a.left,a.top)}
function md(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function nd(a){var b=od;if("none"!=gd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function od(a){var b=a.offsetWidth,c=a.offsetHeight,d=Eb&&!b&&!c;return r(b)&&!d||!a.getBoundingClientRect?new sc(b,c):(a=hd(a),new sc(a.right-a.left,a.bottom-a.top))}
function pd(a){var b=kd(a);a=nd(a);return new bd(b.x,b.y,a.width,a.height)}
function qd(a){return"rtl"==gd(a,"direction")}
function rd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function sd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?rd(a,c):0}
var td={thin:2,medium:4,thick:6};function ud(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in td?td[c]:rd(a,c)}
;var vd=(new Date).getTime();function wd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var xd=window,yd=document,zd=xd.location;function Ad(){}
var Bd=/\[native code\]/;function I(a,b,c){return a[b]=a[b]||c}
function Cd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Dd(){var a;if((a=Object.create)&&Bd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ed=I(xd,"gapi",{});var J;J=I(xd,"___jsl",Dd());I(J,"I",0);I(J,"hel",10);function Fd(){var a=zd.href;if(J.dpo)var b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Gd(a){var b=I(J,"PQ",[]);J.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Hd(a){return I(I(J,"H",Dd()),a,Dd())}
;function Id(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var p=1518500249}else m=d^f^h,p=1859775393;else 60>c?(m=d&f|h&(d|f),p=2400959708):(m=d^f^h,p=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+p+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[m++]=a[d++],p++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,Ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Jd(a,b,c){var d=[],e=[];if(1==(za(c)?2:1))return e=[b,a],B(d,function(a){e.push(a)}),Kd(e.join(" "));
var f=[],g=[];B(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(a){e.push(a)});
a=Kd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Kd(a){var b=Id();b.update(a);return b.Ya().toLowerCase()}
;function Ld(a){var b=wd(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new cc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new cc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,Jd(wd(d),b,a||null)].join(" "):null}return null}
;var Md=I(J,"perf",Dd());I(Md,"g",Dd());var Nd=I(Md,"i",Dd());I(Md,"r",[]);Dd();Dd();function Od(a,b,c){b&&0<b.length&&(b=Pd(b),c&&0<c.length&&(b+="___"+Pd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=I(Nd,"_p",Dd()),I(b,c,Dd())[a]=(new Date).getTime(),b=Md.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Pd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Qd=Dd(),Rd=[];function Sd(a){throw Error("Bad hint"+(a?": "+a:""));}
Rd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=I(J,b,[]).concat(c):I(J,b,c)}if(b=a.u)a=I(J,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Td=/^(\/[a-zA-Z0-9_\-]+)+$/,Ud=[/\/amp\//,/\/amp$/,/^\/amp$/],Vd=/^[a-zA-Z0-9\-_\.,!]+$/,Wd=/^gapi\.loaded_[0-9]+$/,Xd=/^[a-zA-Z0-9,._-]+$/;function Yd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Qd[f],h=null;g?h=g(e,b,c,d):Sd("no hint processor for: "+f);h||Sd("failed to generate load url");b=h;c=b.match(Zd);(d=b.match($d))&&1===d.length&&ae.test(b)&&c&&1===c.length||Sd("failed sanity: "+a);return h}
function be(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ce(a);Wd.test(c)||Sd("invalid_callback");b=de(b);d=d&&d.length?de(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ia?"/am="+e(a.ia):"",a.Ga?"/rs="+e(a.Ga):"",a.Pa?"/t="+e(a.Pa):"","/cb=",e(c)].join("")}
function ce(a){"/"!==a.charAt(0)&&Sd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Sd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Td.test(b)||Sd("invalid_prefix");c=0;for(d=Ud.length;c<d;++c)Ud[c].test(b)&&Sd("invalid_prefix");c=ee(a,
"k",!0);d=ee(a,"am");e=ee(a,"rs");a=ee(a,"t");return{pathPrefix:b,version:c,ia:d,Ga:e,Pa:a}}
function de(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Xd.test(e)&&b.push(e)}return b.join(",")}
function ee(a,b,c){a=a[b];!a&&c&&Sd("missing: "+b);if(a){if(Vd.test(a))return a;Sd("invalid: "+b)}return null}
var ae=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,$d=/\/cb=/g,Zd=/\/\//g;function fe(){var a=Fd();if(!a)throw Error("Bad hint");return a}
Qd.m=function(a,b,c,d){(a=a[0])||Sd("missing_hint");return"https://apis.google.com"+be(a,b,c,d)};
var ge=decodeURI("%73cript"),he=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ie(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function je(){var a=J.nonce;return void 0!==a?a&&a===String(a)&&a.match(he)?a:J.nonce=null:yd.querySelector?(a=yd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(he)?J.nonce=a:J.nonce=null):null:null}
function ke(a){if("loading"!=yd.readyState)le(a);else{var b=je(),c="";null!==b&&(c=' nonce="'+b+'"');yd.write("<"+ge+' src="'+encodeURI(a)+'"'+c+"></"+ge+">")}}
function le(a){var b=yd.createElement(ge);b.setAttribute("src",a);a=je();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=yd.getElementsByTagName(ge)[0])?a.parentNode.insertBefore(b,a):(yd.head||yd.body||yd.documentElement).appendChild(b)}
function me(a,b){var c=b&&b._c;if(c)for(var d=0;d<Rd.length;d++){var e=Rd[d][0],f=Rd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function ne(a,b,c){oe(function(){var c=b===Fd()?I(Ed,"_",Dd()):Dd();c=I(Hd(b),"_",c);a(c)},c)}
function pe(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);me(a,c);var d=a?a.split(":"):[],e=c.h||fe(),f=I(J,"ah",Dd());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split(".");l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,p=m;m&&m.hint==l||(p={hint:l,features:[]},g.push(p));p.features.push(h)}var v=g.length;if(1<v){var q=c.callback;q&&(c.callback=function(){0==--v&&q()})}for(;d=g.shift();)qe(d.features,c,d.hint)}else qe(d||[],c,e)}
function qe(a,b,c){function d(a,b){if(v)return 0;xd.clearTimeout(p);q.push.apply(q,A);var d=((Ed||{}).config||{}).update;d?d(f):f&&I(J,"cu",[]).push(f);if(b){Od("me0",a,K);try{ne(b,c,m)}finally{Od("me1",a,K)}}return 1}
a=Cd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var p=null,v=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=I(Hd(c),"r",[]).sort();var q=I(Hd(c),"L",[]).sort(),K=[].concat(l);0<g&&(p=xd.setTimeout(function(){v=!0;h()},g));
var A=ie(a,q);if(A.length){A=ie(a,l);var pa=I(J,"CP",[]),U=pa.length;pa[U]=function(a){function b(){var a=pa[U+1];a&&a()}
function c(b){pa[U]=null;d(A,a)&&Gd(function(){e&&e();b()})}
if(!a)return 0;Od("ml1",A,K);0<U&&pa[U-1]?pa[U]=function(){c(b)}:c(b)};
if(A.length){var Nc="loaded_"+J.I++;Ed[Nc]=function(a){pa[U](a);Ed[Nc]=null};
a=Yd(c,A,"gapi."+Nc,l);l.push.apply(l,A);Od("ml0",A,K);b.sync||xd.___gapisync?ke(a):le(a)}else pa[U](Ad)}else d(A)&&e&&e()}
function oe(a,b){if(J.hee&&0<J.hel)try{return a()}catch(c){b&&b(c),J.hel--,pe("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ed.load=function(a,b){return oe(function(){return pe(a,b)})};function re(a,b){this.g=a;this.j=b;this.f=0;this.b=null}
re.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function se(a,b){a.j(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function te(a){n.setTimeout(function(){throw a;},0)}
var ue;
function ve(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ka;c.ka=null;a()}};
return function(a){d.next={ka:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function we(){this.f=this.b=null}
var ye=new re(function(){return new xe},function(a){a.reset()});
we.prototype.add=function(a,b){var c=ye.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
we.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function xe(){this.next=this.scope=this.b=null}
xe.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
xe.prototype.reset=function(){this.next=this.scope=this.b=null};function ze(a,b){Ae||Be();Ce||(Ae(),Ce=!0);De.add(a,b)}
var Ae;function Be(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Ae=function(){a.then(Ee)}}else Ae=function(){var a=Ee;
!Ba(n.setImmediate)||n.Window&&n.Window.prototype&&!C("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(ue||(ue=ve()),ue(a)):n.setImmediate(a)}}
var Ce=!1,De=new we;function Ee(){for(var a;a=De.remove();){try{a.b.call(a.scope)}catch(b){te(b)}se(ye,a)}Ce=!1}
;function Fe(){this.f=-1}
;function Ge(){this.f=-1;this.f=64;this.b=[];this.o=[];this.A=[];this.j=[];this.j[0]=128;for(var a=1;a<this.f;++a)this.j[a]=0;this.l=this.g=0;this.reset()}
y(Ge,Fe);Ge.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.l=this.g=0};
function He(a,b,c){c||(c=0);var d=a.A;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
Ge.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)He(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){He(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){He(this,e);f=0;break}}this.g=f;this.l+=b}};
Ge.prototype.digest=function(){var a=[],b=8*this.l;56>this.g?this.update(this.j,56-this.g):this.update(this.j,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.o[c]=b&255,b/=256;He(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var Ie={Vb:["BC","AD"],Ub:["Before Christ","Anno Domini"],Xb:"JFMAMJJASOND".split(""),fc:"JFMAMJJASOND".split(""),Wb:"January February March April May June July August September October November December".split(" "),ec:"January February March April May June July August September October November December".split(" "),ac:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),hc:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),lc:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
jc:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),dc:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ic:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Yb:"SMTWTFS".split(""),gc:"SMTWTFS".split(""),cc:["Q1","Q2","Q3","Q4"],Zb:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Qb:["AM","PM"],Sb:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],kc:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Tb:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Ta:6,mc:[5,6],Ua:5},Je=Ie;
Je=Ie;function Ke(a,b,c){va(a)?(this.date=Le(a,b||0,c||1),Me(this,c||1)):Ca(a)?(this.date=Le(a.getFullYear(),a.getMonth(),a.getDate()),Me(this,a.getDate())):(this.date=new Date(Ja()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Me(this,a))}
function Le(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
k=Ke.prototype;k.T=Je.Ta;k.U=Je.Ua;k.clone=function(){var a=new Ke(this.date);a.T=this.T;a.U=this.U;return a};
k.getFullYear=function(){return this.date.getFullYear()};
k.getMonth=function(){return this.date.getMonth()};
k.getDate=function(){return this.date.getDate()};
k.getTime=function(){return this.date.getTime()};
k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
k.add=function(a){if(a.f||a.b){var b=this.getMonth()+a.b+12*a.f,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),Me(this,a.getDate()))};
k.Y=function(a){return[this.getFullYear(),cb(this.getMonth()+1),cb(this.getDate())].join(a?"-":"")+""};
k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
k.toString=function(){return this.Y()};
function Me(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
k.valueOf=function(){return this.date.valueOf()};
function Ne(a,b,c,d,e,f,g){this.date=va(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():Ja())}
y(Ne,Ke);k=Ne.prototype;k.add=function(a){Ke.prototype.add.call(this,a);a.hours&&this.date.setUTCHours(this.date.getUTCHours()+a.hours);a.minutes&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
k.Y=function(a){var b=Ke.prototype.Y.call(this,a);return a?b+" "+cb(this.date.getHours())+":"+cb(this.date.getMinutes())+":"+cb(this.date.getSeconds()):b+"T"+cb(this.date.getHours())+cb(this.date.getMinutes())+cb(this.date.getSeconds())};
k.equals=function(a){return this.getTime()==a.getTime()};
k.toString=function(){return this.Y()};
k.clone=function(){var a=new Ne(this.date);a.T=this.T;a.U=this.U;return a};function Oe(){this.g=this.g;this.j=this.j}
Oe.prototype.g=!1;Oe.prototype.W=function(){return this.g};
Oe.prototype.dispose=function(){this.g||(this.g=!0,this.ba())};
Oe.prototype.ba=function(){if(this.j)for(;this.j.length;)this.j.shift()()};
function Pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Qe(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function L(a,b){return a.classList?a.classList.contains(b):Sa(Qe(a),b)}
function M(a,b){a.classList?a.classList.add(b):L(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Re(a,b){if(a.classList)B(b,function(b){M(a,b)});
else{var c={};B(Qe(a),function(a){c[a]=!0});
B(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function N(a,b){a.classList?a.classList.remove(b):L(a,b)&&(a.className=Na(Qe(a),function(a){return a!=b}).join(" "))}
function Se(a,b){a.classList?B(b,function(b){N(a,b)}):a.className=Na(Qe(a),function(a){return!Sa(b,a)}).join(" ")}
function Te(a,b,c){c?M(a,b):N(a,b)}
function Ue(a,b,c){L(a,b)&&(N(a,b),M(a,c))}
function Ve(a,b){var c=!L(a,b);Te(a,b,c)}
;var We=!D&&!sb();function Xe(a,b){if(/-[a-z]/.test(b))return null;if(We&&a.dataset){if(ub()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Ye="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Ze(){}
Ze.prototype.next=function(){throw Ye;};
Ze.prototype.J=function(){return this};
function $e(a){if(a instanceof Ze)return a;if("function"==typeof a.J)return a.J(!1);if(Aa(a)){var b=0,c=new Ze;c.next=function(){for(;;){if(b>=a.length)throw Ye;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function af(a,b){if(Aa(a))try{B(a,b,void 0)}catch(c){if(c!==Ye)throw c;}else{a=$e(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ye)throw c;}}}
function bf(a){if(Aa(a))return Ua(a);a=$e(a);var b=[];af(a,function(a){b.push(a)});
return b}
;function cf(a,b){this.g={};this.b=[];this.K=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cf)for(c=df(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function df(a){ef(a);return a.b.concat()}
k=cf.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||ff;ef(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ff(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.K=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.K++,this.b.length>2*this.f&&ef(this),!0):!1};
function ef(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.K++);this.g[a]=b};
k.forEach=function(a,b){for(var c=df(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new cf(this)};
k.J=function(a){ef(this);var b=0,c=this.K,d=this,e=new Ze;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Ye;var e=d.b[b++];return a?e:d.g[e]};
return e};function gf(a){var b=[];hf(new jf,a,b);return b.join("")}
function jf(){}
function hf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kf(d,c),c.push(":"),hf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var lf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kf(a,b){b.push('"',a.replace(mf,function(a){var b=lf[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),lf[a]=b);return b}),'"')}
;var nf=function(){if(Gb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(fb))?a[1]:"0"}return Fb?(a=/10[_.][0-9_.]+/,(a=a.exec(fb))?a[0].replace(/_/g,"."):"10"):Hb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(fb))?a[1]:""):Ib||Jb||Kb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(fb))?a[1].replace(/_/g,"."):""):""}();function of(a){return(a=a.exec(fb))?a[1]:""}
var pf=function(){if(Vb)return of(/Firefox\/([0-9.]+)/);if(D||Bb||Ab)return Rb;if(Zb)return wb()?of(/CriOS\/([0-9.]+)/):of(/Chrome\/([0-9.]+)/);if($b&&!wb())return of(/Version\/([0-9.]+)/);if(Wb||Xb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(fb);if(a)return a[1]+"."+a[2]}else if(Yb)return(a=of(/Android\s+([0-9.]+)/))?a:of(/Version\/([0-9.]+)/);return""}();function qf(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=gd(h,"position")){var m=kd(h);if(!l){l=qd(h);var p;if(p=l){if(p=$b)p=0<=$a(pf,10);var v;if(v=Lb)v=0<=$a(nf,10);p=Db||p||v}l=p?-h.scrollLeft:!l||Cb&&Sb("8")||"visible"==gd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=rc(m,new E(l,h.scrollTop))}}}h=m||new E;m=pd(a);if(l=jd(a)){var q=new bd(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,q.left);p=
Math.min(m.left+m.width,q.left+q.width);l<=p&&(v=Math.max(m.top,q.top),q=Math.min(m.top+m.height,q.top+q.height),v<=q&&(m.left=l,m.top=v,m.width=p-l,m.height=q-v))}l=tc(a);v=tc(c);if(l.b!=v.b){p=l.b.body;v=Ec(v.b);q=new E(0,0);var K=(K=vc(p))?Ec(K):window;b:{try{xb(K.parent);var A=!0;break b}catch(Nc){}A=!1}if(A){A=p;do{var pa=K==v?kd(A):ld(A);q.x+=pa.x;q.y+=pa.y}while(K&&K!=v&&K!=K.parent&&(A=K.frameElement)&&(K=K.parent))}A=rc(q,kd(p));!D||9<=Number(Tb)||Bc(l.b)||(A=rc(A,Cc(l.b)));m.left+=A.x;m.top+=
A.y}a=rf(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new E(b,m.top+(a&1?m.height:0));b=rc(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var U;g&&(U=jd(c))&&(U.top-=h.y,U.right-=h.x,U.bottom-=h.y,U.left-=h.x);return sf(b,c,d,f,U,g,void 0)}
function sf(a,b,c,d,e,f,g){a=a.clone();var h=rf(b,c);c=nd(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
m+h.width-e.left),h.width=Math.max(h.width,0),l|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,m+h.height-e.top),h.height=Math.max(h.height,0),l|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new bd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new E(f.left,f.top);a instanceof E?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=md(g,!1);b.style.top=md(a,!1);g=new sc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=Bc(tc(vc(b)).b),!D||Sb("10")||a&&Sb("8")?(b=b.style,Db?b.MozBoxSizing="border-box":Eb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(D?(a=sd(b,"paddingLeft"),f=sd(b,"paddingRight"),d=sd(b,"paddingTop"),h=sd(b,"paddingBottom"),a=new ad(d,f,h,a)):(a=fd(b,"paddingLeft"),f=fd(b,"paddingRight"),d=fd(b,"paddingTop"),h=fd(b,"paddingBottom"),a=new ad(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!D||9<=Number(Tb)?(f=fd(b,"borderLeftWidth"),d=fd(b,"borderRightWidth"),h=fd(b,"borderTopWidth"),b=fd(b,"borderBottomWidth"),b=new ad(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=ud(b,"borderLeft"),
d=ud(b,"borderRight"),h=ud(b,"borderTop"),b=ud(b,"borderBottom"),b=new ad(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function rf(a,b){return(b&8&&qd(a)?b^4:b)&-9}
;function tf(a){this.b=0;this.A=void 0;this.j=this.f=this.g=null;this.l=this.o=!1;if(a!=wa)try{var b=this;a.call(void 0,function(a){uf(b,2,a)},function(a){uf(b,3,a)})}catch(c){uf(this,3,c)}}
function vf(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
vf.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var wf=new re(function(){return new vf},function(a){a.reset()});
function xf(a,b,c){var d=wf.get();d.f=a;d.onRejected=b;d.context=c;return d}
tf.prototype.then=function(a,b,c){return yf(this,Ba(a)?a:null,Ba(b)?b:null,c)};
tf.prototype.$goog_Thenable=!0;tf.prototype.cancel=function(a){0==this.b&&ze(function(){var b=new zf(a);Af(this,b)},this)};
function Af(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Af(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Bf(c),Cf(c,e,3,b)))}a.g=null}else uf(a,3,b)}
function Df(a,b){a.f||2!=a.b&&3!=a.b||Ef(a);a.j?a.j.next=b:a.f=b;a.j=b}
function yf(a,b,c,d){var e=xf(null,null,null);e.b=new tf(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof zf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Df(a,e);return e.b}
tf.prototype.L=function(a){this.b=0;uf(this,2,a)};
tf.prototype.S=function(a){this.b=0;uf(this,3,a)};
function uf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.L,f=a.S;if(d instanceof tf){Df(d,xf(e||wa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ca(d))try{var l=d.then;if(Ba(l)){Ff(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.A=c,a.b=b,a.g=null,Ef(a),3!=b||c instanceof zf||Gf(a,c))}}
function Ff(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ef(a){a.o||(a.o=!0,ze(a.D,a))}
function Bf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.j=null);return b}
tf.prototype.D=function(){for(var a;a=Bf(this);)Cf(this,a,this.b,this.A);this.o=!1};
function Cf(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.l;a=a.g)a.l=!1;if(b.b)b.b.g=null,Hf(b,c,d);else try{b.g?b.f.call(b.context):Hf(b,c,d)}catch(e){If.call(null,e)}se(wf,b)}
function Hf(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Gf(a,b){a.l=!0;ze(function(){a.l&&If.call(null,b)})}
var If=te;function zf(a){Ka.call(this,a)}
y(zf,Ka);zf.prototype.name="cancel";function O(a){Oe.call(this);this.A=1;this.l=[];this.o=0;this.b=[];this.f={};this.D=!!a}
y(O,Oe);k=O.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.A;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.A=e+3;d.push(e);return e};
function Jf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function Kf(a,b,c){if(b=a.f[b]){var d=a.b;(b=Ra(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
k.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.o)this.l.push(a),this.b[a+1]=wa;else{if(c){var d=Ma(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
k.H=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Lf(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.P(c)}}return 0!=e}return!1};
function Lf(a,b,c){ze(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(B(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Mf(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=Mf(a,d);return c}
k.ba=function(){O.w.ba.call(this);this.clear();this.l.length=0};function Nf(a){this.b=a}
Nf.prototype.set=function(a,b){r(b)?this.b.set(a,gf(b)):this.b.remove(a)};
Nf.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Nf.prototype.remove=function(a){this.b.remove(a)};function Of(a){this.b=a}
y(Of,Nf);function Pf(a){this.data=a}
function Qf(a){return!r(a)||a instanceof Pf?a:new Pf(a)}
Of.prototype.set=function(a,b){Of.w.set.call(this,a,Qf(b))};
Of.prototype.f=function(a){a=Of.w.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Of.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rf(a){this.b=a}
y(Rf,Of);Rf.prototype.set=function(a,b,c){if(b=Qf(b)){if(c){if(c<Ja()){Rf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ja()}Rf.w.set.call(this,a,b)};
Rf.prototype.f=function(a){var b=Rf.w.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ja()||c&&c>Ja())Rf.prototype.remove.call(this,a);else return b}};function Sf(){}
;function Tf(){}
y(Tf,Sf);Tf.prototype.clear=function(){var a=bf(this.J(!0)),b=this;B(a,function(a){b.remove(a)})};function Uf(a){this.b=a}
y(Uf,Tf);k=Uf.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.J=function(a){var b=0,c=this.b,d=new Ze;d.next=function(){if(b>=c.length)throw Ye;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Vf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Vf,Uf);function Wf(a,b){this.f=a;this.b=null;if(D&&!(9<=Number(Tb))){Xf||(Xf=new cf);this.b=Xf.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Xf.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
y(Wf,Tf);var Yf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xf=null;function Zf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Yf[a]})}
k=Wf.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Zf(a),b);$f(this)};
k.get=function(a){a=this.b.getAttribute(Zf(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Zf(a));$f(this)};
k.J=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Ze;d.next=function(){if(b>=c.length)throw Ye;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$f(this)};
function $f(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ag(a,b){this.f=a;this.b=b+"::"}
y(ag,Tf);ag.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ag.prototype.get=function(a){return this.f.get(this.b+a)};
ag.prototype.remove=function(a){this.f.remove(this.b+a)};
ag.prototype.J=function(a){var b=this.f.J(!0),c=this,d=new Ze;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};var bg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cg(a){return a.match(bg)}
function dg(a){return a?decodeURI(a):a}
function eg(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function fg(a,b,c){if(za(b))for(var d=0;d<b.length;d++)fg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function gg(a,b){for(var c=[],d=b||0;d<a.length;d+=2)fg(a[d],a[d+1],c);return c.join("&")}
function hg(a){var b=[],c;for(c in a)fg(c,a[c],b);return b.join("&")}
function ig(a,b){var c=2==arguments.length?gg(arguments[1],0):gg(arguments,1);return eg(a,c)}
function jg(a,b){var c=hg(b);return eg(a,c)}
;function kg(){this.f=[];this.b=-1}
kg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
kg.prototype.get=function(a){return!!this.f[a]};
function lg(a){-1==a.b&&(a.b=Pa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;var mg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ng=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",ng);function og(a){var b=arguments;if(1<b.length)ng[b[0]]=b[1];else{b=b[0];for(var c in b)ng[c]=b[c]}}
function P(a,b){return a in ng?ng[a]:b}
function pg(a){return P(a,void 0)}
;function qg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){rg(b)}}:a}
function rg(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=P("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),og("ERRORS",c))}
;function Q(a,b){Ba(a)&&(a=qg(a));return window.setTimeout(a,b)}
function sg(a){window.clearTimeout(a)}
;var tg=u("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.P;O.prototype.publish=O.prototype.H;O.prototype.clear=O.prototype.clear;x("ytPubsubPubsubInstance",tg);var ug=u("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",ug);var vg=u("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",vg);var wg=u("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",wg);
function xg(a,b,c){var d=yg();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){ug[e]&&b.apply(c||window,d)};
try{wg[a]?g():Q(g,0)}catch(h){rg(h)}},c);
ug[e]=!0;vg[a]||(vg[a]=[]);vg[a].push(e);return e}return 0}
function zg(a){var b=yg();b&&(va(a)?a=[a]:t(a)&&(a=[parseInt(a,10)]),B(a,function(a){b.unsubscribeByKey(a);delete ug[a]}))}
function R(a,b){var c=yg();return c?c.publish.apply(c,arguments):!1}
function Ag(a,b){wg[a]=!0;var c=yg();c&&c.publish.apply(c,arguments);wg[a]=!1}
function yg(){return u("ytPubsubPubsubInstance")}
;function Bg(a,b,c){a&&(a.dataset?a.dataset[Cg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Dg(a,b){return a?a.dataset?a.dataset[Cg(b)]:a.getAttribute("data-"+b):null}
function Eg(a,b){a&&(a.dataset?delete a.dataset[Cg(b)]:a.removeAttribute("data-"+b))}
var Fg={};function Cg(a){return Fg[a]||(Fg[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function S(a,b){this.version=a;this.args=b}
;function T(a,b){this.topic=a;this.b=b}
T.prototype.toString=function(){return this.topic};function Gg(){}
function Hg(){}
Gg.prototype=ca(Hg.prototype);Gg.prototype.constructor=Gg;if(ia)ia(Gg,Hg);else for(var Ig in Hg)if("prototype"!=Ig)if(Object.defineProperties){var Jg=Object.getOwnPropertyDescriptor(Hg,Ig);Jg&&Object.defineProperty(Gg,Ig,Jg)}else Gg[Ig]=Hg[Ig];Gg.w=Hg.prototype;function Kg(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():Q(a,c||0)}
Gg.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
xa(Gg);Gg.v();var Lg=u("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.P;O.prototype.publish=O.prototype.H;O.prototype.clear=O.prototype.clear;x("ytPubsub2Pubsub2Instance",Lg);var Mg=u("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Mg);var Ng=u("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Ng);var Og=u("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Og);
x("ytPubsub2Pubsub2SkipSubKey",null);function V(a,b){var c=Pg();c&&c.publish.call(c,a.toString(),a,b)}
function Qg(a,b,c){var d=Pg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=u("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Mg[e])try{if(g&&a instanceof T&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.K){var p=new f;f.K=p.version}var v=f.K}catch(q){}if(!v||h.version!=v)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,Ua(h.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(c||window,g)}catch(q){rg(q)}},Og[a.toString()]?u("yt.scheduler.instance")?Kg(f,1,void 0):Q(f,0):f())});
Mg[e]=!0;Ng[a.toString()]||(Ng[a.toString()]=[]);Ng[a.toString()].push(e);return e}
function Rg(a){var b=Pg();b&&(va(a)&&(a=[a]),B(a,function(a){b.unsubscribeByKey(a);delete Mg[a]}))}
function Pg(){return u("ytPubsub2Pubsub2Instance")}
;var Sg=0;function Tg(a){var b=a.__yt_uid_key;b||(b=Ug(),a.__yt_uid_key=b);return b}
function Vg(a,b){a=F(a);b=F(b);return!!Vc(a,function(a){return a===b},!0,void 0)}
function Wg(a,b){var c=xc(document,a,null,b);return c.length?c[0]:null}
function Xg(){var a=document,b;Qa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Yg(){Te(document.body,"hide-players",!1);B(wc("preserve-players"),function(a){N(a,"preserve-players")})}
var Ug=u("ytDomDomGetNextId")||function(){return++Sg};
x("ytDomDomGetNextId",Ug);var Zg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function $g(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Zg||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
$g.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
$g.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
$g.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=u("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",lb);var ah=u("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",ah);
function bh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ca(e[4])&&Ca(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bh(a,b,c,d);if(e)return e;e=++ah.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new $g(d);if(!Vc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new $g(b);
b.currentTarget=a;return c.call(a,b)};
g=qg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ch()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function dh(a,b,c){var d=a||document;return W(d,"click",function(a){var e=Vc(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function eh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var ch=ec(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function fh(a,b,c){return dh(a,b,function(a){return L(a,c)})}
function gh(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function hh(a){a&&("string"==typeof a&&(a=[a]),B(a,function(a){if(a in lb){var b=lb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?ch()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[a]}}))}
;var ih={},jh="ontouchstart"in document;function kh(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Vc(c,function(a){return L(a,b)},!0,d)}
function lh(a){var b="mouseover"==a.type&&"mouseenter"in ih||"mouseout"==a.type&&"mouseleave"in ih,c=a.type in ih||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=ih[b];for(var d in c.f){var e=kh(b,d,a.target);e&&!Vc(a.relatedTarget,function(a){return a==e},!0)&&c.H(d,e,b,a)}}if(b=ih[a.type])for(d in b.f)(e=kh(a.type,d,a.target))&&b.H(d,e,a.type,a)}}
W(document,"blur",lh,!0);W(document,"change",lh,!0);W(document,"click",lh);W(document,"focus",lh,!0);W(document,"mouseover",lh);W(document,"mouseout",lh);W(document,"mousedown",lh);W(document,"keydown",lh);W(document,"keyup",lh);W(document,"keypress",lh);W(document,"cut",lh);W(document,"paste",lh);jh&&(W(document,"touchstart",lh),W(document,"touchend",lh),W(document,"touchcancel",lh));function mh(a){this.l=a;this.A={};this.L=[];this.D=[]}
k=mh.prototype;k.C=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
k.unregister=function(){zg(this.L);this.L.length=0;Rg(this.D);this.D.length=0};
k.init=wa;k.dispose=wa;function nh(a,b,c){a.L.push(xg(b,c,a))}
function oh(a,b,c){a.D.push(Qg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=w(c,a);b in ih||(ih[b]=new O);ih[b].subscribe(d,e);a.A[c]=e}
function Z(a,b,c,d){if(b in ih){var e=ih[b];Kf(e,X(a,d),a.A[c]);0>=Mf(e)&&(e.dispose(),delete ih[b])}delete a.A[c]}
k.O=function(a,b,c){var d=this.i(a,b);if(d&&(d=u(d))){var e=Xa(arguments,2);Wa(e,0,0,a);d.apply(null,e)}};
k.i=function(a,b){return Dg(a,b)};
function ph(a,b){Bg(a,"tooltip-text",b)}
;var qh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",qh);function rh(a){var b=[];ib(a,function(a,d){var c=encodeURIComponent(String(d)),f;za(a)?f=a:f=[a];B(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function sh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?za(b[f])?Va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function th(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=sh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return jg(a,e)+d}
;function uh(a){a=void 0===a?{}:a;Ba(a)&&(a={callback:a});if(a.gapiHintOverride||P("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=sh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&qb(a,{_c:{jsl:{h:b}}})}pe("gapi.iframes:gapi.iframes.style.common",a)}
;function vh(){return u("gapi.iframes.getContext")()}
;function wh(a){S.call(this,1,arguments);this.b=a}
y(wh,S);function xh(a){S.call(this,1,arguments);this.b=a}
y(xh,S);function yh(a,b,c){S.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(yh,S);function zh(a,b,c,d,e){S.call(this,2,arguments);this.f=a;this.b=b;this.j=c||null;this.g=d||null;this.source=e||null}
y(zh,S);function Ah(a,b,c){S.call(this,1,arguments);this.b=a;this.f=b}
y(Ah,S);function Bh(a,b,c,d,e,f,g){S.call(this,1,arguments);this.f=a;this.l=b;this.b=c;this.o=d||null;this.j=e||null;this.g=f||null;this.source=g||null}
y(Bh,S);
var Ch=new T("subscription-batch-subscribe",wh),Dh=new T("subscription-batch-unsubscribe",wh),Eh=new T("subscription-subscribe",zh),Fh=new T("subscription-subscribe-loading",xh),Gh=new T("subscription-subscribe-loaded",xh),Hh=new T("subscription-subscribe-success",Ah),Ih=new T("subscription-subscribe-external",zh),Jh=new T("subscription-unsubscribe",Bh),Kh=new T("subscription-unsubscirbe-loading",xh),Lh=new T("subscription-unsubscribe-loaded",xh),Mh=new T("subscription-unsubscribe-success",xh),Nh=
new T("subscription-external-unsubscribe",Bh),Oh=new T("subscription-enable-ypc",xh),Ph=new T("subscription-disable-ypc",xh),Qh=new T("subscription-prefs",yh),Rh=new T("subscription-prefs-success",yh),Sh=new T("subscription-prefs-failure",yh);function Th(){var a=Xg();return a?a:null}
;function Uh(a,b){(a=F(a))&&a.style&&(a.style.display=b?"":"none",Te(a,"hid",!b))}
function Vh(a){return(a=F(a))?"none"!=a.style.display&&!L(a,"hid"):!1}
function Wh(a){B(arguments,function(a){!Aa(a)||a instanceof Element?Uh(a,!0):B(a,function(a){Wh(a)})})}
function Xh(a){B(arguments,function(a){!Aa(a)||a instanceof Element?Uh(a,!1):B(a,function(a){Xh(a)})})}
;function Yh(){mh.call(this,"tooltip");this.b=0;this.f={}}
y(Yh,mh);xa(Yh);k=Yh.prototype;k.register=function(){Y(this,"mouseover",this.X);Y(this,"mouseout",this.M);Y(this,"focus",this.oa);Y(this,"blur",this.ja);Y(this,"click",this.M);Y(this,"touchstart",this.Ja);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
k.unregister=function(){Z(this,"mouseover",this.X);Z(this,"mouseout",this.M);Z(this,"focus",this.oa);Z(this,"blur",this.ja);Z(this,"click",this.M);Z(this,"touchstart",this.Ja);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();Yh.w.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.M(this.f[a]);this.f={}};
k.X=function(a){if(!(this.b&&1E3>Ja()-this.b)){var b=parseInt(this.i(a,"tooltip-hide-timer"),10);b&&(Eg(a,"tooltip-hide-timer"),sg(b));b=w(function(){Zh(this,a);Eg(a,"tooltip-show-timer")},this);
var c=parseInt(this.i(a,"tooltip-show-delay"),10)||0;b=Q(b,c);Bg(a,"tooltip-show-timer",b.toString());a.title&&(ph(a,$h(this,a)),a.title="");b=Da(a).toString();this.f[b]=a}};
k.M=function(a){var b=parseInt(this.i(a,"tooltip-show-timer"),10);b&&(sg(b),Eg(a,"tooltip-show-timer"));b=w(function(){if(a){var b=F(ai(this,a));b&&(bi(b),Fc(b),Eg(a,"content-id"));b=F(ai(this,a,"arialabel"));Fc(b)}Eg(a,"tooltip-hide-timer")},this);
b=Q(b,50);Bg(a,"tooltip-hide-timer",b.toString());if(b=this.i(a,"tooltip-text"))a.title=b;b=Da(a).toString();delete this.f[b]};
k.oa=function(a,b){this.b=0;this.X(a,b)};
k.ja=function(a){this.b=0;this.M(a)};
k.Ja=function(a,b,c){c.changedTouches&&(this.b=0,(a=kh(b,X(this),c.changedTouches[0].target))&&this.X(a,b))};
k.Z=function(a,b,c){c.changedTouches&&(this.b=Ja(),(a=kh(b,X(this),c.changedTouches[0].target))&&this.M(a))};
function ci(a,b,c){ph(b,c);a=a.i(b,"content-id");(a=F(a))&&Jc(a,c)}
function $h(a,b){return a.i(b,"tooltip-text")||b.title}
function Zh(a,b){if(b){var c=$h(a,b);if(c){var d=F(ai(a,b));if(!d){d=document.createElement("div");d.id=ai(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=di(a,b),l=ai(a,b,"content");g.id=l;Bg(b,"content-id",l);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var m=Sc(b);l=ai(a,b,"arialabel");f=document.createElement("div");M(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Jc(f,m);b.setAttribute("aria-labelledby",l);l=Th()||document.body;l.appendChild(f);l.appendChild(d);ci(a,b,c);(c=parseInt(a.i(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",M(g,X(a,"normal-wrap")));g=L(b,X(a,"reverse"));ei(a,b,d,e,h,g)||ei(a,b,d,e,h,!g);var p=X(a,"tip-visible");
Q(function(){M(d,p)},0)}}}}
function ei(a,b,c,d,e,f){Te(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=nd(b);f=new E((h.width-10)/2,f?h.height:0);var l=kd(b);sf(new E(l.x+f.x,l.y+f.y),c,g);f=Ac(window);if(1==c.nodeType)var m=ld(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new E(c.clientX,c.clientY);c=nd(d);var p=Math.floor(c.width/2);g=!!(f.height<m.y+h.height);h=!!(m.y<h.height);l=!!(m.x<p);f=!!(f.width<m.x+p);m=(c.width+3)/-2- -5;a=a.i(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function ai(a,b,c){a=X(a)+Tg(b);c&&(a+="-"+c);return a}
function di(a,b){var c=null;Gb&&L(b,X(a,"masked"))&&((c=F("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Wh(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function bi(a){var b=F("yt-uix-tooltip-shared-mask"),c=b&&Vc(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Xh(b),document.body.appendChild(b))}
;function fi(a){var b=gi();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=xg("LOGGED_IN",function(b){zg(P("LOGGED_IN_PUBSUB_KEY",void 0));og("LOGGED_IN",!0);a(b)});
og("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function gi(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=ig(a,"mode","subscribe");a=ig("/signin?context=popup","next",a);return a=ig(a,"feature","sub_button")}
x("yt.pubsub.publish",R);function hi(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var ii=Math.pow(2,16)-1,ji=null,ki=0,li={log_event:"events",log_interaction:"interactions"},mi=Object.create(null);mi.log_event="GENERIC_EVENT_LOGGING";mi.log_interaction="INTERACTION_LOGGING";var ni=new Set(["log_event"]),oi={},pi=0,qi=0,ri=u("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",ri);var si=u("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",si);var ti=u("ytLoggingTransportDispatchedStats_")||{};
x("ytLoggingTransportDispatchedStats_",ti);x("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{});function ui(){sg(pi);sg(qi);qi=0;if(!mb(ri)){for(var a in ri){var b=oi[a];b&&(vi(a,b),delete ri[a])}mb(ri)||wi()}}
function wi(){hi("web_gel_timeout_cap")&&!qi&&(qi=Q(ui,3E4));sg(pi);pi=Q(ui,P("LOGGING_BATCH_TIMEOUT",1E4))}
function xi(a,b){b=void 0===b?"":b;ri[a]=ri[a]||{};ri[a][b]=ri[a][b]||[];return ri[a][b]}
function vi(a,b){var c=li[a],d=ti[a]||{};ti[a]=d;var e=Math.round(mg());for(m in ri[a]){var f=ob,g=b.b;g={client:{hl:g.nb,gl:g.mb,clientName:g.kb,clientVersion:g.lb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));P("DELEGATED_SESSION_ID")&&!hi("pageid_as_header_web")&&(g.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=xi(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=si[m])a:{var l=m;if(g.videoId)h=
"VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete si[m];f.requestTimeMs=e;if(g=pg("EVENT_ID"))h=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>ii&&(h=1),og("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,ji&&ki&&hi("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:ji,roundtripMs:ki}),
ji=g,ki=0;yi(b,a,f,{retry:ni.has(a),onSuccess:w(zi,this,mg())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function zi(a){ki=Math.round(mg()-a)}
;function Ai(){var a=Bi,b={};b.dt=vd;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?z:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!z.navigator&&"unknown"!==typeof z.navigator.javaEnabled&&!!z.navigator.javaEnabled&&z.navigator.javaEnabled();z.screen&&(b.u_h=z.screen.height,b.u_w=z.screen.width,b.u_ah=z.screen.availHeight,b.u_aw=z.screen.availWidth,b.u_cd=z.screen.colorDepth);
z.navigator&&z.navigator.plugins&&(b.u_nplug=z.navigator.plugins.length);z.navigator&&z.navigator.mimeTypes&&(b.u_nmime=z.navigator.mimeTypes.length);return b}
function Ci(){var a=Bi;var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var h=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.b.top;try{var l=Ac(c||window).round()}catch(m){l=new sc(-12245933,-12245933)}c=l;l={};d=new kg;n.SVGElement&&n.document.createElementNS&&d.set(0);e=$c();e["allow-top-navigation-by-user-activation"]&&d.set(1);
e["allow-popups-to-escape-sandbox"]&&d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);d=lg(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.f;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!z.WebGLRenderingContext,l}
var Bi=new function(){var a=window.document;this.b=window;this.f=a};Ja();var Di=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ei(){if(!Di)return null;var a=Di();return"open"in a?a:null}
;var Fi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Gi="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Hi=!1;
function Ii(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=cg(a)[1]||null,e=dg(cg(a)[3]||null);d&&e?(d=c,c=cg(a),d=cg(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?dg(cg(c)[3]||null)==e&&(Number(cg(c)[4]||null)||null)==(Number(cg(a)[4]||null)||null):!0;d=!!hi("web_ajax_ignore_global_headers_if_set");for(var f in Fi)e=P(Fi[f]),!e||!c&&!Ji(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ji(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();hi("pass_biscotti_id_in_header_ajax")&&(c||
Ji(a,"X-YouTube-Ad-Signals"))&&(f=void 0,f=void 0===f?u("yt.ads.biscotti.lastId_")||"":f,c=Object.assign(Ai(),Ci()),c.ca_type="image",f&&(c.bid=f),b["X-YouTube-Ad-Signals"]=rh(c));return b}
function Ki(a){var b=window.location.search,c=dg(cg(a)[3]||null),d=dg(cg(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=sh(b),f={};B(Gi,function(a){e[a]&&(f[a]=e[a])});
return th(a,f||{},!1)}
function Ji(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=dg(cg(a)[3]||null);return d?(c=c[d])?Sa(c,b):!1:!0}
function Li(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Mi(a,b);var d=Ni(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&sg(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.R&&b.R.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Ba&&0<b.timeout&&(f=Q(function(){e||(e=!0,sg(f),b.Ba.call(b.context||n))},b.timeout))}else Oi(a,b)}
function Oi(a,b){var c=b.format||"JSON";a=Mi(a,b);var d=Ni(a,b),e=!1,f,g=Pi(a,function(a){if(!e){e=!0;f&&sg(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null,h=400<=a.status&&500>a.status,v=500<=a.status&&600>a.status;if(d||h||v)g=Qi(c,a,b.sc);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||n;
d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.R&&b.R.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ea&&0<b.timeout&&(f=Q(function(){e||(e=!0,g.abort(),sg(f))},b.timeout))}
function Mi(a,b){b.uc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=pg("XSRF_FIELD_NAME"),d=b.Ka;d&&(d[c]&&delete d[c],a=th(a,d||{},!0));return a}
function Ni(a,b){var c=pg("XSRF_FIELD_NAME"),d=pg("XSRF_TOKEN"),e=b.postBody||"",f=b.G,g=pg("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.tc||dg(cg(a)[3]||null)&&!b.withCredentials&&dg(cg(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=sh(e),qb(e,f),e=b.Fa&&"JSON"==b.Fa?JSON.stringify(e):hg(e));f=e||f&&!mb(f);!Hi&&f&&"POST"!=b.method&&(Hi=!0,rg(Error("AJAX request with postData should use POST")));
return e}
function Qi(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ri(b):null)d={},B(b.getElementsByTagName("*"),function(a){d[a.tagName]=Si(a)})}c&&Ti(d);
return d}
function Ti(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=oc(a[b]);a[c]=d}else Ti(a[b])}}
function Ri(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Si(a){var b="";B(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Pi(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&qg(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ei();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;hi("debug_forward_web_query_parameters")&&(a=Ki(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ii(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;function Ui(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pc||P("AUTHORIZATION"))||(a?b="Bearer "+u("gapi.auth.getToken")().oc:b=Ld([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),hi("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function Vi(a){a=Object.assign({},a);delete a.Authorization;var b=Ld();if(b){var c=new Ge;c.update(pg("INNERTUBE_API_KEY"));c.update(b);b=c.digest();Aa(b);if(!ac)for(ac={},bc={},c=0;65>c;c++)ac[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),bc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=bc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,p=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[p],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Wi(){var a=new Vf;(a=a.isAvailable()?new ag(a,"yt.innertube"):null)||(a=new Wf("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Rf(a):null;this.f=document.domain||window.location.hostname}
Wi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ja()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(gf(b))}catch(f){return}else e=escape(b);b=this.f;dc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
Wi.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wi.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xi=new Wi;function Yi(a,b,c,d){if(d)return null;d=Xi.get("nextId",!0)||1;var e=Xi.get("requests",!0)||{};e[d]={method:a,request:b,authState:Vi(c),requestTime:Math.round(mg())};Xi.set("nextId",d+1,86400,!0);Xi.set("requests",e,86400,!0);return d}
function Zi(a){var b=Xi.get("requests",!0)||{};delete b[a];Xi.set("requests",b,86400,!0)}
function $i(a){var b=Xi.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(mg())-d.requestTime)){var e=d.authState,f=Vi(Ui(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(mg())),yi(a,d.method,e,{}));delete b[c]}}Xi.set("requests",b,86400,!0)}}
;function aj(a){var b=this;this.b=a||{ib:pg("INNERTUBE_API_KEY"),jb:pg("INNERTUBE_API_VERSION"),kb:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),lb:pg("INNERTUBE_CONTEXT_CLIENT_VERSION"),nb:pg("INNERTUBE_CONTEXT_HL"),mb:pg("INNERTUBE_CONTEXT_GL"),ob:pg("INNERTUBE_HOST_OVERRIDE")||"",pb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Kg(function(){$i(b)},0,5E3)}
function yi(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&rg(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",G:c,Fa:"JSON",Ea:function(){},
Ba:d.Ea,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Aa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
vc:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.ob;g&&(f=g);g=a.b.pb||!1;var h=Ui(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.jb+"/"+b)+"?alt=json&key="+a.b.ib,m;if(d.retry&&hi("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Yi(b,c,h,g))){var p=e.onSuccess,v=e.Aa;e.onSuccess=function(a,b){Zi(m);p(a,b)};
c.Aa=function(a,b){Zi(m);v(a,b)}}try{hi("use_fetch_for_op_xhr")?Li(l,e):(e.method="POST",e.G||(e.G={}),Oi(l,e))}catch(q){if("InvalidAccessError"==q)m&&(Zi(m),m=0),rg(Error("An extension is blocking network request."),"WARNING");
else throw q;}m&&Kg(function(){$i(a)},0,5E3)}
;var bj=Ja().toString();var cj;
if(!(cj=u("ytLoggingTimeDocumentNonce_"))){var dj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var ej=Array(16),fj=new Uint8Array(16);window.crypto.getRandomValues(fj);for(var gj=0;gj<ej.length;gj++)ej[gj]=fj[gj];dj=ej;break a}catch(a){}for(var hj=Array(16),ij=0;16>ij;ij++){for(var jj=Ja(),kj=0;kj<jj%23;kj++)hj[ij]=Math.random();hj[ij]=Math.floor(256*Math.random())}if(bj)for(var lj=1,mj=0;mj<bj.length;mj++)hj[lj%16]=hj[lj%16]^hj[(lj-1)%16]/4^bj.charCodeAt(mj),lj++;dj=hj}for(var nj=dj,oj=
[],pj=0;pj<nj.length;pj++)oj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(nj[pj]&63));cj=oj.join("")}var qj=cj;x("ytLoggingTimeDocumentNonce_",qj);function rj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function sj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
x("yt_logging_screen.getRootVeType",function(a){return P(sj(void 0===a?0:a),void 0)});
x("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=P(rj(a));b||0!=a||(b=P("EVENT_ID"));return b?b:null});
x("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==P(rj(c))||b!==P(sj(c)))og(rj(c),a),og(sj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var b={clientDocumentNonce:qj,clientScreenNonce:a},c={};c.eventTimeMs=Math.round(mg());c.foregroundHeartbeatScreenAssociated=b;b=String;var f=u("_lact",window);f=null==f?-1:Math.max(Ja()-f,0);c.context={lastActivityMs:b(f)};b=xi("log_event");b.push(c);aj&&(oi.log_event=new aj);b.length>=(Number(hi("web_logging_max_batch")||0)||
20)?ui():wi()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function tj(){mh.call(this,"button");this.b=null;this.g=[];this.f={}}
y(tj,mh);xa(tj);k=tj.prototype;k.register=function(){Y(this,"click",this.La);Y(this,"keydown",this.sa);Y(this,"keypress",this.ta);nh(this,"page-scroll",this.fb)};
k.unregister=function(){Z(this,"click",this.La);Z(this,"keydown",this.sa);Z(this,"keypress",this.ta);uj(this);this.f={};tj.w.unregister.call(this)};
k.La=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
k.sa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=vj(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Kc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ub;else"table"==e&&(f=this.tb);f&&wj(this,a,b,c,w(f,this))}}};
k.fb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=H(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;xj(this,d,b,!0)}};
function wj(a,b,c,d,e){var f=Vh(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=yj(a,c)){if(r(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var l=void 0===l?"":l;var m=void 0===m?window:m;m=m.location;h=jg(b.href,h)+l;h instanceof hc||h instanceof hc||(h="object"==typeof h&&h.da?h.ca():String(h),jc.test(h)||(h="about:invalid#zClosurez"),h=kc(h));h instanceof hc&&h.constructor===
hc&&h.f===ic?h=h.b:(ya(h),h="type_error:SafeUrl");m.href=h}else gh(b)}else g&&zj(a,b);else f?27==d.keyCode?(yj(a,c),zj(a,b)):e(b,c,d):(h=L(b,X(a,"reverse"))?38:40,d.keyCode==h&&(gh(b),d.preventDefault()))}
k.ta=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=vj(this,a),Vh(a)&&c.preventDefault())};
function yj(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&N(d,c);return d}
function Aj(a,b,c){M(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Da(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.tb=function(a,b,c){var d=yj(this,b);if(d){var e=Wg("table",b);b=xc(document,"td",null,e);d=Bj(d,b,xc(document,"td",null,Wg("tr",e)).length,c);-1!=d&&(Aj(this,a,b[d]),c.preventDefault())}};
k.ub=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=yj(this,b);d&&(b=Na(xc(document,"li",null,b),Vh),Aj(this,a,b[Bj(d,b,1,c)]),c.preventDefault())}};
function Bj(a,b,c,d){var e=b.length;a=Ma(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Cj(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),Xh(c),b.iframeMask=c);return c}
function xj(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.i(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=pd(b);if(L(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(p){}}L(b,"flip")&&(L(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.i(b,"button-has-sibling-menu")?l=id(e):a.i(b,"button-menu-root-container")&&(l=Dj(a,b));D&&!Sb("8")&&(l=null);if(l){var m=pd(l);m=new ad(-m.top,m.left,m.top,-m.left)}l=new E(0,1);L(b,X(a,"center-menu"))&&(l.x-=Math.round((nd(c).width-nd(b).width)/
2));d&&(l.y+=Cc(document).y);if(a=Cj(a,b))b=nd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",qf(e,f,a,g,l,m,197),d&&cd(a,"position","fixed");qf(e,f,c,g,l,m,197)}
function Dj(a,b){if(a.i(b,"button-menu-root-container")){var c=a.i(b,"button-menu-root-container");return H(b,c)}return document.body}
k.Na=function(a){if(a){var b=vj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.i(a,"button-has-sibling-menu")?c=a.parentNode:c=Dj(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Cj(this,a);d&&c.appendChild(d);(c=!!this.i(a,"button-menu-fixed"))&&(this.f[Tg(a).toString()]=b);xj(this,a,b,c);Ag("yt-uix-button-menu-before-show",a,b);Wh(b);d&&Wh(d);
this.O(a,"button-menu-action",!0);M(a,X(this,"active"));b=w(this.Ma,this,a,!1);d=w(this.Ma,this,a,!0);c=w(this.Db,this,a,void 0);this.b&&vj(this,this.b)==vj(this,a)||uj(this);R("yt-uix-button-menu-show",a);hh(this.g);this.g=[W(document,"click",d),W(document,"contextmenu",b),W(window,"resize",c)];this.b=a}}};
function zj(a,b){if(b){var c=vj(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Xh(c);a.O(b,"button-menu-action",!1);var d=Cj(a,b),e=Tg(c).toString();delete a.f[e];Q(function(){d&&d.parentNode&&(Xh(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Se(b,f);R("yt-uix-button-menu-hide",b);hh(a.g);a.g.length=0}}
k.Db=function(a,b){var c=vj(this,a);if(c){b&&(b instanceof lc?qc(c,nc(b)):Jc(c,b));var d=!!this.i(a,"button-menu-fixed");xj(this,a,c,d)}};
k.Ma=function(a,b,c){c=eh(c);var d=H(c,X(this));if(d){d=vj(this,d);var e=vj(this,a);if(d==e)return}d=H(c,X(this,"menu"));e=d==vj(this,a);var f=L(c,X(this,"menu-item")),g=L(c,X(this,"menu-close"));if(!d||e&&(f||g))zj(this,a),d&&b&&this.i(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&Jc(a,Sc(c)),Ej(this,d,c))};
function Ej(a,b,c){var d=X(a,"menu-item-selected");B(wc(d,b),function(a){N(a,d)});
M(c.parentNode,d)}
function vj(a,b){if(!b.widgetMenu){var c=a.i(b,"button-menu-id");c=c&&F(c);var d=X(a,"menu");c?Re(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return L(a,X(this,"toggled"))};
k.toggle=function(a){if(this.i(a,"button-toggle")){var b=H(a,X(this,"group")),c=X(this,"toggled"),d=L(a,c);if(b&&this.i(b,"button-toggle-group")){var e=this.i(b,"button-toggle-group");B(wc(X(this),b),function(b){b!=a||"optional"==e&&d?(N(b,c),b.removeAttribute("aria-pressed")):(M(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Ve(a,c)}};
k.click=function(a){if(vj(this,a)){var b=vj(this,a);if(b){var c=H(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(zj(this,c),Q(w(this.Na,this,a),1)):Vh(b)?zj(this,a):this.Na(a)}a.focus()}this.O(a,"button-action")};
function uj(a){a.b&&zj(a,a.b)}
;function Fj(a){mh.call(this,a);this.g=null}
y(Fj,mh);k=Fj.prototype;k.C=function(a){var b=mh.prototype.C.call(this,a);return b?b:a};
k.register=function(){nh(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){Gj(this);Fj.w.dispose.call(this)};
k.i=function(a,b){var c=Fj.w.i.call(this,a,b);return c?c:(c=Fj.w.i.call(this,a,"card-config"))&&(c=u(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.C(a);if(b){M(b,X(this,"active"));var c=Hj(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Ij(this,a,c);var d=X(this,"card-visible"),e=this.i(a,"card-delegate-show")&&this.i(b,"card-action");this.O(b,"card-action",a);this.g=a;Xh(c);Q(w(function(){e||(Wh(c),R("yt-uix-card-show",b,a,c));Jj(c);M(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Hj(a,b,c){var d=c||b,e=X(a,"card");c=Kj(a,d);var f=F(X(a,"card")+Tg(d));if(f)return a=G(X(a,"card-body"),f),Ic(a,c)||(Fc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Tg(d);f.className=e;(d=a.i(d,"card-class"))&&Re(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.i(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Fc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Ij(a,b,c){var d=a.i(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.i(b,"position"),g=!!a.i(b,"force-position"),h=a.i(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var v=8}else m&&!l?(p=12,v=9):!m&&l?(p=9,v=12):(p=8,v=13);var q=qd(document.body);f=qd(b);q!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var K=new E(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,K=new E(b.offsetWidth+6,-12);var A=nd(c);f=
Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?K.y+=12-b.offsetHeight/2:K.x+=12-b.offsetWidth/2);A=null;g||(A=10);b=X(a,"card-flip");a=X(a,"card-reverse");Te(c,b,m);Te(c,a,l);A=qf(e,p,c,v,K,null,A);!g&&A&&(A&48&&(m=!m,p^=4,v^=4),A&192&&(l=!l,p^=1,v^=1),Te(c,b,m),Te(c,a,l),qf(e,p,c,v,K));h&&(e=parseInt(c.style.top,10),g=Cc(document).y,cd(c,"position","fixed"),cd(c,"top",e-g+"px"));q&&(c.style.right="",e=pd(c),e.left=e.left||parseInt(c.style.left,10),g=Ac(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);g=G("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!q&&m||q&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=G("yt-uix-card-arrow",c);m=G("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?nd(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.C(a)){var b=F(X(this,"card")+Tg(a));b&&(N(a,X(this,"active")),N(b,X(this,"card-visible")),Xh(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Fc(b.cardMask),b.cardMask=null))}};
function Gj(a){a.g&&a.hide(a.g)}
k.Cb=function(a,b){var c=this.C(a);if(c){if(b){var d=Kj(this,c);if(!d)return;b instanceof lc?qc(d,nc(b)):Jc(d,b)}L(c,X(this,"active"))&&(c=Hj(this,a,c),Ij(this,a,c),Wh(c),Jj(c))}};
k.isActive=function(a){return(a=this.C(a))?L(a,X(this,"active")):!1};
function Kj(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.i(b,"card-id"))?F(c):G(d,b))||(c=document.createElement("div"));var f=c;N(f,d);M(f,e);b.cardContentNode=c}return c}
function Jj(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',Re(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Lj(){mh.call(this,"kbd-nav")}
var Mj;y(Lj,mh);xa(Lj);k=Lj.prototype;k.register=function(){Y(this,"keydown",this.qa);nh(this,"yt-uix-kbd-nav-move-in",this.ya);nh(this,"yt-uix-kbd-nav-move-in-to",this.vb);nh(this,"yt-uix-kbd-move-next",this.za);nh(this,"yt-uix-kbd-nav-move-to",this.V)};
k.unregister=function(){Z(this,"keydown",this.qa);hh(Mj)};
k.qa=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.ya(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Xe(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=Xe(c,"kbdNavMoveOut")}c=F(c);this.V(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&L(a,X(this,"list")))switch(d){case 40:this.za(b,a);break;case 38:d=document.activeElement==a,a=Nj(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Oj(this,a[b]))}c.preventDefault()}};
k.ya=function(a){var b=Xe(a,"kbdNavMoveIn");b=F(b);Pj(this,a,b);this.V(b)};
k.vb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Pj(this,d,a);this.V(a)};
k.V=function(a){if(a)if(Pc(a))a.focus();else{var b=Kc(a,function(a){return Hc(a)?Pc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Pj(a,b,c){if(b&&c)if(M(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,We&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
k.za=function(a,b){var c=document.activeElement==b,d=Nj(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Oj(this,d[c]))};
function Oj(a,b){if(b){var c=Uc(b,"LI");c&&(M(c,X(a,"highlight")),Mj=W(b,"blur",w(function(a){N(a,X(this,"highlight"));hh(Mj)},a,c)))}}
function Nj(a){if("UL"!=a.tagName.toUpperCase())return[];a=Na(Gc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Na(Oa(a,function(a){return Vh(a)?Kc(a,function(a){return Hc(a)?Pc(a):!1}):!1}),function(a){return!!a})}
;function Qj(){mh.call(this,"menu");this.f=this.b=null;this.g={};this.o={};this.j=null}
y(Qj,mh);xa(Qj);function Rj(a){var b=Qj.v();if(L(a,X(b)))return a;var c=b.C(a);return c?c:H(a,X(b,"content"))==b.b?b.f:null}
k=Qj.prototype;k.register=function(){Y(this,"click",this.pa);Y(this,"mouseenter",this.cb);nh(this,"page-scroll",this.gb);nh(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);Sj(this,a)});
this.j=new O};
k.unregister=function(){Z(this,"click",this.pa);this.f=this.b=null;hh(Ya(jb(this.g)));this.g={};ib(this.o,function(a){Fc(a)},this);
this.o={};Pe(this.j);this.j=null;Qj.w.unregister.call(this)};
k.pa=function(a,b,c){a&&(b=Tj(this,a),!b.disabled&&Vg(c.target,b)&&Uj(this,a))};
k.cb=function(a,b,c){a&&L(a,X(this,"hover"))&&Vg(c.target,Tj(this,a))&&Uj(this,a,!0)};
k.gb=function(){this.b&&this.f&&Vj(this,this.f,this.b)};
function Vj(a,b,c){var d=Wj(a,b);if(d){var e=nd(c);if(e instanceof sc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=md(e,!0);d.style.height=md(f,!0)}c==a.b&&(e=9,f=8,L(b,X(a,"reversed"))&&(e^=1,f^=1),L(b,X(a,"flipped"))&&(e^=4,f^=4),a=new E(0,1),d&&qf(b,e,d,f,a,null,197),qf(b,e,c,f,a,null,197))}
function Uj(a,b,c){Xj(a,b)&&!c?Sj(a,b):(Yj(a,b),!a.b||Vg(b,a.b)?a.Oa(b):Jf(a.j,w(a.Oa,a,b)))}
k.Oa=function(a){if(a){var b=Zj(this,a);if(b){Ag("yt-uix-menu-before-show",a,b);this.b?Vg(a,this.b)||Sj(this,this.f):(this.f=a,this.b=b,L(a,X(this,"sibling-content"))||(Fc(b),document.body.appendChild(b)),b.style.minWidth=Tj(this,a).offsetWidth-2+"px");var c=Wj(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);N(b,X(this,"content-hidden"));Vj(this,a,b);Re(Tj(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);ak(b);bk(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.Eb,this,a),e=w(this.rb,this,a);c=Da(a).toString();this.g[c]=[W(b,"click",e),W(document,"click",d)];L(a,X(this,"indicate-selected"))&&(d=w(this.sb,this,a),this.g[c].push(W(b,"click",d)));L(a,X(this,"hover"))&&(a=w(this.eb,this,a),this.g[c].push(W(document,"mousemove",a)))}}};
k.eb=function(a,b){var c=eh(b);c&&(Vg(c,Tj(this,a))||ck(this,c)||dk(this,a))};
k.Eb=function(a,b){var c=eh(b);if(c){if(ck(this,c)){var d=H(c,X(this,"content")),e=Uc(c,"LI");e&&d&&Ic(d,e)&&Ag("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=Rj(c)}Sj(this,d||a)}};
function Yj(a,b){if(b){var c=H(b,X(a,"content"));c&&B(wc(X(a),c),function(a){!Vg(a,b)&&Xj(this,a)&&dk(this,a)},a)}}
function Sj(a,b){if(b){var c=[];c.push(b);var d=Zj(a,b);d&&(d=wc(X(a),d),d=Ua(d),c=c.concat(d),B(c,function(a){Xj(this,a)&&dk(this,a)},a))}}
function dk(a,b){if(b){var c=Zj(a,b);Se(Tj(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);M(c,X(a,"content-hidden"));var d=Zj(a,b);d&&yc(d,{"aria-expanded":"false"});(d=Wj(a,b))&&d.parentNode&&Fc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.j&&a.j.H("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Da(b).toString();hh(a.g[c]);delete a.g[c]}}
k.rb=function(a,b){var c=eh(b);c&&ek(this,a,c)};
k.sb=function(a,b){var c=eh(b);if(c){var d=Tj(this,a);if(d&&(c=Uc(c,"LI")))if(c=Sc(c).trim(),d.hasChildNodes()){var e=tj.v();(d=G(X(e,"content"),d))&&Jc(d,c)}else Jc(d,c)}};
function bk(a,b){var c=Zj(a,b);if(c){B(c.children,function(a){"LI"==a.tagName&&yc(a,{role:"menuitem"})});
yc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Da(c),c.id=d);(c=Tj(a,b))&&yc(c,{"aria-controls":d})}}
function ek(a,b,c){var d=Zj(a,b);d&&L(b,X(a,"checked"))&&(a=Uc(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(B(wc("yt-ui-menu-item-checked",d),function(a){Ue(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Ue(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Xj(a,b){var c=Zj(a,b);return c?!L(c,X(a,"content-hidden")):!1}
function ak(a){B(xc(document,"UL",null,a),function(a){a.tabIndex=0;var b=Lj.v();Re(a,[X(b),X(b,"list")])})}
function Zj(a,b){var c=Dg(b,"menu-content-id");return c&&(c=F(c))?(Re(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:G(X(a,"content"),b)}
function Wj(a,b){var c=Da(b).toString(),d=a.o[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];B(Qe(b),function(a){e.push(a+"-mask")});
Re(d,e);a.o[c]=d}return d||null}
function Tj(a,b){return G(X(a,"trigger"),b)}
function ck(a,b){return Vg(b,a.b)||Vg(b,a.f)}
;function fk(){Fj.call(this,"clickcard");this.b={};this.f={}}
y(fk,Fj);xa(fk);k=fk.prototype;k.register=function(){fk.w.register.call(this);Y(this,"click",this.ma,"target");Y(this,"click",this.la,"close")};
k.unregister=function(){fk.w.unregister.call(this);Z(this,"click",this.ma,"target");Z(this,"click",this.la,"close");for(var a in this.b)hh(this.b[a]);this.b={};for(a in this.f)hh(this.f[a]);this.f={}};
k.ma=function(a,b,c){c.preventDefault();b=Uc(c.target,"button");if(!b||!b.disabled){if(b=this.i(a,"card-target"))a=document,a=t(b)?a.getElementById(b):b;b=this.C(a);this.i(b,"disabled")||(L(b,X(this,"active"))?(this.hide(a),N(b,X(this,"active"))):(this.show(a),M(b,X(this,"active"))))}};
k.show=function(a){fk.w.show.call(this,a);var b=this.C(a),c=Da(a).toString();if(!Dg(b,"click-outside-persists")){if(this.b[c])return;b=W(document,"click",w(this.na,this,a));var d=W(window,"blur",w(this.na,this,a));this.b[c]=[b,d]}a=W(window,"resize",w(this.Cb,this,a,void 0));this.f[c]=a};
k.hide=function(a){fk.w.hide.call(this,a);a=Da(a).toString();var b=this.b[a];b&&(hh(b),this.b[a]=null);if(b=this.f[a])hh(b),delete this.f[a]};
k.na=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(Rj(b.target),c));(d=d||H(document.activeElement,c)||H(Rj(document.activeElement),c))||this.hide(a)};
k.la=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function gk(){Fj.call(this,"hovercard")}
y(gk,Fj);xa(gk);k=gk.prototype;k.register=function(){Y(this,"mouseenter",this.ua,"target");Y(this,"mouseleave",this.wa,"target");Y(this,"mouseenter",this.va,"card");Y(this,"mouseleave",this.xa,"card")};
k.unregister=function(){Z(this,"mouseenter",this.ua,"target");Z(this,"mouseleave",this.wa,"target");Z(this,"mouseenter",this.va,"card");Z(this,"mouseleave",this.xa,"card")};
k.ua=function(a){if(hk!=a){hk&&(this.hide(hk),hk=null);var b=w(this.show,this,a),c=parseInt(this.i(a,"delay-show"),10);b=Q(b,-1<c?c:200);Bg(a,"card-timer",b.toString());hk=a;a.alt&&(Bg(a,"card-alt",a.alt),a.alt="");a.title&&(Bg(a,"card-title",a.title),a.title="")}};
k.wa=function(a){var b=parseInt(this.i(a,"card-timer"),10);sg(b);this.C(a).isCardHidable=!0;b=parseInt(this.i(a,"delay-hide"),10);b=-1<b?b:200;Q(w(this.hb,this,a),b);if(b=this.i(a,"card-alt"))a.alt=b;if(b=this.i(a,"card-title"))a.title=b};
k.hb=function(a){this.C(a).isCardHidable&&(this.hide(a),hk=null)};
k.va=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.xa=function(a){a&&this.hide(a.cardTargetNode)};
var hk=null;function ik(a,b,c,d,e,f){this.b=a;this.A=null;this.g=G("yt-dialog-fg",this.b)||this.b;if(a=G("yt-dialog-title",this.g)){var g="yt-dialog-title-"+Da(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.S=G("yt-dialog-focus-trap",this.b);this.ha=!1;this.j=new O;this.D=[];this.D.push(fh(this.b,w(this.wb,this),"yt-dialog-dismiss"));this.D.push(W(this.S,"focus",w(this.bb,this),!0));jk(this);this.Qa=b;this.Sa=c;this.Ra=d;this.L=e;this.Va=f;this.o=
this.l=null}
var kk={LOADING:"loading",Rb:"content",nc:"working"};function lk(a,b){a.W()||a.j.subscribe("post-all",b)}
function jk(a){a=G("yt-dialog-fg-content",a.b);var b=[];ib(kk,function(a){b.push("yt-dialog-show-"+a)});
Se(a,b);M(a,"yt-dialog-show-content")}
k=ik.prototype;
k.show=function(){if(!this.W()){this.A=document.activeElement;if(!this.Ra){this.f||(this.f=F("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Ac(a).height,Bc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Wh(this.f)}this.ra();c=mk(this);nk(c);this.l=W(document,"keydown",w(this.qb,this));c=this.b;d=xg("player-added",this.ra,this);Bg(c,"player-ready-pubsub-key",d);this.Sa&&(this.o=W(document,"click",w(this.Bb,this)));Wh(this.b);this.g.setAttribute("tabindex","0");ok(this);this.L||M(document.body,"yt-dialog-active");uj(tj.v());Gj(fk.v());Gj(gk.v());R("yt-ui-dialog-show-complete",this)}};
function pk(){return Qa(wc("yt-dialog"),function(a){return Vh(a)})}
k.ra=function(){if(!this.Va){var a=this.b;Te(document.body,"hide-players",!0);a&&Te(a,"preserve-players",!0)}};
function mk(a){var b=xc(document,"iframe",null,a.b);B(b,function(a){var b=Dg(a,"onload");b&&(b=u(b))&&W(a,"load",b);if(b=Dg(a,"src"))a.src=b},a);
return Ua(b)}
function nk(a){B(document.getElementsByTagName("iframe"),function(b){-1==Ma(a,b)&&M(b,"iframe-hid")})}
function qk(){B(wc("iframe-hid"),function(a){N(a,"iframe-hid")})}
k.wb=function(a){a=a.currentTarget;a.disabled||(a=Dg(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.W()){this.j.H("pre-all");this.j.H("pre-"+a);Xh(this.b);Gj(fk.v());Gj(gk.v());this.g.setAttribute("tabindex","-1");pk()||(Xh(this.f),this.L||N(document.body,"yt-dialog-active"),Yg(),qk());this.l&&(hh(this.l),this.l=null);this.o&&(hh(this.o),this.o=null);var b=this.b;if(b){var c=Dg(b,"player-ready-pubsub-key");c&&(zg(c),Eg(b,"player-ready-pubsub-key"))}this.j.H("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.j&&this.j.H("post-"+
a);this.A&&this.A.focus()}};
k.setTitle=function(a){Jc(G("yt-dialog-title",this.b),a)};
k.qb=function(a){Q(w(function(){this.Qa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&L(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.Bb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.W=function(){return this.ha};
k.dispose=function(){Vh(this.b)&&this.dismiss("dispose");hh(this.D);this.D.length=0;Q(w(function(){this.A=null},this),0);
this.S=this.g=null;this.j.dispose();this.j=null;this.ha=!0};
k.bb=function(a){a.stopPropagation();ok(this)};
function ok(a){Q(w(function(){this.g&&this.g.focus()},a),0)}
x("yt.ui.Dialog",ik);function rk(){mh.call(this,"overlay");this.j=this.f=this.g=this.b=null}
y(rk,mh);xa(rk);k=rk.prototype;k.register=function(){Y(this,"click",this.fa,"target");Y(this,"click",this.hide,"close");sk(this)};
k.unregister=function(){rk.w.unregister.call(this);Z(this,"click",this.fa,"target");Z(this,"click",this.hide,"close");this.j&&(zg(this.j),this.j=null);this.f&&(hh(this.f),this.f=null)};
k.fa=function(a){if(!this.b||!Vh(this.b.b)){var b=this.C(a);a=tk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.i(b,"disable-shortcuts")||!1,d=!!this.i(b,"disable-outside-click-dismiss")||!1;this.b=new ik(a,c);this.g=b;var e=G("yt-dialog-fg",a);if(e){var f=this.i(b,"overlay-class")||"",g=this.i(b,"overlay-style")||"default",h=this.i(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Re(e,f)}this.b.show();R("yt-uix-kbd-nav-move-to",e||a);sk(this);c||
d||(c=w(function(a){L(a.target,"yt-dialog-base")&&uk(this)},this),this.f=W(G("yt-dialog-base",a),"click",c));
this.O(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function sk(a){a.j||(a.j=xg("yt-uix-overlay-hide",vk));a.b&&lk(a.b,function(){var a=rk.v();a.g=null;a.b.dispose();a.b=null})}
function uk(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.O(b,"overlay-hidden");a.g=null;a.f&&(hh(a.f),a.f=null);a.b=null}}
function tk(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=F("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function wk(){var a=rk.v();if(a.g)a=G("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=wc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if(Vh(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function vk(){uk(rk.v())}
k.show=function(a){this.fa(a)};var xk={},yk=[];function zk(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function Ak(a,b){hh(yk);yk.length=0;xk[b]||(xk[b]=zk(a));rk.v().show(xk[b]);var c=wk();return new tf(function(a){yk.push(fh(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Bk(){var a=P("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!P("SESSION_INDEX")&&!P("LOGGED_IN"))}
;function Ck(){mh.call(this,"subscription-button")}
y(Ck,mh);xa(Ck);k=Ck.prototype;k.register=function(){Y(this,"click",this.ga);oh(this,Fh,this.Da);oh(this,Gh,this.Ca);oh(this,Hh,this.zb);oh(this,Kh,this.Da);oh(this,Lh,this.Ca);oh(this,Mh,this.Ab);oh(this,Oh,this.yb);oh(this,Ph,this.xb)};
k.unregister=function(){Z(this,"click",this.ga);Ck.w.unregister.call(this)};
k.isSubscribed=function(a){return!!this.i(a,"is-subscribed")};
k.ga=function(a){var b=this.i(a,"href"),c=this.i(a,"insecure");if(b)a=this.i(a,"target")||"_self",window.open(b,a);else if(!c)if(Bk()){b=this.i(a,"channel-external-id");c=this.i(a,"clicktracking");var d=Dk(this,a),e=this.i(a,"parent-url");if(this.i(a,"is-subscribed")){var f=this.i(a,"subscription-id"),g=new Bh(b,f,d,a,c,e);Ek(this,a)?Ak(a,b).then(function(){V(Jh,g)}):V(Jh,g)}else V(Eh,new zh(b,d,c,e))}else Fk(this,a)};
k.Da=function(a){this.N(a.b,this.Ha,!0)};
k.Ca=function(a){this.N(a.b,this.Ha,!1)};
k.zb=function(a){this.N(a.b,this.Ia,!0,a.f)};
k.Ab=function(a){this.N(a.b,this.Ia,!1)};
k.yb=function(a){this.N(a.b,this.ab)};
k.xb=function(a){this.N(a.b,this.Za)};
k.Ia=function(a,b,c){b?(Bg(a,"is-subscribed","true"),c&&Bg(a,"subscription-id",c),this.i(a,"show-unsub-confirm-dialog")&&(b=new Ne,Bg(a,"subscribed-timestamp",(b.getTime()/1E3).toString()))):(Eg(a,"is-subscribed"),Eg(a,"subscribed-timestamp"),Eg(a,"subscription-id"));Gk(this,a)};
function Dk(a,b){if(!a.i(b,"ypc-enabled"))return null;var c=a.i(b,"ypc-item-type"),d=a.i(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
k.Ha=function(a,b){var c=H(a,"yt-uix-button-subscription-container");Te(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Gk(a,b){var c=a.i(b,"style-type"),d=!!a.i(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Te(b,"yt-uix-button-subscribe"+c,!d);Te(b,e,d);a.i(b,"subscriber-count-tooltip")&&!a.i(b,"subscriber-count-show-when-subscribed")&&(c=X(Yh.v()),Te(b,c,!d),b.title=d?"":a.i(b,"subscriber-count-title"));d?Q(function(){M(b,"hover-enabled")},1E3):N(b,"hover-enabled")}
k.ab=function(a){var b=!!this.i(a,"ypc-item-type"),c=!!this.i(a,"ypc-item-id");!this.i(a,"ypc-enabled")&&b&&c&&(M(a,"ypc-enabled"),Bg(a,"ypc-enabled","true"))};
k.Za=function(a){this.i(a,"ypc-enabled")&&(N(a,"ypc-enabled"),Eg(a,"ypc-enabled"))};
function Hk(a,b){return Na(wc(X(a)),function(a){return b==this.i(a,"channel-external-id")},a)}
k.Xa=function(a,b,c){var d=Xa(arguments,2);B(a,function(a){b.apply(this,Ta(a,d))},this)};
k.N=function(a,b,c){var d=Hk(this,a);this.Xa.apply(this,Ta([d],Xa(arguments,1)))};
function Fk(a,b){var c=w(function(a){a.discoverable_subscriptions&&og("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ga(b)},a);
fi(c)}
function Ek(a,b){if(!a.i(b,"show-unsub-confirm-dialog"))return!1;var c=a.i(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.i(b,"subscribed-timestamp"),10),(new Ne).getTime()<1E3*(c+600))?!0:!1}
;function Ik(a){this.b=a;this.F=null;P("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Jk(this),W(this.b,"mouseover",w(this.j,this)),W(this.b,"mouseout",w(this.aa,this)),W(this.b,"click",w(this.aa,this)),Qg(Hh,Ia(this.f,!0),this),Qg(Mh,Ia(this.f,!1),this),Kk(this))}
function Jk(a){var b={url:P("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=w(a.g,a);vh().open(b,a)}
function Kk(a){Bk()||xg("LOGGED_IN",function(){this.F&&(this.aa(),this.F.close(),this.F=null,Jk(this))},a)}
Ik.prototype.g=function(a){this.F=a;a=Ck.v().isSubscribed(this.b);this.f(a)};
Ik.prototype.j=function(){this.F&&this.F.restyle({show:!0})};
Ik.prototype.aa=function(){this.F&&this.F.restyle({show:!1})};
Ik.prototype.f=function(a){if(this.F){a={isSubscribed:a};try{this.F.send("msg-hovercard-subscription",a,void 0,u("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Lk(){uh(function(){var a=nd(F("yt-subscribe"));a={width:a.width,height:a.height};var b=Mk;vh().ready(a,null,b)})}
function Mk(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=F("yt-subscribe"),c=Ck.v();if(b=G(X(c),b))a&&(Ck.v(),Bg(b,"parent-url",a)),new Ik(b)}}
;function Nk(a){S.call(this,1,arguments);this.b=a}
y(Nk,S);function Ok(a,b){S.call(this,2,arguments);this.f=a;this.b=b}
y(Ok,S);function Pk(a,b,c,d){S.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Pk,S);function Qk(a,b){S.call(this,1,arguments);this.f=a;this.b=b||null}
y(Qk,S);function Rk(a){S.call(this,1,arguments)}
y(Rk,S);var Sk=new T("ypc-core-load",Nk),Tk=new T("ypc-guide-sync-success",Ok),Uk=new T("ypc-purchase-success",Pk),Vk=new T("ypc-subscription-cancel",Rk),Wk=new T("ypc-subscription-cancel-success",Qk),Xk=new T("ypc-init-subscription",Rk);var Yk=!1,Zk=[];function $k(a){a.b?Yk?V(Ih,a):V(Sk,new Nk(function(){V(Xk,new Rk(a.b))})):al(a.f,a.j,a.g,a.source)}
function bl(a){a.b?Yk?V(Nh,a):V(Sk,new Nk(function(){V(Vk,new Rk(a.b))})):cl(a.f,a.l,a.j,a.g,a.source)}
function dl(a){el(Ua(a.b))}
function fl(a){gl(Ua(a.b))}
function hl(a){il(a.g,a.f,a.b)}
function jl(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&V(Hh,new Ah(b,c,a.b.channelInfo))}
function kl(a){var b=a.b;ib(a.f,function(a,d){V(Hh,new Ah(d,a,b[d]))})}
function ll(a){V(Mh,new xh(a.f.itemId));a.b&&a.b.length&&(ml(a.b,Mh),ml(a.b,Oh))}
function al(a,b,c,d){var e=new xh(a);V(Fh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=P("PLAYBACK_ID"))&&(c.plid=d);(d=P("EVENT_ID"))&&(c.ei=d);b&&nl(b,c);Oi("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:f,G:c,onSuccess:function(b,c){var d=c.response;V(Hh,new Ah(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
R:function(){V(Gh,e)}})}
function cl(a,b,c,d,e){var f=new xh(a);V(Kh,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=P("PLAYBACK_ID"))&&(d.plid=a);(a=P("EVENT_ID"))&&(d.ei=a);c&&nl(c,d);Oi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,G:d,onSuccess:function(){V(Mh,f)},
R:function(){V(Lh,f)}})}
function il(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new yh(a,b,c);Oi("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",G:d,onError:function(){V(Sh,e)},
onSuccess:function(){V(Rh,e)}})}}
function el(a){if(a.length){var b=Wa(a,0,40);V("subscription-batch-subscribe-loading");ml(b,Fh);var c={};c.a=b.join(",");var d=function(){V("subscription-batch-subscribe-loaded");ml(b,Gh)};
Oi("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",G:c,onSuccess:function(c,f){d();var e=f.response,h=e.id;if(za(h)&&h.length==b.length){var l=e.channel_info_map;B(h,function(a,c){var d=b[c];V(Hh,new Ah(d,a,l[d]))});
a.length?el(a):V("subscription-batch-subscribe-finished")}},
onError:function(){d();V("subscription-batch-subscribe-failure")}})}}
function gl(a){if(a.length){var b=Wa(a,0,40);V("subscription-batch-unsubscribe-loading");ml(b,Kh);var c={};c.c=b.join(",");var d=function(){V("subscription-batch-unsubscribe-loaded");ml(b,Lh)};
Oi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",G:c,onSuccess:function(){d();ml(b,Mh);a.length&&gl(a)},
onError:function(){d()}})}}
function ml(a,b){B(a,function(a){V(b,new xh(a))})}
function nl(a,b){var c=sh(a),d;for(d in c)b[d]=c[d]}
;x("yt.setConfig",og);x("yt.config.set",og);x("ytbin.www.subscribeembed.init",function(){Yk=!0;Zk.push(Qg(Eh,$k),Qg(Jh,bl));Yk||Zk.push(Qg(Ih,$k),Qg(Nh,bl),Qg(Ch,dl),Qg(Dh,fl),Qg(Qh,hl),Qg(Uk,jl),Qg(Wk,ll),Qg(Tk,kl));var a=Ck.v(),b=X(a);b in qh||(a.register(),nh(a,"yt-uix-init-"+b,a.init),nh(a,"yt-uix-dispose-"+b,a.dispose),qh[b]=a);Lk()});}).call(this);
