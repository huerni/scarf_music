require(["widget/pop_window/pop_window","core/utils","page/songlist/songlist"],function(t,i){var o=$(".songlist-info-desc-text");var s=$(".songlist-info-box");var e=window.location.href.split("/")[4],l,n,c;songListApiInfo=function(){var t={list_id:e,size:20,offset:0,withcount:1};i.tingApi("baidu.ting.ugcdiy.getBaseInfo",t).done(function(t){l=t.result.iscollect;n=t.result.collect_num||0;if(l==1){c="已收藏"}else{c="收藏"}$(".col-collect").find(".btn-text").html('<i class="btn-icon btn-collect-icon"></i><span class="collectText">'+c+'</span><em class="to collectNum">'+n+"</em>");if(l==1){$(".col-collect").find("a").removeClass("btn-collect");$(".col-collect").find("a").addClass("btn-collected")}})};songListApiInfo();$(".col-collect").find("a").live("click",function(){songListApiInfo()});$(".songlist-info-share").mouseover(function(){$(".share-box").show()}).mouseout(function(){$(".share-box").hide()});$(".show-songlist-desc").live("click",function(){var t=$(this);var i=o.html();t.addClass("hide-songlist-desc").html("收起").removeClass("show-songlist-desc");o.html(o.attr("data-desctext")).attr("data-desctext",i)});$(".hide-songlist-desc").live("click",function(){var t=$(this);var i=o.html();t.addClass("show-songlist-desc").html("展开").removeClass("hide-songlist-desc");o.html(o.attr("data-desctext")).attr("data-desctext",i)});$(".songlist-similar-list dt a").click(function(){if(ting&&ting.logger){ting.logger.log("click",{page:"ugc_gddetail",pos:"recom_pic"})}});$(".songlist-similar-list dd a").click(function(){if(ting&&ting.logger){ting.logger.log("click",{page:"ugc_gddetail",pos:"recom_gd"})}});$(".songlist-info-edit-btn").click(function(){if(ting&&ting.logger){ting.logger.log("click",{page:"ugc_home",pos:"gddetail_edit"})}});$(".no-link").click(function(){var i=$($(this).parents("li")[0]);var o=t.create({spPop:true,title:"抱歉，该歌曲暂时下架，<br/>去听一下为您匹配的相关歌曲吧：）",text:{btnText:"好的"},callback:function(){window.open("/search?key="+i.data("songitem").songItem.sname);t.destory(o)}});return false})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/