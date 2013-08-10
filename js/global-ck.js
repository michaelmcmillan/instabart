/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */window.Modernizr=function(e,t,n){function L(e){f.cssText=e}function A(e,t){return L(p.join(e+";")+(t||""))}function O(e,t){return typeof e===t}function M(e,t){return!!~(""+e).indexOf(t)}function _(e,t){for(var r in e){var i=e[r];if(!M(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function D(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:O(s,"function")?s.bind(r||t):s}return!1}function P(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(r+" ")+r).split(" ");if(O(t,"string")||O(t,"undefined"))return _(i,t);i=(e+" "+m.join(r+" ")+r).split(" ");return D(i,t,n)}function H(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)w[n[r]]=n[r]in l;w.list&&(w.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement);return w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));i.inputtypes=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++){l.setAttribute("type",s=e[r]);i=l.type!=="text";if(i){l.value=c;l.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(s)&&l.style.WebkitAppearance!==n){o.appendChild(l);u=t.defaultView;i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0;o.removeChild(l)}else/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=l.checkValidity&&l.checkValidity()===!1:i=l.value!=c)}b[e[r]]=!!i}return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.6.2",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",v=d.split(" "),m=d.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--){f=t.createElement("div");f.id=i?i[r]:u+(r+1);c.appendChild(f)}s=["&#173;",'<style id="s',u,'">',e,"</style>"].join("");c.id=u;(h?c:p).innerHTML+=s;p.appendChild(c);if(!h){p.style.background="";p.style.overflow="hidden";l=o.style.overflow;o.style.overflow="hidden";o.appendChild(p)}a=n(c,e);if(!h){p.parentNode.removeChild(p);o.style.overflow=l}else c.parentNode.removeChild(c);return!!a},N=function(){function r(r,i){i=i||t.createElement(e[r]||"div");r="on"+r;var s=r in i;if(!s){i.setAttribute||(i=t.createElement("div"));if(i.setAttribute&&i.removeAttribute){i.setAttribute(r,"");s=O(i[r],"function");O(i[r],"undefined")||(i[r]=n);i.removeAttribute(r)}}i=null;return s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),C={}.hasOwnProperty,k;!O(C,"undefined")&&!O(C.call,"undefined")?k=function(e,t){return C.call(e,t)}:k=function(e,t){return t in e&&O(e.constructor.prototype[t],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=S.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(S.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(S.call(arguments)))};return i});y.flexbox=function(){return P("flexWrap")};y.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")};y.canvastext=function(){return!!i.canvas&&!!O(t.createElement("canvas").getContext("2d").fillText,"function")};y.webgl=function(){return!!e.WebGLRenderingContext};y.touch=function(){var n;"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:T(["@media (",p.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9});return n};y.geolocation=function(){return"geolocation"in navigator};y.postmessage=function(){return!!e.postMessage};y.websqldatabase=function(){return!!e.openDatabase};y.indexedDB=function(){return!!P("indexedDB",e)};y.hashchange=function(){return N("hashchange",e)&&(t.documentMode===n||t.documentMode>7)};y.history=function(){return!!e.history&&!!history.pushState};y.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e};y.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e};y.rgba=function(){L("background-color:rgba(150,255,150,.5)");return M(f.backgroundColor,"rgba")};y.hsla=function(){L("background-color:hsla(120,40%,100%,.5)");return M(f.backgroundColor,"rgba")||M(f.backgroundColor,"hsla")};y.multiplebgs=function(){L("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(f.background)};y.backgroundsize=function(){return P("backgroundSize")};y.borderimage=function(){return P("borderImage")};y.borderradius=function(){return P("borderRadius")};y.boxshadow=function(){return P("boxShadow")};y.textshadow=function(){return t.createElement("div").style.textShadow===""};y.opacity=function(){A("opacity:.55");return/^0.55$/.test(f.opacity)};y.cssanimations=function(){return P("animationName")};y.csscolumns=function(){return P("columnCount")};y.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";L((e+"-webkit- ".split(" ").join(t+e)+p.join(n+e)).slice(0,-e.length));return M(f.backgroundImage,"gradient")};y.cssreflections=function(){return P("boxReflect")};y.csstransforms=function(){return!!P("transform")};y.csstransforms3d=function(){var e=!!P("perspective");e&&"webkitPerspective"in o.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3});return e};y.csstransitions=function(){return P("transition")};y.fontface=function(){var e;T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0});return e};y.generatedcontent=function(){var e;T(["#",u,"{font:0/0 a}#",u,':after{content:"',c,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3});return e};y.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(r){}return n};y.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,"");n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(r){}return n};y.localstorage=function(){try{localStorage.setItem(u,u);localStorage.removeItem(u);return!0}catch(e){return!1}};y.sessionstorage=function(){try{sessionStorage.setItem(u,u);sessionStorage.removeItem(u);return!0}catch(e){return!1}};y.webworkers=function(){return!!e.Worker};y.applicationcache=function(){return!!e.applicationCache};y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect};y.inlinesvg=function(){var e=t.createElement("div");e.innerHTML="<svg/>";return(e.firstChild&&e.firstChild.namespaceURI)==g.svg};y.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS(g.svg,"animate")))};y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))};for(var B in y)if(k(y,B)){x=B.toLowerCase();i[x]=y[B]();E.push((i[x]?"":"no-")+x)}i.input||H();i.addTest=function(e,t){if(typeof e=="object")for(var r in e)k(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t;typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e);i[e]=t}return i};L("");a=l=null;(function(e,t){function l(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function h(e){var t=a[e[o]];if(!t){t={};u++;e[o]=u;a[u]=t}return t}function p(e,n,s){n||(n=t);if(f)return n.createElement(e);s||(s=h(n));var o;s.cache[e]?o=s.cache[e].cloneNode():i.test(e)?o=(s.cache[e]=s.createElem(e)).cloneNode():o=s.createElem(e);return o.canHaveChildren&&!r.test(e)?s.frag.appendChild(o):o}function d(e,n){e||(e=t);if(f)return e.createDocumentFragment();n=n||h(e);var r=n.frag.cloneNode(),i=0,s=c(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function v(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){return g.shivMethods?p(n,e,t):t.createElem(n)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(g,t.frag)}function m(e){e||(e=t);var n=h(e);g.shivCSS&&!s&&!n.hasCSS&&(n.hasCSS=!!l(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"));f||v(e,n);return e}var n=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s,o="_html5shiv",u=0,a={},f;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";s="hidden"in e;f=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){s=!0;f=!0}})();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:n.shivCSS!==!1,supportsUnknownElements:f,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:m,createElement:p,createDocumentFragment:d};e.html5=g;m(t)})(this,t);i._version=r;i._prefixes=p;i._domPrefixes=m;i._cssomPrefixes=v;i.hasEvent=N;i.testProp=function(e){return _([e])};i.testAllProps=P;i.testStyles=T;i.prefixed=function(e,t,n){return t?P(e,t,n):P(e,"pfx")};o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):"");return i}(this,this.document);(function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(e){e.fn.extend({leanModal:function(t){function i(t){e("#lean_overlay").fadeOut(200);e(t).css({display:"none"})}var n={top:100,overlay:.5,closeButton:null},r=e("<div id='lean_overlay'></div>");e("body").append(r);t=e.extend(n,t);return this.each(function(){var n=t;e(this).click(function(t){var r=e(this).attr("href");e("#lean_overlay").click(function(){i(r)});e(n.closeButton).click(function(){i(r)});var s=e(r).outerHeight(),u=e(r).outerWidth();e("#lean_overlay").css({display:"block",opacity:0});e("#lean_overlay").fadeTo(200,n.overlay);e(r).css({display:"block",position:"absolute",opacity:0,"z-index":11e3,top:n.top+"px"});e(r).fadeTo(200,1);t.preventDefault()})})}})})(jQuery);var CardCtrl=["$scope",function(e){var t={title:"Itslearning",description:"Ditt interfjes mot alle* emnene du tar ved NTNU - forelesningsfoiler, øvingsoppgaver, beskjeder, den type ting.  *I teorien iallefall.",link:"https://sats.itea.ntnu.no/sso-wrapper/web/wrapper?target=itslearning",pictogram:"itslearning",css_id:"itslearning"},n={title:"Epost",description:'NTNU-mailkontoen din bør du sjekke jevnlig. Mange foretrekker å videresende fra denne til egen mailadresse - les hvordan <a href="https://innsida.ntnu.no/wiki/-/wiki/Norsk/Slik+bruker+du+webmail#section-Slik+bruker+du+webmail-Videresende+epost+til+en+annen+konto">her</a>.',link:"https://webmail.stud.ntnu.no/",pictogram:"email",css_id:"email"},r={title:"Timeplan",description:"Denne kjekke tjenesten lager timeplanen din for deg, hvis du forteller den hvilke emner du tar. Bruk gjerne NTNU-brukernavnet ditt.",link:"http://ntnu.1024.no/",pictogram:"schedule",css_id:"schedule"},i={title:"Studweb",description:"Meld deg på (og av) emner, godkjenn studieplan, betal semesteravgift, og finn ut hvor hardt du failet på eksamen.",link:"https://idp.feide.no/simplesaml/saml2/idp/SSOService.php?SAMLRequest=fVJNj5swEL33VyD3DAbSSisrsEo3WjXSbhMtbCv1ZswATozt2iZs%2F30NJFJ6yYWDeW9m3sf68aMXwRmM5UpmKIliFIBkquayzdB7%2BRw%2BoMf809rSXmiyGVwn3%2BDPANYFG2vBOE97UtIOPZgCzJkzeH97yVDnnLYEY%2BuGGqQboYqkk0MkFWYtDysu8S%2Bo9tURmLM3qDQaFcUjxQ3wGl6V4RQFW7%2BOS%2BrmE6%2BTea2jGTTNtLzXAqYj8fRJp7%2B4KPaXkyLdaRTsthkSDISoNKvVSVPa1ae%2BaTToY9f10Ctoa6qOoj01Hm3tADtpHZUuQ2mcrML4a5g%2BlGlCkpTEq98oOBjlFFPiG5eLYYORRFHLLZG0B0scI8Xm9YWkUUyqBWTJ97I8hId9Uc4Dzl6C%2BeHRGbqVhIKf11DSKRQfk7RkEnd%2FC72mckvR9zn6IuNK%2BfANWIz2Po%2FjGI2rSJkWp3Gc4PgL9iiP%2BIzyuRZkdsrk04aeMiBXCcQu7vuVakmfO6DRFLZPeo1vyZeCTT7stgclOPsbbIRQ45MB6rw3zgyAgmdleuruq5leeB02M5Q4Q6XlvlwI58vK%2F2uc%2FwM%3D&RelayState=NTNU%26fnromgjor%3D",pictogram:"studweb",css_id:"studweb"},s={title:"Middag",description:"Hva disker din lokale SIT-kantine opp med i dag?",link:"https://www.sit.no/middag",pictogram:"dinner",css_id:"dinner"},o={title:"Campuskart",description:"Hjelp, hvor er datasalen Sprokkit? Hva er dette «kjelhuset» alle snakker om? Campusguiden viser vei! (...på Gløshaugen)",link:"http://app.campusguiden.no/",pictogram:"map",css_id:"map"},u={title:"CloudStor",description:"Trenger du å sende en diger fil til noen? Når mailbokser og minnepinner kneler, kommer CloudStor til unnsetning!",link:"https://cloudstor.uninett.no/simplesaml/module.php/core/as_login.php?AuthId=default-sp&ReturnTo=https://cloudstor.uninett.no/index.php?s=upload",pictogram:"cloudstor",css_id:"cloudstor"},a={title:"Karakterer",description:"Mektigere karakterstatistikk enn du finner på Studweb. Hvilke av emnene du tar i år er typiske stryk-emner? Og slo dere jentene i år?",link:"https://innsida.ntnu.no/sso/?target=KarstatProd",pictogram:"grades",css_id:"grades"},f={title:"Romres",description:'Reservér grupperom og auditorier et halvt år i forveien. Timeplaner for enkeltrom finner du <a href="http://www.ntnu.no/studieinformasjon/rom/">her</a>.',link:"http://www.ntnu.no/studieinformasjon/rom/",pictogram:"romres",css_id:"romres"},l={title:"IT-hjelp",description:"Hvordan koble telefonen automatisk til eduroam? NTNUs IT-hjelp løser alle dine problemer, og et par du ikke visste du hadde.",link:"https://innsida.ntnu.no/it-hjelp",pictogram:"it-help",css_id:"it-hjelp"},c={title:"Farm",description:'Savner du Word? Farm gir deg tilgang til programmer, filer og nettsider du ville hatt på en datasal. Domenet er "win-ntnu-no\brukernavn"',link:"https://farm.ntnu.no/",pictogram:"farm",css_id:"farm"},h={title:"Grupper",description:"Lag dine egne epostlister, og opprett grupper for dine NTNU-prosjekter, der du kan dele filer med andre.",link:"https://innsida.ntnu.no/sso/?target=studdrift_groups",pictogram:"kundesenteret",css_id:"kundesenteret"};e.cards=[t,n,r,i,s,o,u,a,f,l,c,h]}],ModalCtrl=["$scope",function(e){var t={title:"Hva er Instabart?",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eveniet, a, sapiente illum error quos quas esse quibusdam officia dolor quasi aut magnam tempora. Recusandae expedita deleniti deserunt voluptatibus dolor.",pictogram:"pow"},n={title:"Snakk med oss!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eveniet, a, sapiente illum error quos quas esse quibusdam officia dolor quasi aut magnam tempora. Recusandae expedita deleniti deserunt voluptatibus dolor.",pictogram:"bug"},r={title:"Andre sexy tjenester",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eveniet, a, sapiente illum error quos quas esse quibusdam officia dolor quasi aut magnam tempora. Recusandae expedita deleniti deserunt voluptatibus dolor.",pictogram:"fire"};e.modalSections=[t,n,r]}],TaglineCtrl=["$scope",function(e){function n(e){var t=Math.floor(Math.random()*e.length);return e[t]}var t=["Kjekke NTNU-tjenester. Umiddel<strong>bart</strong>.","Favoritt blant bartebyens studenter siden 1917!","Hele NTNU samlet under én bart!","Dekker alle dine behov som NTNU-student... bortsett fra kaffe","La barten bane vei i NTNUs frodige IT-jungel!","NTNUs IT-tjenester? Gotta know 'em all!"];e.randomTagline=n(t)}];$(function(){function e(){$(".flip-button").click(function(){var e=$(this).parent().parent();if(e.hasClass("flipped"))e.removeClass("flipped");else{$(".flipped").removeClass("flipped");e.addClass("flipped")}return!1})}function t(){var e=$(".cardface").width(),t=e/2+"px";e+="px";var r={width:0,marginLeft:t,opacity:.4},i={width:e,marginLeft:0,opacity:1},s={compress:r,decompress:i};$(".back").css(r);$(".back").hide();$(".flip-button").click(function(){var e=$(this).parent();if(e.hasClass("back"))n($(".back:visible"),s);else{n($(".back:visible"),s);n(e,s)}})}function n(e,t){e.animate(t.compress,100,function(){$(this).hide();$(this).siblings(".cardface").show().animate(t.decompress,100)})}Modernizr.csstransforms3d?e():t();Modernizr.csstransforms3d&&$(".back").show()});$(function(){$(".no-touch .front").hover(function(){$(this).addClass("hover");$(this).find(".flip-button").show()},function(){$(this).removeClass("hover");$(this).find(".flip-button").hide()});$(".front a").mouseup(function(){var e=$(this).parent().parent().parent();e.css("top","0");e.css("left","0")}).mousedown(function(){var e=$(this).parent().parent().parent();e.css("top","2px");e.css("left","1px")});$("#about-button").leanModal({top:0,overlay:.7,closeButton:".modal_close"})});