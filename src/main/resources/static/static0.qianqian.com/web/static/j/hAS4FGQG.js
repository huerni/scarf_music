(function(n){var i=n(".product-dialog");n(".clients-android").on("click",function(){i.dialog({width:618,stick:true}).dialog("show")});$clientsPc=n(".clients-pc");if(/mac/i.test(navigator.userAgent)){$clientsPc.show().attr("href","//download.qianqian.com/channel/2/web_xiangqingad").attr("data-log",'{ "pos":"mac_down" }').html('<span class="icon css-icon-mac"></span>Mac版本')}else{$clientsPc.show();n(".clients-wrapper-pc .send-vip").show();var e;$clientsPc.on("mouseenter",function(){var i=n(".pc-tips");ting.loadChildImages(i,arguments.callee);i.show();ting.logger.log("exposure",{page:ting.logger.getPage(),expoitem:"pannel_dl_qianqian"})}).on("mouseleave",function(){e=setTimeout(function(){n(".pc-tips").hide()},100)});n(".pc-tips").on("mouseenter",function(){clearTimeout(e)}).on("mouseleave",function(){n(this).hide()}).on("click",function(){ting.logger.log("click",{pos:"dl_qianqian",page:"panel",sub:ting.logger.getPage()})})}n(".clients-iphone").click(function(){var i=295;var e=n(".ios-tips");ting.loadChildImages(e,arguments.callee);e.css("display")==="none"?e.css("left",i).fadeIn():e.fadeOut();return false});n(".ios-tips .close").click(function(){n(".ios-tips").fadeOut();return false});n(".clients-iphone,.clients-pc,.clients-android,.clients-ipad",n("#download-clients")).bind("click",function(){ting.logger.plogClick(n(this).data("log").pos)})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/