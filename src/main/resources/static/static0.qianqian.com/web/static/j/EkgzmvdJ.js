define(["../../template","./list"],function(a){return a("huodong/rl/bang",function(a,i){"use strict";var s=this,e=s.$helpers,t=s.$escape,l=a.vote,r=a.tab1,c=a.tab2,n=a.i,d=a.item,f=a.tab2_key,v=e.dateFormat,h=function(e,t){t=t||a;var l=s.$include(e,t,i);p+=l;return p},o=a.list,u=a.offset,p="";p+=' <div class="index-vip"> <span>剩余票数：<span>';p+=t(l);p+='</span></span> <span class="distance">开通VIP会员每日可投30票哦，<a id="rz-kthy" href="http://static0.qianqian.com/vip/payment?f=rl" target="_blank">立即开通</a></span> </div>  <div class="ws-list-wrap clearfix" id ="dingwei"> ';if(r){p+=' <ul class="ws-tab-1 clearfix"> <li><a href="javascript:;" class="new-hook">海选赛</a></li> <li class="visited"><a href="javascript:;" class="week-hook">复活赛</a></li> </ul> '}p+=" ";if(c){p+='  <!-- <ul class="ws-tab-2 clearfix"> ';for(n=0;n<c.length;n++){d=c[n];p+=" <li ";if(f==d.sid){p+='class="visited"'}p+=">";if(n>0){p+="<i></i>"}p+='<a href="javascript:;" class="area-hook" data-sid="';p+=t(d.sid);p+='">';p+=t(d.title);p+='</a> <div class="time">';p+=t(v(d.start_time,"http://static0.qianqian.com/web/static/j/MM.dd"));p+="-";p+=t(v(d.end_time,"http://static0.qianqian.com/web/static/j/MM.dd"));p+="</div> </li> "}p+=" </ul> --> "}p+=' <div class="list-search clearfix"> <div class="list-search-wrap clearfix"> <i></i> <input type="text" id="search" name="search" onblur="if(this.value == \'\'){this.value = \'搜索选手编号\';}" onfocus="if(this.value == \'搜索选手编号\'){this.value = \'\';}" value="搜索选手编号" /> </div> <a href="javascript:;" class="search-hook ">搜索</a> </div> ';h("./list",{list:o,offset:u||0});p+=" </div>";return new String(p)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/