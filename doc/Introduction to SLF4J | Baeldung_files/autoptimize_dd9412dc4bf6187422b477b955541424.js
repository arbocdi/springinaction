(function($){function lazy_load_big_menu(){var bico=jQuery('.big-nav-icon a');if(bico.hasClass('menu-not-loaded')){bico.removeClass('menu-not-loaded');var s=document.createElement("link");s.rel="stylesheet";s.href="/wp-content/plugins/baeldung-menu/css/menu-core.css?v="+bigmenu_settings.version;$("head").append(s);$.ajaxSetup({'cache':true});$.getScript('/wp-content/plugins/baeldung-menu/cache/menu-cache.js?v='+bigmenu_settings.version);$.getScript('/wp-content/plugins/baeldung-menu/js/tracking.js?v='+bigmenu_settings.version);bico.removeClass('menu-not-loaded');}}
window.toggle_big_menu=function(justClose){if(justClose&&$('#big-nav').hasClass('inactive')){return;}
$('#big-nav').toggleClass('inactive');$('body').toggleClass('no-scroll big-menu-active');$('.big-nav-icon a').toggleClass('active');lazy_load_big_menu();}
window.moveNavItemsToMobileNav=function(){if((window.innerWidth<944)){if(jQuery('#mobile-nav-container ul li').length==0){jQuery('#menu-main-menu > li:not(".nav--logo"):not(".big-nav-icon"):not(".menu-search")').appendTo(jQuery('#mobile-nav-container ul'));}}else{if(jQuery('#mobile-nav-container ul li').length>0){jQuery('#mobile-nav-container ul > li.nav--menu_item').insertAfter(jQuery('#menu-main-menu .nav--logo'));}}}
jQuery(window).on('resize orientationchange',function(){moveNavItemsToMobileNav()});$(document).ready(function(){function svginit_bignav_icon(){BigNavIcon=new Vivus('BigNavIcon',{type:'delayed',duration:30,start:'autostart'});document.getElementById('BigNavIcon').onmouseenter=function(){BigNavIcon.reset().play();};}
document.addEventListener("ready-to-animate-svg",svginit_bignav_icon);$('.big-nav-icon').mouseenter(function(){BigNavIcon.reset().play();});$('.big-nav-icon a').click(function(e){e.preventDefault();toggle_big_menu(false);});$('.menu-search a').click(function(e){e.preventDefault();toggle_big_menu(false);if(!$('#big-nav #search').length==0){$('#search').focus();}else{$('.big-nav-icon a').addClass('focus-search-after-load');}});setTimeout(function(){lazy_load_big_menu();},bigmenu_settings.loading_delay);});$(document).on('keyup',function(evt){if(evt.keyCode==27){toggle_big_menu(true);}});})(jQuery);if(typeof jQuery!=='undefined'){(function($){$('document').ready(function(){$('.login-input').bind('keyup',function(event){if(event.which===13){$('.aam-login-submit').trigger('click');}});$('.aam-login-submit').each(function(){$(this).bind('click',function(){var button=$(this);var prefix=$(this).data('prefix');var log=$.trim($('#'+prefix+'log').val());var pwd=$('#'+prefix+'pwd').val();if(log&&pwd){$('#'+prefix+'error').css('display','none');$.ajax(aamLocal.ajaxurl,{data:{log:log,pwd:pwd,action:'aamlogin',redirect:$('#'+prefix+'redirect').val(),rememberme:($('#'+prefix+'rememberme').prop('checked')?1:0)},dataType:'json',type:'POST',beforeSend:function(){button.attr({disabled:'disabled','data-original-label':button.val()}).val('Wait...');},success:function(response){if(response.status==="success"){if(response.redirect){location.href=response.redirect;}}else{$('#'+prefix+'error').html(response.reason).css('display','block');}},error:function(){$('#'+prefix+'error').html('<strong>ERROR:</strong> Unexpected error.').css('display','block');},complete:function(){button.attr({disabled:null}).val(button.attr('data-original-label'));}});}else{$('#'+prefix+'error').html('<strong>ERROR:</strong> Username and password are required.').css('display','block');}});});});})(jQuery);}else{console.log('AAM requires jQuery library in order for login widget to work');};jQuery.cookie=function(key,value,options){if(arguments.length>1&&String(value)!=="[object Object]"){options=jQuery.extend({},options);if(value===null||value===undefined){options.expires=-1;}
if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}
value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
options=value||{};var result,decode=options.raw?function(s){return s;}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null;};function addTwitterBSClass(a){var b=jQuery(a).attr("title");if(b){var c=b.split(" ");if(c[0]){var d=parseInt(c[0]);d>0&&jQuery(a).addClass("label label-default"),2==d&&jQuery(a).addClass("label label-info"),d>2&&d<4&&jQuery(a).addClass("label label-success"),d>=5&&d<10&&jQuery(a).addClass("label label-warning"),d>=10&&jQuery(a).addClass("label label-important")}}else jQuery(a).addClass("label");return!0}function debounce(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)};c&&!d&&a.apply(e,f),clearTimeout(d),d=setTimeout(g,b)}}+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"))&&b.transitioning)){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return e.call(this);this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),function(a,b){"use strict";var c=function(){function c(a){c.instanceCounter++,this.init(a)}var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xlink",J=["sprite"];return f=[],c.instanceCounter=0,c.prototype.init=function(c){c=c||{},d={},i={},i.isLocal="file:"===a.location.protocol,i.hasSvgSupport=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),e={count:0,elements:[]},g={},h={},h.evalScripts=c.evalScripts||"always",h.pngFallback=c.pngFallback||!1,h.svgFallbackDir=c.svgFallbackDir||!1,h.onlyInjectVisiblePart=c.onlyInjectVisiblePart||!0,h.keepStylesClass=void 0===c.keepStylesClass?"":c.keepStylesClass,h.spriteClassName=void 0===c.spriteClassName?"sprite":c.spriteClassName,h.spriteClassIdName=void 0===c.spriteClassIdName?"sprite--":c.spriteClassIdName,h.removeStylesClass=void 0===c.removeStylesClass?"icon":c.removeStylesClass,h.removeAllStyles=void 0!==c.removeAllStyles&&c.removeAllStyles,h.fallbackClassName=void 0===c.fallbackClassName?J:c.fallbackClassName,h.prefixStyleTags=void 0===c.prefixStyleTags||c.prefixStyleTags,h.spritesheetURL=void 0!==c.spritesheetURL&&""!==c.spritesheetURL&&c.spritesheetURL,h.prefixFragIdClass=h.spriteClassIdName,h.forceFallbacks=void 0!==c.forceFallbacks&&c.forceFallbacks,h.forceFallbacks&&(i.hasSvgSupport=!1),x(b.querySelector("html"),"no-svg",i.hasSvgSupport),i.hasSvgSupport&&void 0===c.removeStylesClass&&w(h.removeStylesClass)},c.prototype.inject=function(a,b,c){if(void 0!==a.length){var d=0,e=this;D.call(a,function(f){e.injectElement(f,function(e){c&&"function"==typeof c&&c(e),b&&a.length===++d&&b(d)})})}else a?this.injectElement(a,function(d){c&&"function"==typeof c&&c(d),b&&b(1),a=null}):b&&b(0)},G=c.prototype.injectElement=function(a,b){var c,d=a.getAttribute("data-src")||a.getAttribute("src");if(!d){if(!h.spritesheetURL)return;if(""===(c=r(a)))return;d=h.spritesheetURL+"#"+c}a.setAttribute("data-src",d);var f=d.split("#");1===f.length&&f.push("");var g;if(!/\.svg/i.test(d))return void b("Attempted to inject a file with a non-svg extension: "+d);if(!i.hasSvgSupport){var l=a.getAttribute("data-fallback")||a.getAttribute("data-png");return void(l?(a.setAttribute("src",l),b(null)):h.pngFallback?(f.length>1&&f[1]?(g=f[1]+".png",B(h.fallbackClassName)?j(a,f[1],h.fallbackClassName):A(h.fallbackClassName)?h.fallbackClassName(a,f[1]):"string"==typeof h.fallbackClassName?C(a,h.fallbackClassName):a.setAttribute("src",h.pngFallback+"/"+g)):(g=d.split("/").pop().replace(".svg",".png"),a.setAttribute("src",h.pngFallback+"/"+g)),b(null)):b("This browser does not support SVG and no PNG fallback was defined."))}if(B(h.fallbackClassName)&&k(a,f[1],h.fallbackClassName),-1!==e.elements.indexOf(a))return void console.warn("race",a);e.elements.push(a),v(b,d,a)},c.prototype.getEnv=function(){return i},c.prototype.getConfig=function(){return h},j=function(a,b,c){var d=void 0===c?J:c.slice(0);D.call(d,function(a,c){d[c]=a.replace("%s",b)}),C(a,d)},k=function(a,b,c){c=void 0===c?J.slice(0):c.slice(0);var d,e,f=a.getAttribute("class");void 0!==f&&null!==f&&(e=f.split(" "))&&(D.call(c,function(a){a=a.replace("%s",b),(d=e.indexOf(a))>=0&&(e[d]="")}),a.setAttribute("class",z(e.join(" "))))},m=function(a,b,c,d){var e=0;return a.textContent=a.textContent.replace(/url\(('|")*#.+('|")*(?=\))/g,function(a){return e++,a+"-"+b}),e},l=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=[{def:"linearGradient",attrs:["fill","stroke"]},{def:"radialGradient",attrs:["fill","stroke"]},{def:"clipPath",attrs:["clip-path"]},{def:"mask",attrs:["mask"]},{def:"filter",attrs:["filter"]},{def:"color-profile",attrs:["color-profile"]},{def:"cursor",attrs:["cursor"]},{def:"marker",attrs:["marker","marker-start","marker-mid","marker-end"]}];D.call(s,function(s){for(d=a.querySelectorAll(s.def+"[id]"),f=0,e=d.length;f<e;f++){for(c=d[f].id+"-"+b,j=s.attrs,l=0,k=j.length;l<k;l++)for(g=a.querySelectorAll("["+j[l]+'="url(#'+d[f].id+')"]'),i=0,h=g.length;i<h;i++)g[i].setAttribute(j[l],"url(#"+c+")");for(m=a.querySelectorAll("[*|href]"),p=[],o=0,n=m.length;o<n;o++)m[o].getAttributeNS(I,"href").toString()==="#"+d[f].id&&p.push(m[o]);for(r=0,q=p.length;r<q;r++)p[r].setAttributeNS(I,"href","#"+c);d[f].id=c}})},n=function(a,b,c){var d;void 0===c&&(c=["id","viewBox"]);for(var e=0;e<a.attributes.length;e++)d=a.attributes.item(e),c.indexOf(d.name)<0&&b.setAttribute(d.name,d.value)},o=function(a){var c=b.createElementNS(H,"svg");return D.call(a.childNodes,function(a){c.appendChild(a.cloneNode(!0))}),n(a,c),c},p=function(a,b,c){var d,e,f,g,h,i,j=c.getAttribute("data-src").split("#"),k=a.textContent,l="",m=function(a,b,c){c[b]="."+f+" "+a};if(j.length>1)e=j[1],f=e+"-"+b,d=new RegExp("\\."+e+" ","g"),a.textContent=k.replace(d,"."+f+" ");else{for(g=j[0].split("/"),f=g[g.length-1].replace(".svg","")+"-"+b,d=new RegExp("([\\s\\S]*?){([\\s\\S]*?)}","g");null!==(h=d.exec(k));){i=h[1].trim().split(", "),i.forEach(m);l+=i.join(", ")+"{"+h[2]+"}\n"}a.textContent=l}c.setAttribute("class",c.getAttribute("class")+" "+f)},q=function(a){var b=a.getAttribute("class");return b?b.trim().split(" "):[]},r=function(a){var b=q(a),c="";return D.call(b,function(a){a.indexOf(h.spriteClassIdName)>=0&&(c=a.replace(h.spriteClassIdName,""))}),c},s=function(a,b,c){var d,e,f,g,h,i,j=null,k=!1,l=!1,m=null;if(void 0===c)d=j=b.cloneNode(!0),j.getAttribute("width")||b.getAttribute("width")||(l=!0);else if(!(d=b.getElementById(c)))return void console.warn(c+" not found in svg");if(f=d.getAttribute("viewBox"),e=f.split(" "),!j){if(d instanceof SVGSymbolElement)j=o(d),l=k=!0;else if(d instanceof SVGViewElement){if(m=null,a.onlyInjectVisiblePart){var n='*[width="'+e[2]+'"][height="'+e[3]+'"]';g={},0===Math.abs(parseInt(e[0]))?n+=":not([x])":(g.x=e[0],n+='[x="'+e[0]+'"]'),0===Math.abs(parseInt(e[1]))?n+=":not([y])":(g.y=e[1],n+='[y="'+e[1]+'"]'),i=b.querySelectorAll(n),i.length>1&&console.warn("more than one item, with the matching viewbox found!",i),m=i[0]}if(m&&m instanceof SVGSVGElement){j=m.cloneNode(!0);for(var p in g)"width"!==p&&"height"!==p&&j.removeAttribute(p)}else if(m&&m instanceof SVGUseElement){var r=b.getElementById(m.getAttributeNS(I,"href").substr(1));j=o(r),f=r.getAttribute("viewBox"),e=f.split(" "),l=k=!0}else console.info((a.onlyInjectVisiblePart?"symbol referenced via view"+c+" not found":"option.onlyInjectVisiblePart: false")+" -> clone complete svg!"),l=k=!0,j=b.cloneNode(!0)}h=q(j);var s=a.prefixFragIdClass+c;h.indexOf(s)<0&&(h.push(s),j.setAttribute("class",h.join(" ")))}return k&&j.setAttribute("viewBox",e.join(" ")),l&&(j.setAttribute("width",e[2]+"px"),j.setAttribute("height",e[3]+"px")),j.setAttribute("xmlns",H),j.setAttribute("xmlns:xlink",I),j},t=function(a,b,c,d){f[a]=f[a]||[],f[a].push({callback:c,fragmentId:b,element:d,name:name})},u=function(a){for(var b,c=0,d=f[a].length;c<d;c++)!function(c){setTimeout(function(){b=f[a][c],y(a,b.fragmentId,b.callback,b.element,b.name)},0)}(c)},v=function(b,c,e){var f,g,h,j,k;if(f=c.split("#"),g=f[0],h=2===f.length?f[1]:void 0,void 0!==h&&(k=g.split("/"),j=k[k.length-1].replace(".svg","")),void 0!==d[g])d[g]instanceof SVGSVGElement?y(g,h,b,e,j):t(g,h,b,e,j);else{if(!a.XMLHttpRequest)return b("Browser does not support XMLHttpRequest"),!1;d[g]={},t(g,h,b,e,j);var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState){if(404===l.status||null===l.responseXML)return b("Unable to load SVG file: "+g),!1;if(!(200===l.status||i.isLocal&&0===l.status))return b("There was a problem injecting the SVG: "+l.status+" "+l.statusText),!1;if(l.responseXML instanceof Document)d[g]=l.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var a;try{var e=new DOMParser;a=e.parseFromString(l.responseText,"text/xml")}catch(b){a=void 0}if(!a||a.getElementsByTagName("parsererror").length)return b("Unable to parse SVG file: "+c),!1;d[g]=a.documentElement}u(g)}},l.open("GET",g),l.overrideMimeType&&l.overrideMimeType("text/xml"),l.send()}},w=function(a){var c="svg."+a+" {fill: currentColor;}",d=b.head||b.getElementsByTagName("head")[0],e=b.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=c:e.appendChild(b.createTextNode(c)),d.appendChild(e)},x=function(a,b,c){c?a.className.replace(b,""):a.className+=" "+b},y=function(b,c,f,i,j){var k,o,r,t,u,v,w,x;if(void 0===(k=s(h,d[b],c))||"string"==typeof k)return u=i.getAttribute("data-fallback-svg"),u=!(!u&&!h.svgFallbackDir)&&h.svgFallbackDir+"/"+c+".svg",u?(i.setAttribute("data-src",u),e.elements.splice(e.elements.indexOf(i),1),G(i,f)):f(k),!1;k.setAttribute("role","img"),D.call(k.children||[],function(a){a instanceof SVGDefsElement||a instanceof SVGTitleElement||a instanceof SVGDescElement||a.setAttribute("role","presentation")}),t=i.getAttribute("aria-hidden")||k.getAttribute("aria-hidden"),t?(k.setAttribute("aria-hidden","true"),w=k.querySelector("title"),x=k.querySelector("desc"),w&&k.removeChild(w),x&&k.removeChild(x)):(r=E("desc",k,i,c,!1),o=E("title",k,i,c,!1),(r.length>0||o.length>0)&&(v=o+" "+r,k.setAttribute("aria-labelledby",v.trim()))),n(i,k,["class"]);var y=[].concat(k.getAttribute("class")||[],"injected-svg",i.getAttribute("class")||[]).join(" ");k.setAttribute("class",z(y)),l(k,e.count,j),k.removeAttribute("xmlns:a");for(var A,B,C=k.querySelectorAll("script"),F=[],H=0,I=C.length;H<I;H++)(B=C[H].getAttribute("type"))&&"application/ecmascript"!==B&&"application/javascript"!==B||(A=C[H].innerText||C[H].textContent,F.push(A),k.removeChild(C[H]));if(F.length>0&&("always"===h.evalScripts||"once"===h.evalScripts&&!g[b])){for(var J=0,K=F.length;J<K;J++)new Function(F[J])(a);g[b]=!0}var L=k.querySelectorAll("style");D.call(L,function(a){var b=q(k),c=!0;(b.indexOf(h.removeStylesClass)>=0||h.removeAllStyles)&&b.indexOf(h.keepStylesClass)<0?a.parentNode.removeChild(a):(m(a,e.count,k,j)>0&&(c=!1),h.prefixStyleTags&&(p(a,e.count,k,j),c=!1),c&&(a.textContent+=""))}),i.parentNode&&i.parentNode.replaceChild(k,i),delete e.elements[e.elements.indexOf(i)],e.count++,f(k)},z=function(a){a=a.split(" ");for(var b={},c=a.length,d=[];c--;)b.hasOwnProperty(a[c])||(b[a[c]]=1,d.unshift(a[c]));return d.join(" ")},A=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},B=function(a){return"[object Array]"===Object.prototype.toString.call(a)},C=function(a,b){var c=a.getAttribute("class");c=c||"",B(b)&&(b=b.join(" ")),b=c+" "+b,a.setAttribute("class",z(b))},D=Array.prototype.forEach||function(a,b){if(void 0===this||null===this||"function"!=typeof a)throw new TypeError;var c,d=this.length>>>0;for(c=0;c<d;++c)c in this&&a.call(b,this[c],c,this)},E=function(a,b,c,d,f){var g,h=d?d+"-":"";return h+=a+"-"+e.count,g=c.querySelector(a),g?F(a,b,g.textContent,h,b.firstChild):(g=b.querySelector(a),g?g.setAttribute("id",h):f?(console.log("add default"),F(a,b,d,h,b.firstChild)):h=""),h},F=function(a,c,d,e,f){var g,h=c.querySelector(a);return g=b.createElementNS(H,a),g.appendChild(b.createTextNode(d)),g.setAttribute("id",e),c.insertBefore(g,f),h&&h.parentNode.removeChild(h),g},c}();"object"==typeof angular?angular.module("svginjector",[]).provider("svgInjectorOptions",function(){var a={};return{set:function(b){a=b},$get:function(){return a}}}).factory("svgInjectorFactory",["svgInjectorOptions",function(a){return new c(a)}]).directive("svg",["svgInjectorFactory",function(a){var b=a.getConfig();return{restrict:"E",link:function(c,d,e){e.class&&e.class.indexOf(b.spriteClassIdName)>=0?e.$observe("class",function(){a.inject(d[0])}):(e.dataSrc||e.src)&&a.inject(d[0])}}}]):"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.SVGInjector=c)}(window,document);var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(a){if((!document.all||window.opera||window.XDomainRequest?0:1)&&document.getElementsByTagName){for(var b=imgSizer,c=b.Config.imgCache,d=a&&a.length?a:document.getElementsByTagName("img"),e=0;e<d.length;e++)d[e].origWidth=d[e].offsetWidth,d[e].origHeight=d[e].offsetHeight,c.push(d[e]),b.ieAlpha(d[e]),d[e].style.width="100%";c.length&&b.resize(function(){for(var a=0;a<c.length;a++){var b=c[a].offsetWidth/c[a].origWidth;c[a].style.height=c[a].origHeight*b+"px"}})}},ieAlpha:function(a){var b=imgSizer;a.oldSrc&&(a.src=a.oldSrc);var c=a.src;a.style.width=a.offsetWidth+"px",a.style.height=a.offsetHeight+"px",a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+c+"', sizingMethod='scale')",a.oldSrc=c,a.src=b.Config.spacer},resize:function(a){var b=window.onresize;"function"!=typeof window.onresize?window.onresize=a:window.onresize=function(){b&&b(),a()}}};jQuery(document).ready(function(a){a("#tag-cloud a").each(function(){return addTwitterBSClass(this),!0}),a("p.tags a").each(function(){return addTwitterBSClass(this),!0}),a("ol.commentlist a.comment-reply-link").each(function(){return a(this).addClass("btn btn-success btn-mini"),!0}),a("#cancel-comment-reply-link").each(function(){return a(this).addClass("btn btn-danger btn-mini"),!0}),a("[placeholder]").parents("form").submit(function(){a(this).find("[placeholder]").each(function(){var b=a(this);b.val()===b.attr("placeholder")&&b.val("")})})}),function(a,b){var c=b.createEvent("Event");c.initEvent("ready-to-animate-svg",!0,!0);var d={evalScripts:"once"};new SVGInjector(d).inject(b.querySelectorAll("svg[data-src]"),function(a){b.dispatchEvent(c)})}(window,document),function(a){var b=debounce(function(){var b=0;a('div.tve-leads-ribbon[data-position="top"]:visible').each(function(){"0"!==a(this).css("opacity")&&(b+=a(this).outerHeight())}),a("body").attr("style","transition: margin .3s ease-out; margin-top: "+b+"px !important")},100),c=function(){a(".sticky-widgets").each(function(){var b=a(this),c=b.closest("#content"),d=b.data("top_gutter")?b.data("top_gutter"):0,e=b.data("bottom_gutter")?b.data("bottom_gutter"):0,f=parseInt(c.css("padding-top")),g=c.outerHeight()-d-f-e,h=f+a(document).scrollTop(),i=h+b.outerHeight(),j=g-b.outerHeight()-f;b.css({"will-change":"transform"}),window.outerWidth>="1200"&&(h>f&&i<g?b.css({position:"fixed",transform:"translate3d(0, "+d+"px, 0)"}):i>=g?b.css({position:"absolute",transform:"translate3d(0, "+(j+d)+"px, 0)"}):h<=f&&b.css({position:"static",transform:"translate3d(0, "+d+"px, 0)"}))})};a(window).on("resize",b),a(window).on("scroll",c),a(window).on("load",function(){a(window).trigger("resize"),a(window).trigger("scroll")})}(jQuery);/*! Thrive Dashboard - 2019-01-17
* http://www.thrivethemes.com/
* Copyright (c) 2019 Thrive Themes */var TVE_Dash=TVE_Dash||{};if(!ThriveGlobal||!ThriveGlobal.$j){var __thrive_$oJ=window.$,ThriveGlobal={$j:jQuery.noConflict()};__thrive_$oJ&&(window.$=__thrive_$oJ)}!function(a){TVE_Dash.ajax_sent=!1;var b={},c={};TVE_Dash.add_load_item=function(d,e,f){if("function"!=typeof f&&(f=a.noop),TVE_Dash.ajax_sent){var g={},h={};return g[d]=e,h[d]=f,this.send_ajax(g,h),!0}return e?(b[d]&&console.error&&console.error(d+" ajax action already defined"),b[d]=e,c[d]=f,!0):(console.error&&console.error("missing ajax data"),!1)},TVE_Dash.ajax_load_css=function(b){a.each(b,function(b,c){b+="-css",a("link#"+b).length||a('<link rel="stylesheet" id="'+b+'" type="text/css" href="'+c+'"/>').appendTo("head")})},TVE_Dash.ajax_load_js=function(b){var c=document.body;a.each(b,function(d,e){if(-1!==d.indexOf("_before"))return!0;var f=document.createElement("script");if(b[d+"_before"]){a('<script type="text/javascript">'+b[d+"_before"]+"</script>").after(c.lastChild)}d&&(f.id=d+"-script"),f.src=e,c.appendChild(f)})},TVE_Dash.send_ajax=function(b,c){a.ajax({url:tve_dash_front.ajaxurl,xhrFields:{withCredentials:!0},data:{action:"tve_dash_front_ajax",tve_dash_data:b},dataType:"json",type:"post"}).done(function(b){b&&a.isPlainObject(b)&&(b.__resources&&(b.__resources.css&&TVE_Dash.ajax_load_css(b.__resources.css),b.__resources.js&&TVE_Dash.ajax_load_js(b.__resources.js),delete b.__resources),a.each(b,function(a,b){if("function"!=typeof c[a])return!0;c[a].call(null,b)}))})},a(function(){setTimeout(function(){var d=new a.Event("tve-dash.load");return a(document).trigger(d),!a.isEmptyObject(b)&&(!(!tve_dash_front.force_ajax_send&&tve_dash_front.is_crawler)&&(TVE_Dash.send_ajax(b,c),void(TVE_Dash.ajax_sent=!0)))})})}(ThriveGlobal.$j);"use strict";!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}t.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},t.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+a,e},t.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(0>o?s:o,0),i/2),s=Math.min(Math.max(0>s?o:s,0),a/2),e.d="M "+(r+o)+","+n+" L "+(r+i-o)+","+n+" A "+o+","+s+",0,0,1,"+(r+i)+","+(n+s)+" L "+(r+i)+","+(n+a-s)+" A "+o+","+s+",0,0,1,"+(r+i-o)+","+(n+a)+" L "+(r+o)+","+(n+a)+" A "+o+","+s+",0,0,1,"+r+","+(n+a-s)+" L "+r+","+(n+s)+" A "+o+","+s+",0,0,1,"+(r+o)+","+n}else e.d="M"+r+" "+n+" L"+(r+i)+" "+n+" L"+(r+i)+" "+(n+a)+" L"+r+" "+(n+a)+" Z";return e},t.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},t.prototype.polygonToPath=function(e){var r=t.prototype.polylineToPath(e);return r.d+="Z",r},t.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-r,s=a,h=parseFloat(i)+parseFloat(r),l=a;return e.d="M"+o+","+s+"A"+r+","+n+" 0,1,1 "+h+","+l+"A"+r+","+n+" 0,1,1 "+o+","+l,e},t.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-r,o=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+a+","+o+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+a+","+h,e},t.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},t.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var r,n,i,a;e.LINEAR=function(t){return t},e.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},e.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},e.EASE_IN=function(t){return Math.pow(t,3)},e.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},e.prototype.setElement=function(t,e){var r,n;if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var n=this;r=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var r=t.querySelector("svg");if(!r)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+e.file);n.el=r,n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%"),n.parentEl.appendChild(n.el),n.isReady=!0,n.init(),n=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",r),i.open("GET",e.file),i.send(),void 0}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:n=this,r=function(e){if(!n.isReady){if(n.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!n.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.el&&(t.getAttribute("built-by-vivus")&&(n.parentEl.insertBefore(n.el,t),n.parentEl.removeChild(t),n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%")),n.isReady=!0,n.init(),n=null)}},r()||t.addEventListener("load",r);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},e.prototype.setOptions=function(t){var r=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===r.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||r[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=a(t.duration,120),this.delay=a(t.delay,null),this.dashGap=a(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||e.LINEAR,this.pathTimingFunction=t.pathTimingFunction||e.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,r,n,i,o,s,h;for(h=o=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,o+=i.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=s/o*this.duration,i.duration=i.length/o*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=h+(a(n["data-delay"],this.delayUnit)||0),i.duration=a(n["data-duration"],this.duration),h=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=a(n["data-start"],this.delayUnit)||0,i.duration=a(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}s+=i.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),this.handle=n(function(){t.drawer()}),void 0;this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},e.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},e.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new t(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},e.prototype.reset=function(){return this.setFrameProgress(0)},e.prototype.finish=function(){return this.setFrameProgress(1)},e.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},e.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(i(this.handle),this.handle=null),this},e.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},e.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},e.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){e.prototype.docElem||(e.prototype.docElem=window.document.documentElement,n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),i=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},a=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return e}):"object"==typeof exports?module.exports=e:window.Vivus=e}();jQuery(document).ready(function(a){"use strict";getTemplateUrl.templateUrl;a("#menu-main-menu").each(function(){var b,c=-1,d=a(this),e=".nav--menu_item",f=d.children(e),g=function(a){f.eq(a).find(".nav--menu_item_withDropdown").addClass("nav--menu_item_anchor_active"),f.eq(a).find(".nav--dropdown").fadeIn(20),c=a},h=function(a){b=!1,f.eq(a).find(".nav--menu_item_withDropdown").removeClass("nav--menu_item_anchor_active"),f.eq(a).find(".nav--dropdown").fadeOut(20),c=-1};f.hover(function(d){window.outerWidth>943&&(d.preventDefault(),b&&clearTimeout(b),a(this).index(e)!==c&&(-1!==c&&h(c),g(a(this).index(e))))},function(a){window.outerWidth>943&&(a.preventDefault(),b=setTimeout(function(){h(c)},300))})}),a(".nav--menu_item_withDropdown").click(function(){if(window.outerWidth<=943){var b=a(this).next(".nav--dropdown"),c="nav--menu_item_anchor_active";b.is(":visible")?(b.hide(),a(this).removeClass(c)):(a("."+c).removeClass(c).next(".nav--dropdown").hide(),b.show(),a(this).addClass(c))}}),a(".menu-mobile").click(function(){window.outerWidth<=943&&a(this).toggleClass("menu-mobile-open")}),a(window).resize(function(){window.outerWidth>943&&(a(".nav--menu_item").children(".nav--dropdown").hide(),a(".nav--menu").removeClass("show-on-mobile"),a(".nav--menu_item_withDropdown").removeClass("nav--menu_item_anchor_active"))}),a(".menu-mobile").click(function(b){a(".nav--menu").toggleClass("show-on-mobile"),b.preventDefault()})});