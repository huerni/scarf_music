require(["core/utils","widget/toast/toast","widget/pop_window/pop_window"],function(t,o){var a,l=$(".music-body"),i=$(".adds"),e=$(".add-to"),n=$(".collect-artists"),s=".page_navigator-box .page-navigator-hook",c=$(".album-cover-hook"),r=$(".playlist-add"),u=$(".collectText"),d=$(".collect-btn"),m=$(".collect-num"),g=$(".album-slider"),b=r.data("playlist"),f={collect:"&#xe637;",collected:"&#xe62b;"},p="",v=550,h={},k=function(){w();y();c.albumCover();var t=$(".downsong").data("downdata");var o=t.ids;var a=t.downIDs;var l=t.downFeeIDs;var e=a.length;var n=l.length;var r=t.albumname;var u=t.author;h={clientUrlPos:"web_piliang",moduleName:t.moduleName,ids:t.ids||"",mediaType:2,albumId:t.albumId||"",_aiPresaleFlag:t._aiPresaleFlag||"",resourceTypeExt:t.resourceTypeExt||"",albumPic:t.albumPic||"",albumTitle:t.albumTitle||"",albumPublishTime:t.albumPublishTime||""};i.data("songid",h.ids);var d=$(".album-fixed-info");var m=false;var b=false;window.onscroll=function(){var t=parseFloat($(window).scrollTop());var o=$(".comment-wrap").offset().top;if(t>o&&!m){ting.logger.log("click",{page:"m_album",pos:"comment",sub:"",albumid:h.albumId});m=true}if(t>v){g.addClass("album-slider-fixed");d.addClass("album-fixed-info-150");if(!b){ting.logger.log("click",{page:"m_album",pos:"left_album",sub:"pop",albumid:h.albumId})}b=true}else{g.removeClass("album-slider-fixed");d.removeClass("album-fixed-info-150")}y()};$(window).bind("resize",function(){y()});var f=function(t){var o=$(".page_navigator-box").data("size")||15;var a={start:t.start,size:o,album_id:h.albumId};return a};var p=$(s).pageNavigator();p.bind("pagenavigator.pagechange",function(t,o){var a={start:o.start};var l=f(a,"song");a.worksList=$(".table-box");_(a);ting.connect.getAlbumSong(l,null,function(t){$(".song-list-wrap",a.worksList).html(t.data.html);x(a);I()},function(t){$(".song-list-wrap",a.worksList).html(t.data.html);x(a)})});var k=0;var C=setInterval(function(){k++;if(ting&&ting.userInfo){clearInterval(C);F({type:"auto"})}if(k>6){clearInterval(C)}},500);T();$(".tags-links-bottom").hide()},w=function(){l.on("mouseenter",".time-control .add, .time-control .sub",function(){var t=$(this);t.addClass("hover");var o=t.data("timetype")||"";if(o=="add"){t.html('<i class="iconfont">&#xe632;</i> 0.5')}else{t.html('<i class="iconfont">&#xe631;</i> 0.5')}}).on("click",".discuss",function(){$(window).scrollTop($(".ucomment-new").offset().top);ting.logger.log("click",{page:"m_album",pos:"comment",sub:"top",albumid:h.albumId})}).on("mouseleave",".time-control .add, .time-control .sub",function(){var t=$(this);t.removeClass("hover");var o=t.data("timetype")||"";if(o=="add"){t.html('<i class="iconfont">&#xe632;</i>')}else{t.html('<i class="iconfont">&#xe631;</i>')}}).on("click",".time-control .add, .time-control .sub",function(){resetLrcTime($(this))}).on("click",".collect-artists",function(){ting.passport.checkLogin(function(){})}).on("click",".downsong",function(){L($(this));ting.logger.log("click",{page:"m_album",pos:"download",sub:"top",albumid:h.albumId})}).on("click",".buy-vip",function(){var t=new ting.tPay({type:"vip"});t.load()}).on("click",".collect-artist",function(){A({type:"click"})}).on("click",".collected-artist",function(){P({type:"click"})}).on("click",".btn-collect",function(){j($(this));ting.logger.log("click_albumFavor",{})}).on("click",".btn-collected",function(){B($(this));ting.logger.log("click_cancelFavor",{})}).on("click",".collect-artist-btn",function(){A($(this))}).on("click",".collected-artist-btn",function(){cancelCollectArtist($(this))}).on("click",".song-opera .icon-adds-new, .song-opera .add-to-playlist",function(t){var t=t||window.envet;t.preventDefault();if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}ting.logger.log("click",{page:"m_album",pos:"add_song",sub:"top",albumid:h.albumId});if($(this).hasClass("gray")){return}D()}).on("click",".report",function(){}).on("mouseover",".adds-hook",function(){var t=$(this);if(t.hasClass("gray")){return}if(t.hasClass("add-song-btn-vip")&&BDUS&&BDUS.vipState!="gold"){return}e.show();if(/mac/i.test(navigator.userAgent)){$(".add-to-pc").attr("href","//download.qianqian.com/channel/2/"+type)}var o=setInterval(function(){if(e.css("display")=="none"){$(".songlist-collect-to").remove();clearInterval(o)}},200)}).on("mouseout",".adds-hook",function(){var t=$(this);if(t.hasClass("add-song-btn-vip")&&BDUS&&BDUS.vipState!="gold"){return}e.hide()}).on("click",".add-to-pc",function(t){var t=t||window.envet;t.preventDefault();if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}L();ting.logger.log("click",{page:"m_album",pos:"add_client",sub:"top",albumid:h.albumId})}).on("mouseover",".song-opera .add-to-songlist",function(){S($(this));ting.logger.log("click",{page:"m_album",pos:"add_songlist",sub:"top",albumid:h.albumId})}).on("click",".add-to-songlist",function(t){var t=t||window.envet;t.preventDefault();if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}if(ting&&ting.passport){ting.passport.checkLogin(function(){})}}).on("mouseover",".add-to-pc, .add-to-playlist",function(){$(".songlist-collect-to").remove()}).on("click",".pop-introduce-box .close",function(){$(".pop-introduce-box").hide()}).on("click",".des-more-hook-zhankai",function(){$(".pop-introduce-box").show();ting.logger.log("click",{page:"m_album",pos:"more",sub:"top",albumid:h.albumId})}).on("click",".buy-album",function(){ting.logger.log("click",{page:"m_album",pos:"top",sub:"buy",albumid:h.albumId})}).on("click",".song-list-wrap .songlist-songname",function(){ting.logger.log("click",{page:"m_album",pos:"tab_album",sub:"name",albumid:h.albumId})}).on("click",".song-list-wrap .singer",function(){ting.logger.log("click",{page:"m_album",pos:"tab_album",sub:"pic",albumid:h.albumId})}).on("click",".mod-other-list .more",function(){ting.logger.log("click",{page:"m_album",pos:"left_album",sub:"all",albumid:h.albumId})}).on("click",".mod-other-list .album-name",function(){ting.logger.log("click",{page:"m_album",pos:"left_album",sub:"name",albumid:h.albumId})}).on("click",".song-list-wrap .list-menu",function(){ting.logger.log("click",{page:"m_album",pos:"tab_song",sub:"other",albumid:h.albumId})}).on("click",".play-all",function(){ting.logger.log("click",{page:"m_album",pos:"top",sub:"playall",albumid:h.albumId})}).on("mouseover",".album-play, .album-cover-hook .cover",function(){$(this).closest(".album-cover-hook").find(".album-cover-bg").show()}).on("mouseout",".album-play, .album-cover-hook .cover",function(){$(this).closest(".album-cover-hook").find(".album-cover-bg").hide()});$("body").click(function(t){var t=window.event||event;var o="pop-introduce-box";if($(t.target).hasClass("des-more-hook")||$(t.target).hasClass(o)||$(t.target).closest("."+o).length>=1){return}$("."+o).hide()})},_=function(t){$mask=$("<div>").attr("class","ajax-mask").css("height",t.worksList.height());$maskBox=$("<div>").attr("class","ajax-mask-box").html("加载中...");t.worksList.css({position:"relative",zoom:1}).append($mask).append($maskBox)},x=function(t){$mask=$("<div>").attr("class","ajax-mask");$maskBox=$("<div>").attr("class","ajax-mask-box");$(".ajax-mask",t.worksList).remove();$(".ajax-mask-box",t.worksList).remove()},I=function(){var t=window.opera?document.compatMode=="CSS1Compat"?$("html"):$("body"):$("html,body");var o=$(".album-detail").offset().top;t.stop().animate({scrollTop:o},200)},y=function(){var t=document.documentElement.clientHeight;var o=$(".album-slider");var a=$(".mod-other-list .body");if(t<=680&&o.hasClass("album-slider-fixed")){a.addClass("overflow")}else{a.removeClass("overflow")}},C=function(t){var t=Number(t)||0;if(t>9999){t=(t/1e4).toFixed(2)+" 万"}return t},T=function(){var o=$(".album-info-box .base-info").data("albumid");t.tingApi("baidu.ting.album.getAlbumInfo",{album_id:o}).always(function(t){if(t&&t.albumInfo&&t.albumInfo.album_id){$(".song-hot-num-unic").html(C(t.albumInfo.hot)).attr("data-total",t.albumInfo.hot);$(".shares-num-unic").html(C(t.albumInfo.share_num)).attr("data-total",t.albumInfo.share_num);$(".discuss-num-unic").html(C(t.albumInfo.comment_num)).attr("data-total",t.albumInfo.comment_num);$(".collect-num-unic").html(C(t.albumInfo.collect_num)).attr("data-total",t.albumInfo.collect_num);if(t.is_collect){d.addClass("btn-collected").removeClass("btn-collect");d.find(".iconfont").html(f.collected)}}})},P=function(){t.tingApi("baidu.ting.ugcdiy.deleteFavoriteDiy",{list_id:p,source:2}).done(function(){n.addClass("collect-artist").removeClass("collected-artist").html("收藏TA");o.show({data:{cls:"succ",text:"取消成功"}})}).fail(function(t){o.show({data:{cls:"fail",text:"取消失败"}})});ting.logger.log("click",{page:"m_album",pos:"top",sub:"cancelFavor",albumid:h.albumId})},A=function(a){t.tingApi("baidu.ting.ugcdiy.addFavoriteDiy",{list_id:p,source:2}).done(function(){o.show({data:{cls:"succ",text:"收藏成功"}});n.addClass("collected-artist").removeClass("collect-artist").html("已收藏")}).fail(function(t){switch(t.error_code){case 22713:t.tipText="已收藏过该艺人";break;case 22001:case 22005:t.tipText="收藏失败";break;case 22706:t.tipText="收藏数量过限";break;default:t.tipText="收藏失败"}if(t.error_code==22713){n.addClass("collected-artist").removeClass("collect-artist").html("已收藏")}else{n.addClass("collect-artist").removeClass("collected-artist").html("收藏TA")}o.show({data:{cls:"fail",text:t.tipText}})});ting.logger.log("click",{page:"m_album",pos:"top",sub:"favor",albumid:a.albumId})},F=function(o){var o=o||{};p=n.data("artistid")||"";if(ting&&ting.userInfo){t.tingApi("baidu.ting.artist.getInfo",{from:"web",tinguid:p}).always(function(t){if(t.is_collect==1){n.addClass("collected-artist").removeClass("collect-artist").html("已收藏")}else{n.addClass("collect-artist").removeClass("collected-artist").html("收藏TA")}}).fail(function(t){})}else{ting.passport.checkLogin(function(){})}},S=function(t){if(ting&&ting.userInfo){var o=$("<li></li>");function a(){$(".mylist-mysinglesong-box").remove()}var l=t.data("songid").ids;l=l.join(",");require(["widget/ucollect_to/ucollect_to_songdetail_new"],function(o){createSonglist=o;createSonglist.createSonglists("",l,a,t)})}},D=function(){if(h.resourceTypeExt&&(h.resourceTypeExt==3||h.resourceTypeExt==4)){ting.checkSellResourse(h.id,h.albumId,function(t){h.isPay=t;ting.media.addAlbum(h.albumId,h);if(t!=1||siPresaleFlag==1){}else{o.show({data:{cls:"succ",text:"添加成功"}})}});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("add_song");ting.logger.log("singleAdd",{sid:id,song_title:h.songTitle,isPay:2,source:"song"})}}else{ting.media.addAlbum(h.albumId,h);o.show({data:{cls:"succ",text:"添加成功"}});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("add_song");ting.logger.log("singleAdd",{sid:h.albumId,source:"song"})}}},L=function(){h.clientUrlPos="web_piliang";ting.media.downloadSong(h.ids,"","","",h);var t=setTimeout(function(){clearTimeout(t);w()},1e3)},B=function(a){var l={list_id:b.listid||"",source:1};t.tingApi("baidu.ting.ugcdiy.deleteFavoriteDiy",l).done(function(t){if(t.error_code==22e3){a.data("collected",false);o.show({data:{cls:"succ",text:"取消收藏成功！"}});a.addClass("btn-collect").removeClass("btn-collected");d.find(".iconfont").html(f.collect);var l=$(".collect-num").data("total");var i=Number(l);i=i==0?0:i-1;$(".collect-num-unic").data("total",i);m.html(i)}}).fail(function(t){o.show({data:{cls:"fail",text:"操作失败，请稍候再试 !"}})});ting.logger.log("click",{page:"m_album",pos:"top",sub:"cancelFavor1",albumid:h.albumId})},j=function(a){if(!b.listid){o.show({data:{cls:"fail",text:"该专辑不存在！"}})}ting.passport.checkLogin(function(){t.tingApi("baidu.ting.ugcdiy.addFavoriteDiy",{list_id:b.listid||"",source:1}).done(function(t){if(t.error_code==22e3){r.data("collected",true);o.show({data:{cls:"succ",text:"收藏成功!"}});a.addClass("btn-collected").removeClass("btn-collect");d.find(".iconfont").html(f.collected);var l=$(".collect-num").data("total");var i=Number(l)+1;m.html(i);$(".collect-num-unic").data("total",i)}}).fail(function(t){var a="tip-error";var l="";switch(Number(t.error_code)){case 22713:a="tip-warning";l="专辑已收藏过";u.html("已收藏");break;case 22001:l="操作失败，请稍候再试 ";break;case 22706:l="收藏数量已满，去个人中心管理收藏吧";break;default:l="操作失败，请稍候再试 "}o.show({data:{cls:"fail",text:l}})})});ting.logger.log("click",{page:"m_album",pos:"top",sub:"favor1",albumid:h.albumId})};k()});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/