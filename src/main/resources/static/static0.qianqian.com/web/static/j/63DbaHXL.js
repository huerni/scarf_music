define(["../template",""],function(a){return a("dynamic/dynamic",function(a,i){"use strict";var s=this,d=s.$helpers,c=a.isForwad,e=s.$escape,t=a.data,l=a.weiboNew,n="";n+='<div class="dynamic-edit"> <div class="dynamic-edit-textarea"> <textarea placeholder="';if(c){n+="说说对这条动态的感想吧"}else{n+="分享与音乐、与你有关的一切"}n+='" class="textarea-hook"></textarea> <div class="textarea-pos-hook"></div> </div>  <div class="dynamic-edit-image"> <ul></ul> <a href="javascript:;" class="more">+<input name="filePath" class="img-upload-hook" type="file" /></a> <div style="clear:both;"></div> </div>  ';if(c){n+=' <div class="dynamic-edit-forwad"><i></i><span>转发：';n+=e(t.dorigin.user.username);n+="的动态</span> </div> "}else{n+=' <div class="dynamic-edit-add"> <div class="dynamic-edit-music add-music-hook"> <div class="result-line dynamic-edit-music-tmpl"> <div class="default left"><i></i><span class="t1">添加音乐</span><span class="t2">歌曲&nbsp;&nbsp;专辑&nbsp;&nbsp;歌手&nbsp;&nbsp;歌单</span></div> </div> <b></b> </div> <div class="dynamic-edit-topic add-topic-hook"> <div class="result-line dynamic-edit-topic-tmpl"> <div class="default left"><i></i><span class="t1">添加话题</span></div> <b></b> </div> </div> </div> '}n+='  <div class="dynamic-edit-icon"> ';if(!c){n+=' <a href="javascript:;" class="icon-img"><input name="filePath" class="img-upload-hook" type="file" /></a> '}n+=' <a href="javascript:;" class="icon-at at-hook"></a> <a href="javascript:;" class="icon-face face-hook"></a> </div> ';if(!c){n+=' <div class="dynamic-edit-share"> <span>同时分享到新浪微博</span> <ul> <li> ';if(!l||l==""){n+=' <i class="new"></i> '}n+=' <a href="javascript:;" class="sina sina-hook"></a> </li> </ul> </div> '}n+=' <div style="clear:both;"></div>  <div class="dynamic-edit-btn"><a href="javascript:;" class="commit send-hook">发布</a><a href="javascript:;" class="cancel">取消</a></div>  <div class="dynamic-edit-sug"> <div class="dynamic-edit-sug-wrap"> <b class="bg-top"></b> <a href="javascript:;" class="close"></a> <div class="dynamic-edit-sug-content"> <div class="sug-input-tmpl"></div> <div class="sug-tab-tmpl"></div> <div class="sug-list-tmpl"></div> </div> <b class="bg-bottom"></b> </div> </div> </div>  ';return new String(n)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/