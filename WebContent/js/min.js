/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) {
            b[c] = !0
        }), b
    }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else d = b
        }
        return d
    }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function ba() {
        return !1
    }

    function bb() {
        return !0
    }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function bi(a, b) {
        do a = a[b]; while (a && a.nodeType !== 1);
        return a
    }

    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) return p.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return p.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (be.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a, function(a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }

    function bk(a) {
        var b = bl.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h)
                for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({}, g.data))
    }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }

    function bX(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = bV.length;
        while (e--) {
            b = bV[e] + c;
            if (b in a) return b
        }
        return d
    }

    function bY(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }

    function bZ(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bY(c) && (e[f] = p._data(c, "olddisplay", cb(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }

    function b$(a, b, c) {
        var d = bO.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function b_(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bU[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bU[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bU[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bU[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bU[e] + "Width")) || 0));
        return f
    }

    function ca(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0) {
            d = bH(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (bP.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + b_(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function cb(a) {
        if (bR[a]) return bR[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
        }
        return bR[a] = c, c
    }

    function ch(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b, function(b, e) {
            c || cd.test(a) ? d(a, e) : ch(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && p.type(b) === "object")
            for (e in b) ch(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function cy(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c))
                for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function cz(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length : 0,
            l = a === cu;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cz(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cz(a, c, d, e, "*", g)), h
    }

    function cA(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }

    function cB(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }

    function cC(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c)
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    if (c !== !0)
                        if (c && a["throws"]) b = c(b);
                        else try {
                            b = c(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: c ? k : "No conversion from " + h + " to " + e
                            }
                        }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }

    function cK() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cL() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function cT() {
        return setTimeout(function() {
            cM = b
        }, 0), cM = p.now()
    }

    function cU(a, b) {
        p.each(b, function(b, c) {
            var d = (cS[b] || []).concat(cS["*"]),
                e = 0,
                f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function cV(a, b, c) {
        var d, e = 0,
            f = 0,
            g = cR.length,
            h = p.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                var b = cM || cT(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: p.extend({}, b),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: cM || cT(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e), e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        cW(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cR[e].call(j, a, k, j.opts);
            if (d) return d
        }
        return cU(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function cW(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }

    function cX(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            q = a.nodeType && bY(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
            j.unqueued || k()
        }), j.unqueued++, l.always(function() {
            l.always(function() {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cb(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cO.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) continue;
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() {
                p(a).hide()
            }), l.done(function() {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) p.style(a, b, n[b])
            });
            for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }

    function cY(a, b, c, d, e) {
        return new cY.prototype.init(a, b, c, d, e)
    }

    function cZ(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (; e < 4; e += 2 - b) c = bU[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function c_(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function(a, b) {
            return new p.fn.init(a, b, c)
        },
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = r.test("� ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function(a, b) {
            return (b + "").toUpperCase()
        },
        D = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
        },
        E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1, this[0] = g
                    }
                    return this.context = e, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a), this
        },
        eq: function(a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++)
            if ((a = arguments[i]) != null)
                for (c in a) {
                    d = h[c], e = a[c];
                    if (h === e) continue;
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
            return h
    }, p.extend({
        noConflict: function(b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? p.readyWait++ : p.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? --p.readyWait : p.isReady) return;
            if (!e.body) return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) return;
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
        },
        isFunction: function(a) {
            return p.type(a) === "function"
        },
        isArray: Array.isArray || function(a) {
            return p.type(a) === "array"
        },
        isWindow: function(a) {
            return a != null && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return a == null ? String(a) : E[m.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || n.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(b) {
            if (!b || typeof b != "string") return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string") return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && r.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(A, "ms-").replace(B, C)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break
                } else
                    for (; f < g;)
                        if (c.apply(a[f++], d) === !1) break
            } else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break
            } else
                for (; f < g;)
                    if (c.call(a[f], f, a[f++]) === !1) break; return a
        },
        trim: o ? function(a) {
            return a == null ? "" : o.call(a)
        } : function(a) {
            return a == null ? "" : a.toString().replace(t, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (l) return l.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if (typeof d == "number")
                for (; f < d; f++) a[e++] = c[f];
            else
                while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            c = !!c;
            for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j)
                for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
            else
                for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(k.call(arguments)))
            }, f.guid = a.guid = a.guid || f.guid || p.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = d == null,
                k = 0,
                l = a.length;
            if (d && typeof d == "object") {
                for (k in d) p.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                    return i.call(p(a), c)
                }) : (c.call(a, e), c = null));
                if (c)
                    for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), p.ready.promise = function(b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete" || e.readyState !== "loading" && e.addEventListener) setTimeout(p.ready, 1);
            else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
            else {
                e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                var c = !1;
                try {
                    c = a.frameElement == null && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        p.ready()
                    }
                }()
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) {
                c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                for (; i && h < g; h++)
                    if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var b = i.length;
                        (function d(b) {
                            p.each(b, function(b, c) {
                                p.isFunction(c) && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && d(c)
                            })
                        })(arguments), e ? g = i.length : c && (f = b, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && p.each(arguments, function(a, b) {
                        var c;
                        while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                    }), this
                },
                has: function(a) {
                    return p.inArray(a, i) > -1
                },
                empty: function() {
                    return i = [], this
                },
                disable: function() {
                    return i = j = c = b, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = b, c || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return l
    }, p.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return p.Deferred(function(c) {
                            p.each(b, function(b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]](p.isFunction(g) ? function() {
                                    var a = g.apply(this, arguments);
                                    a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return typeof a == "object" ? p.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, p.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = k.call(arguments),
                d = c.length,
                e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                f = e === 1 ? a : p.Deferred(),
                g = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                },
                h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c), f.promise()
        }
    }), p.support = function() {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length || !d) return {};
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent)
            for (k in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
        return p(function() {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                i = e.getElementsByTagName("body")[0];
            if (!i) return;
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                width: "4px"
            }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /^(?:\{.*\}|\[.*\])$/,
        I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache : a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || ++p.uuid : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache : a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), p.fn.extend({
        data: function(a, c) {
            var d, e, f, g, h, i = this[0],
                j = 0,
                k = null;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") === 0 && (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function() {
                p.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
                if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c, this.each(function() {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                p.removeData(this, a)
            })
        }
    }), p.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = p.queue(a, b),
                d = c.shift(),
                e = p._queueHooks(a, b),
                f = function() {
                    p.dequeue(a, b)
                };
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), delete e.stop, d.call(a, f, e)), !c.length && e && e.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                empty: p.Callbacks("once memory").add(function() {
                    p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                })
            })
        }
    }), p.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                p.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = p.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--)(d = p._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                p.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = p.trim(f)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") > -1) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
                return
            }
            return e = p.isFunction(a), this.each(function(d) {
                var f, g = p(this);
                if (this.nodeType !== 1) return;
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                    return a == null ? "" : a + ""
                })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = a.type === "select-one";
                    if (f < 0) return null;
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i) return b;
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function() {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
            if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) return;
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), M = {
        get: function(a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, U || (N = {
        name: !0,
        id: !0,
        coords: !0
    }, L = p.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, p.each(["width", "height"], function(a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function(a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c
            }
        })
    }), p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), L.set(a, b, c)
        }
    }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), p.support.style || (p.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function(a, b) {
                if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        })
    });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function(a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
        };
    p.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, q, r;
                if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
                d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                    return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
                }, h.elem = a), c = p.trim(_(c)).split(" ");
                for (j = 0; j < c.length; j++) {
                    k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        namespace: m.join(".")
                    }, o), q = i[l];
                    if (!q) {
                        q = i[l] = [], q.delegateCount = 0;
                        if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                    }
                    r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
                }
                a = null
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
                if (!r || !(m = r.events)) return;
                b = p.trim(_(b || "")).split(" ");
                for (f = 0; f < b.length; f++) {
                    g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                    if (!h) {
                        for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                        continue
                    }
                    n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                    o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
                }
                p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, f, g) {
                if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                    var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                        t = [];
                    if ($.test(s + p.event.triggered)) return;
                    s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                    if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                    c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                    if (!f) {
                        h = p.cache;
                        for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                        return
                    }
                    c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                    if (n.trigger && n.trigger.apply(f, d) === !1) return;
                    q = [
                        [f, n.bindType || s]
                    ];
                    if (!g && !n.noBubble && !p.isWindow(f)) {
                        r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                        for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
                        l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                    }
                    for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply(k, d) === !1 && c.preventDefault();
                    return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
                }
                return
            },
            dispatch: function(c) {
                c = p.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                    q = o.delegateCount,
                    r = [].slice.call(arguments),
                    s = !c.exclusive && !c.namespace,
                    t = p.event.special[c.type] || {},
                    u = [];
                r[0] = c, c.delegateTarget = this;
                if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
                if (q && (!c.button || c.type !== "click")) {
                    g = p(this), g.context = this;
                    for (f = c.target; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || c.type !== "click") {
                            i = {}, k = [], g[0] = f;
                            for (d = 0; d < q; d++) l = o[d], m = l.selector, i[m] === b && (i[m] = g.is(m)), i[m] && k.push(l);
                            k.length && u.push({
                                elem: f,
                                matches: k
                            })
                        }
                }
                o.length > q && u.push({
                    elem: this,
                    matches: o.slice(q)
                });
                for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                    j = u[d], c.currentTarget = j.elem;
                    for (e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) {
                        l = j.matches[e];
                        if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, h = ((p.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, r), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                return t.postDispatch && t.postDispatch.call(this, c), c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, f, g, h = c.button,
                        i = c.fromElement;
                    return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[p.expando]) return a;
                var b, c, d = a,
                    f = p.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                a = p.Event(d);
                for (b = g.length; b;) c = g[--b], a[c] = d[c];
                return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
            },
            special: {
                ready: {
                    setup: p.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        p.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = p.extend(new p.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
        }, p.Event = function(a, b) {
            if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;
            else return new p.Event(a, b)
        }, p.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = bb, this.stopPropagation()
            },
            isDefaultPrevented: ba,
            isPropagationStopped: ba,
            isImmediatePropagationStopped: ba
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            p.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj,
                        g = f.selector;
                    if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                    return c
                }
            }
        }), p.support.submitBubbles || (p.event.special.submit = {
            setup: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                    d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), p._data(d, "_submit_attached", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.remove(this, "._submit")
            }
        }), p.support.changeBubbles || (p.event.special.change = {
            setup: function() {
                if (V.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), p.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                    });
                    return !1
                }
                p.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                    }), p._data(b, "_change_attached", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return p.event.remove(this, "._change"), V.test(this.nodeName)
            }
        }), p.support.focusinBubbles || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    p.event.simulate(b, a.target, p.event.fix(a), !0)
                };
            p.event.special[b] = {
                setup: function() {
                    c++ === 0 && e.addEventListener(a, d, !0)
                },
                teardown: function() {
                    --c === 0 && e.removeEventListener(a, d, !0)
                }
            }
        }), p.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = ba;
                else if (!e) return this;
                return f === 1 && (g = e, e = function(a) {
                    return p().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() {
                    p.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if (typeof a == "object") {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c, c = b;
                return d === !1 && (d = ba), this.each(function() {
                    p.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return p(this.context).on(a, this.selector, b, c), this
            },
            die: function(a, b) {
                return p(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    p.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return p.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || p.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                        return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            p.fn[b] = function(a, c) {
                return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
        }),
        function(a, b) {
            function bd(a, b, c, d) {
                var e = 0,
                    f = b.length;
                for (; e < f; e++) Z(a, b[e], c, d)
            }

            function be(a, b, c, d, e, f) {
                var g, h = $.setFilters[b.toLowerCase()];
                return h || Z.error(b), (a || !(g = e)) && bd(a || "*", d, g = [], e), g.length > 0 ? h(g, c, f) : []
            }

            function bf(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, p = 0,
                    q = f.length,
                    s = L.POS,
                    t = new RegExp("^" + s.source + "(?!" + r + ")", "i"),
                    u = function() {
                        var a = 1,
                            c = arguments.length - 2;
                        for (; a < c; a++) arguments[a] === b && (g[a] = b)
                    };
                for (; p < q; p++) {
                    s.exec(""), a = f[p], j = [], i = 0, k = e;
                    while (g = s.exec(a)) {
                        n = s.lastIndex = g.index + g[0].length;
                        if (n > i) {
                            m = a.slice(i, g.index), i = n, l = [c], B.test(m) && (k && (l = k), k = e);
                            if (h = H.test(m)) m = m.slice(0, -5).replace(B, "$&*");
                            g.length > 1 && g[0].replace(t, u), k = be(m, g[1], g[2], l, k, h)
                        }
                    }
                    k ? (j = j.concat(k), (m = a.slice(i)) && m !== ")" ? B.test(m) ? bd(m, j, d, e) : Z(m, c, d, e ? e.concat(k) : k) : o.apply(d, j)) : Z(a, c, d, e)
                }
                return q === 1 ? d : Z.uniqueSort(d)
            }

            function bg(a, b, c) {
                var d, e, f, g = [],
                    i = 0,
                    j = D.exec(a),
                    k = !j.pop() && !j.pop(),
                    l = k && a.match(C) || [""],
                    m = $.preFilter,
                    n = $.filter,
                    o = !c && b !== h;
                for (;
                    (e = l[i]) != null && k; i++) {
                    g.push(d = []), o && (e = " " + e);
                    while (e) {
                        k = !1;
                        if (j = B.exec(e)) e = e.slice(j[0].length), k = d.push({
                            part: j.pop().replace(A, " "),
                            captures: j
                        });
                        for (f in n)(j = L[f].exec(e)) && (!m[f] || (j = m[f](j, b, c))) && (e = e.slice(j.shift().length), k = d.push({
                            part: f,
                            captures: j
                        }));
                        if (!k) break
                    }
                }
                return k || Z.error(a), g
            }

            function bh(a, b, e) {
                var f = b.dir,
                    g = m++;
                return a || (a = function(a) {
                    return a === e
                }), b.first ? function(b, c) {
                    while (b = b[f])
                        if (b.nodeType === 1) return a(b, c) && b
                } : function(b, e) {
                    var h, i = g + "." + d,
                        j = i + "." + c;
                    while (b = b[f])
                        if (b.nodeType === 1) {
                            if ((h = b[q]) === j) return b.sizset;
                            if (typeof h == "string" && h.indexOf(i) === 0) {
                                if (b.sizset) return b
                            } else {
                                b[q] = j;
                                if (a(b, e)) return b.sizset = !0, b;
                                b.sizset = !1
                            }
                        }
                }
            }

            function bi(a, b) {
                return a ? function(c, d) {
                    var e = b(c, d);
                    return e && a(e === !0 ? c : e, d)
                } : b
            }

            function bj(a, b, c) {
                var d, e, f = 0;
                for (; d = a[f]; f++) $.relative[d.part] ? e = bh(e, $.relative[d.part], b) : (d.captures.push(b, c), e = bi(e, $.filter[d.part].apply(null, d.captures)));
                return e
            }

            function bk(a) {
                return function(b, c) {
                    var d, e = 0;
                    for (; d = a[e]; e++)
                        if (d(b, c)) return !0;
                    return !1
                }
            }
            var c, d, e, f, g, h = a.document,
                i = h.documentElement,
                j = "undefined",
                k = !1,
                l = !0,
                m = 0,
                n = [].slice,
                o = [].push,
                q = ("sizcache" + Math.random()).replace(".", ""),
                r = "[\\x20\\t\\r\\n\\f]",
                s = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                t = s.replace("w", "w#"),
                u = "([*^$|!~]?=)",
                v = "\\[" + r + "*(" + s + ")" + r + "*(?:" + u + r + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + t + ")|)|)" + r + "*\\]",
                w = ":(" + s + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
                x = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
                y = r + "*([\\x20\\t\\r\\n\\f>+~])" + r + "*",
                z = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + v + "|" + w.replace(2, 7) + "|[^\\\\(),])+",
                A = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                B = new RegExp("^" + y),
                C = new RegExp(z + "?(?=" + r + "*,|$)", "g"),
                D = new RegExp("^(?:(?!,)(?:(?:^|,)" + r + "*" + z + ")*?|" + r + "*(.*?))(\\)|$)"),
                E = new RegExp(z.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + y, "g"),
                F = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                G = /[\x20\t\r\n\f]*[+~]/,
                H = /:not\($/,
                I = /h\d/i,
                J = /input|select|textarea|button/i,
                K = /\\(?!\\)/g,
                L = {
                    ID: new RegExp("^#(" + s + ")"),
                    CLASS: new RegExp("^\\.(" + s + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + s + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + s.replace("[-", "[-\\*") + ")"),
                    ATTR: new RegExp("^" + v),
                    PSEUDO: new RegExp("^" + w),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    POS: new RegExp(x, "ig"),
                    needsContext: new RegExp("^" + r + "*[>+~]|" + x, "i")
                },
                M = {},
                N = [],
                O = {},
                P = [],
                Q = function(a) {
                    return a.sizzleFilter = !0, a
                },
                R = function(a) {
                    return function(b) {
                        return b.nodeName.toLowerCase() === "input" && b.type === a
                    }
                },
                S = function(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return (c === "input" || c === "button") && b.type === a
                    }
                },
                T = function(a) {
                    var b = !1,
                        c = h.createElement("div");
                    try {
                        b = a(c)
                    } catch (d) {}
                    return c = null, b
                },
                U = T(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return b !== "boolean" && b !== "string"
                }),
                V = T(function(a) {
                    a.id = q + 0, a.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>", i.insertBefore(a, i.firstChild);
                    var b = h.getElementsByName && h.getElementsByName(q).length === 2 + h.getElementsByName(q + 0).length;
                    return g = !h.getElementById(q), i.removeChild(a), b
                }),
                W = T(function(a) {
                    return a.appendChild(h.createComment("")), a.getElementsByTagName("*").length === 0
                }),
                X = T(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== j && a.firstChild.getAttribute("href") === "#"
                }),
                Y = T(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || a.getElementsByClassName("e").length === 0 ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1)
                }),
                Z = function(a, b, c, d) {
                    c = c || [], b = b || h;
                    var e, f, g, i, j = b.nodeType;
                    if (j !== 1 && j !== 9) return [];
                    if (!a || typeof a != "string") return c;
                    g = ba(b);
                    if (!g && !d)
                        if (e = F.exec(a))
                            if (i = e[1]) {
                                if (j === 9) {
                                    f = b.getElementById(i);
                                    if (!f || !f.parentNode) return c;
                                    if (f.id === i) return c.push(f), c
                                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(i)) && bb(b, f) && f.id === i) return c.push(f), c
                            } else {
                                if (e[2]) return o.apply(c, n.call(b.getElementsByTagName(a), 0)), c;
                                if ((i = e[3]) && Y && b.getElementsByClassName) return o.apply(c, n.call(b.getElementsByClassName(i), 0)), c
                            }
                    return bm(a, b, c, d, g)
                },
                $ = Z.selectors = {
                    cacheLength: 50,
                    match: L,
                    order: ["ID", "TAG"],
                    attrHandle: {},
                    createPseudo: Q,
                    find: {
                        ID: g ? function(a, b, c) {
                            if (typeof b.getElementById !== j && !c) {
                                var d = b.getElementById(a);
                                return d && d.parentNode ? [d] : []
                            }
                        } : function(a, c, d) {
                            if (typeof c.getElementById !== j && !d) {
                                var e = c.getElementById(a);
                                return e ? e.id === a || typeof e.getAttributeNode !== j && e.getAttributeNode("id").value === a ? [e] : b : []
                            }
                        },
                        TAG: W ? function(a, b) {
                            if (typeof b.getElementsByTagName !== j) return b.getElementsByTagName(a)
                        } : function(a, b) {
                            var c = b.getElementsByTagName(a);
                            if (a === "*") {
                                var d, e = [],
                                    f = 0;
                                for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                                return e
                            }
                            return c
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(K, ""), a[3] = (a[4] || a[5] || "").replace(K, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || Z.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && Z.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var b, c = a[4];
                            return L.CHILD.test(a[0]) ? null : (c && (b = D.exec(c)) && b.pop() && (a[0] = a[0].slice(0, b[0].length - c.length - 1), c = b[0].slice(0, -1)), a.splice(2, 3, c || a[3]), a)
                        }
                    },
                    filter: {
                        ID: g ? function(a) {
                            return a = a.replace(K, ""),
                                function(b) {
                                    return b.getAttribute("id") === a
                                }
                        } : function(a) {
                            return a = a.replace(K, ""),
                                function(b) {
                                    var c = typeof b.getAttributeNode !== j && b.getAttributeNode("id");
                                    return c && c.value === a
                                }
                        },
                        TAG: function(a) {
                            return a === "*" ? function() {
                                return !0
                            } : (a = a.replace(K, "").toLowerCase(), function(b) {
                                return b.nodeName && b.nodeName.toLowerCase() === a
                            })
                        },
                        CLASS: function(a) {
                            var b = M[a];
                            return b || (b = M[a] = new RegExp("(^|" + r + ")" + a + "(" + r + "|$)"), N.push(a), N.length > $.cacheLength && delete M[N.shift()]),
                                function(a) {
                                    return b.test(a.className || typeof a.getAttribute !== j && a.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(a, b, c) {
                            return b ? function(d) {
                                var e = Z.attr(d, a),
                                    f = e + "";
                                if (e == null) return b === "!=";
                                switch (b) {
                                    case "=":
                                        return f === c;
                                    case "!=":
                                        return f !== c;
                                    case "^=":
                                        return c && f.indexOf(c) === 0;
                                    case "*=":
                                        return c && f.indexOf(c) > -1;
                                    case "$=":
                                        return c && f.substr(f.length - c.length) === c;
                                    case "~=":
                                        return (" " + f + " ").indexOf(c) > -1;
                                    case "|=":
                                        return f === c || f.substr(0, c.length + 1) === c + "-"
                                }
                            } : function(b) {
                                return Z.attr(b, a) != null
                            }
                        },
                        CHILD: function(a, b, c, d) {
                            if (a === "nth") {
                                var e = m++;
                                return function(a) {
                                    var b, f, g = 0,
                                        h = a;
                                    if (c === 1 && d === 0) return !0;
                                    b = a.parentNode;
                                    if (b && (b[q] !== e || !a.sizset)) {
                                        for (h = b.firstChild; h; h = h.nextSibling)
                                            if (h.nodeType === 1) {
                                                h.sizset = ++g;
                                                if (h === a) break
                                            }
                                        b[q] = e
                                    }
                                    return f = a.sizset - d, c === 0 ? f === 0 : f % c === 0 && f / c >= 0
                                }
                            }
                            return function(b) {
                                var c = b;
                                switch (a) {
                                    case "only":
                                    case "first":
                                        while (c = c.previousSibling)
                                            if (c.nodeType === 1) return !1;
                                        if (a === "first") return !0;
                                        c = b;
                                    case "last":
                                        while (c = c.nextSibling)
                                            if (c.nodeType === 1) return !1;
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(a, b, c, d) {
                            var e = $.pseudos[a] || $.pseudos[a.toLowerCase()];
                            return e || Z.error("unsupported pseudo: " + a), e.sizzleFilter ? e(b, c, d) : e
                        }
                    },
                    pseudos: {
                        not: Q(function(a, b, c) {
                            var d = bl(a.replace(A, "$1"), b, c);
                            return function(a) {
                                return !d(a)
                            }
                        }),
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && !!a.checked || b === "option" && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !$.pseudos.empty(a)
                        },
                        empty: function(a) {
                            var b;
                            a = a.firstChild;
                            while (a) {
                                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
                                a = a.nextSibling
                            }
                            return !0
                        },
                        contains: Q(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || bc(b)).indexOf(a) > -1
                            }
                        }),
                        has: Q(function(a) {
                            return function(b) {
                                return Z(a, b).length > 0
                            }
                        }),
                        header: function(a) {
                            return I.test(a.nodeName)
                        },
                        text: function(a) {
                            var b, c;
                            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                        },
                        radio: R("radio"),
                        checkbox: R("checkbox"),
                        file: R("file"),
                        password: R("password"),
                        image: R("image"),
                        submit: S("submit"),
                        reset: S("reset"),
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && a.type === "button" || b === "button"
                        },
                        input: function(a) {
                            return J.test(a.nodeName)
                        },
                        focus: function(a) {
                            var b = a.ownerDocument;
                            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                        },
                        active: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b, c) {
                            return c ? a.slice(1) : [a[0]]
                        },
                        last: function(a, b, c) {
                            var d = a.pop();
                            return c ? a : [d]
                        },
                        even: function(a, b, c) {
                            var d = [],
                                e = c ? 1 : 0,
                                f = a.length;
                            for (; e < f; e = e + 2) d.push(a[e]);
                            return d
                        },
                        odd: function(a, b, c) {
                            var d = [],
                                e = c ? 0 : 1,
                                f = a.length;
                            for (; e < f; e = e + 2) d.push(a[e]);
                            return d
                        },
                        lt: function(a, b, c) {
                            return c ? a.slice(+b) : a.slice(0, +b)
                        },
                        gt: function(a, b, c) {
                            return c ? a.slice(0, +b + 1) : a.slice(+b + 1)
                        },
                        eq: function(a, b, c) {
                            var d = a.splice(+b, 1);
                            return c ? a : d
                        }
                    }
                };
            $.setFilters.nth = $.setFilters.eq, $.filters = $.pseudos, X || ($.attrHandle = {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            }), V && ($.order.push("NAME"), $.find.NAME = function(a, b) {
                if (typeof b.getElementsByName !== j) return b.getElementsByName(a)
            }), Y && ($.order.splice(1, 0, "CLASS"), $.find.CLASS = function(a, b, c) {
                if (typeof b.getElementsByClassName !== j && !c) return b.getElementsByClassName(a)
            });
            try {
                n.call(i.childNodes, 0)[0].nodeType
            } catch (_) {
                n = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            var ba = Z.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                },
                bb = Z.contains = i.compareDocumentPosition ? function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : i.contains ? function(a, b) {
                    var c = a.nodeType === 9 ? a.documentElement : a,
                        d = b.parentNode;
                    return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                } : function(a, b) {
                    while (b = b.parentNode)
                        if (b === a) return !0;
                    return !1
                },
                bc = Z.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (e === 1 || e === 9 || e === 11) {
                            if (typeof a.textContent == "string") return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += bc(a)
                        } else if (e === 3 || e === 4) return a.nodeValue
                    } else
                        for (; b = a[d]; d++) c += bc(b);
                    return c
                };
            Z.attr = function(a, b) {
                var c, d = ba(a);
                return d || (b = b.toLowerCase()), $.attrHandle[b] ? $.attrHandle[b](a) : U || d ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
            }, Z.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, [0, 0].sort(function() {
                return l = 0
            }), i.compareDocumentPosition ? e = function(a, b) {
                return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
            } : (e = function(a, b) {
                if (a === b) return k = !0, 0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    g = [],
                    h = a.parentNode,
                    i = b.parentNode,
                    j = h;
                if (h === i) return f(a, b);
                if (!h) return -1;
                if (!i) return 1;
                while (j) e.unshift(j), j = j.parentNode;
                j = i;
                while (j) g.unshift(j), j = j.parentNode;
                c = e.length, d = g.length;
                for (var l = 0; l < c && l < d; l++)
                    if (e[l] !== g[l]) return f(e[l], g[l]);
                return l === c ? f(a, g[l], -1) : f(e[l], b, 1)
            }, f = function(a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return -1;
                    d = d.nextSibling
                }
                return 1
            }), Z.uniqueSort = function(a) {
                var b, c = 1;
                if (e) {
                    k = l, a.sort(e);
                    if (k)
                        for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1)
                }
                return a
            };
            var bl = Z.compile = function(a, b, c) {
                var d, e, f, g = O[a];
                if (g && g.context === b) return g;
                e = bg(a, b, c);
                for (f = 0; d = e[f]; f++) e[f] = bj(d, b, c);
                return g = O[a] = bk(e), g.context = b, g.runs = g.dirruns = 0, P.push(a), P.length > $.cacheLength && delete O[P.shift()], g
            };
            Z.matches = function(a, b) {
                return Z(a, null, null, b)
            }, Z.matchesSelector = function(a, b) {
                return Z(b, null, null, [a]).length > 0
            };
            var bm = function(a, b, e, f, g) {
                a = a.replace(A, "$1");
                var h, i, j, k, l, m, p, q, r, s = a.match(C),
                    t = a.match(E),
                    u = b.nodeType;
                if (L.POS.test(a)) return bf(a, b, e, f, s);
                if (f) h = n.call(f, 0);
                else if (s && s.length === 1) {
                    if (t.length > 1 && u === 9 && !g && (s = L.ID.exec(t[0]))) {
                        b = $.find.ID(s[1], b, g)[0];
                        if (!b) return e;
                        a = a.slice(t.shift().length)
                    }
                    q = (s = G.exec(t[0])) && !s.index && b.parentNode || b, r = t.pop(), m = r.split(":not")[0];
                    for (j = 0, k = $.order.length; j < k; j++) {
                        p = $.order[j];
                        if (s = L[p].exec(m)) {
                            h = $.find[p]((s[1] || "").replace(K, ""), q, g);
                            if (h == null) continue;
                            m === r && (a = a.slice(0, a.length - r.length) + m.replace(L[p], ""), a || o.apply(e, n.call(h, 0)));
                            break
                        }
                    }
                }
                if (a) {
                    i = bl(a, b, g), d = i.dirruns++, h == null && (h = $.find.TAG("*", G.test(a) && b.parentNode || b));
                    for (j = 0; l = h[j]; j++) c = i.runs++, i(l, b) && e.push(l)
                }
                return e
            };
            h.querySelectorAll && function() {
                var a, b = bm,
                    c = /'|\\/g,
                    d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    e = [],
                    f = [":active"],
                    g = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.oMatchesSelector || i.msMatchesSelector;
                T(function(a) {
                    a.innerHTML = "<select><option selected></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + r + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
                }), T(function(a) {
                    a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + r + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                }), e = e.length && new RegExp(e.join("|")), bm = function(a, d, f, g, h) {
                    if (!g && !h && (!e || !e.test(a)))
                        if (d.nodeType === 9) try {
                            return o.apply(f, n.call(d.querySelectorAll(a), 0)), f
                        } catch (i) {} else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            var j = d.getAttribute("id"),
                                k = j || q,
                                l = G.test(a) && d.parentNode || d;
                            j ? k = k.replace(c, "\\$&") : d.setAttribute("id", k);
                            try {
                                return o.apply(f, n.call(l.querySelectorAll(a.replace(C, "[id='" + k + "'] $&")), 0)), f
                            } catch (i) {} finally {
                                j || d.removeAttribute("id")
                            }
                        }
                    return b(a, d, f, g, h)
                }, g && (T(function(b) {
                    a = g.call(b, "div");
                    try {
                        g.call(b, "[test!='']:sizzle"), f.push($.match.PSEUDO)
                    } catch (c) {}
                }), f = new RegExp(f.join("|")), Z.matchesSelector = function(b, c) {
                    c = c.replace(d, "='$1']");
                    if (!ba(b) && !f.test(c) && (!e || !e.test(c))) try {
                        var h = g.call(b, c);
                        if (h || a || b.document && b.document.nodeType !== 11) return h
                    } catch (i) {}
                    return Z(c, null, null, [b]).length > 0
                })
            }(), Z.attr = p.attr, p.find = Z, p.expr = Z.selectors, p.expr[":"] = p.expr.pseudos, p.unique = Z.uniqueSort, p.text = Z.getText, p.isXMLDoc = Z.isXML, p.contains = Z.contains
        }(a);
    var bc = /Until$/,
        bd = /^(?:parents|prev(?:Until|All))/,
        be = /^.[^:#\[\.,]*$/,
        bf = p.expr.match.needsContext,
        bg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function() {
                for (b = 0, c = h.length; b < c; b++)
                    if (p.contains(h[b], this)) return !0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length, p.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (p.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    }), p.fn.andSelf = p.fn.addBack, p.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return p.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return p.dir(a, "parentNode", c)
        },
        next: function(a) {
            return bi(a, "nextSibling")
        },
        prev: function(a) {
            return bi(a, "previousSibling")
        },
        nextAll: function(a) {
            return p.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return p.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return p.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return p.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return p.sibling(a.firstChild)
        },
        contents: function(a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function(a, b) {
        p.fn[a] = function(c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bm = / jQuery\d+="(?:null|\d+)"/g,
        bn = /^\s+/,
        bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bp = /<([\w:]+)/,
        bq = /<tbody/i,
        br = /<|&#?\w+;/,
        bs = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
        bv = /^(?:checkbox|radio)$/,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bA = bk(e),
        bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
            text: function(a) {
                return p.access(this, function(a) {
                    return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (p.isFunction(a)) return this.each(function(b) {
                    p(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return p.isFunction(a) ? this.each(function(b) {
                    p(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = p(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = p.isFunction(a);
                return this.each(function(c) {
                    p(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                var c, d = 0;
                for (;
                    (c = this[d]) != null; d++)
                    if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
                return this
            },
            empty: function() {
                var a, b = 0;
                for (;
                    (a = this[b]) != null; b++) {
                    a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                    while (a.firstChild) a.removeChild(a.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                    return p.clone(this, a, b)
                })
            },
            html: function(a) {
                return p.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                    if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(bo, "<$1></$2>");
                        try {
                            for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                    var c = p(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    p(this).remove(), b ? p(b).before(a) : p(c).append(a)
                }))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                    j = a[0],
                    k = [],
                    l = this.length;
                if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() {
                    p(this).domManip(a, c, d)
                });
                if (p.isFunction(j)) return this.each(function(e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                });
                if (this[0]) {
                    e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                    if (f) {
                        c = c && p.nodeName(f, "tr");
                        for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                    }
                    g = f = null, k.length && p.each(k, function(a, b) {
                        b.src ? p.ajax ? p.ajax({
                            url: b.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }), p.buildFragment = function(a, c, d) {
            var f, g, h, i = a[0];
            return c = c || e, c = (c[0] || c).ownerDocument || c[0] || c, typeof c.createDocumentFragment == "undefined" && (c = e), a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
                fragment: f,
                cacheable: g
            }
        }, p.fragments = {}, p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            p.fn[a] = function(c) {
                var d, e = 0,
                    f = [],
                    g = p(c),
                    h = g.length,
                    i = this.length === 1 && this[0].parentNode;
                if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
                for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
                return this.pushStack(f, a, g.selector)
            }
        }), p.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
                if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                    bE(a, g), d = bF(a), e = bF(g);
                    for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
                }
                if (b) {
                    bD(a, g);
                    if (c) {
                        d = bF(a), e = bF(g);
                        for (f = 0; d[f]; ++f) bD(d[f], e[f])
                    }
                }
                return d = e = null, g
            },
            clean: function(a, b, c, d) {
                var f, g, h, i, j, k, l, m, n, o, q, r, s = 0,
                    t = [];
                if (!b || typeof b.createDocumentFragment == "undefined") b = e;
                for (g = b === e && bA;
                    (h = a[s]) != null; s++) {
                    typeof h == "number" && (h += "");
                    if (!h) continue;
                    if (typeof h == "string")
                        if (!br.test(h)) h = b.createTextNode(h);
                        else {
                            g = g || bk(b), l = l || g.appendChild(b.createElement("div")), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                            while (k--) l = l.lastChild;
                            if (!p.support.tbody) {
                                m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                                for (f = n.length - 1; f >= 0; --f) p.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
                            }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l = g.lastChild
                        }
                    h.nodeType ? t.push(h) : t = p.merge(t, h)
                }
                l && (g.removeChild(l), h = l = g = null);
                if (!p.support.appendChecked)
                    for (s = 0;
                        (h = t[s]) != null; s++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
                if (c) {
                    q = function(a) {
                        if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                    };
                    for (s = 0;
                        (h = t[s]) != null; s++)
                        if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [s + 1, 0].concat(r)), s += r.length)
                }
                return t
            },
            cleanData: function(a, b) {
                var c, d, e, f, g = 0,
                    h = p.expando,
                    i = p.cache,
                    j = p.support.deleteExpando,
                    k = p.event.special;
                for (;
                    (e = a[g]) != null; g++)
                    if (b || p.acceptData(e)) {
                        d = e[h], c = d && i[d];
                        if (c) {
                            if (c.events)
                                for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                        }
                    }
            }
        }),
        function() {
            var a, b;
            p.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                    return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(e);
                return a
            }
        }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
        bL = /opacity=([^)]*)/,
        bM = /^(top|right|bottom|left)$/,
        bN = /^margin/,
        bO = new RegExp("^(" + q + ")(.*)$", "i"),
        bP = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        bQ = new RegExp("^([-+])=(" + q + ")", "i"),
        bR = {},
        bS = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bT = {
            letterSpacing: 0,
            fontWeight: 400,
            lineHeight: 1
        },
        bU = ["Top", "Right", "Bottom", "Left"],
        bV = ["Webkit", "O", "Moz", "ms"],
        bW = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this, function(a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return bZ(this, !0)
        },
        hide: function() {
            return bZ(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bW.apply(this, arguments) : this.each(function() {
                (c ? a : bY(this)) ? p(this).show(): p(this).hide()
            })
        }
    }), p.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g, h, i = p.camelCase(c),
                j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bX(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d, g === "string" && (f = bQ.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
                j[c] = d
            } catch (k) {}
        },
        css: function(a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bX(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bT && (f = bT[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? bH = function(a, b) {
        var c, d, e, f, g = getComputedStyle(a, null),
            h = a.style;
        return g && (c = g[b], c === "" && !p.contains(a.ownerDocument.documentElement, a) && (c = p.style(a, b)), bP.test(c) && bN.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = c, c = g.width, h.width = d, h.minWidth = e, h.maxWidth = f)), c
    } : e.documentElement.currentStyle && (bH = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return e == null && f && f[b] && (e = f[b]), bP.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
    }), p.each(["height", "width"], function(a, b) {
        p.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth !== 0 || bH(a, "display") !== "none" ? ca(a, b, d) : p.swap(a, bS, function() {
                    return ca(a, b, d)
                })
            },
            set: function(a, c, d) {
                return b$(a, c, d ? b_(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }), p.support.opacity || (p.cssHooks.opacity = {
        get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }), p(function() {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function(a, b) {
                return p.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b) return bH(a, "marginRight")
                })
            }
        }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
            p.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bP.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }, p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a)
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        p.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bU[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, bN.test(a) || (p.cssHooks[a + b].set = b$)
    });
    var cc = /%20/g,
        cd = /\[\]$/,
        ce = /\r?\n/g,
        cf = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        cg = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || cg.test(this.nodeName) || cf.test(this.type))
            }).map(function(a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(ce, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ce, "\r\n")
                }
            }).get()
        }
    }), p.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) ch(d, a[d], c, f);
        return e.join("&").replace(cc, "+")
    };
    var ci, cj, ck = /#.*$/,
        cl = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        cm = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        cn = /^(?:GET|HEAD)$/,
        co = /^\/\//,
        cp = /\?/,
        cq = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cr = /([?&])_=[^&]*/,
        cs = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ct = p.fn.load,
        cu = {},
        cv = {},
        cw = ["*/"] + ["*"];
    try {
        ci = f.href
    } catch (cx) {
        ci = e.createElement("a"), ci.href = "", ci = ci.href
    }
    cj = cs.exec(ci.toLowerCase()) || [], p.fn.load = function(a, c, d) {
        if (typeof a != "string" && ct) return ct.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (f = "POST"), p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(cq, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        p.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function(a, c) {
        p[c] = function(a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), p.extend({
        getScript: function(a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? cA(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cA(a, b), a
        },
        ajaxSettings: {
            url: ci,
            isLocal: cm.test(cj[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cw
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: cy(cu),
        ajaxTransport: cy(cv),
        ajax: function(a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) return;
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cB(l, x, f));
                if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cC(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                else {
                    t = y;
                    if (!y || a) y = "error", a < 0 && (a = 0)
                }
                x.status = a, x.statusText = "" + (c || y), k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                m = l.context || l,
                n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                o = p.Deferred(),
                q = p.Callbacks("once memory"),
                r = l.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a, t[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return v === 2 ? e : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (v === 2) {
                            if (!f) {
                                f = {};
                                while (c = cl.exec(e)) f[c[1].toLowerCase()] = c[2]
                            }
                            c = f[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return v || (l.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || w, g && g.abort(a), y(0, a), this
                    }
                };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
                if (a) {
                    var b;
                    if (v < 2)
                        for (b in a) r[b] = [r[b], a[b]];
                    else b = a[x.status], x.always(b)
                }
                return this
            }, l.url = ((a || l.url) + "").replace(ck, "").replace(co, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = cs.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] == cj[1] && i[2] == cj[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (cj[3] || (cj[1] === "http:" ? 80 : 443)))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cz(cu, l, c, x);
            if (v === 2) return x;
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !cn.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (cp.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(),
                        A = l.url.replace(cr, "$1_=" + z);
                    l.url = A + (A === l.url ? (cp.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cw + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[k](l[k]);
                g = cz(cv, l, c, x);
                if (!g) y(-1, "No Transport");
                else {
                    x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        x.abort("timeout")
                    }, l.timeout));
                    try {
                        v = 1, g.send(t, y)
                    } catch (B) {
                        if (v < 2) y(-1, B);
                        else throw B
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cD = [],
        cE = /\?/,
        cF = /(=)\?(?=&|$)|\?\?/,
        cG = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cD.pop() || p.expando + "_" + cG++;
            return this[a] = !0, a
        }
    }), p.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && cF.test(j),
            m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cF.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cF, "$1" + f) : m ? c.data = i.replace(cF, "$1" + f) : k && (c.url += (cE.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || p.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cD.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
        }), "script"
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return p.globalEval(a), a
            }
        }
    }), p.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function(f, g) {
                    c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var cH, cI = a.ActiveXObject ? function() {
            for (var a in cH) cH[a](0, 1)
        } : !1,
        cJ = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && cK() || cL()
        } : cK,
        function(a) {
            p.extend(p.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
            if (!c.crossDomain || p.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || i.readyState === 4)) {
                                    d = b, g && (i.onreadystatechange = p.noop, cI && delete cH[g]);
                                    if (e) i.readyState !== 4 && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                        try {
                                            l.text = i.responseText
                                        } catch (a) {}
                                        try {
                                            j = i.statusText
                                        } catch (n) {
                                            j = ""
                                        }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                    }
                                }
                            } catch (o) {
                                e || f(-1, o)
                            }
                            l && f(h, j, l, k)
                        }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cJ, cI && (cH || (cH = {}, p(a).unload(cI)), cH[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cM, cN, cO = /^(?:toggle|show|hide)$/,
        cP = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        cQ = /queueHooks$/,
        cR = [cX],
        cS = {
            "*": [function(a, b) {
                var c, d, e, f = this.createTween(a, b),
                    g = cP.exec(b),
                    h = f.cur(),
                    i = +h || 0,
                    j = 1;
                if (g) {
                    c = +g[2], d = g[3] || (p.cssNumber[a] ? "" : "px");
                    if (d !== "px" && i) {
                        i = p.css(f.elem, a, !0) || c || 1;
                        do e = j = j || ".5", i = i / j, p.style(f.elem, a, i + d), j = f.cur() / h; while (j !== 1 && j !== e)
                    }
                    f.unit = d, f.start = i, f.end = g[1] ? i + (g[1] + 1) * c : c
                }
                return f
            }]
        };
    p.Animation = p.extend(cV, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d], cS[c] = cS[c] || [], cS[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? cR.unshift(a) : cR.push(a)
        }
    }), p.Tween = cY, cY.prototype = {
        constructor: cY,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = cY.propHooks[this.prop];
            return a && a.get ? a.get(this) : cY.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = cY.propHooks[this.prop];
            return this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cY.propHooks._default.set(this), this
        }
    }, cY.prototype.init.prototype = cY.prototype, cY.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },
            set: function(a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, cY.propHooks.scrollTop = cY.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, p.each(["toggle", "show", "hide"], function(a, b) {
        var c = p.fn[b];
        p.fn[b] = function(d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(cZ(b, !0), d, e, f)
        }
    }), p.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bY).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = p.isEmptyObject(a),
                f = p.speed(b, c, d),
                g = function() {
                    var b = cV(this, p.extend({}, a), f);
                    e && b.stop(!0)
                };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = a != null && a + "queueHooks",
                    f = p.timers,
                    g = p._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cQ.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && p.dequeue(this, a)
            })
        }
    }), p.each({
        slideDown: cZ("show"),
        slideUp: cZ("hide"),
        slideToggle: cZ("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        p.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        return d.old = d.complete, d.complete = function() {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, p.timers = [], p.fx = cY.prototype.init, p.fx.tick = function() {
        var a, b = p.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop()
    }, p.fx.timer = function(a) {
        a() && p.timers.push(a) && !cN && (cN = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function() {
        clearInterval(cN), cN = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
            return a === b.elem
        }).length
    });
    var c$ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            p.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j, k, l, m = this[0],
            n = m && m.ownerDocument;
        if (!n) return;
        return (e = n.body) === m ? p.offset.bodyOffset(m) : (d = n.documentElement, p.contains(d, m) ? (c = m.getBoundingClientRect(), f = c_(n), g = d.clientTop || e.clientTop || 0, h = d.clientLeft || e.clientLeft || 0, i = f.pageYOffset || d.scrollTop, j = f.pageXOffset || d.scrollLeft, k = c.top + i - g, l = c.left + j - h, {
            top: k,
            left: l
        }) : {
            top: 0,
            left: 0
        })
    }, p.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a),
                f = e.offset(),
                g = p.css(a, "top"),
                h = p.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                j = {},
                k = {},
                l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, p.fn.extend({
        position: function() {
            if (!this[0]) return;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = c$.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || e.body;
                while (a && !c$.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                return a || e.body
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function(e) {
            return p.access(this, function(a, e, f) {
                var g = c_(a);
                if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        p.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            p.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean"),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function(c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return p
    })
})(window);;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }
        deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);
var TWEEN = TWEEN || (function() {
    var i, tl, interval, time, fps = 60,
        autostart = false,
        tweens = [],
        num_tweens;
    return {
        setFPS: function(f) {
            fps = f || 60;
        },
        start: function(f) {
            if (arguments.length != 0) {
                this.setFPS(f);
            }
            interval = setInterval(this.update, 1000 / fps);
        },
        stop: function() {
            clearInterval(interval);
        },
        setAutostart: function(value) {
            autostart = value;
            if (autostart && !interval) {
                this.start();
            }
        },
        add: function(tween) {
            tweens.push(tween);
            if (autostart && !interval) {
                this.start();
            }
        },
        getAll: function() {
            return tweens;
        },
        removeAll: function() {
            tweens = [];
        },
        remove: function(tween) {
            i = tweens.indexOf(tween);
            if (i !== -1) {
                tweens.splice(i, 1);
            }
        },
        update: function(_time) {
            i = 0;
            num_tweens = tweens.length;
            var time = _time || new Date().now();
            while (i < num_tweens) {
                if (tweens[i].update(time)) {
                    i++;
                } else {
                    tweens.splice(i, 1);
                    num_tweens--;
                }
            }
            if (num_tweens == 0 && autostart == true) {
                this.stop();
            }
        }
    };
})();
TWEEN.Tween = function(object) {
    var _object = object,
        _valuesStart = {},
        _valuesDelta = {},
        _valuesEnd = {},
        _duration = 1000,
        _delayTime = 0,
        _startTime = null,
        _easingFunction = TWEEN.Easing.Linear.EaseNone,
        _chainedTween = null,
        _onUpdateCallback = null,
        _onCompleteCallback = null;
    this.to = function(properties, duration) {
        if (duration !== null) {
            _duration = duration;
        }
        for (var property in properties) {
            if (_object[property] === null) {
                continue;
            }
            _valuesEnd[property] = properties[property];
        }
        return this;
    };
    this.start = function(_time) {
        TWEEN.add(this);
        _startTime = _time ? _time + _delayTime : new Date().getTime() + _delayTime;
        for (var property in _valuesEnd) {
            if (_object[property] === null) {
                continue;
            }
            _valuesStart[property] = _object[property];
            _valuesDelta[property] = _valuesEnd[property] - _object[property];
        }
        return this;
    };
    this.stop = function() {
        TWEEN.remove(this);
        return this;
    };
    this.delay = function(amount) {
        _delayTime = amount;
        return this;
    };
    this.easing = function(easing) {
        _easingFunction = easing;
        return this;
    };
    this.chain = function(chainedTween) {
        _chainedTween = chainedTween;
        return this;
    };
    this.onUpdate = function(onUpdateCallback) {
        _onUpdateCallback = onUpdateCallback;
        return this;
    };
    this.onComplete = function(onCompleteCallback) {
        _onCompleteCallback = onCompleteCallback;
        return this;
    };
    this.update = function(time) {
        var property, elapsed, value;
        if (time < _startTime) {
            return true;
        }
        elapsed = (time - _startTime) / _duration;
        elapsed = elapsed > 1 ? 1 : elapsed;
        value = _easingFunction(elapsed);
        for (property in _valuesDelta) {
            _object[property] = _valuesStart[property] + _valuesDelta[property] * value;
        }
        if (_onUpdateCallback !== null) {
            _onUpdateCallback.call(_object, value);
        }
        if (elapsed == 1) {
            if (_onCompleteCallback !== null) {
                _onCompleteCallback.call(_object);
            }
            if (_chainedTween !== null) {
                _chainedTween.start();
            }
            return false;
        }
        return true;
    };
}
TWEEN.Easing = {
    Linear: {},
    Quadratic: {},
    Cubic: {},
    Quartic: {},
    Quintic: {},
    Sinusoidal: {},
    Exponential: {},
    Circular: {},
    Elastic: {},
    Back: {},
    Bounce: {}
};
TWEEN.Easing.Linear.EaseNone = function(k) {
    return k;
};
TWEEN.Easing.Quadratic.EaseIn = function(k) {
    return k * k;
};
TWEEN.Easing.Quadratic.EaseOut = function(k) {
    return -k * (k - 2);
};
TWEEN.Easing.Quadratic.EaseInOut = function(k) {
    if ((k *= 2) < 1) return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
};
TWEEN.Easing.Cubic.EaseIn = function(k) {
    return k * k * k;
};
TWEEN.Easing.Cubic.EaseOut = function(k) {
    return --k * k * k + 1;
};
TWEEN.Easing.Cubic.EaseInOut = function(k) {
    if ((k *= 2) < 1) return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
};
TWEEN.Easing.Quartic.EaseIn = function(k) {
    return k * k * k * k;
};
TWEEN.Easing.Quartic.EaseOut = function(k) {
    return -(--k * k * k * k - 1);
}
TWEEN.Easing.Quartic.EaseInOut = function(k) {
    if ((k *= 2) < 1) return 0.5 * k * k * k * k;
    return -0.5 * ((k -= 2) * k * k * k - 2);
};
TWEEN.Easing.Quintic.EaseIn = function(k) {
    return k * k * k * k * k;
};
TWEEN.Easing.Quintic.EaseOut = function(k) {
    return (k = k - 1) * k * k * k * k + 1;
};
TWEEN.Easing.Quintic.EaseInOut = function(k) {
    if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
    return 0.5 * ((k -= 2) * k * k * k * k + 2);
};
TWEEN.Easing.Sinusoidal.EaseIn = function(k) {
    return -Math.cos(k * Math.PI / 2) + 1;
};
TWEEN.Easing.Sinusoidal.EaseOut = function(k) {
    return Math.sin(k * Math.PI / 2);
};
TWEEN.Easing.Sinusoidal.EaseInOut = function(k) {
    return -0.5 * (Math.cos(Math.PI * k) - 1);
};
TWEEN.Easing.Exponential.EaseIn = function(k) {
    return k == 0 ? 0 : Math.pow(2, 10 * (k - 1));
};
TWEEN.Easing.Exponential.EaseOut = function(k) {
    return k == 1 ? 1 : -Math.pow(2, -10 * k) + 1;
};
TWEEN.Easing.Exponential.EaseInOut = function(k) {
    if (k == 0) return 0;
    if (k == 1) return 1;
    if ((k *= 2) < 1) return 0.5 * Math.pow(2, 10 * (k - 1));
    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
};
TWEEN.Easing.Circular.EaseIn = function(k) {
    return -(Math.sqrt(1 - k * k) - 1);
};
TWEEN.Easing.Circular.EaseOut = function(k) {
    return Math.sqrt(1 - --k * k);
};
TWEEN.Easing.Circular.EaseInOut = function(k) {
    if ((k /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
};
TWEEN.Easing.Elastic.EaseIn = function(k) {
    var s, a = 0.1,
        p = 0.4;
    if (k == 0) return 0;
    if (k == 1) return 1;
    if (!p) p = 0.3;
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(1 / a);
    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
};
TWEEN.Easing.Elastic.EaseOut = function(k) {
    var s, a = 0.1,
        p = 0.4;
    if (k == 0) return 0;
    if (k == 1) return 1;
    if (!p) p = 0.3;
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(1 / a);
    return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
};
TWEEN.Easing.Elastic.EaseInOut = function(k) {
    var s, a = 0.1,
        p = 0.4;
    if (k == 0) return 0;
    if (k == 1) return 1;
    if (!p) p = 0.3;
    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(1 / a);
    if ((k *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
};
TWEEN.Easing.Back.EaseIn = function(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
};
TWEEN.Easing.Back.EaseOut = function(k) {
    var s = 1.70158;
    return (k = k - 1) * k * ((s + 1) * k + s) + 1;
};
TWEEN.Easing.Back.EaseInOut = function(k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
};
TWEEN.Easing.Bounce.EaseIn = function(k) {
    return 1 - TWEEN.Easing.Bounce.EaseOut(1 - k);
};
TWEEN.Easing.Bounce.EaseOut = function(k) {
    if ((k /= 1) < (1 / 2.75)) {
        return 7.5625 * k * k;
    } else if (k < (2 / 2.75)) {
        return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
    } else if (k < (2.5 / 2.75)) {
        return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
    } else {
        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
    }
};
TWEEN.Easing.Bounce.EaseInOut = function(k) {
    if (k < 0.5) return TWEEN.Easing.Bounce.EaseIn(k * 2) * 0.5;
    return TWEEN.Easing.Bounce.EaseOut(k * 2 - 1) * 0.5 + 0.5;
};;
(function($) {
    function getTransformProperty(element) {
        var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
        var p;
        while (p = properties.shift()) {
            if (element && typeof element.style[p] != 'undefined') {
                return p;
            }
        }
        return 'transform';
    }
    var _propsObj = null;
    var proxied = $.fn.css;
    $.fn.css = function(arg, val) {
        if (_propsObj === null) {
            if (typeof $.cssProps != 'undefined') {
                _propsObj = $.cssProps;
            } else if (typeof $.props != 'undefined') {
                _propsObj = $.props;
            } else {
                _propsObj = {}
            }
        }
        if (typeof _propsObj['transform'] == 'undefined' && (arg == 'transform' || (typeof arg == 'object' && typeof arg['transform'] != 'undefined'))) {
            _propsObj['transform'] = getTransformProperty(this.get(0));
        }
        if (_propsObj['transform'] != 'transform') {
            if (arg == 'transform') {
                arg = _propsObj['transform'];
                if (typeof val == 'undefined' && jQuery.style) {
                    return jQuery.style(this.get(0), arg);
                }
            } else if (typeof arg == 'object' && typeof arg['transform'] != 'undefined') {
                arg[_propsObj['transform']] = arg['transform'];
                delete arg['transform'];
            }
        }
        return proxied.apply(this, arguments);
    };
})(jQuery);;

function in_array(tableau, p_val) {
    var l = tableau.length;
    for (var i = 0; i < l; i++) {
        if (tableau[i] == p_val) {
            rowid = i;
            return true;
        }
    }
    return false;
}

function retrieveImages(container) {
    var imgs = new Array();
    var url = "";
    $(container).find("img").each(function() {
        url = $(this).attr("src");
        if (!in_array(imgs, url)) imgs.push(url);
    });
    var everything = $(container).find("div, li").each(function() {
        var url = "";
        if ($(this).css("background-image") != "none") {
            url = $(this).css("background-image");
            url = url.replace("url(\"", "");
            url = url.replace("url(", "");
            url = url.replace("\")", "");
            url = url.replace(")", "");
            if (url.length > 0) {
                if (!in_array(imgs, url)) imgs.push(url);
            }
        }
    });
    return imgs;
};
(function($) {
    var $preload = $.preload = function(original, settings) {
        if (original.split)
            original = $(original);
        settings = $.extend({}, $preload.defaults, settings);
        var sources = $.map(original, function(source) {
            if (!source)
                return;
            if (source.split)
                return settings.base + source + settings.ext;
            var url = source.src || source.href;
            if (typeof settings.placeholder == 'string' && source.src)
                source.src = settings.placeholder;
            if (url && settings.find)
                url = url.replace(settings.find, settings.replace);
            return url || null;
        });
        var data = {
            loaded: 0,
            failed: 0,
            next: 0,
            done: 0,
            total: sources.length
        };
        if (!data.total)
            return finish();
        var imgs = $(Array(settings.threshold + 1).join('<img/>')).load(handler).error(handler).bind('abort', handler).each(fetch);

        function handler(e) {
            data.element = this;
            data.found = e.type == 'load';
            data.image = this.src;
            data.index = this.index;
            var orig = data.original = original[this.index];
            data[data.found ? 'loaded' : 'failed'] ++;
            data.done++;
            if (settings.enforceCache)
                $preload.cache.push($('<img/>').attr('src', data.image)[0]);
            if (settings.placeholder && orig.src)
                orig.src = data.found ? data.image : settings.notFound || orig.src;
            if (settings.onComplete)
                settings.onComplete(data);
            if (data.done < data.total)
                fetch(0, this);
            else {
                if (imgs && imgs.unbind)
                    imgs.unbind('load').unbind('error').unbind('abort');
                imgs = null;
                finish();
            }
        };

        function fetch(i, img, retry) {
            if (img.attachEvent && data.next && data.next % $preload.gap == 0 && !retry) {
                setTimeout(function() {
                    fetch(i, img, true);
                }, 0);
                return false;
            }
            if (data.next == data.total) return false;
            img.index = data.next;
            img.src = sources[data.next++];
            if (settings.onRequest) {
                data.index = img.index;
                data.element = img;
                data.image = img.src;
                data.original = original[data.next - 1];
                settings.onRequest(data);
            }
        };

        function finish() {
            if (settings.onFinish)
                settings.onFinish(data);
        };
    };
    $preload.gap = 5;
    $preload.cache = [];
    $preload.defaults = {
        threshold: 2,
        base: '',
        ext: '',
        replace: ''
    };
    $.fn.preload = function(settings) {
        $preload(this, settings);
        return this;
    };
})(jQuery);;
jQuery.fn.extend({
    everyTime: function(interval, label, fn, times) {
        return this.each(function() {
            jQuery.timer.add(this, interval, label, fn, times)
        })
    },
    oneTime: function(interval, label, fn) {
        return this.each(function() {
            jQuery.timer.add(this, interval, label, fn, 1)
        })
    },
    stopTime: function(label, fn) {
        return this.each(function() {
            jQuery.timer.remove(this, label, fn)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            'ms': 1,
            'cs': 10,
            'ds': 100,
            's': 1000,
            'das': 10000,
            'hs': 100000,
            'ks': 1000000
        },
        timeParse: function(value) {
            if (value == undefined || value == null) return null;
            var result = this.regex.exec(jQuery.trim(value.toString()));
            if (result[2]) {
                var num = parseFloat(result[1]);
                var mult = this.powers[result[2]] || 1;
                return num * mult
            } else {
                return value
            }
        },
        add: function(element, interval, label, fn, times) {
            var counter = 0;
            if (jQuery.isFunction(label)) {
                if (!times) times = fn;
                fn = label;
                label = interval
            }
            interval = jQuery.timer.timeParse(interval);
            if (typeof interval != 'number' || isNaN(interval) || interval < 0) return;
            if (typeof times != 'number' || isNaN(times) || times < 0) times = 0;
            times = times || 0;
            var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
            if (!timers[label]) timers[label] = {};
            fn.timerID = fn.timerID || this.guid++;
            var handler = function() {
                if ((++counter > times && times !== 0) || fn.call(element, counter) === false) jQuery.timer.remove(element, label, fn)
            };
            handler.timerID = fn.timerID;
            if (!timers[label][fn.timerID]) timers[label][fn.timerID] = window.setInterval(handler, interval);
            this.global.push(element)
        },
        remove: function(element, label, fn) {
            var timers = jQuery.data(element, this.dataKey),
                ret;
            if (timers) {
                if (!label) {
                    for (label in timers) this.remove(element, label, fn)
                } else if (timers[label]) {
                    if (fn) {
                        if (fn.timerID) {
                            window.clearInterval(timers[label][fn.timerID]);
                            delete timers[label][fn.timerID]
                        }
                    } else {
                        for (var fn in timers[label]) {
                            window.clearInterval(timers[label][fn]);
                            delete timers[label][fn]
                        }
                    }
                    for (ret in timers[label]) break;
                    if (!ret) {
                        ret = null;
                        delete timers[label]
                    }
                }
                for (ret in timers) break;
                if (!ret) jQuery.removeData(element, this.dataKey)
            }
        }
    }
});
jQuery(window).bind("unload", function() {
    jQuery.each(jQuery.timer.global, function(index, item) {
        jQuery.timer.remove(item)
    })
});;
var ScrollController = function() {
    var settings = {},
        page, started = false,
        paused = false,
        animation = null;
    var w = $(window),
        d = $(document),
        touch = false,
        touchStart = {
            x: 0,
            y: 0
        },
        scrollStart = 0,
        scrollTopTweened = 0,
        scrollTop = 0,
        scrollDirection = 0,
        autoScrollInterval;

    function animationLoop() {
        requestAnimFrame(animationLoop);
        if (paused) return;
        if (Math.ceil(scrollTopTweened) !== Math.floor(scrollTop)) {
            scrollTopTweened += settings.tweenSpeed * (scrollTop - scrollTopTweened);
            scrollDirection = scrollTop > scrollTopTweened ? 1 : -1;
            for (var i in animation) {
                var anim = animation[i];
                if (scrollTopTweened >= anim.startAt && scrollTopTweened <= anim.endAt) {
                    startAnimatable(anim);
                    render(anim);
                } else {
                    stopAnimatable(anim);
                }
            }
            if (typeof settings.onUpdate === 'function') settings.onUpdate(scrollTopTweened);
        }
    }
    var has3d = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    var hascsstrans = Modernizr.csstransitions;
    var isiPhone = navigator.userAgent.match(/android.+mobile|avantgo|android|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i) != null;

    function render(anim) {
        var progress = (anim.startAt - scrollTopTweened) / (anim.startAt - anim.endAt);
        progress = Math.max(0, Math.min(1, progress));
        var properties = {};
        anim.lastProgress = progress;
        var isMobile = (isiPhone || isiPad);
        if (anim.keyframes) {
            for (var i = 1; i < anim.keyframes.length; i++) {
                var keyframe = anim.keyframes[i],
                    lastkeyframe = anim.keyframes[i - 1],
                    keyframeProgress = (lastkeyframe.position - progress) / (lastkeyframe.position - keyframe.position);
                if (keyframeProgress >= 0 && keyframeProgress <= 1) {
                    if (keyframe.onProgress && typeof keyframe.onProgress === 'function') {
                        keyframe.onProgress(keyframeProgress, scrollDirection);
                    }
                    for (var property in keyframe.properties) {
                        if (property === "background-position" && keyframe.properties[property].hasOwnProperty("x") && !isMobile) {
                            var startValues = keyframe.properties[property];
                            var endValues = lastkeyframe.properties[property];
                            var result = "";
                            if (typeof startValues.x === "number") {
                                result += getTweenedValue(endValues.x, startValues.x, keyframeProgress, 1, keyframe.ease) + "px";
                            } else {
                                result += startValues.x
                            }
                            result += " ";
                            if (typeof startValues.y === "number") {
                                result += getTweenedValue(endValues.y, startValues.y, keyframeProgress, 1, keyframe.ease) + "px";
                            } else {
                                result += startValues.y
                            }
                            properties[property] = result;
                        } else if (property === "rotate" && !isMobile) {
                            properties["transform"] = "rotate(" + getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease) + "deg)";
                        } else if (property === "top" && has3d) {
                            properties["transform"] = "translateY(" + getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease) + "px)";
                        } else if (property === "translate3d") {
                            if (has3d) {
                                properties["transform"] = "translate3d(" + getTweenedValue(lastkeyframe.properties["ref-left"], keyframe.properties["ref-left"], keyframeProgress, 1, keyframe.ease) + "px, " + getTweenedValue(lastkeyframe.properties["ref-top"], keyframe.properties["ref-top"], keyframeProgress, 1, keyframe.ease) + "px, 0px)";
                            } else {
                                properties["top"] = getTweenedValue(lastkeyframe.properties["ref-top"], keyframe.properties["ref-top"], keyframeProgress, 1, keyframe.ease);
                                properties["left"] = getTweenedValue(lastkeyframe.properties["ref-left"], keyframe.properties["ref-left"], keyframeProgress, 1, keyframe.ease);
                            }
                        } else if (property === "rotateLeft") {
                            if (has3d && !isMobile) {
                                properties["transform"] = "rotate(" + getTweenedValue(lastkeyframe.properties["ref-rotate"], keyframe.properties["ref-rotate"], keyframeProgress, 1, keyframe.ease) + "deg) translate3d(" + getTweenedValue(lastkeyframe.properties["ref-left"], keyframe.properties["ref-left"], keyframeProgress, 1, keyframe.ease) + "px, 0px, 0px)";
                            } else {
                                properties["left"] = getTweenedValue(lastkeyframe.properties["ref-left"], keyframe.properties["ref-left"], keyframeProgress, 1, keyframe.ease);
                            }
                        } else if (property === "ref-rotate" || property === "ref-left" || property === "ref-top") {} else if (property === "left" && has3d) {
                            properties["transform"] = "translate3d(" + getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease) + "px, 0px, 0px)";
                        } else if (property === "margin-left" && has3d) {
                            properties["transform"] = "translate3d(" + getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease) + "px, 0px, 0px)";
                        } else if (property === "margin-top" && has3d) {
                            properties["transform"] = "translate3d(0px, " + getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease) + "px, 0px)";
                        } else if (property === "scale" && !isMobile) {} else if (property === "image") {
                            var id = Math.round(getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease));
                            $("#section10 img").not($("#section10-img" + id)).css({
                                "margin-top": "200%"
                            });
                            $("#section10-img" + id).css({
                                "margin-top": 0
                            });
                        } else {
                            properties[property] = getTweenedValue(lastkeyframe.properties[property], keyframe.properties[property], keyframeProgress, 1, keyframe.ease);
                        }
                    }
                }
            }
        }
        anim._elem.css(properties);
        if (anim.onProgress && typeof anim.onProgress === 'function') {
            anim.onProgress.call(anim, progress);
        }
    }

    function startAnimatable(anim) {
        if (!anim._started) {
            if (anim.onStartAnimate && typeof anim.onStartAnimate === 'function') {
                anim.onStartAnimate.call(anim, scrollDirection);
            } else {
                anim._elem.css('display', 'block');
            }
            anim._started = true;
        }
    }

    function stopAnimatable(anim) {
        if ((anim._started && anim.endAt < scrollTopTweened || anim._started && anim.startAt > scrollTopTweened) || (scrollDirection < 0 && anim.lastProgress > 0 && anim.startAt > scrollTopTweened) || (scrollDirection > 0 && anim.lastProgress < 1 && anim.endAt < scrollTopTweened)) {
            render(anim);
            if (anim.onEndAnimate && typeof anim.onEndAnimate === 'function') {
                anim.onEndAnimate.call(anim, scrollDirection);
            } else {
                anim._elem.css('display', 'none');
            }
            anim._started = false;
        }
    }

    function setAnimatable() {
        for (var i in animation) {
            var anim = animation[i];
            anim.lastProgress = 0;
            if (anim._elem == undefined) {
                anim._elem = $(anim.selector);
            }
            if (typeof anim.onInit == 'function') anim.onInit.call(anim);
            for (var k in anim.keyframes) {
                var keyframe = anim.keyframes[k];
                if (keyframe.position == 0) {
                    var nKeyframe = anim.keyframes[Number(k) + 1];
                    for (var property in nKeyframe.properties) {
                        if (keyframe.properties[property] == undefined) {
                            if (/left|top/.test(property)) {
                                keyframe.properties[property] = anim._elem.position()[property];
                            }
                        }
                    }
                }
                var bIndex = Number(k);
                while (bIndex > 0) {
                    var bKeyframe = anim.keyframes[bIndex];
                    for (var property in bKeyframe.properties) {
                        if (keyframe.properties[property] == undefined) {
                            keyframe.properties[property] = bKeyframe.properties[property];
                        }
                    }
                    bIndex--;
                };
                if (typeof keyframe.onInit == 'function') keyframe.onInit(anim);
            }
        }
    }

    function resize() {
        var container = settings.container;
        page = {
            wWidth: settings.container.width(),
            wHeight: settings.container.height(),
            wCenter: {
                left: settings.container.width() / 2,
                top: settings.container.height() / 2
            }
        };
        if (settings.onResize && typeof settings.onResize === 'function') settings.onResize(page);
        resetAnimatable();
        setAnimatable();
        start();
    }

    function resetAnimatable() {
        for (var i in animation) {
            var anim = animation[i];
            if (anim._started) {
                delete anim._elem;
                delete anim._started;
            }
        }
    }
    var reloading = false;

    function resizeHandler(e) {
        window.groupSound.mute();
        $(document).stopTime("resizzMe");
        $(document).oneTime(1000, "resizzMe", function() {
            window.groupSound.unmute();
        });
        resize();
    }

    function touchStartHandler(e) {
        touchStart.x = e.touches[0].pageX;
        touchStart.y = e.touches[0].pageY;
        scrollStart = scrollTop;
    };

    function touchEndHandler(e) {}

    function touchMoveHandler(e) {
        e.preventDefault();
        if (paused) return;
        var offset = {};
        for (var i = 0; i < settings.directionTouch.length; i++) {
            if (scrollTop > settings.directionTouch[i].start && scrollTop < settings.directionTouch[i].end) {
                switch (settings.directionTouch[i].direction) {
                    case "up":
                        offset.y = touchStart.y - e.touches[0].pageY;
                        scrollTop = Math.max(0, scrollStart + offset.y);
                        break;
                    case "left":
                        offset.x = (touchStart.x - e.touches[0].pageX);
                        scrollTop = Math.max(0, scrollStart + offset.x);
                        break;
                    case "down":
                        offset.y = touchStart.y - e.touches[0].pageY;
                        scrollTop = Math.max(0, scrollStart - offset.y);
                        break;
                }
                if (scrollTop > settings.directionTouch[i].end) scrollTop = settings.directionTouch[i].end + 0.1;
                else if (scrollTop < settings.directionTouch[i].start) scrollTop = settings.directionTouch[i].start - 0.1;
                break;
            }
        }
        checkScrollExtents();
    }

    function wheelHandler(e, delta, deltaX, deltaY) {
        if (paused) return;
        scrollTop -= delta * settings.scrollSpeed;
        if (scrollTop < 0) scrollTop = 0;
        checkScrollExtents();
    };

    function checkScrollExtents() {
        if (scrollTop < 0) scrollTop = 0;
        else if (scrollTop > settings.maxScroll) scrollTop = settings.maxScroll;
    }

    function getTweenedValue(start, end, currentTime, totalTime, tweener) {
        var delta = end - start;
        var percentComplete = currentTime / totalTime;
        if (!tweener) tweener = TWEEN.Easing.Linear.EaseNone;
        return tweener(percentComplete) * delta + start
    }

    function isTouch() {
        return 'ontouchstart' in window;
    }

    function resetAnimation() {
        animation = settings.animation;
    }

    function setSettings(settings) {
        settings = settings;
    }

    function init(opts) {
        var defaults = {
            maxScroll: 1000,
            tickSpeed: 30,
            scrollSpeed: 40,
            directionTouch: [],
            tweenSpeed: .5
        };
        settings = $.extend(defaults, opts);
        animation = settings.animation;
        touch = isTouch();
        if (touch) {
            var container = settings.container[0];
            container.addEventListener('touchstart', touchStartHandler, true);
            container.addEventListener('touchmove', touchMoveHandler, true);
            container.addEventListener('touchend', touchEndHandler, true);
        }
        d.on('mousewheel', wheelHandler);
        w.on('resize', resizeHandler);
        window.requestAnimFrame = (function() {
            return function(callback) {
                window.setTimeout(callback, settings.tickSpeed);
            }
        })();
        resize();
        return this;
    };

    function start() {
        if (!started && settings.startAt) scrollTopTweened = scrollTop = settings.startAt;
        scrollTop++;
        if (!started) {
            animationLoop();
            started = true;
        };
        if (settings.onStart && typeof settings.onStart === 'function') {
            settings.onStart();
        }
    };

    function getPageInfo() {
        return page;
    };

    function getScrollTop() {
        return scrollTopTweened;
    };

    function getMaxScroll() {
        return settings.maxScroll;
    };

    function scrollTo(scroll) {
        if (paused) return;
        scrollTop = scroll;
    };

    function autoScrollStart() {
        if (autoScrollInterval) return;
        autoScrollInterval = setInterval(aScroll, 50);
    }

    function autoScrollStop() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }

    function aScroll() {
        scrollTop += 9;
        if (scrollTop >= settings.maxScroll) {
            autoScrollStop();
            $("#autoplay").addClass("disabled");
        }
    }

    function stopScroll() {
        scrollTopTweened = scrollTop;
    }

    function pauseScroll() {
        paused = true;
    }

    function resumeScroll() {
        paused = false;
    }
    return {
        init: init,
        start: start,
        pause: pauseScroll,
        resume: resumeScroll,
        resetAnimation: resetAnimation,
        setSettings: setSettings,
        getPageInfo: getPageInfo,
        getScrollTop: getScrollTop,
        getMaxScroll: getMaxScroll,
        autoScrollStart: autoScrollStart,
        autoScrollStop: autoScrollStop,
        stopScroll: stopScroll,
        scrollTo: scrollTo,
        resize: resize
    }
};;
var StageController = StageController || (function() {
    var _public = {
        windowWidth: 0,
        windowHeight: 0,
        minWidth: 0,
        minHeight: 0,
        stageWidth: 0,
        stageHeight: 0,
        sceneWidth: 0,
        sceneHeight: 0,
        isDebug: true
    };
    var _funcArr = [];
    var _nameArr = [];

    function init() {
        window.onresize = window.onorientationchange = onResize;
        onResize();
    }

    function addListener(name, func) {
        var check = jQuery.inArray(name, _nameArr);
        if (check > -1) {
            return;
        }
        _nameArr.unshift(name);
        _funcArr.unshift(func);
        func();
    }

    function addAutoListener(func) {
        if (Address.curSub == undefined) addListener(Address.curId, func);
        else addListener(Address.curSub, func);
    }

    function removeListener(name) {
        var check = jQuery.inArray(name, _nameArr);
        if (check > -1) {
            _nameArr.splice(check, 1);
            _funcArr.splice(check, 1);
        }
    }

    function onResize() {
        if (document.documentElement) {
            _public.windowWidth = document.documentElement.clientWidth;
            _public.windowHeight = document.documentElement.clientHeight;
        } else if (document.body.clientWidth) {
            _public.windowWidth = document.body.clientWidth;
            _public.windowHeight = document.body.clientHeight;
        } else {
            _public.windowWidth = window.innerWidth;
            _public.windowHeight = window.innerHeight;
        }
        _public.stageWidth = _public.windowWidth < _public.minWidth ? _public.minWidth : _public.windowWidth;
        _public.stageHeight = _public.windowHeight < _public.minHeight ? _public.minHeight : _public.windowHeight;
        var i = _funcArr.length;
        while (i--) _funcArr[i]();
    }
    $(document).ready(init);
    _public.addListener = addListener;
    _public.addAutoListener = addAutoListener;
    _public.removeListener = removeListener;
    _public.onResize = onResize;
    return _public;
})();;
if (!window.requestAnimFrame) {
    window.requestAnimFrame = (function(window) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })(window);
}
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function() {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}
EKTweener = (function(doc, w) {
    var undef;
    var app = {};
    var _browserPrefix = "";
    var _dummy;
    var _dummyStyle;
    var HTMLPlugins = {};
    var HTMLPrefixedStyle = [];
    var HTMLStyleAlias = {};
    var HTMLSuffix = {
        width: "px",
        height: "px",
        top: "px",
        left: "px",
        bottom: "px",
        right: "px",
        marginTop: "px",
        marginLeft: "px",
        marginBottom: "px",
        marginRight: "px",
        paddingTop: "px",
        paddingLeft: "px",
        paddingBottom: "px",
        paddingRight: "px",
        fontSize: "px",
        size: "px"
    };
    var _targetTweens = [];

    function _isHTMLElement(target) {
        return typeof HTMLElement === "object" ? target instanceof HTMLElement : typeof target === "object" && target.nodeType === 1 && typeof target.nodeName === "string";
    };

    function _isStyle(target) {
        return typeof CSSStyleDeclaration === "object" ? target instanceof CSSStyleDeclaration : typeof target === "object" && typeof target.cssText === "string";
    };

    function _init() {
        var testedElement = doc.createElement("div");
        var browserPrefixes = 'Webkit Moz O ms'.split(' ');
        var i = browserPrefixes.length;
        while (i--) {
            if (browserPrefixes[i] + "Transform" in testedElement.style) {
                _browserPrefix = browserPrefixes[i];
                break;
            }
        }
    }

    function getPropertyName(name) {
        if (HTMLStyleAlias[name]) name = HTMLStyleAlias[name];
        for (var i = 0; i < HTMLPrefixedStyle.length; i++)
            if (HTMLPrefixedStyle[i] === name) return _browserPrefix + name.charAt(0).toUpperCase() + name.slice(1);
        return name;
    }

    function _parseNaming(data) {
        for (var name in data) {
            var newName = name;
            if (HTMLStyleAlias[name]) newName = HTMLStyleAlias[name];
            for (var i = 0; i < HTMLPrefixedStyle.length; i++)
                if (HTMLPrefixedStyle[i] === newName) {
                    newName = _browserPrefix + newName.charAt(0).toUpperCase() + newName.slice(1);
                    break
                };
            if (name !== newName) {
                data[newName] = data[name];
                delete data[name];
            }
        }
    }

    function _parseDataNaming(data) {
        _parseNaming(data);
        _parseNaming(data.plugin);
    }

    function _parseHTMLStyle(target, data) {
        if (!data.plugin) data.plugin = {};
        if (!data.suffix) data.suffix = {};
        for (property in data) {
            if (HTMLPlugins[property] && !data.plugin[property]) {
                data.plugin[property] = HTMLPlugins[property];
            }
            if (HTMLSuffix[property] && !data.suffix[property]) {
                data.suffix[property] = HTMLSuffix[property];
            }
        }
        _parseDataNaming(data);
    }

    function to(target, duration, data, hasFrom) {
        var appliedTarget;
        if (_isHTMLElement(target) && data.skipHTMLParsing != true) {
            appliedTarget = target.style;
            _parseHTMLStyle(target, data);
        } else {
            appliedTarget = target;
            data.appliedTarget = target;
        }
        if (typeof target.tweenId === "undefined") {
            target.tweenId = _targetTweens.length;
            _targetTweens[target.tweenId] = [];
        }
        var delay = data.delay == undef ? 0 : data.delay;
        delete data.delay;
        var ekTween = new EKTween(target, appliedTarget, duration, delay, data, hasFrom || false);
        _targetTweens[target.tweenId].push(ekTween);
        if (!hasFrom) ekTween.onLoop();
        return ekTween;
    };

    function fromTo(target, duration, fromData, toData) {
        var ekTween = to(target, duration, toData, true);
        if (_isHTMLElement(target) && toData.skipHTMLParsing != true) _parseDataNaming(fromData);
        for (var i in fromData) ekTween.changeFrom(i, fromData[i]);
        ekTween.onLoop();
        return ekTween;
    };

    function killTweensOf(target) {
        var tween = _targetTweens[target.tweenId];
        if (tween) {
            while (tween[0]) {
                tween[0].removeProperties();
                tween[0].kill();
                delete tween[0];
            }
            tween.splice(0, tween.length);
        }
    };

    function getTweens(target) {
        return _targetTweens[target.tweenId];
    };

    function getTween(target, propertyName) {
        if (HTMLStyleAlias[propertyName]) propertyName = HTMLStyleAlias[propertyName];
        var arr = getTweens(target);
        if (!arr) return null;
        var i = arr.length;
        while (i--)
            if (arr[i].properties[propertyName]) return arr[i];
        return null;
    };

    function getStyle(name, cssText) {
        propertyName = getPropertyName(name);
        var styleName = styleName;
        var re = /[A-Z]/g;
        if (re.test(propertyName)) {
            styleName = propertyName.replace(re, function() {
                return "-" + arguments[0].toLowerCase()
            });
            if (styleName.indexOf("ms") == 0) styleName = "-" + styleName;
        }
        if (doc.body) {
            if (!_dummy) {
                _dummy = doc.createElement("div");
                _dummyStyle = _dummy.style;
                _dummyStyle.position = "absolute";
                _dummyStyle.top = _dummyStyle.left = "-9000px";
                document.body.appendChild(_dummy);
            }
            _dummyStyle[propertyName] = cssText;
            return w.getComputedStyle(_dummy, "null").getPropertyValue(styleName);
        }
        var fakeBody = doc.createElement("body");
        var dummy = doc.createElement("div");
        doc.documentElement.appendChild(fakeBody);
        fakeBody.appendChild(dummy);
        _dummyStyle[propertyName] = cssText;
        var computedStyle = w.getComputedStyle(dummy, "null").getPropertyValue(styleName);
        doc.documentElement.removeChild(fakeBody);
        fakeBody = null;
        dummy = null;
        return computedStyle;
    }
    _init();
    app.HTMLPlugins = HTMLPlugins;
    app.HTMLSuffix = HTMLSuffix;
    app.HTMLPrefixedStyle = HTMLPrefixedStyle;
    app.HTMLStyleAlias = HTMLStyleAlias;
    app.getPropertyName = getPropertyName;
    app.getStyle = getStyle;
    app.to = to;
    app.fromTo = fromTo;
    app.killTweensOf = killTweensOf;
    app.getTweens = getTweens;
    app.getTween = getTween;
    return app;
})(document, window);

