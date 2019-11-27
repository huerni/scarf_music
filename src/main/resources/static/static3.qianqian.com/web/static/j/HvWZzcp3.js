(function(i,t){var e={add:"icon-add",collect:"icon-collect",download:"icon-download",play:"icon-play",playlist:"icon-playlist",recommend:"icon-recommend",songword:"icon-songword",subscribe:"icon-subscribe",send:"icon-send"};function n(i){var t=document.createElement("div");t.innerHTML=i;try{return t.childNodes[0].nodeValue}catch(e){return i}}i.widget("ting.musicIcon",{options:{songId:null,hasTip:true,songName:null},_create:function(){var t=this,n=t.element,o=t.options,a=(n.data("musicicon")?n.data("musicicon").iconStr:o.iconStr)||"",s=a.replace(/^\s+/,""),r=s.split(" "),c,l,p;if(r.length<=1){for(p in e){r.push(p)}}t.icons={};for(var g=0,d=r.length;g<d;g+=1){l=r[g];c=e[l];if(c){t.icons["$"+l]=i("."+c,t.element)}}t._initEvent()},log:function(i){var t=window.location.pathname.split("/"),e=t[2]=="collection"?"select":t[1]||"home";ting.logger.log("singleDown",{source:e,sid:i})},_initEvent:function(){var t=this,e=t.element,o=t.icons;var a=e.data("musicicon")?e.data("musicicon"):"",s={moduleName:a.moduleName||""};if(o.$play){o.$play.bind("click",function(e){var r=a.type||t.options.type,c="playSong";switch(r){case"song":c="playSong";break;case"album":c="playAlbum";break;case"diy":c="playDiy";break;case"artist":c="playArtist";break}ting.media[c](n(a.id||t.options.id),s);if(t.options.hasTip){if(r=="song"&&(a.kr_top=="1"||a.kr_top=="2")){var l=i("#krPlayTip");if(!l.length){l=i("<div>",{id:"krPlayTip","class":"kr-play-tip",html:'<span class="tip-arrow"></span><a target="_blank" href="http://static3.qianqian.com/king/top">King榜</a>打榜歌曲，<a target="_blank" href="http://static3.qianqian.com/king/legal#listen-rule">有效试听</a>可提升排名'}).appendTo("body");i(document).bind("mousedown",function(t){if(i.contains(i("#krPlayTip")[0],t.target)){return false}i("#krPlayTip").hide()})}l.attr("style","left:"+(o.$play.offset().left-(l.outerWidth()-o.$play.outerWidth())/2)+"px;"+"top:"+(o.$play.offset().top+o.$play.outerHeight()+8)+"px");l.show()}else{i(this).tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"})}}if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("play_"+r)}if(ting.browser.isSpecial()){ting.browser.add2box("play")}return false})}if(o.$recommend){o.$recommend.bind("tip.confirm",function(i,e){var n=a||t.options;n.description=e._textarea.val();ting.connect.recommend(null,n,function(i){o.$recommend.tip({contentType:"text",showTime:1e3,button:null}).tip("tipup",{msg:"推荐成功",iconClass:"tip-success"})},function(i){o.$recommend.tip({contentType:"text",showTime:1e3,button:null}).tip("tipup",{msg:i.errorMessage||"推荐失败",iconClass:"tip-error"})})}).bind("tip.cancel",function(i,t){if(t._textarea.val()){t._textarea.val("");t.textareaCheck();return false}else{return true}});o.$recommend.bind("click",function(i){ting.passport.checkLogin(function(){},function(){},function(){},function(){},{ref:"pop_web",operation:true});return false})}if(o.$collect){o.$collect.tip();var r={page:ting.logger.getPage(),pos:"collect_song",songcount:1};o.$collect.bind("click",function(n){var s=Number(e.data("musicicon").yyr_song_id),c=Number(e.data("musicicon").id);if(s){if(!ting.userInfo){ting.passport.checkLogin(function(){});return false}i.ajax({url:"http://y.taihe.com/data/song/favorite/add",type:"POST",dataType:"jsonp",data:{songId:c,from:"play"}}).done(function(t){if(t.errorCode!=22e3){if(t.errorCode==22322){i(o.$collect).tip("tipup",{msg:"歌曲已被保存",iconClass:"tip-error"});return false}var e=i('<div style="text-align: left;">您需要访问 <a target="_blank" href="http://y.baidu.com/">太合音乐人</a>平台，完成音乐收藏。</div>');e.dialog({className:"dialog-message",showBtn:true,confirm:{btn:"",close:true,callback:function(){window.open("http://y.taihe.com/song/"+s+"?buy="+s)},text:"立即去收藏"},cancel:false,destroy:true,title:"&nbsp;",width:360,showBg:true}).dialog("show")}else{i(o.$collect).tip("tipup",{msg:"已保存到我的收藏",iconClass:"tip-success"})}});return false}if(a.pay_type&&a.pay_type==="1"){var c=a.id,l=encodeURIComponent(window.location.pathname);if(/^\d+$/.test(c)){link="/song/"+c+"/collect?resource=kingfav&__o="+l}window.open(link,"","height=435,width=785,status=no,toolbar=no,menubar=no,location=no");ting.logger.plogClick("fav_music",c);return false}ting.connect.collect(null,{ids:a.id||t.options.id,type:a.type||t.options.type},function(t){i(o.$collect).tip("tipup",{msg:"已保存到我的收藏",iconClass:"tip-success"});if(ting&&ting.logger){r.state=1;ting.logger.log("collect",r)}if(ting.browser.isSpecial()){ting.browser.add2box("collect")}ting.media.collectSong(a.id)},function(t){var e="tip-error";switch(t.errorCode){case 22322:e="tip-warning";t.errTip="歌曲已被保存";break;case 22331:t.errTip="云空间已满，去<a href ='http://yinyueyun.baidu.com/' target = '_blank'>整理云空间</a>吧！";break;case 22232:t.errTip="对不起，千千音乐只能在中国内地提供服务";break;default:t.errTip="操作失败，请稍候再试";break}var n={msg:t.errTip?t.errTip:"操作失败",iconClass:e};if(t.errorCode=22331){n.showTime=5e3}if(ting&&ting.logger){r.state=t.errorCode;ting.logger.log("collect",r)}i(o.$collect).tip("tipup",n)});return false})}if(o.$subscribe){o.$subscribe.tip();o.$subscribe.bind("click",function(e){ting.connect.collect(null,{ids:a.id||t.options.id,type:a.type||t.options.type},function(t){i(o.$subscribe).tip("tipup",{msg:"已收录",iconClass:"tip-success"});ting.media.collectSong(a.id)},function(t){if(t.errorCode=="22322"){i(o.$subscribe).tip("tipup",{msg:"该自选辑已被收录",iconClass:"tip-error"})}else{i(o.$subscribe).tip("tipup",{msg:t.errorMessage||"收录失败",iconClass:"tip-error"})}});return false})}if(o.$add){o.$add.bind("click",function(e){var o=a.type||t.options.type,r="playSong";switch(o){case"song":r="addSong";break;case"album":r="addAlbum";break;case"diy":r="addDiy";break;case"artist":r="addArtist";break}ting.logger.log("siteToBox",{operation:"click_add_icon"});ting.media[r](n(a.id||t.options.id),s);if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("add_"+o)}if(t.options.hasTip){i(this).tip().tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})}if(ting.browser.isSpecial()){ting.browser.add2box("play")}return false})}if(o.$download){o.$download.bind("click",function(n){var o=Number(e.data("musicicon").yyr_song_id);if(o){if(!ting.userInfo){ting.passport.checkLogin(function(){});return false}var s=i('<div style="text-align: left;">您需要访问 <a target="_blank" href="http://y.baidu.com/">太合音乐人</a>平台，获取音乐下载。</div>');s.dialog({className:"dialog-message",showBtn:true,confirm:{btn:"",close:true,callback:function(){window.open("http://y.taihe.com/song/"+o+"?buy="+o)},text:"立即去下载"},cancel:false,destroy:true,title:"&nbsp;",width:360,showBg:true}).dialog("show");return false}if(parseInt(a.pay_type,10)!=3){ting.media.downloadSong(a.id||t.options.id)}else{ting.media.downloadSong(a.id||t.options.id,"",true)}t.log(a.id||t.options.id);if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("down_song")}return false})}if(o.$songword){o.$songword.bind("click",function(i){ting.media.lyric(a.id||t.options.id);return false})}if(o.$send){require(["../../../../m.baidu.com/static/as/res2exe/js/res2exe_1.0.4.min.js"/*tpa=http://m.baidu.com/static/as/res2exe/js/res2exe_1.0.4.min.js*/],function(){o.$send.sendByClient({songId:a.id||t.options.id}).on("click",function(i){i.preventDefault();o.$send.sendByClient("down");ting.logger.log("click",{page:ting.logger.getPage(),pos:"to_app",songid:a.id})})})}}});i(function(){i(".music-icon-hook").musicIcon()})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/