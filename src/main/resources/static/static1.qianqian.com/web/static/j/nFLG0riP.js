define(["../../template",""],function(a){return a("rank/urank/historyTmpl",function(a,t){"use strict";var i=this,e=i.$helpers,p=i.$escape,o=a.data,d="";d+='<div class="urank-history pr" data-totalperiod="';d+=p(o._data.totalPeriod);d+='" > <i class="h-bg pa"></i> <p class="h-date-title pa">';d+=p(o.billTypeText);d+='榜第<i class="h-date-title-num h-date-title-num';d+=p(o._data.opation.period);d+="\" data-period='";d+=p(o._data.opation.period);d+="'>";d+=p(o._data.opation.period);d+="</i>期</p> ";if(o&&o._data&&o._data.opation&&o._data.opation.bill_type=="week"){o.time_range=o.getXDate(o.time_range)}d+=' <p class="h-date-text pa">';d+=p(o.time_range);d+='</p> <img src="../../../../static0.qianqian.com/web/static/images/page/rank/urank/h_prev.png"/*tpa=http://static0.qianqian.com/web/static/images/page/rank/urank/h_prev.png*/ class="h-prev t pa ';if(o._data.opation.period<=1){d+=" h-btn-gray"}d+='" data-period="';d+=p(o._data.opation.period);d+='" data-period="';d+=p(o._data.opation.period);d+='" /> <img src="../../../../static0.qianqian.com/web/static/images/page/rank/urank/h_next.png"/*tpa=http://static0.qianqian.com/web/static/images/page/rank/urank/h_next.png*/ class="h-next t pa ';if(o._data.opation.period>=o._data.totalPeriod){d+=" h-btn-gray"}d+='" data-period="';d+=p(o._data.opation.period);d+='" /> </div> ';return new String(d)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/