(function(e,s){var o=e.browser.msie&&parseFloat(e.browser.version)<7,a=e.browser.msie&&parseFloat(e.browser.version)==7,n=e(".non-payment-wrap"),i=n.find(".close"),t=0,c=e(window).height(),l=250;if(o){n.css("top",c+"px")}else{n.removeClass("non-payment-abs").addClass("non-payment-fixed")}e(window).scroll(function(){var s=document.body.scrollTop||document.documentElement.scrollTop;if(o){if(s>t){n.css("top",s+c-l+"px")}else{n.css("top",c-l+"px")}}else if(a){if(s>t){n.css("right",e(".music-main").offset().right+"px")}else{n.css("right","0px")}}});i.on("click",function(){n.hide()});e.ajax({url:"/huodong/unpaidcallback",dataType:"json",data:{},success:function(e){if(e.data.unpaid_callback_flag==1){n.show();if(o){n.animate({top:c-l},1e3)}else{n.animate({bottom:0},1e3)}}}})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/