webpackJsonp([4],{"5S+7":function(e,t){},DiRM:function(e,t,n){"use strict";var o=n("gyMJ"),i=n("mtWM"),r=n.n(i);t.a={get:function(e){var t=e.req;return o.a.all([{params:{method:"baidu.ting.plaza.webNewIndex"},config:{req:t}},{params:{method:"baidu.ting.artist.getList",limit:6},config:{req:t}},{params:{method:"baidu.ting.mv.indexMv",total:20},config:{req:t}},{params:{method:"baidu.ting.active.webIndexHotActivity",total:3},config:{req:t}}])},getRank:function(e){return o.a.get({method:"baidu.ting.billboard.billList",type:e,offset:0,size:6})},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.get({method:"baidu.ting.ugccenter.getUserBaseInfo",version:"1.0.0",withcount:1,from:"webapp_music"},{encrypt:!0,req:e.req,cache:!1})},getSuggestion:function(e){return r()({method:"get",url:location.protocol+"//sug.qianqian.com/info/suggestion",params:{from:"web",format:"json",word:encodeURIComponent(e),version:2,callback:"http://static1.qianqian.com/web/s/js/window.baidu.sug",third_type:0,client_type:0,_:new Date}})}}},"F+tC":function(e,t){},LbS4:function(e,t){},Qzga:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var i="undefined"==typeof window;var r=!i&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)};function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"qianclick",n=(function(){if(!i){var e=window.navigator,t=e.userAgent,n=e.platform,o=t,r={},a={},s=o.match(/(Android);?[\s/]+([\d.]+)?/),c=!!o.match(/\(Macintosh; Intel /),u=o.match(/(iPad).*OS\s([\d_]+)/),l=o.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&o.match(/(iPhone\sOS)\s([\d_]+)/),f=o.match(/(webOS|hpwOS)[\s/]([\d.]+)/),p=/Win\d{2}|Windows/.test(n),m=o.match(/Windows Phone ([\d.]+)/),h=f&&o.match(/TouchPad/),v=o.match(/Kindle\/([\d.]+)/),g=o.match(/Silk\/([\d._]+)/),b=o.match(/(BlackBerry).*Version\/([\d.]+)/),y=o.match(/(BB10).*Version\/([\d.]+)/),w=o.match(/(RIM\sTablet\sOS)\s([\d.]+)/),_=o.match(/PlayBook/),x=o.match(/Chrome\/([\d.]+)/)||o.match(/CriOS\/([\d.]+)/),S=o.match(/Firefox\/([\d.]+)/),j=o.match(/MSIE\s([\d.]+)/)||o.match(/Trident\/[\d](?=[^?]+).*rv:([0-9.].)/),O=!x&&o.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),C=O||o.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);return s&&(r.android=!0,r.version=s[2]),d&&!l&&(r.ios=r.iphone=!0,r.version=d[2].replace(/_/g,".")),u&&(r.ios=r.ipad=!0,r.version=u[2].replace(/_/g,".")),l&&(r.ios=r.ipod=!0,r.version=l[3]?l[3].replace(/_/g,"."):null),m&&(r.wp=!0,r.version=m[1]),f&&(r.webos=!0,r.version=f[2]),h&&(r.touchpad=!0),b&&(r.blackberry=!0,r.version=b[2]),y&&(r.bb10=!0,r.version=y[2]),w&&(r.rimtabletos=!0,r.version=w[2]),_&&(a.playbook=!0),v&&(r.kindle=!0,r.version=v[1]),g&&(a.silk=!0,a.version=g[1]),!g&&r.android&&o.match(/Kindle Fire/)&&(a.silk=!0),x&&(a.chrome=!0,a.version=x[1]),S&&(a.firefox=!0,a.version=S[1]),j&&(a.ie=!0,a.version=j[1]),C&&(c||r.ios||p)&&(a.safari=!0,r.ios||(a.version=C[1])),O&&(a.webview=!0),r.tablet=!!(u||_||s&&!o.match(/Mobile/)||S&&o.match(/Tablet/)||j&&!o.match(/Phone/)&&o.match(/Touch/)),r.phone=!(r.tablet||r.ipod||!(s||d||f||b||y||x&&o.match(/Android/)||x&&o.match(/CriOS\/([\d.]+)/)||S&&o.match(/Mobile/)||j&&o.match(/Touch/))),a.special={safari:/Safari/gi.test(navigator.appVersion),qq:/MQQBrowser|CriOS/.test(o),baidu:/baidubrowser/.test(o),uc:/UCBrowser/.test(o)},a.weChat=/micromessenger/i.test(o),{os:r,browser:a}}}().os,+new Date+parseInt(1e3*Math.random())),o=window["img_"+n]=new Image;e=Object.assign({pid:304,type:"click",ref:"web",v:"1.0.0",r:n,page:"home",page_url:location.href,url:location.href,page_refer:document.referrer||"",referurl:document.referrer||"",channel:function(){for(var e={},t=location.search.replace(/^\?/,"").split("&"),n=0,o=t.length;n<o;n++){var i=t[n].split("=");e[i[0]]=i[1]||""}return e}().fr||"",UA:navigator.userAgent},e),o.onload=o.onerror=o.onabort=function(){o.onload=o.onerror=o.onabort=null,window["img_"+n]=null},o.src={qianclick:"../../../../click.qianqian.com/v.gif"/*tpa=http://click.qianqian.com/v.gif*/,pvlog:"../../../cms/mobile.gif"/*tpa=http://static1.qianqian.com/cms/mobile.gif*/}[t]+"?"+function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(e);var r=r||[];"qianclick"==t&&r&&void 0!==e.page&&void 0!==e.pos&&void 0!==e.sub&&r&&r.push(["_trackEvent",e.page,e.pos,e.sub])}function s(e,t){var n=t||"";return e.indexOf(".jpg@")>-1?e=e.substring(0,e.indexOf(".jpg@")+4)+n:e.indexOf(".JPG@")>-1?e=e.substring(0,e.indexOf(".JPG@")+4)+n:e.indexOf(".png@")>-1?e=e.substring(0,e.indexOf(".png@")+4)+n:e.indexOf(".jpeg@")>-1?e=e.substring(0,e.indexOf(".jpeg@")+5)+n:e&&(e+=n),e}function c(e){if("string"==typeof e)try{var t=JSON.parse(e);return!("object"!=(void 0===t?"undefined":o(t))||!t)}catch(e){return!1}}},TBV0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i=(n("9mmO"),n("52Wt"),n("TFWu"),n("MyjO"),n("qtRy"),n("THnP"),n("K0JP"),n("NfZy"),n("dTzs"),n("+vXH"),n("MsuQ"),n("dSUw"),n("ZDXm"),n("V/H1"),n("CVR+"),n("vmSu"),n("4ZU1"),n("yx1U"),n("SPtU"),n("A52B"),n("PuTd"),n("dm+7"),n("JG34"),n("Rw4K"),n("9mGU"),n("bUY0"),n("mTp7"),n("y9m4"),n("A0n/"),n("VTn2"),n("W/IU"),n("Y5ex"),n("WpPb"),n("+yjc"),n("gPva"),n("C+4B"),n("W4Z6"),n("tJwI"),n("eC2H"),n("n12u"),n("nRs1"),n("jrHM"),n("EuXz"),n("F3sI"),n("bqOW"),n("Racj"),n("tqSY"),n("CvWX"),n("Y1S0"),n("Gh7F"),n("pd+2"),n("MfeA"),n("VjuZ"),n("mJx5"),n("qwQ3"),n("beEN"),n("xMpm"),n("9vc3"),n("WpTh"),n("U6qc"),n("No4x"),n("WgSQ"),n("yuXV"),n("XtiL"),n("A1ng"),n("LG56"),n("Stuz"),n("aJ2J"),n("WiIn"),n("v2lb"),n("7Jvp"),n("lyhN"),n("kBOG"),n("xONB"),n("LlNE"),n("9xIj"),n("m6Yj"),n("wrs0"),n("Lqg1"),n("pWGb"),n("1ip3"),n("N4KQ"),n("Hl+4"),n("MjHD"),n("SRCy"),n("H0mh"),n("gbyG"),n("YVn/"),n("FKfb"),n("zmx7"),n("smQ+"),n("m8F4"),n("v8VU"),n("dich"),n("fx22"),n("SldL"),function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view",{staticClass:"view"})],1)],1)}),r=[];i._withStripped=!0;var a=n("XyMi"),s=!1;var c=function(e){s||n("5S+7")},u=Object(a.a)({data:function(){return{}}},i,r,!1,c,null,null);u.options.__file="http://static1.qianqian.com/web/s/js/src/container/app.vue";var l=u.exports,d=n("NYxO");var f={getData:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){setTimeout(function(){e([{song_id:1,author:"fedor"},{song_id:2,author:"raymond"}])},300)}));case 1:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(i,r){try{var a=t[i](r),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}("next")})})()}};var p={namespaced:!0,state:{items:[]},actions:{fetch:function(e){var t,n=this,o=e.commit;return(t=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getData();case 3:return t=e.sent,e.abrupt("return",o("setState",t));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}},e,n,[[0,7]])}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function o(i,r){try{var a=e[i](r),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});t(s)}("next")})})()}},mutations:{setState:function(e,t){e.items=t}}},m=n("DiRM"),h=n("Qzga");var v={namespaced:!0,state:function(){return{main:{},firstPublish:[],rankList:[],mv:[],activity:[]}},actions:{fetch:function(e,t){var n,o=this,i=e.commit;return(n=regeneratorRuntime.mark(function e(){var n,r,a,s,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(t);case 3:return n=e.sent,r=n.map(function(e){return e.body}),i("initState",r),a=[],e.next=9,m.a.getRank(1);case 9:return s=e.sent,e.next=12,m.a.getRank(2);case 12:return c=e.sent,e.next=15,m.a.getRank(25);case 15:u=e.sent,a.push(s,c,u),l=[],a.map(function(e){return l.push(e.body)}),i("initRank",l),e.next=25;break;case 22:return e.prev=22,e.t0=e.catch(0),e.abrupt("return",new Promise.reject(e.t0));case 25:case"end":return e.stop()}},e,o,[[0,22]])}),function(){var e=n.apply(this,arguments);return new Promise(function(t,n){return function o(i,r){try{var a=e[i](r),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});t(s)}("next")})})()}},mutations:{initState:function(e,t){t[0]&&t[0].result&&(e.main=t[0].result,e.main.diy.map(function(e){e.pic=Object(h.a)(e.pic,"@s_2,w_346,h_346")}),e.main.newsong.map(function(e){e.pic=Object(h.a)(e.pic,"@s_2,w_346,h_346")}),e.main.focus.map(function(e){e.randpic=Object(h.a)(e.randpic,"@s_2,w_750,h_300")})),t[1]&&t[1].artist&&(t[1].artist.map(function(e){e.pic=Object(h.a)(e.avatar_middle,"@s_2,w_250,h_250")}),e.artist=t[1].artist),t[2]&&t[2].result&&(t[2].result.map(function(e){e.pic=Object(h.a)(e.pic,"@s_2,w_556,h_314")}),e.mv=t[2].result),t[3]&&t[3].result&&(t[3].result.map(function(e){e.pic=Object(h.a)(e.pic,"@s_2,w_760,h_304")}),e.activity=t[3].result)},initRank:function(e,t){if(t){var n="@s_2,w_60,h_60";t[0].song_list.map(function(e){e.pic=Object(h.a)(e.pic_big||e.pic_small||e.pic_radio,n)}),t[1].song_list.map(function(e){e.pic=Object(h.a)(e.pic_big||e.pic_small||e.pic_radio,n)}),t[2].song_list.map(function(e){e.pic=Object(h.a)(e.pic_big||e.pic_small||e.pic_radio,n)}),e.rankList=t}}}};o.default.use(d.default);var g={next:p,home:v};var b=n("/ocq");o.default.use(b.default);var y=[{path:"/",component:function(){return n.e(1).then(n.bind(null,"GJOj"))},children:[{path:"",component:function(){return n.e(0).then(n.bind(null,"Ehgx"))}},{path:"/home",component:function(){return n.e(0).then(n.bind(null,"Ehgx"))}},{path:"/404",component:function(){return n.e(2).then(n.bind(null,"QjG3"))},meta:{page:"404"}}]}];var w=n("9JMe"),_=n("cTzj"),x=n.n(_),S=(n("F+tC"),{name:"ThNotif",props:{type:String,message:String,duration:Number,position:String},data:function(){return{visiable:!1}},methods:{show:function(){var e=this;this.visiable=!0,setTimeout(function(){e.close()},this.duration)},close:function(){this.visiable=!1,this.$el.addEventListener("transitionend",this.destroyElement)},destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)}}}),j=function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.visiable,expression:"visiable"}],class:["th-noti-container","th-noti-"+this.position]},[t("div",{class:["th-noti","th-noti-"+this.type]},[t("div",{staticClass:"th-noti-message",domProps:{innerHTML:this._s(this.message)}})])])])},O=[];j._withStripped=!0;var C=!1;var T=function(e){C||n("LbS4")},A=Object(a.a)(S,j,O,!1,T,null,null);A.options.__file="http://static1.qianqian.com/web/s/js/src/plugins/components/notification/src/notification.vue";var k=A.exports,I=null,R=o.default.extend(k),E={type:"info",message:"",duration:1600,position:"center-center"},P=function(e){for(var t in I=new R({el:document.createElement("div")}),document.body.appendChild(I.$el),e=function(e){for(var t=1,n=arguments.length;t<n;t++){var o=arguments[t];for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];void 0!==r&&(e[i]=r)}}return e}({},E,e))e.hasOwnProperty(t)&&(I[t]=e[t]);o.default.nextTick(function(){I.show(e)})},M={info:function(e,t){P({type:"info",message:e,duration:t})},success:function(e,t){P({type:"success",message:e,duration:t})},failure:function(e,t){P({type:"failure",message:e,duration:t})},warning:function(e,t){P({type:"warning",message:e,duration:t})},hide:function(){I.hide()},install:function(e){e.prototype.$notif=M}},B=M,L={tpl:"baidu_music",staticPage:"http://music.taihe.com/static/html/tpassjump.html"},N={install:function(e){e.prototype.$isServer||(e.directive("login",this.login),e.directive("needlogin",this.needlogin),e.directive("logout",this.logout))},login:{bind:function(e){Object(h.c)(e,"click",function(){TPASS.config(L);var e={tpl:"baidu_music",target:"pop",u:location.href};TPASS.login(e,function(e){o.default.prototype.$isServer||location.reload()})})}},needlogin:{bind:function(e,t){Object(h.c)(e,"click",function(){if(o.default.prototype.$userinfo)"function"==typeof t.value&&t.value(),t.value&&"function"==typeof t.value.call&&t.value.call();else{var e=0;t.value&&t.value.tips&&(o.default.prototype.$notif.info(t.value.tips),e=1200),setTimeout(function(){var e={tpl:"baidu_music",target:"pop",u:location.href};TPASS.login(e)},e)}})}},logout:{bind:function(e){Object(h.c)(e,"click",function(){TPASS.logout({callback:function(){setTimeout(function(){window.location.reload()},500)}})})}}},$={install:function(e){e.prototype.$isServer||(e.directive("log",this.log),e.directive("pvlog",this.pvlog))},log:{bind:function(e,t){Object(h.c)(e,"click",function(){Object(h.d)(t.value)})}},pvlog:{bind:function(e,t){Object(h.d)(t.value,"pvlog")}}},F=n("7t+N"),q=n.n(F);o.default.prototype.$isServer||function(e,t,n){var o,i=o=i||{version:"1.5.2.2"};i.guid="$BAIDU$",i.$$=e[i.guid]=e[i.guid]||{global:{}},i.dom=i.dom||{},i.dom.g=function(e){return e?"string"==typeof e||e instanceof String?document.getElementById(e):!e.nodeName||1!=e.nodeType&&9!=e.nodeType?null:e:null},i.g=i.G=i.dom.g,i.browser=i.browser||{},i.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp.$6||RegExp.$2):void 0,i.dom.insertHTML=function(e,t,n){var o,r;return(e=i.dom.g(e)).insertAdjacentHTML&&!i.browser.opera?e.insertAdjacentHTML(t,n):(o=e.ownerDocument.createRange(),"AFTERBEGIN"==(t=t.toUpperCase())||"BEFOREEND"==t?(o.selectNodeContents(e),o.collapse("AFTERBEGIN"==t)):(o[(r="BEFOREBEGIN"==t)?"setStartBefore":"setEndAfter"](e),o.collapse(r)),o.insertNode(o.createContextualFragment(n))),e},i.insertHTML=i.dom.insertHTML,i.swf=i.swf||{},i.swf.version=function(){var t=navigator;if(t.plugins&&t.mimeTypes.length){var n=t.plugins["Shockwave Flash"];if(n&&n.description)return n.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}else if(e.ActiveXObject&&!e.opera)for(var o=e.ActiveXObject,i=12;i>=2;i--)try{var r=new o("ShockwaveFlash.ShockwaveFlash."+i);if(r)return r.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,".")}catch(e){}}(),i.string=i.string||{},i.string.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},i.encodeHTML=i.string.encodeHTML,i.swf.createHTML=function(e){e=e||{};var t,n,o,r,a,s,c=i.swf.version,u=e.ver||"6.0.0",l={},d=i.string.encodeHTML;for(r in e)l[r]=e[r];if(e=l,!c)return"";for(c=c.split("."),u=u.split("."),o=0;o<3&&(t=parseInt(c[o],10),!((n=parseInt(u[o],10))<t));o++)if(n>t)return"";var f=e.vars,p=["classid","codebase","id","width","height","align"];if(e.align=e.align||"middle",e.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",e.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0",e.movie=e.url||"",delete e.vars,delete e.url,"string"==typeof f)e.flashvars=f;else{var m=[];for(r in f)s=f[r],m.push(r+"="+encodeURIComponent(s));e.flashvars=m.join("&")}var h=["<object "];for(o=0,a=p.length;o<a;o++)s=p[o],h.push(" ",s,"='",d(e[s]),"'");h.push(">");var v,g={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(r in e)s=e[r],g[r=r.toLowerCase()]&&(s||!1===s||0===s)&&h.push("<param name='"+r+"' value='"+d(s)+"' />");for(r in e.src=e.movie,e.name=e.id,delete e.id,delete e.movie,delete e.classid,delete e.codebase,e.type="application/x-shockwave-flash",e.pluginspage="http://www.macromedia.com/go/getflashplayer",h.push("<embed"),e)if((s=e[r])||!1===s||0===s){if(new RegExp("^salign$","i").test(r)){v=s;continue}h.push(" ",r,"='",d(s),"'")}return v&&h.push(" salign='",d(v),"'"),h.push("></embed></object>"),h.join("")},i.swf.create=function(e,t){e=e||{};var n=i.swf.createHTML(e)||e.errorMessage||"";t&&"string"==typeof t&&(t=document.getElementById(t)),i.dom.insertHTML(t||document.body,"beforeEnd",n)},i.browser.ie=i.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:void 0,i.array=i.array||{},i.array.remove=function(e,t){for(var n=e.length;n--;)n in e&&e[n]===t&&e.splice(n,1);return e},i.lang=i.lang||{},i.lang.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},i.lang.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)},i.lang.toArray=function(e){if(null===e||void 0===e)return[];if(i.lang.isArray(e))return e;if("number"!=typeof e.length||"string"==typeof e||i.lang.isFunction(e))return[e];if(e.item){for(var t=e.length,n=new Array(t);t--;)n[t]=e[t];return n}return[].slice.call(e)},i.swf.getMovie=function(t){var n,o,r,a=document[t]||e[t];if((/chrome\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp.$1:void 0)>=32){for(r=(o=i.lang.toArray(a)).length;r--;)if("embed"==o[r].tagName.toLowerCase()){n=o[r];break}return n||a}if(9==i.browser.ie&&a&&a.length){for(r=(o=i.lang.toArray(a)).length;r--;)if("object"==o[r].tagName.toLowerCase()){n=o[r];break}}else n=a;return n},i.swf.isSupportVer=function(e){var t=i.swf.version,n=e.toString();if(t){var o=t.split("."),r=n.split(".");return o[0]-r[0]>=0&&o[1]-r[1]>=0}return!1},o.undope=!0,t.swf||(t.swf={}),t.extend(t.swf,i.swf)}(window,q.a);var D=q.a;q.a.cookie=function(e,t,n){if(void 0===t){var o=null;if(document.cookie&&""!=document.cookie)for(var i=document.cookie.split(";"),r=0;r<i.length;r++){var a=q.a.trim(i[r]);if(a.substring(0,e.length+1)==e+"="){o=decodeURIComponent(a.substring(e.length+1));break}}return o}n=n||{},null===t&&(t="",n.expires=-1);var s,c="";n.expires&&("number"==typeof n.expires||n.expires.toUTCString)&&("number"==typeof n.expires?(s=new Date).setTime(s.getTime()+24*n.expires*60*60*1e3):s=n.expires,c="; expires="+s.toUTCString());var u=n.path?"; path="+n.path:"",l=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),c,u,l,d].join("")};q.a;var U=U||{},H=H||{},V=function(){};o.default.prototype.$isServer||(V=function(e){H.DM=".baidu.com",-1!=location.host.indexOf("http://static1.qianqian.com/web/s/js/taihe.com")?H.DM=".taihe.com":-1!=location.host.indexOf("http://static1.qianqian.com/web/s/js/qianqian.com")&&(H.DM=".qianqian.com");var t="_baidu_music_naga_",n=0,o="//music"+H.DM,i="//play"+H.DM,r=i+"/player/static/flash/SLC.swf",a=function(e){return encodeURIComponent((e||"").toString())},s={"http://static1.qianqian.com/web/s/js/mbc.ps":"playSong","http://static1.qianqian.com/web/s/js/mbc.as":"addSong","http://static1.qianqian.com/web/s/js/mbc.pa":"playAlbum","http://static1.qianqian.com/web/s/js/mbc.aa":"addAlbum","http://static1.qianqian.com/web/s/js/mbc.pd":"playDiy","http://static1.qianqian.com/web/s/js/mbc.ad":"addDiy","http://static1.qianqian.com/web/s/js/mbc.pt":"playTop","http://static1.qianqian.com/web/s/js/mbc.at":"addTop","http://static1.qianqian.com/web/s/js/mbc.pb":"playBubble","http://static1.qianqian.com/web/s/js/mbc.ab":"addBubble","http://static1.qianqian.com/web/s/js/mbc.af":"addFavorList","http://static1.qianqian.com/web/s/js/mbc.uf":"updateFavor","mboxCtrl.playSong":"playSong","mboxCtrl.addSong":"addSong","mboxCtrl.playAlbum":"playAlbum","mboxCtrl.addAlbum":"addAlbum","mboxCtrl.playDiy":"playDiy","mboxCtrl.addDiy":"addDiy","mboxCtrl.playTop":"playTop","mboxCtrl.addTop":"addTop","mboxCtrl.playBubble":"playBubble","mboxCtrl.addBubble":"addBubble","mboxCtrl.playLocal":"playLocal","mboxCtrl.playLatest":"playLatest","mboxCtrl.playCollection":"playCollection","mboxCtrl.addFavorList":"addFavorList","mboxCtrl.updateFavor":"updateFavor","mboxCtrl.playArtist":"playArtist","mboxCtrl.addArtist":"addArtist"},c=function(e){return!/[<>]/gi.test(decodeURIComponent(e))},u=function(e){var t,n,o="9.0.0";if(navigator.userAgent.indexOf("Windows NT 6.2")>-1&&D.browser.msie&&parseInt(D.browser.version,10)>=10)return!1;if(e){e=e.split("."),o=o.split(".");for(var i=0;i<3;i++){if(t=parseInt(e[i],10),(n=parseInt(o[i],10))<t)return!0;if(n>t)return!1}return!0}return!1}(D.swf.version),l=function(){return location.search},d=function(){return function(t){for(var n={},o=((t=t||e.location.search).length>0?t.substring(1):"").split("&"),i=o.length,r=0;r<i;r++){var a=o[r].split("="),s=a[0],c=a[1];n[s]=c}return n}()},f=function(e){this.hasCommandByUrl=!1,this.init()},p=!1;return f.prototype={init:function(o){if(u){this.flashId="",this.flashFuze=new function(){var e,t=void 0,n=void 0;return t=[],(e=function(e){n?e():t.push(e)}).fire=function(){for(;t.length;)t.shift()();n=!0},e.extinguish=function(){n=!1},e.wettish=function(){this.fire(),this.extinguish()},e.clear=function(){for(;t.length;)t.shift();this.extinguish()},e};var i=document.createElement("div");i.className="slc",D(i).attr({}),D.swf.create({id:this.flashId=t+"flash_"+n++,url:r+"?r="+Math.random(),width:"1",height:"1",allowScriptAccess:"always",ver:"9.0.0"},i),document.body.appendChild(i),this.flashObj=D.swf.getMovie(this.flashId);var a=this;this.flashInterval=e.setInterval(function(){a.flashObj&&a.flashObj.flashInit&&(p=!0,clearInterval(a.flashInterval),a.flashFuze.fire())},100)}},openBox:function(n,r,s){if(!D.cookie("flash_tip_pop")){var c=navigator,l=!1,d=!1,f=c.userAgent.toLowerCase();if(f.indexOf("chrome")>0){var m=(f.match(/chrome\/[\d.]+/gi)+"").replace(/[^0-9.]/gi,"").substring(0,2);l=Number(m)>=54}if(f.indexOf("safari")>0&&f.indexOf("chrome")<0&&(d=!0),(l||d)&&c.plugins&&c.mimeTypes.length){var h=c.plugins["Shockwave Flash"],v="";if(void 0===h){if(l){var g="chrome://plugins/";(/chrome\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp.$1:void 0)>=57&&(g="chrome://components/"),v="<h3 style='font-weight: bold;'>Adobe Flash Player 插件已停用</h3>为了更好的试听体验，请复制 <span style='color:#2b79cd' >"+g+"</span> ，<br/>到地址栏，回车进入插件管理页面，重新启用该插件。"}d&&(v="<h3 style='font-weight: bold;'>Adobe Flash Player 插件已停用</h3>为了更好的试听体验，请访问浏览器的插件管理，<br/>重新启用该插件。")}else h&&"internal-not-yet-present"!=h.filename&&(p||l&&(v="<h3 style='font-weight: bold;'>Adobe Flash Player 插件未被允许</h3>为了更好的试听体验，请允许千千音乐使用插件。<br/>chrome 浏览器请点击地址栏右侧<i class='allow-tip-icon'></i>允许。"));if(v){var b="<div class='common-pop' style='margin-left: -188px; margin-top: -119.5px; position: fixed;'><a href='javascript:;' class='close close-window-hook'></a> <div class='common-pop-text'>"+v+"</div> <div class='common-pop-btn'> <a href='javascript:;' class='commit commit-window-hook'>好的</a> <a href='javascript:;' class='cancel close-window-hook'>取消</a> </div> </div>";D("body").append(b),D(".common-pop .cancel, .common-pop .commit, .common-pop .close").click(function(){D(".common-pop").remove()});var y="http://static1.qianqian.com/web/s/js/baidu.com";-1!=location.host.indexOf("http://static1.qianqian.com/web/s/js/taihe.com")?y="http://static1.qianqian.com/web/s/js/taihe.com":-1!=location.host.indexOf("http://static1.qianqian.com/web/s/js/qianqian.com")&&(y="http://static1.qianqian.com/web/s/js/qianqian.com");var w=new Date,_=(23-w.getHours()+(60-w.getMinutes())/60)/24;D.cookie("flash_tip_pop","true",{expires:_,path:"/",domain:y})}}}for(var x=this,S=location.pathname.split("/"),j=S,O=0;O<S.length;O++)if("song"==S[O]){(j=[])[0]=S[O],j[1]=S[O+1];break}S=j.join("/");var C={moduleName:s.moduleName,fr:s.fr||"",sValue:s.searchValue||"",cancel:s.cancel||!1,filterFee:s.filterFee||0};"mboxCtrl.addFavorList"==n&&(C.listTitle=s.listTitle||""),s=void 0===s?{}:"string"==typeof s?{moduleName:s}:s,C.moduleName=s.moduleName?S+"||"+s.moduleName:"";var T=n?"__m="+n:"",A=r?"&__a="+a(r):"",k=C.moduleName?"__o="+C.moduleName:"",I=C.fr?"fr="+C.fr:"",R=C.sValue?"__s="+C.sValue:"",E=C.filterFee?"ff="+C.filterFee:"",P=T||A||k||R||E?"?":"",M=[];if(u&&p?(M.push(i),M.push("/")):(M.push(o),M.push("http://static1.qianqian.com/player/bridge.html")),P&&(M.push(P),M.push(T+A),M.push(T+A&&k?"&":""),M.push(k),M.push(T+A&&I?"&":""),M.push(I),M.push(T+A&&R?"&":""),M.push(R),M.push(T+A&&E?"&":""),M.push(E)),M=M.join(""),u&&p)this.flashObj&&(this.flashObj.isExist&&!this.flashObj.isExist(t)&&"mboxCtrl.addFavorList"!=n&&"mboxCtrl.updateFavor"!=n?e.open(M,t):this.flashFuze(function(){x.flashObj.sendMessage(t,[n,a(r),C])}));else try{e.open(M,"_baidu_music_naga_bridge")}catch(e){console.log(e)}},initBridgePage:function(){if(e.top===e.self)location.href=i+"/"+l();else if(e.name="_baidu_music_naga_bridge",l()){var t=i+"/player/boxproxy.html"+l()+"&__r=naga_VERSION_TAG";D("<iframe src='"+t+"' style='display:none'></ifame>").appendTo("body")}},initProxyPage:function(){var e=d(),t=e.__m||e.__methodName,n=e.__a||e.__argsValue,o=e.__o,i=e.fr;if(c(t+n+o+i))try{n=decodeURIComponent(n).replace(/(_{2,})/g,"_");var r=s[t],a={moduleName:o,fr:i};top.top.mboxCtrl[r](n,a)}catch(e){}},initSinglePage:function(){if(u){e._baidu_naga_slc_messageaccess=function(e){var t=e&&e[0],n=t[0],o=t[1]||"",i=t[2]||"";if(c(n+o+i))try{o=decodeURIComponent(o).replace(/(_{2,})/g,"_"),U[s[n]](o,i)}catch(e){}};var n=this;this.flashFuze(function(){n.flashObj.connectServers(t,"_baidu_naga_slc_messageaccess"),D(e).on("beforeunload",function(){n.flashObj.closeServers()}),D(e).on("unload",function(){n.flashObj.closeServers()})})}else{e.name="_baidu_music_naga_box",D("<iframe src='"+(o+"/player/bridge.html?__r=naga_VERSION_TAG")+"' style='display:none'></iframe>").attr("name","bridgeName").appendTo("body")}if(e.location.hash.indexOf("#loaded")<0&&l()){var i=d(),r=i.__m||i.__methodName,a=i.__a||i.__argsValue,f=i.__o,p=i.fr;if(c(r+a+f+p)){r&&(this.hasCommandByUrl=!0,e.location.hash="loaded");try{a=decodeURIComponent(a).replace(/(_{2,})/g,"_"),U[s[r]](a,{moduleName:f,fr:p})}catch(e){}}}},encode:function(e){return a(e)},hasCommand:function(){return this.hasCommandByUrl}},f}(window));var W=V,G={},z={};try{G=new W;var J={fr:"web"};z={playSong:function(e,t){var n=Array.isArray(e)?e.join("_"):e;G.openBox("mboxCtrl.playSong",n,Object.assign(J,t))},addSong:function(e,t){var n=Array.isArray(e)?e.join("_"):e;G.openBox("mboxCtrl.addSong",n,Object.assign(J,t))},playAlbum:function(e,t){G.openBox("mboxCtrl.playAlbum",e,Object.assign(J,t))},addAlbum:function(e,t){G.openBox("mboxCtrl.addAlbum",e,Object.assign(J,t))},playSongMenu:function(e,t){G.openBox("mboxCtrl.playSongMenu",e,Object.assign(J,t))},collectSong:function(e,t){G.openBox("mboxCtrl.updateFavor",e,Object.assign(J,t))},collectPlaylist:function(e,t){G.openBox("mboxCtrl.addFavorList",e,Object.assign(J,t))},playArtist:function(e,t){G.openBox("mboxCtrl.playArtist",e,Object.assign(J,t))},addArtist:function(e,t){G.openBox("mboxCtrl.addArtist",e,Object.assign(J,t))},playTop:function(e,t){G.openBox("mboxCtrl.playTop",e,Object.assign(J,t))}}}catch(e){}var Q=z,X=[],Y=function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.installed||(t.prototype.$isServer||(t.prototype.$media=Q,t.prototype.$notif=B,t.prototype.$sendLog=h.d),t.use(N),t.use($),X.map(function(e){t.component(e.name,e)}))};"undefined"!=typeof window&&window.Vue&&Y(window.Vue);var K={install:Y},Z={name:"ProgressBar",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},ee=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},te=[];ee._withStripped=!0;var ne=!1;var oe=function(e){ne||n("f19b")},ie=Object(a.a)(Z,ee,te,!1,oe,"data-v-62940eaa",null);ie.options.__file="http://static1.qianqian.com/web/s/js/src/component/progressbar.vue";var re=ie.exports,ae=o.default.prototype.$bar=new o.default(re).$mount();o.default.use(K),o.default.use(x.a,{preLoad:1,attempt:1});var se={el:"#app",data:function(e){var t=new d.default.Store({state:{userInfo:{}},modules:g}),i=function(){var e=new b.default({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:y});return e.afterEach(function(e,t){if(!o.default.prototype.$isServer&&((0,o.default.prototype.$sendLog)({type:"",page_url:window.location.origin+e.fullPath,page_refer:window.location.href,page:e.meta.page},"pvlog"),window.loggers&&window.loggers.log("pv",{page:"new_web_home",pos:"home",sub:"",viptype:0,pid:"304",url:window.location.origin+e.fullPath}),window._hmt)){var n=n||[];n&&n.push(["_trackPageview",e.fullPath])}}),e}();Object(w.sync)(t,i);var r=new o.default({router:i,store:t,render:function(e){return e(l)}});if(o.default.prototype.$isServer)e.theme=e.req.hostname.includes("http://static1.qianqian.com/web/s/js/baidu.com")?"theme-baidu":"theme-taihe";else{document.body.appendChild(ae.$el);var a=n("Du36");o.default.prototype.$Swiper=a}return{app:r,router:i,store:t}},methods:{asyncDataBefore:function(){ae.start()},asyncDataComplete:function(){ae.finish()}}},ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function ue(e,t,n){return function(o,i,r){if(o){e._status.redirected=!0;var a=void 0===i?"undefined":ce(i);if("number"==typeof o||"undefined"!==a&&"object"!==a||(r=i||{},a=void 0===(i=o)?"undefined":ce(i),o=302),"object"===a&&(i=t.resolve(e.req.url).href),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(i))e.next({path:i,query:r,status:o});else{if(i=function(e,t){var n=void 0,o=e.indexOf("://");-1!==o?(n=e.substring(0,o),e=e.substring(o+3)):0===e.indexOf("//")&&(e=e.substring(2));var i=e.split("/"),r=(n?n+"://":"//")+i.shift(),a=i.filter(Boolean).join("/"),s=void 0;2===(i=a.split("#")).length&&(a=i[0],s=i[1]);r+=a?"/"+a:"",t&&"{}"!==JSON.stringify(t)&&(r+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(function(t){var n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(function(e){return[t,"=",e].join("")}).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return r+=s?"#"+s:""}(i,r),!n)throw window.location.replace(i),new Error("ERR_REDIRECT");e.next({path:i,status:o})}}}}var le=!1;if(!se.data||"function"!=typeof se.data)throw new Error("The app.js file must have a data method, and the data must be a function");var de=se.data(),fe=de.app,pe=de.router,me=de.store;window.__INITIAL_STATE__&&me.replaceState(window.__INITIAL_STATE__);var he=!1,ve=function(e,t,n){if(he)return!1;var o=e.$options.browserData;if(o){he=!0;var i=o.call(e,{ssr:me.state.SSR_FETCHED,to:t,from:n});return i&&(i instanceof Promise||"function"==typeof i.then)||(i=Promise.resolve(i)),i.then(function(e){return he=!1,e}).catch(function(e){return he=!1,e})}return Promise.resolve()};o.default.mixin({beforeRouteUpdate:function(e,t,n){ve(this,e,t),n()},mounted:function(){ve(this)},activated:function(){ve(this);var e=this.$options.asyncData,t={_status:{redirected:!1},params:this.$route.params,query:this.$route.query};encodeURIComponent(this.$route.path);if(t.redirect=ue(t,pe,!1),(!me||!me.state.SSR_FETCHED)&&e){se.methods&&"function"==typeof se.methods.asyncDataBefore&&se.methods.asyncDataBefore();var n=[];if("function"==typeof e)n.push(e({store:this.$store,route:this.$route,context:t}));else if("[object Object]"===Object.prototype.toString.call(e))if("string"==typeof e.type)n.push(me.dispatch(e.type,t));else{if(le)throw new Error("The type field must be string type, if asyncData is an object");n.push(Promise.resolve(!0))}else n.push(Promise.resolve(!0));Promise.all(n).then(function(){se.methods&&"function"==typeof se.methods.asyncDataComplete&&se.methods.asyncDataComplete()})}}}),pe.onReady(function(){fe.$mount(se.el||"#app"),o.default.nextTick(function(){return me.state.SSR_FETCHED=!1})})},f19b:function(e,t){},gkXi:function(e,t){var n={HOST:"http://static1.qianqian.com/web/s/js/dev.music.taihe.com",PORT:8085,devPort:8091,api:{site:{gz:"100.64.1.221:8888",bj:"10.16.85.132:8888",bjnw:"http://static1.qianqian.com/web/s/js/180.76.182.240",qa:"192.168.217.100:8887",tj:"http://static1.qianqian.com/web/s/js/musicapi.qianqian.com"},host:"192.168.217.100:8887",path:"/v1/restserver/ting",from:"web"}};n.proxy={"/api":{target:"http://"+n.api.host+n.api.path,pathRewrite:{"^/api":""}}},e.exports=n},gyMJ:function(e,t,n){"use strict";(function(e){var o=n("6ezc"),i=(n.n(o),n("gkXi")),r={debug:!1,cache:!0,from:"web",log:{info:function(e,t,n){"undefined"==typeof window&&console.log("[INFO] API - req_time="+e+" - status="+t+" - "+n)},error:function(e,t,n){"undefined"==typeof window&&console.error("[ERROR] API - req_time="+e+" - message="+t.body+" - "+n)}}};r.baseURL="undefined"==typeof window?"http://"+i.api.site[e.env.CITY]:"http://musicapi.taihe.com/";var a=Object(o.createApi)(r);t.a=a}).call(t,n("lNQ5"))}},["TBV0"]);
//# sourceMappingURL=app.9cd88a1ddc07d942.js.map