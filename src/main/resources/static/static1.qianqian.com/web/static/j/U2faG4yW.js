(function(e){e.fn.dragsort=function(t){if("destroy"==t)e(this.selector).trigger("dragsort-uninit");else{var r=e.extend({},e.fn.dragsort.defaults,t),o=[],a=null,i=null;this.each(function(t,l){e(l).is("table")&&1==e(l).children().size()&&e(l).children().is("tbody")&&(l=e(l).children().get(0));var s={draggedItem:null,placeHolderItem:null,pos:null,offset:null,offsetLimit:null,scroll:null,container:l,init:function(){var o=0==e(this.container).children().size()?"li":e(this.container).children(":first").get(0).tagName.toLowerCase();""==r.itemSelector&&(r.itemSelector=o);""==r.dragSelector&&(r.dragSelector=o);""==r.placeHolderTemplate&&(r.placeHolderTemplate="<"+o+">&nbsp;</"+o+">");e(this.container).attr("data-listidx",t).mousedown(this.grabItem).bind("dragsort-uninit",this.uninit);this.styleDragHandlers(!0)},uninit:function(){var t=o[e(this).attr("data-listidx")];e(t.container).unbind("mousedown",t.grabItem).unbind("dragsort-uninit");t.styleDragHandlers(!1)},getItems:function(){return e(this.container).children(r.itemSelector)},styleDragHandlers:function(t){this.getItems().map(function(){return e(this).is(r.dragSelector)?this:e(this).find(r.dragSelector).get()}).css("cursor",t?"pointer":"")},grabItem:function(t){if(!(1!=t.which||e(t.target).is(r.dragSelectorExclude)||0<e(t.target).closest(r.dragSelectorExclude).size()||0==e(t.target).closest(r.itemSelector).size())){t.preventDefault();for(var a=t.target;!e(a).is(r.dragSelector);){if(a==this)return;a=a.parentNode}e(a).attr("data-cursor",e(a).css("cursor"));e(a).css("cursor","move");var i=o[e(this).attr("data-listidx")],l=this,s=function(){i.dragStart.call(l,t);e(i.container).unbind("mousemove",s)};e(i.container).mousemove(s).mouseup(function(){e(i.container).unbind("mousemove",s);e(a).css("cursor",e(a).attr("data-cursor"))})}},dragStart:function(t){null!=a&&null!=a.draggedItem&&a.dropItem();a=o[e(this).attr("data-listidx")];a.draggedItem=e(t.target).closest(r.itemSelector);a.draggedItem.attr("data-origpos",e(this).attr("data-listidx")+"-"+a.getItems().index(a.draggedItem));var i=parseInt(a.draggedItem.css("marginTop")),l=parseInt(a.draggedItem.css("marginLeft"));a.offset=a.draggedItem.offset();a.offset.top=t.pageY-a.offset.top+(isNaN(i)?0:i)-1;a.offset.left=t.pageX-a.offset.left+(isNaN(l)?0:l)-1;r.dragBetween||(i=0==e(a.container).outerHeight()?Math.max(1,Math.round(.5+a.getItems().size()*a.draggedItem.outerWidth()/e(a.container).outerWidth()))*a.draggedItem.outerHeight():e(a.container).outerHeight(),a.offsetLimit=e(a.container).offset(),a.offsetLimit.right=a.offsetLimit.left+e(a.container).outerWidth()-a.draggedItem.outerWidth(),a.offsetLimit.bottom=a.offsetLimit.top+i-a.draggedItem.outerHeight());i=a.draggedItem.height();l=a.draggedItem.width();"tr"==r.itemSelector?(a.draggedItem.children().each(function(){e(this).width(e(this).width())}),a.placeHolderItem=a.draggedItem.clone().attr("data-placeholder",!0),a.draggedItem.after(a.placeHolderItem),a.placeHolderItem.children().each(function(){e(this).css({borderWidth:0,width:e(this).width()+1,height:e(this).height()+1}).html("&nbsp;")})):(a.draggedItem.after(r.placeHolderTemplate),a.placeHolderItem=a.draggedItem.next().css({height:i,width:l}).attr("data-placeholder",!0));if("td"==r.itemSelector){var s=a.draggedItem.closest("table").get(0);e("<table id='"+s.id+"' style='border-width: 0px;' class='dragSortItem "+s.className+"'><tr></tr></table>").appendTo("body").children().append(a.draggedItem)}s=a.draggedItem.attr("style");a.draggedItem.attr("data-origstyle",s?s:"");a.draggedItem.css({position:"absolute",opacity:.7,"z-index":999,height:i,width:l});a.scroll={moveX:0,moveY:0,maxX:e(document).width()-e(window).width(),maxY:e(document).height()-e(window).height()};a.scroll.scrollY=window.setInterval(function(){if(r.scrollContainer!=window)e(r.scrollContainer).scrollTop(e(r.scrollContainer).scrollTop()+a.scroll.moveY);else{var t=e(r.scrollContainer).scrollTop();if(0<a.scroll.moveY&&t<a.scroll.maxY||0>a.scroll.moveY&&0<t)e(r.scrollContainer).scrollTop(t+a.scroll.moveY),a.draggedItem.css("top",a.draggedItem.offset().top+a.scroll.moveY+1)}},10);a.scroll.scrollX=window.setInterval(function(){if(r.scrollContainer!=window)e(r.scrollContainer).scrollLeft(e(r.scrollContainer).scrollLeft()+a.scroll.moveX);else{var t=e(r.scrollContainer).scrollLeft();if(0<a.scroll.moveX&&t<a.scroll.maxX||0>a.scroll.moveX&&0<t)e(r.scrollContainer).scrollLeft(t+a.scroll.moveX),a.draggedItem.css("left",a.draggedItem.offset().left+a.scroll.moveX+1)}},10);e(o).each(function(e,t){t.createDropTargets();t.buildPositionTable()});a.setPos(t.pageX,t.pageY);e(document).bind("mousemove",a.swapItems);e(document).bind("mouseup",a.dropItem);r.scrollContainer!=window&&e(window).bind("DOMMouseScroll mousewheel",a.wheel)},setPos:function(t,o){var i=o-this.offset.top,l=t-this.offset.left;r.dragBetween||(i=Math.min(this.offsetLimit.bottom,Math.max(i,this.offsetLimit.top)),l=Math.min(this.offsetLimit.right,Math.max(l,this.offsetLimit.left)));this.draggedItem.parents().each(function(){if("static"!=e(this).css("position")&&(!e.browser.mozilla||"table"!=e(this).css("display"))){var t=e(this).offset();i-=t.top;l-=t.left;return!1}});if(r.scrollContainer==window)o-=e(window).scrollTop(),t-=e(window).scrollLeft(),o=Math.max(0,o-e(window).height()+5)+Math.min(0,o-5),t=Math.max(0,t-e(window).width()+5)+Math.min(0,t-5);else var s=e(r.scrollContainer),n=s.offset(),o=Math.max(0,o-s.height()-n.top)+Math.min(0,o-n.top),t=Math.max(0,t-s.width()-n.left)+Math.min(0,t-n.left);a.scroll.moveX=0==t?0:t*r.scrollSpeed/Math.abs(t);a.scroll.moveY=0==o?0:o*r.scrollSpeed/Math.abs(o);this.draggedItem.css({top:i,left:l})},wheel:function(t){if((e.browser.safari||e.browser.mozilla)&&a&&r.scrollContainer!=window){var o=e(r.scrollContainer),i=o.offset();t.pageX>i.left&&t.pageX<i.left+o.width()&&t.pageY>i.top&&t.pageY<i.top+o.height()&&(i=t.detail?5*t.detail:t.wheelDelta/-2,o.scrollTop(o.scrollTop()+i),t.preventDefault())}},buildPositionTable:function(){var t=[];this.getItems().not([a.draggedItem[0],a.placeHolderItem[0]]).each(function(r){var o=e(this).offset();o.right=o.left+e(this).outerWidth();o.bottom=o.top+e(this).outerHeight();o.elm=this;t[r]=o});this.pos=t},dropItem:function(){if(null!=a.draggedItem){var t=a.draggedItem.attr("data-origstyle");a.draggedItem.attr("style",t);""==t&&a.draggedItem.removeAttr("style");a.draggedItem.removeAttr("data-origstyle");a.styleDragHandlers(!0);a.placeHolderItem.before(a.draggedItem);a.placeHolderItem.remove();e("[data-droptarget], .dragSortItem").remove();window.clearInterval(a.scroll.scrollY);window.clearInterval(a.scroll.scrollX);a.draggedItem.attr("data-origpos")!=e(o).index(a)+"-"+a.getItems().index(a.draggedItem)&&r.dragEnd.apply(a.draggedItem);a.draggedItem.removeAttr("data-origpos");a.draggedItem=null;e(document).unbind("mousemove",a.swapItems);e(document).unbind("mouseup",a.dropItem);r.scrollContainer!=window&&e(window).unbind("DOMMouseScroll mousewheel",a.wheel);return!1}},swapItems:function(t){if(null==a.draggedItem)return!1;a.setPos(t.pageX,t.pageY);for(var l=a.findPos(t.pageX,t.pageY),s=a,n=0;-1==l&&r.dragBetween&&n<o.length;n++)l=o[n].findPos(t.pageX,t.pageY),s=o[n];if(-1==l)return!1;var d=function(){return e(s.container).children().not(s.draggedItem)},t=d().not(r.itemSelector).each(function(){this.idx=d().index(this)});null==i||i.top>a.draggedItem.offset().top||i.left>a.draggedItem.offset().left?e(s.pos[l].elm).before(a.placeHolderItem):e(s.pos[l].elm).after(a.placeHolderItem);t.each(function(){var t=d().eq(this.idx).get(0);this!=t&&d().index(this)<this.idx?e(this).insertAfter(t):this!=t&&e(this).insertBefore(t)});e(o).each(function(e,t){t.createDropTargets();t.buildPositionTable()});i=a.draggedItem.offset();return!1},findPos:function(e,t){for(var r=0;r<this.pos.length;r++)if(this.pos[r].left<e&&this.pos[r].right>e&&this.pos[r].top<t&&this.pos[r].bottom>t)return r;return-1},createDropTargets:function(){r.dragBetween&&e(o).each(function(){var t=e(this.container).find("[data-placeholder]"),o=e(this.container).find("[data-droptarget]");0<t.size()&&0<o.size()?o.remove():0==t.size()&&0==o.size()&&("td"==r.itemSelector?e(r.placeHolderTemplate).attr("data-droptarget",!0).appendTo(this.container):e(this.container).append(a.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget",!0)),a.placeHolderItem.attr("data-placeholder",!0))})}};s.init();o.push(s)});return this}};e.fn.dragsort.defaults={itemSelector:"",dragSelector:"",dragSelectorExclude:"input, textarea",dragEnd:function(){},dragBetween:!1,placeHolderTemplate:"",scrollContainer:window,scrollSpeed:5}})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/