var x = function(t) {
  console.log("removed x.js version");
  var e = {};

  function i(s) {
    if (e[s]) {
      return e[s].exports
    }
    var n = e[s] = {
      i: s,
      l: false,
      exports: {}
    };
      t[s].call(n.exports, n, n.exports, i);
    n.l = true;
    return n.exports
  }
  i.m = t;
  i.c = e;
  i.d = function(t, e, s) {
    if (!i.o(t, e)) {
      Object.defineProperty(t, e, {
        configurable: false,
        enumerable: true,
        get: s
      })
    }
  };
  i.n = function(t) {
    var e = t && t.__esModule ? function e() {
      return t["default"]
    } : function e() {
      return t
    };
    i.d(e, "a", e);
    return e
  };
  i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  };
  i.p = "";
  return i(i.s = 4)
}([function(t, e) {
  t.exports = window.jQuery
}, function(t, e) {
  t.exports = window.csGlobal
}, function(t, e) {
  function i(t, e) {
    var i = 0,
      s = t.length,
      n;
    for (i; i < s; i++) {
      n = e(t[i], i);
      if (n === false) {
        break
      }
    }
  }

  function s(t) {
    return Object.prototype.toString.apply(t) === "[object Array]"
  }

  function n(t) {
    return typeof t === "function"
  }
  t.exports = {
    isFunction: n,
    isArray: s,
    each: i
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.calcFixedWidthSetup = a;
  e.calcFixedWidth = l;
  var s = i(0);
  var n = r(s);
  var o = i(1);

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function a(t) {
    var e = t.$window;
    (0, o.everinit)("[data-x-bar]", function(t) {
      var i = (0, n.default)(t).data("x-bar");
      if ("top" === i.region || "bottom" === i.region) {
        l(t);
        e.on("resize", function() {
          l(t)
        })
      }
    })
  }

  function l(t) {
    var e = window.getComputedStyle(t);
    if ("fixed" !== e.position) {
      (0, n.default)(t).css({
        width: "",
        "max-width": ""
      });
      return
    }
    var i = [];
    if (!c(e["margin-left"])) {
      i.push(e["margin-left"])
    }
    if (!c(e["margin-right"])) {
      i.push(e["margin-right"])
    }
    var s = "";
    if (i.length > 0) {
      s = i.length === 1 ? i[0] : "(" + i.join(" + ") + ")"
    }
    var o = 0;
    (0, n.default)(".x-bar-space-v:visible").each(function() {
      o += (0, n.default)(this).width()
    });
    var r = (0, n.default)("body.x-icon .x-sidebar .max.width:not(.x-container)").parent().outerWidth();
    if (r) {
      o += r
    }
    var a = "";
    if (o > 0) {
      a += " - " + o + "px"
    }
    if (s) {
      a += " - " + s
    }
    var l = {
      width: a ? "calc(100%" + a + ")" : "100%"
    };
    var d = window.getComputedStyle((0, n.default)(".x-site")[0])["max-width"];
    if ("none" !== d) {
      l["max-width"] = s ? "calc(" + d + " - " + s + ")" : d
    }(0, n.default)(t).css(l)
  }

  function c(t) {
    return 0 === t.trim().split(" ").filter(function(t) {
      return !t.match(/^0[a-zA-Z%]+|0$|none$/)
    }).length
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  var n = b(s);
  i(5);
  i(6);
  var o = i(7);
  var r = b(o);
  var a = i(8);
  var l = b(a);
  var c = i(13);
  var d = b(c);
  var u = i(14);
  var f = b(u);
  var h = i(15);
  var p = b(h);
  var v = i(16);
  var m = b(v);
  var y = i(17);
  var g = b(y);
  var w = i(3);
  var x = i(20);
  var k = i(1);

  function b(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  if (!window.csGlobal) {
    console.warn("X is running without Cornerstone.")
  }(0, n.default)(function() {
    var t = {
      $window: (0, n.default)(window),
      $document: (0, n.default)(document),
      $body: (0, n.default)("body"),
      $site: (0, n.default)(".x-site"),
      $masthead: (0, n.default)(".x-masthead"),
      $colophon: (0, n.default)(".x-colophon"),
      $navbar: (0, n.default)(".x-navbar"),
      $adminBar: (0, n.default)("#wpadminbar")
    };
    (0, f.default)(t);
    (0, p.default)(t);
    (0, r.default)(t);
    (0, g.default)(t);
    (0, w.calcFixedWidthSetup)(t);
    (0, x.stickyBarsSetup)(t);
    (0, d.default)(t);
    (0, l.default)(t);
    (0, m.default)(t);
    //k.csHooks.filter("scrollspy_selector", 'a[href*="#"]');
    /*k.csHooks.filter("scrollspy_offset", function(t, e) {
      var i = (0, x.stickyBarsFindTopOffset)(e + (0, k.adminBarOffset)());
      return i > 0 ? e + i : t
    });*/
    //k.csHooks.filter("hash_scrolling_selector", 'a[href*="#"]');
    //k.csHooks.filter("hash_scrolling_initial_move", true);
    /*k.csHooks.filter("hash_scrolling_offset", function(t) {
      var e = (0, x.stickyBarsFindTopOffset)(t);
      var i = (0, n.default)(".x-navbar-fixed-top-active .x-navbar");
      if (e) {
        t -= e - (0, k.adminBarOffset)()
      } else if (i.length > 0 && "fixed" === i.css("position")) {
        t -= i.outerHeight()
      }
      return t
    });*/
    /*k.csHooks.action("hash_scrolling_before", function(t) {
      var e = t.$anchor;
      var i = e.closest("[data-x-toggleable]");
      if (i.hasClass("x-modal") || i.hasClass("x-dropdown") || i.hasClass("x-off-canvas")) {
        window.xToggleUpdate(i.attr("data-x-toggleable"), false)
      }
    });*/
    /*k.csHooks.filter("hash_scrolling_allow", function(t, e, i, s) {
      if ("#comments" === s || e.hasAttribute("data-vc-accordion")) {
        return false
      }
      return t
    })*/
  })
}, function(t, e, i) {
  "use strict";
  (function(t, e, i) {
    "use strict";
    var s = t.document;
    var n = s.documentElement;
    var o = t.Modernizr;
    var r = function t(e) {
      return e.charAt(0).toUpperCase() + e.slice(1)
    };
    var a = "Moz Webkit O Ms".split(" ");
    var l = function t(e) {
      var i = n.style,
        s;
      if (typeof i[e] === "string") {
        return e
      }
      e = r(e);
      for (var o = 0, l = a.length; o < l; o++) {
        s = a[o] + e;
        if (typeof i[s] === "string") {
          return s
        }
      }
    };
    var c = l("transform"),
      d = l("transitionProperty");
    var u = {
      csstransforms: function t() {
        return !!c
      },
      csstransforms3d: function t() {
        var i = !!l("perspective");
        if (i && "webkitPerspective" in n.style) {
          var s = e("<style>@media (transform-3d),(-webkit-transform-3d)" + "{#modernizr{height:3px}}</style>").appendTo("head"),
            o = e('<div id="modernizr" />').appendTo("html");
          i = o.height() === 3;
          o.remove();
          s.remove()
        }
        return i
      },
      csstransitions: function t() {
        return !!d
      }
    };
    var f;
    if (o) {
      for (f in u) {
        if (!o.hasOwnProperty(f)) {
          o.addTest(f, u[f])
        }
      }
    } else {
      o = t.Modernizr = {
        _version: "1.6ish: miniModernizr for Isotope"
      };
      var h = " ";
      var p;
      for (f in u) {
        p = u[f]();
        o[f] = p;
        h += " " + (p ? "" : "no-") + f
      }
      e("html").addClass(h)
    }
    if (o.csstransforms) {
      var v = o.csstransforms3d ? {
        translate: function t(e) {
          return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
        },
        scale: function t(e) {
          return "scale3d(" + e + ", " + e + ", 1) "
        }
      } : {
        translate: function t(e) {
          return "translate(" + e[0] + "px, " + e[1] + "px) "
        },
        scale: function t(e) {
          return "scale(" + e + ") "
        }
      };
      var m = function t(i, s, n) {
        var o = e.data(i, "isoTransform") || {},
          r = {},
          a, l = {},
          d;
        r[s] = n;
        e.extend(o, r);
        for (a in o) {
          d = o[a];
          l[a] = v[a](d)
        }
        var u = l.translate || "",
          f = l.scale || "",
          h = u + f;
        e.data(i, "isoTransform", o);
        i.style[c] = h
      };
      e.cssNumber.scale = true;
      e.cssHooks.scale = {
        set: function t(e, i) {
          m(e, "scale", i)
        },
        get: function t(i, s) {
          var n = e.data(i, "isoTransform");
          return n && n.scale ? n.scale : 1
        }
      };
      e.fx.step.scale = function(t) {
        e.cssHooks.scale.set(t.elem, t.now + t.unit)
      };
      e.cssNumber.translate = true;
      e.cssHooks.translate = {
        set: function t(e, i) {
          m(e, "translate", i)
        },
        get: function t(i, s) {
          var n = e.data(i, "isoTransform");
          return n && n.translate ? n.translate : [0, 0]
        }
      }
    }
    var y, g;
    if (o.csstransitions) {
      y = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
      }[d];
      g = l("transitionDuration")
    }
    var w = e.event,
      x = "dispatch",
      k;
    w.special.xsmartresize = {
      setup: function t() {
        e(this).bind("resize", w.special.xsmartresize.handler)
      },
      teardown: function t() {
        e(this).unbind("resize", w.special.xsmartresize.handler)
      },
      handler: function t(e, i) {
        var s = this,
          n = arguments;
        e.type = "xsmartresize";
        if (k) {
          clearTimeout(k)
        }
        k = setTimeout(function() {
          w[x].apply(s, n)
        }, i === "execAsap" ? 0 : 100)
      }
    };
    e.fn.xsmartresize = function(t) {
      return t ? this.bind("xsmartresize", t) : this.trigger("xsmartresize", ["execAsap"])
    };
    e.xIsotope = function(t, i, s) {
      this.element = e(i);
      this._create(t);
      this._init(s)
    };
    var b = ["width", "height"];
    var C = e(t);
    e.xIsotope.settings = {
      resizable: true,
      layoutMode: "masonry",
      containerClass: "isotope",
      itemClass: "isotope-item",
      hiddenClass: "isotope-hidden",
      hiddenStyle: {
        opacity: 0,
        scale: .001
      },
      visibleStyle: {
        opacity: 1,
        scale: 1
      },
      containerStyle: {
        position: "relative",
        overflow: "hidden"
      },
      animationEngine: "best-available",
      animationOptions: {
        queue: false,
        duration: 800
      },
      sortBy: "original-order",
      sortAscending: true,
      resizesContainer: true,
      transformsEnabled: true,
      itemPositionDataEnabled: false
    };
    e.xIsotope.prototype = {
      _create: function t(i) {
        this.options = e.extend({}, e.xIsotope.settings, i);
        this.styleQueue = [];
        this.elemCount = 0;
        var s = this.element[0].style;
        this.originalStyle = {};
        var n = b.slice(0);
        for (var o in this.options.containerStyle) {
          n.push(o)
        }
        for (var r = 0, a = n.length; r < a; r++) {
          o = n[r];
          this.originalStyle[o] = s[o] || ""
        }
        this.element.css(this.options.containerStyle);
        this._updateAnimationEngine();
        this._updateUsingTransforms();
        var l = {
          "original-order": function t(e, i) {
            i.elemCount++;
            return i.elemCount
          },
          random: function t() {
            return Math.random()
          }
        };
        this.options.getSortData = e.extend(this.options.getSortData, l);
        this.reloadItems();
        this.offset = {
          left: parseInt(this.element.css("padding-left") || 0, 10),
          top: parseInt(this.element.css("padding-top") || 0, 10)
        };
        var c = this;
        setTimeout(function() {
          c.element.addClass(c.options.containerClass)
        }, 0);
        if (this.options.resizable) {
          C.bind("xsmartresize.isotope", function() {
            c.resize()
          })
        }
        this.element.delegate("." + this.options.hiddenClass, "click", function() {
          return false
        })
      },
      _getAtoms: function t(e) {
        var i = this.options.itemSelector,
          s = i ? e.filter(i).add(e.find(i)) : e,
          n = {
            position: "absolute"
          };
        s = s.filter(function(t, e) {
          return e.nodeType === 1
        });
        if (this.usingTransforms) {
          n.left = 0;
          n.top = 0
        }
        s.css(n).addClass(this.options.itemClass);
        this.updateSortData(s, true);
        return s
      },
      _init: function t(e) {
        this.$filteredAtoms = this._filter(this.$allAtoms);
        this._sort();
        this.reLayout(e)
      },
      option: function t(i) {
        if (e.isPlainObject(i)) {
          this.options = e.extend(true, this.options, i);
          var s;
          for (var n in i) {
            s = "_update" + r(n);
            if (this[s]) {
              this[s]()
            }
          }
        }
      },
      _updateAnimationEngine: function t() {
        var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
        var i;
        switch (e) {
          case "css":
          case "none":
            i = false;
            break;
          case "jquery":
            i = true;
            break;
          default:
            i = !o.csstransitions
        }
        this.isUsingJQueryAnimation = i;
        this._updateUsingTransforms()
      },
      _updateTransformsEnabled: function t() {
        this._updateUsingTransforms()
      },
      _updateUsingTransforms: function t() {
        var e = this.usingTransforms = this.options.transformsEnabled && o.csstransforms && o.csstransitions && !this.isUsingJQueryAnimation;
        if (!e) {
          delete this.options.hiddenStyle.scale;
          delete this.options.visibleStyle.scale
        }
        this.getPositionStyles = e ? this._translate : this._positionAbs
      },
      _filter: function t(e) {
        var i = this.options.filter === "" ? "*" : this.options.filter;
        if (!i) {
          return e
        }
        var s = this.options.hiddenClass,
          n = "." + s,
          o = e.filter(n),
          r = o;
        if (i !== "*") {
          r = o.filter(i);
          var a = e.not(n).not(i).addClass(s);
          this.styleQueue.push({
            $el: a,
            style: this.options.hiddenStyle
          })
        }
        this.styleQueue.push({
          $el: r,
          style: this.options.visibleStyle
        });
        r.removeClass(s);
        return e.filter(i)
      },
      updateSortData: function t(i, s) {
        var n = this,
          o = this.options.getSortData,
          r, a;
        i.each(function() {
          r = e(this);
          a = {};
          for (var t in o) {
            if (!s && t === "original-order") {
              a[t] = e.data(this, "isotope-sort-data")[t]
            } else {
              a[t] = o[t](r, n)
            }
          }
          e.data(this, "isotope-sort-data", a)
        })
      },
      _sort: function t() {
        var e = this.options.sortBy,
          i = this._getSorter,
          s = this.options.sortAscending ? 1 : -1,
          n = function t(n, o) {
            var r = i(n, e),
              a = i(o, e);
            if (r === a && e !== "original-order") {
              r = i(n, "original-order");
              a = i(o, "original-order")
            }
            return (r > a ? 1 : r < a ? -1 : 0) * s
          };
        this.$filteredAtoms.sort(n)
      },
      _getSorter: function t(i, s) {
        return e.data(i, "isotope-sort-data")[s]
      },
      _translate: function t(e, i) {
        return {
          translate: [e, i]
        }
      },
      _positionAbs: function t(e, i) {
        return {
          left: e,
          top: i
        }
      },
      _pushPosition: function t(e, i, s) {
        i = Math.round(i + this.offset.left);
        s = Math.round(s + this.offset.top);
        var n = this.getPositionStyles(i, s);
        this.styleQueue.push({
          $el: e,
          style: n
        });
        if (this.options.itemPositionDataEnabled) {
          e.data("isotope-item-position", {
            x: i,
            y: s
          })
        }
      },
      layout: function t(e, i) {
        var s = this.options.layoutMode;
        this["_" + s + "Layout"](e);
        if (this.options.resizesContainer) {
          var n = this["_" + s + "GetContainerSize"]();
          this.styleQueue.push({
            $el: this.element,
            style: n
          })
        }
        this._processStyleQueue(e, i);
        this.isLaidOut = true
      },
      _processStyleQueue: function t(i, s) {
        var n = !this.isLaidOut ? "css" : this.isUsingJQueryAnimation ? "animate" : "css",
          r = this.options.animationOptions,
          a = this.options.onLayout,
          l, c, d, u;
        c = function t(e, i) {
          i.$el[n](i.style, r)
        };
        if (this._isInserting && this.isUsingJQueryAnimation) {
          c = function t(e, i) {
            l = i.$el.hasClass("no-transition") ? "css" : n;
            i.$el[l](i.style, r)
          }
        } else if (s || a || r.complete) {
          var f = false,
            h = [s, a, r.complete],
            p = this;
          d = true;
          u = function t() {
            if (f) {
              return
            }
            var e;
            for (var s = 0, n = h.length; s < n; s++) {
              e = h[s];
              if (typeof e === "function") {
                e.call(p.element, i, p)
              }
            }
            f = true
          };
          if (this.isUsingJQueryAnimation && n === "animate") {
            r.complete = u;
            d = false
          } else if (o.csstransitions) {
            var v = 0,
              m = this.styleQueue[0],
              w = m && m.$el,
              x;
            while (!w || !w.length) {
              x = this.styleQueue[v++];
              if (!x) {
                return
              }
              w = x.$el
            }
            var k = parseFloat(getComputedStyle(w[0])[g]);
            if (k > 0) {
              c = function t(e, i) {
                i.$el[n](i.style, r).one(y, u)
              };
              d = false
            }
          }
        }
        e.each(this.styleQueue, c);
        if (d) {
          u()
        }
        this.styleQueue = []
      },
      resize: function t() {
        if (this["_" + this.options.layoutMode + "ResizeChanged"]()) {
          this.reLayout()
        }
      },
      reLayout: function t(e) {
        this["_" + this.options.layoutMode + "Reset"]();
        this.layout(this.$filteredAtoms, e)
      },
      addItems: function t(e, i) {
        var s = this._getAtoms(e);
        this.$allAtoms = this.$allAtoms.add(s);
        if (i) {
          i(s)
        }
      },
      insert: function t(e, i) {
        this.element.append(e);
        var s = this;
        this.addItems(e, function(t) {
          var e = s._filter(t);
          s._addHideAppended(e);
          s._sort();
          s.reLayout();
          s._revealAppended(e, i)
        })
      },
      appended: function t(e, i) {
        var s = this;
        this.addItems(e, function(t) {
          s._addHideAppended(t);
          s.layout(t);
          s._revealAppended(t, i)
        })
      },
      _addHideAppended: function t(e) {
        this.$filteredAtoms = this.$filteredAtoms.add(e);
        e.addClass("no-transition");
        this._isInserting = true;
        this.styleQueue.push({
          $el: e,
          style: this.options.hiddenStyle
        })
      },
      _revealAppended: function t(e, i) {
        var s = this;
        setTimeout(function() {
          e.removeClass("no-transition");
          s.styleQueue.push({
            $el: e,
            style: s.options.visibleStyle
          });
          s._isInserting = false;
          s._processStyleQueue(e, i)
        }, 10)
      },
      reloadItems: function t() {
        this.$allAtoms = this._getAtoms(this.element.children())
      },
      remove: function t(e, i) {
        this.$allAtoms = this.$allAtoms.not(e);
        this.$filteredAtoms = this.$filteredAtoms.not(e);
        var s = this;
        var n = function t() {
          e.remove();
          if (i) {
            i.call(s.element)
          }
        };
        if (e.filter(":not(." + this.options.hiddenClass + ")").length) {
          this.styleQueue.push({
            $el: e,
            style: this.options.hiddenStyle
          });
          this._sort();
          this.reLayout(n)
        } else {
          n()
        }
      },
      shuffle: function t(e) {
        this.updateSortData(this.$allAtoms);
        this.options.sortBy = "random";
        this._sort();
        this.reLayout(e)
      },
      destroy: function t() {
        var e = this.usingTransforms;
        var i = this.options;
        this.$allAtoms.removeClass(i.hiddenClass + " " + i.itemClass).each(function() {
          var t = this.style;
          t.position = "";
          t.top = "";
          t.left = "";
          t.opacity = "";
          if (e) {
            t[c] = ""
          }
        });
        var s = this.element[0].style;
        for (var n in this.originalStyle) {
          s[n] = this.originalStyle[n]
        }
        this.element.unbind(".isotope").undelegate("." + i.hiddenClass, "click").removeClass(i.containerClass).removeData("isotope");
        C.unbind(".isotope")
      },
      _getSegments: function t(e) {
        var i = this.options.layoutMode,
          s = e ? "rowHeight" : "columnWidth",
          n = e ? "height" : "width",
          o = e ? "rows" : "cols",
          a = this.element[n](),
          l, c = this.options[i] && this.options[i][s] || this.$filteredAtoms["outer" + r(n)](true) || a;
        l = Math.floor(a / c);
        l = Math.max(l, 1);
        this[i][o] = l;
        this[i][s] = c
      },
      _checkIfSegmentsChanged: function t(e) {
        var i = this.options.layoutMode,
          s = e ? "rows" : "cols",
          n = this[i][s];
        this._getSegments(e);
        return this[i][s] !== n
      },
      _masonryReset: function t() {
        this.masonry = {};
        this._getSegments();
        var e = this.masonry.cols;
        this.masonry.colYs = [];
        while (e--) {
          this.masonry.colYs.push(0)
        }
      },
      _masonryLayout: function t(i) {
        var s = this,
          n = s.masonry;
        i.each(function() {
          var t = e(this),
            i = Math.ceil(t.outerWidth(true) / n.columnWidth);
          i = Math.min(i, n.cols);
          if (i === 1) {
            s._masonryPlaceBrick(t, n.colYs)
          } else {
            var o = n.cols + 1 - i,
              r = [],
              a, l;
            for (l = 0; l < o; l++) {
              a = n.colYs.slice(l, l + i);
              r[l] = Math.max.apply(Math, a)
            }
            s._masonryPlaceBrick(t, r)
          }
        })
      },
      _masonryPlaceBrick: function t(e, i) {
        var s = Math.min.apply(Math, i),
          n = 0;
        for (var o = 0, r = i.length; o < r; o++) {
          if (i[o] === s) {
            n = o;
            break
          }
        }
        var a = this.masonry.columnWidth * n,
          l = s;
        this._pushPosition(e, a, l);
        var c = s + e.outerHeight(true),
          d = this.masonry.cols + 1 - r;
        for (o = 0; o < d; o++) {
          this.masonry.colYs[n + o] = c
        }
      },
      _masonryGetContainerSize: function t() {
        var e = Math.max.apply(Math, this.masonry.colYs);
        return {
          height: e
        }
      },
      _masonryResizeChanged: function t() {
        return this._checkIfSegmentsChanged()
      },
      _fitRowsReset: function t() {
        this.fitRows = {
          x: 0,
          y: 0,
          height: 0
        }
      },
      _fitRowsLayout: function t(i) {
        var s = this,
          n = this.element.width(),
          o = this.fitRows;
        i.each(function() {
          var t = e(this),
            i = t.outerWidth(true),
            r = t.outerHeight(true);
          if (o.x !== 0 && i + o.x > n) {
            o.x = 0;
            o.y = o.height
          }
          s._pushPosition(t, o.x, o.y);
          o.height = Math.max(o.y + r, o.height);
          o.x += i
        })
      },
      _fitRowsGetContainerSize: function t() {
        return {
          height: this.fitRows.height
        }
      },
      _fitRowsResizeChanged: function t() {
        return true
      },
      _cellsByRowReset: function t() {
        this.cellsByRow = {
          index: 0
        };
        this._getSegments();
        this._getSegments(true)
      },
      _cellsByRowLayout: function t(i) {
        var s = this,
          n = this.cellsByRow;
        i.each(function() {
          var t = e(this),
            i = n.index % n.cols,
            o = Math.floor(n.index / n.cols),
            r = (i + .5) * n.columnWidth - t.outerWidth(true) / 2,
            a = (o + .5) * n.rowHeight - t.outerHeight(true) / 2;
          s._pushPosition(t, r, a);
          n.index++
        })
      },
      _cellsByRowGetContainerSize: function t() {
        return {
          height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
        }
      },
      _cellsByRowResizeChanged: function t() {
        return this._checkIfSegmentsChanged()
      },
      _straightDownReset: function t() {
        this.straightDown = {
          y: 0
        }
      },
      _straightDownLayout: function t(i) {
        var s = this;
        i.each(function(t) {
          var i = e(this);
          s._pushPosition(i, 0, s.straightDown.y);
          s.straightDown.y += i.outerHeight(true)
        })
      },
      _straightDownGetContainerSize: function t() {
        return {
          height: this.straightDown.y
        }
      },
      _straightDownResizeChanged: function t() {
        return true
      },
      _masonryHorizontalReset: function t() {
        this.masonryHorizontal = {};
        this._getSegments(true);
        var e = this.masonryHorizontal.rows;
        this.masonryHorizontal.rowXs = [];
        while (e--) {
          this.masonryHorizontal.rowXs.push(0)
        }
      },
      _masonryHorizontalLayout: function t(i) {
        var s = this,
          n = s.masonryHorizontal;
        i.each(function() {
          var t = e(this),
            i = Math.ceil(t.outerHeight(true) / n.rowHeight);
          i = Math.min(i, n.rows);
          if (i === 1) {
            s._masonryHorizontalPlaceBrick(t, n.rowXs)
          } else {
            var o = n.rows + 1 - i,
              r = [],
              a, l;
            for (l = 0; l < o; l++) {
              a = n.rowXs.slice(l, l + i);
              r[l] = Math.max.apply(Math, a)
            }
            s._masonryHorizontalPlaceBrick(t, r)
          }
        })
      },
      _masonryHorizontalPlaceBrick: function t(e, i) {
        var s = Math.min.apply(Math, i),
          n = 0;
        for (var o = 0, r = i.length; o < r; o++) {
          if (i[o] === s) {
            n = o;
            break
          }
        }
        var a = s,
          l = this.masonryHorizontal.rowHeight * n;
        this._pushPosition(e, a, l);
        var c = s + e.outerWidth(true),
          d = this.masonryHorizontal.rows + 1 - r;
        for (o = 0; o < d; o++) {
          this.masonryHorizontal.rowXs[n + o] = c
        }
      },
      _masonryHorizontalGetContainerSize: function t() {
        var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
        return {
          width: e
        }
      },
      _masonryHorizontalResizeChanged: function t() {
        return this._checkIfSegmentsChanged(true)
      },
      _fitColumnsReset: function t() {
        this.fitColumns = {
          x: 0,
          y: 0,
          width: 0
        }
      },
      _fitColumnsLayout: function t(i) {
        var s = this,
          n = this.element.height(),
          o = this.fitColumns;
        i.each(function() {
          var t = e(this),
            i = t.outerWidth(true),
            r = t.outerHeight(true);
          if (o.y !== 0 && r + o.y > n) {
            o.x = o.width;
            o.y = 0
          }
          s._pushPosition(t, o.x, o.y);
          o.width = Math.max(o.x + i, o.width);
          o.y += r
        })
      },
      _fitColumnsGetContainerSize: function t() {
        return {
          width: this.fitColumns.width
        }
      },
      _fitColumnsResizeChanged: function t() {
        return true
      },
      _cellsByColumnReset: function t() {
        this.cellsByColumn = {
          index: 0
        };
        this._getSegments();
        this._getSegments(true)
      },
      _cellsByColumnLayout: function t(i) {
        var s = this,
          n = this.cellsByColumn;
        i.each(function() {
          var t = e(this),
            i = Math.floor(n.index / n.rows),
            o = n.index % n.rows,
            r = (i + .5) * n.columnWidth - t.outerWidth(true) / 2,
            a = (o + .5) * n.rowHeight - t.outerHeight(true) / 2;
          s._pushPosition(t, r, a);
          n.index++
        })
      },
      _cellsByColumnGetContainerSize: function t() {
        return {
          width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
        }
      },
      _cellsByColumnResizeChanged: function t() {
        return this._checkIfSegmentsChanged(true)
      },
      _straightAcrossReset: function t() {
        this.straightAcross = {
          x: 0
        }
      },
      _straightAcrossLayout: function t(i) {
        var s = this;
        i.each(function(t) {
          var i = e(this);
          s._pushPosition(i, s.straightAcross.x, 0);
          s.straightAcross.x += i.outerWidth(true)
        })
      },
      _straightAcrossGetContainerSize: function t() {
        return {
          width: this.straightAcross.x
        }
      },
      _straightAcrossResizeChanged: function t() {
        return true
      }
    };
    var T = function e(i) {
      if (t.console) {
        t.console.error(i)
      }
    };
    e.fn.xIsotope = function(t, i) {
      if (typeof t === "string") {
        var s = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var i = e.data(this, "isotope");
          if (!i) {
            T("cannot call methods on isotope prior to initialization; " + "attempted to call method '" + t + "'");
            return
          }
          if (!e.isFunction(i[t]) || t.charAt(0) === "_") {
            T("no such method '" + t + "' for isotope instance");
            return
          }
          i[t].apply(i, s)
        })
      } else {
        this.each(function() {
          var s = e.data(this, "isotope");
          if (s) {
            s.option(t);
            s._init(i)
          } else {
            e.data(this, "isotope", new e.xIsotope(t, this, i))
          }
        })
      }
      return this
    }
  })(window, jQuery)
}, function(t, e, i) {
  "use strict";
  var s, n, o;
  (function(r) {
    "use strict";
    if (true) {
      !(n = [i(0)], s = r, o = typeof s === "function" ? s.apply(e, n) : s, o !== undefined && (t.exports = o))
    } else {
      r(jQuery)
    }
  })(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
      var e = 0;

      function i(i, s) {
        var n = this,
          o, r;
        n.defaults = {
          accessibility: true,
          arrows: true,
          autoplay: false,
          autoplaySpeed: 3e3,
          centerMode: false,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function t(e, i) {
            return '<button type="button">' + (i + 1) + "</button>"
          },
          dots: false,
          draggable: true,
          easing: "linear",
          fade: false,
          infinite: true,
          lazyLoad: "ondemand",
          onBeforeChange: null,
          onAfterChange: null,
          onInit: null,
          onReInit: null,
          pauseOnHover: true,
          responsive: null,
          slide: "div",
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          swipe: true,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          vertical: false
        };
        n.initials = {
          animating: false,
          autoPlayTimer: null,
          currentSlide: 0,
          currentLeft: null,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: false,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: false
        };
        t.extend(n, n.initials);
        n.activeBreakpoint = null;
        n.animType = null;
        n.animProp = null;
        n.breakpoints = [];
        n.breakpointSettings = [];
        n.cssTransitions = false;
        n.paused = false;
        n.positionProp = null;
        n.$slider = t(i);
        n.$slidesCache = null;
        n.transformType = null;
        n.transitionType = null;
        n.windowWidth = 0;
        n.windowTimer = null;
        n.options = t.extend({}, n.defaults, s);
        n.originalSettings = n.options;
        o = n.options.responsive || null;
        if (o && o.length > -1) {
          for (r in o) {
            if (o.hasOwnProperty(r)) {
              n.breakpoints.push(o[r].breakpoint);
              n.breakpointSettings[o[r].breakpoint] = o[r].settings
            }
          }
          n.breakpoints.sort(function(t, e) {
            return e - t
          })
        }
        n.autoPlay = t.proxy(n.autoPlay, n);
        n.autoPlayClear = t.proxy(n.autoPlayClear, n);
        n.changeSlide = t.proxy(n.changeSlide, n);
        n.setPosition = t.proxy(n.setPosition, n);
        n.swipeHandler = t.proxy(n.swipeHandler, n);
        n.dragHandler = t.proxy(n.dragHandler, n);
        n.keyHandler = t.proxy(n.keyHandler, n);
        n.autoPlayIterator = t.proxy(n.autoPlayIterator, n);
        n.instanceUid = e++;
        n.init()
      }
      return i
    }();
    e.prototype.addSlide = function(e, i, s) {
      var n = this;
      if (typeof i === "boolean") {
        s = i;
        i = null
      } else if (i < 0 || i >= n.slideCount) {
        return false
      }
      n.unload();
      if (typeof i === "number") {
        if (i === 0 && n.$slides.length === 0) {
          t(e).appendTo(n.$slideTrack)
        } else if (s) {
          t(e).insertBefore(n.$slides.eq(i))
        } else {
          t(e).insertAfter(n.$slides.eq(i))
        }
      } else {
        if (s === true) {
          t(e).prependTo(n.$slideTrack)
        } else {
          t(e).appendTo(n.$slideTrack)
        }
      }
      n.$slides = n.$slideTrack.children(this.options.slide);
      n.$slideTrack.children(this.options.slide).remove();
      n.$slideTrack.append(n.$slides);
      n.$slidesCache = n.$slides;
      n.reinit()
    };
    e.prototype.animateSlide = function(e, i) {
      var s = {},
        n = this;
      if (n.transformsEnabled === false) {
        if (n.options.vertical === false) {
          n.$slideTrack.animate({
            left: e
          }, n.options.speed, n.options.easing, i)
        } else {
          n.$slideTrack.animate({
            top: e
          }, n.options.speed, n.options.easing, i)
        }
      } else {
        if (n.cssTransitions === false) {
          t({
            animStart: n.currentLeft
          }).animate({
            animStart: e
          }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function t(e) {
              if (n.options.vertical === false) {
                s[n.animType] = "translate(" + e + "px, 0px)";
                n.$slideTrack.css(s)
              } else {
                s[n.animType] = "translate(0px," + e + "px)";
                n.$slideTrack.css(s)
              }
            },
            complete: function t() {
              if (i) {
                i.call()
              }
            }
          })
        } else {
          n.applyTransition();
          if (n.options.vertical === false) {
            s[n.animType] = "translate3d(" + e + "px, 0px, 0px)"
          } else {
            s[n.animType] = "translate3d(0px," + e + "px, 0px)"
          }
          n.$slideTrack.css(s);
          if (i) {
            setTimeout(function() {
              n.disableTransition();
              i.call()
            }, n.options.speed)
          }
        }
      }
    };
    e.prototype.applyTransition = function(t) {
      var e = this,
        i = {};
      if (e.options.fade === false) {
        i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase
      } else {
        i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase
      }
      if (e.options.fade === false) {
        e.$slideTrack.css(i)
      } else {
        e.$slides.eq(t).css(i)
      }
    };
    e.prototype.autoPlay = function() {
      var t = this;
      if (t.autoPlayTimer) {
        clearInterval(t.autoPlayTimer)
      }
      if (t.slideCount > t.options.slidesToShow && t.paused !== true) {
        t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed)
      }
    };
    e.prototype.autoPlayClear = function() {
      var t = this;
      if (t.autoPlayTimer) {
        clearInterval(t.autoPlayTimer)
      }
    };
    e.prototype.autoPlayIterator = function() {
      var t = this;
      if (t.options.infinite === false) {
        if (t.direction === 1) {
          if (t.currentSlide + 1 === t.slideCount - 1) {
            t.direction = 0
          }
          t.slideHandler(t.currentSlide + t.options.slidesToScroll)
        } else {
          if (t.currentSlide - 1 === 0) {
            t.direction = 1
          }
          t.slideHandler(t.currentSlide - t.options.slidesToScroll)
        }
      } else {
        t.slideHandler(t.currentSlide + t.options.slidesToScroll)
      }
    };
    e.prototype.buildArrows = function() {
      var e = this;
      if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
        e.$prevArrow = t('<button type="button" class="slick-prev">Previous</button>').appendTo(e.$slider);
        e.$nextArrow = t('<button type="button" class="slick-next">Next</button>').appendTo(e.$slider);
        if (e.options.infinite !== true) {
          e.$prevArrow.addClass("slick-disabled")
        }
      }
    };
    e.prototype.buildDots = function() {
      var e = this,
        i, s;
      if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
        s = '<ul class="slick-dots">';
        for (i = 0; i <= e.getDotCount(); i += 1) {
          s += "<li>" + e.options.customPaging.call(this, e, i) + "</li>"
        }
        s += "</ul>";
        e.$dots = t(s).appendTo(e.$slider);
        e.$dots.find("li").first().addClass("slick-active")
      }
    };
    e.prototype.buildOut = function() {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
      e.slideCount = e.$slides.length;
      e.$slidesCache = e.$slides;
      e.$slider.addClass("slick-slider");
      e.$slideTrack = e.slideCount === 0 ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent();
      e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent();
      e.$slideTrack.css("opacity", 0);
      if (e.options.centerMode === true) {
        e.options.infinite = true;
        e.options.slidesToScroll = 1;
        if (e.options.slidesToShow % 2 === 0) {
          e.options.slidesToShow = 3
        }
      }
      t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading");
      e.setupInfinite();
      e.buildArrows();
      e.buildDots();
      if (e.options.accessibility === true) {
        e.$list.prop("tabIndex", 0)
      }
      e.setSlideClasses(0);
      if (e.options.draggable === true) {
        e.$list.addClass("draggable")
      }
    };
    e.prototype.checkResponsive = function() {
      var e = this,
        i, s;
      if (e.originalSettings.responsive && e.originalSettings.responsive.length > -1 && e.originalSettings.responsive !== null) {
        s = null;
        for (i in e.breakpoints) {
          if (e.breakpoints.hasOwnProperty(i)) {
            if (t(window).width() < e.breakpoints[i]) {
              s = e.breakpoints[i]
            }
          }
        }
        if (s !== null) {
          if (e.activeBreakpoint !== null) {
            if (s !== e.activeBreakpoint) {
              e.activeBreakpoint = s;
              e.options = t.extend({}, e.defaults, e.breakpointSettings[s]);
              e.refresh()
            }
          } else {
            e.activeBreakpoint = s;
            e.options = t.extend({}, e.defaults, e.breakpointSettings[s]);
            e.refresh()
          }
        } else {
          if (e.activeBreakpoint !== null) {
            e.activeBreakpoint = null;
            e.options = t.extend({}, e.defaults, e.originalSettings);
            e.refresh()
          }
        }
      }
    };
    e.prototype.changeSlide = function(e) {
      var i = this;
      switch (e.data.message) {
        case "previous":
          i.slideHandler(i.currentSlide - i.options.slidesToScroll);
          break;
        case "next":
          i.slideHandler(i.currentSlide + i.options.slidesToScroll);
          break;
        case "index":
          i.slideHandler(t(e.target).parent().index() * i.options.slidesToScroll);
          break;
        default:
          return false
      }
    };
    e.prototype.destroy = function() {
      var e = this;
      e.autoPlayClear();
      e.touchObject = {};
      t(".slick-cloned", e.$slider).remove();
      if (e.$dots) {
        e.$dots.remove()
      }
      if (e.$prevArrow) {
        e.$prevArrow.remove();
        e.$nextArrow.remove()
      }
      e.$slides.unwrap().unwrap();
      e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style");
      e.$slider.removeClass("slick-slider");
      e.$slider.removeClass("slick-initialized");
      e.$list.off(".slick");
      t(window).off(".slick-" + e.instanceUid)
    };
    e.prototype.disableTransition = function(t) {
      var e = this,
        i = {};
      i[e.transitionType] = "";
      if (e.options.fade === false) {
        e.$slideTrack.css(i)
      } else {
        e.$slides.eq(t).css(i)
      }
    };
    e.prototype.fadeSlide = function(t, e) {
      var i = this;
      if (i.cssTransitions === false) {
        i.$slides.eq(t).css({
          zIndex: 1e3
        });
        i.$slides.eq(t).animate({
          opacity: 1
        }, i.options.speed, i.options.easing, e)
      } else {
        i.applyTransition(t);
        i.$slides.eq(t).css({
          opacity: 1,
          zIndex: 1e3
        });
        if (e) {
          setTimeout(function() {
            i.disableTransition(t);
            e.call()
          }, i.options.speed)
        }
      }
    };
    e.prototype.filterSlides = function(t) {
      var e = this;
      if (t !== null) {
        e.unload();
        e.$slideTrack.children(this.options.slide).remove();
        e.$slidesCache.filter(t).appendTo(e.$slideTrack);
        e.reinit()
      }
    };
    e.prototype.getCurrent = function() {
      var t = this;
      return t.currentSlide
    };
    e.prototype.getDotCount = function() {
      var t = this,
        e = 0,
        i = 0,
        s = 0,
        n;
      n = t.options.infinite === true ? t.slideCount + t.options.slidesToShow - t.options.slidesToScroll : t.slideCount;
      while (e < n) {
        s++;
        i += t.options.slidesToScroll;
        e = i + t.options.slidesToShow
      }
      return s
    };
    e.prototype.getLeft = function(t) {
      var e = this,
        i, s, n = 0;
      e.slideOffset = 0;
      s = e.$slides.first().outerHeight();
      if (e.options.infinite === true) {
        if (e.slideCount > e.options.slidesToShow) {
          e.slideOffset = e.slideWidth * e.options.slidesToShow * -1;
          n = s * e.options.slidesToShow * -1
        }
        if (e.slideCount % e.options.slidesToScroll !== 0) {
          if (t + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow) {
            e.slideOffset = e.slideCount % e.options.slidesToShow * e.slideWidth * -1;
            n = e.slideCount % e.options.slidesToShow * s * -1
          }
        }
      } else {
        if (e.slideCount % e.options.slidesToShow !== 0) {
          if (t + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow) {
            e.slideOffset = e.options.slidesToShow * e.slideWidth - e.slideCount % e.options.slidesToShow * e.slideWidth;
            n = e.slideCount % e.options.slidesToShow * s
          }
        }
      }
      if (e.options.centerMode === true) {
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth
      }
      if (e.options.vertical === false) {
        i = t * e.slideWidth * -1 + e.slideOffset
      } else {
        i = t * s * -1 + n
      }
      return i
    };
    e.prototype.init = function() {
      var e = this;
      if (!t(e.$slider).hasClass("slick-initialized")) {
        t(e.$slider).addClass("slick-initialized");
        e.buildOut();
        e.setProps();
        e.startLoad();
        e.loadSlider();
        e.initializeEvents();
        e.checkResponsive()
      }
      if (e.options.onInit !== null) {
        e.options.onInit.call(this, e)
      }
    };
    e.prototype.initArrowEvents = function() {
      var t = this;
      if (t.options.arrows === true && t.slideCount > t.options.slidesToShow) {
        t.$prevArrow.on("click.slick", {
          message: "previous"
        }, t.changeSlide);
        t.$nextArrow.on("click.slick", {
          message: "next"
        }, t.changeSlide)
      }
    };
    e.prototype.initDotEvents = function() {
      var e = this;
      if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
        t("li", e.$dots).on("click.slick", {
          message: "index"
        }, e.changeSlide)
      }
    };
    e.prototype.initializeEvents = function() {
      var e = this;
      e.initArrowEvents();
      e.initDotEvents();
      e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, e.swipeHandler);
      e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, e.swipeHandler);
      e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, e.swipeHandler);
      e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, e.swipeHandler);
      if (e.options.pauseOnHover === true && e.options.autoplay === true) {
        e.$list.on("mouseenter.slick", e.autoPlayClear);
        e.$list.on("mouseleave.slick", e.autoPlay)
      }
      if (e.options.accessibility === true) {
        e.$list.on("keydown.slick", e.keyHandler)
      }
      t(window).on("orientationchange.slick.slick-" + e.instanceUid, function() {
        e.checkResponsive();
        e.setPosition()
      });
      t(window).on("resize.slick.slick-" + e.instanceUid, function() {
        if (t(window).width !== e.windowWidth) {
          clearTimeout(e.windowDelay);
          e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width();
            e.checkResponsive();
            e.setPosition()
          }, 50)
        }
      });
      t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition)
    };
    e.prototype.initUI = function() {
      var t = this;
      if (t.options.arrows === true && t.slideCount > t.options.slidesToShow) {
        t.$prevArrow.show();
        t.$nextArrow.show()
      }
      if (t.options.dots === true && t.slideCount > t.options.slidesToShow) {
        t.$dots.show()
      }
      if (t.options.autoplay === true) {
        t.autoPlay()
      }
    };
    e.prototype.keyHandler = function(t) {
      var e = this;
      if (t.keyCode === 37) {
        e.changeSlide({
          data: {
            message: "previous"
          }
        })
      } else if (t.keyCode === 39) {
        e.changeSlide({
          data: {
            message: "next"
          }
        })
      }
    };
    e.prototype.lazyLoad = function() {
      var e = this,
        i, s, n, o;
      if (e.options.centerMode === true) {
        n = e.options.slidesToShow + e.currentSlide - 1;
        o = n + e.options.slidesToShow + 2
      } else {
        n = e.options.infinite ? e.options.slidesToShow + e.currentSlide : e.currentSlide;
        o = n + e.options.slidesToShow
      }
      i = e.$slider.find(".slick-slide").slice(n, o);
      t("img[data-lazy]", i).not("[src]").each(function() {
        t(this).css({
          opacity: 0
        }).attr("src", t(this).attr("data-lazy")).removeClass("slick-loading").on("load", function() {
          t(this).animate({
            opacity: 1
          }, 200)
        })
      });
      if (e.currentSlide >= e.slideCount - e.options.slidesToShow) {
        s = e.$slider.find(".slick-cloned").slice(0, e.options.slidesToShow);
        t("img[data-lazy]", s).not("[src]").each(function() {
          t(this).css({
            opacity: 0
          }).attr("src", t(this).attr("data-lazy")).removeClass("slick-loading").on("load", function() {
            t(this).animate({
              opacity: 1
            }, 200)
          })
        })
      } else if (e.currentSlide === 0) {
        s = e.$slider.find(".slick-cloned").slice(e.options.slidesToShow * -1);
        t("img[data-lazy]", s).not("[src]").each(function() {
          t(this).css({
            opacity: 0
          }).attr("src", t(this).attr("data-lazy")).removeClass("slick-loading").on("load", function() {
            t(this).animate({
              opacity: 1
            }, 200)
          })
        })
      }
    };
    e.prototype.loadSlider = function() {
      var t = this;
      t.setPosition();
      t.$slideTrack.css({
        opacity: 1
      });
      t.$slider.removeClass("slick-loading");
      t.initUI();
      if (t.options.lazyLoad === "progressive") {
        t.progressiveLazyLoad()
      }
    };
    e.prototype.postSlide = function(t) {
      var e = this;
      if (e.options.onAfterChange !== null) {
        e.options.onAfterChange.call(this, e, t)
      }
      e.animating = false;
      e.setPosition();
      e.swipeLeft = null;
      if (e.options.autoplay === true && e.paused === false) {
        e.autoPlay()
      }
    };
    e.prototype.progressiveLazyLoad = function() {
      var e = this,
        i, s;
      i = t("img[data-lazy]").not("[src]").length;
      if (i > 0) {
        s = t(t("img[data-lazy]", e.$slider).not("[src]").get(0));
        s.attr("src", s.attr("data-lazy")).removeClass("slick-loading").on("load", function() {
          e.progressiveLazyLoad()
        })
      }
    };
    e.prototype.refresh = function() {
      var e = this;
      e.destroy();
      t.extend(e, e.initials);
      e.init()
    };
    e.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
      t.slideCount = t.$slides.length;
      if (t.currentSlide >= t.slideCount && t.currentSlide !== 0) {
        t.currentSlide = t.currentSlide - t.options.slidesToScroll
      }
      t.setProps();
      t.setupInfinite();
      t.buildArrows();
      t.updateArrows();
      t.initArrowEvents();
      t.buildDots();
      t.updateDots();
      t.initDotEvents();
      t.setSlideClasses(0);
      t.setPosition();
      if (t.options.onReInit !== null) {
        t.options.onReInit.call(this, t)
      }
    };
    e.prototype.removeSlide = function(t, e) {
      var i = this;
      if (typeof t === "boolean") {
        e = t;
        t = e === true ? 0 : i.slideCount - 1
      } else {
        t = e === true ? --t : t
      }
      if (i.slideCount < 1 || t < 0 || t > i.slideCount - 1) {
        return false
      }
      i.unload();
      i.$slideTrack.children(this.options.slide).eq(t).remove();
      i.$slides = i.$slideTrack.children(this.options.slide);
      i.$slideTrack.children(this.options.slide).remove();
      i.$slideTrack.append(i.$slides);
      i.$slidesCache = i.$slides;
      i.reinit()
    };
    e.prototype.setCSS = function(t) {
      var e = this,
        i = {},
        s, n;
      s = e.positionProp == "left" ? t + "px" : "0px";
      n = e.positionProp == "top" ? t + "px" : "0px";
      i[e.positionProp] = t;
      if (e.transformsEnabled === false) {
        e.$slideTrack.css(i)
      } else {
        i = {};
        if (e.cssTransitions === false) {
          i[e.animType] = "translate(" + s + ", " + n + ")";
          e.$slideTrack.css(i)
        } else {
          i[e.animType] = "translate3d(" + s + ", " + n + ", 0px)";
          e.$slideTrack.css(i)
        }
      }
    };
    e.prototype.setDimensions = function() {
      var t = this;
      if (t.options.centerMode === true) {
        t.$slideTrack.children(".slick-slide").width(t.slideWidth)
      } else {
        t.$slideTrack.children(".slick-slide").width(t.slideWidth)
      }
      if (t.options.vertical === false) {
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length));
        if (t.options.centerMode === true) {
          t.$list.css({
            padding: "0px " + t.options.centerPadding
          })
        }
      } else {
        t.$list.height(t.$slides.first().outerHeight() * t.options.slidesToShow);
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight() * t.$slideTrack.children(".slick-slide").length));
        if (t.options.centerMode === true) {
          t.$list.css({
            padding: t.options.centerPadding + " 0px"
          })
        }
      }
    };
    e.prototype.setFade = function() {
      var e = this,
        i;
      e.$slides.each(function(s, n) {
        i = e.slideWidth * s * -1;
        t(n).css({
          position: "relative",
          left: i,
          top: 0,
          zIndex: 800,
          opacity: 0
        })
      });
      e.$slides.eq(e.currentSlide).css({
        zIndex: 900,
        opacity: 1
      })
    };
    e.prototype.setPosition = function() {
      var t = this;
      t.setValues();
      t.setDimensions();
      if (t.options.fade === false) {
        t.setCSS(t.getLeft(t.currentSlide))
      } else {
        t.setFade()
      }
    };
    e.prototype.setProps = function() {
      var t = this;
      t.positionProp = t.options.vertical === true ? "top" : "left";
      if (t.positionProp === "top") {
        t.$slider.addClass("slick-vertical")
      } else {
        t.$slider.removeClass("slick-vertical")
      }
      if (document.body.style.WebkitTransition !== undefined || document.body.style.MozTransition !== undefined || document.body.style.msTransition !== undefined) {
        if (t.options.useCSS === true) {
          t.cssTransitions = true
        }
      }
      if (document.body.style.MozTransform !== undefined) {
        t.animType = "MozTransform";
        t.transformType = "-moz-transform";
        t.transitionType = "MozTransition"
      }
      if (document.body.style.webkitTransform !== undefined) {
        t.animType = "webkitTransform";
        t.transformType = "-webkit-transform";
        t.transitionType = "webkitTransition"
      }
      if (document.body.style.msTransform !== undefined) {
        t.animType = "transform";
        t.transformType = "transform";
        t.transitionType = "transition"
      }
      t.transformsEnabled = t.animType !== null
    };
    e.prototype.setValues = function() {
      var t = this;
      t.listWidth = t.$list.width();
      t.listHeight = t.$list.height();
      if (t.options.vertical === false) {
        t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)
      } else {
        t.slideWidth = Math.ceil(t.listWidth)
      }
    };
    e.prototype.setSlideClasses = function(t) {
      var e = this,
        i, s, n;
      e.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
      s = e.$slider.find(".slick-slide");
      if (e.options.centerMode === true) {
        i = Math.floor(e.options.slidesToShow / 2);
        if (t >= i && t <= e.slideCount - 1 - i) {
          e.$slides.slice(t - i, t + i + 1).addClass("slick-active")
        } else {
          n = e.options.slidesToShow + t;
          s.slice(n - i + 1, n + i + 2).addClass("slick-active")
        }
        if (t === 0) {
          s.eq(s.length - 1 - e.options.slidesToShow).addClass("slick-center")
        } else if (t === e.slideCount - 1) {
          s.eq(e.options.slidesToShow).addClass("slick-center")
        }
        e.$slides.eq(t).addClass("slick-center")
      } else {
        if (t > 0 && t < e.slideCount - e.options.slidesToShow) {
          e.$slides.slice(t, t + e.options.slidesToShow).addClass("slick-active")
        } else {
          n = e.options.infinite === true ? e.options.slidesToShow + t : t;
          s.slice(n, n + e.options.slidesToShow).addClass("slick-active")
        }
      }
      if (e.options.lazyLoad === "ondemand") {
        e.lazyLoad()
      }
    };
    e.prototype.setupInfinite = function() {
      var e = this,
        i, s, n;
      if (e.options.fade === true || e.options.vertical === true) {
        e.options.centerMode = false
      }
      if (e.options.infinite === true && e.options.fade === false) {
        s = null;
        if (e.slideCount > e.options.slidesToShow) {
          if (e.options.centerMode === true) {
            n = e.options.slidesToShow + 1
          } else {
            n = e.options.slidesToShow
          }
          for (i = e.slideCount; i > e.slideCount - n; i -= 1) {
            s = i - 1;
            t(e.$slides[s]).clone().attr("id", "").prependTo(e.$slideTrack).addClass("slick-cloned")
          }
          for (i = 0; i < n; i += 1) {
            s = i;
            t(e.$slides[s]).clone().attr("id", "").appendTo(e.$slideTrack).addClass("slick-cloned")
          }
          e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
            t(this).attr("id", "")
          })
        }
      }
    };
    e.prototype.slideHandler = function(t) {
      var e, i, s, n, o = null,
        r = this;
      if (r.animating === true) {
        return false
      }
      e = t;
      o = r.getLeft(e);
      s = r.getLeft(r.currentSlide);
      n = r.slideCount % r.options.slidesToScroll !== 0 ? r.options.slidesToScroll : 0;
      r.currentLeft = r.swipeLeft === null ? s : r.swipeLeft;
      if (r.options.infinite === false && (t < 0 || t > r.slideCount - r.options.slidesToShow + n)) {
        if (r.options.fade === false) {
          e = r.currentSlide;
          r.animateSlide(s, function() {
            r.postSlide(e)
          })
        }
        return false
      }
      if (r.options.autoplay === true) {
        clearInterval(r.autoPlayTimer)
      }
      if (e < 0) {
        if (r.slideCount % r.options.slidesToScroll !== 0) {
          i = r.slideCount - r.slideCount % r.options.slidesToScroll
        } else {
          i = r.slideCount - r.options.slidesToScroll
        }
      } else if (e > r.slideCount - 1) {
        i = 0
      } else {
        i = e
      }
      r.animating = true;
      if (r.options.onBeforeChange !== null && t !== r.currentSlide) {
        r.options.onBeforeChange.call(this, r, r.currentSlide, i)
      }
      r.currentSlide = i;
      r.setSlideClasses(r.currentSlide);
      r.updateDots();
      r.updateArrows();
      if (r.options.fade === true) {
        r.fadeSlide(i, function() {
          r.postSlide(i)
        });
        return false
      }
      r.animateSlide(o, function() {
        r.postSlide(i)
      })
    };
    e.prototype.startLoad = function() {
      var t = this;
      if (t.options.arrows === true && t.slideCount > t.options.slidesToShow) {
        t.$prevArrow.hide();
        t.$nextArrow.hide()
      }
      if (t.options.dots === true && t.slideCount > t.options.slidesToShow) {
        t.$dots.hide()
      }
      t.$slider.addClass("slick-loading")
    };
    e.prototype.swipeDirection = function() {
      var t, e, i, s, n = this;
      t = n.touchObject.startX - n.touchObject.curX;
      e = n.touchObject.startY - n.touchObject.curY;
      i = Math.atan2(e, t);
      s = Math.round(i * 180 / Math.PI);
      if (s < 0) {
        s = 360 - Math.abs(s)
      }
      if (s <= 45 && s >= 0) {
        return "left"
      }
      if (s <= 360 && s >= 315) {
        return "left"
      }
      if (s >= 135 && s <= 225) {
        return "right"
      }
      return "vertical"
    };
    e.prototype.swipeEnd = function(e) {
      var i = this;
      i.$list.removeClass("dragging");
      if (i.touchObject.curX === undefined) {
        return false
      }
      if (i.touchObject.swipeLength >= i.touchObject.minSwipe) {
        t(e.target).on("click.slick", function(e) {
          e.stopImmediatePropagation();
          e.stopPropagation();
          e.preventDefault();
          t(e.target).off("click.slick")
        });
        switch (i.swipeDirection()) {
          case "left":
            i.slideHandler(i.currentSlide + i.options.slidesToScroll);
            i.touchObject = {};
            break;
          case "right":
            i.slideHandler(i.currentSlide - i.options.slidesToScroll);
            i.touchObject = {};
            break
        }
      } else {
        if (i.touchObject.startX !== i.touchObject.curX) {
          i.slideHandler(i.currentSlide);
          i.touchObject = {}
        }
      }
    };
    e.prototype.swipeHandler = function(t) {
      var e = this;
      if ("ontouchend" in document && e.options.swipe === false) {
        return false
      } else if (e.options.draggable === false && !t.originalEvent.touches) {
        return true
      }
      e.touchObject.fingerCount = t.originalEvent && t.originalEvent.touches !== undefined ? t.originalEvent.touches.length : 1;
      e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold;
      switch (t.data.action) {
        case "start":
          e.swipeStart(t);
          break;
        case "move":
          e.swipeMove(t);
          break;
        case "end":
          e.swipeEnd(t);
          break
      }
    };
    e.prototype.swipeMove = function(t) {
      var e = this,
        i, s, n, o;
      o = t.originalEvent !== undefined ? t.originalEvent.touches : null;
      i = e.getLeft(e.currentSlide);
      if (!e.$list.hasClass("dragging") || o && o.length !== 1) {
        return false
      }
      e.touchObject.curX = o !== undefined ? o[0].pageX : t.clientX;
      e.touchObject.curY = o !== undefined ? o[0].pageY : t.clientY;
      e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curX - e.touchObject.startX, 2)));
      s = e.swipeDirection();
      if (s === "vertical") {
        return
      }
      if (t.originalEvent !== undefined && e.touchObject.swipeLength > 4) {
        t.preventDefault()
      }
      n = e.touchObject.curX > e.touchObject.startX ? 1 : -1;
      if (e.options.vertical === false) {
        e.swipeLeft = i + e.touchObject.swipeLength * n
      } else {
        e.swipeLeft = i + e.touchObject.swipeLength * (e.$list.height() / e.listWidth) * n
      }
      if (e.options.fade === true || e.options.touchMove === false) {
        return false
      }
      if (e.animating === true) {
        e.swipeLeft = null;
        return false
      }
      e.setCSS(e.swipeLeft)
    };
    e.prototype.swipeStart = function(t) {
      var e = this,
        i;
      if (e.touchObject.fingerCount !== 1 || e.slideCount <= e.options.slidesToShow) {
        e.touchObject = {};
        return false
      }
      if (t.originalEvent !== undefined && t.originalEvent.touches !== undefined) {
        i = t.originalEvent.touches[0]
      }
      e.touchObject.startX = e.touchObject.curX = i !== undefined ? i.pageX : t.clientX;
      e.touchObject.startY = e.touchObject.curY = i !== undefined ? i.pageY : t.clientY;
      e.$list.addClass("dragging")
    };
    e.prototype.unfilterSlides = function() {
      var t = this;
      if (t.$slidesCache !== null) {
        t.unload();
        t.$slideTrack.children(this.options.slide).remove();
        t.$slidesCache.appendTo(t.$slideTrack);
        t.reinit()
      }
    };
    e.prototype.unload = function() {
      var e = this;
      t(".slick-cloned", e.$slider).remove();
      if (e.$dots) {
        e.$dots.remove()
      }
      if (e.$prevArrow) {
        e.$prevArrow.remove();
        e.$nextArrow.remove()
      }
      e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")
    };
    e.prototype.updateArrows = function() {
      var t = this;
      if (t.options.arrows === true && t.options.infinite !== true && t.slideCount > t.options.slidesToShow) {
        t.$prevArrow.removeClass("slick-disabled");
        t.$nextArrow.removeClass("slick-disabled");
        if (t.currentSlide === 0) {
          t.$prevArrow.addClass("slick-disabled");
          t.$nextArrow.removeClass("slick-disabled")
        } else if (t.currentSlide >= t.slideCount - t.options.slidesToShow) {
          t.$nextArrow.addClass("slick-disabled");
          t.$prevArrow.removeClass("slick-disabled")
        }
      }
    };
    e.prototype.updateDots = function() {
      var t = this;
      if (t.$dots !== null) {
        t.$dots.find("li").removeClass("slick-active");
        t.$dots.find("li").eq(t.currentSlide / t.options.slidesToScroll).addClass("slick-active")
      }
    };
    t.fn.slick = function(t) {
      var i = this;
      return i.each(function(i, s) {
        s.slick = new e(s, t)
      })
    };
    t.fn.slickAdd = function(t, e, i) {
      var s = this;
      return s.each(function(s, n) {
        n.slick.addSlide(t, e, i)
      })
    };
    t.fn.slickCurrentSlide = function() {
      var t = this;
      return t.get(0).slick.getCurrent()
    };
    t.fn.slickFilter = function(t) {
      var e = this;
      return e.each(function(e, i) {
        i.slick.filterSlides(t)
      })
    };
    t.fn.slickGoTo = function(t) {
      var e = this;
      return e.each(function(e, i) {
        i.slick.slideHandler(t)
      })
    };
    t.fn.slickNext = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.changeSlide({
          data: {
            message: "next"
          }
        })
      })
    };
    t.fn.slickPause = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.autoPlayClear();
        e.slick.paused = true
      })
    };
    t.fn.slickPlay = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.paused = false;
        e.slick.autoPlay()
      })
    };
    t.fn.slickPrev = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.changeSlide({
          data: {
            message: "previous"
          }
        })
      })
    };
    t.fn.slickRemove = function(t, e) {
      var i = this;
      return i.each(function(i, s) {
        s.slick.removeSlide(t, e)
      })
    };
    t.fn.slickSetOption = function(t, e, i) {
      var s = this;
      return s.each(function(s, n) {
        n.slick.options[t] = e;
        if (i === true) {
          n.slick.unload();
          n.slick.reinit()
        }
      })
    };
    t.fn.slickUnfilter = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.unfilterSlides()
      })
    };
    t.fn.unslick = function() {
      var t = this;
      return t.each(function(t, e) {
        e.slick.destroy()
      })
    }
  })
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body;
    (0, n.default)(".x-btn-navbar, .x-btn-navbar-search, .x-btn-widgetbar").click(function(t) {
      t.preventDefault()
    });
    (0, n.default)('iframe[src*="youtube.com"]').each(function() {
      var t = (0, n.default)(this).attr("src");
      if ((0, n.default)(this).attr("src").indexOf("?") > 0) {
        (0, n.default)(this).attr({
          src: t + "&wmode=transparent",
          wmode: "Opaque"
        })
      } else {
        (0, n.default)(this).attr({
          src: t + "?wmode=transparent",
          wmode: "Opaque"
        })
      }
    });
    e.on("click", ".x-iso-container .flex-direction-nav a", function() {
      setTimeout(function() {
        (0, n.default)(window).xsmartresize()
      }, 750)
    });
    (0, n.default)("body.x-masonry-active").on("keyup", function(t) {
      if (t.which >= 37 && t.which <= 40) {
        setTimeout(function() {
          (0, n.default)(window).xsmartresize()
        }, 750)
      }
    });
    (0, n.default)("a, button, input, [tabindex]").on("focus", function() {
      (0, n.default)(this).css({
        outline: "none"
      })
    });
    (0, n.default)("a, button, input, [tabindex]").on("keyup", function(t) {
      if (t.keyCode === 9) {
        (0, n.default)(this).css({
          outline: ""
        })
      }
    });
    (0, n.default)(function(t) {
      function e(e) {
        var i = e;
        if (window.csGlobal && window.csGlobal.csHooks) {
          i = window.csGlobal.csHooks.apply("hash_scrolling_offset", e)
        }
        t("html, body").animate({
          scrollTop: i
        }, 850, "xEaseInOutExpo")
      }
      t(".x-slider-container.above .x-slider-scroll-bottom").on("touchstart click", function(i) {
        i.preventDefault();
        e(t(".x-slider-container.above").outerHeight())
      });
      t(".x-slider-container.below .x-slider-scroll-bottom").on("touchstart click", function(i) {
        i.preventDefault();
        e(t(".x-masthead, .masthead").outerHeight().first() + t(".x-slider-container.above").outerHeight() + t(".x-slider-container.below").outerHeight())
      })
    })
  };
  var s = i(0);
  var n = o(s);

  function o(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  n.default.fn.scrollBottom = function() {
    return (0, n.default)(document).height() - this.scrollTop() - this.height()
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body;
    if (!e.hasClass("x-icon")) {
      return
    }
    var i = (0, r.default)(".x-sidebar");
    if (!i.length) {
      return
    }
    var s = void 0;
    var o = i.find(".max.width");
    if (e.hasClass("x-full-width-active") || !window.csGlobal.PerfectScrollbar) {
      o.addClass("x-container");
      return
    }
    n.default.register("screen and (min-width: 1200px)", function() {
      o.removeClass("x-container");
      s = new window.csGlobal.PerfectScrollbar(i[0])
    });
    n.default.register("screen and (max-width: 1199px)", function() {
      o.addClass("x-container");
      if (s) {
        s.destroy();
        s = null
      }
    })
  };
  var s = i(9);
  var n = a(s);
  var o = i(0);
  var r = a(o);

  function a(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  var s = i(10);
  t.exports = new s
}, function(t, e, i) {
  var s = i(11);
  var n = i(2);
  var o = n.each;
  var r = n.isFunction;
  var a = n.isArray;

  function l() {
    if (!window.matchMedia) {
      throw new Error("matchMedia not present, legacy browsers require a polyfill")
    }
    this.queries = {};
    this.browserIsIncapable = !window.matchMedia("only all").matches
  }
  l.prototype = {
    constructor: l,
    register: function(t, e, i) {
      var n = this.queries,
        l = i && this.browserIsIncapable;
      if (!n[t]) {
        n[t] = new s(t, l)
      }
      if (r(e)) {
        e = {
          match: e
        }
      }
      if (!a(e)) {
        e = [e]
      }
      o(e, function(e) {
        if (r(e)) {
          e = {
            match: e
          }
        }
        n[t].addHandler(e)
      });
      return this
    },
    unregister: function(t, e) {
      var i = this.queries[t];
      if (i) {
        if (e) {
          i.removeHandler(e)
        } else {
          i.clear();
          delete this.queries[t]
        }
      }
      return this
    }
  };
  t.exports = l
}, function(t, e, i) {
  var s = i(12);
  var n = i(2).each;

  function o(t, e) {
    this.query = t;
    this.isUnconditional = e;
    this.handlers = [];
    this.mql = window.matchMedia(t);
    var i = this;
    this.listener = function(t) {
      i.mql = t.currentTarget || t;
      i.assess()
    };
    this.mql.addListener(this.listener)
  }
  o.prototype = {
    constuctor: o,
    addHandler: function(t) {
      var e = new s(t);
      this.handlers.push(e);
      this.matches() && e.on()
    },
    removeHandler: function(t) {
      var e = this.handlers;
      n(e, function(i, s) {
        if (i.equals(t)) {
          i.destroy();
          return !e.splice(s, 1)
        }
      })
    },
    matches: function() {
      return this.mql.matches || this.isUnconditional
    },
    clear: function() {
      n(this.handlers, function(t) {
        t.destroy()
      });
      this.mql.removeListener(this.listener);
      this.handlers.length = 0
    },
    assess: function() {
      var t = this.matches() ? "on" : "off";
      n(this.handlers, function(e) {
        e[t]()
      })
    }
  };
  t.exports = o
}, function(t, e) {
  function i(t) {
    this.options = t;
    !t.deferSetup && this.setup()
  }
  i.prototype = {
    constructor: i,
    setup: function() {
      if (this.options.setup) {
        this.options.setup()
      }
      this.initialised = true
    },
    on: function() {
      !this.initialised && this.setup();
      this.options.match && this.options.match()
    },
    off: function() {
      this.options.unmatch && this.options.unmatch()
    },
    destroy: function() {
      this.options.destroy ? this.options.destroy() : this.off()
    },
    equals: function(t) {
      return this.options === t || this.options.match === t
    }
  };
  t.exports = i
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$document;
    (0, o.everinit)(".x-mini-cart", function(t) {
      i((0, n.default)(t))
    });
    e.on("added_to_cart wc_fragments_loaded wc_fragments_refreshed", "body", function() {
      i((0, n.default)(".x-mini-cart"))
    });

    function i(t) {
      var e = '<span class="x-anchor-content" style="-webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center;"><span class="x-anchor-text"><span class="x-anchor-text-primary"></span></span></span>';
      t.find(".button").removeClass("button").addClass("x-anchor").wrapInner(e)
    }
  };
  var s = i(0);
  var n = r(s);
  var o = i(1);

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body;
    var i = "data-x-search";
    var s = "[" + i + "]";
    var o = "[" + i + "] button";
    var r = "[" + i + "-submit]";
    var a = "[" + i + "-clear]";
    var l = "[" + i + "] input";
    var c = o + ", " + l;
    e.on("focusin focusout", c, function(t) {
      var e = (0, n.default)(this).closest(s);
      if (t.type === "focusout" && e.data("data-x-focus-search-down")) {
        return
      }
      e.data("data-x-focus-search-down", false);
      e.toggleClass("x-search-focused", t.type === "focusin")
    });
    e.on("mousedown", s, function(t) {
      if (!t.target.hasAttribute(i)) {
        return
      }
      var e = (0, n.default)(this);
      e.addClass("x-search-focused");
      e.data("data-x-focus-search-down", true);
      setTimeout(function() {
        e.find("input").focus()
      }, 0)
    });
    e.on("input", l, function() {
      var t = (0, n.default)(this);
      var e = t.closest(s);
      if (t.val() !== "") {
        e.addClass("x-search-has-content")
      } else {
        e.removeClass("x-search-has-content")
      }
    });
    e.on("click", r, function() {
      var t = (0, n.default)(this).closest(s);
      t.submit()
    });
    e.on("click", a, function() {
      var t = (0, n.default)(this).closest(s);
      t.find("input").val("").focus();
      t.removeClass("x-search-has-content")
    })
  };
  var s = i(0);
  var n = o(s);

  function o(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body;
    var i = (0, n.default)(".x-cart-notification");
    if (i.length > 0) {
      (0, n.default)(".add_to_cart_button.product_type_simple").on("click", function() {
        i.addClass("bring-forward appear loading")
      });
      e.on("added_to_cart", function() {
        setTimeout(function() {
          i.removeClass("loading").addClass("added");
          setTimeout(function() {
            i.removeClass("appear");
            setTimeout(function() {
              i.removeClass("added bring-forward")
            }, 650)
          }, 1e3)
        }, 650)
      })
    }
    var s = (0, n.default)("p.stars");
    var o = s.find("a");

    function r() {
      if (s.hasClass("selected")) {
        s.find("a.active").nextAll("a").removeClass("x-active")
      } else {
        o.removeClass("x-active")
      }
    }

    function a() {
      (0, n.default)(this).nextAll("a").removeClass("x-active")
    }

    function l() {
      r();
      (0, n.default)(this).addClass("x-active").prevAll("a").addClass("x-active")
    }
    s.on("mouseleave", r);
    o.on("click", a);
    o.on("mouseover", l)
  };
  var s = i(0);
  var n = o(s);

  function o(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body,
      i = t.$window,
      s = t.$navbar,
      r = t.$document;
    if (e.attr("class").includes("x-navbar-fixed")) {
      /*
      o.csHooks.action("scrollspy_activate", function(t) {
        var e = (0, n.default)(t);
        if (e.is(".x-nav-wrap.desktop .x-nav li > a")) {
          e.parents("li").addClass("current-menu-item");
          if (e.parent(".dropdown-menu").length) {
            e.closest("li.dropdown").addClass("current-menu-item")
          }
        }
      });
      */
      /*
      o.csHooks.action("scrollspy_deactivate", function(t) {
        var e = (0, n.default)(t);
        if (e.is(".x-nav-wrap.desktop .x-nav li > a")) {
          e.parents(".current-menu-item").removeClass("current-menu-item")
        }
      });
      */
      /*
      o.csHooks.filter("scrollspy_offset", function(t) {
        var e = (0, n.default)(".x-navbar-fixed-top-active .x-navbar").outerHeight();
        return e ? t + e : t
      })
      */
    }
    if (e.hasClass("x-navbar-fixed-top-active") && s.length > 0) {
      var a = "";
      if (e.hasClass("x-boxed-layout-active")) {
        a = " x-container max width"
      }
      i.on("scroll", function() {
        if (i.scrollTop() >= l()) {
          s.addClass("x-navbar-fixed-top" + a)
        } else {
          s.removeClass("x-navbar-fixed-top" + a)
        }
      })
    }

    function l() {
      return;
      //return (0, n.default)(".x-navbar-wrap").offset().top - (0, o.adminBarOffset)()
    }
    var c = (0, n.default)(".x-btn-navbar-search");
    var d = (0, n.default)(".x-searchform-overlay");
    if (!c.length || !d.length) {
      return
    }
    var u = d.find(".search-query");

    function f() {
      d.toggleClass("in");
      setTimeout(function() {
        u.val("")
      }, 350)
    }
    c.on("touchstart click", function(t) {
      t.preventDefault();
      d.toggleClass("in");
      u.focus()
    });
    d.on("touchstart click", function(t) {
      if (!(0, n.default)(t.target).hasClass("search-query")) {
        f()
      }
    });
    r.keydown(function(t) {
      if (t.which === 27) {
        if (d.hasClass("in")) {
          f()
        }
      }
    })
  };
  var s = i(0);
  var n = r(s);
  var o = i(1);

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.default = function(t) {
    var e = t.$body;
    var i = (0, n.default)(".desktop .x-nav");
    var s = "li.menu-item-has-children";
    var o = i.find(s);
    var a = void 0;
    var l = false;

    function c(t) {
      t.addClass("x-active").siblings(s).removeClass("x-active");
      if (window.csModernizr && window.csModernizr.touchevents) {
        t.siblings(s).data("x-action", 0);
        t.find(".x-active").removeClass("x-active").data("x-action", 0)
      }
    }

    function d(t) {
      t.find(".x-active").removeClass("x-active")
    }

    function u(t) {
      clearTimeout(a);
      var e = (0, n.default)(t.target).closest("li");
      if (e.hasClass("menu-item-has-children")) {
        c(e)
      }
    }

    function f(t) {
      clearTimeout(a);
      var e = n.default.contains(document.getElementsByClassName("x-nav-wrap desktop")[0], t.relatedTarget || t.toElement);
      var i = e ? 500 : 1e3;
      var s = (0, n.default)(this).closest("ul");
      a = setTimeout(function() {
        return d(s)
      }, i)
    }

    function h(t) {
      var e = (0, n.default)(t.target).closest("li");
      e.data("x-action", e.data("x-action") + 1);
      if (e.hasClass("menu-item-has-children") && e.data("x-action") === 1) {
        t.preventDefault();
        t.stopPropagation();
        c(e)
      }
    }

    function p() {
      o.data("x-action", 0);
      d(i)
    }
    if (window.csModernizr && window.csModernizr.touchevents) {
      o.data("x-action", 0);
      i.on("touchstart click", s, h);
      i.on("touchstart click", v);
      (0, n.default)("body").on("touchstart click", p)
    } else {
      i.on("focusin", s, u);
      i.on("focusout", s, f)
    }
    i.one("touchstart", function() {
      l = true
    });
    o.each(function() {
      var t = this;
      (0, r.default)(this, function(t) {
        if (l) {
          return
        }
        i.off("touchstart click", s, h);
        i.off("touchstart click", v);
        u(t)
      }, function(e) {
        if (l) {
          return
        }
        f.bind(t)(e)
      })
    });

    function v(t) {
      t.stopPropagation()
    }
    var m = (0, n.default)(".mobile .x-nav");
    m.find("li.menu-item-has-children > a").each(function(t) {
      (0, n.default)(this).append('<div class="x-sub-toggle collapsed" data-x-toggle="collapse-b" data-x-toggleable="x-nav-wrap-mobile-sm-' + t + '" aria-expanded="false" aria-haspopup="true" aria-controls="x-nav-wrap-mobile-sm-' + t + '">' + '<span><i class="x-icon-angle-double-down" data-x-icon="&#xf103;"></i></span>' + "</div>")
    });
    m.find(".sub-menu").each(function(t) {
      (0, n.default)(this).attr("id", "x-nav-wrap-mobile-sm-" + t).attr("class", "x-collapsed").attr("data-x-toggleable", "x-nav-wrap-mobile-sm-" + t).attr("data-x-toggle-collapse", "1").attr("aria-hidden", "true")
    });
    e.on("click", ".x-sub-toggle", function(t) {
      t.preventDefault();
      (0, n.default)(this).toggleClass("x-active").closest("li").toggleClass("x-active")
    })
  };
  var s = i(0);
  var n = a(s);
  var o = i(18);
  var r = a(o);

  function a(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(19);
  t.exports = function(t, e, i) {
    var n, o, r, a;
    var l = {},
      c = 0,
      d = 0;
    var u = {
      sensitivity: 7,
      interval: 100,
      timeout: 0
    };

    function f(t, e) {
      if (d) d = clearTimeout(d);
      c = 0;
      return i.call(t, e)
    }

    function h(t) {
      n = t.clientX;
      o = t.clientY
    }

    function p(t, i) {
      if (d) d = clearTimeout(d);
      if (Math.abs(r - n) + Math.abs(a - o) < u.sensitivity) {
        c = 1;
        return e.call(t, i)
      } else {
        r = n;
        a = o;
        d = setTimeout(function() {
          p(t, i)
        }, u.interval)
      }
    }
    l.options = function(t) {
      u = s({}, u, t);
      return l
    };

    function v(e) {
      if (d) d = clearTimeout(d);
      t.removeEventListener("mousemove", h, false);
      if (c !== 1) {
        r = e.clientX;
        a = e.clientY;
        t.addEventListener("mousemove", h, false);
        d = setTimeout(function() {
          p(t, e)
        }, u.interval)
      }
      return this
    }

    function m(e) {
      if (d) d = clearTimeout(d);
      t.removeEventListener("mousemove", h, false);
      if (c === 1) {
        d = setTimeout(function() {
          f(t, e)
        }, u.timeout)
      }
      return this
    }
    l.remove = function() {
      if (!t) return;
      t.removeEventListener("mouseover", v, false);
      t.removeEventListener("mouseout", m, false)
    };
    if (t) {
      t.addEventListener("mouseover", v, false);
      t.addEventListener("mouseout", m, false)
    }
    return l
  }
}, function(t, e) {
  t.exports = s;
  var i = Object.prototype.hasOwnProperty;

  function s() {
    var t = {};
    for (var e = 0; e < arguments.length; e++) {
      var s = arguments[e];
      for (var n in s) {
        if (i.call(s, n)) {
          t[n] = s[n]
        }
      }
    }
    return t
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: true
  });
  e.stickyBarsSetup = p;
  e.stickyBarsFindTopOffset = v;
  var s = i(0);
  var n = a(s);
  var o = i(3);
  var r = i(1);

  function a(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  var l = false;
  var c = [];
  var d = [];
  var u = [];
  var f = void 0;
  var h = false;

  function p(t) {
    var e = t.$window,
      i = t.$body;
    (0, r.everinit)("[data-x-bar]", function(t) {
      var e = (0, n.default)(t);
      var i = e.data("x-bar");
      var s = i.id,
        o = i.region;
      if (!e.hasClass("x-bar-is-sticky") || "top" !== o) {
        return
      }
      c.push({
        id: s,
        el: t,
        props: i,
        $el: e,
        $space: (0, n.default)("." + s + ".x-bar-space"),
        $content: e.find(".x-bar-content"),
        visible: "none" !== e.css("display")
      })
    }, {
      init: function t() {
        f = i.hasClass("x-boxed-layout-active") ? "x-bar-fixed x-container max width" : "x-bar-fixed";
        e.on("resize", function() {
          return a()
        });
        e.on("scroll", function() {
          return p()
        })
      },
      debounced: function t() {
        if (!s(true)) {
          a()
        }
      },
      debounceDelay: 25
    });

    function s(t) {
      var e = c.map(function(t) {
        return t.id
      });
      var i = false;
      var s = c.filter(function(t) {
        var s = t.el,
          n = t.id;
        var o = e.indexOf(n);
        if (o !== e.lastIndexOf(n)) {
          i = true;
          e.splice(o, 1);
          return false
        }
        if (!window.document.body.contains(s)) {
          i = true;
          return false
        }
        return true
      });
      if (i || t) {
        s = s.sort(function(t, e) {
          return t.$el.index() - e.$el.index()
        })
      }
      if (i) {
        c = s;
        d = c;
        setTimeout(a, 0);
        return true
      }
      return false
    }

    function a() {
      if (s()) {
        return
      }
      d = c.filter(function(t) {
        var e = t.$el;
        return "none" !== e.css("display")
      });
      var t = (0, r.adminBarOffset)();
      var e = 0;
      var i = 0;
      var o = 0;
      x();
      d.forEach(function(t) {
        var e = parseFloat(t.props.shrink);
        t.height = t.$el.height();
        t.shrinkHeight = isNaN(e) ? t.height : t.height * e;
        t.triggerOffset = parseInt(t.props.triggerOffset);
        if (isNaN(t.triggerOffset)) {
          t.triggerOffset = 0
        }
      });
      u = d.map(function(s) {
        var a = s.$el,
          c = s.props,
          d = s.height,
          u = s.shrinkHeight,
          f = s.triggerOffset;
        var h = 0 === o++;
        var p = c.zStack && !h;
        var v = parseFloat(a.css("margin-top"));
        var m = c.keepMargin ? v : 0;
        a.css({
          position: "relative"
        });
        var y = a.offset().top;
        a.css({
          position: ""
        });
        var g = y - i;
        if (c.triggerSelector) {
          try {
            var w = (0, n.default)(c.triggerSelector);
            if (0 <= w.length) {
              g = w.offset().top + f - u
            }
          } catch (t) {}
        } else {
          if (c.hideInitially) {
            g -= d;
            g += f
          } else if (f > 0) {
            g += f + d
          }
        }
        if (p) {
          g += u
        } else {
          g -= m
        }
        var x = (0, r.adminBarOffset)() + e;
        k(g, "red");
        var b = t + i;
        if (!c.keepMargin) {
          b += v;
          x -= v
        }
        g = Math.max(g - e, b);
        k(g, "green");
        t = g;
        if (p) {
          x -= u + m;
          x = Math.max(x, (0, r.adminBarOffset)())
        } else {
          e += u + m
        }
        var C = c.hideInitially || y < g || y + d < x;
        i += d - u;
        if (l) {
          console.log("Bar: " + o, {
            shrinkDiff: i,
            heightStack: e,
            offset: g,
            top: x,
            slide: C
          })
        }
        var T = x + u;
        if (c.keepMargin) {
          T += v
        }
        var S = m ? "calc( -100% - " + m + "px)" : "-100%";
        return {
          offset: g,
          top: x,
          slide: C,
          elOffest: y,
          topOffset: T,
          translateY: S,
          firstBar: h
        }
      });
      p()
    }

    function p() {
      if (h || s()) {
        return
      }
      var t = v();
      var e = u.reduce(function(e, i, s) {
        var n = i.offset;
        return t > n ? s : e
      }, -1);
      var i = false;
      d.forEach(function(t, s) {
        var n = t.goal;
        t.goal = e >= s;
        if (n !== t.goal) {
          i = true
        }
      });
      if (i) {
        m()
      }
    }

    function v() {
      return e.scrollTop() + (0, r.adminBarOffset)()
    }

    function m() {
      if (h) {
        return
      }
      var t = y();
      if (t) {
        h = true;
        t(function() {
          h = false;
          m()
        })
      } else {
        h = false;
        setTimeout(p, 0);
        if ((0, n.default)(".x-bar-fixed.x-bar-h").length === 0) {}
      }
    }

    function y() {
      var t = -1;
      var i = d.map(function(t) {
        var e = t.goal,
          i = t.$el;
        return {
          goal: e,
          fixed: i.hasClass("x-bar-fixed")
        }
      });
      i.forEach(function(e, s) {
        var n = e.goal,
          o = e.fixed;
        var r = n === o;
        if (!r && -1 === t) {
          t = s
        }
        if (!r && s > 0 && i[s - 1].fixed && u[s].slide) {
          t = s
        }
      });
      if (-1 !== t) {
        return function(i) {
          return (d[t].goal ? g : w)(d[t], u[t], {
            st: e.scrollTop(),
            done: i
          })
        }
      }
      return false
    }

    function g(t, e, i) {
      var s = t.el,
        n = t.$el,
        r = t.$space,
        a = t.$content,
        l = t.shrinkHeight;
      var c = e.top,
        d = e.slide,
        u = e.elOffest,
        h = e.translateY,
        p = e.firstBar;
      var v = i.st,
        m = i.done;
      var y = {
        top: c
      };
      var g = d || !p && u + l < v + c;
      if (l) {
        y.height = l;
        a.css({
          height: l
        })
      }
      if (g) {
        y.transform = "translate3d( 0, " + h + ", 0)"
      }
      var w = function t() {
        return m()
      };
      n.css(y).addClass(f).removeClass("x-bar-is-initially-hidden");
      (0, o.calcFixedWidth)(s);
      r.show();
      if (g) {
        n.addClass("x-bar-is-visible").css({
          transform: ""
        }).one("csTransitionEnd", w).csEmulateTransitionEnd(300)
      } else {
        w()
      }
    }

    function w(t, e, i) {
      var s = t.$el,
        n = t.$space,
        o = t.props,
        r = t.$content,
        a = t.shrinkHeight;
      var l = e.slide,
        c = e.elOffest,
        d = e.translateY,
        u = e.firstBar;
      var h = i.st,
        p = i.done;
      var v = parseFloat(o.shrink);
      var m = l || !u && c + a < h + top;
      if (o.hideInitially) {
        s.addClass("x-bar-is-initially-hidden")
      }

      function y() {
        n.hide();
        r.css({
          height: ""
        });
        s.css({
          top: "",
          transform: "",
          height: "",
          width: ""
        }).removeClass(f).removeClass("x-bar-is-visible");
        p()
      }
      if (m) {
        s.css({
          transform: "translate3d( 0, " + d + ", 0)"
        }).one("csTransitionEnd", y).csEmulateTransitionEnd(300)
      } else if (!isNaN(v) && v < 1) {
        r.css({
          height: ""
        });
        s.css({
          height: ""
        }).one("csTransitionEnd", y).csEmulateTransitionEnd(300)
      } else {
        y()
      }
    }

    function x() {
      if (!l) {
        return
      }
      i.find(".cs-sticky-bar-waypoint-debug").remove()
    }

    function k(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "red";
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "white";
      if (!l) {
        return
      }(0, n.default)('<div class="cs-sticky-bar-waypoint-debug" style="position:absolute;height:1px;width:100%;top:' + t + "px;border-top:1px solid " + e + ';z-index:999999"><span style="color: ' + s + ";background-color: " + e + ';left: 0;position: absolute;top: 0; padding: .5em 1em; transform: translate3d(0,-50%,0);";>' + t + "</span></div>").appendTo(i)
    }
  }

  function v(t) {
    return u.reduce(function(e, i) {
      var s = i.offset,
        n = i.topOffset;
      return s <= t ? n : e
    }, 0)
  }
}]);
//# sourceMappingURL=x.js.map
