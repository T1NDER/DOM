(() => {
  "use strict";
  var e = {
      249(e, n, t) {
        t.d(n, { A: () => c });
        var r = t(601),
          a = t.n(r),
          o = t(314),
          i = t.n(o)()(a());
        i.push([
          e.id,
          "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  background: #1a1a2e;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#game-area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: repeat(4, 100px);\n  gap: 5px;\n  background: #16213e;\n  padding: 10px;\n  border: 3px solid #0f3460;\n  border-radius: 8px;\n}\n\n.cell {\n  width: 100px;\n  height: 100px;\n  background: #0f3460;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.character {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n  transition: all 0.3s ease;\n}\n",
          "",
        ]);
        const c = i;
      },
      314(e) {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      601(e) {
        e.exports = function (e) {
          return e[1];
        };
      },
      72(e) {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              u = o[l] || 0,
              p = "".concat(l, " ").concat(u);
            o[l] = u + 1;
            var d = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) (n[d].references++, n[d].updater(f));
            else {
              var m = a(f, r);
              ((r.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: m, references: 1 }));
            }
            i.push(p);
          }
          return i;
        }
        function a(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = t(o[i]);
              n[c].references--;
            }
            for (var s = r(e, a), l = 0; l < o.length; l++) {
              var u = t(o[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            o = s;
          };
        };
      },
      659(e) {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      540(e) {
        e.exports = function (e) {
          var n = document.createElement("style");
          return (e.setAttributes(n, e.attributes), e.insert(n, e.options), n);
        };
      },
      56(e, n, t) {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825(e) {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                (t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {")));
                var a = void 0 !== t.layer;
                (a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}"));
                var o = t.sourceMap;
                (o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options));
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113(e) {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var o = (n[r] = { id: r, exports: {} });
    return (e[r](o, o.exports, t), o.exports);
  }
  ((t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return (t.d(n, { a: n }), n);
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (
        !e &&
        n &&
        (n.currentScript &&
          "SCRIPT" === n.currentScript.tagName.toUpperCase() &&
          (e = n.currentScript.src),
        !e)
      ) {
        var r = n.getElementsByTagName("script");
        if (r.length)
          for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/^blob:/, "")
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e));
    })(),
    (t.nc = void 0));
  var r = t(72),
    a = t.n(r),
    o = t(825),
    i = t.n(o),
    c = t(659),
    s = t.n(c),
    l = t(56),
    u = t.n(l),
    p = t(540),
    d = t.n(p),
    f = t(113),
    m = t.n(f),
    v = t(249),
    h = {};
  ((h.styleTagTransform = m()),
    (h.setAttributes = u()),
    (h.insert = s().bind(null, "head")),
    (h.domAPI = i()),
    (h.insertStyleElement = d()),
    a()(v.A, h),
    v.A && v.A.locals && v.A.locals);
  const g = t.p + "0e197610f77c9f8523b8.png";
  var y = null,
    b = -1;
  function x(e) {
    var n = document.querySelectorAll(".cell")[e];
    (y ||
      (((y = document.createElement("img")).src = g),
      (y.alt = "Персонаж"),
      (y.className = "character")),
      n.appendChild(y),
      (b = e));
  }
  function w() {
    x(
      (function (e) {
        var n;
        do {
          n = Math.floor(4 * Math.random() * 4);
        } while (n === e);
        return n;
      })(b),
    );
  }
  document.addEventListener("DOMContentLoaded", function () {
    (!(function () {
      var e = document.getElementById("grid");
      e.innerHTML = "";
      for (var n = 0; n < 16; n++) {
        var t = document.createElement("div");
        ((t.className = "cell"), (t.dataset.index = n), e.appendChild(t));
      }
      e.querySelectorAll(".cell");
    })(),
      x(Math.floor(4 * Math.random() * 4)),
      setInterval(w, 1500));
  });
})();
