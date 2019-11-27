(function () {
    var url = 'http://aladdin.sj.soupingguo.com/res/js/res2exe_1.2.1.js?t='+ new Date().getTime();
    var doc = document,
		head = doc.getElementsByTagName('head')[0],
		script = doc.createElement('script');
    script.src = url;
    script.charset = 'UTF-8';
    head.appendChild(script);
})();