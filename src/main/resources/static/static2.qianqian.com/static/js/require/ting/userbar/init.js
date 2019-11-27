define(['../vip/top_right_menu'], function () {
//    console.log("4");
    window.enterState = (function (sUsrBarWapperID) {
        var oUserInfo, oTemplateMap, sLocation, eUsrBar, bBindUserBar, fEnterState, showUserCenter;
        sLocation = encodeURIComponent(location.href);
        oUserInfo = {
            "sTemplate": "guest",
            "sUserName": '',
            "sSpaceLink": '',
            "sProfileURL": 'http://passport.baidu.com/#0,1',
            "sHomeURL": "http://passport.baidu.com/v2/?ucenteradduname",
            "sPaylistURL":"/paylist",
            "sBaiduURL": 'http://www.baidu.com/',
            "sLoginURL": 'javascript:;',
            "sRegURL": 'http://passport.baidu.com/v2/?reg&regType=1&tpl=music&u=' + sLocation,
            "sLogoutURL": 'http://passport.baidu.com/?logout&tpl=music&u=' + sLocation,
            'sOpenMbox': '<a href="###" onclick="return ting.media.openPlayer(),false">音乐盒</a>',
            "sMusicVIPURL": '/home/vip?pst=home' + (isKr ? '&_vk=pay_k_load' : ''),
            "sUsercenterURL": "/home/user",
            "sReceiveURL": "/home/gift",
            "enable_fee": false,
            "sUserVipURL": "/home/vip" + (isKr ? '?_vk=pay_k_load' : ''),
            "vipIcon": "<span title='未开通VIP会员' class='power-icon-min index-icon-vipidentity'></span>",
            "activeVipIcon": "<span title='成为音乐VIP会员' class='power-icon-min index-icon-vip-active'></span>"
        };

        oTemplateMap = {

            "guest": '<ul><li id="receiveActive" style="margin-right:20px; display:none;"><a rel="nofollow" href="#{sReceiveURL}"><span class="limit-active"></span>免费体验特权！</a></li><li><a  target="_blank" href="#{sBaiduURL}">百度首页</a></li><li class="line">|</li><li class="vip-intro"><a  target="_blank" href="#{sMusicVIPURL}"><span class="z1">音乐VIP</span><span class="mn-lk"></span></a><a target="_blank" href="#{sMusicVIPURL}">#{activeVipIcon}</a></li><li class="line">|</li><li><a rel="nofollow" href="#{sLoginURL}" id="loginbtn">登录</a><a target="_blank" href="#{sRegURL}" rel="nofollow">注册</a></li><li id="oldLine" style="display:none" class="line">|</li><li id="oldMp3Entry" style="display:none"><a href="http://static2.qianqian.com/?goto=old_mp3">MP3旧版</a></li></ul>',

            "user": '<ul><li id="receiveActive" style="margin-right:20px; display:none;"><a rel="nofollow" href="#{sReceiveURL}"><span class="limit-active"></span>免费体验特权！</a></li><li class="uname mn-lk-w"><a id="anchor-user-name" href="#{sMusicVIPURL}" target="_blank">#{sSourceIcon}#{sUserName}<span class="mn-lk"></span></a><a id="anchor-user-vip" href="#{sUserVipURL}">#{vipIcon}</a><div id="menu-user"  style="display:none" class="mn-tip" style=" width:75px; right:0;"><ul class="mn"><li><a class="my-home" href="#{sHomeURL}" target="_blank" rel="nofollow">我的主页</a></li><li><a class="my-paylist" href="#{sPaylistURL}" target="_blank" rel="nofollow">购买记录</a></li><li><a class="my-info" href="#{sProfileURL}" target="_blank" rel="nofollow">帐号设置</a></li><li><a href="#{sLogoutURL}" class="logout" rel="nofollow" >退出</a></li></ul></div></li><li class="line">|</li><li class="vip-intro"><a id="userCenter" href="#{sMusicVIPURL}" target="_blank">我的VIP<span class="mn-lk"></span></a></li><li class="line" id="userCenterLine">|</li><li><a href="#{sBaiduURL}" target="_blank">百度首页</a></li></ul>'
        };


        showUserCenter = function () {
            document.getElementById("userCenter").style.display = "block";
            document.getElementById("userCenterLine").style.display = "block";
        };

        showReceive = function () {
            document.getElementById("receiveActive").style.display = "block";
        };

        oCallbacks = {
            "guest": function () {
                var loginBtn = document.getElementById("loginbtn"),
                    popupLogin = function () {
                        if (ting && ting.passport && ting.passport.checkLogin) {
                            ting.passport.checkLogin({}, {pos: "userbar"});
                        }
                        return false;
                    };

                if (loginBtn) {
                    if (!window.attachEvent) {
                        loginBtn.addEventListener('click', popupLogin, false);
                    } else {
                        loginBtn.attachEvent('onclick', popupLogin);
                    }
                }

                // showUserCenter();

                oCallbacks.invoked = true;
            },
            "user": function () {
                var eAnchorUserName, eMenu, iWatchID, iWatchInterval, bAllowHideMenu, bMenuShow;

                // showUserCenter();


                eAnchorUserName = document.getElementById('anchor-user-name');
                eMenu = document.getElementById('menu-user');
                iWatchID = -1;
                iWatchInterval = 500;
                bAllowHideMenu = false;
                bMenuShow = false;

                function hideMenu() {
                    if (bAllowHideMenu) {
                        if (bMenuShow) {
                            eMenu.style.display = "none";
                            bMenuShow = false;

                            clearInterval(iWatchID);
                            iWatchID = -1;
                        }
                    }
                }

                eAnchorUserName.onmouseover = function () {
                    if (!bMenuShow) {
                        eMenu.style.display = "block";
                        bMenuShow = true;
                        bAllowHideMenu = false;

                        if (iWatchID < 0) {
                            iWatchID = setInterval(hideMenu, iWatchInterval);
                        }
                    } else {
                        hideMenu();
                    }
                    return false
                };

                eAnchorUserName.onmouseout = function () {
                    bAllowHideMenu = true;
                };

                eMenu.onmouseover = function () {
                    bAllowHideMenu = false;
                };

                eMenu.onmouseout = function () {
                    bAllowHideMenu = true;
                };

                oCallbacks.invoked = true;
            }
        };

        function formatTpl(source, opts) {
            source = String(source);
            var data = Array.prototype.slice.call(arguments, 1), toString = Object.prototype.toString;
            if (data.length) {
                data = data.length == 1 ?
                    /* ie 下 Object.prototype.toString.call(null) == '[object Object]' */
                    (opts !== null && (/\[object Array\]|\[object Object\]/.test(toString.call(opts))) ? opts : data)
                    : data;
                return source.replace(/#\{(.+?)\}/g, function (match, key) {
                    var replacer = data[key];
                    // chrome 下 typeof /a/ == 'function'
                    if ('[object Function]' == toString.call(replacer)) {
                        replacer = replacer(key);
                    }
                    return ('undefined' == typeof replacer ? '' : replacer);
                });
            }
            return source;
        }

        fEnterState = function (_oUserInfo, onComplete) {
            _oUserInfo = _oUserInfo || {};

            for (var i in oUserInfo) {
                if (_oUserInfo.hasOwnProperty(i)) {
                    continue;
                }
                _oUserInfo[i] = oUserInfo[i];
            }

            eUsrBar = document.getElementById(sUsrBarWapperID);
            eUsrBar.innerHTML = formatTpl(oTemplateMap[_oUserInfo['sTemplate']], _oUserInfo);
            if (_oUserInfo.enable_fee) {
                showReceive();
                if (_oUserInfo['sTemplate'] == 'user') {
                    showUserCenter();
                }
            }

            oCallbacks[ _oUserInfo['sTemplate'] ]();

            if (onComplete) {
                onComplete();
            }

            // 临时代码，vip活动判断
            if (ting.vipTip) ting.vipTip.call();
            ting.vipTipReady = true;

            return false
        };

        /*
         @cache bdErrCode
         @cache uName
         @cache isOnline
         @cache isSpaceUser
         */
        function updateUserState(_oUserInfo) {
            var sUserName, oRtUserInfo, errorCode, data, passInfo, cb;

            errorCode = parseInt(_oUserInfo.errorCode);
            data = _oUserInfo.data;
            oRtUserInfo = {};
            passInfo = _oUserInfo.data.passInfo || {};

            var icon = {
                'comm': "<i title='已开通VIP会员' class='power-icon-min index-icon-vip-active'></i>",
                'gold': "<i title='已开通白金VIP会员' class='power-icon-min index-icon-goldvip-active'></i>"
            };
            if (errorCode == 22000) {
                ting.userInfo = _oUserInfo.data;
                sUserName = data.bdName ? data.bdName : (data.bdEmail ? data.bdEmail : (data.bdMobile ? data.bdMobile : passInfo.displayname));
                oRtUserInfo.sUserName = sUserName;
                oRtUserInfo.sTemplate = 'user';
                oRtUserInfo.sHomeURL = data.bdName ? ['http://www.baidu.com/p/', data.bdName, '?from=music'].join("") : 'http://passport.baidu.com/v2/?ucenteradduname&u=' + encodeURIComponent('http://music.baidu.com/');
                oRtUserInfo.enable_fee = !!data.enable_fee;
                if (data.vip) {
                    oRtUserInfo.vipIcon = icon[data.vip.cloud.service_level];
                    try {
                        var status = data.vip.cloud.service_level
                    } catch (e) {
                    }

                    // stage3 两种VIP
                    if (ting.vip) {
                        cb = ting.vip.genInitFn(status, data.vip_expiry);
                    }
                } else {
                    // stage 2 非VIP
                    if (ting.vip) {
                        cb = ting.vip.genInitFn('notVip');
                    }
                }
                if (!data.bdName && !data.bdEmail && !data.bdMobile && passInfo.incomplete_user == 1) {
                    oRtUserInfo.sSourceIcon = '<img src="' + passInfo.source_icon + '" width="16" height="16" style="vertical-align:top;margin-right:3px" />';
                }
            } else {
                // state 1 未登陆
                oRtUserInfo.enable_fee = !!data.enable_fee;
                oRtUserInfo.sTemplate = 'guest';
                if (ting.vip) {
                    cb = ting.vip.genInitFn('anonymous');
                }
            }

            return fEnterState(oRtUserInfo, cb);
        }

//        console.log("2");
        return updateUserState;

    })('userbar');
});