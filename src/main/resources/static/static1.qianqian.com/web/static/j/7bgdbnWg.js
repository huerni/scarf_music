(function(t,e){var s={},i=1,a={};s.init=function(e){if(e.target){this.target=t(e.target);t("body").append(this.target)}else{this.target=t(this.data("target"));t("body").append(this.target.remove())}this.target.loadImages&&this.target.loadImages();this.target.css("position","absolute");s.updatePos.call(this,e);s.registerClose.call(this,e);this.target.fadeIn();this.data("showTipsID",i);a[i]=this.target;i++};s.registerClose=function(t){var e=this.target.find(".close");if(e.length){e.on("click",function(e){return function(){e.fadeOut();t.onClose?t.onClose():"";return false}}(this.target))}this.target.find(".close-link").on("click",function(e){return function(){e.hide();t.onClose?t.onClose():""}}(this.target))};s.updatePos=function(t){var e=this.offset(),s=e.left,i=e.top;this.target.css({left:s+this.width()/2-this.target.width()/2+t.left,top:i+this.height()+t.top})};s.show=function(e){e=t.extend({left:0,top:0},e);var i;if(!(i=this.data("showTipsID"))){s.init.call(this,e)}else{this.target=a[i];if(e.update){s.updatePos.call(this,e)}this.target.css("display")==="none"?this.target.fadeIn():this.target.fadeOut()}};t.fn.showTips=s.show})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/