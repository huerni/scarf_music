function s(t){if(document.f1.key.value.length>0){var e={news:{url:"http://www.baidu.com/",word:"s?rtt=1&bsst=1&cl=2&tn=news&fr=music&word="},www:{url:"https://www.baidu.com/",word:"s?cl=3&wd="},tieba:{url:"http://tieba.baidu.com/",word:"f?ie=utf-8&kw="},zhidao:{url:"http://zhidao.baidu.com/",word:"search?pn=0&rn=10&lm=0&word="},image:{url:"http://image.baidu.com/",word:"search/index?ct=201326592&cl=2&nc=1&lm=-1&st=-1&tn=baiduimage&istype=2&fm=&pv=&z=0&ie=utf-8&word="},v:{url:"https://www.baidu.com/",word:"sf/vsearch?pd=video&tn=vsearch&ie=utf-8&wd="},map:{url:"http://map.baidu.com/",word:"?newmap=1&ie=utf-8&s=s%26wd%3D"},baike:{url:"http://baike.baidu.com/",word:"search/word?enc=utf8&word="},wenku:{url:"http://wenku.baidu.com/",word:"search?ie=utf-8&word="}};var i=t.href,a=/^(http|https):\/\/([^.]+)\./,o=i.match(a)[2],s=t.href.split("?"),n=document.getElementById("ww");var d="https://www.baidu.com/sf/vsearch";if(i.includes(d)){o="v"}var r=encodeURIComponent(n.value);if(n.value==n.getAttribute("data-default")){t.href=e[o].url}else{t.href=e[o].url+e[o].word+r}}}require(["sug/init"]);var ting=window.ting||{};window.BDUS={vipState:null};$(".hao123-header-box .grid").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});ting.updateUserbar=function(){require(["init"],function(){$.ajax({url:"/data/user/info",dataType:"jsonp",jsonpCallback:"enterState"})})};ting.updateUserbar();(function(){window.BDUS={vipState:null};ting.showTip=function(t){var e={$tar:null,type:null,msg:null,iconClass:null,showTime:2e3,cancelEvent:null,reason:""};var i=$.extend(e,t);var a=['<div class="tipLayer multi-tip" style="position: absolute;display: block;">','<div class="m_m">','<div class="content">','<div class="tip-head">',"</div>","</div>","</div>",'<div class="tip-arrow" style="left: 114px;"></div>',"</div>"].join("");if(!$(".tipLayer").length){$(a).appendTo($("body"));$tip=$(".tipLayer");switch(i.type){case"needgoldvip":i.msg=['<div class="tip-needgoldvip"><span class="text">应唱片公司要求，该资源需付费使用， </span>','<span class="text">开通白金VIP即可自由畅享哦。</span>','<a class="btn" target="_blank" href="http://static4.qianqian.com/vip/payment?level=gold&goldonly=1"></a></div>'].join("");i.iconClass="icon-tip-needgoldvip";i.cancelEvent="blur";break}$tipHead=$tip.find(".tip-head");$tipHead.append('<span class="tip-icon '+i.iconClass+'"></span>');$tipHead.append(i.msg)}var o=i.$tar.offset();var s=$tip.offset();var n={top:o.top-$tip.height()-15,left:o.left-($tip.width()-i.$tar.width())/2};var d=$tip.find(".tip-arrow");var r={left:$tip.width()/2};if(n.top<0){n.top=o.top+i.$tar.height()+10;r.top=-d.height();r.bottom="auto";$tip.removeClass("up").addClass("down")}else{$tip.removeClass("down").addClass("up")}$tip.css(n);d.css(r);var l=$tip.find(".btn");l.off("click");l.on("click",function(){ting.logger.log("click",{pid:"304",page:i.reason,pos:"block_pop",sub:"openvip"})});ting.logger.log("click",{pid:"304",page:i.reason,pos:"block_pop",sub:""});if(i.cancelEvent){}else{setTimeout(function(){$tip.remove()},i.showTime)}$("body").off("click");$("body").on("click",function(t){var e=$(t.target);if(e!=$tip&&!e.parents(".tipLayer").length&&e!=i.$tar&&e.parents().index(i.$tar)<0){$tip.remove()}})};var t=$("#music-head");if(t){$(window).scroll(function(){if($(document).scrollTop()>=40){t.addClass("shadow-head")}else{t.removeClass("shadow-head")}});var e=1240,i=$("html"),a=0;addCls=function(){a=document.body.clientWidth;if(a<=e){i.addClass("narrow narrow-screen")}else{i.removeClass("narrow narrow-screen")}};addCls();window.onresize=addCls}})();

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/