function EKTween(target, appliedTarget, duration, delay, data, hasFrom) {
    this._target = target;
    this._appliedTarget = appliedTarget;
    this._isStyle = target !== appliedTarget;
    this._data = data;
    this._pauseTime = 0;
    this._isPaused = false;
    this._isStarted = false;
    this._currentTime = new Date().getTime();
    this._startTime = delay * 1000 + this._currentTime;
    this._durationTime = duration * 1000;
    this._hasFrom = hasFrom;
    this.isFinished = false;
    this.ease = EKTweenFunc.easeOutCirc;
    this.tweens = null;
    this.onStart = null;
    this.onStartParams = null;
    this.onUpdate = null;
    this.onUpdateParams = null;
    this.onComplete = null;
    this.onCompleteParams = null;
    this.properties = {};
    this.prefix = {};
    this.suffix = {};
    this.yoyo = {};
    this.plugin = {};
    this.init();
}
EKTween.prototype = {
    init: function() {
        for (var i in this._data.plugin) {
            this.plugin[i] = new this._data.plugin[i]();
        }
        for (i in this._data) {
            switch (i) {
                case "ease":
                    this.ease = EKTweenFunc[this._data[i]];
                    break;
                case "prefix":
                case "suffix":
                case "yoyo":
                case "onStart":
                case "onStartParams":
                case "onUpdate":
                case "onUpdateParams":
                case "onComplete":
                case "onCompleteParams":
                    this[i] = this._data[i];
                    break;
                case "plugin":
                    break;
                default:
                    this.properties[i] = [this.plugin[i] ? 1 : this._data[i], 0];
                    if (this.plugin[i]) this.plugin[i].setTo(this._data[i], this._appliedTarget);
            }
        };
        if (this.yoyo && this._isStyle) {
            for (var i = 0; i < this.yoyo.length; i++) {
                this.yoyo[i] = EKTweener.getPropertyName(this.yoyo[i]);
            }
        }
        this.tweens = EKTweener.getTweens(this._target);
        if (this.tweens) {
            if (this.tweens.length > 0) {
                i = this.tweens.length;
                while (i--) {
                    if (this.tweens[i].removeProperties(this.properties) == 0) {
                        this.tweens[i].kill();
                        this.tweens.splice(i, 1);
                    };
                };
            };
        };
        delete this._data;

        function bind(fn, scope) {
            return function() {
                return fn.apply(scope, Array.prototype.slice.call(arguments));
            };
        };
        this.onLoop = bind(this.onLoop, this);
    },
    update: function() {
        if (this.onUpdate) {
            if (this.onUpdateParams) {
                this.onUpdate.apply(this, this.onUpdateParams);
            } else {
                this.onUpdate();
            }
        }
    },
    onLoop: function() {
        if (this.isFinished) return;
        requestAnimFrame(this.onLoop);
        this._currentTime = new Date().getTime();
        if (!this._isPaused) {
            if (this._currentTime >= this._startTime) {
                if (!this._isStarted) {
                    if (!this._hasFrom)
                        for (var i in this.properties) {
                            this.setProperty(i, this.properties[i]);
                        }
                    if (this.onStart) {
                        if (this.onStartParams) {
                            this.onStart.apply(this, this.onStartParams);
                        } else {
                            this.onStart();
                        }
                    }
                    this._isStarted = true;
                }
                if (this._currentTime >= this._durationTime + this._startTime) {
                    for (var i in this.properties) {
                        this.setValue(this.properties[i][4] ? this.properties[i][1] : this.properties[i][0], i, this.properties[i]);
                    }
                    this.update();
                    if (this.onComplete) {
                        if (this.onCompleteParams) {
                            this.onComplete.apply(this, this.onCompleteParams);
                        } else {
                            this.onComplete();
                        }
                    }
                    this.kill();
                    i = this.tweens.length;
                    while (i--) {
                        if (this.tweens[i])
                            if (this.tweens[i].isFinished) this.tweens.splice(i, 1);
                    }
                    return;
                } else {
                    for (var i in this.properties) {
                        this.setEaseValue(i, this.properties[i]);
                    }
                    this.update();
                }
            };
        };
    },
    setProperty: function(propertyName, property) {
        var i;
        if (this.prefix) {
            if (this.prefix[propertyName]) {
                property[2] = this.prefix[propertyName];
            }
        };
        if (this.suffix) {
            if (this.suffix[propertyName]) {
                property[3] = this.suffix[propertyName];
            }
        };
        if (this.yoyo) {
            for (var i = 0; i < this.yoyo.length; i++) {
                if (this.yoyo[i] === propertyName) {
                    property[4] = true;
                    break;
                }
            }
        };
        if (this._isStyle) {
            var currentValue = this.getCurrentPropertyValue(propertyName);
            if (this.plugin[propertyName]) {
                this.plugin[propertyName].setFrom(currentValue);
                property[1] = 0;
            } else {
                property[1] = parseFloat(currentValue);
            }
        } else {
            property[1] = this._appliedTarget[propertyName];
        }
        if (isNaN(property[1])) property[1] = 0;
    },
    setEaseValue: function(propertyName, property) {
        if (property[4]) {
            var d = this._durationTime;
            var t = (this._currentTime - this._startTime) * 2 / d;
            this.setValue(this.ease(t > 1 ? 2 - t : t, property[1], property[0] - property[1], 1), propertyName, property);
        } else {
            this.setValue(this.ease(this._currentTime - this._startTime < 0 ? 0 : this._currentTime - this._startTime, property[1], property[0] - property[1], this._durationTime), propertyName, property);
        }
    },
    setValue: function(value, propertyName, property) {
        if (isNaN(value)) return;
        var pValue = this.plugin[propertyName] ? this.plugin[propertyName].setOutput(value) : value;
        if (property.length > 2)
            this._appliedTarget[propertyName] = (property[2] ? property[2] : "") + pValue + (property[3] ? property[3] : "");
        else this._appliedTarget[propertyName] = pValue;
    },
    kill: function() {
        this.isFinished = true;
    },
    pause: function() {
        if (this._pauseTime == 0) this._pauseTime = new Date().getTime();
        this._isPaused = true;
    },
    resume: function() {
        if (this._pauseTime > 0) {
            var timeDiff = new Date().getTime() - this._pauseTime;
            this._currentTime += timeDiff;
            this._startTime += timeDiff;
            _pauseTime = new Date().getTime();
            this._pauseTime = 0;
        }
        if (this._isPaused) this._isPaused = false;
    },
    removeProperties: function(propertyNames) {
        var i;
        if (propertyNames) {
            var size = 0;
            for (propertyName in this.properties) {
                if (propertyName in propertyNames) delete this.properties[propertyName];
                else size++;
            };
            return size;
        } else {
            for (propertyName in this.properties) delete this.properties[propertyName];
        }
        return 0;
    },
    changeFrom: function(propertyName, value) {
        if (this._isHTML) propertyName = getPropertyName(propertyName);
        this.setProperty(propertyName, this.properties[propertyName]);
        if (this.properties[propertyName]) {
            if (this.plugin[propertyName]) {
                this.plugin[propertyName].setFrom(value);
            } else {
                this.properties[propertyName][1] = value;
            }
        }
    },
    changeTo: function(propertyName, value) {
        if (this._isHTML) propertyName = getPropertyName(propertyName);
        if (this.properties[propertyName]) {
            if (this.plugin[propertyName]) {
                this.plugin[propertyName].setTo(value);
            } else {
                this.properties[propertyName][0] = value;
            }
        }
    },
    getCurrentPropertyValue: function(propertyName) {
        var re = /[A-Z]/g;
        if (re.test(propertyName)) {
            propertyName = propertyName.replace(re, function() {
                return "-" + arguments[0].toLowerCase()
            });
            if (propertyName.indexOf("ms") == 0) propertyName = "-" + propertyName;
        }
        return window.getComputedStyle(this._target, "null").getPropertyValue(propertyName);
    }
};
var EKTweenFunc = {
    linear: function(t, b, c, d) {
        return c * t / d + b;
    },
    easeInQuad: function(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeOutInCubic: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutCubic(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInCubic((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInQuart: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeOutInQuart: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutQuart(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInQuart((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInQuint: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeOutInQuint: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutQuint(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInQuint((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInSine: function(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeOutInSine: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutSine(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInSine((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInExpo: function(t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b - c * 0.001;
    },
    easeOutExpo: function(t, b, c, d) {
        return (t == d) ? b + c : c * 1.001 * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b - c * 0.0005;
        return c / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeOutInExpo: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutExpo(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInExpo((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInCirc: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeOutInCirc: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutCirc(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInCirc((t * 2) - d, b + c / 2, c / 2, d);
    },
    easeInElastic: function(t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    },
    easeInOutElastic: function(t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeOutInElastic: function(t, b, c, d, a, p) {
        if (t < d / 2) return EKTweenFunc.easeOutElastic(t * 2, b, c / 2, d, a, p);
        return EKTweenFunc.easeInElastic((t * 2) - d, b + c / 2, c / 2, d, a, p);
    },
    easeInBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeOutInBack: function(t, b, c, d, s) {
        if (t < d / 2) return EKTweenFunc.easeOutBack(t * 2, b, c / 2, d, s);
        return EKTweenFunc.easeInBack((t * 2) - d, b + c / 2, c / 2, d, s);
    },
    easeInBounce: function(t, b, c, d) {
        return c - EKTweenFunc.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeInBounce(t * 2, 0, c, d) * .5 + b;
        else return EKTweenFunc.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    },
    easeOutInBounce: function(t, b, c, d) {
        if (t < d / 2) return EKTweenFunc.easeOutBounce(t * 2, b, c / 2, d);
        return EKTweenFunc.easeInBounce((t * 2) - d, b + c / 2, c / 2, d);
    }
};;
var buzz = {
    defaults: {
        autoplay: false,
        duration: 5000,
        formats: [],
        loop: false,
        placeholder: '--',
        preload: 'metadata',
        volume: 80
    },
    types: {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    },
    sounds: [],
    el: document.createElement('audio'),
    sound: function(src, options) {
        options = options || {};
        var pid = 0,
            events = [],
            eventsOnce = {},
            supported = buzz.isSupported();
        this.load = function() {
            if (!supported) {
                return this;
            }
            this.sound.load();
            return this;
        };
        this.play = function() {
            if (!supported) {
                return this;
            }
            this.sound.play();
            return this;
        };
        this.togglePlay = function() {
            if (!supported) {
                return this;
            }
            if (this.sound.paused) {
                this.sound.play();
            } else {
                this.sound.pause();
            }
            return this;
        };
        this.pause = function() {
            if (!supported) {
                return this;
            }
            this.sound.pause();
            return this;
        };
        this.isPaused = function() {
            if (!supported) {
                return null;
            }
            return this.sound.paused;
        };
        this.stop = function() {
            if (!supported) {
                return this;
            }
            this.setTime(this.getDuration());
            this.sound.pause();
            return this;
        };
        this.isEnded = function() {
            if (!supported) {
                return null;
            }
            return this.sound.ended;
        };
        this.loop = function() {
            if (!supported) {
                return this;
            }
            this.sound.loop = 'loop';
            this.bind('ended.buzzloop', function() {
                this.currentTime = 0;
                this.play();
            });
            return this;
        };
        this.unloop = function() {
            if (!supported) {
                return this;
            }
            this.sound.removeAttribute('loop');
            this.unbind('ended.buzzloop');
            return this;
        };
        this.mute = function() {
            if (!supported) {
                return this;
            }
            this.sound.muted = true;
            return this;
        };
        this.unmute = function() {
            if (!supported) {
                return this;
            }
            this.sound.muted = false;
            return this;
        };
        this.toggleMute = function() {
            if (!supported) {
                return this;
            }
            this.sound.muted = !this.sound.muted;
            return this;
        };
        this.isMuted = function() {
            if (!supported) {
                return null;
            }
            return this.sound.muted;
        };
        this.setVolume = function(volume) {
            if (!supported) {
                return this;
            }
            if (volume < 0) {
                volume = 0;
            }
            if (volume > 100) {
                volume = 100;
            }
            this.volume = volume;
            this.sound.volume = volume / 100;
            return this;
        };
        this.getVolume = function() {
            if (!supported) {
                return this;
            }
            return this.volume;
        };
        this.increaseVolume = function(value) {
            return this.setVolume(this.volume + (value || 1));
        };
        this.decreaseVolume = function(value) {
            return this.setVolume(this.volume - (value || 1));
        };
        this.setTime = function(time) {
            if (!supported) {
                return this;
            }
            this.whenReady(function() {
                this.sound.currentTime = time;
            });
            return this;
        };
        this.getTime = function() {
            if (!supported) {
                return null;
            }
            var time = Math.round(this.sound.currentTime * 100) / 100;
            return isNaN(time) ? buzz.defaults.placeholder : time;
        };
        this.setPercent = function(percent) {
            if (!supported) {
                return this;
            }
            return this.setTime(buzz.fromPercent(percent, this.sound.duration));
        };
        this.getPercent = function() {
            if (!supported) {
                return null;
            }
            var percent = Math.round(buzz.toPercent(this.sound.currentTime, this.sound.duration));
            return isNaN(percent) ? buzz.defaults.placeholder : percent;
        };
        this.setSpeed = function(duration) {
            if (!supported) {
                return this;
            }
            this.sound.playbackRate = duration;
        };
        this.getSpeed = function() {
            if (!supported) {
                return null;
            }
            return this.sound.playbackRate;
        };
        this.getDuration = function() {
            if (!supported) {
                return null;
            }
            var duration = Math.round(this.sound.duration * 100) / 100;
            return isNaN(duration) ? buzz.defaults.placeholder : duration;
        };
        this.getPlayed = function() {
            if (!supported) {
                return null;
            }
            return timerangeToArray(this.sound.played);
        };
        this.getBuffered = function() {
            if (!supported) {
                return null;
            }
            return timerangeToArray(this.sound.buffered);
        };
        this.getSeekable = function() {
            if (!supported) {
                return null;
            }
            return timerangeToArray(this.sound.seekable);
        };
        this.getErrorCode = function() {
            if (supported && this.sound.error) {
                return this.sound.error.code;
            }
            return 0;
        };
        this.getErrorMessage = function() {
            if (!supported) {
                return null;
            }
            switch (this.getErrorCode()) {
                case 1:
                    return 'MEDIA_ERR_ABORTED';
                case 2:
                    return 'MEDIA_ERR_NETWORK';
                case 3:
                    return 'MEDIA_ERR_DECODE';
                case 4:
                    return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
                default:
                    return null;
            }
        };
        this.getStateCode = function() {
            if (!supported) {
                return null;
            }
            return this.sound.readyState;
        };
        this.getStateMessage = function() {
            if (!supported) {
                return null;
            }
            switch (this.getStateCode()) {
                case 0:
                    return 'HAVE_NOTHING';
                case 1:
                    return 'HAVE_METADATA';
                case 2:
                    return 'HAVE_CURRENT_DATA';
                case 3:
                    return 'HAVE_FUTURE_DATA';
                case 4:
                    return 'HAVE_ENOUGH_DATA';
                default:
                    return null;
            }
        };
        this.getNetworkStateCode = function() {
            if (!supported) {
                return null;
            }
            return this.sound.networkState;
        };
        this.getNetworkStateMessage = function() {
            if (!supported) {
                return null;
            }
            switch (this.getNetworkStateCode()) {
                case 0:
                    return 'NETWORK_EMPTY';
                case 1:
                    return 'NETWORK_IDLE';
                case 2:
                    return 'NETWORK_LOADING';
                case 3:
                    return 'NETWORK_NO_SOURCE';
                default:
                    return null;
            }
        };
        this.set = function(key, value) {
            if (!supported) {
                return this;
            }
            this.sound[key] = value;
            return this;
        };
        this.get = function(key) {
            if (!supported) {
                return null;
            }
            return key ? this.sound[key] : this.sound;
        };
        this.bind = function(types, func) {
            if (!supported) {
                return this;
            }
            types = types.split(' ');
            var that = this,
                efunc = function(e) {
                    func.call(that, e);
                };
            for (var t = 0; t < types.length; t++) {
                var type = types[t],
                    idx = type;
                type = idx.split('.')[0];
                events.push({
                    idx: idx,
                    func: efunc
                });
                this.sound.addEventListener(type, efunc, true);
            }
            return this;
        };
        this.unbind = function(types) {
            if (!supported) {
                return this;
            }
            types = types.split(' ');
            for (var t = 0; t < types.length; t++) {
                var idx = types[t],
                    type = idx.split('.')[0];
                for (var i = 0; i < events.length; i++) {
                    var namespace = events[i].idx.split('.');
                    if (events[i].idx == idx || (namespace[1] && namespace[1] == idx.replace('.', ''))) {
                        this.sound.removeEventListener(type, events[i].func, true);
                        delete events[i];
                    }
                }
            }
            return this;
        };
        this.bindOnce = function(type, func) {
            if (!supported) {
                return this;
            }
            var that = this;
            eventsOnce[pid++] = false;
            this.bind(pid + type, function() {
                if (!eventsOnce[pid]) {
                    eventsOnce[pid] = true;
                    func.call(that);
                }
                that.unbind(pid + type);
            });
        };
        this.trigger = function(types) {
            if (!supported) {
                return this;
            }
            types = types.split(' ');
            for (var t = 0; t < types.length; t++) {
                var idx = types[t];
                for (var i = 0; i < events.length; i++) {
                    var eventType = events[i].idx.split('.');
                    if (events[i].idx == idx || (eventType[0] && eventType[0] == idx.replace('.', ''))) {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent(eventType[0], false, true);
                        this.sound.dispatchEvent(evt);
                    }
                }
            }
            return this;
        };
        this.fadeTo = function(to, duration, callback) {
            if (!supported) {
                return this;
            }
            if (duration instanceof Function) {
                callback = duration;
                duration = buzz.defaults.duration;
            } else {
                duration = duration || buzz.defaults.duration;
            }
            var from = this.volume,
                delay = duration / Math.abs(from - to),
                that = this;
            this.play();

            function doFade() {
                setTimeout(function() {
                    if (from < to && that.volume < to) {
                        that.setVolume(that.volume += 1);
                        doFade();
                    } else if (from > to && that.volume > to) {
                        that.setVolume(that.volume -= 1);
                        doFade();
                    } else if (callback instanceof Function) {
                        callback.apply(that);
                    }
                }, delay);
            }
            this.whenReady(function() {
                doFade();
            });
            return this;
        };
        this.fadeIn = function(duration, callback) {
            if (!supported) {
                return this;
            }
            return this.setVolume(0).fadeTo(100, duration, callback);
        };
        this.fadeOut = function(duration, callback) {
            if (!supported) {
                return this;
            }
            return this.fadeTo(0, duration, callback);
        };
        this.fadeWith = function(sound, duration) {
            if (!supported) {
                return this;
            }
            this.fadeOut(duration, function() {
                this.stop();
            });
            sound.play().fadeIn(duration);
            return this;
        };
        this.whenReady = function(func) {
            if (!supported) {
                return null;
            }
            var that = this;
            if (this.sound.readyState === 0) {
                this.bind('canplay.buzzwhenready', function() {
                    func.call(that);
                });
            } else {
                func.call(that);
            }
        };

        function timerangeToArray(timeRange) {
            var array = [],
                length = timeRange.length - 1;
            for (var i = 0; i <= length; i++) {
                array.push({
                    start: timeRange.start(length),
                    end: timeRange.end(length)
                });
            }
            return array;
        }

        function getExt(filename) {
            return filename.split('.').pop();
        }

        function addSource(sound, src) {
            var source = document.createElement('source');
            source.src = src;
            if (buzz.types[getExt(src)]) {
                source.type = buzz.types[getExt(src)];
            }
            sound.appendChild(source);
        }
        if (supported) {
            for (var i in buzz.defaults) {
                if (buzz.defaults.hasOwnProperty(i)) {
                    options[i] = options[i] || buzz.defaults[i];
                }
            }
            this.sound = document.createElement('audio');
            if (src instanceof Array) {
                for (var j in src) {
                    if (src.hasOwnProperty(j)) {
                        addSource(this.sound, src[j]);
                    }
                }
            } else if (options.formats.length) {
                for (var k in options.formats) {
                    if (options.formats.hasOwnProperty(k)) {
                        addSource(this.sound, src + '.' + options.formats[k]);
                    }
                }
            } else {
                addSource(this.sound, src);
            }
            if (options.loop) {
                this.loop();
            }
            if (options.autoplay) {
                this.sound.autoplay = 'autoplay';
            }
            if (options.preload === true) {
                this.sound.preload = 'auto';
            } else if (options.preload === false) {
                this.sound.preload = 'none';
            } else {
                this.sound.preload = options.preload;
            }
            this.setVolume(options.volume);
            buzz.sounds.push(this);
        }
    },
    group: function(sounds) {
        sounds = argsToArray(sounds, arguments);
        this.getSounds = function() {
            return sounds;
        };
        this.add = function(soundArray) {
            soundArray = argsToArray(soundArray, arguments);
            for (var a = 0; a < soundArray.length; a++) {
                sounds.push(soundArray[a]);
            }
        };
        this.remove = function(soundArray) {
            soundArray = argsToArray(soundArray, arguments);
            for (var a = 0; a < soundArray.length; a++) {
                for (var i = 0; i < sounds.length; i++) {
                    if (sounds[i] == soundArray[a]) {
                        delete sounds[i];
                        break;
                    }
                }
            }
        };
        this.load = function() {
            fn('load');
            return this;
        };
        this.play = function() {
            fn('play');
            return this;
        };
        this.togglePlay = function() {
            fn('togglePlay');
            return this;
        };
        this.pause = function(time) {
            fn('pause', time);
            return this;
        };
        this.stop = function() {
            fn('stop');
            return this;
        };
        this.mute = function() {
            fn('mute');
            return this;
        };
        this.unmute = function() {
            fn('unmute');
            return this;
        };
        this.toggleMute = function() {
            fn('toggleMute');
            return this;
        };
        this.setVolume = function(volume) {
            fn('setVolume', volume);
            return this;
        };
        this.increaseVolume = function(value) {
            fn('increaseVolume', value);
            return this;
        };
        this.decreaseVolume = function(value) {
            fn('decreaseVolume', value);
            return this;
        };
        this.loop = function() {
            fn('loop');
            return this;
        };
        this.unloop = function() {
            fn('unloop');
            return this;
        };
        this.setTime = function(time) {
            fn('setTime', time);
            return this;
        };
        this.setduration = function(duration) {
            fn('setduration', duration);
            return this;
        };
        this.set = function(key, value) {
            fn('set', key, value);
            return this;
        };
        this.bind = function(type, func) {
            fn('bind', type, func);
            return this;
        };
        this.unbind = function(type) {
            fn('unbind', type);
            return this;
        };
        this.bindOnce = function(type, func) {
            fn('bindOnce', type, func);
            return this;
        };
        this.trigger = function(type) {
            fn('trigger', type);
            return this;
        };
        this.fade = function(from, to, duration, callback) {
            fn('fade', from, to, duration, callback);
            return this;
        };
        this.fadeIn = function(duration, callback) {
            fn('fadeIn', duration, callback);
            return this;
        };
        this.fadeOut = function(duration, callback) {
            fn('fadeOut', duration, callback);
            return this;
        };

        function fn() {
            var args = argsToArray(null, arguments),
                func = args.shift();
            for (var i = 0; i < sounds.length; i++) {
                sounds[i][func].apply(sounds[i], args);
            }
        }

        function argsToArray(array, args) {
            return (array instanceof Array) ? array : Array.prototype.slice.call(args);
        }
    },
    all: function() {
        return new buzz.group(buzz.sounds);
    },
    isSupported: function() {
        return !!buzz.el.canPlayType;
    },
    isOGGSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/ogg; codecs="vorbis"');
    },
    isWAVSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/wav; codecs="1"');
    },
    isMP3Supported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/mpeg;');
    },
    isAACSupported: function() {
        return !!buzz.el.canPlayType && (buzz.el.canPlayType('audio/x-m4a;') || buzz.el.canPlayType('audio/aac;'));
    },
    toTimer: function(time, withHours) {
        var h, m, s;
        h = Math.floor(time / 3600);
        h = isNaN(h) ? '--' : (h >= 10) ? h : '0' + h;
        m = withHours ? Math.floor(time / 60 % 60) : Math.floor(time / 60);
        m = isNaN(m) ? '--' : (m >= 10) ? m : '0' + m;
        s = Math.floor(time % 60);
        s = isNaN(s) ? '--' : (s >= 10) ? s : '0' + s;
        return withHours ? h + ':' + m + ':' + s : m + ':' + s;
    },
    fromTimer: function(time) {
        var splits = time.toString().split(':');
        if (splits && splits.length == 3) {
            time = (parseInt(splits[0], 10) * 3600) + (parseInt(splits[1], 10) * 60) + parseInt(splits[2], 10);
        }
        if (splits && splits.length == 2) {
            time = (parseInt(splits[0], 10) * 60) + parseInt(splits[1], 10);
        }
        return time;
    },
    toPercent: function(value, total, decimal) {
        var r = Math.pow(10, decimal || 0);
        return Math.round(((value * 100) / total) * r) / r;
    },
    fromPercent: function(percent, total, decimal) {
        var r = Math.pow(10, decimal || 0);
        return Math.round(((total / 100) * percent) * r) / r;
    }
};;
window.Modernizr = function(a, b, c) {
    function I() {
        e["input"] = function(a) {
            for (var b = 0, c = a.length; b < c; b++) {
                t[a[b]] = !!(a[b] in l)
            }
            return t
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        e["inputtypes"] = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) {
                l.setAttribute("type", f = a[d]);
                e = l.type !== "text";
                if (e) {
                    l.value = m;
                    l.style.cssText = "position:absolute;visibility:hidden;";
                    if (/^range$/.test(f) && l.style.WebkitAppearance !== c) {
                        g.appendChild(l);
                        h = b.defaultView;
                        e = h.getComputedStyle && h.getComputedStyle(l, null).WebkitAppearance !== "textfield" && l.offsetHeight !== 0;
                        g.removeChild(l)
                    } else if (/^(search|tel)$/.test(f)) {} else if (/^(url|email)$/.test(f)) {
                        e = l.checkValidity && l.checkValidity() === false
                    } else if (/^color$/.test(f)) {
                        g.appendChild(l);
                        g.offsetWidth;
                        e = l.value != m;
                        g.removeChild(l)
                    } else {
                        e = l.value != m
                    }
                }
                s[a[d]] = !!e
            }
            return s
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    function G(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1),
            d = (a + " " + p.join(c + " ") + c).split(" ");
        return F(d, b)
    }

    function F(a, b) {
        for (var d in a) {
            if (k[a[d]] !== c) {
                return b == "pfx" ? a[d] : true
            }
        }
        return false
    }

    function E(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return B(o.join(a + ";") + (b || ""))
    }

    function B(a) {
        k.cssText = a
    }
    var d = "2.0.6",
        e = {},
        f = true,
        g = b.documentElement,
        h = b.head || b.getElementsByTagName("head")[0],
        i = "modernizr",
        j = b.createElement(i),
        k = j.style,
        l = b.createElement("input"),
        m = ":)",
        n = Object.prototype.toString,
        o = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        p = "Webkit Moz O ms Khtml".split(" "),
        q = {
            svg: "http://www.w3.org/2000/svg"
        },
        r = {},
        s = {},
        t = {},
        u = [],
        v, w = function(a, c, d, e) {
            var f, h, j, k = b.createElement("div");
            if (parseInt(d, 10)) {
                while (d--) {
                    j = b.createElement("div");
                    j.id = e ? e[d] : i + (d + 1);
                    k.appendChild(j)
                }
            }
            f = ["­", "<style>", a, "</style>"].join("");
            k.id = i;
            k.innerHTML += f;
            g.appendChild(k);
            h = c(k, a);
            k.parentNode.removeChild(k);
            return !!h
        },
        x = function(b) {
            if (a.matchMedia) {
                return matchMedia(b).matches
            }
            var c;
            w("@media " + b + " { #" + i + " { position: absolute; } }", function(b) {
                c = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            });
            return c
        },
        y = function() {
            function d(d, e) {
                e = e || b.createElement(a[d] || "div");
                d = "on" + d;
                var f = d in e;
                if (!f) {
                    if (!e.setAttribute) {
                        e = b.createElement("div")
                    }
                    if (e.setAttribute && e.removeAttribute) {
                        e.setAttribute(d, "");
                        f = D(e[d], "function");
                        if (!D(e[d], c)) {
                            e[d] = c
                        }
                        e.removeAttribute(d)
                    }
                }
                e = null;
                return f
            }
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return d
        }();
    var z = {}.hasOwnProperty,
        A;
    if (!D(z, c) && !D(z.call, c)) {
        A = function(a, b) {
            return z.call(a, b)
        }
    } else {
        A = function(a, b) {
            return b in a && D(a.constructor.prototype[b], c)
        }
    }
    var H = function(c, d) {
        var f = c.join(""),
            g = d.length;
        w(f, function(c, d) {
            var f = b.styleSheets[b.styleSheets.length - 1],
                h = f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "",
                i = c.childNodes,
                j = {};
            while (g--) {
                j[i[g].id] = i[g]
            }
            e["touch"] = "ontouchstart" in a || j["touch"].offsetTop === 9;
            e["csstransforms3d"] = j["csstransforms3d"].offsetLeft === 9;
            e["generatedcontent"] = j["generatedcontent"].offsetHeight >= 1;
            e["fontface"] = /src/i.test(h) && h.indexOf(d.split(" ")[0]) === 0
        }, g, d)
    }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", o.join("touch-enabled),("), i, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", o.join("transform-3d),("), i, ")", "{#csstransforms3d{left:9px;position:absolute}}"].join(""), ['#generatedcontent:after{content:"', m, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]);
    r["flexbox"] = function() {
        function c(a, b, c, d) {
            a.style.cssText = o.join(b + ":" + c + ";") + (d || "")
        }

        function a(a, b, c, d) {
            b += ":";
            a.style.cssText = (b + o.join(c + ";" + b)).slice(0, -b.length) + (d || "")
        }
        var d = b.createElement("div"),
            e = b.createElement("div");
        a(d, "display", "box", "width:42px;padding:0;");
        c(e, "box-flex", "1", "width:10px;");
        d.appendChild(e);
        g.appendChild(d);
        var f = e.offsetWidth === 42;
        d.removeChild(e);
        g.removeChild(d);
        return f
    };
    r["canvas"] = function() {
        var a = b.createElement("canvas");
        return !!(a.getContext && a.getContext("2d"))
    };
    r["canvastext"] = function() {
        return !!(e["canvas"] && D(b.createElement("canvas").getContext("2d").fillText, "function"))
    };
    r["webgl"] = function() {
        return !!a.WebGLRenderingContext
    };
    r["touch"] = function() {
        return e["touch"]
    };
    r["geolocation"] = function() {
        return !!navigator.geolocation
    };
    r["postmessage"] = function() {
        return !!a.postMessage
    };
    r["websqldatabase"] = function() {
        var b = !!a.openDatabase;
        return b
    };
    r["indexedDB"] = function() {
        for (var b = -1, c = p.length; ++b < c;) {
            if (a[p[b].toLowerCase() + "IndexedDB"]) {
                return true
            }
        }
        return !!a.indexedDB
    };
    r["hashchange"] = function() {
        return y("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    };
    r["history"] = function() {
        return !!(a.history && history.pushState)
    };
    r["draganddrop"] = function() {
        return y("dragstart") && y("drop")
    };
    r["websockets"] = function() {
        for (var b = -1, c = p.length; ++b < c;) {
            if (a[p[b] + "WebSocket"]) {
                return true
            }
        }
        return "WebSocket" in a
    };
    r["rgba"] = function() {
        B("background-color:rgba(150,255,150,.5)");
        return E(k.backgroundColor, "rgba")
    };
    r["hsla"] = function() {
        B("background-color:hsla(120,40%,100%,.5)");
        return E(k.backgroundColor, "rgba") || E(k.backgroundColor, "hsla")
    };
    r["multiplebgs"] = function() {
        B("background:url(https://),url(https://),red url(https://)");
        return /(url\s*\(.*?){3}/.test(k.background)
    };
    r["backgroundsize"] = function() {
        return G("backgroundSize")
    };
    r["borderimage"] = function() {
        return G("borderImage")
    };
    r["borderradius"] = function() {
        return G("borderRadius")
    };
    r["boxshadow"] = function() {
        return G("boxShadow")
    };
    r["textshadow"] = function() {
        return b.createElement("div").style.textShadow === ""
    };
    r["opacity"] = function() {
        C("opacity:.55");
        return /^0.55$/.test(k.opacity)
    };
    r["cssanimations"] = function() {
        return G("animationName")
    };
    r["csscolumns"] = function() {
        return G("columnCount")
    };
    r["cssgradients"] = function() {
        var a = "background-image:",
            b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";
        B((a + o.join(b + a) + o.join(c + a)).slice(0, -a.length));
        return E(k.backgroundImage, "gradient")
    };
    r["cssreflections"] = function() {
        return G("boxReflect")
    };
    r["csstransforms"] = function() {
        return !!F(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    };
    r["csstransforms3d"] = function() {
        var a = !!F(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        if (a && "webkitPerspective" in g.style) {
            a = e["csstransforms3d"]
        }
        return a
    };
    r["csstransitions"] = function() {
        return G("transitionProperty")
    };
    r["fontface"] = function() {
        return e["fontface"]
    };
    r["generatedcontent"] = function() {
        return e["generatedcontent"]
    };
    r["video"] = function() {
        var a = b.createElement("video"),
            c = false;
        try {
            if (c = !!a.canPlayType) {
                c = new Boolean(c);
                c.ogg = a.canPlayType('video/ogg; codecs="theora"');
                var d = 'video/mp4; codecs="avc1.42E01E';
                c.h264 = a.canPlayType(d + '"') || a.canPlayType(d + ', mp4a.40.2"');
                c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"')
            }
        } catch (e) {}
        return c
    };
    r["audio"] = function() {
        var a = b.createElement("audio"),
            c = false;
        try {
            if (c = !!a.canPlayType) {
                c = new Boolean(c);
                c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"');
                c.mp3 = a.canPlayType("audio/mpeg;");
                c.wav = a.canPlayType('audio/wav; codecs="1"');
                c.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            }
        } catch (d) {}
        return c
    };
    r["localstorage"] = function() {
        try {
            return !!localStorage.getItem
        } catch (a) {
            return false
        }
    };
    r["sessionstorage"] = function() {
        try {
            return !!sessionStorage.getItem
        } catch (a) {
            return false
        }
    };
    r["webworkers"] = function() {
        return !!a.Worker
    };
    r["applicationcache"] = function() {
        return !!a.applicationCache
    };
    r["svg"] = function() {
        return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
    };
    r["inlinesvg"] = function() {
        var a = b.createElement("div");
        a.innerHTML = "<svg/>";
        return (a.firstChild && a.firstChild.namespaceURI) == q.svg
    };
    r["smil"] = function() {
        return !!b.createElementNS && /SVG/.test(n.call(b.createElementNS(q.svg, "animate")))
    };
    r["svgclippaths"] = function() {
        return !!b.createElementNS && /SVG/.test(n.call(b.createElementNS(q.svg, "clipPath")))
    };
    for (var J in r) {
        if (A(r, J)) {
            v = J.toLowerCase();
            e[v] = r[J]();
            u.push((e[v] ? "" : "no-") + v)
        }
    }
    e.input || I();
    e.addTest = function(a, b) {
        if (typeof a == "object") {
            for (var d in a) {
                if (A(a, d)) {
                    e.addTest(d, a[d])
                }
            }
        } else {
            a = a.toLowerCase();
            if (e[a] !== c) {
                return
            }
            b = typeof b == "boolean" ? b : !!b();
            g.className += " " + (b ? "" : "no-") + a;
            e[a] = b
        }
        return e
    };
    B("");
    j = l = null;
    if (a.attachEvent && function() {
            var a = b.createElement("div");
            a.innerHTML = "<elem></elem>";
            return a.childNodes.length !== 1
        }()) {
        (function(a, b) {
            function s(a) {
                var b = -1;
                while (++b < g) a.createElement(f[b])
            }
            a.iepp = a.iepp || {};
            var d = a.iepp,
                e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                f = e.split("|"),
                g = f.length,
                h = new RegExp("(^|\\s)(" + e + ")", "gi"),
                i = new RegExp("<(/*)(" + e + ")", "gi"),
                j = /^\s*[\{\}]\s*$/,
                k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                l = b.createDocumentFragment(),
                m = b.documentElement,
                n = m.firstChild,
                o = b.createElement("body"),
                p = b.createElement("style"),
                q = /print|all/,
                r;
            d.getCSS = function(a, b) {
                if (a + "" === c) {
                    return ""
                }
                var e = -1,
                    f = a.length,
                    g, h = [];
                while (++e < f) {
                    g = a[e];
                    if (g.disabled) {
                        continue
                    }
                    b = g.media || b;
                    if (q.test(b)) h.push(d.getCSS(g.imports, b), g.cssText);
                    b = "all"
                }
                return h.join("")
            };
            d.parseCSS = function(a) {
                var b = [],
                    c;
                while ((c = k.exec(a)) != null) {
                    b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4])
                }
                return b.join("\n")
            };
            d.writeHTML = function() {
                var a = -1;
                r = r || b.body;
                while (++a < g) {
                    var c = b.getElementsByTagName(f[a]),
                        d = c.length,
                        e = -1;
                    while (++e < d)
                        if (c[e].className.indexOf("iepp_") < 0) c[e].className += " iepp_" + f[a]
                }
                l.appendChild(r);
                m.appendChild(o);
                o.className = r.className;
                o.id = r.id;
                o.innerHTML = r.innerHTML.replace(i, "<$1font")
            };
            d._beforePrint = function() {
                p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all"));
                d.writeHTML()
            };
            d.restoreHTML = function() {
                o.innerHTML = "";
                m.removeChild(o);
                m.appendChild(r)
            };
            d._afterPrint = function() {
                d.restoreHTML();
                p.styleSheet.cssText = ""
            };
            s(b);
            s(l);
            if (d.disablePP) {
                return
            }
            n.insertBefore(p, n.firstChild);
            p.media = "print";
            p.className = "iepp-printshim";
            a.attachEvent("onbeforeprint", d._beforePrint);
            a.attachEvent("onafterprint", d._afterPrint)
        })(a, b)
    }
    e._version = d;
    e._prefixes = o;
    e._domPrefixes = p;
    e.mq = x;
    e.hasEvent = y;
    e.testProp = function(a) {
        return F([a])
    };
    e.testAllProps = G;
    e.testStyles = w;
    e.prefixed = function(a) {
        return G(a, "pfx")
    };
    g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + u.join(" ") : "");
    return e
}(this, this.document);

function EKTweenerOpacityPlugin() {
    var _from;
    var _to;
    this.setFrom = function(from) {
        if (!from) {
            _from = 1;
            return;
        }
        if (typeof from == "number") {
            _from = parseFloat(from);
            return;
        }
        var index = from.indexOf("alpha");
        if (index > -1) {
            _from = parseFloat(from.slice(from.indexOf("=", index) + 1)) / 100;
        } else {
            _from = 1;
        }
    }
    this.setTo = function(to) {
        _to = to;
    }
    this.setOutput = function(value) {
        return "alpha(opacity=" + ((_from + (_to - _from) * value) * 100) + ")";
    }
};
EKTweenerOpacityPlugin.hasOpacity = (function() {
    var testedElement = document.createElement("div");
    return "opacity" in testedElement.style;
})();
if (EKTweener) {
    if (!EKTweenerOpacityPlugin.hasOpacity) {
        EKTweener.HTMLStyleAlias.opacity = "filter";
        EKTweener.HTMLPlugins.opacity = EKTweenerOpacityPlugin;
    }
};
(function($) {
    "use strict";
    var managed = {},
        cache = {};
    $.manageAjax = (function() {
        function create(name, opts) {
            managed[name] = new $.manageAjax._manager(name, opts);
            return managed[name]
        }

        function destroy(name) {
            if (managed[name]) {
                managed[name].clear(true);
                delete managed[name]
            }
        }
        var publicFns = {
            create: create,
            destroy: destroy
        };
        return publicFns
    })();
    $.manageAjax._manager = function(name, opts) {
        this.requests = {};
        this.inProgress = 0;
        this.name = name;
        this.qName = name;
        this.opts = $.extend({}, $.ajaxSettings, $.manageAjax.defaults, opts);
        if (opts && opts.queue && opts.queue !== true && typeof opts.queue === 'string' && opts.queue !== 'clear') {
            this.qName = opts.queue
        }
    };
    $.manageAjax._manager.prototype = {
        add: function(o) {
            o = $.extend({}, this.opts, o);
            var origCom = o.complete || $.noop,
                origSuc = o.success || $.noop,
                beforeSend = o.beforeSend || $.noop,
                origError = o.error || $.noop,
                strData = (typeof o.data == 'string') ? o.data : $.param(o.data || {}),
                xhrID = o.type + o.url + strData,
                that = this,
                ajaxFn = this._createAjax(xhrID, o, origSuc, origCom);
            if (o.preventDoubbleRequests && o.queueDuplicateRequests) {
                if (o.preventDoubbleRequests) {
                    o.queueDuplicateRequests = false
                }
                setTimeout(function() {
                    throw ("preventDoubbleRequests and queueDuplicateRequests can't be both true");
                }, 0)
            }
            if (this.requests[xhrID] && o.preventDoubbleRequests) {
                return
            }
            ajaxFn.xhrID = xhrID;
            o.xhrID = xhrID;
            o.beforeSend = function(xhr, opts) {
                var ret = beforeSend.call(this, xhr, opts);
                if (ret === false) {
                    that._removeXHR(xhrID)
                }
                xhr = null;
                return ret
            };
            o.complete = function(xhr, status) {
                that._complete.call(that, this, origCom, xhr, status, xhrID, o);
                xhr = null
            };
            o.success = function(data, status, xhr) {
                that._success.call(that, this, origSuc, data, status, xhr, o);
                xhr = null
            };
            o.error = function(ahr, status, errorStr) {
                var httpStatus = '',
                    content = '';
                if (status !== 'timeout' && ahr) {
                    httpStatus = ahr.status;
                    content = ahr.responseXML || ahr.responseText
                }
                if (origError) {
                    origError.call(this, ahr, status, errorStr, o)
                } else {
                    setTimeout(function() {
                        throw status + '| status: ' + httpStatus + ' | URL: ' + o.url + ' | data: ' + strData + ' | thrown: ' + errorStr + ' | response: ' + content;
                    }, 0)
                }
                ahr = null
            };
            if (o.queue === 'clear') {
                $(document).clearQueue(this.qName)
            }
            if (o.queue || (o.queueDuplicateRequests && this.requests[xhrID])) {
                $.queue(document, this.qName, ajaxFn);
                if (this.inProgress < o.maxRequests && (!this.requests[xhrID] || !o.queueDuplicateRequests)) {
                    $.dequeue(document, this.qName)
                }
                return xhrID
            }
            return ajaxFn()
        },
        _createAjax: function(id, o, origSuc, origCom) {
            var that = this;
            return function() {
                if (o.beforeCreate.call(o.context || that, id, o) === false) {
                    return
                }
                that.inProgress++;
                if (that.inProgress === 1) {
                    $.event.trigger(that.name + 'AjaxStart')
                }
                if (o.cacheResponse && cache[id]) {
                    if (!cache[id].cacheTTL || cache[id].cacheTTL < 0 || ((new Date().getTime() - cache[id].timestamp) < cache[id].cacheTTL)) {
                        that.requests[id] = {};
                        setTimeout(function() {
                            that._success.call(that, o.context || o, origSuc, cache[id]._successData, 'success', cache[id], o);
                            that._complete.call(that, o.context || o, origCom, cache[id], 'success', id, o)
                        }, 0)
                    } else {
                        delete cache[id]
                    }
                }
                if (!o.cacheResponse || !cache[id]) {
                    if (o.async) {
                        that.requests[id] = $.ajax(o)
                    } else {
                        $.ajax(o)
                    }
                }
                return id
            }
        },
        _removeXHR: function(xhrID) {
            if (this.opts.queue || this.opts.queueDuplicateRequests) {
                $.dequeue(document, this.qName)
            }
            this.inProgress--;
            this.requests[xhrID] = null;
            delete this.requests[xhrID]
        },
        clearCache: function() {
            cache = {}
        },
        _isAbort: function(xhr, status, o) {
            if (!o.abortIsNoSuccess || (!xhr && !status)) {
                return false
            }
            var ret = !!((!xhr || xhr.readyState === 0 || this.lastAbort === o.xhrID));
            xhr = null;
            return ret
        },
        _complete: function(context, origFn, xhr, status, xhrID, o) {
            if (this._isAbort(xhr, status, o)) {
                status = 'abort';
                o.abort.call(context, xhr, status, o)
            }
            origFn.call(context, xhr, status, o);
            $.event.trigger(this.name + 'AjaxComplete', [xhr, status, o]);
            if (o.domCompleteTrigger) {
                $(o.domCompleteTrigger).trigger(this.name + 'DOMComplete', [xhr, status, o]).trigger('DOMComplete', [xhr, status, o])
            }
            this._removeXHR(xhrID);
            if (!this.inProgress) {
                $.event.trigger(this.name + 'AjaxStop')
            }
            xhr = null
        },
        _success: function(context, origFn, data, status, xhr, o) {
            var that = this;
            if (this._isAbort(xhr, status, o)) {
                xhr = null;
                return
            }
            if (o.abortOld) {
                $.each(this.requests, function(name) {
                    if (name === o.xhrID) {
                        return false
                    }
                    that.abort(name)
                })
            }
            if (o.cacheResponse && !cache[o.xhrID]) {
                if (!xhr) {
                    xhr = {}
                }
                cache[o.xhrID] = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    responseText: xhr.responseText,
                    responseXML: xhr.responseXML,
                    _successData: data,
                    cacheTTL: o.cacheTTL,
                    timestamp: new Date().getTime()
                };
                if ('getAllResponseHeaders' in xhr) {
                    var responseHeaders = xhr.getAllResponseHeaders();
                    var parsedHeaders;
                    var parseHeaders = function() {
                        if (parsedHeaders) {
                            return
                        }
                        parsedHeaders = {};
                        $.each(responseHeaders.split("\n"), function(i, headerLine) {
                            var delimiter = headerLine.indexOf(":");
                            parsedHeaders[headerLine.substr(0, delimiter)] = headerLine.substr(delimiter + 2)
                        })
                    };
                    $.extend(cache[o.xhrID], {
                        getAllResponseHeaders: function() {
                            return responseHeaders
                        },
                        getResponseHeader: function(name) {
                            parseHeaders();
                            return (name in parsedHeaders) ? parsedHeaders[name] : null
                        }
                    })
                }
            }
            origFn.call(context, data, status, xhr, o);
            $.event.trigger(this.name + 'AjaxSuccess', [xhr, o, data]);
            if (o.domSuccessTrigger) {
                $(o.domSuccessTrigger).trigger(this.name + 'DOMSuccess', [data, o]).trigger('DOMSuccess', [data, o])
            }
            xhr = null
        },
        getData: function(id) {
            if (id) {
                var ret = this.requests[id];
                if (!ret && this.opts.queue) {
                    ret = $.grep($(document).queue(this.qName), function(fn, i) {
                        return (fn.xhrID === id)
                    })[0]
                }
                return ret
            }
            return {
                requests: this.requests,
                queue: (this.opts.queue) ? $(document).queue(this.qName) : [],
                inProgress: this.inProgress
            }
        },
        abort: function(id) {
            var xhr;
            if (id) {
                xhr = this.getData(id);
                if (xhr && xhr.abort) {
                    this.lastAbort = id;
                    xhr.abort();
                    this.lastAbort = false
                } else {
                    $(document).queue(this.qName, $.grep($(document).queue(this.qName), function(fn, i) {
                        return (fn !== xhr)
                    }))
                }
                xhr = null;
                return
            }
            var that = this,
                ids = [];
            $.each(this.requests, function(id) {
                ids.push(id)
            });
            $.each(ids, function(i, id) {
                that.abort(id)
            })
        },
        clear: function(shouldAbort) {
            $(document).clearQueue(this.qName);
            if (shouldAbort) {
                this.abort()
            }
        }
    };
    $.manageAjax._manager.prototype.getXHR = $.manageAjax._manager.prototype.getData;
    $.manageAjax.defaults = {
        beforeCreate: $.noop,
        abort: $.noop,
        abortIsNoSuccess: true,
        maxRequests: 1,
        cacheResponse: false,
        domCompleteTrigger: false,
        domSuccessTrigger: false,
        preventDoubbleRequests: true,
        queueDuplicateRequests: false,
        cacheTTL: -1,
        queue: false
    };
    $.each($.manageAjax._manager.prototype, function(n, fn) {
        if (n.indexOf('_') === 0 || !$.isFunction(fn)) {
            return
        }
        $.manageAjax[n] = function(name, o) {
            if (!managed[name]) {
                if (n === 'add') {
                    $.manageAjax.create(name, o)
                } else {
                    return
                }
            }
            var args = Array.prototype.slice.call(arguments, 1);
            managed[name][n].apply(managed[name], args)
        }
    })
})(jQuery);;
var Trace = Trace || (function() {
    return {
        log: function() {
            if (!$.browser.msie) {
                var args = [].splice.call(arguments, 0);
                console.log(args.join(', '));
            }
        }
    };
}());
var Stats = function() {
    var _container, _bar, _mode = 0,
        _modes = 2,
        _frames = 0,
        _time = Date.now(),
        _timeLastFrame = _time,
        _timeLastSecond = _time,
        _fps = 0,
        _fpsMin = 1000,
        _fpsMax = 0,
        _fpsDiv, _fpsText, _fpsGraph, _fpsColors = [
            [16, 16, 48],
            [0, 255, 255]
        ],
        _ms = 0,
        _msMin = 1000,
        _msMax = 0,
        _msDiv, _msText, _msGraph, _msColors = [
            [16, 48, 16],
            [0, 255, 0]
        ];
    _container = document.createElement('div');
    _container.style.cursor = 'pointer';
    _container.style.width = '80px';
    _container.style.opacity = '0.9';
    _container.style.zIndex = '10001';
    _container.addEventListener('mousedown', function(event) {
        event.preventDefault();
        _mode = (_mode + 1) % _modes;
        if (_mode == 0) {
            _fpsDiv.style.display = 'block';
            _msDiv.style.display = 'none';
        } else {
            _fpsDiv.style.display = 'none';
            _msDiv.style.display = 'block';
        }
    }, false);
    _fpsDiv = document.createElement('div');
    _fpsDiv.style.textAlign = 'left';
    _fpsDiv.style.lineHeight = '1.2em';
    _fpsDiv.style.backgroundColor = 'rgb(' + Math.floor(_fpsColors[0][0] / 2) + ',' + Math.floor(_fpsColors[0][1] / 2) + ',' + Math.floor(_fpsColors[0][2] / 2) + ')';
    _fpsDiv.style.padding = '0 0 3px 3px';
    _container.appendChild(_fpsDiv);
    _fpsText = document.createElement('div');
    _fpsText.style.fontFamily = 'Helvetica, Arial, sans-serif';
    _fpsText.style.fontSize = '9px';
    _fpsText.style.color = 'rgb(' + _fpsColors[1][0] + ',' + _fpsColors[1][1] + ',' + _fpsColors[1][2] + ')';
    _fpsText.style.fontWeight = 'bold';
    _fpsText.innerHTML = 'FPS';
    _fpsDiv.appendChild(_fpsText);
    _fpsGraph = document.createElement('div');
    _fpsGraph.style.position = 'relative';
    _fpsGraph.style.width = '74px';
    _fpsGraph.style.height = '30px';
    _fpsGraph.style.backgroundColor = 'rgb(' + _fpsColors[1][0] + ',' + _fpsColors[1][1] + ',' + _fpsColors[1][2] + ')';
    _fpsDiv.appendChild(_fpsGraph);
    while (_fpsGraph.children.length < 74) {
        _bar = document.createElement('span');
        _bar.style.width = '1px';
        _bar.style.height = '30px';
        _bar.style.cssFloat = 'left';
        _bar.style.backgroundColor = 'rgb(' + _fpsColors[0][0] + ',' + _fpsColors[0][1] + ',' + _fpsColors[0][2] + ')';
        _fpsGraph.appendChild(_bar);
    }
    _msDiv = document.createElement('div');
    _msDiv.style.textAlign = 'left';
    _msDiv.style.lineHeight = '1.2em';
    _msDiv.style.backgroundColor = 'rgb(' + Math.floor(_msColors[0][0] / 2) + ',' + Math.floor(_msColors[0][1] / 2) + ',' + Math.floor(_msColors[0][2] / 2) + ')';
    _msDiv.style.padding = '0 0 3px 3px';
    _msDiv.style.display = 'none';
    _container.appendChild(_msDiv);
    _msText = document.createElement('div');
    _msText.style.fontFamily = 'Helvetica, Arial, sans-serif';
    _msText.style.fontSize = '9px';
    _msText.style.color = 'rgb(' + _msColors[1][0] + ',' + _msColors[1][1] + ',' + _msColors[1][2] + ')';
    _msText.style.fontWeight = 'bold';
    _msText.innerHTML = 'MS';
    _msDiv.appendChild(_msText);
    _msGraph = document.createElement('div');
    _msGraph.style.position = 'relative';
    _msGraph.style.width = '74px';
    _msGraph.style.height = '30px';
    _msGraph.style.backgroundColor = 'rgb(' + _msColors[1][0] + ',' + _msColors[1][1] + ',' + _msColors[1][2] + ')';
    _msDiv.appendChild(_msGraph);
    while (_msGraph.children.length < 74) {
        _bar = document.createElement('span');
        _bar.style.width = '1px';
        _bar.style.height = Math.random() * 30 + 'px';
        _bar.style.cssFloat = 'left';
        _bar.style.backgroundColor = 'rgb(' + _msColors[0][0] + ',' + _msColors[0][1] + ',' + _msColors[0][2] + ')';
        _msGraph.appendChild(_bar);
    }
    var _updateGraph = function(dom, value) {
        var child = dom.appendChild(dom.firstChild);
        child.style.height = value + 'px';
    }
    return {
        domElement: _container,
        update: function() {
            _time = Date.now();
            _ms = _time - _timeLastFrame;
            _msMin = Math.min(_msMin, _ms);
            _msMax = Math.max(_msMax, _ms);
            _msText.textContent = _ms + ' MS (' + _msMin + '-' + _msMax + ')';
            _updateGraph(_msGraph, Math.min(30, 30 - (_ms / 200) * 30));
            _timeLastFrame = _time;
            _frames++;
            if (_time > _timeLastSecond + 1000) {
                _fps = Math.round((_frames * 1000) / (_time - _timeLastSecond));
                _fpsMin = Math.min(_fpsMin, _fps);
                _fpsMax = Math.max(_fpsMax, _fps);
                _fpsText.textContent = _fps + ' FPS (' + _fpsMin + '-' + _fpsMax + ')';
                _updateGraph(_fpsGraph, Math.min(30, 30 - (_fps / 100) * 30));
                _timeLastSecond = _time;
                _frames = 0;
            }
        }
    };
};