require(["core/utils","tmpl/huodong/wensha/person","widget/ucomment/ucomment","page/huodong/dfrc/list","domain_config"],function(t,i,e,n,o){var a=$("#personTmpl");t.tingApi("baidu.ting.active.getWenShaInfo",{item_id:itemId,activity_id:activityId}).done(function(t){t.result.has_vote=t.has_vote;t=t.result;a.html(i({list:[t],info:t}));$(".person-comment").show();n.init();bdShare({bdText:"求关爱！助力"+t.real_name+"直达千千音乐“温莎当下·麦克成风”2017赛季总决赛！",bdDesc:"千千音乐“温莎当下·麦克成风”2017赛季火热进行中，这个夏天，让我们一起嗨起来！",bdUrl:o.host+"/cms/webview/song_vote/ws/vote.html?uid="+itemId,bdPic:"../../../../static3.qianqian.com/web/static/i/ouKCax7R.jpg"/*tpa=http://static3.qianqian.com/web/static/i/ouKCax7R.jpg*/})});e.init({apiParam:{type:10,type_id:itemId},callback:function(){}})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/