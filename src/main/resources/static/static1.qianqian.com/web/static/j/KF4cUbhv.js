define(["core/utils","tmpl/comment/list","tmpl/comment/item","widget/filed/filed","widget/report/report","widget/toast/toast","widget/pop_window/pop_window","widget/page_navigator/page_navigator"],function(e,t,i,n,a,o,s){var r={};var l={baseEl:$("body"),apiParam:{type:0,type_id:0,author_id:0},innerSelect:".comment-wrap",plugin:{pageHook:".page-navigator-hook"},callback:function(){}};var c=function(e){r.options=$.extend(l,e);r.$base=r.options.baseEl;r.$ucmInner=$(r.options.innerSelect,r.$base);r.$listTmpl=$(".comment-list-tmpl",r.$ucmInner);r.$btnSend=$(".send-hook",r.$ucmInner);r.$popTmpl=$(".pop-tmpl",r.$ucmInner);m();v()},m=function(){r.$ucmSync=$(".sync-hook",r.$base);if(e.getCookie("_csync")!=1){r.$ucmSync.attr("checked",true)}r.$ucmSync.on("change",function(t){var i=$(this);if(i.is(":checked")){e.setCookie("_csync",0)}else{e.setCookie("_csync",1)}});r.$listPage=$(".comment-list "+r.options.plugin.pageHook,r.$base).pageNavigator();r.$listPage.on("pagenavigator.pagechange",function(e,t){v(t.start)});r.P=1,r.NP=1;r.msg_users=[];r.reply_item={};r.filed=n.init({baseEl:r.$ucmInner});r.filed.$editText.on("add:user",function(e,t){_(t.userid,t.username)});r.filed.$editText.on("add:face",function(e,t){});r.filed.$editText.on("edit",function(e,t,i){d(t,i)});r.filed.$editText.on("send",function(t,i){var a=$(this);var o=function(){var t=a.val(),i=0;replyIndex=t.indexOf(r.reply_item.text);if(replyIndex!==0){r.reply_item={};i=0}else{i=1;t=t.substr(replyIndex+r.reply_item.text.length)}var o=$.extend(r.options.apiParam,{comm_id:r.reply_item.com_id||"",comm_content:t,msg_users:JSON.stringify(r.msg_users)});if(r.reply_item.author&&r.reply_item.author.userid>0){o=$.extend(o,{author_id:r.reply_item.author.userid})}if(r.$ucmSync.is(":checked")){o.is_sync=1}e.tingApi("baidu.ting.ugcmsg.addComment",o,{type:"POST"}).done(function(e){n.clear(r.filed);r.options.callback();h(e.message_id,o,i);k("succ","发送成功")}).fail(function(t){var i="发送失败";if(t){var n=e.getApiCode();switch(t.error_code){case n.USER_UNLOGIN:i="未检测登录状态";break;case n.CONTENT_HAVE_ANTI:i="内容含有黄反或敏感信息，请审查";break;case n.ACTION_FREQUENT:i="发送频繁，稍后再试";break;case n.USER_NO_PERMISSION:i="用户被封禁，禁止操作";break}}k("fail",i)})};ting.passport.checkLogin(o)});r.$listTmpl.on("click",".icon-like",function(){var e=$(this);ting.passport.checkLogin(function(){if(e.hasClass("icon-like-ard")){u(2,e)}else{u(1,e)}})}).on("click",".icon-reply",function(){var e=$(this);r.reply_item=p(e);r.reply_item.text="回复@"+r.reply_item.author.username+" ：";var t=e.parents("li").find(".content-text").html();n.setText(r.filed,r.reply_item.text);_(r.reply_item.author.userid,r.reply_item.author.username,t);g()}).on("click",".icon-report",function(){var e=$(this);ting.passport.checkLogin(function(){var t=p(e);a.init({baseEl:r.$ucmInner,apiParam:{report_id:t.author.userid,type:r.options.apiParam.type,type_id:r.options.apiParam.type_id,msg_id:t.com_id}})})}).on("click",".icon-del",function(){var e=$(this);ting.passport.checkLogin(function(){f(e)})})};var d=function(e,t){var i=120;var n=r.$ucmInner.find(".edit-num-hook"),a=i-t.length,o="",s="";if(a<0){o="超过"+Math.abs(a)+"个字";s="tip-error"}else{o="还能输入"+a+"个字"}n.html(o).removeClass("tip-error").addClass(s);if(r.$btnSend.hasClass("disabled")&&$.trim(t)!=""&&s==""){r.$btnSend.removeClass("disabled")}else if(!r.$btnSend.hasClass("disabled")&&$.trim(t)==""||s!=""){r.$btnSend.addClass("disabled")}},p=function(e){var t=e.parents("li");var i=t.data("item");return i},u=function(t,i){var n=t==2?"baidu.ting.ugcfav.delFav":"baidu.ting.ugcfav.addFav";var a=p(i);if(!a.author.userid){k("fail","不能为自己点赞");return}var o=$.extend(r.options.apiParam,{comm_id:a.com_id,author_id:a.author.userid});e.tingApi(n,o).done(function(e){t==2?i.removeClass("icon-like-ard"):i.addClass("icon-like-ard");var n=t==2?"取消点赞成功":"点赞成功";var a=i.find(".like-num-hook"),o=parseInt(a.html());a.html(t==2?--o:++o);k("succ",n)}).fail(function(e){var i=t==2?"取消点赞失败":"点赞失败";k("fail",i)})},f=function(t){var i=p(t);r.delWindow=s.create({spPop:true,title:"确认删除评论？",text:{btnText:"删除"},callback:function(){var n=$.extend(r.options.apiParam,{comm_id:i.com_id});e.tingApi("baidu.ting.ugcmsg.delMsg",n).done(function(e){t.parents("li").remove();k("succ","删除成功");if(r.$listTmpl.find("li").length==0){r.$listTmpl.find(".comment-list-wrap").addClass("comment-list0")}}).fail(function(e){k("fail","删除失败")});s.hide(r.delWindow)}})},g=function(e){try{n.setFild(r.filed,100)}catch(t){r.filed.$editText.focus()}var i=$(window);if(e&&e.length>0){i=e}var a=parseInt($(".comment-bookmark-hook",r.$base).offset().top);i.scrollTop(a)},h=function(e,t,n){if(e){var a=ting.userInfo.passInfo.avatar_small;var t=t;t.message_id=e;t.avatar_img=a;t.isReply=n;t.userId=$.cookie("userid");t.userName=ting.userInfo.userName;if(n&&t.msg_users){var o=JSON.parse(t.msg_users);if(o.length>0){t.replyInfo=o[o.length-1]}}var s=r.$listTmpl.find(".hot-last");if(s.length>0){s.after(i(t))}else{r.$listTmpl.find(".comment-list-wrap").removeClass("comment-list0");r.$listTmpl.find("ul").prepend(i(t))}}else{k("fail","发送失败，请重试！")}},_=function(e,t,i){r.msg_users.push({userid:e,username:t,content:i||""})};var v=function(i){var n=this;var a=20,o=$.extend(r.options.apiParam,{size:a,offset:i||0});e.tingApi("baidu.ting.ugcmsg.getCommentListByType",o).done(function(e){e=e.result;e.hot_len=e.commentlist_hot.length;if(e.commentlist_last.length>0){if(e.commentlist_hot.length>0){e.commentlist_hot[e.commentlist_hot.length-1].hotLast=1;e.list=e.commentlist_hot.concat(e.commentlist_last)}else{e.list=e.commentlist_last}}else{e.list={}}r.$listTmpl.html(t(e));if(!i||i==0){var n=e.commentlist_last_nums||0;var o=Number(n)||0;if(o>9999){o=(o/1e4).toFixed(2)+" 万"}r.$ucmInner.find(".title-num-hook").html(o+"条");$(r.options.plugin.pageHook,r.$ucmInner).data("pageNavigator").setParam({total:n,size:a,start:0,page:1})}}).fail(function(e){r.$listTmpl.empty()})},k=function(e,t,i){o.show({innerSelect:".toast-tmpl",data:{cls:e,text:t},callback:i})};r.init=function(e){c(e)};r.bookmark=function(e){g(e)};return r});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/