define(['jPlugin/showTips'], function () {
    /**
     * 主站 Vip 相关业务逻辑
     */

    ;
    var ting = window.ting || {};

    (function (ting) {
        var pub = {};

        var tipControl = false;


        pub.tipLogger = function (type, logpage, logpos, logexpoitem) {
            ting.logger.log(
                type,
                {
                    "page": logpage,
                    "pos": logpos,
                    "expoitem": logexpoitem
                }
            )
        };


        pub._spreadTipContent = function (data) {
            return(
                '<div class="vip-expire tips">' +
                    '<span class="arrow-up"></span>' +
                    '<a href="#" class="close css-close">X</a>' +
                    '<div class="content"><h4>' + data.title + '：</h4>' +
                    '<p class="mesg-box">' + data.html + '</p>' +
                    '</div></div>'
                );
        };

        pub._genTipContent = function (type, date) {
            if (type == "before") {
                return (
                    '<div class="vip-expire tips">' +
                        '<span class="arrow-up"></span>' +
                        '<a href="#" class="close css-close">X</a>' +
                        '<div class="content"><h4>温馨提示：</h4>您的百度音乐VIP会员服务将于<em>' + date + '天后到期</em>。' +
                        '<div class="action"><a class="close-link" href="http://music.baidu.com/home/payment/cloud?type=up&level=comm&pst=pay_tips" target="_blank">立即续费</a><span class="css-hot"></span></div>' +
                        '</div></div>');
            } else if (type == "after") {
                return (
                    '<div class="vip-expire tips">' +
                        '<span class="arrow-up"></span>' +
                        '<a href="#" class="close css-close">X</a>' +
                        '<div class="content"><h4>温馨提示：</h4>您的百度音乐VIP会员服务已经到期。' +
                        '<div class="action"><a class="close-link" href="http://music.baidu.com/home/payment/cloud?type=add&level=comm&pst=pay_tips" target="_blank">重新开通<span class="css-hot"></span></a>' +
                        '</div></div>');
            }
        };

        pub._expireTips = function (type, date) {
            $('.vip-intro').showTips({
                target: pub._genTipContent(type, date),
                left: -44,
                top: 8,
                onClose: function () {
                    $.cookie('vipEx', '1', { expires: 1 });
                }
            });
            tipControl = true;
            pub.tipLogger("exposure", "home", "", "toend");
            var viplog = $(".close-link");
            viplog.click(function () {
                pub.tipLogger("click", "home", "toend", "");
            });
        };

        pub._spreadTips = function (data) {
            $('.vip-intro').showTips({
                target: pub._spreadTipContent(data),
                left: -44,
                top: 8,
                onClose: function () {
                    $.cookie('vipSp', '2', { expires: 1 });
                }
            });
            tipControl = true;
            pub.tipLogger("exposure", "home", "", "tips");
            var spreadlog = $(".mesg-box");
            spreadlog.click(function () {
                pub.tipLogger("click", "home", "tips", "");
            });
        };

        pub.spreadTips = function () {
            ting.connect.vipSpread(null, null, function (result) {
                if (result.data) {
                    pub._spreadTips(result.data);
                }
            }, function (result) {
            });
        };

        pub.expireTips = function (date) {
            if (date >= -7 && date <= -1) {
                pub._expireTips('before', -date);
            } else if (date != null && date >= 0 && date < 7) {
                pub._expireTips('after');
            }
        }

        //推广活动
        pub.showspreadTips = function () {
            if (!$.cookie('vipSp') && tipControl == false) {
                pub.spreadTips();
            }
        };


        //过期提示
        pub.showexpireTips = function (date) {
            if (!$.cookie('vipEx') && tipControl == false) {
                pub.expireTips(date);
            }
        };

        var getURL = {
            buy: 'http://music.baidu.com/home/payment/cloud?type=add&level=comm&pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : ''),
            renew: 'http://music.baidu.com/home/payment/cloud?type=up&level=comm&pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : ''),
            upgrade: 'http://music.baidu.com/home/payment/cloud?type=upgrade&level=gold&pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : ''),
            intro: 'http://music.baidu.com/vip?pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : ''),
            vipCenter: 'http://music.baidu.com/vip/user?pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : ''),
            invite: 'http://music.baidu.com/vip/invite?pst=pay_plaza' + (isKr ? '&_vk=pay_k_load' : '')
        }
        /**
         *
         * @param status 对应 comm: 普通VIP; gold: 白金VIP; notVip: 非VIP; anonymous: 未登陆用户
         * @param optExpireDate 如果是comm或者gold，则带有改参数，用于到期前提示
         * @returns {Function}
         */
        pub.genInitFn = function (status, optExpireDate) {
            switch (status) {
                case 'comm':
                    return function () {
                        // 需要过期提醒和vip推广
                        ting.vip.showexpireTips(optExpireDate);
                        ting.vip.showspreadTips();
                        $('.vip-intro').append(
                            '<div id="vip-hover-show" class="mn-tip">'
                                + '<ul class="mn">'
                                + '<li><a target="_blank" href="' + getURL.renew + '">立即续期</a></li>'
                                + '<li><a target="_blank" href="' + getURL.upgrade + '">升级白金VIP</a></li>'
                                + '<li><a target="_blank" href="' + getURL.invite + '" class="css-em">邀请好友<span class="css-new"></span></a></li>'
                                + '<li><a target="_blank" href="' + getURL.vipCenter + '">个人中心</a></li>'
                                + '</ul></div>'
                        ).hoverShow($('#vip-hover-show'), {delay: 100});
                    };
                    break;
                case 'gold':
                    return function () {
                        ting.vip.showexpireTips(optExpireDate);
                        ting.vip.showspreadTips();
                        $('.vip-intro').append(
                            '<div id="vip-hover-show" class="mn-tip">'
                                + '<ul class="mn">'
                                + '<li><a target="_blank" href="' + getURL.renew + '">立即续期</a></li>'
                                + '<li><a target="_blank" href="' + getURL.invite + '" class="css-em">邀请好友<span class="css-new"></span></a></li>'
                                + '<li><a target="_blank" href="' + getURL.vipCenter + '">个人中心</a></li>'
                                + '</ul></div>'
                        ).hoverShow($('#vip-hover-show'), {delay: 100});
                    };
                    break;
                case 'notVip':
                    return function () {
                        ting.vip.showspreadTips();
                        $('.vip-intro').append(
                            '<div id="vip-hover-show" class="mn-tip">'
                                + '<ul class="mn">'
                                + '<li><a target="_blank" href="' + getURL.renew + '" class="css-em">立即开通<span class="css-hot"></span></a></li>'
                                + '<li><a target="_blank" href="' + getURL.upgrade + '">升级白金VIP</a></li>'
                                + '<li><a target="_blank" href="' + getURL.vipCenter + '">个人中心</a></li>'
                                + '</ul></div>'
                        ).hoverShow($('#vip-hover-show'), {delay: 100});
                    };
                    break;
                case 'anonymous':
                    return function () {
                        ting.vip.showspreadTips();
                        $('.vip-intro').append(
                            '<div id="vip-hover-show" class="mn-tip">'
                                + '<ul class="mn">'
                                + '<li><a target="_blank" class="css-em" href="' + getURL.buy + '">立即开通<span class="css-hot"></span></a></li>'
                                + '<li><a target="_blank" href="' + getURL.upgrade + '">升级白金VIP</a></li>'
                                + '<li><a target="_blank" href="' + getURL.intro + '" target="_blank">所有特权</a></li>'
                                + '</ul>'
                                + '</div>').hoverShow($('#vip-hover-show'), {delay: 100});
                    };
                    break;
            }
        }


        ting.vip = pub;
    })(ting);

});