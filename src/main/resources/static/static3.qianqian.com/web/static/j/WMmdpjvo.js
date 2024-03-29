!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.cyberplayer = t() : e.cyberplayer = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {exports: {}, id: i, loaded: !1};
            return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        n(25), n(24), n(26), e.exports = n(95)
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            var e = {}, t = Array.prototype, n = Object.prototype, i = Function.prototype, o = t.slice, r = t.concat,
                a = n.toString, s = n.hasOwnProperty, l = t.map, c = t.reduce, u = t.forEach, d = t.filter, h = t.every,
                f = t.some, p = t.indexOf, g = Array.isArray, A = Object.keys, m = i.bind, w = function (e) {
                    return e instanceof w ? e : this instanceof w ? void 0 : new w(e)
                }, v = w.each = w.forEach = function (t, n, i) {
                    if (null == t) return t;
                    if (u && t.forEach === u) t.forEach(n, i); else if (t.length === +t.length) {
                        for (var o = 0, r = t.length; o < r; o++) if (n.call(i, t[o], o, t) === e) return
                    } else for (var a = w.keys(t), o = 0, r = a.length; o < r; o++) if (n.call(i, t[a[o]], a[o], t) === e) return;
                    return t
                };
            w.map = w.collect = function (e, t, n) {
                var i = [];
                return null == e ? i : l && e.map === l ? e.map(t, n) : (v(e, function (e, o, r) {
                    i.push(t.call(n, e, o, r))
                }), i)
            };
            var y = "Reduce of empty array with no initial value";
            w.reduce = w.foldl = w.inject = function (e, t, n, i) {
                var o = arguments.length > 2;
                if (null == e && (e = []), c && e.reduce === c) return i && (t = w.bind(t, i)), o ? e.reduce(t, n) : e.reduce(t);
                if (v(e, function (e, r, a) {
                    o ? n = t.call(i, n, e, r, a) : (n = e, o = !0)
                }), !o) throw new TypeError(y);
                return n
            }, w.find = w.detect = function (e, t, n) {
                var i;
                return E(e, function (e, o, r) {
                    if (t.call(n, e, o, r)) return i = e, !0
                }), i
            }, w.filter = w.select = function (e, t, n) {
                var i = [];
                return null == e ? i : d && e.filter === d ? e.filter(t, n) : (v(e, function (e, o, r) {
                    t.call(n, e, o, r) && i.push(e)
                }), i)
            }, w.reject = function (e, t, n) {
                return w.filter(e, function (e, i, o) {
                    return !t.call(n, e, i, o)
                }, n)
            }, w.compact = function (e) {
                return w.filter(e, w.identity)
            }, w.every = w.all = function (t, n, i) {
                n || (n = w.identity);
                var o = !0;
                return null == t ? o : h && t.every === h ? t.every(n, i) : (v(t, function (t, r, a) {
                    if (!(o = o && n.call(i, t, r, a))) return e
                }), !!o)
            };
            var E = w.some = w.any = function (t, n, i) {
                n || (n = w.identity);
                var o = !1;
                return null == t ? o : f && t.some === f ? t.some(n, i) : (v(t, function (t, r, a) {
                    if (o || (o = n.call(i, t, r, a))) return e
                }), !!o)
            };
            w.size = function (e) {
                return null == e ? 0 : e.length === +e.length ? e.length : w.keys(e).length
            }, w.last = function (e, t, n) {
                if (null != e) return null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
            }, w.after = function (e, t) {
                return function () {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }, w.before = function (e, t) {
                var n;
                return function () {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
                }
            };
            var j = function (e) {
                return null == e ? w.identity : w.isFunction(e) ? e : w.property(e)
            }, b = function (e) {
                return function (t, n, i) {
                    var o = {};
                    return n = j(n), v(t, function (r, a) {
                        var s = n.call(i, r, a, t);
                        e(o, s, r)
                    }), o
                }
            };
            w.groupBy = b(function (e, t, n) {
                w.has(e, t) ? e[t].push(n) : e[t] = [n]
            }), w.indexBy = b(function (e, t, n) {
                e[t] = n
            }), w.sortedIndex = function (e, t, n, i) {
                n = j(n);
                for (var o = n.call(i, t), r = 0, a = e.length; r < a;) {
                    var s = r + a >>> 1;
                    n.call(i, e[s]) < o ? r = s + 1 : a = s
                }
                return r
            };
            var E = w.some = w.any = function (t, n, i) {
                n || (n = w.identity);
                var o = !1;
                return null == t ? o : f && t.some === f ? t.some(n, i) : (v(t, function (t, r, a) {
                    if (o || (o = n.call(i, t, r, a))) return e
                }), !!o)
            };
            w.contains = w.include = function (e, t) {
                return null != e && (e.length !== +e.length && (e = w.values(e)), w.indexOf(e, t) >= 0)
            }, w.pluck = function (e, t) {
                return w.map(e, w.property(t))
            }, w.where = function (e, t) {
                return w.filter(e, w.matches(t))
            }, w.findWhere = function (e, t) {
                return w.find(e, w.matches(t))
            }, w.max = function (e, t, n) {
                if (!t && w.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                var i = -(1 / 0), o = -(1 / 0);
                return v(e, function (e, r, a) {
                    var s = t ? t.call(n, e, r, a) : e;
                    s > o && (i = e, o = s)
                }), i
            }, w.difference = function (e) {
                var n = r.apply(t, o.call(arguments, 1));
                return w.filter(e, function (e) {
                    return !w.contains(n, e)
                })
            }, w.without = function (e) {
                return w.difference(e, o.call(arguments, 1))
            }, w.indexOf = function (e, t, n) {
                if (null == e) return -1;
                var i = 0, o = e.length;
                if (n) {
                    if ("number" != typeof n) return i = w.sortedIndex(e, t), e[i] === t ? i : -1;
                    i = n < 0 ? Math.max(0, o + n) : n
                }
                if (p && e.indexOf === p) return e.indexOf(t, n);
                for (; i < o; i++) if (e[i] === t) return i;
                return -1
            };
            var C = function () {
            };
            w.bind = function (e, t) {
                var n, i;
                if (m && e.bind === m) return m.apply(e, o.call(arguments, 1));
                if (!w.isFunction(e)) throw new TypeError;
                return n = o.call(arguments, 2), i = function () {
                    if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
                    C.prototype = e.prototype;
                    var r = new C;
                    C.prototype = null;
                    var a = e.apply(r, n.concat(o.call(arguments)));
                    return Object(a) === a ? a : r
                }
            }, w.partial = function (e) {
                var t = o.call(arguments, 1);
                return function () {
                    for (var n = 0, i = t.slice(), o = 0, r = i.length; o < r; o++) i[o] === w && (i[o] = arguments[n++]);
                    for (; n < arguments.length;) i.push(arguments[n++]);
                    return e.apply(this, i)
                }
            }, w.once = w.partial(w.before, 2), w.memoize = function (e, t) {
                var n = {};
                return t || (t = w.identity), function () {
                    var i = t.apply(this, arguments);
                    return w.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
            }, w.delay = function (e, t) {
                var n = o.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, n)
                }, t)
            }, w.defer = function (e) {
                return w.delay.apply(w, [e, 1].concat(o.call(arguments, 1)))
            }, w.throttle = function (e, t, n) {
                var i, o, r, a = null, s = 0;
                n || (n = {});
                var l = function () {
                    s = n.leading === !1 ? 0 : w.now(), a = null, r = e.apply(i, o), i = o = null
                };
                return function () {
                    var c = w.now();
                    s || n.leading !== !1 || (s = c);
                    var u = t - (c - s);
                    return i = this, o = arguments, u <= 0 ? (clearTimeout(a), a = null, s = c, r = e.apply(i, o), i = o = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), r
                }
            }, w.keys = function (e) {
                if (!w.isObject(e)) return [];
                if (A) return A(e);
                var t = [];
                for (var n in e) w.has(e, n) && t.push(n);
                return t
            }, w.invert = function (e) {
                for (var t = {}, n = w.keys(e), i = 0, o = n.length; i < o; i++) t[e[n[i]]] = n[i];
                return t
            }, w.defaults = function (e) {
                return v(o.call(arguments, 1), function (t) {
                    if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }), e
            }, w.extend = function (e) {
                return v(o.call(arguments, 1), function (t) {
                    if (t) for (var n in t) e[n] = t[n]
                }), e
            }, w.pick = function (e) {
                var n = {}, i = r.apply(t, o.call(arguments, 1));
                return v(i, function (t) {
                    t in e && (n[t] = e[t])
                }), n
            }, w.omit = function (e) {
                var n = {}, i = r.apply(t, o.call(arguments, 1));
                for (var a in e) w.contains(i, a) || (n[a] = e[a]);
                return n
            }, w.clone = function (e) {
                return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e
            }, w.isArray = g || function (e) {
                return "[object Array]" == a.call(e)
            }, w.isObject = function (e) {
                return e === Object(e)
            }, v(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
                w["is" + e] = function (t) {
                    return a.call(t) == "[object " + e + "]"
                }
            }), w.isArguments(arguments) || (w.isArguments = function (e) {
                return !(!e || !w.has(e, "callee"))
            }), w.isFunction = function (e) {
                return "function" == typeof e
            }, w.isFinite = function (e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, w.isNaN = function (e) {
                return w.isNumber(e) && e != +e
            }, w.isBoolean = function (e) {
                return e === !0 || e === !1 || "[object Boolean]" == a.call(e)
            }, w.isNull = function (e) {
                return null === e
            }, w.isUndefined = function (e) {
                return void 0 === e
            }, w.has = function (e, t) {
                return s.call(e, t)
            }, w.identity = function (e) {
                return e
            }, w.constant = function (e) {
                return function () {
                    return e
                }
            }, w.property = function (e) {
                return function (t) {
                    return t[e]
                }
            }, w.propertyOf = function (e) {
                return null == e ? function () {
                } : function (t) {
                    return e[t]
                }
            }, w.matches = function (e) {
                return function (t) {
                    if (t === e) return !0;
                    for (var n in e) if (e[n] !== t[n]) return !1;
                    return !0
                }
            }, w.now = Date.now || function () {
                return (new Date).getTime()
            }, w.result = function (e, t) {
                if (null != e) {
                    var n = e[t];
                    return w.isFunction(n) ? n.call(e) : n
                }
            };
            var k = 0;
            return w.uniqueId = function (e) {
                var t = ++k + "";
                return e ? e + t : t
            }, w
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5), n(1), n(46), n(30), n(16), n(31), n(48), n(45), n(33), n(109), n(112), n(110)], o = function (e, t, n, i, o, r, a, s, l, c, u, d) {
            var h = {};
            return h.log = function () {
                window.console && ("object" == typeof console.log ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
            }, h.between = function (e, t, n) {
                return Math.max(Math.min(e, n), t)
            }, h.foreach = function (e, t) {
                var n, i;
                for (n in e) "function" === h.typeOf(e.hasOwnProperty) ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i))
            }, h.indexOf = t.indexOf, h.noop = function () {
            }, h.seconds = e.seconds, h.prefix = e.prefix, h.suffix = e.suffix, t.extend(h, r, a, l, n, s, i, o, c, u, d), h
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            var t = [], n = t.slice, i = {
                on: function (e, t, n) {
                    if (!r(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({callback: t, context: n}), this
                }, once: function (t, n, i) {
                    if (!r(this, "once", t, [n, i]) || !n) return this;
                    var o = this, a = e.once(function () {
                        o.off(t, a), n.apply(this, arguments)
                    });
                    return a._callback = n, this.on(t, a, i)
                }, off: function (t, n, i) {
                    var o, a, s, l, c, u, d, h;
                    if (!this._events || !r(this, "off", t, [n, i])) return this;
                    if (!t && !n && !i) return this._events = void 0, this;
                    for (l = t ? [t] : e.keys(this._events), c = 0, u = l.length; c < u; c++) if (t = l[c], s = this._events[t]) {
                        if (this._events[t] = o = [], n || i) for (d = 0, h = s.length; d < h; d++) a = s[d], (n && n !== a.callback && n !== a.callback._callback || i && i !== a.context) && o.push(a);
                        o.length || delete this._events[t]
                    }
                    return this
                }, trigger: function (e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e], o = this._events.all;
                    return i && a(i, t, this), o && a(o, arguments, this), this
                }, triggerSafe: function (e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e], o = this._events.all;
                    return i && s(i, t, this), o && s(o, arguments, this), this
                }
            }, o = /\s+/, r = function (e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (o.test(n)) {
                    for (var a = n.split(o), s = 0, l = a.length; s < l; s++) e[t].apply(e, [a[s]].concat(i));
                    return !1
                }
                return !0
            }, a = function (e, t, n) {
                var i, o = -1, r = e.length, a = t[0], s = t[1], l = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++o < r;) (i = e[o]).callback.call(i.context || n);
                        return;
                    case 1:
                        for (; ++o < r;) (i = e[o]).callback.call(i.context || n, a);
                        return;
                    case 2:
                        for (; ++o < r;) (i = e[o]).callback.call(i.context || n, a, s);
                        return;
                    case 3:
                        for (; ++o < r;) (i = e[o]).callback.call(i.context || n, a, s, l);
                        return;
                    default:
                        for (; ++o < r;) (i = e[o]).callback.apply(i.context || n, t);
                        return
                }
            }, s = function (e, t, n) {
                for (var i, o = -1, r = e.length; ++o < r;) try {
                    (i = e[o]).callback.apply(i.context || n, t)
                } catch (a) {
                }
            };
            return i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            var e = {
                DRAG: "drag",
                DRAG_START: "dragStart",
                DRAG_END: "dragEnd",
                CLICK: "click",
                DOUBLE_CLICK: "doubleClick",
                TAP: "tap",
                DOUBLE_TAP: "doubleTap",
                OVER: "over",
                MOVE: "move",
                OUT: "out"
            }, t = {
                COMPLETE: "complete",
                ERROR: "error",
                JWPLAYER_AD_CLICK: "adClick",
                JWPLAYER_AD_COMPANIONS: "adCompanions",
                JWPLAYER_AD_COMPLETE: "adComplete",
                JWPLAYER_AD_ERROR: "adError",
                JWPLAYER_AD_IMPRESSION: "adImpression",
                JWPLAYER_AD_META: "adMeta",
                JWPLAYER_AD_PAUSE: "adPause",
                JWPLAYER_AD_PLAY: "adPlay",
                JWPLAYER_AD_SKIPPED: "adSkipped",
                JWPLAYER_AD_TIME: "adTime",
                JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
                JWPLAYER_MEDIA_COMPLETE: "complete",
                JWPLAYER_READY: "ready",
                JWPLAYER_MEDIA_SEEK: "seek",
                JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                JWPLAYER_DISPLAY_CLICK: "displayClick",
                JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                JWPLAYER_CAST_SESSION: "cast",
                JWPLAYER_MEDIA_ERROR: "mediaError",
                JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                JWPLAYER_MEDIA_LOADED: "loaded",
                JWPLAYER_MEDIA_SEEKED: "seeked",
                JWPLAYER_SETUP_ERROR: "setupError",
                JWPLAYER_ERROR: "error",
                JWPLAYER_PLAYER_STATE: "state",
                JWPLAYER_CAST_AVAILABLE: "castAvailable",
                JWPLAYER_MEDIA_BUFFER: "bufferChange",
                JWPLAYER_MEDIA_TIME: "time",
                JWPLAYER_MEDIA_TYPE: "mediaType",
                JWPLAYER_MEDIA_VOLUME: "volume",
                JWPLAYER_MEDIA_MUTE: "mute",
                JWPLAYER_MEDIA_META: "meta",
                JWPLAYER_MEDIA_LEVELS: "levels",
                JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                JWPLAYER_CONTROLS: "controls",
                JWPLAYER_FULLSCREEN: "fullscreen",
                JWPLAYER_RESIZE: "resize",
                JWPLAYER_PLAYLIST_ITEM: "playlistItem",
                JWPLAYER_PLAYLIST_LOADED: "playlist",
                JWPLAYER_AUDIO_TRACKS: "audioTracks",
                JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                JWPLAYER_CONNECTING: "connecting",
                JWPLAYER_CONNECT_FAILD: "connectFaild",
                JWPLAYER_NO_LIVE_STREAM: "noLiveStream",
                JWPLAYER_ALIVE: "alive",
                JWPLAYER_LIVE_STOP: "liveStop",
                JWPLAYER_LOGO_CLICK: "logoClick",
                JWPLAYER_CAPTIONS_LIST: "captionsList",
                JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                JWPLAYER_PROVIDER_CHANGED: "providerChanged",
                JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                JWPLAYER_USER_ACTION: "userAction",
                JWPLAYER_PROVIDER_CLICK: "providerClick",
                JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                JWPLAYER_INSTREAM_CLICK: "instreamClick",
                JWPLAYER_CUEPOINT: "cuepoint",
                JWPLAYER_SEEK_FORWARD_FORBIDDEN: "seekForwardForbidden"
            };
            return t.touchEvents = e, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            function t(e) {
                return !!/[\(,]format=m3u8-/i.test(e) && "m3u8"
            }

            var n = function (e) {
                return e.replace(/^\s+|\s+$/g, "")
            }, i = function (e, t, n) {
                for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
                return e
            }, o = function (e, t) {
                for (var n = 0; n < e.attributes.length; n++) if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
                return ""
            }, r = function (e) {
                if (!e || "rtmp" === e.substr(0, 4)) return "";
                var n = t(e);
                return n ? n : (e = e.split("?")[0].split("#")[0], e.lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
            }, a = function (e) {
                var t = parseInt(e / 3600), n = parseInt(e / 60) % 60, o = e % 60;
                return i(t, 2) + ":" + i(n, 2) + ":" + i(o.toFixed(3), 6)
            }, s = function (t) {
                if (e.isNumber(t)) return t;
                t = t.replace(",", ".");
                var n = t.split(":"), i = 0;
                return "s" === t.slice(-1) ? i = parseFloat(t) : "m" === t.slice(-1) ? i = 60 * parseFloat(t) : "h" === t.slice(-1) ? i = 3600 * parseFloat(t) : n.length > 1 ? (i = parseFloat(n[n.length - 1]), i += 60 * parseFloat(n[n.length - 2]), 3 === n.length && (i += 3600 * parseFloat(n[n.length - 3]))) : i = parseFloat(t), i
            }, l = function (t, n) {
                return e.map(t, function (e) {
                    return n + e
                })
            }, c = function (t, n) {
                return e.map(t, function (e) {
                    return e + n
                })
            };
            return {trim: n, pad: i, xmlAttribute: o, extension: r, hms: a, seconds: s, suffix: c, prefix: l}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            return {
                BUFFERING: "buffering",
                IDLE: "idle",
                COMPLETE: "complete",
                PAUSED: "paused",
                PLAYING: "playing",
                ERROR: "error",
                LOADING: "loading",
                STALLED: "stalled"
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(3), n(4), n(1), n(2)], o = function (e, t, n, i) {
            function o(e, t) {
                return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
            }

            function r(e) {
                var t = e || window.event;
                return !!(i.isPoorIE() || e instanceof MouseEvent) && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
            }

            function a(e, t, n) {
                var o;
                return o = !i.isPoorIE() && t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
                    type: e,
                    target: t.target,
                    currentTarget: n,
                    pageX: o.pageX,
                    pageY: o.pageY
                }
            }

            function s(e) {
                (i.isPoorIE() || e instanceof MouseEvent || e instanceof window.TouchEvent) && (e.preventManipulation && e.preventManipulation(), e.cancelable && e.preventDefault && e.preventDefault())
            }

            var l = !n.isUndefined(window.PointerEvent), c = !l && i.isMobile(), u = !l && !c,
                d = i.isFF() && i.isOSX(), h = function (e, c) {
                    function h(e) {
                        (u || l && "touch" !== e.pointerType) && w(t.touchEvents.OVER, e)
                    }

                    function f(e) {
                        (u || l && "touch" !== e.pointerType) && w(t.touchEvents.MOVE, e)
                    }

                    function p(n) {
                        (u || l && "touch" !== n.pointerType && !e.contains(document.elementFromPoint(n.x, n.y))) && w(t.touchEvents.OUT, n)
                    }

                    function g(t) {
                        v = t.target, b = o(t, "X"), C = o(t, "Y"), r(t) || (l ? t.isPrimary && (c.preventScrolling && (y = t.pointerId, e.setPointerCapture(y)), i.addEventListener(e, "pointermove", A), i.addEventListener(e, "pointercancel", m), i.addEventListener(e, "pointerup", m)) : u && (i.addEventListener(document, "mousemove", A), d && "object" === t.target.nodeName.toLowerCase() ? i.addEventListener(e, "click", m) : i.addEventListener(document, "mouseup", m)), v && (i.addEventListener(v, "touchmove", A), i.addEventListener(v, "touchcancel", m), i.addEventListener(v, "touchend", m)))
                    }

                    function A(e) {
                        var n = t.touchEvents, i = 6;
                        if (j) w(n.DRAG, e); else {
                            var r = o(e, "X"), a = o(e, "Y"), l = r - b, u = a - C;
                            l * l + u * u > i * i && (w(n.DRAG_START, e), j = !0, w(n.DRAG, e))
                        }
                        c.preventScrolling && s(e)
                    }

                    function m(n) {
                        var o = t.touchEvents;
                        l ? (c.preventScrolling && e.releasePointerCapture(y), i.removeEventListener(e, "pointermove", A), i.removeEventListener(e, "pointercancel", m), i.removeEventListener(e, "pointerup", m)) : u && (i.removeEventListener(document, "mousemove", A), i.removeEventListener(document, "mouseup", m)), v && (i.removeEventListener(v, "touchmove", A), i.removeEventListener(v, "touchcancel", m), i.removeEventListener(v, "touchend", m)), j ? w(o.DRAG_END, n) : c.directSelect && n.target !== e || n.type.indexOf("cancel") !== -1 || (l && n instanceof window.PointerEvent ? "touch" === n.pointerType ? w(o.TAP, n) : w(o.CLICK, n) : u ? w(o.CLICK, n) : (w(o.TAP, n), s(n))), v = null, j = !1
                    }

                    function w(e, i) {
                        var o;
                        if (c.enableDoubleTap && (e === t.touchEvents.CLICK || e === t.touchEvents.TAP)) if (n.now() - k < L) {
                            var r = e === t.touchEvents.CLICK ? t.touchEvents.DOUBLE_CLICK : t.touchEvents.DOUBLE_TAP;
                            o = a(r, i, E), I.trigger(r, o), k = 0
                        } else k = n.now();
                        o = a(e, i, E), I.trigger(e, o)
                    }

                    var v, y, E = e, j = !1, b = 0, C = 0, k = 0, L = 300;
                    c = c || {}, l ? (i.addEventListener(e, "pointerdown", g), c.useHover && (i.addEventListener(e, "pointerover", h), i.addEventListener(e, "pointerout", p)), c.useMove && i.addEventListener(e, "pointermove", f)) : u && (i.addEventListener(e, "mousedown", g), c.useHover && (i.addEventListener(e, "mouseover", h), i.addEventListener(e, "mouseout", p)), c.useMove && i.addEventListener(e, "mousemove", f)), i.addEventListener(e, "touchstart", g);
                    var I = this;
                    return this.triggerEvent = w, this.destroy = function () {
                        i.removeEventListener(e, "touchstart", g), i.removeEventListener(e, "mousedown", g), v && (i.removeEventListener(v, "touchmove", A), i.removeEventListener(v, "touchcancel", m), i.removeEventListener(v, "touchend", m)), l && (c.preventScrolling && e.releasePointerCapture(y), i.removeEventListener(e, "pointerover", h), i.removeEventListener(e, "pointerdown", g), i.removeEventListener(e, "pointermove", A), i.removeEventListener(e, "pointermove", f), i.removeEventListener(e, "pointercancel", m), i.removeEventListener(e, "pointerout", p), i.removeEventListener(e, "pointerup", m)), i.removeEventListener(e, "click", m), i.removeEventListener(e, "mouseover", h), i.removeEventListener(e, "mousemove", f), i.removeEventListener(e, "mouseout", p), i.removeEventListener(document, "mousemove", A), i.removeEventListener(document, "mouseup", m)
                    }, this
                };
            return n.extend(h.prototype, e), h
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, , function (e, t, n) {
        e.exports = n(62)["default"]
    }, function (e, t) {
        "use strict";

        function n(e) {
            return u[e]
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }

        function o(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1
        }

        function r(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e
            }
            return h.test(e) ? e.replace(d, n) : e
        }

        function a(e) {
            return !e && 0 !== e || !(!g(e) || 0 !== e.length)
        }

        function s(e) {
            var t = i({}, e);
            return t._parent = e, t
        }

        function l(e, t) {
            return e.path = t, e
        }

        function c(e, t) {
            return (e ? e + "." : "") + t
        }

        t.__esModule = !0, t.extend = i, t.indexOf = o, t.escapeExpression = r, t.isEmpty = a, t.createFrame = s, t.blockParams = l, t.appendContextPath = c;
        var u = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
            d = /[&<>"'`=]/g, h = /[&<>"'`=]/, f = Object.prototype.toString;
        t.toString = f;
        var p = function (e) {
            return "function" == typeof e
        };
        p(/x/) && (t.isFunction = p = function (e) {
            return "function" == typeof e && "[object Function]" === f.call(e)
        }), t.isFunction = p;
        var g = Array.isArray || function (e) {
            return !(!e || "object" != typeof e) && "[object Array]" === f.call(e)
        };
        t.isArray = g
    }, , function (e, t) {
        "use strict";

        function n(e, t) {
            var o = t && t.loc, r = void 0, a = void 0;
            o && (r = o.start.line, a = o.start.column, e += " - " + r + ":" + a);
            for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, n), o && (this.lineNumber = r, this.column = a)
        }

        t.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        n.prototype = new Error, t["default"] = n, e.exports = t["default"]
    }, function (e, t, n) {
        var i, o;
        i = [n(5)], o = function (e) {
            return {
                localName: function (e) {
                    return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
                }, textContent: function (t) {
                    return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : "" : ""
                }, getChildNode: function (e, t) {
                    return e.childNodes[t]
                }, numChildren: function (e) {
                    return e.childNodes ? e.childNodes.length : 0
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(27), n(44), n(105), n(1)], o = function (e, t, i, o) {
            function r(e) {
                this.providers = t.slice(), this.config = e || {}, this.reorderProviders()
            }

            return r.registerProvider = function (n) {
                var r = n.getName().name;
                if (!i[r]) {
                    if (!o.find(t, o.matches({name: r}))) {
                        if (!o.isFunction(n.supports)) throw{message: "Tried to register a provider with an invalid object"};
                        t.unshift({name: r, supports: n.supports})
                    }
                    var a = function () {
                    };
                    a.prototype = e, n.prototype = new a, i[r] = n
                }
            }, r.load = function (e) {
                return Promise.all(o.map(e, function (e) {
                    return new Promise(function (t) {
                        switch (e.name) {
                            case"html5":
                                !function (e) {
                                    t(n(29))
                                }(n);
                                break;
                            case"flash":
                                !function (e) {
                                    t(n(28))
                                }(n);
                                break;
                            default:
                                t()
                        }
                    }).then(function (e) {
                        e && r.registerProvider(e)
                    })
                }))
            }, o.extend(r.prototype, {
                reorderProviders: function () {
                    if ("flash" === this.config.primary) {
                        var e = o.indexOf(this.providers, o.findWhere(this.providers, {name: "flash"})),
                            t = this.providers.splice(e, 1)[0],
                            n = o.indexOf(this.providers, o.findWhere(this.providers, {name: "html5"}));
                        this.providers.splice(n, 0, t)
                    }
                }, providerSupports: function (e, t) {
                    return e.supports(t)
                }, required: function (e, t) {
                    return e = e.slice(), o.compact(o.map(this.providers, function (n) {
                        for (var i = !1, o = e.length; o--;) {
                            var r = e[o], a = n.supports(r.sources[0], t);
                            a && e.splice(o, 1), i = i || a
                        }
                        if (i) return n
                    }))
                }, choose: function (e) {
                    e = o.isObject(e) ? e : {};
                    for (var t = this.providers.length, n = 0; n < t; n++) {
                        var r = this.providers[n];
                        if (this.providerSupports(r, e)) {
                            var a = t - n - 1;
                            return {priority: a, name: r.name, type: e.type, provider: i[r.name]}
                        }
                    }
                    return null
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            return {
                repo: "https://bce.bdstatic.com/jwplayer/",
                SkinsIncluded: ["seven"],
                SkinsLoadable: ["beelden", "bekle", "five", "glow", "roundster", "six", "stormtrooper", "vapor"],
                dvrSeekLimit: -25
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5), n(37)], o = function (e, t) {
            function n(e) {
                e = e.split("-");
                for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                return e.join("")
            }

            function i(t, n, i) {
                if ("" === n || void 0 === n || null === n) return "";
                var o = i ? " !important" : "";
                return "string" == typeof n && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf("url") < 0 ? "url(" + n + ")" : n + o : 0 === n || "z-index" === t || "opacity" === t ? "" + n + o : /color/i.test(t) ? "#" + e.pad(n.toString(16).replace(/^0x/i, ""), 6) + o : Math.ceil(n) + "px" + o
            }

            var o = function (e, n, i) {
                i = i || "all-players";
                var o = "";
                if ("object" == typeof n) {
                    var a = document.createElement("div");
                    r(a, n), o = "{" + a.style.cssText + "}"
                } else "string" == typeof n && (o = n);
                t.style([[e, e + o]], i)
            }, r = function (e, t) {
                if (void 0 !== e && null !== e) {
                    void 0 === e.length && (e = [e]);
                    var o, r = {};
                    for (o in t) r[o] = i(o, t[o]);
                    for (var a = 0; a < e.length; a++) {
                        var s, l = e[a];
                        if (void 0 !== l && null !== l) for (o in r) s = n(o), l.style[s] !== r[o] && (l.style[s] = r[o])
                    }
                }
            }, a = function (e, t) {
                r(e, {transform: t, webkitTransform: t, msTransform: t, mozTransform: t, oTransform: t})
            }, s = function (e, t) {
                r(e, {animation: t, webkitAnimation: t, msAnimation: t, mozAnimation: t, oAnimation: t})
            }, l = function (e, t) {
                var n = "rgb";
                e ? (e = String(e).replace("#", ""), 3 === e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2))) : e = "000000";
                var i = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
                return void 0 !== t && 100 !== t && (n += "a", i.push(t / 100)), n + "(" + i.join(",") + ")"
            };
            return {css: o, style: r, clearCss: t.clear, transform: a, animation: s, hexToRgba: l}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            return "2.1.6"
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(47), n(2)], o = function (e, t) {
            var n = e.extend({
                constructor: function (e) {
                    this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset jw-hidden", this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.container)
                }, addContent: function (e) {
                    this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
                }, removeContent: function () {
                    this.content && (this.container.removeChild(this.content), this.content = null)
                }, hasContent: function () {
                    return !!this.content
                }, element: function () {
                    return this.el
                }, openTooltip: function (e) {
                    this.trigger("open-" + this.componentType, e, {isOpen: !0}), this.isOpen = !0, t.toggleClass(this.el, this.openClass, this.isOpen)
                }, closeTooltip: function (e) {
                    this.trigger("close-" + this.componentType, e, {isOpen: !1}), this.isOpen = !1, t.toggleClass(this.el, this.openClass, this.isOpen)
                }, toggleOpenState: function (e) {
                    this.isOpen ? this.closeTooltip(e) : this.openTooltip(e)
                }
            });
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5)], o = function (e) {
            var t = {}, n = t.pluginPathType = {ABSOLUTE: 0, RELATIVE: 1, CDN: 2};
            return t.getPluginPathType = function (t) {
                if ("string" == typeof t) {
                    t = t.split("?")[0];
                    var i = t.indexOf("://");
                    if (i > 0) return n.ABSOLUTE;
                    var o = t.indexOf("/"), r = e.extension(t);
                    return !(i < 0 && o < 0) || r && isNaN(r) ? n.RELATIVE : n.CDN
                }
            }, t.getPluginName = function (e) {
                return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
            }, t.getPluginVersion = function (e) {
                return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
            }, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(14), n(39), n(93), n(1), n(3), n(111), n(4), n(6)], o = function (e, t, n, i, o, r, a, s, l) {
            var c = function () {
                function a(e, t) {
                    var n = o.extend({}, t, {type: e});
                    switch (e) {
                        case"flashThrottle":
                            var i = "resume" !== t.state;
                            this.set("flashThrottle", i), this.set("flashBlocked", i);
                            break;
                        case"flashBlocked":
                            return void this.set("flashBlocked", !0);
                        case"flashUnblocked":
                            return void this.set("flashBlocked", !1);
                        case"volume":
                        case"mute":
                            return void this.set(e, t[e]);
                        case s.JWPLAYER_MEDIA_TYPE:
                            return void(this.mediaModel.get("mediaType") !== t.mediaType && (this.mediaModel.set("mediaType", t.mediaType), this.mediaController.trigger(e, n)));
                        case s.JWPLAYER_PLAYER_STATE:
                            return void this.mediaModel.set("state", t.newstate);
                        case s.JWPLAYER_MEDIA_BUFFER:
                            this.set("buffer", t.bufferPercent);
                        case s.JWPLAYER_MEDIA_META:
                            var r = t.duration;
                            o.isNumber(r) && (this.mediaModel.set("duration", r), this.set("duration", r));
                            break;
                        case s.JWPLAYER_MEDIA_BUFFER_FULL:
                            this.mediaModel.get("playAttempt") ? this.playVideo() : this.mediaModel.on("change:playAttempt", function () {
                                this.playVideo()
                            }, this);
                            break;
                        case s.JWPLAYER_MEDIA_TIME:
                            this.mediaModel.set("position", t.position), this.set("position", t.position), o.isNumber(t.duration) && (this.mediaModel.set("duration", t.duration), this.set("duration", t.duration), t.duration > 0 && this.recordMediaPosition(t.position, t.duration));
                            break;
                        case s.JWPLAYER_PROVIDER_CHANGED:
                            this.set("provider", d.getName());
                            break;
                        case s.JWPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(t.currentQuality, t.levels), this.mediaModel.set("levels", t.levels);
                            break;
                        case s.JWPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(t.currentQuality, t.levels), this.persistQualityLevel(t.currentQuality, t.levels);
                            break;
                        case s.JWPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks), this.mediaModel.set("audioTracks", t.tracks);
                            break;
                        case s.JWPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks);
                            break;
                        case s.JWPLAYER_CONNECTING:
                            this.trigger("connecting");
                            break;
                        case s.JWPLAYER_CONNECT_FAILD:
                            this.trigger("connectFaild");
                            break;
                        case s.JWPLAYER_ALIVE:
                            this.trigger("alive");
                            break;
                        case s.JWPLAYER_NO_LIVE_STREAM:
                            this.trigger("noLiveStream");
                            break;
                        case s.JWPLAYER_LIVE_STOP:
                            this.trigger("liveStop");
                            break;
                        case"stop":
                            this.set("duration", 0);
                            break;
                        case"subtitlesTrackChanged":
                            this.setVideoSubtitleTrack(t.currentTrack, t.tracks);
                            break;
                        case"visualQuality":
                            var a = o.extend({}, t);
                            this.mediaModel.set("visualQuality", a)
                    }
                    this.mediaController.trigger(e, n)
                }

                var c, d, h, f, p = this, g = e.noop;
                this.mediaController = o.extend({}, r), this.mediaModel = new u, i.model(this), this.set("mediaModel", this.mediaModel), this.setup = function (t) {
                    return f = new n, o.extend(this.attributes, t, {
                        item: 0,
                        state: l.IDLE,
                        flashBlocked: !1,
                        fullscreen: !1,
                        compactUI: !1,
                        scrubbing: !1,
                        duration: 0,
                        position: 0,
                        buffer: 0
                    }), e.isMobile() && !t.mobileSdk && this.set("autostart", !1), this.updateProviders(), this
                }, this.getConfiguration = function () {
                    return o.omit(this.clone(), ["mediaModel"])
                }, this.updateProviders = function () {
                    c = new t(this.getConfiguration())
                }, this.recordMediaPosition = function (e, t) {
                    var n = h && h.sources && h.sources[0];
                    n && n.file && !isNaN(e) && !isNaN(t) && t > 0 && isFinite(t) !== !1 && o.each(h.sources, function (n) {
                        e < t && e > 2 ? f.setItem("filePostion." + n.file, e) : e >= t && f.clearItem("filePostion." + n.file)
                    })
                }, this.getLastPosition = function (t) {
                    var n = 0;
                    return t && "array" === e.typeOf(t.sources) && t.sources.length > 0 && f.getItem("filePostion." + t.sources[0].file) && (n = f.getItem("filePostion." + t.sources[0].file)), n
                }, this.setQualityLevel = function (e, t) {
                    e > -1 && t.length > 1 && this.mediaModel.set("currentLevel", parseInt(e))
                }, this.setCurrentQuality = function (e) {
                    d.setCurrentQuality(e)
                }, this.persistQualityLevel = function (e, t) {
                    var n = t[e] || {}, i = n.label;
                    this.set("qualityLabel", i)
                }, this.setCurrentAudioTrack = function (e, t) {
                    e > -1 && t.length > 0 && e < t.length && this.mediaModel.set("currentAudioTrack", parseInt(e))
                }, this.onMediaContainer = function () {
                    var e = this.get("mediaContainer");
                    g.setContainer(e)
                }, this.changeVideoProvider = function (e) {
                    var t = function () {
                        this.setVolume(this.get("volume"))
                    };
                    if (this.off("change:mediaContainer", this.onMediaContainer), d && (d.off(null, null, this), d.getContainer() && d.remove()), !e) return d = g = e, void this.set("provider", void 0);
                    g = new e(p.get("id"), p.getConfiguration());
                    var n = this.get("mediaContainer");
                    n ? g.setContainer(n) : this.once("change:mediaContainer", this.onMediaContainer), this.once("change:provider", t, this), this.set("provider", g.getName()), g.getName().name.indexOf("flash") === -1 && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)), d = g, d.volume(p.get("volume")), d.mute(p.get("mute")), d.on("all", a, this)
                }, this.destroy = function () {
                    d && (d.off(null, null, this), d.destroy())
                }, this.getVideo = function () {
                    return d
                }, this.setFullscreen = function (e) {
                    e = !!e, e !== p.get("fullscreen") && p.set("fullscreen", e)
                }, this.chooseProvider = function (e) {
                    return c.choose(e).provider
                }, this.setActiveItem = function (e) {
                    this.mediaModel.off(), this.mediaModel = new u, this.set("mediaModel", this.mediaModel), this.set("position", e.starttime || 0), this.set("duration", e.duration || 0), this.setProvider(e)
                }, this.setProvider = function (e) {
                    var t = e && e.sources && e.sources[0];
                    if (void 0 !== t) {
                        h = e;
                        var n = this.chooseProvider(t);
                        n && g instanceof n || p.changeVideoProvider(n), g && (g.init && g.init(e), this.trigger("itemReady", e))
                    }
                }, this.getCurrentItem = function () {
                    return h
                }, this.getProviders = function () {
                    return c
                }, this.resetProvider = function () {
                    g = null
                }, this.setVolume = function (e) {
                    e = Math.round(e), e = d && "html5" === d.getName().name ? Math.min(e, 100) : Math.min(e, 500), p.set("volume", e), d && d.volume(e);
                    var t = 0 === e;
                    t !== p.get("mute") && p.setMute(t)
                }, this.enableGPU = function () {
                    d.enableGPU()
                }, this.disableGPU = function () {
                    d.disableGPU()
                }, this.setToken = function (e) {
                    var t = [];
                    "string" == typeof arguments[0] && "string" == typeof arguments[1] && (t[0] = {
                        file: arguments[0],
                        tokenText: arguments[1]
                    }, e = t), d.setToken(e)
                }, this.setMute = function (t) {
                    if (e.exists(t) || (t = !this.get("mute")), this.set("mute", t), d && d.mute(t), !t) {
                        var n = Math.max(10, this.get("volume"));
                        this.setVolume(n)
                    }
                }, this.loadVideo = function (e) {
                    if (!e) {
                        var t = this.get("item");
                        e = this.get("playlist")[t]
                    }
                    this.get("playlist").length > 1 ? e.starttime = this.getLastPosition(e) : e.starttime = this.get("starttime") || this.getLastPosition(e), this.set("position", e.starttime || 0), this.set("duration", e.duration || 0), this.mediaModel.set("playAttempt", !0), this.mediaController.trigger(s.JWPLAYER_MEDIA_PLAY_ATTEMPT, {playReason: this.get("playReason")}), d.load(e)
                }, this.stopVideo = function () {
                    d && d.stop()
                }, this.playVideo = function () {
                    d.play()
                }, this.persistCaptionsTrack = function () {
                    var e = this.get("captionsTrack");
                    e ? this.set("captionLabel", e.label) : this.set("captionLabel", "Off")
                }, this.setVideoSubtitleTrack = function (e, t) {
                    this.set("captionsIndex", e), e && t && e <= t.length && t[e - 1].data && this.set("captionsTrack", t[e - 1]), d && d.setSubtitlesTrack && d.setSubtitlesTrack(e);
                }, this.persistVideoSubtitleTrack = function (e) {
                    this.setVideoSubtitleTrack(e), this.persistCaptionsTrack()
                }
            }, u = c.MediaModel = function () {
                this.set("state", l.IDLE)
            };
            return o.extend(c.prototype, a), o.extend(u.prototype, a), c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(6)], o = function (e) {
            function t(t) {
                return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t
            }

            return function (e, n, i) {
                if (n = t(n), i = t(i), n !== i) {
                    var o = n.replace(/(?:ing|d)$/, ""),
                        r = {type: o, newstate: n, oldstate: i, reason: e.mediaModel.get("state")};
                    "play" === o && (r.playReason = e.get("playReason")), this.trigger(o, r)
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(5)], o = function (e, t) {
            function n(e) {
                var t = {}, n = e.split("\r\n");
                1 === n.length && (n = e.split("\n"));
                var o = 1;
                if (n[0].indexOf(" --> ") > 0 && (o = 0), n.length > o + 1 && n[o + 1]) {
                    var r = n[o], a = r.indexOf(" --> ");
                    a > 0 && (t.begin = i(r.substr(0, a)), t.end = i(r.substr(a + 5)), t.text = n.slice(o + 1).join("<br/>"))
                }
                return t
            }

            var i = e.seconds;
            return function (e) {
                var i = [];
                e = t.trim(e);
                var o = e.split("\r\n\r\n");
                1 === o.length && (o = e.split("\n\n"));
                for (var r = 0; r < o.length; r++) if ("WEBVTT" !== o[r]) {
                    var a = n(o[r]);
                    a.text && i.push(a)
                }
                return i
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(102), n(104), n(43), n(19)], o = function (e, t, n, i) {
            var o = {}, r = {}, a = function (n, i) {
                return r[n] = new e(new t(o), i), r[n]
            }, s = function (e, t, r, a) {
                var s = i.getPluginName(e);
                o[s] || (o[s] = new n(e)), o[s].registerPlugin(e, t, r, a)
            };
            return {loadPlugins: a, registerPlugin: s}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            function e(e) {
                this.message = e
            }

            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            e.prototype = new Error, e.prototype.name = "InvalidCharacterError", window.btoa || (window.btoa = function (n) {
                for (var i, o, r = String(n), a = 0, s = t, l = ""; r.charAt(0 | a) || (s = "=", a % 1); l += s.charAt(63 & i >> 8 - a % 1 * 8)) {
                    if (o = r.charCodeAt(a += .75), o > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    i = i << 8 | o
                }
                return l
            }), window.atob || (window.atob = function (n) {
                var i = String(n).replace(/=+$/, "");
                if (i.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var o, r, a = 0, s = 0, l = ""; r = i.charAt(s++); ~r && (o = a % 4 ? 64 * o + r : r, a++ % 4) ? l += String.fromCharCode(255 & o >> (-2 * a & 6)) : 0) r = t.indexOf(r);
                return l
            })
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            "object" != typeof JSON && (JSON = {}), function () {
                "use strict";

                function e(e) {
                    return e < 10 ? "0" + e : e
                }

                function t(e) {
                    return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, function (e) {
                        var t = s[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function n(e, i) {
                    var o, s, c, u, d, h = r, f = i[e];
                    switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), "function" == typeof l && (f = l.call(i, e, f)), typeof f) {
                        case"string":
                            return t(f);
                        case"number":
                            return isFinite(f) ? String(f) : "null";
                        case"boolean":
                        case"null":
                            return String(f);
                        case"object":
                            if (!f) return "null";
                            if (r += a, d = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                                for (u = f.length, o = 0; o < u; o += 1) d[o] = n(o, f) || "null";
                                return c = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + h + "]" : "[" + d.join(",") + "]", r = h, c
                            }
                            if (l && "object" == typeof l) for (u = l.length, o = 0; o < u; o += 1) "string" == typeof l[o] && (s = l[o], c = n(s, f), c && d.push(t(s) + (r ? ": " : ":") + c)); else for (s in f) Object.prototype.hasOwnProperty.call(f, s) && (c = n(s, f), c && d.push(t(s) + (r ? ": " : ":") + c));
                            return c = 0 === d.length ? "{}" : r ? "{\n" + r + d.join(",\n" + r) + "\n" + h + "}" : "{" + d.join(",") + "}", r = h, c
                    }
                }

                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                    return this.valueOf()
                });
                var i, o, r, a, s, l;
                "function" != typeof JSON.stringify && (o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, JSON.stringify = function (e, t, i) {
                    var o;
                    if (r = "", a = "", "number" == typeof i) for (o = 0; o < i; o += 1) a += " "; else "string" == typeof i && (a = i);
                    if (l = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                    return n("", {"": e})
                }), "function" != typeof JSON.parse && (i = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (e, t) {
                    function n(e, i) {
                        var o, r, a = e[i];
                        if (a && "object" == typeof a) for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (r = n(a, o), void 0 !== r ? a[o] = r : delete a[o]);
                        return t.call(e, i, a)
                    }

                    var o;
                    if (e = String(e), i.lastIndex = 0, i.test(e) && (e = e.replace(i, function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return o = eval("(" + e + ")"), "function" == typeof t ? n({"": o}, "") : o;
                    throw new SyntaxError("JSON.parse")
                })
            }(), window.JSON || (window.JSON = JSON)
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            function t(e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }

            function n(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = null, this._value = null, this._deferreds = [], l(e, t(o, this), t(r, this))
            }

            function i(e) {
                var t = this;
                return null === this._state ? void this._deferreds.push(e) : void c(function () {
                    var n = t._state ? e.onFulfilled : e.onRejected;
                    if (null === n) return void(t._state ? e.resolve : e.reject)(t._value);
                    var i;
                    try {
                        i = n(t._value)
                    } catch (o) {
                        return void e.reject(o)
                    }
                    e.resolve(i)
                })
            }

            function o(e) {
                try {
                    if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void l(t(n, e), t(o, this), t(r, this))
                    }
                    this._state = !0, this._value = e, a.call(this)
                } catch (i) {
                    r.call(this, i)
                }
            }

            function r(e) {
                this._state = !1, this._value = e, a.call(this)
            }

            function a() {
                for (var e = 0, t = this._deferreds.length; e < t; e++) i.call(this, this._deferreds[e]);
                this._deferreds = null
            }

            function s(e, t, n, i) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = i
            }

            function l(e, t, n) {
                var i = !1;
                try {
                    e(function (e) {
                        i || (i = !0, t(e))
                    }, function (e) {
                        i || (i = !0, n(e))
                    })
                } catch (o) {
                    if (i) return;
                    i = !0, n(o)
                }
            }

            var c = e.defer, u = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            n.prototype["catch"] = function (e) {
                return this.then(null, e)
            }, n.prototype.then = function (e, t) {
                var o = this;
                return new n(function (n, r) {
                    i.call(o, new s(e, t, n, r))
                })
            }, n.all = function () {
                var e = Array.prototype.slice.call(1 === arguments.length && u(arguments[0]) ? arguments[0] : arguments);
                return new n(function (t, n) {
                    function i(r, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var s = a.then;
                                if ("function" == typeof s) return void s.call(a, function (e) {
                                    i(r, e)
                                }, n)
                            }
                            e[r] = a, 0 === --o && t(e)
                        } catch (l) {
                            n(l)
                        }
                    }

                    if (0 === e.length) return t([]);
                    for (var o = e.length, r = 0; r < e.length; r++) i(r, e[r])
                })
            }, n.resolve = function (e) {
                return e && "object" == typeof e && e.constructor === n ? e : new n(function (t) {
                    t(e)
                })
            }, n.reject = function (e) {
                return new n(function (t, n) {
                    n(e)
                })
            }, n.race = function (e) {
                return new n(function (t, n) {
                    for (var i = 0, o = e.length; i < o; i++) e[i].then(t, n)
                })
            }, n._setImmediateFn = function (e) {
                c = e
            }, window.Promise || (window.Promise = n)
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(4), n(6), n(1)], o = function (e, t, n, i) {
            var o = e.noop, r = i.constant(!1), a = {
                supports: r,
                play: o,
                load: o,
                stop: o,
                volume: o,
                mute: o,
                seek: o,
                resize: o,
                remove: o,
                destroy: o,
                setVisibility: o,
                setFullscreen: r,
                getFullscreen: o,
                getContainer: o,
                setContainer: r,
                getName: o,
                getQualityLevels: o,
                getCurrentQuality: o,
                setCurrentQuality: o,
                getAudioTracks: o,
                getCurrentAudioTrack: o,
                setCurrentAudioTrack: o,
                checkComplete: o,
                setControls: o,
                attachMedia: o,
                detachMedia: o,
                setState: function (e) {
                    var i = this.state || n.IDLE;
                    this.state = e, e !== i && this.trigger(t.JWPLAYER_PLAYER_STATE, {newstate: e})
                },
                sendMediaType: function (e) {
                    var n = e[0].type, i = "oga" === n || "aac" === n || "mp3" === n || "mpeg" === n || "vorbis" === n;
                    this.trigger(t.JWPLAYER_MEDIA_TYPE, {mediaType: i ? "audio" : "video"})
                }
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1), n(4), n(6), n(107), n(27), n(3)], o = function (e, t, n, i, o, r, a) {
            function s(e) {
                return e + "_swf_" + u++
            }

            function l(t) {
                var n = document.createElement("a");
                n.href = t.flashplayer;
                var i = n.hostname === window.location.host;
                return e.isChrome() && !i
            }

            function c(c, u) {
                function d(e) {
                    if (_) for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.bitrate) {
                            var i = Math.round(n.bitrate / 1e3);
                            n.label = h(i)
                        }
                    }
                }

                function h(e) {
                    var t = _[e];
                    if (!t) {
                        for (var n = 1 / 0, i = _.bitrates.length; i--;) {
                            var o = Math.abs(_.bitrates[i] - e);
                            if (o > n) break;
                            n = o
                        }
                        t = _.labels[_.bitrates[i + 1]], _[e] = t
                    }
                    return t
                }

                function f() {
                    var e = u.hlslabels;
                    if (!e) return null;
                    var t = {}, n = [];
                    for (var i in e) {
                        var o = parseFloat(i);
                        if (!isNaN(o)) {
                            var r = Math.round(o);
                            t[r] = e[i], n.push(r)
                        }
                    }
                    return 0 === n.length ? null : (n.sort(function (e, t) {
                        return e - t
                    }), {labels: t, bitrates: n})
                }

                function p() {
                    E = setTimeout(function () {
                        a.trigger.call(P, "flashBlocked")
                    }, 4e3), w.once("embedded", function () {
                        A(), a.trigger.call(P, "flashUnblocked")
                    }, P)
                }

                function g() {
                    A(), p()
                }

                function A() {
                    clearTimeout(E), e.removeEventListener(window, "focus", g, !1)
                }

                var m, w, v, y = null, E = -1, j = !1, b = -1, C = null, k = -1, L = null, I = !0, x = !1, T = null,
                    P = this, M = function () {
                        return w && w.__ready
                    }, R = function () {
                        w && w.triggerFlash.apply(w, arguments)
                    }, _ = f();
                t.extend(this, a, {
                    init: function (e) {
                        e.preload && "none" !== e.preload && !u.autostart && (y = e)
                    }, load: function (e) {
                        y = e, j = !1, this.setState(i.LOADING), R("load", e), e.sources.length && "hls" !== e.sources[0].type && this.sendMediaType(e.sources)
                    }, play: function () {
                        R("play")
                    }, pause: function () {
                        R("pause"), this.setState(i.PAUSED)
                    }, stop: function () {
                        R("stop"), b = -1, y = null, T = null, this.setState(i.IDLE), this.trigger("stop")
                    }, seek: function (e) {
                        R("seek", e)
                    }, volume: function (e) {
                        if (t.isNumber(e)) {
                            var n = Math.min(Math.max(0, e), 100);
                            M() && R("volume", n)
                        }
                    }, enableGPU: function () {
                        R("enableGPU")
                    }, disableGPU: function () {
                        R("disableGPU")
                    }, setToken: function (e) {
                        R("setToken", e)
                    }, mute: function (e) {
                        M() && R("mute", e)
                    }, setState: function () {
                        return r.setState.apply(this, arguments)
                    }, checkComplete: function () {
                        return j
                    }, attachMedia: function () {
                        I = !0, j && (this.setState(i.COMPLETE), this.trigger(n.JWPLAYER_MEDIA_COMPLETE), j = !1)
                    }, detachMedia: function () {
                        return I = !1, null
                    }, getSwfObject: function (e) {
                        var t = e.getElementsByTagName("object")[0];
                        return t ? (t.off(null, null, this), t) : o.embed(u.flashplayer, e, s(c), u.wmode, u.playlistItem, u.flashUI)
                    }, getContainer: function () {
                        return m
                    }, setContainer: function (o) {
                        if (m !== o) {
                            m = o, w = this.getSwfObject(o), document.hasFocus() ? p() : e.addEventListener(window, "focus", g, !1), w.once("ready", function () {
                                A(), w.once("pluginsLoaded", function () {
                                    w.queueCommands = !1, R("setupCommandQueue", w.__commandQueue), w.__commandQueue = []
                                });
                                var e = t.extend({}, u), i = w.triggerFlash("setup", e);
                                i === w ? w.__ready = !0 : this.trigger(n.JWPLAYER_MEDIA_ERROR, i), y && R("init", y)
                            }, this);
                            var r = [n.JWPLAYER_MEDIA_META, n.JWPLAYER_MEDIA_ERROR, n.JWPLAYER_MEDIA_SEEK, n.JWPLAYER_MEDIA_SEEKED, "subtitlesTracks", "subtitlesTrackChanged", "subtitlesTrackData", "mediaType"],
                                s = [n.JWPLAYER_MEDIA_BUFFER, n.JWPLAYER_MEDIA_TIME],
                                c = [n.JWPLAYER_MEDIA_BUFFER_FULL];
                            w.on(n.JWPLAYER_MEDIA_LEVELS, function (e) {
                                d(e.levels), b = e.currentQuality, C = e.levels, this.trigger(e.type, e)
                            }, this), w.on(n.JWPLAYER_MEDIA_LEVEL_CHANGED, function (e) {
                                d(e.levels), b = e.currentQuality, C = e.levels, this.trigger(e.type, e)
                            }, this), w.on(n.JWPLAYER_AUDIO_TRACKS, function (e) {
                                k = e.currentTrack, L = e.tracks, this.trigger(e.type, e)
                            }, this), w.on(n.JWPLAYER_AUDIO_TRACK_CHANGED, function (e) {
                                k = e.currentTrack, L = e.tracks, this.trigger(e.type, e)
                            }, this), w.on(n.JWPLAYER_PLAYER_STATE, function (e) {
                                var t = e.newstate;
                                t !== i.IDLE && this.setState(t)
                            }, this), w.on(s.join(" "), function (e) {
                                "Infinity" === e.duration && (e.duration = 1 / 0), this.trigger(e.type, e)
                            }, this), w.on(r.join(" "), function (e) {
                                this.trigger(e.type, e)
                            }, this), w.on(c.join(" "), function (e) {
                                this.trigger(e.type)
                            }, this), w.on(n.JWPLAYER_CONNECTING, function (e) {
                                a.trigger.call(P, "connecting", e)
                            }, this), w.on(n.JWPLAYER_CONNECT_FAILD, function (e) {
                                a.trigger.call(P, "connectFaild", e), a.trigger.call(P, n.JWPLAYER_MEDIA_ERROR, {message: "连接已断开，请稍后重试"})
                            }, this), w.on(n.JWPLAYER_ALIVE, function (e) {
                                a.trigger.call(P, "alive", e)
                            }, this), w.on(n.JWPLAYER_NO_LIVE_STREAM, function (e) {
                                a.trigger.call(P, "noLiveStream", e)
                            }, this), w.on(n.JWPLAYER_LIVE_STOP, function (e) {
                                a.trigger.call(P, "liveStop", e)
                            }, this), w.on(n.JWPLAYER_CUEPOINT, function (e) {
                                a.trigger.call(P, e.name, e.args)
                            }, this), w.on(n.JWPLAYER_MEDIA_BEFORECOMPLETE, function (e) {
                                j = !0, this.trigger(e.type), I === !0 && (j = !1)
                            }, this), w.on(n.JWPLAYER_MEDIA_COMPLETE, function (e) {
                                j || (this.setState(i.COMPLETE), this.trigger(e.type))
                            }, this), w.on("visualQuality", function (e) {
                                e.reason = e.reason || "api", this.trigger("visualQuality", e), this.trigger(n.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                            }, this), w.on(n.JWPLAYER_PROVIDER_CHANGED, function (e) {
                                v = e.message, this.trigger(n.JWPLAYER_PROVIDER_CHANGED, e)
                            }, this), w.on(n.JWPLAYER_ERROR, function (t) {
                                e.log("Error playing media: %o %s", t.code, t.message, t), this.trigger(n.JWPLAYER_MEDIA_ERROR, t)
                            }, this), l(u) && w.on("throttle", function (e) {
                                A(), "resume" === e.state ? a.trigger.call(P, "flashThrottle", e) : E = setTimeout(function () {
                                    a.trigger.call(P, "flashThrottle", e)
                                }, 250)
                            }, this)
                        }
                    }, remove: function () {
                        b = -1, C = null, o.remove(w)
                    }, setVisibility: function (e) {
                        e = !!e, m.style.opacity = e ? 1 : 0
                    }, resize: function (e, t, n) {
                        n && R("stretch", n)
                    }, setControls: function (e) {
                        R("setControls", e)
                    }, setFullscreen: function (e) {
                        x = e, R("fullscreen", e)
                    }, getFullScreen: function () {
                        return x
                    }, setCurrentQuality: function (e) {
                        R("setCurrentQuality", e)
                    }, getCurrentQuality: function () {
                        return b
                    }, setSubtitlesTrack: function (e) {
                        R("setSubtitlesTrack", e)
                    }, getName: function () {
                        return v ? {name: "flash_" + v} : {name: "flash"}
                    }, getQualityLevels: function () {
                        return C || y.sources
                    }, getAudioTracks: function () {
                        return L
                    }, getCurrentAudioTrack: function () {
                        return k
                    }, setCurrentAudioTrack: function (e) {
                        R("setCurrentAudioTrack", e)
                    }, destroy: function () {
                        A(), this.remove(), w && (w.off(), w = null), m = null, y = null, this.off()
                    }
                }), this.trigger = function (e, t) {
                    if (I) return a.trigger.call(this, e, t)
                }
            }

            var u = 0, d = function () {
            };
            return d.prototype = r, c.prototype = new d, c.getName = function () {
                return {name: "flash"}
            }, c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(16), n(2), n(30), n(1), n(4), n(6), n(27), n(3), n(106)], o = function (e, t, n, i, o, r, a, s, l) {
            function c(e, n) {
                t.foreach(e, function (e, i) {
                    t.addEventListener(n, e, i, !1)
                })
            }

            function u(e, n) {
                t.foreach(e, function (e, i) {
                    t.removeEventListener(n, e, i, !1)
                })
            }

            function d(e) {
                if ("hls" === e.type) if (e.androidhls !== !1) {
                    var n = t.isAndroidNative;
                    if (n(2) || n(3) || n("4.0")) return !1;
                    if (t.isAndroid()) return !0
                } else if (t.isAndroid()) return !1;
                return null
            }

            function h(h, b) {
                function C() {
                    be && (se(Be.audioTracks), me.setTextTracks(Be.textTracks), Be.setAttribute("jw-loaded", "data"))
                }

                function k() {
                    be && Be.setAttribute("jw-loaded", "started")
                }

                function L(e) {
                    me.trigger("click", e)
                }

                function I() {
                    be && !ke && (D(_()), M(ee(), pe, fe))
                }

                function x() {
                    be && M(ee(), pe, fe)
                }

                function T() {
                    f(Ee), ve = !0, be && (me.state === r.STALLED ? me.setState(r.PLAYING) : me.state === r.PLAYING && (Ee = setTimeout($, p)), ke && Be.duration === 1 / 0 && 0 === Be.currentTime || (D(_()), R(Be.currentTime), M(ee(), pe, fe), me.state === r.PLAYING && (me.trigger(o.JWPLAYER_MEDIA_TIME, {
                        position: pe,
                        duration: fe
                    }), P())))
                }

                function P() {
                    var e = _e.level;
                    if (e.width !== Be.videoWidth || e.height !== Be.videoHeight) {
                        if (e.width = Be.videoWidth, e.height = Be.videoHeight, de(), !e.width || !e.height) return;
                        _e.reason = _e.reason || "auto", _e.mode = "hls" === Ae[Ce].type ? "auto" : "manual", _e.bitrate = 0, e.index = Ce, e.label = Ae[Ce].label, me.trigger("visualQuality", _e), _e.reason = ""
                    }
                }

                function M(e, t, n) {
                    e === je && n === fe || (je = e, me.trigger(o.JWPLAYER_MEDIA_BUFFER, {
                        bufferPercent: 100 * e,
                        position: t,
                        duration: n
                    }))
                }

                function R(e) {
                    fe < 0 && (e = -(X() - e)), pe = e
                }

                function _() {
                    var e = Be.duration, t = X();
                    if (e === 1 / 0 && t) {
                        var n = t - Be.seekable.start(0);
                        n !== 1 / 0 && n > 120 && (e = -n)
                    }
                    return e
                }

                function D(e) {
                    fe = e, ye && e && e !== 1 / 0 && me.seek(ye)
                }

                function B() {
                    var e = _();
                    ke && e === 1 / 0 && (e = 0), me.trigger(o.JWPLAYER_MEDIA_META, {
                        duration: e,
                        height: Be.videoHeight,
                        width: Be.videoWidth,
                        metadata: {duration: e, height: Be.videoHeight, width: Be.videoWidth}
                    }), D(e)
                }

                function S() {
                    be && (ve = !0, ke || de(), Y())
                }

                function O() {
                    be && (Be.muted && (Be.muted = !1, Be.muted = !0), Be.setAttribute("jw-loaded", "meta"), B())
                }

                function Y() {
                    ge || (ge = !0, me.trigger(o.JWPLAYER_MEDIA_BUFFER_FULL))
                }

                function N() {
                    me.setState(r.PLAYING), Be.hasAttribute("jw-played") || Be.setAttribute("jw-played", ""), me.trigger(o.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                }

                function F() {
                    me.state !== r.COMPLETE && Be.currentTime !== Be.duration && me.setState(r.PAUSED)
                }

                function Q() {
                    ke || Be.paused || Be.ended || me.state !== r.LOADING && me.state !== r.ERROR && (me.seeking || me.setState(r.STALLED))
                }

                function J() {
                    be && (t.log("Error playing media: %o %s", Be.error, Be.src), me.trigger(o.JWPLAYER_MEDIA_ERROR, {
                        message: "Error loading media: File could not be played",
                        code: "111"
                    }))
                }

                function U(e) {
                    var n;
                    return "array" === t.typeOf(e) && e.length > 0 && (n = i.map(e, function (e, t) {
                        return {label: e.label || t}
                    })), n
                }

                function W(e) {
                    Ae = e, Ce = H(e);
                    var t = U(e);
                    t && me.trigger(o.JWPLAYER_MEDIA_LEVELS, {levels: t, currentQuality: Ce})
                }

                function H(e) {
                    var t = Math.max(0, Ce), n = b.qualityLabel;
                    if (e) for (var i = 0; i < e.length; i++) if (e[i]["default"] && (t = i), n && e[i].label === n) return i;
                    return _e.reason = "initial choice", _e.level = {}, t
                }

                function V(e, n) {
                    ye = 0, f(Ee);
                    var i = document.createElement("source");
                    i.src = Ae[Ce].file;
                    var o = Be.src !== i.src, a = Be.getAttribute("jw-loaded"), s = Be.hasAttribute("jw-played");
                    o || "none" === a || "started" === a ? (fe = n, G(Ae[Ce]), me.setupSideloadedTracks(Re), Be.load(), w && Be.paused && Be.play()) : (0 === e && Be.currentTime > 0 && (ye = -1, me.seek(e)), Be.play()), pe = Be.currentTime, m && !s && (Y(), Be.paused || me.state === r.PLAYING || me.setState(r.LOADING)), t.isIOS() && me.getFullScreen() && (Be.controls = !0), e > 0 && me.seek(e)
                }

                function G(e) {
                    Te = null, Pe = -1, Me = -1, _e.reason || (_e.reason = "initial choice", _e.level = {}), ve = !1, ge = !1, ke = d(e), e.preload && e.preload !== Be.getAttribute("preload") && Be.setAttribute("preload", e.preload);
                    var t = document.createElement("source");
                    t.src = e.file;
                    var n = Be.src !== t.src;
                    n && (Be.setAttribute("jw-loaded", "none"), Be.src = e.file)
                }

                function z() {
                    Be && (me.disableTextTrack(), Be.removeAttribute("crossorigin"), Be.removeAttribute("preload"), Be.removeAttribute("src"), Be.removeAttribute("jw-loaded"), Be.removeAttribute("jw-played"), n.emptyElement(Be), Ce = -1, Re = null, !A && "load" in Be && Be.load())
                }

                function K() {
                    for (var e = Be.seekable ? Be.seekable.length : 0, t = 1 / 0; e--;) t = Math.min(t, Be.seekable.start(e));
                    return t
                }

                function X() {
                    for (var e = Be.seekable ? Be.seekable.length : 0, t = 0; e--;) t = Math.max(t, Be.seekable.end(e));
                    return t
                }

                function q() {
                    me.seeking = !1, me.trigger(o.JWPLAYER_MEDIA_SEEKED)
                }

                function Z() {
                    me.trigger("volume", {volume: Math.round(100 * Be.volume)}), me.trigger("mute", {mute: Be.muted})
                }

                function $() {
                    Be.currentTime === pe && Q()
                }

                function ee() {
                    var e = Be.buffered, n = Be.duration;
                    return !e || 0 === e.length || n <= 0 || n === 1 / 0 ? 0 : t.between(e.end(e.length - 1) / n, 0, 1)
                }

                function te() {
                    if (be && me.state !== r.IDLE && me.state !== r.COMPLETE) {
                        if (f(Ee), Ce = -1, Ie = !0, me.trigger(o.JWPLAYER_MEDIA_BEFORECOMPLETE), !be) return;
                        ne()
                    }
                }

                function ne() {
                    f(Ee), me.setState(r.COMPLETE), Ie = !1, me.trigger(o.JWPLAYER_MEDIA_COMPLETE)
                }

                function ie(e) {
                    xe = !0, ae(e), t.isIOS() && (Be.controls = !1)
                }

                function oe() {
                    for (var e = -1, t = 0; t < Be.audioTracks.length; t++) if (Be.audioTracks[t].enabled) {
                        e = t;
                        break
                    }
                    le(e)
                }

                function re(e) {
                    xe = !1, ae(e), t.isIOS() && (Be.controls = !1)
                }

                function ae(e) {
                    me.trigger("fullscreenchange", {target: e.target, jwstate: xe})
                }

                function se(e) {
                    if (Te = null, e) {
                        if (e.length) {
                            for (var t = 0; t < e.length; t++) if (e[t].enabled) {
                                Pe = t;
                                break
                            }
                            Pe === -1 && (Pe = 0, e[Pe].enabled = !0), Te = i.map(e, function (e) {
                                var t = {name: e.label || e.language, language: e.language};
                                return t
                            })
                        }
                        me.addTracksListener(e, "change", oe), Te && me.trigger("audioTracks", {
                            currentTrack: Pe,
                            tracks: Te
                        })
                    }
                }

                function le(e) {
                    Be && Be.audioTracks && Te && e > -1 && e < Be.audioTracks.length && e !== Pe && (Be.audioTracks[Pe].enabled = !1, Pe = e, Be.audioTracks[Pe].enabled = !0, me.trigger("audioTrackChanged", {
                        currentTrack: Pe,
                        tracks: Te
                    }))
                }

                function ce() {
                    return Te || []
                }

                function ue() {
                    return Pe
                }

                function de() {
                    if ("hls" === Ae[0].type) {
                        var e = "video";
                        0 === Be.videoHeight && (e = "audio"), me.trigger("mediaType", {mediaType: e})
                    }
                }

                this.state = r.IDLE, this.seeking = !1, i.extend(this, s, l), this.trigger = function (e, t) {
                    if (be) return s.trigger.call(this, e, t)
                }, this.setState = function (e) {
                    if (be) return a.setState.call(this, e)
                };
                var he, fe, pe, ge, Ae, me = this, we = {
                        click: L,
                        durationchange: I,
                        ended: te,
                        error: J,
                        loadstart: k,
                        loadeddata: C,
                        loadedmetadata: O,
                        canplay: S,
                        playing: N,
                        progress: x,
                        pause: F,
                        seeked: q,
                        timeupdate: T,
                        volumechange: Z,
                        webkitbeginfullscreen: ie,
                        webkitendfullscreen: re
                    }, ve = !1, ye = 0, Ee = -1, je = -1, be = !0, Ce = -1, ke = null, Le = !!b.sdkplatform, Ie = !1,
                    xe = !1, Te = null, Pe = -1, Me = -1, Re = null, _e = {level: {}}, De = document.getElementById(h),
                    Be = De ? De.querySelector("video") : void 0;
                Be = Be || document.createElement("video"), Be.className = "jw-video jw-reset", this.isSDK = Le, this.itemTracks = Re, this.video = Be, i.isObject(b.cast) && b.cast.appid && Be.setAttribute("disableRemotePlayback", ""), c(we, Be), y || (Be.controls = !0, Be.controls = !1), Be.setAttribute("x-webkit-airplay", "allow"), Be.setAttribute("webkit-playsinline", ""), this.stop = function () {
                    f(Ee), be && (z(), t.isIETrident() && Be.pause(), this.setState(r.IDLE))
                }, this.destroy = function () {
                    u(we, Be), this.removeTracksListener(Be.audioTracks, "change", oe), this.removeTracksListener(Be.textTracks, "change", me.textTrackChangeHandler), this.remove(), this.off()
                }, this.init = function (e) {
                    be && (Re = null, Ae = e.sources, Ce = H(e.sources), e.sources.length && "hls" !== e.sources[0].type && this.sendMediaType(e.sources), pe = e.starttime || 0, fe = e.duration || 0, _e.reason = "", G(Ae[Ce]), this.setupSideloadedTracks(e.tracks), Re = this.itemTracks)
                }, this.load = function (e) {
                    be && (W(e.sources), e.sources.length && "hls" !== e.sources[0].type && this.sendMediaType(e.sources), m && !Be.hasAttribute("jw-played") || me.setState(r.LOADING), V(e.starttime || 0, e.duration || 0))
                }, this.play = function () {
                    return me.seeking ? (me.setState(r.LOADING), void me.once(o.JWPLAYER_MEDIA_SEEKED, me.play)) : void Be.play()
                }, this.pause = function () {
                    f(Ee), Be.pause(), this.setState(r.PAUSED)
                }, this.seek = function (e) {
                    if (be) if (e < 0 && (e += K() + X()), 0 === ye && this.trigger(o.JWPLAYER_MEDIA_SEEK, {
                        position: Be.currentTime,
                        offset: e
                    }), ve || (ve = !!X()), ve) {
                        ye = 0;
                        try {
                            me.seeking = !0, Be.currentTime = e
                        } catch (t) {
                            me.seeking = !1, ye = e
                        }
                    } else ye = e, w && Be.paused && Be.play()
                }, this.volume = function (e) {
                    e = t.between(e / 100, 0, 1), Be.volume = e
                }, this.enableGPU = function () {
                    throw"只有使用Flash播放才支持开启GPU"
                }, this.disableGPU = function () {
                    throw"只有使用Flash播放才支持开启GPU"
                }, this.mute = function (e) {
                    Be.muted = !!e
                }, this.checkComplete = function () {
                    return Ie
                }, this.detachMedia = function () {
                    return f(Ee), this.disableTextTrack(), be = !1, Be
                }, this.attachMedia = function () {
                    be = !0, ve = !1, this.seeking = !1, Be.loop = !1, Ie && ne()
                }, this.setContainer = function (e) {
                    he = e, e.appendChild(Be)
                }, this.getContainer = function () {
                    return he
                }, this.remove = function () {
                    z(), f(Ee), he === Be.parentNode && he.removeChild(Be)
                }, this.setVisibility = function (t) {
                    t = !!t, t || v ? e.style(he, {visibility: "visible", opacity: 1}) : e.style(he, {
                        visibility: "",
                        opacity: 0
                    })
                }, this.resize = function (t, n, i) {
                    if (!(t && n && Be.videoWidth && Be.videoHeight)) return !1;
                    var o = {objectFit: ""};
                    if ("uniform" === i) {
                        var r = t / n, a = Be.videoWidth / Be.videoHeight;
                        Math.abs(r - a) < .09 && (o.objectFit = "fill", i = "exactfit")
                    }
                    var s = g || v || y || E;
                    if (s) {
                        var l = -Math.floor(Be.videoWidth / 2 + 1), c = -Math.floor(Be.videoHeight / 2 + 1),
                            u = Math.ceil(100 * t / Be.videoWidth) / 100, d = Math.ceil(100 * n / Be.videoHeight) / 100;
                        "none" === i ? u = d = 1 : "fill" === i ? u = d = Math.max(u, d) : "uniform" === i && (u = d = Math.min(u, d)), o.width = Be.videoWidth, o.height = Be.videoHeight, o.top = o.left = "50%", o.margin = 0, e.transform(Be, "translate(" + l + "px, " + c + "px) scale(" + u.toFixed(2) + ", " + d.toFixed(2) + ")")
                    }
                    return e.style(Be, o), !1
                }, this.setFullscreen = function (e) {
                    if (e = !!e) {
                        var n = t.tryCatch(function () {
                            var e = Be.webkitEnterFullscreen || Be.webkitEnterFullScreen;
                            e && e.apply(Be)
                        });
                        return !(n instanceof t.Error) && me.getFullScreen()
                    }
                    var i = Be.webkitExitFullscreen || Be.webkitExitFullScreen;
                    return i && i.apply(Be), e
                }, me.getFullScreen = function () {
                    return xe || !!Be.webkitDisplayingFullscreen
                }, this.setCurrentQuality = function (e) {
                    if (Ce !== e && e >= 0 && Ae && Ae.length > e) {
                        Ce = e, _e.reason = "api", _e.level = {}, this.trigger(o.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                            currentQuality: e,
                            levels: U(Ae)
                        }), b.qualityLabel = Ae[e].label;
                        var t = Be.currentTime || 0, n = Be.duration || 0;
                        n <= 0 && (n = fe), me.setState(r.LOADING), V(t, n)
                    }
                }, this.getCurrentQuality = function () {
                    return Ce
                }, this.getQualityLevels = function () {
                    return U(Ae)
                }, this.getName = function () {
                    return {name: j}
                }, this.setCurrentAudioTrack = le, this.getAudioTracks = ce, this.getCurrentAudioTrack = ue
            }

            var f = window.clearTimeout, p = 256, g = t.isIE(), A = t.isMSIE(), m = t.isMobile(), w = t.isFF(),
                v = t.isAndroidNative(), y = t.isIOS(7), E = t.isIOS(8), j = "html5", b = function () {
                };
            return b.prototype = a, h.prototype = new b, h.getName = function () {
                return {name: "html5"}
            }, h
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5), n(1), n(108)], o = function (e, t, n) {
            var i = {};
            i.createElement = function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.firstChild
            }, i.styleDimension = function (e) {
                return e + (e.toString().indexOf("%") > 0 ? "" : "px")
            };
            var o = function (e) {
                return t.isString(e.className) ? e.className.split(" ") : []
            }, r = function (t, n) {
                n = e.trim(n), t.className !== n && (t.className = n)
            };
            return i.classList = function (e) {
                return e.classList ? e.classList : o(e)
            }, i.hasClass = n.hasClass, i.addClass = function (e, n) {
                var i = o(e), a = t.isArray(n) ? n : n.split(" ");
                t.each(a, function (e) {
                    t.contains(i, e) || i.push(e)
                }), r(e, i.join(" "))
            }, i.removeClass = function (e, n) {
                var i = o(e), a = t.isArray(n) ? n : n.split(" ");
                r(e, t.difference(i, a).join(" "))
            }, i.replaceClass = function (e, t, n) {
                var i = e.className || "";
                t.test(i) ? i = i.replace(t, n) : n && (i += " " + n), r(e, i)
            }, i.toggleClass = function (e, n, o) {
                var r = i.hasClass(e, n);
                o = t.isBoolean(o) ? o : !r, o !== r && (o ? i.addClass(e, n) : i.removeClass(e, n))
            }, i.emptyElement = function (e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }, i.addStyleSheet = function (e) {
                var t = document.createElement("link");
                t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
            }, i.empty = function (e) {
                if (e) for (; e.childElementCount > 0;) e.removeChild(e.children[0])
            }, i.bounds = function (e) {
                var t = {left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0};
                if (!e || !document.body.contains(e)) return t;
                var n = e.getBoundingClientRect(e), i = window.pageYOffset, o = window.pageXOffset;
                return n.width || n.height || n.left || n.top ? (t.left = n.left + o, t.right = n.right + o, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
            }, i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(33)], o = function (e, t) {
            function n(e) {
                return /^(?:(?:https?|file)\:)?\/\//.test(e)
            }

            function i(t) {
                return e.some(t, function (e) {
                    return "parsererror" === e.nodeName
                })
            }

            var o = {};
            return o.getAbsolutePath = function (e, i) {
                if (t.exists(i) || (i = document.location.href), t.exists(e)) {
                    if (n(e)) return e;
                    var o, r = i.substring(0, i.indexOf("://") + 3),
                        a = i.substring(r.length, i.indexOf("/", r.length + 1));
                    if (0 === e.indexOf("/")) o = e.split("/"); else {
                        var s = i.split("?")[0];
                        s = s.substring(r.length + a.length + 1, s.lastIndexOf("/")), o = s.split("/").concat(e.split("/"))
                    }
                    for (var l = [], c = 0; c < o.length; c++) o[c] && t.exists(o[c]) && "." !== o[c] && (".." === o[c] ? l.pop() : l.push(o[c]));
                    return r + a + "/" + l.join("/")
                }
            }, o.getScriptPath = e.memoize(function (e) {
                for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                    var i = t[n].src;
                    if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e))
                }
                return ""
            }), o.parseXML = function (e) {
                var t = null;
                try {
                    "DOMParser" in window ? (t = (new window.DOMParser).parseFromString(e, "text/xml"), (i(t.childNodes) || t.childNodes && i(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                } catch (n) {
                }
                return t
            }, o.serialize = function (e) {
                if (void 0 === e) return null;
                if ("string" == typeof e && e.length < 6) {
                    var t = e.toLowerCase();
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
                }
                return e
            }, o.parseDimension = function (e) {
                return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
            }, o.timeFormat = function (e, t) {
                if (e <= 0 && !t) return "00:00";
                var n = e < 0 ? "-" : "";
                e = Math.abs(e);
                var i = Math.floor(e / 3600), o = Math.floor((e - 3600 * i) / 60), r = Math.floor(e % 60);
                return n + (i ? i + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (r < 10 ? "0" : "") + r
            }, o.adaptiveType = function (e) {
                if (0 !== e) {
                    var t = -120;
                    if (e <= t) return "DVR";
                    if (e < 0 || e === 1 / 0) return "LIVE"
                }
                return "VOD"
            }, o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(4), n(3), n(1)], o = function (e, t, n) {
            var i = {}, o = {NEW: 0, LOADING: 1, ERROR: 2, COMPLETE: 3}, r = function (r, a) {
                function s(t) {
                    u = o.ERROR, c.trigger(e.ERROR, t)
                }

                function l(t) {
                    u = o.COMPLETE, c.trigger(e.COMPLETE, t)
                }

                var c = n.extend(this, t), u = o.NEW;
                this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function (e) {
                    var t = document.createElement("link");
                    return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
                }, this.makeScriptTag = function (e) {
                    var t = document.createElement("script");
                    return t.src = e, t
                }, this.makeTag = a ? this.makeStyleLink : this.makeScriptTag, this.load = function () {
                    if (u === o.NEW) {
                        var t = i[r];
                        if (t && (u = t.getStatus(), u < 2)) return t.on(e.ERROR, s), void t.on(e.COMPLETE, l);
                        var n = document.getElementsByTagName("head")[0] || document.documentElement,
                            c = this.makeTag(r), d = !1;
                        c.onload = c.onreadystatechange = function (e) {
                            d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, l(e), c.onload = c.onreadystatechange = null, n && c.parentNode && !a && n.removeChild(c))
                        }, c.onerror = s, n.insertBefore(c, n.firstChild), u = o.LOADING, i[r] = this
                    }
                }, this.getStatus = function () {
                    return u
                }
            };
            return r.loaderstatus = o, r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(5)], o = function (e, t) {
            var n = {};
            return n.exists = function (e) {
                switch (typeof e) {
                    case"string":
                        return e.length > 0;
                    case"object":
                        return null !== e;
                    case"undefined":
                        return !1
                }
                return !0
            }, n.isHTTPS = function () {
                return 0 === window.location.href.indexOf("https")
            }, n.isRtmp = function (e, t) {
                return 0 === e.indexOf("rtmp") || "rtmp" === t
            }, n.isHls = function (e, n) {
                return "m3u8" === t.extension(e) || "hls" === t.extension(e) || "hls" === n
            }, n.isFlv = function (e, n) {
                return "flv" === t.extension(e) || "hls" === n
            }, n.isMutipleHls = function (t) {
                if (e.isArray(t) && t.length > 1) {
                    var i = 0;
                    if (e.each(t, function (e) {
                        n.isHls(e.file, e.type) && i++
                    }), i === t.length) return !0
                }
                return !1
            }, n.typeOf = function (t) {
                if (null === t) return "null";
                var n = typeof t;
                return "object" === n && e.isArray(t) ? "array" : n
            }, n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(47), n(7), n(61), n(2)], o = function (e, t, n, i) {
            var o = e.extend({
                constructor: function (e, t) {
                    this.className = e + " jw-background-color jw-reset", this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
                }, setup: function () {
                    var e = {
                        "default": this["default"],
                        className: this.className,
                        orientation: "jw-slider-" + this.orientation
                    };
                    this.el = i.createElement(n(e)), this.elementRail = i.getElementsByClassName("jw-slider-container", this.el)[0], this.elementBuffer = i.getElementsByClassName("jw-buffer", this.el)[0], this.elementProgress = i.getElementsByClassName("jw-progress", this.el)[0], this.elementThumb = i.getElementsByClassName("jw-knob", this.el)[0], this.userInteract = new t(this.element(), {preventScrolling: !0}), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
                }, dragStart: function () {
                    this.trigger("dragStart"), this.railBounds = i.bounds(this.elementRail)
                }, dragEnd: function (e) {
                    this.dragMove(e), this.trigger("dragEnd")
                }, dragMove: function (e) {
                    var t, n, o = this.railBounds = this.railBounds ? this.railBounds : i.bounds(this.elementRail);
                    "horizontal" === this.orientation ? (t = e.pageX, n = t < o.left ? 0 : t > o.right ? 100 : 100 * i.between((t - o.left) / o.width, 0, 1)) : (t = e.pageY, n = t >= o.bottom ? 0 : t <= o.top ? 100 : 100 * i.between((o.height - (t - o.top)) / o.height, 0, 1));
                    var r = this.limit(n);
                    return this.render(r), "drag" === e.type && i.hasClass(e.currentTarget, "jw-slider-time") || this.update(r), !1
                }, tap: function (e) {
                    this.railBounds = i.bounds(this.elementRail), this.dragMove(e)
                }, limit: function (e) {
                    return e;
                }, update: function (e) {
                    this.trigger("update", {percentage: e})
                }, render: function (e) {
                    e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%")
                }, updateBuffer: function (e) {
                    e && (this.elementBuffer.style.width = e + "%")
                }, element: function () {
                    return this.el
                }
            });
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t, n) {
            this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), c.registerDefaultDecorators(this)
        }

        t.__esModule = !0, t.HandlebarsEnvironment = o;
        var r = n(10), a = n(12), s = i(a), l = n(65), c = n(63), u = n(73), d = i(u), h = "4.0.5";
        t.VERSION = h;
        var f = 7;
        t.COMPILER_REVISION = f;
        var p = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        t.REVISION_CHANGES = p;
        var g = "[object Object]";
        o.prototype = {
            constructor: o, logger: d["default"], log: d["default"].log, registerHelper: function (e, t) {
                if (r.toString.call(e) === g) {
                    if (t) throw new s["default"]("Arg not supported with multiple helpers");
                    r.extend(this.helpers, e)
                } else this.helpers[e] = t
            }, unregisterHelper: function (e) {
                delete this.helpers[e]
            }, registerPartial: function (e, t) {
                if (r.toString.call(e) === g) r.extend(this.partials, e); else {
                    if ("undefined" == typeof t) throw new s["default"]('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = t
                }
            }, unregisterPartial: function (e) {
                delete this.partials[e]
            }, registerDecorator: function (e, t) {
                if (r.toString.call(e) === g) {
                    if (t) throw new s["default"]("Arg not supported with multiple decorators");
                    r.extend(this.decorators, e)
                } else this.decorators[e] = t
            }, unregisterDecorator: function (e) {
                delete this.decorators[e]
            }
        };
        var A = d["default"].log;
        t.log = A, t.createFrame = r.createFrame, t.logger = d["default"]
    }, , function (e, t, n) {
        var i;
        i = function (e, t, n) {
            function i(e, t) {
                r(t, a(e))
            }

            function o(e) {
                var t = d[e];
                if (t) {
                    for (var n = Object.keys(t), i = 0; i < n.length; i += 1) for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
                    delete d[e]
                }
            }

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], o = (d[e] || {})[i.id];
                    if (o) {
                        for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                        for (; r < i.parts.length; r++) o.parts.push(c(e, i.parts[r]))
                    } else {
                        for (var a = [], r = 0; r < i.parts.length; r++) a.push(c(e, i.parts[r]));
                        d[e] = d[e] || {}, d[e][i.id] = {id: i.id, parts: a}
                    }
                }
            }

            function a(e) {
                for (var t = [], n = {}, i = 0; i < e.length; i++) {
                    var o = e[i], r = o[0], a = o[1], s = o[2], l = {css: a, media: s};
                    n[r] ? n[r].parts.push(l) : t.push(n[r] = {id: r, parts: [l]})
                }
                return t
            }

            function s(e) {
                p().appendChild(e)
            }

            function l(e) {
                var t = document.createElement("style");
                return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), s(t), t
            }

            function c(e, t) {
                var n, i, o, r = h[e];
                r || (r = h[e] = {element: l(e), counter: 0});
                var a = r.counter++;
                return n = r.element, i = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0), i(t), function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        i(t = e)
                    } else o()
                }
            }

            function u(e, t, n, i) {
                var o = n ? "" : i.css;
                if (e.styleSheet) e.styleSheet.cssText = g(t, o); else {
                    var r = document.createTextNode(o), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
                }
            }

            var d = {}, h = {}, f = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            }, p = f(function () {
                return document.head || document.getElementsByTagName("head")[0]
            });
            n.exports = {style: i, clear: o};
            var g = function () {
                var e = [];
                return function (t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                }
            }()
        }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
    }, function (e, t, n) {
        var i, o;
        i = [n(82), n(1), n(14), n(44), n(23)], o = function (e, t, n, i, o) {
            var r = [], a = 0, s = function (t) {
                var n, i;
                return t ? "string" == typeof t ? (n = l(t), n || (i = document.getElementById(t))) : "number" == typeof t ? n = r[t] : t.nodeType && (i = t, n = l(i.id)) : n = r[0], n ? n : i ? c(new e(i, u)) : {registerPlugin: o.registerPlugin}
            }, l = function (e) {
                for (var t = 0; t < r.length; t++) if (r[t].id === e) return r[t];
                return null
            }, c = function (e) {
                return a++, e.uniqueId = a, r.push(e), e
            }, u = function (e) {
                for (var t = r.length; t--;) if (r[t].uniqueId === e.uniqueId) {
                    r.splice(t, 1);
                    break
                }
            }, d = {
                selectPlayer: s,
                registerProvider: n.registerProvider,
                availableProviders: i,
                registerPlugin: o.registerPlugin
            };
            return s.api = d, d
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2)], o = function (e, t) {
            function n(e) {
                var t = "baiducyberplayer." + e;
                return t.toString()
            }

            function i() {
                return e.reduce(this.persistItems, function (e, i) {
                    var o = u[n(i)];
                    return o && (e[i] = t.serialize(o)), e
                }, {})
            }

            function o(e, t) {
                try {
                    u[n(e)] = t
                } catch (i) {
                }
            }

            function r(e) {
                return u[n(e)]
            }

            function a(e) {
                return u.removeItem(n(e))
            }

            function s() {
                e.each(this.persistItems, function (e) {
                    u.removeItem(n(e))
                })
            }

            function l() {
                this.persistItems = ["volume", "mute", "captionLabel", "qualityLabel"]
            }

            function c(t) {
                e.each(this.persistItems, function (e) {
                    t.on("change:" + e, function (t, n) {
                        o(e, n)
                    })
                })
            }

            var u = {getItem: t.noop, setItem: t.noop, removeItem: t.noop};
            try {
                u = window.localStorage
            } catch (d) {
            }
            return e.extend(l.prototype, {getAllItems: i, track: c, clear: s, setItem: o, getItem: r, clearItem: a}), l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(42), n(101)], o = function (e, t, n) {
            var i = {sources: [], tracks: []}, o = function (o) {
                o = o || {}, e.isArray(o.tracks) || delete o.tracks;
                var r = e.extend({}, i, o);
                e.isObject(r.sources) && !e.isArray(r.sources) && (r.sources = [t(r.sources)]), e.isArray(r.sources) && 0 !== r.sources.length || (o.levels ? r.sources = o.levels : r.sources = [t(o)]);
                for (var a = 0; a < r.sources.length; a++) {
                    var s = r.sources[a];
                    if (s) {
                        var l = s["default"];
                        l ? s["default"] = "true" === l.toString() : s["default"] = !1, r.sources[a].label || (r.sources[a].label = a.toString()), r.sources[a] = t(r.sources[a])
                    }
                }
                return r.sources = e.compact(r.sources), e.isArray(r.tracks) || (r.tracks = []), e.isArray(r.captions) && (r.tracks = r.tracks.concat(r.captions), delete r.captions), r.tracks = e.compact(e.map(r.tracks, n)), r
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(13), n(99), n(2), n(4), n(3), n(1)], o = function (e, t, n, i, o, r) {
            var a = function () {
                function a(o) {
                    var a = n.tryCatch(function () {
                        var n, a = o.responseXML ? o.responseXML.childNodes : null, s = "";
                        if (a) {
                            for (var u = 0; u < a.length && (s = a[u], 8 === s.nodeType); u++) ;
                            "xml" === e.localName(s) && (s = s.nextSibling), "rss" === e.localName(s) && (n = {playlist: t.parse(s)})
                        }
                        if (!n) try {
                            var d = JSON.parse(o.responseText);
                            if (r.isArray(d)) n = {playlist: d}; else {
                                if (!r.isArray(d.playlist)) throw null;
                                n = d
                            }
                        } catch (h) {
                            return void l("Not a valid RSS/JSON feed")
                        }
                        c.trigger(i.JWPLAYER_PLAYLIST_LOADED, n)
                    });
                    a instanceof n.Error && l()
                }

                function s(e) {
                    l("Playlist load error: " + e)
                }

                function l(e) {
                    c.trigger(i.JWPLAYER_ERROR, {message: e ? e : "Error loading file"})
                }

                var c = r.extend(this, o);
                this.load = function (e) {
                    n.ajax(e, a, s)
                }, this.destroy = function () {
                    this.off()
                }
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(5), n(1)], o = function (e, t, n) {
            var i = {"default": !1}, o = function (o) {
                if (o && o.file) {
                    (e.isRtmp(o.file) || e.isFlv(o.file)) && e.isMobile() && o.fallbackfile && e.isHls(o.fallbackfile) && (o.file = o.fallbackfile);
                    var r = n.extend({}, i, o);
                    r.file = t.trim("" + r.file), r.file = decodeURI(r.file), r.file = r.file.replace("%3F", "?"), r.file = r.file.replace("%3D", "=");
                    var a = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if (e.isRtmp(r.file) ? r.type = "rtmp" : a.test(r.type) ? r.type = r.type.replace(a, "$1") : r.type || (r.type = t.extension(r.file)), r.type) {
                        switch (r.type) {
                            case"m3u8":
                            case"vnd.apple.mpegurl":
                                r.type = "hls";
                                break;
                            case"dash+xml":
                                r.type = "dash";
                                break;
                            case"smil":
                                r.type = "rtmp";
                                break;
                            case"m4a":
                                r.type = "aac"
                        }
                        return n.each(r, function (e, t) {
                            "" === e && delete r[t]
                        }), r
                    }
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(19), n(4), n(3), n(32), n(1)], o = function (e, t, n, i, o, r) {
            var a = {FLASH: 0, JAVASCRIPT: 1, HYBRID: 2}, s = function (s) {
                function l() {
                    switch (t.getPluginPathType(s)) {
                        case t.pluginPathType.ABSOLUTE:
                            return s;
                        case t.pluginPathType.RELATIVE:
                            return e.getAbsolutePath(s, window.location.href)
                    }
                }

                function c() {
                    r.defer(function () {
                        A = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                    })
                }

                function u() {
                    A = o.loaderstatus.ERROR, g.trigger(n.ERROR, {url: s})
                }

                var d, h, f, p, g = r.extend(this, i), A = o.loaderstatus.NEW;
                this.load = function () {
                    if (A === o.loaderstatus.NEW) {
                        if (s.lastIndexOf(".swf") > 0) return d = s, A = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        if (t.getPluginPathType(s) === t.pluginPathType.CDN) return A = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        A = o.loaderstatus.LOADING;
                        var e = new o(l());
                        e.on(n.COMPLETE, c), e.on(n.ERROR, u), e.load()
                    }
                }, this.registerPlugin = function (e, t, i, r) {
                    p && (clearTimeout(p), p = void 0), f = t, i && r ? (d = r, h = i) : "string" == typeof i ? d = i : "function" == typeof i ? h = i : i || r || (d = e), A = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                }, this.getStatus = function () {
                    return A
                }, this.getPluginName = function () {
                    return t.getPluginName(s)
                }, this.getFlashPath = function () {
                    if (d) switch (t.getPluginPathType(d)) {
                        case t.pluginPathType.ABSOLUTE:
                            return d;
                        case t.pluginPathType.RELATIVE:
                            return s.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(d, window.location.href) : e.getAbsolutePath(d, l())
                    }
                    return null
                }, this.getJS = function () {
                    return h
                }, this.getTarget = function () {
                    return f
                }, this.getPluginmode = function () {
                    return void 0 !== typeof d && void 0 !== typeof h ? a.HYBRID : void 0 !== typeof d ? a.FLASH : void 0 !== typeof h ? a.JAVASCRIPT : void 0
                }, this.getNewInstance = function (e, t, n) {
                    return new h(e, t, n)
                }, this.getURL = function () {
                    return s
                }
            };
            return s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1), n(113)], o = function (e, t, n) {
            function i(t) {
                if ("hls" === t.type) if (t.androidhls !== !1) {
                    var n = e.isAndroidNative;
                    if (n(2) || n(3) || n("4.0")) return !1;
                    if (e.isAndroid()) return !0
                } else if (e.isAndroid()) return !1;
                return null
            }

            var o = [{
                name: "html5", supports: function (t) {
                    var o = {
                        aac: "audio/mp4",
                        mp4: "video/mp4",
                        f4v: "video/mp4",
                        m4v: "video/mp4",
                        mov: "video/mp4",
                        mp3: "audio/mpeg",
                        mpeg: "audio/mpeg",
                        ogv: "video/ogg",
                        ogg: "video/ogg",
                        oga: "video/ogg",
                        vorbis: "video/ogg",
                        webm: "video/webm",
                        f4a: "video/aac",
                        m3u8: "application/vnd.apple.mpegurl",
                        m3u: "application/vnd.apple.mpegurl",
                        hls: "application/vnd.apple.mpegurl"
                    }, r = t.file, a = t.type, s = i(t);
                    if (null !== s) return s;
                    if (e.isRtmp(r, a)) return !1;
                    if (!o[a]) return !1;
                    if (e.isEdge() && e.isHls(r, a)) return !1;
                    if (e.isPoorIE()) return !1;
                    if (n.canPlayType) {
                        var l = n.canPlayType(o[a]);
                        return !!l
                    }
                    return !1
                }
            }, {
                name: "flash", supports: function (n) {
                    var i = {
                        flv: "video",
                        f4v: "video",
                        mov: "video",
                        m4a: "video",
                        m4v: "video",
                        mp4: "video",
                        aac: "video",
                        f4a: "video",
                        mp3: "sound",
                        mpeg: "sound",
                        smil: "rtmp",
                        m3u8: "hls",
                        hls: "hls"
                    }, o = t.keys(i);
                    if (!e.isFlashSupported()) return !1;
                    var r = n.file, a = n.type;
                    return !!e.isRtmp(r, a) || t.contains(o, a)
                }
            }];
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(31)], o = function (e, t) {
            function n(e) {
                e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
            }

            function i(t, i) {
                return function (o) {
                    var r = o.currentTarget || i.xhr;
                    if (clearTimeout(i.timeoutId), i.retryWithoutCredentials && i.xhr.withCredentials) {
                        n(r);
                        var a = e.extend({}, i, {xhr: null, withCredentials: !1, retryWithoutCredentials: !1});
                        return void d(a)
                    }
                    i.onerror(t, i.url, r)
                }
            }

            function o(e) {
                return function (t) {
                    var n = t.currentTarget || e.xhr;
                    if (4 === n.readyState) {
                        if (clearTimeout(e.timeoutId), n.status >= 400) {
                            var i;
                            return i = 404 === n.status ? "File not found" : "" + n.status + "(" + n.statusText + ")", e.onerror(i, e.url, n)
                        }
                        if (200 === n.status) return r(e)(t)
                    }
                }
            }

            function r(e) {
                return function (n) {
                    var i = n.currentTarget || e.xhr;
                    if (clearTimeout(e.timeoutId), e.responseType) {
                        if ("json" === e.responseType) return a(i, e)
                    } else {
                        var o, r = i.responseXML;
                        if (r) try {
                            o = r.firstChild
                        } catch (l) {
                        }
                        if (r && o) return s(i, r, e);
                        if (c && i.responseText && !r && (r = t.parseXML(i.responseText), r && r.firstChild)) return s(i, r, e);
                        if (e.requireValidXML) return void e.onerror("Invalid XML", e.url, i)
                    }
                    e.oncomplete(i)
                }
            }

            function a(t, n) {
                if (!t.response || e.isString(t.response) && '"' !== t.responseText.substr(1)) try {
                    t = e.extend({}, t, {response: JSON.parse(t.responseText)})
                } catch (i) {
                    return void n.onerror("Invalid JSON", n.url, t)
                }
                return n.oncomplete(t)
            }

            function s(t, n, i) {
                var o = n.documentElement;
                return i.requireValidXML && ("parsererror" === o.nodeName || o.getElementsByTagName("parsererror").length) ? void i.onerror("Invalid XML", i.url, t) : (t.responseXML || (t = e.extend({}, t, {responseXML: n})), i.oncomplete(t))
            }

            var l = function () {
            }, c = !1, u = function (e) {
                var t = document.createElement("a"), n = document.createElement("a");
                t.href = location.href;
                try {
                    return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (i) {
                }
                return !0
            }, d = function (t, a, s, d) {
                e.isObject(t) && (d = t, t = d.url);
                var h, f = e.extend({
                    xhr: null,
                    url: t,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: a || l,
                    onerror: s || l,
                    mimeType: d && !d.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: d && d.plainText ? "text" : ""
                }, d);
                if ("XDomainRequest" in window && u(t)) h = f.xhr = new window.XDomainRequest, h.onload = r(f), h.ontimeout = h.onprogress = l, c = !0; else {
                    if (!("XMLHttpRequest" in window)) return void f.onerror("", t);
                    h = f.xhr = new window.XMLHttpRequest, h.onreadystatechange = o(f)
                }
                var p = i("Error loading file", f);
                h.onerror = p, "overrideMimeType" in h ? f.mimeType && h.overrideMimeType(f.mimeType) : c = !0;
                try {
                    t = t.replace(/#.*$/, ""), h.open("GET", t, !0)
                } catch (g) {
                    return p(g), h
                }
                if (f.responseType) try {
                    h.responseType = f.responseType
                } catch (g) {
                }
                f.timeout && (f.timeoutId = setTimeout(function () {
                    n(h), f.onerror("Timeout", t, h)
                }, f.timeout), h.onabort = function () {
                    clearTimeout(f.timeoutId)
                });
                try {
                    f.withCredentials && "withCredentials" in h && (h.withCredentials = !0), h.send()
                } catch (g) {
                    p(g)
                }
                return h
            };
            return {ajax: d, crossdomain: u}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            function t(e) {
                return function () {
                    return i(e)
                }
            }

            var n = {}, i = e.memoize(function (e) {
                var t = navigator.userAgent.toLowerCase();
                return null !== t.match(e)
            }), o = n.isInt = function (e) {
                return parseFloat(e) % 1 === 0
            };
            n.isFlashSupported = function () {
                var e = n.flashVersion();
                return e && e >= 11.2
            }, n.isFF = t(/firefox/i), n.isIPod = t(/iP(hone|od)/i), n.isIPad = t(/iPad/i), n.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), n.isOSX = t(/Mac OS X/i), n.isEdge = t(/\sedge\/\d+/i);
            var r = n.isIETrident = function (e) {
                return !!n.isEdge() || (e ? (e = parseFloat(e).toFixed(1), i(new RegExp("trident/.+rv:\\s*" + e, "i"))) : i(/trident/i))
            }, a = n.isMSIE = function (e) {
                return e ? (e = parseFloat(e).toFixed(1), i(new RegExp("msie\\s*" + e, "i"))) : i(/msie/i)
            }, s = t(/chrome/i);
            n.isChrome = function () {
                return s() && !n.isEdge()
            }, n.isIE = function (e) {
                return e ? (e = parseFloat(e).toFixed(1), e >= 11 ? r(e) : a(e)) : a() || r()
            }, n.isSafari = function () {
                return i(/safari/i) && !i(/chrome/i) && !i(/chromium/i) && !i(/android/i)
            };
            var l = n.isIOS = function (e) {
                return i(e ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + e + "|.*\\sVersion/" + e + ")", "i") : /iP(hone|ad|od)/i)
            };
            n.isAndroidNative = function (e) {
                return c(e, !0)
            };
            var c = n.isAndroid = function (e, t) {
                return !(t && i(/chrome\/[123456789]/i) && !i(/chrome\/18/)) && (e ? (o(e) && !/\./.test(e) && (e = "" + e + "."), i(new RegExp("Android\\s*" + e, "i"))) : i(/Android/i))
            };
            return n.isMobile = function () {
                return l() || c()
            }, n.isIframe = function () {
                return window.frameElement && "IFRAME" === window.frameElement.nodeName
            }, n.flashVersion = function () {
                if (n.isAndroid()) return 0;
                var e, t = navigator.plugins;
                if (t && (e = t["Shockwave Flash"], e && e.description)) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
                if ("undefined" != typeof window.ActiveXObject) {
                    try {
                        if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
                    } catch (i) {
                        return 0
                    }
                    return e
                }
                return 0
            }, n.getBrowserInfo = function () {
                var e = window.navigator.userAgent.toLowerCase(), t = "";
                if (this.isIE()) t = e.match(/msie ([\d.]+)/) ? "IE-" + e.match(/msie ([\d.]+)/)[1] : "IE-unknown"; else if (this.isChrome()) {
                    var n = e.match(/chrome\/([\d.]+)/);
                    t = n && n.length > 1 ? "Chrome-" + n[1] : "Chrome-unknown"
                } else t = this.isFF() ? "Firefox-" + e.match(/firefox\/([\d.]+)/)[1] : this.isSafari() ? "Safari-" + e.match(/version\/([\d.]+)/)[1] : l() ? "ios" : c() ? "android" : "other";
                return t
            }, n.isPoorIE = function () {
                return this.isIE() && (a(8) || a(7) || a(6) || document.documentMode && document.documentMode <= 8)
            }, n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(3), n(1)], o = function (e, t) {
            function n() {
            }

            var i = function (e, n) {
                var i, o = this;
                i = e && t.has(e, "constructor") ? e.constructor : function () {
                    return o.apply(this, arguments)
                }, t.extend(i, o, n);
                var r = function () {
                    this.constructor = i
                };
                return r.prototype = o.prototype, i.prototype = new r, e && t.extend(i.prototype, e), i.__super__ = o.prototype, i
            };
            return n.extend = i, t.extend(n.prototype, e), n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            var t = {}, n = {
                TIT2: "title",
                TT2: "title",
                WXXX: "url",
                TPE1: "artist",
                TP1: "artist",
                TALB: "album",
                TAL: "album"
            };
            return t.utf8ArrayToStr = function (e, t) {
                var n, i, o, r, a, s;
                for (n = "", o = e.length, i = t || 0; i < o;) if (r = e[i++], 0 !== r && 3 !== r) switch (r >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        n += String.fromCharCode(r);
                        break;
                    case 12:
                    case 13:
                        a = e[i++], n += String.fromCharCode((31 & r) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e[i++], s = e[i++], n += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & s) << 0)
                }
                return n
            }, t.utf16BigEndianArrayToStr = function (e, t) {
                var n, i, o;
                for (n = "", o = e.length - 1, i = t || 0; i < o;) 254 === e[i] && 255 === e[i + 1] || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2;
                return n
            }, t.syncSafeInt = function (e) {
                var n = t.arrayToInt(e);
                return 127 & n | (32512 & n) >> 1 | (8323072 & n) >> 2 | (2130706432 & n) >> 3
            }, t.arrayToInt = function (e) {
                for (var t = "0x", n = 0; n < e.length; n++) t += e[n].toString(16);
                return parseInt(t)
            }, t.parseID3 = function (i) {
                return e.reduce(i, function (i, o) {
                    if (!("value" in o) && "data" in o && o.data instanceof ArrayBuffer) {
                        var r = o, a = new Uint8Array(r.data), s = a.length;
                        o = {value: {key: "", data: ""}};
                        for (var l = 10; l < 14 && l < a.length && 0 !== a[l];) o.value.key += String.fromCharCode(a[l]), l++;
                        var c = 19, u = a[c];
                        3 !== u && 0 !== u || (u = a[++c], s--);
                        var d = 0;
                        if (1 !== u && 2 !== u) for (var h = c + 1; h < s; h++) if (0 === a[h]) {
                            d = h - c;
                            break
                        }
                        if (d > 0) {
                            var f = t.utf8ArrayToStr(a.subarray(c, c += d), 0);
                            if ("PRIV" === o.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === f) {
                                    var p = 1 & t.syncSafeInt(a.subarray(c, c += 4)),
                                        g = t.syncSafeInt(a.subarray(c, c += 4));
                                    p && (g += 4294967296), o.value.data = g
                                } else o.value.data = t.utf8ArrayToStr(a, c + 1);
                                o.value.info = f
                            } else o.value.info = f, o.value.data = t.utf8ArrayToStr(a, c + 1)
                        } else {
                            var A = a[c];
                            1 === A || 2 === A ? o.value.data = t.utf16BigEndianArrayToStr(a, c + 1) : o.value.data = t.utf8ArrayToStr(a, c + 1)
                        }
                    }
                    if (n.hasOwnProperty(o.value.key) && (i[n[o.value.key]] = o.value.data), o.value.info) {
                        var m = i[o.value.key];
                        e.isObject(m) || (m = {}, i[o.value.key] = m), m[o.value.info] = o.value.data
                    } else i[o.value.key] = o.value.data;
                    return i
                }, {})
            }, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            var t = function () {
                var t = {}, n = {}, i = {}, o = {};
                return {
                    start: function (n) {
                        t[n] = e.now(), i[n] = i[n] + 1 || 1
                    }, end: function (i) {
                        if (t[i]) {
                            var o = e.now() - t[i];
                            n[i] = n[i] + o || o
                        }
                    }, dump: function () {
                        return {counts: i, sums: n, events: o}
                    }, tick: function (t, n) {
                        o[t] = n || e.now()
                    }, between: function (e, t) {
                        return o[t] && o[e] ? o[t] - o[e] : -1
                    }
                }
            };
            return t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        t = e.exports = n(51)(), t.push([e.id, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url(" + n(78) + ") format('woff'),url(" + n(79) + ') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before,.jw-watermark:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-prev:before{content:"\\E60F"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-playlist:before{content:"\\E616"}.jw-icon-barlogo:before{content:"\\E617"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-adv,.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer .jw-adv{background-size:100% 100%;cursor:pointer}.jwplayer .jw-adv .adv-countdown{position:absolute;width:95px;padding-left:10px;height:30px;line-height:30px;background-color:#202020;opacity:.7;color:#ee6002;font-size:14px;top:0;right:0;display:none}.jwplayer .jw-adv .adv-close{position:absolute;height:22px;line-height:22px;color:#fff;font-weight:700;font-size:14px;width:20px;top:0;right:5px;display:none;text-align:center}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2em}.jw-warning{color:red;top:30px;right:10px;position:absolute;z-index:10000;width:320px;display:none}.jw-warning a{color:#108cee}.jw-marquee{opacity:0;color:#fff;width:110px;font-size:16px;font-weight:700;position:absolute}@-webkit-keyframes marquee1{0%{left:100%}to{left:-110px}}@keyframes marquee1{0%{left:100%}to{left:-110px}}@-webkit-keyframes marquee2{0%{left:100%}to{left:-110px}}@keyframes marquee2{0%{left:100%}to{left:-110px}}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-adv,.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-adv,.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:100% 100%}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group{opacity:0}.jw-controlbar-textshow .jw-controlbar-center-group .jw-slider-time,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-duration,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-elapsed{display:none}.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-alt{display:inline}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-barlogo{font-size:18px;min-width:1.75em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{width:100%;height:.4em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:0}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:0}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:84.5%;line-height:1.3em}.jwplayer.jw-flag-compact-player video::-webkit-media-text-track-container{max-height:82%}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right,.jw-watermark{bottom:0;right:0}.jw-watermark{position:absolute;top:50%;left:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden,.jw-icon-tooltip.jw-open-drawer:before,.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;border:1px solid #000;margin:0}.jw-volume-value-tip{font-size:12px;position:absolute;top:-26px;right:20px;background-color:#000;line-height:20px;border-radius:3px;padding:0 3px;color:#fff}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:4px solid #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid #000;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:#fff;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container{z-index:10}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block;z-index:1}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-title .jw-title-primary a,body .jw-error .jw-title .jw-title-primary a{cursor:pointer;color:#699f00;pointer-events:auto}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:84.5%}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-vpaid .jw-controlbar{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-plugin,.jw-flag-touch .jw-skip{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline;content:"\\E615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-text-duration,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;height:auto;left:0;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jw-ie-poorie.jw-flag-media-audio .jw-preview{display:none}.jw-ie-poorie .jw-display-icon-container .jw-icon-display{background-image:url(\'../../../../cyberplayer.bcelive.com/resource/img/display_play.png\'/*tpa=http://cyberplayer.bcelive.com/resource/img/display_play.png*/);width:56px;height:56px}.jw-ie-poorie.jw-state-complete .jw-icon-display,.jw-ie-poorie.jw-state-idle .jw-icon-display,.jw-ie-poorie.jwplayer.jw-flag-audio-player .jw-media{visibility:visible}.jw-ie-poorie.jwplayer.jw-flag-audio-player .jw-media object{width:100%;height:100%}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:1px solid #333;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option,.jw-skin-seven .jw-playlist-container .jw-option:hover{background-color:#000}.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-button-color,.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color:hover,.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-duration,.jw-skin-seven .jw-text-elapsed{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-prev:before{padding-right:.25em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0 .45em}.jw-skin-seven .jw-controlbar .jw-icon-next:before{padding-left:.25em}.jw-skin-seven .jw-icon-next,.jw-skin-seven .jw-icon-prev{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display{color:#fff}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress,.jw-skin-seven .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress,.jw-skin-seven .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-seven .jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-skip,.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-volume-tip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1.75em}.jw-skin-seven .jw-skip .jw-icon-inline,.jw-skin-seven .jw-skip .jw-text{color:#fff;line-height:1.75em}.jw-skin-seven .jw-skip.jw-skippable:hover .jw-icon-inline,.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text{color:#ff0046}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon:before,.jw-skin-seven.jw-flag-touch .jw-text-duration,.jw-skin-seven.jw-flag-touch .jw-text-elapsed{padding:0 .35em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-prev:before{padding:0 .125em 0 .7em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-next:before{padding:0 .7em 0 .125em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-playlist:before{padding:0 .225em}', ""]);
    }, function (e, t) {
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                return '<div class="jw-adv jw-reset">\n    <div class="adv-countdown"></div>\n    <div class="adv-close">X</div>\n</div>'
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                return '<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            1: function (e, t, n, i, o) {
                var r, a, s = null != t ? t : {};
                return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (r = n["if"].call(s, null != t ? t.btnClass : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + '" button="' + e.escapeExpression((a = null != (a = n.id || (null != t ? t.id : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(s, {
                    name: "id",
                    hash: {},
                    data: o
                }) : a)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (r = n["if"].call(s, null != t ? t.img : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (r = n["if"].call(s, null != t ? t.tooltip : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "    </div>\n"
            }, 2: function (e, t, n, i, o) {
                var r;
                return " " + e.escapeExpression((r = null != (r = n.btnClass || (null != t ? t.btnClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "btnClass",
                    hash: {},
                    data: o
                }) : r))
            }, 4: function (e, t, n, i, o) {
                var r;
                return "style='background-image: url(\"" + e.escapeExpression((r = null != (r = n.img || (null != t ? t.img : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "img",
                    hash: {},
                    data: o
                }) : r)) + "\")'"
            }, 6: function (e, t, n, i, o) {
                var r;
                return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + e.escapeExpression((r = null != (r = n.tooltip || (null != t ? t.tooltip : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "tooltip",
                    hash: {},
                    data: o
                }) : r)) + "</span>\n        </div>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<div class="jw-dock jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "</div>"
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r, a, s = null != t ? t : {}, l = n.helperMissing, c = "function", u = e.escapeExpression;
                return '<div id="' + u((a = null != (a = n.id || (null != t ? t.id : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "id",
                    hash: {},
                    data: o
                }) : a)) + '"class="jw-skin-' + u((a = null != (a = n.skin || (null != t ? t.skin : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "skin",
                    hash: {},
                    data: o
                }) : a)) + ' jw-error jw-reset">\r\n    <div class="jw-title jw-reset">\r\n        <div class="jw-title-primary jw-reset">' + (null != (a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, r = typeof a === c ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a) ? r : "") + '</div>\r\n        <div class="jw-title-secondary jw-reset">' + u((a = null != (a = n.body || (null != t ? t.body : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "body",
                    hash: {},
                    data: o
                }) : a)) + '</div>\r\n    </div>\r\n\r\n    <div class="jw-icon-container jw-reset">\r\n        <div class="jw-display-icon-container jw-background-color jw-reset">\r\n            <div class="jw-icon jw-icon-display jw-reset"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            1: function (e, t, n, i, o) {
                var r;
                return 'src="' + e.escapeExpression((r = null != (r = n.file || (null != t ? t.file : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "file",
                    hash: {},
                    data: o
                }) : r)) + '"'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ' + (null != (r = n["if"].call(null != t ? t : {}, null != t ? t.file : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + ">\n</div>"
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            1: function (e, t, n, i, o) {
                var r, a = e.escapeExpression;
                return "        <li class='jw-text jw-option jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "index",
                    hash: {},
                    data: o
                }) : r)) + " jw-reset'>" + a(e.lambda(null != t ? t.label : t, t)) + "</li>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "</ul>"
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<div id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "id",
                    hash: {},
                    data: o
                }) : r)) + '" class="jwplayer jw-reset" tabindex="0">\r\n    <div class="jw-aspect jw-reset"></div>\r\n    <div class="jw-media jw-reset"></div>\r\n    <div class="jw-preview jw-reset"></div>\r\n    <div class="jw-title jw-reset">\r\n        <div class="jw-title-primary jw-reset"></div>\r\n        <div class="jw-title-secondary jw-reset"></div>\r\n    </div>\r\n    <div class="jw-overlays jw-reset"></div>\r\n    <div class="jw-controls jw-reset"></div>\r\n    <div class="jw-warning jw-reset">\r\n        用户鉴权失败，请先<a target="_blank" href="http://bce.baidu.com/">注册</a>成为百度云用户\r\n    </div>\r\n    <div class="jw-marquee">百度云</div>\r\n</div>'
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            1: function (e, t, n, i, o) {
                var r;
                return null != (r = n["if"].call(null != t ? t : {}, null != t ? t.active : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.program(4, o, 0),
                    data: o
                })) ? r : ""
            }, 2: function (e, t, n, i, o) {
                var r, a = e.escapeExpression;
                return "                <li class='jw-option jw-text jw-active-option jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "index",
                    hash: {},
                    data: o
                }) : r)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">' + a(e.lambda(null != t ? t.title : t, t)) + "</span>\n                </li>\n"
            }, 4: function (e, t, n, i, o) {
                var r, a = e.escapeExpression, s = e.lambda;
                return "                <li class='jw-option jw-text jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                    name: "index",
                    hash: {},
                    data: o
                }) : r)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset">' + a(s(null != t ? t.label : t, t)) + '</span>\n                    <span class="jw-name jw-reset">' + a(s(null != t ? t.title : t, t)) + "</span>\n                </li>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "    </ul>\n</div>"
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            1: function (e, t, n, i, o) {
                var r, a, s = null != t ? t : {}, l = n.helperMissing, c = "function", u = e.escapeExpression;
                return '        <li class="jw-reset' + (null != (r = n["if"].call(s, null != t ? t.featured : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + '">\r\n            <a href="' + u((a = null != (a = n.link || (null != t ? t.link : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "link",
                    hash: {},
                    data: o
                }) : a)) + '" class="jw-reset" target="_blank">\r\n' + (null != (r = n["if"].call(s, null != t ? t.showLogo : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "                " + u((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + "\r\n            </a>\r\n        </li>\r\n"
            }, 2: function (e, t, n, i, o) {
                return " jw-featured"
            }, 4: function (e, t, n, i, o) {
                return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\r\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r;
                return '<div class="jw-rightclick jw-reset">\r\n    <ul class="jw-reset">\r\n' + (null != (r = n.each.call(null != t ? t : {}, null != t ? t.items : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? r : "") + "    </ul>\r\n</div>"
            }, useData: !0
        })
    }, function (e, t, n) {
        var i = n(9);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, i, o) {
                var r, a = null != t ? t : {}, s = n.helperMissing, l = "function", c = e.escapeExpression;
                return '<div class="' + c((r = null != (r = n.className || (null != t ? t.className : t)) ? r : s, typeof r === l ? r.call(a, {
                    name: "className",
                    hash: {},
                    data: o
                }) : r)) + " " + c((r = null != (r = n.orientation || (null != t ? t.orientation : t)) ? r : s, typeof r === l ? r.call(a, {
                    name: "orientation",
                    hash: {},
                    data: o
                }) : r)) + ' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
            }, useData: !0
        })
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r() {
            var e = new s.HandlebarsEnvironment;
            return f.extend(e, s), e.SafeString = c["default"], e.Exception = d["default"], e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = g, e.template = function (t) {
                return g.template(t, e)
            }, e
        }

        t.__esModule = !0;
        var a = n(35), s = o(a), l = n(76), c = i(l), u = n(12), d = i(u), h = n(10), f = o(h), p = n(75), g = o(p),
            A = n(74), m = i(A), w = r();
        w.create = r, m["default"](w), w["default"] = w, t["default"] = w, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            a["default"](e)
        }

        t.__esModule = !0, t.registerDefaultDecorators = o;
        var r = n(64), a = i(r)
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(10);
        t["default"] = function (e) {
            e.registerDecorator("inline", function (e, t, n, o) {
                var r = e;
                return t.partials || (t.partials = {}, r = function (o, r) {
                    var a = n.partials;
                    n.partials = i.extend({}, a, t.partials);
                    var s = e(o, r);
                    return n.partials = a, s
                }), t.partials[o.args[0]] = o.fn, r
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            a["default"](e), l["default"](e), u["default"](e), h["default"](e), p["default"](e), A["default"](e), w["default"](e)
        }

        t.__esModule = !0, t.registerDefaultHelpers = o;
        var r = n(66), a = i(r), s = n(67), l = i(s), c = n(68), u = i(c), d = n(69), h = i(d), f = n(70), p = i(f),
            g = n(71), A = i(g), m = n(72), w = i(m)
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(10);
        t["default"] = function (e) {
            e.registerHelper("blockHelperMissing", function (t, n) {
                var o = n.inverse, r = n.fn;
                if (t === !0) return r(this);
                if (t === !1 || null == t) return o(this);
                if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
                if (n.data && n.ids) {
                    var a = i.createFrame(n.data);
                    a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {data: a}
                }
                return r(t, n)
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.__esModule = !0;
        var o = n(10), r = n(12), a = i(r);
        t["default"] = function (e) {
            e.registerHelper("each", function (e, t) {
                function n(t, n, r) {
                    c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!r, u && (c.contextPath = u + t)), l += i(e[t], {
                        data: c,
                        blockParams: o.blockParams([e[t], t], [u + t, null])
                    })
                }

                if (!t) throw new a["default"]("Must pass iterator to #each");
                var i = t.fn, r = t.inverse, s = 0, l = "", c = void 0, u = void 0;
                if (t.data && t.ids && (u = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."), o.isFunction(e) && (e = e.call(this)), t.data && (c = o.createFrame(t.data)), e && "object" == typeof e) if (o.isArray(e)) for (var d = e.length; s < d; s++) s in e && n(s, s, s === e.length - 1); else {
                    var h = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (void 0 !== h && n(h, s - 1), h = f, s++);
                    void 0 !== h && n(h, s - 1, !0)
                }
                return 0 === s && (l = r(this)), l
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.__esModule = !0;
        var o = n(12), r = i(o);
        t["default"] = function (e) {
            e.registerHelper("helperMissing", function () {
                if (1 !== arguments.length) throw new r["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(10);
        t["default"] = function (e) {
            e.registerHelper("if", function (e, t) {
                return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }), e.registerHelper("unless", function (t, n) {
                return e.helpers["if"].call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
            })
        }, e.exports = t["default"]
    }, function (e, t) {
        "use strict";
        t.__esModule = !0, t["default"] = function (e) {
            e.registerHelper("log", function () {
                for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
                var o = 1;
                null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
            })
        }, e.exports = t["default"]
    }, function (e, t) {
        "use strict";
        t.__esModule = !0, t["default"] = function (e) {
            e.registerHelper("lookup", function (e, t) {
                return e && e[t]
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(10);
        t["default"] = function (e) {
            e.registerHelper("with", function (e, t) {
                i.isFunction(e) && (e = e.call(this));
                var n = t.fn;
                if (i.isEmpty(e)) return t.inverse(this);
                var o = t.data;
                return t.data && t.ids && (o = i.createFrame(t.data), o.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                    data: o,
                    blockParams: i.blockParams([e], [o && o.contextPath])
                })
            })
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(10), o = {
            methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (e) {
                if ("string" == typeof e) {
                    var t = i.indexOf(o.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            }, log: function (e) {
                if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                    var t = o.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    console[t].apply(console, i)
                }
            }
        };
        t["default"] = o, e.exports = t["default"]
    }, function (e, t) {
        (function (n) {
            "use strict";
            t.__esModule = !0, t["default"] = function (e) {
                var t = "undefined" != typeof n ? n : window, i = t.Handlebars;
                e.noConflict = function () {
                    return t.Handlebars === e && (t.Handlebars = i), e
                }
            }, e.exports = t["default"]
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function r(e) {
            var t = e && e[0] || 1, n = m.COMPILER_REVISION;
            if (t !== n) {
                if (t < n) {
                    var i = m.REVISION_CHANGES[n], o = m.REVISION_CHANGES[t];
                    throw new A["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
                }
                throw new A["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function a(e, t) {
            function n(n, i, o) {
                o.hash && (i = p.extend({}, i, o.hash), o.ids && (o.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, o);
                var r = t.VM.invokePartial.call(this, n, i, o);
                if (null == r && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), r = o.partials[o.name](i, o)), null != r) {
                    if (o.indent) {
                        for (var a = r.split("\n"), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
                        r = a.join("\n")
                    }
                    return r
                }
                throw new A["default"]("The partial " + o.name + " could not be compiled when running in runtime-only mode")
            }

            function i(t) {
                function n(t) {
                    return "" + e.main(o, t, o.helpers, o.partials, a, l, s)
                }

                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = r.data;
                i._setup(r), !r.partial && e.useData && (a = d(t, a));
                var s = void 0, l = e.useBlockParams ? [] : void 0;
                return e.useDepths && (s = r.depths ? t !== r.depths[0] ? [t].concat(r.depths) : r.depths : [t]), (n = h(e.main, n, o, r.depths || [], a, l))(t, r)
            }

            if (!t) throw new A["default"]("No environment passed to template");
            if (!e || !e.main) throw new A["default"]("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
            var o = {
                strict: function (e, t) {
                    if (!(t in e)) throw new A["default"]('"' + t + '" not defined in ' + e);
                    return e[t]
                }, lookup: function (e, t) {
                    for (var n = e.length, i = 0; i < n; i++) if (e[i] && null != e[i][t]) return e[i][t]
                }, lambda: function (e, t) {
                    return "function" == typeof e ? e.call(t) : e
                }, escapeExpression: p.escapeExpression, invokePartial: n, fn: function (t) {
                    var n = e[t];
                    return n.decorator = e[t + "_d"], n
                }, programs: [], program: function (e, t, n, i, o) {
                    var r = this.programs[e], a = this.fn(e);
                    return t || o || i || n ? r = s(this, e, a, t, n, i, o) : r || (r = this.programs[e] = s(this, e, a)), r
                }, data: function (e, t) {
                    for (; e && t--;) e = e._parent;
                    return e
                }, merge: function (e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = p.extend({}, t, e)), n
                }, noop: t.VM.noop, compilerInfo: e.compiler
            };
            return i.isTop = !0, i._setup = function (n) {
                n.partial ? (o.helpers = n.helpers, o.partials = n.partials, o.decorators = n.decorators) : (o.helpers = o.merge(n.helpers, t.helpers), e.usePartial && (o.partials = o.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (o.decorators = o.merge(n.decorators, t.decorators)))
            }, i._child = function (t, n, i, r) {
                if (e.useBlockParams && !i) throw new A["default"]("must pass block params");
                if (e.useDepths && !r) throw new A["default"]("must pass parent depths");
                return s(o, t, e[t], n, 0, i, r)
            }, i
        }

        function s(e, t, n, i, o, r, a) {
            function s(t) {
                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], s = a;
                return a && t !== a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || i, r && [o.blockParams].concat(r), s)
            }

            return s = h(n, s, e, a, i, r), s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
        }

        function l(e, t, n) {
            return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
        }

        function c(e, t, n) {
            n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var i = void 0;
            if (n.fn && n.fn !== u && (n.data = m.createFrame(n.data), i = n.data["partial-block"] = n.fn, i.partials && (n.partials = p.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new A["default"]("The partial " + n.name + " could not be found");
            if (e instanceof Function) return e(t, n)
        }

        function u() {
            return ""
        }

        function d(e, t) {
            return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
        }

        function h(e, t, n, i, o, r) {
            if (e.decorator) {
                var a = {};
                t = e.decorator(t, a, n, i && i[0], o, r, i), p.extend(t, a)
            }
            return t
        }

        t.__esModule = !0, t.checkRevision = r, t.template = a, t.wrapProgram = s, t.resolvePartial = l, t.invokePartial = c, t.noop = u;
        var f = n(10), p = o(f), g = n(12), A = i(g), m = n(35)
    }, function (e, t) {
        "use strict";

        function n(e) {
            this.string = e
        }

        t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function () {
            return "" + this.string
        }, t["default"] = n, e.exports = t["default"]
    }, function (e, t, n) {
        var i = n(50);
        "string" == typeof i && (i = [["all-players", i, ""]]), n(37).style(i, "all-players"), i.locals && (e.exports = i.locals)
    }, function (e, t) {
        e.exports = "data:application/font-woff;base64,d09GRgABAAAAAA/sAAwAAAAAGggAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABHAAAABwAAAAcdmhnFk9TLzIAAAE4AAAAPAAAAGAPEwN/Y21hcAAAAXQAAABVAAABXhpX0/dnYXNwAAABzAAAAAgAAAAIAAAAEGdseWYAAAHUAAALqQAAEyhNhURMaGVhZAAADYAAAAAzAAAANgm9wORoaGVhAAANtAAAACAAAAAkCUEFmWhtdHgAAA3UAAAASgAAAHR2CwbXbG9jYQAADiAAAAA8AAAAPDmAPzJtYXhwAAAOXAAAABgAAAAgACYBc25hbWUAAA50AAAA7wAAAdeoyha4cG9zdAAAD2QAAACFAAABK0ItYZUAAAABAAAAANIEFAUAAAAA0dQiKwAAAADSkDDleJxjYGapZZzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFGDAA4zNx5gP/DzA4MAMxiI8kp8DACABCKAqbeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCs/E///9/x+sSuEZA4T9/4kUK1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAOwsNMwAAAAABAAH//wAPeJy1V2uMW8UVnsedO/f92Huv7X3Ze22vnfVuvA+vbZLsOk42rwaFQBLYzQbQEqI8gKpbUNU2CsVVfoBEIoIigooUKRKVeIiIiKhIjSrqlhaplVL1T4XUX4gfSLRFQmoLUtl1euZ6vdkE+vgBV3PncWbmzJk535xzBmHU+QhCGwj6X20JLSDELtEG2og2o23oWwgNBukiKU9WqkVcnqyR0kSSBL7MkzjwLZJxJ2LxGnQUSSZtQYdoldxxHITlML6a4Xpx33RGg2/HyZcfeODlkztEPTO9r1jYncRk49Fn9ux55uhGTJK7C+Reoi//8wL+XuvZ3Xi49adkUozrLgapmbSYKTikZ1IBkIAnbvZ3m72WmC24WL1md3/rQXr4hRc+iBLsDKM6QrQJewoR8vwkbKFGyiUhfbQz2FMgZB9/tiPHnR0pRRkJ1uws0KGK8k5BQHBmwF8S/C3UhwpoHM6siPOhG7pQQB7yTJHmy0kaHx/GN2vlJI6Pk6cok4ixtEMf1qWp5V/un1e2PXpm7+E3Tu9XfnaI5zfuLkw/uq+svP3j0R3GVn2dRn7V+phqBO9a+vXWu54+vlWZU+5uvLIwtGtDjs/xyXuOTT2pbysKjbI1cnWjPCqjqS9JhsuQgUjj+L+I2CAyI+ZS3ShoUn252WrQemsgsf3gYzW8fl7ZLsS9fHqfenWe5zftLkw9sq+iXmuMbTPqxjqDNFufEIXiHUtN/MdPl5vTxw5siS9/uueZ41v5PEj+Kkh+Rw6q5XuObXrSmCmunCcTcktIRcfQbxEqRbIKuVkNVwFhgDoQrZ0ysJdOyqRlbuF2EmDsDCpNVGBatdTpg5RJ51anCXhD93j4jXKvs8a/GqzyhS/9bSljhZ4/kugKHbvPNHxF0ckhzJikwQqK4qhOj653ca7R6NM479L1HicWGoZN54nKFc80+lwn6ydGfC+0zIBHX2Dia2boeyPdbug4fYYRKIpG5gmTJF2WgbOrOL1f5tzrBGnDsOghoircN4x+x8163SOeH5qWz7micO5btLHUoOXlGPnL+05CUVXGmK1pCRt2olqcG4wplBJZll2gmmafZfaYZlzTXCCZppWO+VnX6YPFoa0qaty2s74/Ek+sD/ys/fVzRHQVRw76DvoDQkM4nSu7k5VSOBELXF/O4Ejdt2u89P9rvJ0yX6nxDTj8ZtmzkS9enZ6dnZbmRL70EuhSjnSpOopiyVyTJBnPE01RfMCKY4ddt2NFYHC42886Tr8BGOQqmae2YaSDCCPAgUqUSvjnqygB+HBblnVJYviQ4BwYwNkJ3dux0sagB+oRnLmikkPUMswwuAV9szVyX212trb8em0W/8NMaLoDmiSUKowZnFsqSGsnNM2SGVNVJeGAfoP1ifiID/q146ByGA6C9QFc/VjaMs02VuKm2WOBK/j6OaLIn3yALtEB8gHyobHWjQjXSAfW33ViaurEXes7JW6ubYkSRdh0pDo9BzUHpRCqqjgcnKiUJ3OACYBCyWvXXKgC2a0T8NBL8FtBYIk/0y6swBH3cjHm2ImY68TwR6JsvS9yPATjO76PI1vY0Xg1zuPClOZ5vpqvN66cvdJoPYH/js9G1ZWCAi2qrPqRVXscQyW0d61FxqVyyc2UM0HGLQWDHQSLEKGD7GHsloQj4e5aXMNWVwE9jNfaxgNvLyy8feQIud9PWjZASpU59wwj9LyR3itXYgXv0k41rmpdCjfBYkiUmFH/gFuNTFRlOU4+bjUvt+rNJm5evghwtNOxYKw3UfRiadtKaCrHTcL5TOuj9uS4YO72R122xJjwQdOrtqMfbUIHv8p6wJbLsOlyKSi57OZWbt0lEDesOYc1lmDliOAiF754rTY3V5NmRb58deHqkSNXF/AVkMtKeV4+duVK74jnJW3D41wmivp9pUtTfWNn1UsagqZLFKRmJp+rkQMRjzdqc+Ti5ZUjeBKALM5RbtVVroJ5HfRiI4n+sdiHikngfqekjt1NuV7KNuIcMD5z4wa9RH+EnhMxU7qcH8vlI4UJS9WHg2gH7S2OVyaCMZ93zNea3dOoqx0WQl9sjVGr0epUBIEcHAIdl9PlsSnSaeMOKUJIRBkPzsmSIimEWRpXaYzz0HZsziugf8qZrmpxg5mM69zwFDXVFzAGxkthPHDdrCtoXczqNuSJO0YllRsxiU7vmpLYaNZNw63R5PRgH0CJ0MS6fE7jI/ga2IuEzTQuiAARnfuPWq7JlQHbO69pF8e8suAqumGQnbH8ma3jmrb/iR8MehkXvBnHGg80d9DJ78l5b/7uDZvJhJtUAgvzwuXnVLV84Oh4eROH2Vqfoy88cq+mnYyl9jK6M+Wdo+2IfAcAsRLdOwWh0IVrphKXvre4CChvdP5WvVWnjWg85LSxck9RuHpDSQOjG6iFRH5zHjQbAuhQg+VU7GIJCTpuCn6tOvDbDf0bO+vD6m4J1r+2uNhmcNvyAjNogM7QS2gIGivvg45pLJu4HD0QVsJv0HSVmj19UyfO7N175vj09PEze3G9dYupjHn7ycPDD5c7/aJsXL7aWGtKh+5Mja3E+EfJAPWQDHh1S4PuYKZ+HXutT67jEvauL++/vhKnnwNh42gY3jdb4IzyNSreLvlqkgpx+fgoblsmQbAoH893mtF1zbM2a/rnQq42HI8P13KFwsxYd/fYTOGnQxu2bdswFE5mfexnS+G76XXr0oXc2FiusHy9LUpm3YMnHp+a+u6JB4cyw0cfP7Vly6nHjw6fzpSfP3Dg+XImuevuudHRg/fs7L8a2zU0vCPI9N0/WT6YGqIrO0Ar9vzdjj3H8TCy6FgYc7DptLDYem3xxR/+pJW7cPLCIp79NnkC8sULJ8+3MoLSev0x4Xuwx5pkARnwLsgJHyZDdAFBBVinIPyPDXz28PbtDz20ffthEhO5aJH+Tg1fa5ed9s2yjY2tiNB3wJ4MCKljPpfToxiyfG5yM1zxyWplIoUhgy4bk5c/z2azD/d/9hlk2eznt7Zw8yvJKy0ECNiGJPoLeiq6BxbyUAJsOMIhvETd1QyXwHq7qxl+hQTLf+38rYtvRR89dfBg62L7J++99Zagix8pN94BvL1EXwSs342eQm/iAp7CB/EiQl0WTluSn1RqWlFN57ybJk+kfJFMloudd4Lsr5hGlou1TZ0ICsHgpXOi24+tuFDii8HRSMEmbDPJF3BerqwMgKITYLbXqsC1m4QyK6fltAVOEADsJ7WJGptIUohUJmr2ZNFMF4N0jkbchWWXJ6I18nHefveM4ratboexNbwZl6IlNuMU5hkQOpcWA8vV0u9lVU6YBifgUj0wzKyXmZ7EPCwRiUBijDCiJLjyoUOxrDGOGabYNAmmRN+Qknp7mSbhLk+y5NaHGgSc/ZZKFcrgraMBDz3GMJEwIZjQKNmO2qWNQ9BJBmV4IwxYVOlbH4fATgW2WMNYwkxxeyvc4Mwgokmo3DptKzpjIviD15DBeE414MXDZFeVZOYoDHPwowT4ad0GNYL7NN6vxoyapQWKynrUrV3cZqrBVPCYEFFikYgsOSqTNU1l1M4zTYYO6OeGLFETuCqyapzhsGGQXYTTVLWquE6e1hOqpCuY6C44b3ghC/loV7ZL2niAEl7FdBMm51RNh12Dy6Mb6YtY7nK6E4lEStHStjhOgg1GkyC4PNYvW6bMJA5urtWSKYajk5kKTL1qgsCGSf+oSvwBPW7ogZ4YsuFgIXj03QGdw9IUtAZHFOgghHBo4Dsh5lKknkqg6pyovaO9BGbYA4xxCu8CAwYDy/WD8CDQXXhoSNSSRChB4aEZ1uCEsThKzZK6JHNEBt+nY3DcRFZsl3HVVa1e21E0y+0Fp6sKVRGGoznABaoGVmQu+Ra3jTHNlBWTBUzmwr/bQ6AvC45cprbKKZfFTElqfUYpHKIG65vcsmV8+DzoUGdurKL2OHAUhABo4KN45/sAvfOU/AZIMlZt4yWK/g03uOZMAAAAeJxjYGRgYGCUnHXwnbtMPL/NVwZuFgYQuDTBMBxG/9/3/z/rAeYFQC4HAxNIFABwNw13AHicY2BkYGA+8P8AAwMbw/99/3ezHmAAiqAAWQCpMgbkeJxjYYAAxlAIzQTEbAwMCSwMDA6sUMwGxUCxBywNYBomZsv8gMEZKOYGFGsA4wYGL+YGoNgBoLoDCLVA2gmIXZhC/+8DAFPRDlIAAAAAAAAACAAIABAAGACCALIA/gFaAn4DqgPMBAAEIgScBRwF3gX2Bg4GHgY2BnQGhgboBwoHRAd6B6wJlHicY2BkYGCQZSxk4GAAASYGNAAAD0sAm3icjY0xasNAEEWfbNkhTnAZgit1qSQQBFKmC7hwk8KQUpY3QsbsgiRju8sFcoy0gZwjF8hx8iXmAF6Y3Td/5/8B5nwT0Z+IWxbGI654Mh5LfzOOxR/GE274Mp5K/zWesYjmckXxtZT7IaHnkXY9GI+lPxvH4nfjCXd8Gk+l/xjPeOSPHUdSWmpOemtKAl49u2Pa1qe0LoNX94qj4sCegkatqw77QnCh/cKxtbY0w1j/nZCTqVi7pq2DT/IsvzjqZZA7hVQK9UNwod6xlbbhrHs5mFeqfjaTKfguqZx3TdG5bbI5J8syrELwGf8xT00GAHicfc3JDgFRGEThe27TbZ5n8Q73b3SzNLRXQSJiY+HtJZSt2nyp1XHe/d/CObzzRC6iRJmYhApVatRp0KRFmw5devQZMGTEmAlTZszj8+31uFjyvF9DCB+LLAT5+6lcypVcy0zmciO3cif38iCPspCnr6a+qW/qm/qmvqlv6lv+Bgm8Oz0AAAA="
    }, function (e, t) {
        e.exports = "data:application/octet-stream;base64,AAEAAAAMAIAAAwBARkZUTXZoZxYAABnsAAAAHE9TLzIPEwN/AAABSAAAAGBjbWFwGlfT9wAAAhwAAAFeZ2FzcAAAABAAABnkAAAACGdseWZNhURMAAADuAAAEyhoZWFkCb3BbgAAAMwAAAA2aGhlYQlBBZkAAAEEAAAAJGhtdHh2CwbXAAABqAAAAHRsb2NhOYA/MgAAA3wAAAA8bWF4cAAmAXMAAAEoAAAAIG5hbWWoyha4AAAW4AAAAddwb3N0Qi1hlQAAGLgAAAErAAEAAAABGZrB7kYIXw889QALBAAAAAAA0pAxnAAAAADSkDGc/77//wXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgD/vv+7BcAAAQAAAAAAAAAAAAAAAAAAAB0AAQAAAB0BcQAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAADBH0BkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAeYXA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAQQAAAAAAAAAAVUAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAQgQAAEQCVf++AAAAAwAAAAMAAAAcAAEAAAAAAFgAAwABAAAAHAAEADwAAAAKAAgAAgACAAEAIOYX//3//wAAAAAAIOYA//3//wAA/+QaBQADAAEACgAAAAAAAAAAAAEAAwAAAQYAAAEDAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIABAAGACCALIA/gFaAn4DqgPMBAAEIgScBRwF3gX2Bg4GHgY2BnQGhgboBwoHRAd6B6wJlAABAAAAAAAAAAAAAgAAOQIAAQAAAAAAAAAAAAIAADkCAAEAAAAAAAAAAAACAAA5AgAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAAzESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgOA/IADNf0WAurXEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDxAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8AAwBAAAAFwAOAABAAbwDOAAApASImNRE0NjMhMhYVERQGIwE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBIT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEFLPuoPVdXPQRYPVdXPfyaAwoHBhILCxsQCRAICA4GBwoEBAYBWgIKCAgUDQwcEA8hEhgsFBMhDg0VBwcHBwcHFQ0OIRMUKxkUJBAQHQwMFAgHCQJaAw8MDCIVEBsLCxIGBwoDBAMDBAG5AwoHBxILCxsQCBEIBw8GBgsEBAUBWwIKCAgVDAwcEBAhERksExQhDQ4UBwcICAcHFA4NIRQTLBkTJBEQHQwMFAcICQJbAw4MDSEVEBsLCxIHBwoDAwMDA1c+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAAAAQDgAKADIALgABQAAAEUDgIjIi4CNTQ+AjMyHgIVAyAtTmk8PGlOLS1OaTw8aU4tAcA8aU4tLU5pPDxpTi0tTmk8AAADAEAAEARAA5AAAwAQAB8AADcJASElMjY1NCYjIgYVFBYzEzQmIyIGFREUFjMyNjURQAIAAgD8AAIADhUVDg4VFQ4jFQ4OFRUODhUQA4D8gHAWEA8YFhEQFgHmDxgWEf7XDxgWEQEpAAIAQAAAA8ADgAAHAA8AADMRFzcXBxchASERJwcnNydAgLCNsID+cwHzAY2AsI2wgAGNgLCNsIADgP5zgLCNsIAAAAAABQBAAAAFwAOAAAQACQAWADMATwAAMxEhESEBIREhEQEzNTMRIzUjFSMRMxUlHgEXHgEXHgEVFAYHDgEHDgEHDgErAREzHgEXMQcRMzI2Nz4BNz4BNz4BNTQmJy4BJy4BJy4BKwFABYD6gAU2+xQE7PxUtmBgtmRkAlwUHg4PFAcHCQYHBxMMDCETEywbsLAWKhOgRwkXCQoSCAcNBQUFBAMCDQcHEwwMIBE3A4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUAAAQAPQAABcADgAAQAB0AOwBZAAApASImNRE0NjMhMhYVERQGIwEjFSM1IxEzNTMVMxEFLgEnLgEnLgErAREzMjY3PgE3PgE3PgE1LgEnOQEHDgEHDgErAREzMhYXHgEXHgEXHgEVFAYHDgEHOQEFKvupPlhYPgRXPlhYPv2zYLNkZLNgAbAHFwwOHxMTJxawsBssExMeDwwTBwcGAggJdwgSCgkUDEc3Ex4MDBMHBwsEAwQFBQUNB1g+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwABAEP//wOgA34AjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAIREzESMJAhEDxnBw/IADgPyAA4D8gAOA/kD+QAOAAAAAAgCAAAADgAOAAAQACQAAIREhESEBIREhEQKAAQD/AP4AAQD/AAOA/IADgPyAA4AAAQCAAAAEAAOAAAMAAAkBEQEEAPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAAzESMRMwkCEbpwcAOA/IADgAOA/IADgP5A/kADgAAAAAABAEMAIANDA6AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCYytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACEnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzSMoXmlyPDxxaV4pIytmcnxBQXxyZiuDIzWRVFSRNSMeSFBYLy9ZUUcdsxZIKStGFSMcXDQ1WR8pAwETzf1TzQAAAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAEIAAgO+A34AIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIACP++AGYCmgOXACkAUAB/AK8BKgE8AVkBcAAAEg4BIg4EFB4IPgouCSImEz4BNz4BNz4BNz4BNz4BJy4CNDUuAQcOAQcOAQcGFBUUFhceARcFJhYnLgEnJgYnLgEjJgYHIiYHDgEHFBYOAQcOAQcOAhQOAQcGFhceARc3PgE3IS4CNDUuAScqAScGNgcOAQcOAhQHDgEXHgEXHgEXMz4BNz4BNzY0PgI0PgE3JAYiBiIOBxQOFRQGFB4KMj4FMh4DMh4CMj4PNC4NIi4VIiYDDgEHBhYHDgEVBjIXHgEXNycXByMuAScuAS8BPgE3PgM3PgE3PgEzPgE/ATMXHgEXMz8BHwEHIyYWJyYiIy4BJzU3M8oGCQYYDQwHAgQDAhMPBwcFGwUNEwQFEwEEAgQCAgQCBQUCBQIIGAcI4hADAQYKBQcBBQEDAQ0NAgEDAgs5HwQbGwUKBAESEwQOBv7iCgoHBx0OCQMIAwUCCQcKAQQCCxYFAQIEAQICAQIDAQIDAQIPEAkSCjEUIQ0CJQYDAgYgDgMIHC0XCg4GCQEDAQEKAQEEAQUIERs2BwwHBQwCAQEEAQIDBv6DDwgLBQUGBQUJBgYODAUHJgkMCQgHBQYRCQQGBRAIBQEHBQUFAgMCBgoZDAMMFVYKBx0JFgw+DgoVCAkFGglCEgcPBQkMBQkEBQUIBQUBBQUBBQIGBBAJBQYKCgkFAw8nBQoGCAUFCQQFBwwGBAMNBAYFCAYJDIwHCgUHAgIBBAMDBAMJDjcBQAKHCxgJBAsIAQILEQMEBQgDAQECAwYDEiQSBDpUAwIHNwEDOwECkAkKCwIEAQ4KBwM6A5cBBhIQGRgYGB8ICiIPBQIFAgIBDAUDHgYFEAYwHQYODQYFBAcJEgX+/gYDAQMIAwYFCQEBAhM3GAIFBgUCHS8JAhQgCxcMCxULGCkPAwUCFQ4OFBEgCwcDAQEDAgQDAQEEFQsBAgMEAgUKBQMEBgcHCAQaNhUJCwcCCRsvGwIDBQIPIAUFBwMGBwoMAQEEBQIdLSUIEQgLEQoEBAQDDgQCAwQBAwUEBCE+BQUGAQUBBwUKDgQSBA0sBg8FBgsBBQ4KAgYIDxEFBwkRCQ4bDxAICg4RGwUFBAkBBAEFAgUBBgEFAQcEAgMCBQEMAQgGBwQUDgcPDDAKDQYIDQUVBQYHBQ0FBw8pCQgHDgYEEAYDDwkHAwcGBQIFAQQE/vYDAwUIAwoDBQQNBw4PBgFikwIGCgsFERY2CRoQAwYFAgICAwEBAQEDAUfXBwEFkwMCxAICAgYBCQ8MmgMAAAAADgCuAAEAAAAAAAEADAAaAAEAAAAAAAIABwA3AAEAAAAAAAMADABZAAEAAAAAAAQADACAAAEAAAAAAAUACwClAAEAAAAAAAYADADLAAEAAAAAAAoAGgEOAAMAAQQJAAEAGAAAAAMAAQQJAAIADgAnAAMAAQQJAAMAGAA/AAMAAQQJAAQAGABmAAMAAQQJAAUAFgCNAAMAAQQJAAYAGACxAAMAAQQJAAoANADYAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAAVmVyc2lvbiAxLjEAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAARm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0AAAECAAIBAwADAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbBmdseXBoMQd1bmkwMDAxB3VuaUU2MDAHdW5pRTYwMQd1bmlFNjAyB3VuaUU2MDMHdW5pRTYwNAd1bmlFNjA1B3VuaUU2MDYHdW5pRTYwNwd1bmlFNjA4B3VuaUU2MDkHdW5pRTYwQQd1bmlFNjBCB3VuaUU2MEMHdW5pRTYwRAd1bmlFNjBFB3VuaUU2MEYHdW5pRTYxMAd1bmlFNjExB3VuaUU2MTIHdW5pRTYxMwd1bmlFNjE0B3VuaUU2MTUHdW5pRTYxNgd1bmlFNjE3AAABAAH//wAPAAAAAQAAAADSBBQFAAAAANHUIisAAAAA0pAw5Q==";
    }, function (e, t, n) {
        var i, o;
        i = [n(23), n(1)], o = function (e, t) {
            return function (n, i) {
                var o = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia"];
                t.each(o, function (e) {
                    n[e] = function () {
                        return i[e].apply(i, arguments), n
                    }
                }), n.registerPlugin = e.registerPlugin
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            return function (t, n) {
                var i = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "mute", "item", "stretching", "playlist", "captions"];
                e.each(i, function (e) {
                    var i = e.slice(0, 1).toUpperCase() + e.slice(1);
                    t["get" + i] = function () {
                        return n._model.get(e)
                    }
                });
                var o = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
                    r = ["setControls", "setFullscreen", "setVolume", "enableGPU", "disableGPU", "setMute", "setCues", "setCaptions", "setToken"];
                e.each(o, function (e) {
                    t[e] = function () {
                        return n[e] ? n[e].apply(n, arguments) : null
                    }
                }), e.each(r, function (e) {
                    t[e] = function () {
                        return n[e].apply(n, arguments), t
                    }
                }), t.getPlaylistIndex = t.getItem
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(4), n(6), n(3), n(2), n(49), n(1), n(89), n(80), n(81), n(83), n(86), n(17)], o = function (e, t, n, i, o, r, a, s, l, c, u, d) {
            var h = function (h, f) {
                var p, g = this, A = !1, m = {};
                r.extend(this, n), this.utils = i, this._ = r, this.Events = n, this.version = d, this.trigger = function (e, t) {
                    return t = r.isObject(t) ? r.extend({}, t) : {}, t.type = e, window.jwplayer && window.jwplayer.debug ? n.trigger.call(g, e, t) : n.triggerSafe.call(g, e, t)
                }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
                var w = function () {
                    p = new a(h), s(g, p), l(g, p), p.on(e.JWPLAYER_PLAYLIST_ITEM, function () {
                        m = {}
                    }), p.on(e.JWPLAYER_MEDIA_META, function (e) {
                        r.extend(m, e.metadata)
                    }), p.on(e.JWPLAYER_READY, function (e) {
                        A = !0, v.tick("ready"), e.setupTime = v.between("setup", "ready");
                        var t = new u(g.getConfig(), g);
                        t.userCertify()
                    }), p.on("all", g.trigger)
                };
                w(), c(this), this.id = h.id;
                var v = this._qoe = new o;
                v.tick("init");
                var y = function () {
                    A = !1, m = {}, g.off(), p && p.off(), p && p.playerDestroy && p.playerDestroy()
                };
                return this.getPlugin = function (e) {
                    return g.plugins && g.plugins[e]
                }, this.addPlugin = function (e, t) {
                    this.plugins = this.plugins || {}, this.plugins[e] = t, this.onReady(t.addToPlayer), t.resize && this.onResize(t.resizeHandler)
                }, this.setup = function (e) {
                    return v.tick("setup"), y(), w(), i.foreach(e.events, function (e, t) {
                        var n = g[e];
                        "function" == typeof n && n.call(g, t)
                    }), e.id = g.id, p.setup(e, this), g
                }, this.qoe = function () {
                    var t = p.getItemQoe(), n = v.between("setup", "ready"),
                        i = t.between(e.JWPLAYER_MEDIA_PLAY_ATTEMPT, e.JWPLAYER_MEDIA_FIRST_FRAME);
                    return {setupTime: n, firstFrame: i, player: v.dump(), item: t.dump()}
                }, this.getContainer = function () {
                    return p.getContainer ? p.getContainer() : h
                }, this.getMeta = this.getItemMeta = function () {
                    return m
                }, this.getPlaylistItem = function (e) {
                    if (!i.exists(e)) return p._model.get("playlistItem");
                    var t = g.getPlaylist();
                    return t ? t[e] : null
                }, this.getRenderingMode = function () {
                    return "html5"
                }, this.load = function (e) {
                    var t = this.getPlugin("vast") || this.getPlugin("googima");
                    return t && t.destroy(), p.load(e), g
                }, this.play = function (e, n) {
                    if (r.isBoolean(e) || (n = e), n || (n = {reason: "external"}), e === !0) return p.play(n), g;
                    if (e === !1) return p.pause(), g;
                    switch (e = g.getState()) {
                        case t.PLAYING:
                            p.pause();
                            break;
                        default:
                            p.play(n)
                    }
                    return g
                }, this.pause = function (e) {
                    return r.isBoolean(e) ? this.play(!e) : this.play()
                }, this.createInstream = function () {
                    return p.createInstream()
                }, this.castToggle = function () {
                    p && p.castToggle && p.castToggle()
                }, this.playAd = this.pauseAd = i.noop, this.remove = function () {
                    return f(g), g.trigger("remove"), y(), g
                }, this
            };
            return h
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(4)], o = function (e, t) {
            return function (n) {
                var i = {
                    onBufferChange: t.JWPLAYER_MEDIA_BUFFER,
                    onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL,
                    onError: t.JWPLAYER_ERROR,
                    onSetupError: t.JWPLAYER_SETUP_ERROR,
                    onFullscreen: t.JWPLAYER_FULLSCREEN,
                    onMeta: t.JWPLAYER_MEDIA_META,
                    onMute: t.JWPLAYER_MEDIA_MUTE,
                    onPlaylist: t.JWPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE,
                    onReady: t.JWPLAYER_READY,
                    onResize: t.JWPLAYER_RESIZE,
                    onComplete: t.JWPLAYER_MEDIA_COMPLETE,
                    onSeek: t.JWPLAYER_MEDIA_SEEK,
                    onTime: t.JWPLAYER_MEDIA_TIME,
                    onVolume: t.JWPLAYER_MEDIA_VOLUME,
                    onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick: t.JWPLAYER_DISPLAY_CLICK,
                    onControls: t.JWPLAYER_CONTROLS,
                    onQualityLevels: t.JWPLAYER_MEDIA_LEVELS,
                    onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList: t.JWPLAYER_CAPTIONS_LIST,
                    onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED,
                    onAdError: t.JWPLAYER_AD_ERROR,
                    onAdClick: t.JWPLAYER_AD_CLICK,
                    onAdImpression: t.JWPLAYER_AD_IMPRESSION,
                    onAdTime: t.JWPLAYER_AD_TIME,
                    onAdComplete: t.JWPLAYER_AD_COMPLETE,
                    onAdCompanions: t.JWPLAYER_AD_COMPANIONS,
                    onAdSkipped: t.JWPLAYER_AD_SKIPPED,
                    onAdPlay: t.JWPLAYER_AD_PLAY,
                    onAdPause: t.JWPLAYER_AD_PAUSE,
                    onAdMeta: t.JWPLAYER_AD_META,
                    onCast: t.JWPLAYER_CAST_SESSION,
                    onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks: t.JWPLAYER_AUDIO_TRACKS,
                    onCuepoint: t.JWPLAYER_CUEPOINT,
                    onSeekForwardForbidden: t.JWPLAYER_SEEK_FORWARD_FORBIDDEN,
                    onConnection: t.JWPLAYER_CONNECTING,
                    onAlive: t.JWPLAYER_ALIVE,
                    onNoLiveStream: t.JWPLAYER_NO_LIVE_STREAM,
                    onLiveStop: t.JWPLAYER_LIVE_STOP
                }, o = {onBuffer: "buffer", onPause: "pause", onPlay: "play", onIdle: "idle", onStop: "stop"};
                e.each(o, function (t, i) {
                    n[i] = e.partial(n.on, t, e)
                }), e.each(i, function (t, i) {
                    n[i] = e.partial(n.on, t, e)
                })
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1)], o = function (e, t) {
            function i(n) {
                t.each(n, function (t, i) {
                    n[i] = e.serialize(t)
                })
            }

            function o(e) {
                return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
            }

            function r(e) {
                return e.controls = !1, e.skin = "seven", e.startseek = !1, delete e.skinColorInactive, delete e.skinColorActive, delete e.skinColorBackground, e
            }

            function a(t, n) {
                if (n.toString().indexOf("%") === -1) return 0;
                if ("string" != typeof t || !e.exists(t)) return 0;
                if (/^\d*\.?\d+%$/.test(t)) return t;
                var i = t.indexOf(":");
                if (i === -1) return 0;
                var o = parseFloat(t.substr(0, i)), r = parseFloat(t.substr(i + 1));
                return o <= 0 || r <= 0 ? 0 : r / o * 100 + "%"
            }

            var s = {
                autostart: !1,
                controls: !0,
                displaytitle: !0,
                displaydescription: !0,
                mobilecontrols: !1,
                repeat: !1,
                castAvailable: !1,
                skin: "seven",
                stretching: "uniform",
                mute: !1,
                volume: 90,
                width: 480,
                height: 270,
                controlbar: {barLogo: !0},
                marquee: {show: !1, text: "百度云", fontSize: 12, color: "#FFF"},
                startseek: !0,
                flashUI: !1
            }, l = function (l, c) {
                l.autoStart && (l.autostart = !0), "over" !== l.controls && "none" !== l.controls || (l.controls = "over" === l.controls), l.startParam && (l.startparam = l.startParam);
                var u = c && c.getAllItems(), d = t.extend({}, (window.jwplayer || {}).defaults, u, l);
                i(d);
                var h = t.extend({}, s, d);
                if ("." === h.base && (h.base = e.getScriptPath("cyberplayer.js"/*tpa=http://static3.qianqian.com/web/static/j/cyberplayer.js*/)), h.base = (h.base || e.loadFrom()).replace(/\/?$/, "/"), n.p = h.base, h.width = o(h.width), h.height = o(h.height), h.flashplayer = h.flashplayer || e.getScriptPath("cyberplayer.js"/*tpa=http://static3.qianqian.com/web/static/j/cyberplayer.js*/) + "cyberplayer.flash.swf", "http:" === window.location.protocol && (h.flashplayer = h.flashplayer.replace("https", "http")), h.aspectratio = a(h.aspectratio, h.width), t.isObject(h.skin) && (h.skinUrl = h.skin.url, h.skinColorInactive = h.skin.inactive, h.skinColorActive = h.skin.active, h.skinColorBackground = h.skin.background, h.skin = t.isString(h.skin.name) ? h.skin.name : s.skin), t.isString(h.skin) && h.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), h.skin = h.skin.replace(".xml", "")), h.aspectratio || delete h.aspectratio, !h.playlist) {
                    var f = t.pick(h, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "fallbackfile"]);
                    h.playlist = [f]
                }
                return (e.isPoorIE() || h.flashUI) && (h = r(h)), h
            };
            return l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(38), n(1)], o = function (e, t) {
            function n(e) {
                for (var n = {}, i = e.substr(e.indexOf("?") + 1).split("&"), r = 0; r < i.length; r++) {
                    var a = i[r], s = a.indexOf("=");
                    if (s > -1) {
                        var l = a.substr(0, s), c = decodeURIComponent(a.substr(s + 1));
                        t.contains(o, l) && (c = c.replace(/'/g, '"'), c = "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(c) : eval("(" + c + ")")), n[l] = c
                    }
                }
                return n
            }

            function i() {
                for (var i = document.getElementsByTagName("script"), o = i.length; o--;) {
                    var r = i[o], a = r.src;
                    if (a.indexOf("cyberplayer.js"/*tpa=http://static3.qianqian.com/web/static/j/cyberplayer.js*/) > -1) {
                        var s = n(a);
                        if (t.size(s) > 0 && "DIV" === r.parentNode.nodeName) return e.selectPlayer(r.parentNode).setup(s)
                    }
                }
            }

            var o = ["imageAdvs", "playlist", "listbar", "tracks", "captions", "controlbar", "logo", "skin", "marquee"];
            return i(), {getParams: n, loadPlayer: i}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(17), n(2)], o = function (e, t) {
            function n() {
                for (var e = t.getElementsByClassName("jw-warning"), n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.style.display = "block"
                }
            }

            var i = "https://drm.media.baidubce.com/v1/playerAuth", o = function (e) {
                !e.code || "UNAUTHORIZED" !== e.code && "BAD_REQUEST" !== e.code || n()
            }, r = function (e, t) {
                this.config = e, this.api = t
            };
            return r.prototype = {
                userCertify: function () {
                    var o = this.config.ak ? this.config.ak : "";
                    if (!/^[a-zA-Z0-9]{32}$/.test(o)) return n(), !1;
                    var r = "web-html5-" + e, a = t.getBrowserInfo(),
                        s = i + "?ak=" + o + "&player=" + r + "&platform=" + a + "&callback=" + this._getCallback();
                    s = encodeURI(s);
                    var l = document.createElement("script");
                    l.type = "text/javascript", l.src = s, document.getElementsByTagName("head")[0].appendChild(l)
                }, _getCallback: function () {
                    var e = (new Date).getTime(), t = 1e9 * Math.random() >>> 0, n = "jwplayer_" + e + "_" + t;
                    return window[n] = function (e) {
                        try {
                            o(e), delete window[n]
                        } catch (t) {
                            window[n] = null
                        }
                    }, n
                }
            }, r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(94), n(3), n(1), n(4)], o = function (e, t, n, i) {
            var o = function (t, o, r, a) {
                function s() {
                    h("Setup Timeout Error", "Setup took longer than " + A + " seconds to complete.")
                }

                function l() {
                    n.each(g, function (e) {
                        e.complete !== !0 && e.running !== !0 && null !== t && u(e.depends) && (e.running = !0, c(e))
                    })
                }

                function c(e) {
                    var n = function (t) {
                        t = t || {}, d(e, t)
                    };
                    e.method(n, o, t, r, a)
                }

                function u(e) {
                    return n.all(e, function (e) {
                        return g[e].complete
                    })
                }

                function d(e, t) {
                    "error" === t.type ? h(t.msg, t.reason, t.code || "") : "complete" === t.type ? (clearTimeout(f), p.trigger(i.JWPLAYER_READY)) : (e.complete = !0, l())
                }

                function h(e, t, n) {
                    clearTimeout(f), p.trigger(i.JWPLAYER_SETUP_ERROR, {message: e + ": " + t, code: n}), p.destroy()
                }

                var f, p = this, g = e.getQueue(), A = 30;
                this.start = function () {
                    f = setTimeout(s, 1e3 * A), l()
                }, this.destroy = function () {
                    clearTimeout(f), this.off(), g.length = 0, t = null, o = null, r = null
                }
            };
            return o.prototype = t, o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(13), n(22), n(96), n(2)], o = function (e, t, n, i) {
            var o = function (o, r) {
                function a(e) {
                    if (e.tracks.length) {
                        r.mediaController.off("meta", s), y = [], E = {}, j = {}, b = 0;
                        for (var t = e.tracks || [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.id = i.name, i.label = i.name || i.language, h(i)
                        }
                        var o = g();
                        this.setCaptionsList(o), A()
                    }
                }

                function s(e) {
                    var t = e.metadata;
                    if (t && "textdata" === t.type) {
                        if (!t.text) return;
                        var n = E[t.trackid];
                        if (!n) {
                            n = {kind: "captions", id: t.trackid, data: []}, h(n);
                            var i = g();
                            this.setCaptionsList(i)
                        }
                        var o, a;
                        t.useDTS ? (n.source || (n.source = t.source || "mpegts"), o = t.begin, a = t.begin + "_" + t.text) : (o = e.position || r.get("position"), a = "" + Math.round(10 * o) + "_" + t.text);
                        var s = j[a];
                        s || (s = {begin: o, text: t.text}, t.end && (s.end = t.end), j[a] = s, n.data.push(s))
                    }
                }

                function l(e) {
                    i.log("CAPTIONS(" + e + ")")
                }

                function c(e, t) {
                    v = t, y = [], E = {}, j = {}, b = 0
                }

                function u(e) {
                    c(r, e), r.mediaController.off("meta", s), r.mediaController.off("subtitlesTracks", a);
                    var t, n, o, l, u = e.tracks, d = "flash" === r.get("provider").name,
                        p = i.isChrome() || i.isIOS() || i.isSafari();
                    for (l = 0; l < u.length; l++) t = u[l], o = t.file && /\.(?:web)?vtt(?:\?.*)?$/i.test(t.file), !d && o && !w && p || (n = t.kind.toLowerCase(), "captions" !== n && "subtitles" !== n || (t.file ? (h(t), f(t)) : t.data && h(t)));
                    y.length || (r.mediaController.on("meta", s, this), r.mediaController.on("subtitlesTracks", a, this));
                    var m = g();
                    this.setCaptionsList(m), A()
                }

                function d(e, t) {
                    var n = null;
                    0 !== t && (n = y[t - 1]), e.set("captionsTrack", n)
                }

                function h(e) {
                    "number" != typeof e.id && (e.id = e.name || e.file || "cc" + y.length), e.data = e.data || [], e.label || (e.label = "Unknown CC", b++, b > 1 && (e.label += " (" + b + ")")), y.push(e), E[e.id] = e
                }

                function f(e) {
                    i.ajax(e.file, function (t) {
                        p(t, e)
                    }, l)
                }

                function p(i, o) {
                    var r = i.responseXML ? i.responseXML.firstChild : null;
                    if (r) for ("xml" === e.localName(r) && (r = r.nextSibling); r.nodeType === r.COMMENT_NODE;) r = r.nextSibling;
                    try {
                        r && "tt" === e.localName(r) ? o.data = n(i.responseXML) : o.data = t(i.responseText)
                    } catch (a) {
                        l(a.message + ": " + o.file)
                    }
                }

                function g() {
                    for (var e = [{id: "off", label: "Off"}], t = 0; t < y.length; t++) e.push({
                        id: y[t].id,
                        label: y[t].label || "Unknown CC"
                    });
                    return e
                }

                function A() {
                    var e = 0, t = r.get("captionLabel");
                    if ("Off" === t) return void r.set("captionsIndex", 0);
                    for (var n = 0; n < y.length; n++) {
                        var i = y[n];
                        if (t && t === i.label) {
                            e = n + 1;
                            break
                        }
                        i["default"] || i.defaulttrack || "default" === i.id ? e = n + 1 : i.autoselect
                    }
                    m(e)
                }

                function m(e) {
                    y.length ? r.setVideoSubtitleTrack(e, y) : r.set("captionsIndex", e)
                }

                r.on("change:playlistItem", c, this), r.on("change:captionsIndex", d, this), r.on("itemReady", u, this), r.mediaController.on("subtitlesTracks", a, this), r.mediaController.on("subtitlesTrackData", function (e) {
                    var t = E[e.name];
                    if (t) {
                        t.source = e.source;
                        for (var n = e.captions || [], i = !1, o = 0; o < n.length; o++) {
                            var r = n[o], a = e.name + "_" + r.begin + "_" + r.end;
                            j[a] || (j[a] = r, t.data.push(r), i = !0)
                        }
                        i && t.data.sort(function (e, t) {
                            return e.begin - t.begin
                        })
                    }
                }, this), r.mediaController.on("meta", s, this);
                var w = !!r.get("sdkplatform"), v = {}, y = [], E = {}, j = {}, b = 0;
                this.getCurrentIndex = function () {
                    return r.get("captionsIndex")
                }, this.getCaptionsList = function () {
                    return r.get("captionsList")
                }, this.setCaptionsList = function (e) {
                    r.set("captionsList", e)
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(84), n(90), n(1), n(87), n(88), n(20), n(39), n(100), n(41), n(2), n(133), n(14), n(3), n(21), n(6), n(4), n(127), n(103)], o = function (e, t, n, i, o, r, a, s, l, c, u, d, h, f, p, g, A, m) {
            function w(e) {
                return function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    this._model.getVideo() ? this["_" + e].apply(this, t) : this.eventsQueue.push([e, t])
                }
            }

            function v(e) {
                return e === p.LOADING || e === p.STALLED ? p.BUFFERING : e
            }

            var y = function (e) {
                this.originalContainer = this.currentContainer = e, this.eventsQueue = [], n.extend(this, h), this._model = new r
            };
            return y.prototype = {
                play: w("play"),
                pause: w("pause"),
                setVolume: w("setVolume"),
                enableGPU: w("enableGPU"),
                disableGPU: w("disableGPU"),
                setToken: w("setToken"),
                setMute: w("setMute"),
                seek: w("seek"),
                stop: w("stop"),
                load: w("load"),
                playlistNext: w("next"),
                playlistPrev: w("prev"),
                playlistItem: w("item"),
                setFullscreen: w("setFullscreen"),
                setCurrentCaptions: w("setCurrentCaptions"),
                setCurrentQuality: w("setCurrentQuality"),
                setup: function (r, h) {
                    function A() {
                        ne.mediaModel.on("change:state", function (e, t) {
                            var n = v(t);
                            ne.set("state", n)
                        })
                    }

                    function w() {
                        $ = null, R(ne.get("item")), ne.on("change:state", f, this), ne.on("change:castState", function (e, t) {
                            re.trigger(g.JWPLAYER_CAST_SESSION, t)
                        }), ne.on("change:fullscreen", function (e, t) {
                            re.trigger(g.JWPLAYER_FULLSCREEN, {fullscreen: t})
                        }), ne.on("itemReady", function () {
                            re.trigger(g.JWPLAYER_PLAYLIST_ITEM, {index: ne.get("item"), item: ne.get("playlistItem")})
                        }), ne.on("change:playlist", function (e, t) {
                            t.length && re.trigger(g.JWPLAYER_PLAYLIST_LOADED, {playlist: t})
                        }), ne.on("change:volume", function (e, t) {
                            re.trigger(g.JWPLAYER_MEDIA_VOLUME, {volume: t})
                        }), ne.on("change:mute", function (e, t) {
                            re.trigger(g.JWPLAYER_MEDIA_MUTE, {mute: t})
                        }), ne.on("change:controls", function (e, t) {
                            re.trigger(g.JWPLAYER_CONTROLS, {controls: t})
                        }), ne.on("change:scrubbing", function (e, t) {
                            t ? I() : k()
                        }), ne.on("change:captionsList", function (e, t) {
                            re.trigger(g.JWPLAYER_CAPTIONS_LIST, {tracks: t, track: H()})
                        }), ne.mediaModel.set("mediaType", null), ne.mediaController.on("all", re.trigger.bind(re)), X.on("all", re.trigger.bind(re)), this.showView(X.element()), n.defer(y)
                    }

                    function y() {
                        re.trigger(g.JWPLAYER_READY, {setupTime: 0}), re.trigger(g.JWPLAYER_PLAYLIST_LOADED, {playlist: ne.get("playlist")}), re.trigger(g.JWPLAYER_PLAYLIST_ITEM, {
                            index: ne.get("item"),
                            item: ne.get("playlistItem")
                        }), re.trigger(g.JWPLAYER_CAPTIONS_LIST, {
                            tracks: ne.get("captionsList"),
                            track: ne.get("captionsIndex")
                        }), ne.get("autostart") && (!c.isPoorIE() && ne.get("imageAdvs") && ne.get("imageAdvs").start ? X.beginStartAdv() : k({reason: "autostart"})), E()
                    }

                    function E() {
                        for (; re.eventsQueue.length > 0;) {
                            var e = re.eventsQueue.shift(), t = e[0], n = e[1] || [];
                            re["_" + t].apply(re, n)
                        }
                    }

                    function j(e) {
                        switch (ne.get("state") === p.ERROR && ne.set("state", p.IDLE), L(!0), ne.get("autostart") && ne.once("itemReady", k), typeof e) {
                            case"string":
                                b(e);
                                break;
                            case"object":
                                var t = s(e), n = ne.get("edition"), i = ne.getProviders(), o = i.required(t, n);
                                d.load(o, n).then(function () {
                                    re.getProvider() || (ne.setProvider(ne.get("playlistItem")), E())
                                });
                                var r = M(e);
                                r && R(0);
                                break;
                            case"number":
                                R(e)
                        }
                    }

                    function b(e) {
                        var t = new l;
                        t.on(g.JWPLAYER_PLAYLIST_LOADED, function (e) {
                            j(e.playlist)
                        }), t.on(g.JWPLAYER_ERROR, function (e) {
                            e.message = "Error loading playlist: " + e.message, this.triggerError(e)
                        }, this), t.load(e)
                    }

                    function C() {
                        var e = re._instreamAdapter && re._instreamAdapter.getState();
                        return n.isString(e) ? e : ne.get("state")
                    }

                    function k(e) {
                        var t;
                        if (e && ne.set("playReason", e.reason), ne.get("state") !== p.ERROR) {
                            var i = re._instreamAdapter && re._instreamAdapter.getState();
                            if (n.isString(i)) return h.pauseAd(!1);
                            if (ne.get("state") === p.COMPLETE && (L(!0), R(0)), !ie && (ie = !0, re.trigger(g.JWPLAYER_MEDIA_BEFOREPLAY, {file: ne.get("file") || ne.get("playlistItem").file}), ie = !1, te)) return te = !1, void(ee = null);
                            if (x()) {
                                if (0 === ne.get("playlist").length) return !1;
                                !c.isPoorIE() && ne.get("imageAdvs") && ne.get("imageAdvs").start ? X.beginStartAdv() : t = c.tryCatch(function () {
                                    ne.loadVideo()
                                })
                            } else ne.get("state") === p.PAUSED && (t = c.tryCatch(function () {
                                ne.playVideo()
                            }));
                            return !(t instanceof c.Error && (re.triggerError(t), ee = null, 1))
                        }
                    }

                    function L(e) {
                        ne.off("itemReady", k);
                        var t = !e;
                        ee = null;
                        var n = c.tryCatch(function () {
                            ne.stopVideo()
                        }, re);
                        return n instanceof c.Error ? (re.triggerError(n), !1) : (t && (oe = !0), ie && (te = !0), !0)
                    }

                    function I() {
                        ee = null;
                        var e = re._instreamAdapter && re._instreamAdapter.getState();
                        if (n.isString(e)) return h.pauseAd(!0);
                        switch (ne.get("state")) {
                            case p.ERROR:
                                return !1;
                            case p.PLAYING:
                            case p.BUFFERING:
                                var t = c.tryCatch(function () {
                                    ae().pause()
                                }, this);
                                if (t instanceof c.Error) return re.triggerError(t), !1;
                                break;
                            default:
                                ie && (te = !0)
                        }
                        return !0
                    }

                    function x() {
                        var e = ne.get("state");
                        return e === p.IDLE || e === p.COMPLETE || e === p.ERROR
                    }

                    function T(e) {
                        if (ne.get("state") !== p.ERROR) {
                            var t = this.getConfig();
                            if (t.disableSeekForward && e > this._model.get("position")) return void re.trigger(g.JWPLAYER_SEEK_FORWARD_FORBIDDEN);
                            ne.get("scrubbing") || ne.get("state") === p.PLAYING || k(!0), ae().seek(e)
                        }
                    }

                    function P(e, t) {
                        L(!0), R(e), k(t)
                    }

                    function M(e) {
                        var t = s(e);
                        return t = s.filterPlaylist(t, ne.getProviders(), ne.get("androidhls"), ne.get("drm"), ne.get("preload"), ne.get("feedid"), ne.get("withCredentials")), ne.set("playlist", t), !(!n.isArray(t) || 0 === t.length)
                    }

                    function R(e) {
                        var t = ne.get("playlist");
                        e = parseInt(e, 10) || 0, e = (e + t.length) % t.length, ne.set("item", e), ne.set("playlistItem", t[e]), ne.setActiveItem(t[e])
                    }

                    function _(e) {
                        P(ne.get("item") - 1, e || {reason: "external"})
                    }

                    function D(e) {
                        P(ne.get("item") + 1, e || {reason: "external"})
                    }

                    function B() {
                        if (x()) {
                            if (oe) return void(oe = !1);
                            ee = B;
                            var e = ne.get("item");
                            return e === ne.get("playlist").length - 1 ? void(ne.get("repeat") ? D({reason: "repeat"}) : (ne.set("state", p.COMPLETE), re.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void D({reason: "playlist"})
                        }
                    }

                    function S(e) {
                        ae() && (e = parseInt(e, 10) || 0, ae().setCurrentQuality(e))
                    }

                    function O() {
                        return ae() ? ae().getCurrentQuality() : -1
                    }

                    function Y() {
                        if (this._model) return this._model.getConfiguration()
                    }

                    function N() {
                        if (this._model.mediaModel) return this._model.mediaModel.get("visualQuality");
                        var e = F();
                        if (e) {
                            var t = O(), i = e[t];
                            if (i) return {level: n.extend({index: t}, i), mode: "", reason: ""}
                        }
                        return null
                    }

                    function F() {
                        return ae() ? ae().getQualityLevels() : null
                    }

                    function Q(e) {
                        ae() && (e = parseInt(e, 10) || 0, ae().setCurrentAudioTrack(e))
                    }

                    function J() {
                        return ae() ? ae().getCurrentAudioTrack() : -1
                    }

                    function U() {
                        return ae() ? ae().getAudioTracks() : null
                    }

                    function W(e) {
                        e = parseInt(e, 10) || 0, ne.persistVideoSubtitleTrack(e), re.trigger(g.JWPLAYER_CAPTIONS_CHANGED, {
                            tracks: V(),
                            track: e
                        })
                    }

                    function H() {
                        return Z.getCurrentIndex()
                    }

                    function V() {
                        return Z.getCaptionsList()
                    }

                    function G() {
                        var e = ne.getVideo();
                        if (e) {
                            var t = e.detachMedia();
                            if (t instanceof HTMLVideoElement) return t
                        }
                        return null
                    }

                    function z() {
                        var e = c.tryCatch(function () {
                            ne.getVideo().attachMedia()
                        });
                        return e instanceof c.Error ? void c.log("Error calling _attachMedia", e) : void("function" == typeof ee && ee())
                    }

                    function K(e) {
                        n.isBoolean(e) || (e = !ne.get("fullscreen")), ne.set("fullscreen", e), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", e)
                    }

                    var X, q, Z, $, ee, te, ne = this._model, ie = !1, oe = !1, re = this, ae = function () {
                        return ne.getVideo()
                    }, se = new a;
                    se.track(ne);
                    var le = new e(r, se);
                    ne.setup(le, se), X = this._view = new u(h, ne), q = new m(h, ne), Z = new o(h, ne), $ = new i(h, ne, X, M), $.on(g.JWPLAYER_READY, w, this), $.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), ne.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, function () {
                        n.defer(B)
                    }), ne.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), ne.on("change:flashBlocked", function (e, t) {
                        if (!t) return void this._model.set("errorEvent", void 0);
                        var n = !!e.get("flashThrottle"),
                            i = {message: n ? "Click to run Flash" : "Flash plugin failed to load"};
                        n || this.trigger(g.JWPLAYER_ERROR, i), this._model.set("errorEvent", i)
                    }, this), A(), ne.on("change:mediaModel", A), this._play = k, this._pause = I, this._seek = T, this._stop = L, this._load = j, this._next = D, this._prev = _, this._item = P, this._setCurrentCaptions = W, this._setCurrentQuality = S, this._setFullscreen = K, this.detachMedia = G, this.attachMedia = z, this.getCurrentQuality = O, this.getQualityLevels = F, this.setCurrentAudioTrack = Q, this.getCurrentAudioTrack = J, this.getAudioTracks = U, this.getCurrentCaptions = H, this.getCaptionsList = V, this.getVisualQuality = N, this.getConfig = Y, this.getState = C, this.setVolume = ne.setVolume.bind(ne), this.setMute = ne.setMute.bind(ne), this.enableGPU = ne.enableGPU, this.disableGPU = ne.disableGPU, this.setToken = ne.setToken, this.getProvider = function () {
                        return ne.get("provider")
                    }, this.getWidth = function () {
                        return ne.get("containerWidth")
                    }, this.getHeight = function () {
                        return ne.get("containerHeight")
                    }, this.getContainer = function () {
                        return this.currentContainer
                    }, this.resize = X.resize, this.getSafeRegion = X.getSafeRegion, this.setCues = X.addCues, this.setCaptions = X.setCaptions, this.addButton = function (e, t, i, o, r) {
                        var a = {img: e, tooltip: t, callback: i, id: o, btnClass: r}, s = ne.get("dock");
                        s = s ? s.slice(0) : [], s = n.reject(s, n.matches({id: a.id})), s.push(a), ne.set("dock", s)
                    }, this.removeButton = function (e) {
                        var t = ne.get("dock") || [];
                        t = n.reject(t, n.matches({id: e})), ne.set("dock", t)
                    }, this.checkBeforePlay = function () {
                        return ie
                    }, this.getItemQoe = function () {
                        return ne._qoeItem
                    }, this.setControls = function (e) {
                        n.isBoolean(e) || (e = !ne.get("controls")), ne.set("controls", e);
                        var t = ne.getVideo();
                        t && t.setControls(e)
                    }, this.playerDestroy = function () {
                        this.stop(), this.showView(this.originalContainer), X && X.destroy(), ne && ne.destroy(), $ && ($.destroy(), $ = null)
                    }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function () {
                        return ne.getVideo().checkComplete()
                    }, this.createInstream = function () {
                        return this.instreamDestroy(), this._instreamAdapter = new t(this, ne, X), this._instreamAdapter
                    }, this.skipAd = function () {
                        this._instreamAdapter && this._instreamAdapter.skipAd()
                    }, this.instreamDestroy = function () {
                        re._instreamAdapter && re._instreamAdapter.destroy()
                    }, $.start()
                },
                showView: function (e) {
                    (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e)
                },
                triggerError: function (e) {
                    this._model.set("errorEvent", e), this._model.set("state", p.ERROR), this._model.once("change:state", function () {
                        this._model.set("errorEvent", void 0)
                    }, this), this.trigger(g.JWPLAYER_ERROR, e)
                },
                setupError: function (e) {
                    var t = e.message, i = c.createElement(A(this._model.get("id"), this._model.get("skin"), t)),
                        o = this._model.get("width"), r = this._model.get("height");
                    c.style(i, {
                        width: o.toString().indexOf("%") > 0 ? o : o + "px",
                        height: r.toString().indexOf("%") > 0 ? r : r + "px"
                    }), this.showView(i);
                    var a = this;
                    n.defer(function () {
                        a.trigger(g.JWPLAYER_SETUP_ERROR, {message: t, code: e.code})
                    })
                }
            }, y
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(92), n(91), n(4), n(6), n(2), n(3), n(1)], o = function (e, t, n, i, o, r, a) {
            function s(n) {
                var i = n.get("provider").name || "";
                return i.indexOf("flash") >= 0 ? t : e
            }

            var l = {skipoffset: null, tag: null}, c = function (e, t, r) {
                function c(e, t) {
                    "complete" !== e && (t = t || {}, y.tag && !t.tag && (t.tag = y.tag), this.trigger(e, t))
                }

                function u(e) {
                    w._adModel.set("duration", e.duration), w._adModel.set("position", e.position)
                }

                function d(e) {
                    var i = {};
                    if (y.tag && (i.tag = y.tag), h && v + 1 < h.length) {
                        this.trigger(n.JWPLAYER_MEDIA_COMPLETE, i), w._adModel.set("state", "buffering"), t.set("skipButton", !1), v++;
                        var o, r = h[v];
                        f && (o = f[v]), this.loadItem(r, o)
                    } else e.type === n.JWPLAYER_MEDIA_COMPLETE && (this.trigger(n.JWPLAYER_MEDIA_COMPLETE, i), this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE, {})), this.destroy()
                }

                var h, f, p, g, A, m = s(t), w = new m(e, t), v = 0, y = {}, E = a.bind(function (e) {
                    e = e || {}, e.hasControls = !!t.get("controls"), this.trigger(n.JWPLAYER_INSTREAM_CLICK, e), w && w._adModel && (w._adModel.get("state") === i.PAUSED ? e.hasControls && w.instreamPlay() : w.instreamPause())
                }, this), j = a.bind(function () {
                    w && w._adModel && w._adModel.get("state") === i.PAUSED && t.get("controls") && (e.setFullscreen(), e.play())
                }, this);
                this.type = "instream", this.init = function () {
                    p = t.getVideo(), g = t.get("position"), A = t.get("playlist")[t.get("item")], w.on("all", c, this), w.on(n.JWPLAYER_MEDIA_TIME, u, this), w.on(n.JWPLAYER_MEDIA_COMPLETE, d, this), w.init(), p.detachMedia(), t.mediaModel.set("state", i.BUFFERING), e.checkBeforePlay() || 0 === g && !p.checkComplete() ? (g = 0, t.set("preInstreamState", "instream-preroll")) : p && p.checkComplete() || t.get("state") === i.COMPLETE ? t.set("preInstreamState", "instream-postroll") : t.set("preInstreamState", "instream-midroll");
                    var a = t.get("state");
                    return a !== i.PLAYING && a !== i.BUFFERING || p.pause(), r.setupInstream(w._adModel), w._adModel.set("state", i.BUFFERING), r.clickHandler().setAlternateClickHandlers(o.noop, null), this.setText("Loading ad"), this
                }, this.loadItem = function (e, i) {
                    if (o.isAndroid(2.3)) return void this.trigger({
                        type: n.JWPLAYER_ERROR,
                        message: "Error loading instream: Cannot play instream on Android 2.3"
                    });
                    a.isArray(e) && (h = e, f = i, e = h[v], f && (i = f[v])), this.trigger(n.JWPLAYER_PLAYLIST_ITEM, {
                        index: v,
                        item: e
                    }), y = a.extend({}, l, i), w.load(e), this.addClickHandler();
                    var r = e.skipoffset || y.skipoffset;
                    r && (w._adModel.set("skipMessage", y.skipMessage), w._adModel.set("skipText", y.skipText), w._adModel.set("skipOffset", r), t.set("skipButton", !0))
                }, this.applyProviderListeners = function (e) {
                    w.applyProviderListeners(e), this.addClickHandler()
                }, this.play = function () {
                    w.instreamPlay()
                }, this.pause = function () {
                    w.instreamPause()
                }, this.hide = function () {
                    w.hide()
                }, this.addClickHandler = function () {
                    r.clickHandler().setAlternateClickHandlers(E, j), w.on(n.JWPLAYER_MEDIA_META, this.metaHandler, this)
                }, this.skipAd = function (e) {
                    var t = n.JWPLAYER_AD_SKIPPED;
                    this.trigger(t, e), d.call(this, {type: t})
                }, this.metaHandler = function (e) {
                    e.width && e.height && r.resizeMedia()
                }, this.destroy = function () {
                    if (this.off(), t.set("skipButton", !1), w) {
                        r.clickHandler() && r.clickHandler().revertAlternateClickHandlers(), w.instreamDestroy(), r.destroyInstream(), w = null, e.attachMedia();
                        var n = t.get("preInstreamState");
                        switch (n) {
                            case"instream-preroll":
                            case"instream-midroll":
                                var s = a.extend({}, A);
                                s.starttime = g, t.loadVideo(s), o.isMobile() && t.mediaModel.get("state") === i.BUFFERING && p.setState(i.BUFFERING), p.play();
                                break;
                            case"instream-postroll":
                            case"instream-idle":
                                p.stop()
                        }
                    }
                }, this.getState = function () {
                    return !(!w || !w._adModel) && w._adModel.get("state")
                }, this.setText = function (e) {
                    r.setAltText(e ? e : "")
                }, this.hide = function () {
                    r.useExternalControls()
                }
            };
            return a.extend(c.prototype, r), c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(3), n(20), n(21), n(4), n(6), n(2), n(1)], o = function (e, t, n, i, o, r, a) {
            var s = function (e, i) {
                this.model = i, this._adModel = (new t).setup({
                    id: i.get("id"),
                    volume: i.get("volume"),
                    fullscreen: i.get("fullscreen"),
                    mute: i.get("mute")
                }), this._adModel.on("change:state", n, this);
                var o = e.getContainer();
                this.swf = o.querySelector("object")
            };
            return s.prototype = a.extend({
                init: function () {
                    if (r.isChrome()) {
                        var e = -1, t = !1;
                        this.swf.on("throttle", function (n) {
                            if (clearTimeout(e), "resume" === n.state) t && (t = !1, this.instreamPlay()); else {
                                var i = this;
                                e = setTimeout(function () {
                                    i._adModel.get("state") === o.PLAYING && (t = !0, i.instreamPause())
                                }, 250)
                            }
                        }, this)
                    }
                    this.swf.on("instream:state", function (e) {
                        switch (e.newstate) {
                            case o.PLAYING:
                                this._adModel.set("state", e.newstate);
                                break;
                            case o.PAUSED:
                                this._adModel.set("state", e.newstate)
                        }
                    }, this).on("instream:time", function (e) {
                        this._adModel.set("position", e.position), this._adModel.set("duration", e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                    }, this).on("instream:complete", function (e) {
                        this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e)
                    }, this).on("instream:error", function (e) {
                        this.trigger(i.JWPLAYER_MEDIA_ERROR, e)
                    }, this), this.swf.triggerFlash("instream:init"), this.applyProviderListeners = function (e) {
                        this.model.on("change:volume", function (t, n) {
                            e.volume(n)
                        }, this), this.model.on("change:mute", function (t, n) {
                            e.mute(n)
                        }, this)
                    }
                }, instreamDestroy: function () {
                    this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
                }, load: function (e) {
                    this.swf.triggerFlash("instream:load", e)
                }, instreamPlay: function () {
                    this.swf.triggerFlash("instream:play")
                }, instreamPause: function () {
                    this.swf.triggerFlash("instream:pause")
                }
            }, e), s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(3), n(21), n(4), n(6), n(20)], o = function (e, t, n, i, o, r) {
            var a = function (a, s) {
                function l(t) {
                    var o = t || h.getVideo();
                    if (f !== o) {
                        if (f = o, !o) return;
                        o.off(), o.on("all", function (t, n) {
                            n = e.extend({}, n, {type: t}), this.trigger(t, n)
                        }, p), o.on(i.JWPLAYER_MEDIA_BUFFER_FULL, d), o.on(i.JWPLAYER_PLAYER_STATE, c), o.attachMedia(), o.volume(s.get("volume")), o.mute(s.get("mute")), h.on("change:state", n, p)
                    }
                }

                function c(e) {
                    switch (e.newstate) {
                        case o.PLAYING:
                            h.set("state", e.newstate);
                            break;
                        case o.PAUSED:
                            h.set("state", e.newstate)
                    }
                }

                function u(e) {
                    s.trigger(e.type, e), p.trigger(i.JWPLAYER_FULLSCREEN, {fullscreen: e.jwstate})
                }

                function d() {
                    h.getVideo().play()
                }

                var h, f, p = e.extend(this, t);
                return a.on(i.JWPLAYER_FULLSCREEN, function (e) {
                    this.trigger(i.JWPLAYER_FULLSCREEN, e)
                }, p), this.init = function () {
                    h = (new r).setup({
                        id: s.get("id"),
                        volume: s.get("volume"),
                        fullscreen: s.get("fullscreen"),
                        mute: s.get("mute")
                    }), h.on("fullscreenchange", u), this._adModel = h
                }, p.load = function (e) {
                    h.set("item", 0), h.set("playlistItem", e), h.setActiveItem(e), l(), h.off(i.JWPLAYER_ERROR), h.on(i.JWPLAYER_ERROR, function (e) {
                        this.trigger(i.JWPLAYER_ERROR, e)
                    }, p), h.loadVideo(e)
                }, p.applyProviderListeners = function (e) {
                    l(e), e.off(i.JWPLAYER_ERROR), e.on(i.JWPLAYER_ERROR, function (e) {
                        this.trigger(i.JWPLAYER_ERROR, e)
                    }, p), s.on("change:volume", function (e, t) {
                        f.volume(t)
                    }, p), s.on("change:mute", function (e, t) {
                        f.mute(t)
                    }, p)
                }, this.instreamDestroy = function () {
                    h && (h.off(), this.off(), f && (f.detachMedia(), f.off(), h.getVideo() && f.destroy()), h = null, a.off(null, null, this), a = null)
                }, p.instreamPlay = function () {
                    h.getVideo() && h.getVideo().play(!0)
                }, p.instreamPause = function () {
                    h.getVideo() && h.getVideo().pause(!0)
                }, p
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(49), n(4), n(1)], o = function (e, t, n) {
            function i(e) {
                e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.off(t.JWPLAYER_MEDIA_TIME, e._onTime)
            }

            function o(e) {
                i(e), e._triggerFirstFrame = n.once(function () {
                    var n = e._qoeItem;
                    n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);
                    var o = n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, t.JWPLAYER_MEDIA_FIRST_FRAME);
                    e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME, {loadTime: o}), i(e)
                }), e._onTime = a(e._triggerFirstFrame), e._onPlayAttempt = function () {
                    e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)
                }, e.mediaController.on(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame),
                    e.mediaController.on(t.JWPLAYER_MEDIA_TIME, e._onTime)
            }

            function r(n) {
                function i(n, i, r) {
                    n._qoeItem && r && n._qoeItem.end(r.get("state")), n._qoeItem = new e, n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM), n._qoeItem.start(i.get("state")), o(n), i.on("change:state", function (e, t, i) {
                        n._qoeItem.end(i), n._qoeItem.start(t)
                    })
                }

                n.on("change:mediaModel", i)
            }

            var a = function (e) {
                var t = Number.MIN_VALUE;
                return function (n) {
                    n.position > t && e(), t = n.position
                }
            };
            return {model: r}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(14), n(23), n(41), n(32), n(15), n(1), n(2), n(4), n(5)], o = function (e, t, i, o, r, a, s, l, c) {
            function u() {
                var e = {
                    LOAD_PROMISE_POLYFILL: {method: d, depends: []},
                    LOAD_BASE64_POLYFILL: {method: h, depends: []},
                    LOAD_JSON2: {method: f, depends: []},
                    LOADED_POLYFILLS: {
                        method: p,
                        depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL", "LOAD_JSON2"]
                    },
                    LOAD_PLUGINS: {method: g, depends: ["LOADED_POLYFILLS"]},
                    INIT_PLUGINS: {method: A, depends: ["LOAD_PLUGINS", "SETUP_VIEW"]},
                    LOAD_PROVIDERS: {method: I, depends: ["FILTER_PLAYLIST"]},
                    LOAD_SKIN: {method: L, depends: ["LOADED_POLYFILLS"]},
                    LOAD_PLAYLIST: {method: w, depends: ["LOADED_POLYFILLS"]},
                    FILTER_PLAYLIST: {method: v, depends: ["LOAD_PLAYLIST"]},
                    SETUP_VIEW: {method: x, depends: ["LOAD_SKIN"]},
                    SEND_READY: {method: T, depends: ["INIT_PLUGINS", "LOAD_PROVIDERS", "SETUP_VIEW"]}
                };
                return e
            }

            function d(e) {
                window.Promise ? e() : !function (t) {
                    n(26), e()
                }(n)
            }

            function h(e) {
                window.btoa && window.atob ? e() : !function (t) {
                    n(24), e()
                }(n)
            }

            function f(e) {
                window.JSON ? e() : !function (t) {
                    n(25), e()
                }(n)
            }

            function p(e) {
                e()
            }

            function g(e, n) {
                M = t.loadPlugins(n.get("id"), n.get("plugins")), M.on(l.COMPLETE, e), M.on(l.ERROR, a.partial(m, e)), M.load()
            }

            function A(e, t, n) {
                M.setupPlugins(n, t), e()
            }

            function m(e, t) {
                P(e, "Could not load plugin", t.message)
            }

            function w(e, t) {
                var n = t.get("playlist");
                a.isString(n) ? (R = new i, R.on(l.JWPLAYER_PLAYLIST_LOADED, function (n) {
                    t.set("playlist", n.playlist), t.set("feedid", n.feedid), e()
                }), R.on(l.JWPLAYER_ERROR, a.partial(b, e)), R.load(n)) : e()
            }

            function v(e, t, n, i, o) {
                var r = t.get("playlist"), a = o(r);
                if (a) e(); else {
                    var s = {}, l = y(r);
                    s.message = l.errorMessage, s.code = l.errorCode, "111" === s.code ? E(e, s) : j(e, s)
                }
            }

            function y(e) {
                var t = "", n = "";
                return s.flashVersion() || s.isMobile() ? s.flashVersion() && s.flashVersion() < 11.2 ? (t = 'Flash Player version must be 11.2 or greater, <a href="http://www.adobe.com/go/getflashplayer" target="_blank">update Flash Player</a>', n = "102") : s.isMobile() && (s.isRtmp(e[0].file) || "flv" === c.extension(e[0].file)) && (t = "No playable sources found", n = "111") : (t = 'No Flash Player, please <a href="http://www.adobe.com/go/getflashplayer" target="_blank">install</a>', n = "101"), {
                    errorMessage: t,
                    errorCode: n
                }
            }

            function E(e, t) {
                t && t.message && P(e, "Error loading media", t.message, t.code || "")
            }

            function j(e, t) {
                t && t.message && P(e, "Error loading player", t.message, t.code || "")
            }

            function b(e, t) {
                t && t.message ? P(e, "Error loading playlist", t.message) : P(e, "Error loading player", "No playable sources found")
            }

            function C(e, t) {
                if (a.contains(r.SkinsLoadable, e)) return t + "skins/" + e + ".css"
            }

            function k(e) {
                for (var t = document.styleSheets, n = 0, i = t.length; n < i; n++) if (t[n].href === e) return !0;
                return !1
            }

            function L(e, t) {
                var n = t.get("skin"), i = t.get("skinUrl");
                if (a.contains(r.SkinsIncluded, n)) return void e();
                if (i || (i = C(n, t.get("base"))), a.isString(i) && !k(i)) {
                    t.set("skin-loading", !0);
                    var s = !0, c = new o(i, s);
                    c.addEventListener(l.COMPLETE, function () {
                        t.set("skin-loading", !1)
                    }), c.addEventListener(l.ERROR, function () {
                        t.set("skin", "seven"), t.set("skin-loading", !1)
                    }), c.load()
                }
                a.defer(function () {
                    e()
                })
            }

            function I(t, n) {
                var i = n.getProviders(), o = n.get("playlist"), r = i.required(o);
                e.load(r).then(t)
            }

            function x(e, t, n, i) {
                i.setup(), e()
            }

            function T(e) {
                e({type: "complete"})
            }

            function P(e, t, n, i) {
                e({type: "error", msg: t, reason: n, code: i || ""})
            }

            var M, R;
            return {getQueue: u, error: P}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(38), n(2), n(77), n(85)], o = function (e, t) {
            return n.p = t.loadFrom(), e.selectPlayer
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5)], o = function (e) {
            function t(e) {
                e || n()
            }

            function n() {
                throw new Error("Invalid DFXP file")
            }

            var i = e.seconds;
            return function (o) {
                t(o);
                var r = [], a = o.getElementsByTagName("p");
                t(a), a.length || (a = o.getElementsByTagName("tt:p"), a.length || (a = o.getElementsByTagName("tts:p")));
                for (var s = 0; s < a.length; s++) {
                    var l = a[s], c = l.innerHTML || l.textContent || l.text || "",
                        u = e.trim(c).replace(/>\s+</g, "><").replace(/tts?:/g, "");
                    if (u) {
                        var d = l.getAttribute("begin"), h = l.getAttribute("dur"), f = l.getAttribute("end"),
                            p = {begin: i(d), text: u};
                        f ? p.end = i(f) : h && (p.end = p.begin + i(h)), r.push(p)
                    }
                }
                return r.length || n(), r
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(13), n(5), n(2)], o = function (e, t, n) {
            var i = "jwplayer", o = function (o, r) {
                for (var a = [], s = [], l = t.xmlAttribute, c = "default", u = "label", d = "file", h = "type", f = 0; f < o.childNodes.length; f++) {
                    var p = o.childNodes[f];
                    if (p.prefix === i) {
                        var g = e.localName(p);
                        "source" === g ? (delete r.sources, a.push({
                            file: l(p, d),
                            "default": l(p, c),
                            label: l(p, u),
                            type: l(p, h)
                        })) : "track" === g ? (delete r.tracks, s.push({
                            file: l(p, d),
                            "default": l(p, c),
                            kind: l(p, "kind"),
                            label: l(p, u)
                        })) : (r[g] = n.serialize(e.textContent(p)), "file" === g && r.sources && delete r.sources)
                    }
                    r[d] || (r[d] = r.link)
                }
                if (a.length) for (r.sources = [], f = 0; f < a.length; f++) a[f].file.length > 0 && (a[f][c] = "true" === a[f][c], a[f].label.length || delete a[f].label, r.sources.push(a[f]));
                if (s.length) for (r.tracks = [], f = 0; f < s.length; f++) s[f].file.length > 0 && (s[f][c] = "true" === s[f][c], s[f].kind = s[f].kind.length ? s[f].kind : "captions", s[f].label.length || delete s[f].label, r.tracks.push(s[f]));
                return r
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(13), n(5), n(2)], o = function (e, t, n) {
            function i(e) {
                for (var t = [], n = 0; n < s(e); n++) {
                    var i = e.childNodes[n];
                    "jwplayer" === i.prefix && "mediatypes" === r(i).toLowerCase() && t.push(a(i))
                }
                return t
            }

            var o = t.xmlAttribute, r = e.localName, a = e.textContent, s = e.numChildren, l = "media",
                c = function (e, t) {
                    function u(e) {
                        var t = {
                            zh: "Chinese",
                            nl: "Dutch",
                            en: "English",
                            fr: "French",
                            de: "German",
                            it: "Italian",
                            ja: "Japanese",
                            pt: "Portuguese",
                            ru: "Russian",
                            es: "Spanish"
                        };
                        return t[e] ? t[e] : e
                    }

                    var d, h, f = "tracks", p = [];
                    for (h = 0; h < s(e); h++) if (d = e.childNodes[h], d.prefix === l) {
                        if (!r(d)) continue;
                        switch (r(d).toLowerCase()) {
                            case"content":
                                if (o(d, "duration") && (t.duration = n.seconds(o(d, "duration"))), o(d, "url")) {
                                    t.sources || (t.sources = []);
                                    var g = {
                                        file: o(d, "url"),
                                        type: o(d, "type"),
                                        width: o(d, "width"),
                                        label: o(d, "label")
                                    }, A = i(d);
                                    A.length && (g.mediaTypes = A), t.sources.push(g)
                                }
                                s(d) > 0 && (t = c(d, t));
                                break;
                            case"title":
                                t.title = a(d);
                                break;
                            case"description":
                                t.description = a(d);
                                break;
                            case"guid":
                                t.mediaid = a(d);
                                break;
                            case"thumbnail":
                                t.image || (t.image = o(d, "url"));
                                break;
                            case"player":
                                break;
                            case"group":
                                c(d, t);
                                break;
                            case"subtitle":
                                var m = {};
                                m.file = o(d, "url"), m.kind = "captions", o(d, "lang").length > 0 && (m.label = u(o(d, "lang"))), p.push(m)
                        }
                    }
                    for (t.hasOwnProperty(f) || (t[f] = []), h = 0; h < p.length; h++) t[f].push(p[h]);
                    return t
                };
            return c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(5), n(13), n(97), n(98), n(40)], o = function (e, t, n, i, o) {
            function r(t) {
                for (var r = {}, s = 0; s < t.childNodes.length; s++) {
                    var l = t.childNodes[s], u = c(l);
                    if (u) switch (u.toLowerCase()) {
                        case"enclosure":
                            r.file = e.xmlAttribute(l, "url");
                            break;
                        case"title":
                            r.title = a(l);
                            break;
                        case"guid":
                            r.mediaid = a(l);
                            break;
                        case"pubdate":
                            r.date = a(l);
                            break;
                        case"description":
                            r.description = a(l);
                            break;
                        case"link":
                            r.link = a(l);
                            break;
                        case"category":
                            r.tags ? r.tags += a(l) : r.tags = a(l)
                    }
                }
                return r = i(t, r), r = n(t, r), new o(r)
            }

            var a = t.textContent, s = t.getChildNode, l = t.numChildren, c = t.localName, u = {};
            return u.parse = function (e) {
                for (var t = [], n = 0; n < l(e); n++) {
                    var i = s(e, n), o = c(i).toLowerCase();
                    if ("channel" === o) for (var a = 0; a < l(i); a++) {
                        var u = s(i, a);
                        "item" === c(u).toLowerCase() && t.push(r(u))
                    }
                }
                return t
            }, u
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(40), n(42), n(1), n(14)], o = function (e, t, n, i) {
            function o(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n], o = t.choose(i);
                    if (o) return i.type
                }
                return null
            }

            function r(e, t) {
                return n.isUndefined(e) ? t : e
            }

            var a = function (t) {
                return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e))
            };
            a.filterPlaylist = function (e, t, i, o, a, c, u) {
                var d = [];
                return n.each(e, function (e) {
                    e = n.extend({}, e), e.allSources = s(e.sources, i, e.drm || o, e.preload || a, r(e.withCredentials, u)), e.sources = l(e.allSources, t), e.sources.length && (e.file = e.sources[0].file, (e.preload || a) && (e.preload = e.preload || a), (e.feedid || c) && (e.feedid = e.feedid || c), d.push(e))
                }), d
            };
            var s = function (e, i, o, a, s) {
                return n.compact(n.map(e, function (e) {
                    if (n.isObject(e)) return void 0 !== i && null !== i && (e.androidhls = i), (e.drm || o) && (e.drm = e.drm || o), (e.preload || a) && (e.preload = e.preload || a), e.withCredentials = r(e.withCredentials, s), t(e)
                }))
            }, l = function (e, t) {
                t && t.choose || (t = new i({primary: t ? "flash" : null}));
                var r = o(e, t);
                return n.where(e, {type: r})
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1)], o = function (e) {
            var t = {kind: "captions", "default": !1}, n = function (n) {
                if (n && n.file) return e.extend({}, t, n)
            };
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(19), n(2), n(4), n(3), n(1), n(32)], o = function (e, t, n, i, o, r) {
            function a(e, n, i) {
                return function () {
                    var o = t.getElementsByClassName("jw-overlays", e.getContainer())[0];
                    o && (o.appendChild(i), i.left = o.style.left, i.top = o.style.top, n.displayArea = o)
                }
            }

            function s(e) {
                function t() {
                    var t = e.displayArea;
                    t && e.resize(t.clientWidth, t.clientHeight)
                }

                return function () {
                    t(), setTimeout(t, 400)
                }
            }

            var l = function (l, c) {
                function u() {
                    A || (A = !0, g = r.loaderstatus.COMPLETE, p.trigger(n.COMPLETE))
                }

                function d() {
                    if (!w && (c && 0 !== o.keys(c).length || u(), !A)) {
                        var i = l.getPlugins();
                        f = o.after(m, u), o.each(c, function (o, a) {
                            var s = e.getPluginName(a), l = i[s], c = l.getJS(), u = l.getTarget(), d = l.getStatus();
                            d !== r.loaderstatus.LOADING && d !== r.loaderstatus.NEW && (c && !t.versionCheck(u) && p.trigger(n.ERROR, {message: "Incompatible player version"}), f())
                        })
                    }
                }

                function h(e) {
                    if (!w) {
                        var i = "File not found";
                        e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, {message: i}), d()
                    }
                }

                var f, p = o.extend(this, i), g = r.loaderstatus.NEW, A = !1, m = o.size(c), w = !1;
                this.setupPlugins = function (n, i) {
                    var r = [], c = l.getPlugins(), u = i.get("plugins");
                    o.each(u, function (i, l) {
                        var d = e.getPluginName(l), h = c[d], f = h.getFlashPath(), p = h.getJS(), g = h.getURL();
                        if (f) {
                            var A = o.extend({name: d, swf: f, pluginmode: h.getPluginmode()}, i);
                            r.push(A)
                        }
                        var m = t.tryCatch(function () {
                            if (p && u[g]) {
                                var e = document.createElement("div");
                                e.id = n.id + "_" + d, e.className = "jw-plugin jw-reset";
                                var t = o.extend({}, u[g]), i = h.getNewInstance(n, t, e);
                                i.addToPlayer = a(n, i, e), i.resizeHandler = s(i), n.addPlugin(d, i, e)
                            }
                        });
                        m instanceof t.Error && t.log("ERROR: Failed to load " + d + ".")
                    }), i.set("flashPlugins", r)
                }, this.load = function () {
                    if (t.exists(c) && "object" !== t.typeOf(c)) return void d();
                    g = r.loaderstatus.LOADING, o.each(c, function (e, i) {
                        if (t.exists(i)) {
                            var o = l.addPlugin(i);
                            o.on(n.COMPLETE, d), o.on(n.ERROR, h)
                        }
                    });
                    var e = l.getPlugins();
                    o.each(e, function (e) {
                        e.load()
                    }), d()
                }, this.destroy = function () {
                    w = !0, this.off()
                }, this.getStatus = function () {
                    return g
                }
            };
            return l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(46), n(17), n(45)], o = function (e, t) {
            function n(e) {
                var t = new Date, n = t.getFullYear(), i = t.getMonth() + 1, o = t.getDate(), r = t.getHours(),
                    a = t.getMinutes(), s = t.getSeconds(), l = t.getMilliseconds();
                i = i < 10 ? "0" + i : i, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, a = a < 10 ? "0" + a : a, s = s < 10 ? "0" + s : s;
                var c = n + "-" + i + "-" + o + " " + r + ":" + a + ":" + s;
                return e && (c = c + "." + l), c
            }

            function i() {
                return {
                    flashVersion: e.flashVersion(),
                    cyberPlayerVersion: t,
                    ak: s.ak || "",
                    provider: a.get("provider") ? a.get("provider").name : "",
                    config: ""
                }
            }

            function o(e) {
                var t = [];
                for (var n in e) "object" == typeof e[n] ? t.push(n + "=" + encodeURIComponent(JSON.stringify(e[n]))) : t.push(n + "=" + e[n]);
                return t.join("&")
            }

            function r(e) {
                if (!m) {
                    var t = e.action;
                    delete e.action, e.sendTime = n(), e = o(e), l && d.removeChild(l), l = document.createElement("script"), l.setAttribute("type", "text/javascript"), l.src = h + t + "?" + e, d.insertBefore(l, d.getElementsByTagName("script")[0])
                }
            }

            var a, s, l, c, u = {}, d = document.getElementsByTagName("script")[0].parentNode,
                h = "https://drm.media.baidubce.com:8888/v1/sdk-player", f = 0, p = 0, g = !1,
                A = (new Date).getTime() + "", m = !1, w = function (e, t) {
                    var o, l = {}, d = 0;
                    a = t, s = a.getConfiguration(), e.on("meta", function (e) {
                        for (var t in e.metadata) u[t] = e.metadata[t];
                        u.cdn_ip && (l = {
                            action: "/user/web/cdn",
                            url: a.get("file") || a.getCurrentItem().file,
                            cdn: u.cdn_ip
                        }, r(l))
                    }), e.on("beforePlay", function () {
                        m = !1, g = !1, o = setInterval(function () {
                            d += 100
                        }, 100)
                    }), e.on("play", function () {
                        return g ? (clearInterval(o), void(o = null)) : (o && (l = {
                            action: "/media/web/available",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            type: "play",
                            duration: d,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l), clearInterval(o), o = null), p = a.get("position"), l = {
                            action: "/user/web/play",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            videoHeight: encodeURIComponent(u.height) || "",
                            videoWidth: encodeURIComponent(u.width) || "",
                            playerHeight: s.height,
                            playerWidth: s.width,
                            duration: u.duration || "",
                            size: u.filesize || "",
                            startPosition: a.get("position"),
                            service: this.getDuration() > 0 ? "vod" : "lss",
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l), g = !0, void(c || (c = setInterval(function () {
                            l = {action: "/user/web/count", session: A, url: a.get("file") || a.getCurrentItem().file}, r(l)
                        }, 6e4), l = {
                            action: "/user/web/count",
                            session: A,
                            url: a.get("file") || a.getCurrentItem().file
                        }, r(l))))
                    }), e.on("seek", function (e) {
                        f += e.position - p, p = e.offset, l = {
                            action: "/user/web/seek",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            from: e.position,
                            to: e.offset,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l)
                    }), e.on("pause", function () {
                        f += a.get("position") - p, l = {
                            action: "/user/web/pause",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l)
                    }), e.on("idle", function (e) {
                        "complete" === e.reason && (f += a.get("duration") - p, l = {
                            action: "/user/web/end",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            playInterval: f,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l))
                    }), e.on("stop", function () {
                        m = !0, clearInterval(o), o = null, clearInterval(c), c = null, u.duration && (f += a.get("position") - p, l = {
                            action: "/user/web/end",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            playInterval: f,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l))
                    }), e.on("error", function (e) {
                        clearInterval(o), l = {
                            action: "/core/web/error",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            error: e.code,
                            errorInfo: e.message,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l)
                    }), e.on("setupError", function (e) {
                        l = {
                            action: "/core/web/error",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            error: e.code,
                            errorInfo: e.message,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l)
                    });
                    var h, w;
                    e.on("alive", function () {
                        h = (new Date).getTime()
                    }), e.on("liveStop", function () {
                        w = (new Date).getTime(), l = {
                            action: "/user/web/end",
                            videoUrl: a.get("file") || a.getCurrentItem().file,
                            playInterval: (w - h) / 1e3,
                            time: n(!0),
                            sessionTime: A,
                            env: i()
                        }, r(l)
                    });
                    var v, y = !0, E = !1, j = 0, b = 0;
                    e.on("alive", function () {
                        return E = !0, y ? void(y = !1) : void(v && (j = (new Date).getTime() - v, b++, l = {
                            action: "/user/web/buffer",
                            session: A,
                            url: a.get("file") || a.getCurrentItem().file,
                            bt: j,
                            bc: b,
                            env: i()
                        }, r(l), v = null))
                    }), e.on("noLiveStream", function () {
                        E && (v || (v = (new Date).getTime()))
                    })
                };
            return w
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(19), n(43)], o = function (e, t) {
            var n = function (n) {
                this.addPlugin = function (i) {
                    var o = e.getPluginName(i);
                    return n[o] || (n[o] = new t(i)), n[o]
                }, this.getPlugins = function () {
                    return n
                }
            };
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(29), n(28)], o = function (e, t) {
            var n = {html5: e, flash: t};
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(48), n(2), n(30)], o = function (e, t, n, i) {
            function o(n) {
                var i = n.currentTarget.activeCues;
                if (i && i.length) {
                    var o = i[i.length - 1].startTime, r = [];
                    if (e.each(i, function (e) {
                        e.startTime < o || (e.data ? r.push(e) : e.text && this.trigger("meta", {
                            metadataTime: o,
                            metadata: JSON.parse(e.text)
                        }))
                    }, this), r.length) {
                        var a = t.parseID3(r);
                        this.trigger("meta", {metadataTime: o, metadata: a})
                    }
                }
            }

            function r() {
                var e = this.video.textTracks;
                if (E = -1, e) {
                    if (v || u(), e.length) {
                        var t = 0, n = e.length;
                        for (j = 0, t; t < n; t++) {
                            var i = e[t];
                            if (!y[t + i.kind]) if ("metadata" === i.kind) i.oncuechange = o.bind(this), i.mode = "showing", y[t + i.kind] = i, "ID3 Metadata" === i.label && j++; else if ("subtitles" === i.kind || "captions" === i.kind) {
                                var r = i.mode;
                                if (i.mode = "hidden", !i.cues.length && "caterpillar" === this.getName().name && "Unknown CC" === i.label) continue;
                                i.mode = r, v.push(i), y[t + i.kind] = i, "Unknown CC" === i.label && j++
                            }
                        }
                    }
                    this.addTracksListener(e, "change", g), v && v.length && this.trigger("subtitlesTracks", {tracks: v})
                }
            }

            function a(e) {
                var t = n.isChrome() || n.isIOS() || n.isSafari();
                !this._isSDK && t && e && (s.call(this, e) || (m(), i.emptyElement(this.video), l(), this.itemTracks = e, c.call(this, e)))
            }

            function s(e) {
                return e === this.itemTracks && v && v.length === j + this.itemTracks.length
            }

            function l() {
                if (v) {
                    var t = e.filter(v, function (e) {
                        return "Unknown CC" === e.label || "ID3 Metadata" === e.label
                    });
                    u(), e.each(t, function (e, t) {
                        y[t + e] = e
                    }), v = t
                }
            }

            function c(e) {
                if (e) {
                    var t = !1;
                    v || u();
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        if (/\.(?:web)?vtt(?:\?.*)?$/i.test(o.file)) {
                            if (/subtitles|captions|descriptions|chapters|metadata/i.test(o.kind)) {
                                t || !this.video.hasAttribute("crossorigin") && n.crossdomain(o.file) && (this.video.setAttribute("crossorigin", "anonymous"), t = !0);
                                var r = document.createElement("track");
                                r.src = o.file, r.kind = o.kind, r.srclang = o.language || "", r.label = o.label, r.mode = "disabled", r.id = o.defaulttrack ? "default" : "", this.video.appendChild(r)
                            }
                        } else v.push(o), y[i + o.kind] = r
                    }
                }
            }

            function u() {
                v = [], y = {}
            }

            function d(t) {
                v && (0 === t && e.each(v, function (e) {
                    e.mode = "disabled"
                }), E !== t - 1 && (m(), E = t - 1, v[E] && (v[E].mode = "showing"), this.trigger("subtitlesTrackChanged", {
                    currentTrack: E + 1,
                    tracks: v
                })))
            }

            function h() {
                return E
            }

            function f(e, t, n) {
                n = n.bind(this), e.addEventListener ? e.addEventListener(t, n) : e["on" + t] = n
            }

            function p(e, t, n) {
                e && (e.removeEventListener ? e.removeEventListener(t, n) : e["on" + t] = null)
            }

            function g() {
                if (v) {
                    var e = -1, t = 0;
                    for (t; t < v.length; t++) if ("showing" === v[t].mode) {
                        e = t;
                        break
                    }
                    this.setSubtitlesTrack(e + 1)
                } else this.setTextTracks()
            }

            function A() {
                v = null, y = null, j = 0
            }

            function m() {
                v && v[E] && (v[E].mode = "disabled")
            }

            var w = {
                addTracksListener: f,
                clearTracks: A,
                disableTextTrack: m,
                getSubtitlesTrack: h,
                removeTracksListener: p,
                setTextTracks: r,
                setupSideloadedTracks: a,
                setSubtitlesTrack: d,
                textTrackChangeHandler: g
            }, v = null, y = null, E = -1, j = 0;
            return w
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(3), n(1)], o = function (e, t, n) {
            function i(e, t, n) {
                var i = document.createElement("param");
                i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
            }

            function o(o, r, l, c, u, d) {
                var h;
                if (c = c || "opaque", e.isMSIE() || e.isPoorIE()) {
                    var f = document.createElement("div");
                    r.appendChild(f);
                    var p = u.file;
                    f.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + l + '" name="' + l + '" tabindex="0"><param name="movie" value="' + o + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + c + '"><param name="bgcolor" value="' + s + '"><param name="menu" value="false">' + (e.isPoorIE() || d ? '<param name="flashVars" value="' + (p ? "file=" + p + "&" : "") + 'enableControlbar=true">' : "") + "</object>";
                    for (var g = r.getElementsByTagName("object"), A = g.length; A--;) g[A].id === l && (h = g[A])
                } else h = document.createElement("object"), h.setAttribute("type", "application/x-shockwave-flash"), h.setAttribute("data", o), h.setAttribute("width", "100%"), h.setAttribute("height", "100%"), h.setAttribute("bgcolor", s), h.setAttribute("id", l), h.setAttribute("name", l), i(h, "allowfullscreen", "true"), i(h, "allowscriptaccess", "always"), i(h, "wmode", c), i(h, "menu", "false"), d && i(h, "flashVars", "enableControlbar=true"), r.appendChild(h, r);
                return h.className = "jw-swf jw-reset", h.style.display = "block", h.style.position = "absolute", h.style.left = 0, h.style.right = 0, h.style.top = 0, h.style.bottom = 0, n.extend(h, t), h.queueCommands = !0, h.triggerFlash = function (t) {
                    var i = this;
                    if ("setup" !== t && i.queueCommands || !i.__externalCall) {
                        for (var o = i.__commandQueue, r = o.length; r--;) o[r][0] === t && o.splice(r, 1);
                        return o.push(Array.prototype.slice.call(arguments)), i
                    }
                    var s = Array.prototype.slice.call(arguments, 1), l = e.tryCatch(function () {
                        if (s.length) {
                            for (var e = s.length; e--;) "object" == typeof s[e] && n.each(s[e], a);
                            var o = JSON.stringify(s);
                            i.__externalCall(t, o)
                        } else i.__externalCall(t)
                    });
                    return l instanceof e.Error && (console.error(t, l), "setup" === t) ? (l.name = "Failed to setup flash", l) : i
                }, h.__commandQueue = [], h
            }

            function r(e) {
                e && e.parentNode && (e.style.display = "none", e.parentNode.removeChild(e))
            }

            function a(t, n, i) {
                (e.isPoorIE() && t && t.childNodes || window.HTMLElement && t instanceof window.HTMLElement) && delete i[n]
            }

            var s = "#000000";
            return {embed: o, remove: r}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            return {
                hasClass: function (e, t) {
                    var n = " " + t + " ";
                    return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(15), n(1), n(33), n(31), n(17)], o = function (e, t, n, i, o) {
            var r = {};
            return r.repo = t.memoize(function () {
                var t = o.split("+")[0], i = e.repo + t + "/";
                return n.isHTTPS() ? i.replace(/^http:/, "https:") : i
            }), r.versionCheck = function (e) {
                var t = ("0" + e).split(/\W/), n = o.split(/\W/), i = parseFloat(t[0]), r = parseFloat(n[0]);
                return !(i > r || i === r && parseFloat("0" + t[1]) > parseFloat(n[1]))
            }, r.loadFrom = function () {
                return r.repo()
            }, r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            var e = {};
            return e.getElementsByClassName = function (e, t, n) {
                if (t = t || document, n = n || "*", t.getElementsByClassName) return t.getElementsByClassName(e);
                for (var i = [], o = t.getElementsByTagName(n), r = o.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), s = 0; s < r; s++) a.test(o[s].className) && i.push(o[s]);
                return i
            }, e.addEventListener = function (e, t, n, i) {
                e = e || document, i = i || !1, e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent("on" + t, n)
            }, e.removeEventListener = function (e, t, n, i) {
                e = e || document, i = i || !1, e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent("on" + t, n)
            }, e.arrayFilter = function () {
                Array.prototype.filter || (Array.prototype.filter = function (e) {
                    if (void 0 === this || null === this) throw TypeError();
                    var t = Object(this), n = t.length >>> 0;
                    if ("function" != typeof e) throw TypeError();
                    var i, o = [], r = arguments[1];
                    for (i = 0; i < n; i++) if (i in t) {
                        var a = t[i];
                        e.call(r, a, i, t) && o.push(a)
                    }
                    return o
                })
            }, e.funcBind = function () {
                Function.prototype.bind || (Function.prototype.bind = function (e) {
                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var t = Array.prototype.slice.call(arguments, 1), n = this, i = function () {
                    }, o = function () {
                        return n.apply(this instanceof i && e ? this : e || window, t.concat(Array.prototype.slice.call(arguments)))
                    };
                    return i.prototype = this.prototype, o.prototype = new i, o
                })
            }, e.arrayFilter(), e.funcBind(), e
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(3)], o = function (e, t) {
            var n = e.extend({
                get: function (e) {
                    return this.attributes = this.attributes || {}, this.attributes[e]
                }, set: function (e, t) {
                    if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
                        var n = this.attributes[e];
                        this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
                    }
                }, clone: function () {
                    return e.clone(this.attributes)
                }
            }, t);
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            var e = function (e, n, i) {
                if (n = n || this, i = i || [], window.jwplayer && window.jwplayer.debug) return e.apply(n, i);
                try {
                    return e.apply(n, i)
                } catch (o) {
                    return new t(e.name, o)
                }
            }, t = function (e, t) {
                this.name = e, this.message = t.message || t.toString(), this.error = t
            };
            return {tryCatch: e, Error: t}
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [], o = function () {
            return document.createElement("video")
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(52), n(2), n(1), n(7), n(16)], o = function (e, t, n, i, o) {
            var r = function (e, t) {
                this.model = e, this.api = t, this.imageUrl = "", this.setup(), this.isHide = !0, this.startAdvPlayed = !1
            };
            return n.extend(r.prototype, {
                setup: function () {
                    var n = e();
                    this.el = t.createElement(n);
                    var i = this;
                    t.addEventListener(this.el, "click", function () {
                        window.open(i.imageUrl)
                    }, !1)
                }, loadAdv: function (e) {
                    var i = this.model.get("imageAdvs");
                    if (i && i[e] && i[e].image) {
                        var r = i[e].image, a = t.getElementsByClassName("jw-media", this.api.getContainer())[0],
                            s = this,
                            l = {display: "block", "z-index": 1e3, width: "100%", height: "100%", top: 0, left: 0};
                        if (n.isString(r) ? (r = encodeURI(r), l.backgroundImage = 'url("' + r + '")') : l.backgroundImage = "", "end" === e && (l["z-index"] = 0), "pause" === e) {
                            var c = a ? a.clientHeight : this.model.get("height"),
                                u = a ? a.clientWidth : this.model.get("width");
                            l.width = "400px", l.height = "300px", l.top = (c - 300) / 2, l.left = (u - 400) / 2
                        }
                        o.style(this.el, l);
                        var d = t.getElementsByClassName("adv-close", this.el)[0],
                            h = t.getElementsByClassName("adv-countdown", this.el)[0];
                        if (d.style.display = "none", h.style.display = "none", "start" === e) {
                            var f = i[e].time <= 60 ? i[e].time : 60;
                            h.style.display = "block", h.innerHTML = "广告: " + f + "秒"
                        }
                        "pause" === e && (d.addEventListener("click", function (e) {
                            s.el.style.display = "none", e.stopPropagation()
                        }, !1), d.style.display = "block"), this.imageUrl = i[e].url, this.element() && this.api.getContainer().replaceChild(this.el, this.element()), this.isHide = !1
                    }
                }, beginStartAdv: function () {
                    if (this.startAdvPlayed) return void this.model.loadVideo();
                    var e = this.model.get("imageAdvs").start;
                    this.loadAdv("start");
                    var n = e.time <= 60 ? e.time : 60, i = this.element(), o = this, r = setInterval(function () {
                        if (n--, n > 0) {
                            var e = "广告: " + n + "秒";
                            t.getElementsByClassName("adv-countdown", i)[0].innerHTML = e
                        } else i.style.display = "none", clearInterval(r), o.isHide = !0, o.startAdvPlayed = !0, o.model.loadVideo()
                    }, 1e3)
                }, element: function () {
                    var e = this.api.getContainer();
                    return t.getElementsByClassName("jw-adv", e).length > 0 ? t.getElementsByClassName("jw-adv", e)[0] : this.el
                }, isHidden: function () {
                    return this.isHide
                }, hide: function () {
                    this.isHide = !0, this.element().style.display = "none"
                }, resizePauseAdv: function (e, t) {
                    o.style(this.element(), {top: (t - 300) / 2, left: (e - 400) / 2})
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(16), n(6), n(1)], o = function (e, t, n, i) {
            var o = t.style, r = {
                back: !0,
                fontSize: 15,
                fontFamily: "Arial,sans-serif",
                fontOpacity: 100,
                color: "#FFF",
                backgroundColor: "#000",
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: "#FFF",
                windowOpacity: 0,
                preprocessor: i.identity
            }, a = function (a) {
                function s(t) {
                    t = t || "";
                    var n = "jw-captions-window jw-reset";
                    t ? (v.innerHTML = t, w.className = n + " jw-captions-window-active") : (w.className = n, e.empty(v))
                }

                function l(e) {
                    A = e, u(p, A)
                }

                function c(e, t) {
                    var n = e.source, o = t.metadata;
                    return n ? !(!o || !i.isNumber(o[n])) && o[n] : t.position
                }

                function u(e, t) {
                    if (e && e.data && t) {
                        var n = c(e, t);
                        if (n !== !1) {
                            var i = e.data;
                            if (!(g >= 0 && d(i, g, n))) {
                                for (var o = -1, r = 0; r < i.length; r++) if (d(i, r, n)) {
                                    o = r;
                                    break
                                }
                                o === -1 ? s("") : o !== g && (g = o, s(y.preprocessor(i[g].text)))
                            }
                        }
                    }
                }

                function d(e, t, n) {
                    return e[t].begin <= n && (!e[t].end || e[t].end >= n) && (t === e.length - 1 || e[t + 1].begin >= n)
                }

                function h(e, n, i) {
                    if (t.css("#" + e + " .jw-video::-webkit-media-text-track-display", n, e), t.css("#" + e + " .jw-video::cue", i, e), i.backgroundColor) {
                        var o = "{background-color: " + i.backgroundColor + " !important;}";
                        t.css("#" + e + " .jw-video::-webkit-media-text-track-display-backdrop", o, e)
                    }
                }

                function f(e, n, i) {
                    var o = t.hexToRgba("#000000", i);
                    "dropshadow" === e ? n.textShadow = "0 2px 1px " + o : "raised" === e ? n.textShadow = "0 0 5px " + o + ", 0 1px 5px " + o + ", 0 2px 5px " + o : "depressed" === e ? n.textShadow = "0 -2px 1px " + o : "uniform" === e && (n.textShadow = "-2px 0 1px " + o + ",2px 0 1px " + o + ",0 -2px 1px " + o + ",0 2px 1px " + o + ",-1px 1px 1px " + o + ",1px 1px 1px " + o + ",1px -1px 1px " + o + ",1px 1px 1px " + o)
                }

                var p, g, A, m, w, v, y = {};
                m = document.createElement("div"), m.className = "jw-captions jw-reset", this.show = function () {
                    m.className = "jw-captions jw-captions-enabled jw-reset"
                }, this.hide = function () {
                    m.className = "jw-captions jw-reset"
                }, this.populate = function (e) {
                    return g = -1, p = e, e ? void u(e, A) : void s("")
                }, this.resize = function () {
                    var e = m.clientWidth, t = Math.pow(e / 400, .6);
                    if (t) {
                        var n = y.fontSize * t;
                        o(m, {fontSize: Math.round(n) + "px"})
                    }
                }, this.setup = function (e, n) {
                    if (w = document.createElement("div"), v = document.createElement("span"), w.className = "jw-captions-window jw-reset", v.className = "jw-captions-text jw-reset", y = i.extend({}, r, n), n) {
                        var s = y.fontOpacity, l = y.windowOpacity, c = y.edgeStyle, u = y.backgroundColor, d = {},
                            p = {
                                color: t.hexToRgba(y.color, s),
                                fontFamily: y.fontFamily,
                                fontStyle: y.fontStyle,
                                fontWeight: y.fontWeight,
                                textDecoration: y.textDecoration
                            };
                        l && (d.backgroundColor = t.hexToRgba(y.windowColor, l)), f(c, p, s), y.back ? p.backgroundColor = t.hexToRgba(u, y.backgroundOpacity) : null === c && f("uniform", p), o(w, d), o(v, p), h(e, d, p)
                    }
                    w.appendChild(v), m.appendChild(w), this.populate(a.get("captionsTrack")), a.set("captions", y)
                }, this.clear = function () {
                    e.empty(m)
                }, this.element = function () {
                    return m
                }, a.on("change:playlistItem", function () {
                    A = null, g = -1, s("")
                }, this), a.on("change:captionsTrack", function (e, t) {
                    this.populate(t)
                }, this), a.mediaController.on("seek", function () {
                    g = -1
                }, this), a.mediaController.on("time seek", l, this), a.mediaController.on("subtitlesTrackData", function () {
                    u(p, A)
                }, this), a.on("change:state", function (e, t) {
                    switch (t) {
                        case n.IDLE:
                        case n.ERROR:
                        case n.COMPLETE:
                            this.hide();
                            break;
                        default:
                            this.show()
                    }
                }, this)
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(7), n(4), n(3), n(1)], o = function (e, t, n, i) {
            var o = function (o, r, a) {
                function s(e) {
                    if (!o.get("flashBlocked")) return u ? void u(e) : void p.trigger(e.type === t.touchEvents.CLICK ? "click" : "tap")
                }

                function l() {
                    return d ? void d() : void p.trigger("doubleClick")
                }

                var c, u, d, h = {enableDoubleTap: !0, useMove: !0};
                i.extend(this, n), c = r, this.element = function () {
                    return c
                };
                var f = new e(c, i.extend(h, a));
                f.on("click tap", s), f.on("doubleClick doubleTap", l), f.on("move", function () {
                    p.trigger("move")
                }), f.on("over", function () {
                    p.trigger("over")
                }), f.on("out", function () {
                    p.trigger("out")
                }), this.clickHandler = s;
                var p = this;
                this.setAlternateClickHandlers = function (e, t) {
                    u = e, d = t || null
                }, this.revertAlternateClickHandlers = function () {
                    u = null, d = null
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2), n(22)], o = function (e, t, n) {
            function i(e, t) {
                this.time = e, this.text = t, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset"
            }

            e.extend(i.prototype, {
                align: function (e) {
                    if ("%" === this.time.toString().slice(-1)) this.pct = this.time; else {
                        var t = this.time / e * 100;
                        this.pct = t + "%"
                    }
                    this.el.style.left = this.pct
                }
            });
            var o = {
                loadChapters: function (e) {
                    t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, {plainText: !0})
                }, chaptersLoaded: function (t) {
                    var i = n(t.responseText);
                    e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues())
                }, chaptersFailed: function () {
                }, addCue: function (e) {
                    this.cues.push(new i(e.begin, e.text))
                }, drawCues: function () {
                    var n = this._model.mediaModel.get("duration");
                    if (!n || n <= 0) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                    var i = this;
                    e.each(this.cues, function (e) {
                        e.align(n), t.addEventListener(e.el, "mouseover", function () {
                            i.activeCue = e
                        }), t.addEventListener(e.el, "mouseout", function () {
                            i.activeCue = null
                        }), i.elementRail.appendChild(e.el)
                    })
                }, resetChapters: function () {
                    e.each(this.cues, function (e) {
                        e.el.parentNode && e.el.parentNode.removeChild(e.el)
                    }, this), this.cues = []
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(18), n(2), n(1), n(7)], o = function (e, t, n, i) {
            var o = e.extend({
                constructor: function (t) {
                    e.call(this, t), this.container.className = "jw-overlay-horizontal jw-reset", this.openClass = "jw-open-drawer", this.componentType = "drawer"
                }, setup: function (e, o) {
                    this.iconUI || (this.iconUI = new i(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this)), this.reset(), e = n.isArray(e) ? e : [], this.activeContents = n.filter(e, function (e) {
                        return e.isActive
                    }), t.toggleClass(this.el, "jw-hidden", !o || this.activeContents.length < 2), o && this.activeContents.length > 1 && (t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener), n.each(e, function (e) {
                        this.container.appendChild(e.el)
                    }, this))
                }, reset: function () {
                    t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(18), n(2), n(1), n(7), n(57)], o = function (e, t, n, i, o) {
            var r = e.extend({
                setup: function (e, r, a) {
                    this.iconUI || (this.iconUI = new i(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this),
                        this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, "jw-hidden", e.length < 2);
                    var s = e.length > 2 || 2 === e.length && a && a.toggle === !1, l = !s && 2 === e.length;
                    if (t.toggleClass(this.el, "jw-toggle", l), t.toggleClass(this.el, "jw-button-color", !l), this.isActive = s || l, s) {
                        t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                        var c = o(e), u = t.createElement(c);
                        this.addContent(u), this.contentUI = new i(this.content).on("click tap", this.selectListener)
                    } else l && this.iconUI.on("click tap", this.toggleValueListener);
                    this.selectItem(r)
                }, toggleValue: function () {
                    this.trigger("toggleValue")
                }, select: function (e) {
                    if (e.target.parentElement === this.content) {
                        var i = t.classList(e.target), o = n.find(i, function (e) {
                            return 0 === e.indexOf("jw-item")
                        });
                        o && (this.trigger("select", parseInt(o.split("-")[2])), this.closeTooltipListener())
                    }
                }, selectItem: function (e) {
                    if (this.content) for (var n = 0; n < this.content.children.length; n++) t.toggleClass(this.content.children[n], "jw-active-option", e === n); else t.toggleClass(this.el, "jw-off", 0 === e)
                }, reset: function () {
                    t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1), n(18), n(7), n(59)], o = function (e, t, n, i, o) {
            var r = n.extend({
                setup: function (n, o) {
                    if (this.iconUI || (this.iconUI = new i(this.el, {useHover: !0}), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.onSelect.bind(this)), this.reset(), n = t.isArray(n) ? n : [], e.toggleClass(this.el, "jw-hidden", n.length < 2), n.length >= 2) {
                        this.iconUI = new i(this.el, {useHover: !0}).on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                        var r = this.menuTemplate(n, o), a = e.createElement(r);
                        this.addContent(a), this.contentUI = new i(this.content), this.contentUI.on("click tap", this.selectListener)
                    }
                    this.originalList = n
                }, menuTemplate: function (n, i) {
                    var r = t.map(n, function (t, n) {
                        var o = t.title ? e.createElement(t.title).textContent : "";
                        return {active: n === i, label: n + 1 + ".", title: o}
                    });
                    return o(r)
                }, onSelect: function (n) {
                    var i = n.target;
                    if ("UL" !== i.tagName) {
                        "LI" !== i.tagName && (i = i.parentElement);
                        var o = e.classList(i), r = t.find(o, function (e) {
                            return 0 === e.indexOf("jw-item")
                        });
                        r && (this.trigger("select", parseInt(r.split("-")[2])), this.closeTooltip())
                    }
                }, selectItem: function (e) {
                    this.setup(this.originalList, e)
                }, reset: function () {
                    this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2), n(22)], o = function (e, t, n) {
            function i(e) {
                this.begin = e.begin, this.end = e.end, this.img = e.text
            }

            var o = {
                loadThumbnails: function (e) {
                    e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {plainText: !0}))
                }, thumbnailsLoaded: function (t) {
                    var o = n(t.responseText);
                    e.isArray(o) && (e.each(o, function (e) {
                        this.thumbnails.push(new i(e))
                    }, this), this.drawCues())
                }, thumbnailsFailed: function () {
                }, chooseThumbnail: function (t) {
                    var n = e.sortedIndex(this.thumbnails, {end: t}, e.property("end"));
                    n >= this.thumbnails.length && (n = this.thumbnails.length - 1);
                    var i = this.thumbnails[n].img;
                    return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
                }, loadThumbnail: function (t) {
                    var n = this.chooseThumbnail(t),
                        i = {display: "block", margin: "0 auto", backgroundPosition: "0 0"}, o = n.indexOf("#xywh");
                    if (o > 0) try {
                        var r = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
                        n = r[1], i.backgroundPosition = r[2] * -1 + "px " + r[3] * -1 + "px", i.width = r[4], i.height = r[5]
                    } catch (a) {
                        return
                    } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = e.bind(function () {
                        this.individualImage.onload = null, this.timeTip.image({
                            width: this.individualImage.width,
                            height: this.individualImage.height
                        })
                    }, this), this.individualImage.src = n);
                    return i.backgroundImage = 'url("' + n + '")', i
                }, showThumbnail: function (e) {
                    this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e))
                }, resetThumbnails: function () {
                    this.timeTip.image({backgroundImage: "", width: 0, height: 0}), this.thumbnails = []
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2), n(15), n(34), n(18), n(117), n(121)], o = function (e, t, n, i, o, r, a) {
            var s = o.extend({
                setup: function () {
                    this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-reset";
                    var e = document.createElement("div");
                    e.className = "jw-time-tip jw-background-color jw-reset", e.appendChild(this.img), e.appendChild(this.text), t.removeClass(this.el, "jw-hidden"), this.addContent(e)
                }, image: function (e) {
                    t.style(this.img, e)
                }, update: function (e) {
                    this.text.innerHTML = e
                }
            }), l = i.extend({
                constructor: function (t, n) {
                    this._model = t, this._api = n, this.timeTip = new s("jw-tooltip-time"), this.timeTip.setup(), this.cues = [], this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this), i.call(this, "jw-slider-time", "horizontal")
                }, setup: function () {
                    i.prototype.setup.apply(this, arguments), this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), t.addEventListener(this.el, "mousemove", this.showTimeTooltip.bind(this), !1), t.addEventListener(this.el, "mouseout", this.hideTimeTooltip.bind(this), !1)
                }, limit: function (i) {
                    if (this.activeCue && e.isNumber(this.activeCue.pct)) return this.activeCue.pct;
                    var o = this._model.get("duration"), r = t.adaptiveType(o);
                    if ("DVR" === r) {
                        var a = (1 - i / 100) * o, s = this._model.get("position"),
                            l = Math.min(a, Math.max(n.dvrSeekLimit, s)), c = 100 * l / o;
                        return 100 - c
                    }
                    return i
                }, update: function (e) {
                    this.seekTo = e, this.seekThrottled(), i.prototype.update.apply(this, arguments)
                }, dragStart: function () {
                    this._model.set("scrubbing", !0), i.prototype.dragStart.apply(this, arguments)
                }, dragEnd: function () {
                    i.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
                }, onSeeked: function () {
                    this._model.get("scrubbing") && this.performSeek()
                }, onBuffer: function (e, t) {
                    this.updateBuffer(t)
                }, onPosition: function (e, t) {
                    this.updateTime(t, e.get("duration"))
                }, onDuration: function (e, t) {
                    this.updateTime(e.get("position"), t)
                }, updateTime: function (e, n) {
                    var i = 0;
                    if (n) {
                        var o = t.adaptiveType(n);
                        "DVR" === o ? i = (n - e) / n * 100 : "VOD" === o && (i = e / n * 100)
                    }
                    this.render(i)
                }, onPlaylistItem: function (t, n) {
                    this.reset(), t.mediaModel.on("seeked", this.onSeeked, this);
                    var i = n.tracks;
                    e.each(i, function (e) {
                        e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file)
                    }, this)
                }, performSeek: function () {
                    var e, n = this.seekTo, i = this._model.get("duration"), o = t.adaptiveType(i);
                    0 === i ? this._api.play() : "DVR" === o ? (e = (100 - n) / 100 * i, this._api.seek(e)) : (e = n / 100 * i, this._api.seek(Math.min(e, i - .25)))
                }, showTimeTooltip: function (e) {
                    var i = this._model.get("duration");
                    if (0 !== i) {
                        var o = t.bounds(this.elementRail), r = e.pageX ? e.pageX - o.left : e.x;
                        r = t.between(r, 0, o.width);
                        var a = r / o.width, s = i * a;
                        i < 0 && (s = i - s);
                        var l;
                        if (this.activeCue) l = this.activeCue.text; else {
                            var c = !0;
                            l = t.timeFormat(s, c), i < 0 && s > n.dvrSeekLimit && (l = "Live")
                        }
                        this.timeTip.update(l), this.showThumbnail(s), t.addClass(this.timeTip.el, "jw-open"), this.timeTip.el.style.left = 100 * a + "%"
                    }
                }, hideTimeTooltip: function () {
                    t.removeClass(this.timeTip.el, "jw-open")
                }, reset: function () {
                    this.resetChapters(), this.resetThumbnails()
                }
            });
            return e.extend(l.prototype, r, a), l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(18), n(34), n(7), n(2)], o = function (e, t, n, i) {
            var o = e.extend({
                constructor: function (o, r) {
                    this._model = o, e.call(this, r), this.volumeSlider = new t("jw-slider-volume jw-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.addVolumeValueTip(), this.volumeSlider.on("update", function (e) {
                        this.trigger("update", e)
                    }, this), i.removeClass(this.el, "jw-hidden"), new n(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this)
                }, toggleValue: function () {
                    this.trigger("toggleValue")
                }, addVolumeValueTip: function () {
                    var e = document.createElement("div");
                    e.className = "jw-volume-value-tip", i.getElementsByClassName("jw-overlay", this.el)[0].appendChild(e), this.valuetip = e
                }
            });
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1), n(3), n(15), n(7), n(34), n(122), n(119), n(120), n(123), n(118)], o = function (e, t, n, i, o, r, a, s, l, c, u) {
            function d(e, t) {
                var n = document.createElement("div");
                return n.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + e, n.style.display = "none", t && new o(n).on("click tap", function () {
                    t()
                }), {
                    element: function () {
                        return n
                    }, toggle: function (e) {
                        e ? this.show() : this.hide()
                    }, show: function () {
                        n.style.display = ""
                    }, hide: function () {
                        n.style.display = "none"
                    }
                }
            }

            function h(e) {
                var t = document.createElement("span");
                return t.className = "jw-text jw-reset " + e, t
            }

            function f(e) {
                var t = new s(e);
                return t
            }

            function p(e, n) {
                var i = document.createElement("div");
                return i.className = "jw-group jw-controlbar-" + e + "-group jw-reset", t.each(n, function (e) {
                    e.element && (e = e.element()), i.appendChild(e)
                }), i
            }

            function g(t, n) {
                this._api = t, this._model = n, this._isMobile = e.isMobile(), this._compactModeMaxSize = 400, this._maxCompactWidth = -1, this.setup()
            }

            return t.extend(g.prototype, n, {
                setup: function () {
                    this.build(), this.initialize()
                }, build: function () {
                    var e, n, i, o, s = new a(this._model, this._api), g = new u("jw-icon-more");
                    this._model.get("visualplaylist") !== !1 && (e = new l("jw-icon-playlist")), this._isMobile || (o = d("jw-icon-volume", this._api.setMute), n = new r("jw-slider-volume", "horizontal"), i = new c(this._model, "jw-icon-volume")), this.elements = {
                        alt: h("jw-text-alt"),
                        barLogo: d("jw-icon-barlogo", function () {
                            window.open("https://cloud.baidu.com/solution/media/index.html")
                        }),
                        play: d("jw-icon-playback", this._api.play.bind(this, {reason: "interaction"})),
                        prev: d("jw-icon-prev", this._api.playlistPrev.bind(this, {reason: "interaction"})),
                        next: d("jw-icon-next", this._api.playlistNext.bind(this, {reason: "interaction"})),
                        playlist: e,
                        elapsed: h("jw-text-elapsed"),
                        time: s,
                        duration: h("jw-text-duration"),
                        drawer: g,
                        hd: f("jw-icon-hd"),
                        cc: f("jw-icon-cc"),
                        audiotracks: f("jw-icon-audio-tracks"),
                        mute: o,
                        volume: n,
                        volumetooltip: i,
                        cast: d("jw-icon-cast jw-off", this._api.castToggle),
                        fullscreen: d("jw-icon-fullscreen", this._api.setFullscreen)
                    }, this.layout = {
                        left: [this.elements.barLogo, this.elements.play, this.elements.prev, this.elements.playlist, this.elements.next, this.elements.elapsed],
                        center: [this.elements.time, this.elements.alt],
                        right: [this.elements.duration, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.drawer, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen],
                        drawer: [this.elements.hd, this.elements.cc, this.elements.audiotracks]
                    }, this.menus = t.compact([this.elements.playlist, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = t.compact(this.layout.left), this.layout.center = t.compact(this.layout.center), this.layout.right = t.compact(this.layout.right), this.layout.drawer = t.compact(this.layout.drawer), this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-background-color jw-reset", this.elements.left = p("left", this.layout.left), this.elements.center = p("center", this.layout.center), this.elements.right = p("right", this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right)
                }, initialize: function () {
                    this._model.get("controlbar").barLogo && this.elements.barLogo.show(), this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylist(this._model, this._model.get("playlist")), this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.onMediaModel(this._model, this._model.get("mediaModel")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCastActive(this._model, this._model.get("castActive")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlist", this.onPlaylist, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:castActive", this.onCastActive, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this._model.on("change:compactUI", this.onCompactUI, this), this.elements.volume && this.elements.volume.on("update", function (e) {
                        var t = e.percentage;
                        this._api.setVolume(t)
                    }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function (e) {
                        var t = e.percentage;
                        this._api.setVolume(t)
                    }, this), this.elements.volumetooltip.on("toggleValue", function () {
                        this._api.setMute()
                    }, this)), this.elements.playlist && this.elements.playlist.on("select", function (e) {
                        this._model.once("itemReady", function () {
                            this._api.play({reason: "interaction"})
                        }, this), this._api.load(e)
                    }, this), this.elements.hd.on("select", function (e) {
                        this._model.setCurrentQuality(e)
                    }, this), this.elements.hd.on("toggleValue", function () {
                        this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                    }, this), this.elements.cc.on("select", function (e) {
                        this._api.setCurrentCaptions(e)
                    }, this), this.elements.cc.on("toggleValue", function () {
                        var e = this._model.get("captionsIndex");
                        this._api.setCurrentCaptions(e ? 0 : 1)
                    }, this), this.elements.audiotracks.on("select", function (e) {
                        this._model.getVideo().setCurrentAudioTrack(e)
                    }, this), new o(this.elements.duration).on("click tap", function () {
                        if ("DVR" === e.adaptiveType(this._model.get("duration"))) {
                            var t = this._model.get("position");
                            this._api.seek(Math.max(i.dvrSeekLimit, t))
                        }
                    }, this), new o(this.el).on("click tap drag", function () {
                        this.trigger("userAction")
                    }, this), this.elements.drawer.on("open-drawer close-drawer", function (t, n) {
                        e.toggleClass(this.el, "jw-drawer-expanded", n.isOpen), n.isOpen || this.closeMenus()
                    }, this), t.each(this.menus, function (e) {
                        e.on("open-tooltip", this.closeMenus, this)
                    }, this)
                }, onCaptionsList: function (e, t) {
                    var n = e.get("captionsIndex");
                    this.elements.cc.setup(t, n), this.clearCompactMode()
                }, onCaptionsIndex: function (e, t) {
                    this.elements.cc.selectItem(t)
                }, onPlaylist: function (e, t) {
                    var n = t.length > 1;
                    this.elements.next.toggle(n), this.elements.prev.toggle(n), this.elements.playlist && this.elements.playlist.setup(t, e.get("item"))
                }, onPlaylistItem: function (e) {
                    this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00", this.clearCompactMode();
                    var t = e.get("item");
                    this.elements.playlist && this.elements.playlist.selectItem(t), this.elements.audiotracks.setup()
                }, onMediaModel: function (n, i) {
                    i.on("change:levels", function (e, t) {
                        this.elements.hd.setup(t, e.get("currentLevel"), {toggle: !1}), this.clearCompactMode()
                    }, this), i.on("change:currentLevel", function (e, t) {
                        this.elements.hd.selectItem(t)
                    }, this), i.on("change:audioTracks", function (e, n) {
                        var i = t.map(n, function (e) {
                            return {label: e.name}
                        });
                        this.elements.audiotracks.setup(i, e.get("currentAudioTrack"), {toggle: !1}), this.clearCompactMode()
                    }, this), i.on("change:currentAudioTrack", function (e, t) {
                        this.elements.audiotracks.selectItem(t)
                    }, this), i.on("change:state", function (t, n) {
                        "complete" === n && (this.elements.drawer.closeTooltip(), e.removeClass(this.el, "jw-drawer-expanded"))
                    }, this)
                }, onVolume: function (e, t, n) {
                    this.renderVolume(e.get("mute"), t, n)
                }, onMute: function (e, t) {
                    this.renderVolume(t, e.get("volume"))
                }, renderVolume: function (t, n, i) {
                    var o;
                    i || (i = n), this.elements.mute && e.toggleClass(this.elements.mute.element(), "jw-off", t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), "jw-off", t)), this.elements.volumetooltip && this.elements.volumetooltip.valuetip && (o = this.elements.volumetooltip.valuetip, t ? o.innerHTML = "0%" : 100 === n && n > i && this._model.get("provider") && /^flash/.test(this._model.get("provider").name) ? o.innerHTML = "100%(按↑可以继续增大音量)" : o.innerHTML = n + "%")
                }, onCastAvailable: function (e, t) {
                    this.elements.cast.toggle(t), this.clearCompactMode()
                }, onCastActive: function (t, n) {
                    e.toggleClass(this.elements.cast.element(), "jw-off", !n)
                }, onElapsed: function (t, n) {
                    var i, o = t.get("duration");
                    i = "DVR" === e.adaptiveType(o) ? "-" + e.timeFormat(-o) : e.timeFormat(n), this.elements.elapsed.innerHTML = i
                }, onDuration: function (t, n) {
                    var i;
                    "DVR" === e.adaptiveType(n) ? (i = "Live", this.clearCompactMode()) : i = e.timeFormat(n), this.elements.duration.innerHTML = i
                }, onFullscreen: function (t, n) {
                    e.toggleClass(this.elements.fullscreen.element(), "jw-off", n)
                }, element: function () {
                    return this.el
                }, getVisibleBounds: function () {
                    var t, n = this.el, i = getComputedStyle ? getComputedStyle(n) : n.currentStyle;
                    return "table" === i.display ? e.bounds(n) : (n.style.visibility = "hidden", n.style.display = "table", t = e.bounds(n), n.style.visibility = n.style.display = "", t)
                }, setAltText: function (e) {
                    this.elements.alt.innerHTML = e
                }, addCues: function (e) {
                    this.elements.time && (t.each(e, function (e) {
                        this.elements.time.addCue(e)
                    }, this), this.elements.time.drawCues())
                }, closeMenus: function (e) {
                    t.each(this.menus, function (t) {
                        e && e.target === t.el || t.closeTooltip(e)
                    })
                }, hideComponents: function () {
                    this.closeMenus(), this.elements.drawer.closeTooltip(), e.removeClass(this.el, "jw-drawer-expanded")
                }, clearCompactMode: function () {
                    this._maxCompactWidth = -1, this._model.set("compactUI", !1), this._containerWidth && this.checkCompactMode(this._containerWidth)
                }, setCompactModeBounds: function () {
                    if (this.element().offsetWidth > 0) {
                        var t = this.elements.left.offsetWidth + this.elements.right.offsetWidth;
                        if ("LIVE" === e.adaptiveType(this._model.get("duration"))) this._maxCompactWidth = t + this.elements.alt.offsetWidth; else {
                            var n = t + (this.elements.center.offsetWidth - this.elements.time.el.offsetWidth), i = .2;
                            this._maxCompactWidth = n / (1 - i)
                        }
                    }
                }, checkCompactMode: function (e) {
                    this.setCompactModeBounds(), this._containerWidth = e, this._maxCompactWidth !== -1 && (e >= this._compactModeMaxSize && e > this._maxCompactWidth ? this._model.set("compactUI", !1) : (e < this._compactModeMaxSize || e <= this._maxCompactWidth) && this._model.set("compactUI", !0))
                }, onCompactUI: function (n, i) {
                    e.removeClass(this.el, "jw-drawer-expanded"), this.elements.drawer.setup(this.layout.drawer, i), (!i || this.elements.drawer.activeContents.length < 2) && t.each(this.layout.drawer, function (e) {
                        this.elements.right.insertBefore(e.el, this.elements.drawer.el)
                    }, this)
                }
            }), g
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(3), n(7), n(53), n(1)], o = function (e, t, n, i, o) {
            var r = function (r) {
                o.extend(this, t), this.model = r, this.el = e.createElement(i({}));
                var a = this;
                this.iconUI = new n(this.el).on("click tap", function (e) {
                    a.trigger(e.type)
                })
            };
            return o.extend(r.prototype, {
                element: function () {
                    return this.el
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(54), n(2), n(1), n(7)], o = function (e, t, n, i) {
            var o = function (e) {
                this.model = e, this.setup(), this.model.on("change:dock", this.render, this)
            };
            return n.extend(o.prototype, {
                setup: function () {
                    var n = this.model.get("dock"), o = this.click.bind(this), r = e(n);
                    this.el = t.createElement(r), new i(this.el).on("click tap", o)
                }, getDockButton: function (e) {
                    return t.hasClass(e.target, "jw-dock-button") ? e.target : t.hasClass(e.target, "jw-dock-text") ? e.target.parentElement.parentElement : e.target.parentElement
                }, click: function (e) {
                    var t = this.getDockButton(e), i = t.getAttribute("button"), o = this.model.get("dock"),
                        r = n.findWhere(o, {id: i});
                    r && r.callback && r.callback(e)
                }, render: function () {
                    var n = this.model.get("dock"), i = e(n), o = t.createElement(i);
                    this.el.innerHTML = o.innerHTML
                }, element: function () {
                    return this.el
                }
            }), o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(55)], o = function (e) {
            function t(t, n, i, o) {
                return e({id: t, skin: n, title: i, body: o})
            }

            return t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(7), n(2), n(4), n(1), n(3), n(56)], o = function (e, t, n, i, o, r) {
            var a = t.style, s = {linktarget: "_blank", margin: 8, hide: !1, position: "top-right"}, l = function (l) {
                var c, u, d = new Image, h = i.extend({}, l.get("logo"));
                return i.extend(this, o), this.setup = function (o) {
                    if (u = i.extend({}, s, h), u.hide = "true" === u.hide.toString(), c = t.createElement(r()), u.file) {
                        u.hide && t.addClass(c, "jw-hide"), t.addClass(c, "jw-logo-" + (u.position || s.position)), "top-right" === u.position && (l.on("change:dock", this.topRight, this), l.on("change:controls", this.topRight, this), this.topRight(l)), l.set("logo", u), d.onload = function () {
                            var e = {
                                backgroundImage: 'url("' + this.src + '")',
                                width: this.width,
                                height: this.height
                            };
                            if (u.margin !== s.margin) {
                                var t = /(\w+)-(\w+)/.exec(u.position);
                                3 === t.length && (e["margin-" + t[1]] = u.margin, e["margin-" + t[2]] = u.margin)
                            }
                            a(c, e), l.set("logoWidth", e.width)
                        }, d.src = u.file;
                        var f = new e(c);
                        f.on("click tap", function (e) {
                            t.exists(e) && e.stopPropagation && e.stopPropagation(), this.trigger(n.JWPLAYER_LOGO_CLICK, {
                                link: u.link,
                                linktarget: u.linktarget
                            })
                        }, this), o.appendChild(c)
                    }
                }, this.topRight = function (e) {
                    var t = e.get("controls"), n = e.get("dock"),
                        i = t && (n && n.length || e.get("sharing") || e.get("related"));
                    a(c, {top: i ? "http://static3.qianqian.com/web/static/j/3.5em" : 0})
                }, this.element = function () {
                    return c
                }, this.position = function () {
                    return u.position
                }, this.destroy = function () {
                    d.onload = null
                }, this
            };
            return l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(1), n(16)], o = function (e, t, n) {
            function i(e) {
                return e > 100 ? 30 + Math.random() * (e - 100) : e / 2
            }

            function o(e, t) {
                n.style(e, {top: i(t)})
            }

            var r = function (e, t) {
                this.model = e, this.element = t, this.times = 0, this.init()
            };
            return t.extend(r.prototype, {
                init: function () {
                    if (e.isMSIE(9)) return n.style(this.element, {display: "none"}), !1;
                    var t = this.model.get("marquee").text, i = this.model.get("marquee").color,
                        o = this.model.get("marquee").fontSize;
                    t && (this.element.innerHTML = t), i && n.style(this.element, {color: i}), o && n.style(this.element, {
                        fontSize: o,
                        lineHeight: o + 8
                    }), this.reset()
                }, start: function () {
                    return !e.isMSIE(9) && void n.style(this.element, {
                        animationPlayState: "running",
                        opacity: 1,
                        display: "block"
                    })
                }, stop: function () {
                    this.reset(), n.style(this.element, {animationPlayState: "paused", opacity: 0, display: "none"})
                }, pause: function () {
                    n.style(this.element, {animationPlayState: "paused", opacity: 0})
                }, reset: function (t, i) {
                    t = t || this.model.get("width"), i = i || this.model.get("height");
                    var r = 18, a = this.element, s = this.times % 2 === 0 ? "marquee1" : "marquee2";
                    n.animation(a, s + " " + r + "s infinite"), o(a, i), e.addEventListener(a, "webkitAnimationIteration", function () {
                        o(a, i)
                    }, !1), e.addEventListener(a, "animationiteration", function () {
                        o(a, i)
                    }, !1), this.times++
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2)], o = function (e, t) {
            function n(e, t) {
                t.off("change:mediaType", null, this), t.on("change:mediaType", function (t, n) {
                    "audio" === n && this.setImage(e.get("playlistItem").image)
                }, this)
            }

            function i(e, n) {
                var i = e.get("autostart") && !t.isMobile() || e.get("item") > 0;
                return i ? (this.setImage(null), e.off("change:state", null, this), void e.on("change:state", function (e, t) {
                    "complete" !== t && "idle" !== t && "error" !== t || this.setImage(n.image)
                }, this)) : void this.setImage(n.image)
            }

            var o = function (e) {
                this.model = e, e.on("change:playlistItem", i, this), e.on("change:mediaModel", n, this)
            };
            return e.extend(o.prototype, {
                setup: function (e) {
                    this.el = e;
                    var t = this.model.get("playlistItem");
                    t && this.setImage(t.image)
                }, setImage: function (n) {
                    var i = this.image;
                    i && (i.onload = null, this.image = null), this.model.off("change:state", null, this);
                    var o = "";
                    e.isString(n) && (o = 'url("' + n + '")', i = this.image = new Image, i.src = n), t.isPoorIE() ? this.el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + n + '",sizingMethod="scale"' : t.style(this.el, {backgroundImage: o})
                }, resize: function (e, n, i) {
                    if ("uniform" === i) {
                        var o = e / n, r = this.image, a = null;
                        if (r) {
                            if (0 === r.width) {
                                var s = this;
                                return void(r.onload = function () {
                                    s.resize(e, n, i)
                                })
                            }
                            var l = r.width / r.height;
                            Math.abs(o - l) < .09 && (a = "cover")
                        }
                        t.style(this.el, {backgroundSize: a})
                    }
                }, element: function () {
                    return this.el
                }
            }), o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(60), n(1), n(7), n(17)], o = function (e, t, n, i, o) {
            var r = function () {
            };
            return n.extend(r.prototype, {
                buildArray: function () {
                    var t = o.split("+"), n = t[0], i = {
                        items: [{
                            title: "About Cyber Player " + n,
                            featured: !0,
                            showLogo: !1,
                            link: "https://bce.baidu.com/doc/MCT/Web-SDK.html#.E6.92.AD.E6.94.BE.E5.99.A8.20Web.20SDK.20.E7.AE.80.E4.BB.8B"
                        }]
                    }, r = this.model.get("provider");
                    if (r && r.name.indexOf("flash") >= 0) {
                        var a = "Flash Version " + e.flashVersion();
                        i.items.push({title: a, link: "http://www.adobe.com/software/flash/about/"})
                    }
                    return i
                }, buildMenu: function () {
                    var n = this.buildArray();
                    return e.createElement(t(n))
                }, updateHtml: function () {
                    this.el.innerHTML = this.buildMenu().innerHTML
                }, rightClick: function (e) {
                    return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(e), !1)
                }, getOffset: function (t) {
                    var n = t.target, i = t.layerX || t.offsetX, o = t.layerY || t.offsetY;
                    if (e.isIE() && (e.hasClass(n, "jw-video") || e.hasClass(n, "jw-warning"))) return {
                        x: i,
                        y: o + 40
                    };
                    for (; n !== this.playerElement;) i += n.offsetLeft, o += n.offsetTop, n = n.parentNode;
                    return i = i <= this.playerElement.clientWidth ? i : this.playerElement.clientWidth, o = o <= this.playerElement.clientHeight ? o : this.playerElement.clientHeight, {
                        x: i,
                        y: o
                    }
                }, showMenu: function (t) {
                    var n = this.getOffset(t);
                    return this.el.style.left = n.x + "px", this.el.style.top = n.y + "px", e.addClass(this.playerElement, "jw-flag-rightclick-open"), e.addClass(this.el, "jw-open"), !1
                }, hideMenu: function () {
                    this.mouseOverContext || (e.removeClass(this.playerElement, "jw-flag-rightclick-open"), e.removeClass(this.el, "jw-open"))
                }, lazySetup: function () {
                    this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new i(this.el, {useHover: !0}).on("over", function () {
                        this.mouseOverContext = !0
                    }, this).on("out", function () {
                        this.mouseOverContext = !1
                    }, this))
                }, setup: function (t, n, i) {
                    this.playerElement = n, this.model = t, this.mouseOverContext = !1, this.layer = i, e.isPoorIE() || (n.oncontextmenu = this.rightClick.bind(this))
                }, addOffListener: function (t) {
                    e.addEventListener(t, "mousedown", this.hideMenuHandler), e.addEventListener(t, "touchstart", this.hideMenuHandler), e.addEventListener(t, "pointerdown", this.hideMenuHandler)
                }, removeOffListener: function (t) {
                    e.removeEventListener(t, "mousedown", this.hideMenuHandler), e.removeEventListener(t, "touchstart", this.hideMenuHandler), e.removeEventListener(t, "pointerdown", this.hideMenuHandler)
                }, destroy: function () {
                    this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(1), n(2)], o = function (e, t) {
            var n = function (e) {
                this.model = e, this.model.on("change:playlistItem", this.playlistItem, this)
            };
            return e.extend(n.prototype, {
                hide: function () {
                    this.el.style.display = "none"
                }, show: function () {
                    this.el.style.display = ""
                }, setup: function (e) {
                    this.el = e;
                    var t = this.el.getElementsByTagName("div");
                    this.title = t[0], this.description = t[1], this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem")), this.model.on("change:logoWidth", this.update, this), this.model.on("change:dock", this.update, this)
                }, update: function (e) {
                    var n = {paddingLeft: 0, paddingRight: 0}, i = e.get("controls"), o = e.get("dock"),
                        r = e.get("logo");
                    if (r) {
                        var a = 1 * ("" + r.margin).replace("px", ""), s = e.get("logoWidth") + (isNaN(a) ? 0 : a);
                        "top-left" === r.position ? n.paddingLeft = s : "top-right" === r.position && (n.paddingRight = s)
                    }
                    if (i && o && o.length) {
                        var l = 56 * o.length;
                        n.paddingRight = Math.max(n.paddingRight, l)
                    }
                    t.style(this.el, n)
                }, playlistItem: function (e, t) {
                    if (e.get("displaytitle") || e.get("displaydescription")) {
                        var n = "", i = "";
                        t.title && e.get("displaytitle") && (n = t.title), t.description && e.get("displaydescription") && (i = t.description), this.updateText(n, i)
                    } else this.hide()
                }, updateText: function (e, t) {
                    this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
                }, element: function () {
                    return this.el
                }
            }), n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function (e, t, n) {
        var i, o;
        i = [n(2), n(4), n(3), n(15), n(6), n(115), n(116), n(125), n(126), n(128), n(124), n(130), n(114), n(129), n(131), n(132), n(1), n(58)], o = function (e, t, n, i, o, r, a, s, l, c, u, d, h, f, p, g, A, m) {
            var w = e.style, v = e.bounds, y = e.isMobile(),
                E = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                j = function (j, b) {
                    function C(t) {
                        var n = 0, o = b.get("duration"), r = b.get("position");
                        "DVR" === e.adaptiveType(o) && (n = o, o = Math.max(r, i.dvrSeekLimit));
                        var a = e.between(r + t, n, o);
                        j.seek(a)
                    }

                    function k(t) {
                        var n, i = b.get("volume");
                        "-" === t ? n = i > 100 ? -50 : -10 : (n = i >= 100 ? 50 : 10, i < 100 && i + n > 100 && (n = 100 - i));
                        var o = e.between(b.get("volume") + n, 0, 500);
                        j.setVolume(o)
                    }

                    function L(e) {
                        return !e.ctrlKey && !e.metaKey && !!b.get("controls")
                    }

                    function I(e) {
                        if (!L(e)) return !0;
                        switch (Se || ne(), e.keyCode) {
                            case 27:
                                j.setFullscreen(!1);
                                break;
                            case 13:
                            case 32:
                                j.play({reason: "interaction"});
                                break;
                            case 37:
                                Se || C(-5);
                                break;
                            case 39:
                                Se || C(5);
                                break;
                            case 38:
                                k("+");
                                break;
                            case 40:
                                k("-");
                                break;
                            case 67:
                                var t = j.getCaptionsList(), n = t.length;
                                if (n) {
                                    var i = (j.getCurrentCaptions() + 1) % n;
                                    j.setCurrentCaptions(i)
                                }
                                break;
                            case 77:
                                j.setMute();
                                break;
                            case 70:
                                j.setFullscreen();
                                break;
                            default:
                                if (e.keyCode >= 48 && e.keyCode <= 59) {
                                    var o = e.keyCode - 48, r = o / 10 * b.get("duration");
                                    j.seek(r)
                                }
                        }
                        return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0
                    }

                    function x() {
                        Qe = !1, e.removeClass(de, "jw-no-focus")
                    }

                    function T() {
                        Qe = !0, e.addClass(de, "jw-no-focus")
                    }

                    function P() {
                        Qe || x(), Se || ne()
                    }

                    function M() {
                        var n = v(de), i = Math.round(n.width), o = Math.round(n.height);
                        return document.body.contains(de) ? i && o && (i === pe && o === ge || (pe = i, ge = o, clearTimeout(Ye), Ye = setTimeout(q, 50), b.set("containerWidth", i), b.set("containerHeight", o), Je.trigger(t.JWPLAYER_RESIZE, {
                            width: i,
                            height: o
                        }))) : (e.removeEventListener(window, "resize", M), y && e.removeEventListener(window, "orientationchange", M)), n
                    }

                    function R(t, n) {
                        n = n || !1, e.toggleClass(de, "jw-flag-casting", n)
                    }

                    function _(t, n) {
                        e.toggleClass(de, "jw-flag-cast-available", n), e.toggleClass(he, "jw-flag-cast-available", n)
                    }

                    function D(t, n) {
                        e.replaceClass(de, /jw-stretch-\S+/, "jw-stretch-" + n)
                    }

                    function B(t, n) {
                        e.toggleClass(de, "jw-flag-compact-player", n)
                    }

                    function S(t) {
                        t && !y && (e.addEventListener(t.element(), "mousemove", N, !1), e.addEventListener(t.element(), "mouseout", F, !1))
                    }

                    function O() {
                        b.get("state") !== o.IDLE && b.get("state") !== o.COMPLETE && b.get("state") !== o.PAUSED || !b.get("controls") || j.play({reason: "interaction"}), Oe ? te() : ne()
                    }

                    function Y(e) {
                        e.link ? (j.pause(!0), j.setFullscreen(!1), window.open(e.link, e.linktarget)) : b.get("controls") && j.play({reason: "interaction"})
                    }

                    function N() {
                        clearTimeout(_e)
                    }

                    function F() {
                        ne()
                    }

                    function Q(e) {
                        Je.trigger(e.type, e)
                    }

                    function J(t, n) {
                        n ? (xe && xe.destroy(), e.addClass(de, "jw-flag-flash-blocked")) : (xe && xe.setup(b, de, de), e.removeClass(de, "jw-flag-flash-blocked"))
                    }

                    function U() {
                        b.get("controls") && j.setFullscreen()
                    }

                    function W() {
                        var n = e.getElementsByClassName("jw-overlays", de)[0];
                        e.addEventListener(n, "mousemove", ne), Ee = new a(b, fe, {useHover: !0}), Ee.on("click", function () {
                            Q({type: t.JWPLAYER_DISPLAY_CLICK}), b.get("controls") && j.play({reason: "interaction"})
                        }), Ee.on("tap", function () {
                            Q({type: t.JWPLAYER_DISPLAY_CLICK}),
                                O()
                        }), Ee.on("doubleClick", U), Ee.on("move", ne), Ee.on("over", ne);
                        var i = new s(b);
                        i.on("click", function () {
                            Q({type: t.JWPLAYER_DISPLAY_CLICK}), j.play({reason: "interaction"})
                        }), i.on("tap", function () {
                            Q({type: t.JWPLAYER_DISPLAY_CLICK}), O()
                        }), he.appendChild(i.element()), be = new l(b), Ce = new c(b), Ce.on(t.JWPLAYER_LOGO_CLICK, Y);
                        var o = document.createElement("div");
                        o.className = "jw-controls-right jw-reset", Ce.setup(o), o.appendChild(be.element()), he.appendChild(o), Le = new r(b), Le.setup(de.id, b.get("captions")), he.parentNode.insertBefore(Le.element(), ke.element());
                        var d = b.get("height");
                        y && ("string" == typeof d || d >= 1.5 * Be) ? e.addClass(de, "jw-flag-touch") : (xe = new p, xe.setup(b, de, de)), me = new u(j, b), me.on(t.JWPLAYER_USER_ACTION, ne), b.on("change:scrubbing", V), b.on("change:compactUI", B), e.isPoorIE() || he.appendChild(me.element()), e.addEventListener(de, "focus", P), e.addEventListener(de, "blur", x), e.addEventListener(de, "keydown", I), de.onmousedown = T
                    }

                    function H(t) {
                        return t.get("state") === o.PAUSED ? void t.once("change:state", H) : void(t.get("scrubbing") === !1 && e.removeClass(de, "jw-flag-dragging"))
                    }

                    function V(t, n) {
                        t.off("change:state", H), n ? e.addClass(de, "jw-flag-dragging") : H(t)
                    }

                    function G(t, n, i) {
                        var o, r = de.className;
                        i = !!i, i && (r = r.replace(/\s*aspectMode/, ""), de.className !== r && (de.className = r), e.style(de, {display: "block"}, i)), e.exists(t) && e.exists(n) && (b.set("width", t), b.set("height", n)), o = {width: t}, e.hasClass(de, "jw-flag-aspect-mode") || (o.height = n), w(de, o, !0), z(n), q(t, n)
                    }

                    function z(t) {
                        if (Ie = K(t), me && !Ie) {
                            var n = Se ? Ae : b;
                            ue(n, n.get("state"))
                        }
                        e.toggleClass(de, "jw-flag-audio-player", Ie)
                    }

                    function K(e) {
                        if (b.get("aspectratio")) return !1;
                        if (A.isString(e) && e.indexOf("%") > -1) return !1;
                        var t = A.isNumber(e) ? e : b.get("containerHeight");
                        return X(t)
                    }

                    function X(e) {
                        return e && e <= Be * (y ? 1.75 : 1)
                    }

                    function q(t, n) {
                        if (!t || isNaN(Number(t))) {
                            if (!fe) return;
                            t = fe.clientWidth
                        }
                        if (!n || isNaN(Number(n))) {
                            if (!fe) return;
                            n = fe.clientHeight
                        }
                        we && we.resize(t, n, b.get("stretching")), e.isMSIE(9) && document.all && !window.atob && (t = n = "100%");
                        var i = b.getVideo();
                        if (i) {
                            var r = i.resize(t, n, b.get("stretching"));
                            r && (clearTimeout(Ye), Ye = setTimeout(q, 250)), Le.resize(), me.checkCompactMode(t), b.get("state") === o.PAUSED && b.get("imageAdvs") && b.get("imageAdvs").pause && ve && !ve.isHidden() && ve.resizePauseAdv(t, n)
                        }
                    }

                    function Z() {
                        if (Fe) {
                            var e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                            return !(!e || e.id !== b.get("id"))
                        }
                        return Se ? Ae.getVideo().getFullScreen() : b.getVideo().getFullScreen()
                    }

                    function $(e) {
                        var t = b.get("fullscreen"), n = void 0 !== e.jwstate ? e.jwstate : Z();
                        t !== n && b.set("fullscreen", n), clearTimeout(Ye), Ye = setTimeout(q, 200)
                    }

                    function ee(t, n) {
                        n ? (e.addClass(t, "jw-flag-fullscreen"), w(document.body, {"overflow-y": "hidden"}), ne()) : (e.removeClass(t, "jw-flag-fullscreen"), w(document.body, {"overflow-y": ""})), q()
                    }

                    function te() {
                        Oe = !1, clearTimeout(_e), me.hideComponents(), e.addClass(de, "jw-flag-user-inactive")
                    }

                    function ne() {
                        Oe || (e.removeClass(de, "jw-flag-user-inactive"), me.checkCompactMode(fe.clientWidth)), Oe = !0, clearTimeout(_e), _e = setTimeout(te, De)
                    }

                    function ie() {
                        j.setFullscreen(!1), b.get("imageAdvs") && b.get("imageAdvs").end && ve && ve.loadAdv("end")
                    }

                    function oe() {
                        je && je.setState(b.get("state")), re(b, b.mediaModel.get("mediaType")), b.mediaModel.on("change:mediaType", re, this)
                    }

                    function re(t, n) {
                        var i = "audio" === n, o = b.getVideo(), r = o && 0 === o.getName().name.indexOf("flash");
                        e.toggleClass(de, "jw-flag-media-audio", i), i && !r ? de.insertBefore(we.el, fe) : de.insertBefore(we.el, Le.element())
                    }

                    function ae(t, n) {
                        var i = "LIVE" === e.adaptiveType(n);
                        e.toggleClass(de, "jw-flag-live", i), i || Je.setAltText("")
                    }

                    function se(t, n) {
                        return n ? void(e.isPoorIE() || (n.name ? ke.updateText(n.name, n.message) : ke.updateText(n.message, ""))) : void ke.playlistItem(t, t.get("playlistItem"))
                    }

                    function le() {
                        var e = b.getVideo();
                        return !!e && e.isCaster
                    }

                    function ce() {
                        e.replaceClass(de, /jw-state-\S+/, "jw-state-" + Te)
                    }

                    function ue(t, n) {
                        if (Te = n, clearTimeout(Ne), n === o.COMPLETE || n === o.IDLE ? Ne = setTimeout(ce, 100) : ce(), le()) return void e.addClass(fe, "jw-media-show");
                        switch (n) {
                            case o.PLAYING:
                                ve && ve.hide(), q(), ye && b.get("marquee").show && ye.start();
                                break;
                            case o.PAUSED:
                                ve && b.get("imageAdvs") && b.get("imageAdvs").pause && ve.loadAdv("pause"), ne(), ye && b.get("marquee").show && ye.pause();
                                break;
                            case o.IDLE:
                                ye && b.get("marquee").show && ye.pause();
                                break;
                            case o.COMPLETE:
                                ye && ye.stop()
                        }
                    }

                    var de, he, fe, pe, ge, Ae, me, we, ve, ye, Ee, je, be, Ce, ke, Le, Ie, xe, Te, Pe, Me, Re, _e = -1,
                        De = y ? 4e3 : 2e3, Be = 40, Se = !1, Oe = !1, Ye = -1, Ne = -1, Fe = !1, Qe = !1,
                        Je = A.extend(this, n);
                    this.model = b, this.api = j, de = e.createElement(m({id: b.get("id")})), e.isIE() && e.addClass(de, "jw-ie"), e.isPoorIE() && e.addClass(de, "jw-ie-poorie");
                    var Ue = b.get("width"), We = b.get("height");
                    w(de, {
                        width: Ue.toString().indexOf("%") > 0 ? Ue : Ue + "px",
                        height: We.toString().indexOf("%") > 0 ? We : We + "px"
                    }), Me = de.requestFullscreen || de.webkitRequestFullscreen || de.webkitRequestFullScreen || de.mozRequestFullScreen || de.msRequestFullscreen, Re = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, Fe = Me && Re, this.onChangeSkin = function (t, n) {
                        e.replaceClass(de, /jw-skin-\S+/, n ? "jw-skin-" + n : "")
                    }, this.handleColorOverrides = function () {
                        function t(t, i, o) {
                            if (o) {
                                t = e.prefix(t, "#" + n + " ");
                                var r = {};
                                r[i] = o, e.css(t.join(", "), r, n)
                            }
                        }

                        var n = b.get("id"), i = b.get("skinColorActive"), o = b.get("skinColorInactive"),
                            r = b.get("skinColorBackground");
                        t([".jw-toggle", ".jw-button-color:hover"], "color", i), t([".jw-active-option", ".jw-progress", ".jw-playlist-container .jw-option.jw-active-option", ".jw-playlist-container .jw-option:hover"], "background", i), t([".jw-text", ".jw-option", ".jw-button-color", ".jw-toggle.jw-off", ".jw-tooltip-title", ".jw-skip .jw-skip-icon", ".jw-playlist-container .jw-icon"], "color", o), t([".jw-cue", ".jw-knob"], "background", o), t([".jw-playlist-container .jw-option"], "border-bottom-color", o), t([".jw-background-color", ".jw-tooltip-title", ".jw-playlist", ".jw-playlist-container .jw-option"], "background", r), t([".jw-playlist-container ::-webkit-scrollbar"], "border-color", r)
                    }, this.setup = function () {
                        this.handleColorOverrides(), b.get("skin-loading") === !0 && (e.addClass(de, "jw-flag-skin-loading"), b.once("change:skin-loading", function () {
                            e.removeClass(de, "jw-flag-skin-loading")
                        })), this.onChangeSkin(b, b.get("skin"), ""), b.on("change:skin", this.onChangeSkin, this), fe = e.getElementsByClassName("jw-media", de)[0], he = e.getElementsByClassName("jw-controls", de)[0];
                        var n = e.getElementsByClassName("jw-preview", de)[0];
                        we = new d(b), we.setup(n);
                        var i = e.getElementsByClassName("jw-title", de)[0];
                        if (ke = new g(b), ke.setup(i), e.isPoorIE()) e.style(e.getElementsByClassName("jw-marquee", de)[0], {display: "none"}); else if (ve = new h(b, j), b.get("imageAdvs") && de.appendChild(ve.element()), b.get("marquee").show) {
                            var r = e.getElementsByClassName("jw-marquee", de)[0];
                            ye = new f(b, r)
                        }
                        W(), ne(), b.set("mediaContainer", fe), b.mediaController.on("fullscreenchange", $);
                        for (var a = E.length; a--;) e.addEventListener(document, E[a], $, !1);
                        e.removeEventListener(window, "resize", M), e.addEventListener(window, "resize", M, !1), y && (e.removeEventListener(window, "orientationchange", M), e.addEventListener(window, "orientationchange", M, !1)), b.on("change:errorEvent", se), b.on("change:controls", He), He(b, b.get("controls")), b.on("change:state", ue), b.on("change:duration", ae, this), b.on("change:flashBlocked", J), J(b, b.get("flashBlocked")), j.onPlaylistComplete(ie), j.onPlaylistItem(oe), b.on("change:castAvailable", _), _(b, b.get("castAvailable")), b.on("change:castActive", R), R(b, b.get("castActive")), b.get("stretching") && D(b, b.get("stretching")), b.on("change:stretching", D), ue(b, o.IDLE), b.on("change:fullscreen", Ve), S(me), S(Ce);
                        var s = b.get("aspectratio");
                        if (s) {
                            e.addClass(de, "jw-flag-aspect-mode");
                            var l = e.getElementsByClassName("jw-aspect", de)[0];
                            w(l, {paddingTop: s})
                        }
                        j.on(t.JWPLAYER_READY, function () {
                            M(), G(b.get("width"), b.get("height"))
                        }), b.on("connecting", function () {
                            Je.setAltText("正在与服务器建立连接"), e.toggleClass(de, "jw-flag-live", !0)
                        }), b.on("connectFaild", function () {
                            j.stop(), Je.setAltText("连接已断开，请稍后重试"), e.toggleClass(de, "jw-flag-live", !0), e.getElementsByClassName("jw-controlbar", de)[0].style.display = "block"
                        }), b.on("alive", function () {
                            "idle" !== Je.model.get("state") && (Je.setAltText("直播中"), e.toggleClass(de, "jw-flag-live", !0), n.style.display = "none")
                        }), b.on("noLiveStream", function () {
                            "idle" !== Je.model.get("state") && (Je.setAltText("无直播流"), e.toggleClass(de, "jw-flag-live", !0), b.get("image") && (n.style.display = "block"), e.getElementsByClassName("jw-controlbar", de)[0].style.display = "block")
                        }), b.on("liveStop", function () {
                            j.stop(), Je.setAltText("直播结束"), e.toggleClass(de, "jw-flag-live", !0), e.getElementsByClassName("jw-controlbar", de)[0].style.display = "block"
                        }), b.on("seekAfterLoadSuccess", function () {
                            Je.setAltText("自动跳转到上次的播放时间..."), e.addClass(me.element(), "jw-controlbar-textshow"), setTimeout(function () {
                                e.removeClass(me.element(), "jw-controlbar-textshow")
                            }, 1e3)
                        })
                    };
                    var He = function (t, n) {
                        if (n) {
                            var i = Se ? Ae.get("state") : b.get("state");
                            ue(t, i)
                        }
                        e.toggleClass(de, "jw-flag-controls-disabled", !n)
                    }, Ve = function (t, n) {
                        var i = b.getVideo();
                        Fe ? (n ? Me.apply(de) : Re.apply(document), ee(de, n)) : e.isIE() ? ee(de, n) : (Ae && Ae.getVideo() && Ae.getVideo().setFullscreen(n), i.setFullscreen(n)), i && 0 === i.getName().name.indexOf("flash") && i.setFullscreen(n), ye && b.get("marquee").show && ye.reset(de.clientWidth, de.clientHeight)
                    };
                    this.resize = function (e, t) {
                        var n = !0;
                        G(e, t, n), M()
                    }, this.resizeMedia = q, this.reset = function () {
                        document.contains(de) && de.parentNode.replaceChild(Pe, de), e.emptyElement(de)
                    }, this.setupInstream = function (t) {
                        this.instreamModel = Ae = t, Ae.on("change:controls", He, this), Ae.on("change:state", ue, this), Se = !0, e.addClass(de, "jw-flag-ads"), ne()
                    }, this.setAltText = function (e) {
                        me.setAltText(e)
                    }, this.useExternalControls = function () {
                        e.addClass(de, "jw-flag-ads-hide-controls")
                    }, this.destroyInstream = function () {
                        if (Se = !1, Ae && (Ae.off(null, null, this), Ae = null), this.setAltText(""), e.removeClass(de, "jw-flag-ads"), e.removeClass(de, "jw-flag-ads-hide-controls"), b.getVideo) {
                            var t = b.getVideo();
                            t.setContainer(fe)
                        }
                        ae(b, b.get("duration")), Ee.revertAlternateClickHandlers()
                    }, this.addCues = function (e) {
                        me && me.addCues(e)
                    }, this.clickHandler = function () {
                        return Ee
                    }, this.controlsContainer = function () {
                        return he
                    }, this.getContainer = this.element = function () {
                        return de
                    }, this.getSafeRegion = function (t) {
                        var n = {
                            x: 0,
                            y: 0,
                            width: b.get("containerWidth") || 0,
                            height: b.get("containerHeight") || 0
                        }, i = b.get("dock");
                        return i && i.length && b.get("controls") && (n.y = be.element().clientHeight, n.height -= n.y), t = t || !e.exists(t), t && b.get("controls") && (n.height -= me.element().clientHeight), n
                    }, this.setCaptions = function (e) {
                        Le.clear(), Le.setup(b.get("id"), e), Le.resize()
                    }, this.destroy = function () {
                        e.removeEventListener(window, "resize", M), e.removeEventListener(window, "orientationchange", M);
                        for (var t = E.length; t--;) e.removeEventListener(document, E[t], $, $, !1);
                        b.mediaController && b.mediaController.off("fullscreenchange", $), e.removeEventListener(de, "keydown", I), xe && xe.destroy(), je && (b.off("change:state", je.statusDelegate), je.destroy(), je = null), Se && this.destroyInstream(), Ce && Ce.destroy(), e.clearCss(b.get("id"))
                    }, this.showAdv = function (e) {
                        ve && ve.loadAdv(e)
                    }, this.beginStartAdv = function () {
                        ve && ve.beginStartAdv()
                    }
                };
            return j
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }])
});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/