//
// This file is meant to regroup your javascript code. You can either copy/past
// any code that should be executed on each page loading or write your own
// taking advantage of the Odoo framework to create new behaviors or modify
// existing ones. For example, doing this will greet any visitor with a 'Hello,
// world !' message in a popup:
//
/*
odoo.define('website.user_custom_code', function (require) {
'use strict';

var Dialog = require('web.Dialog');
var publicWidget = require('web.public.widget');

publicWidget.registry.HelloWorldPopup = publicWidget.Widget.extend({
    selector: '#wrapwrap',

    start: function () {
        Dialog.alert(this, "Hello, world!");
        return this._super.apply(this, arguments);
    },
})
});
*/

var telerWdWidgetId = "de021028-c353-42eb-b69c-6417e936bd03";
var telerWdDomain = "ekonombud.phonet.com.ua";

var TelerWdMiniJS = new (function () {
  this.all = j;
  this.select = i;
  this.addClass = f;
  this.removeClass = k;
  this.bind = g;
  this.unbind = n;
  this.text = l;
  this.draggable = p;
  this.ajax = h;
  this.cookie = b;
  this.toDom = c;
  this.toggleClass = m;
  this.cancelBubble = d;
  this.width = a;
  this.focus = o;
  this.account = e;
  function j(q) {
    q[0] == "." && (q = q.slice(1, q.length));
    return document.getElementsByClassName(q);
  }
  function i(q) {
    return document.querySelector(q);
  }
  function f(r, q) {
    if ((" " + r.className + " ").indexOf(" " + q + " ") == -1) {
      r.className += " " + q;
    }
  }
  function k(r, q) {
    r.className = r.className.replace(new RegExp("\\b" + q + "\\b"), "");
  }
  function m(r, q) {
    if ((" " + r.className + " ").indexOf(" " + q + " ") == -1) {
      r.className += " " + q;
    } else {
      r.className = r.className.replace(new RegExp("\\b" + q + "\\b"), "");
    }
  }
  function g(q, r, s) {
    if (!q) {
      console.log("CallCatcher bind error");
      return;
    }
    if (window.addEventListener) {
      q.addEventListener(r, s, false);
    } else {
      if (window.attachEvent) {
        q.attachEvent("on" + r, s);
      } else {
        q["on" + r] = s;
      }
    }
  }
  function n(q, r, s) {
    if (q.removeEventListener) {
      q.removeEventListener(r, s, false);
    } else {
      if (q.detachEvent) {
        q.detachEvent("on" + r, s);
      } else {
        q["on" + r] = null;
      }
    }
  }
  function l(q, s) {
    var r = "innerText" in q ? "innerText" : "textContent";
    if (s) {
      q[r] = s;
    } else {
      return q[r];
    }
  }
  function d(r) {
    var q = r ? r : window.event;
    if (q.stopPropagation) {
      q.stopPropagation();
    }
    if (q.cancelBubble != null) {
      q.cancelBubble = true;
    }
  }
  function h(r, v, s, u) {
    try {
      var q = new (new XMLHttpRequest().withCredentials !== undefined
        ? XMLHttpRequest
        : XDomainRequest)();
      q.open(
        s ? "POST" : "GET",
        r +
          "?timestamp=" +
          new Date().valueOf() +
          "&utcOffset=" +
          new Date().getTimezoneOffset(),
        1
      );
      u && q.setRequestHeader && q.setRequestHeader("Content-Type", u);
      q.onload = function () {
        v && v(q.responseText, q);
      };
      q.onerror = function (w) {
        console.log("CallCatcher xhr error");
        console.log(w);
      };
      q.send(s);
    } catch (t) {
      console.log("CallCatcher xhr error");
      console.log(t);
    }
  }
  function b(r, t, u) {
    if (t) {
      return s(r, t, u);
    } else {
      return q(r);
    }
    function q(w) {
      var y = w + "=";
      var v = document.cookie.split(";");
      for (var x = 0; x < v.length; x++) {
        var z = v[x];
        while (z.charAt(0) == " ") {
          z = z.substring(1, z.length);
        }
        if (z.indexOf(y) == 0) {
          return z.substring(y.length, z.length);
        }
      }
      return null;
    }
    function s(x, y, z) {
      if (z) {
        var w = new Date();
        w.setTime(w.getTime() + z * 24 * 60 * 60 * 1000);
        var v = "; expires=" + w.toGMTString();
      } else {
        var v = "";
      }
      document.cookie = x + "=" + y + v + "; path=/";
    }
  }
  function c(s) {
    var t = document.createElement("div");
    var r;
    t.innerHTML = s;
    document.body.appendChild(t);
    var q = t.getElementsByTagName("script");
    for (r = 0; r < q.length; r++) {
      (function (u) {
        setTimeout(function () {
          var v = document.createElement("script");
          v.text = q[u].text;
          v.text && document.head.appendChild(v).parentNode.removeChild(v);
        }, 100);
      })(r);
    }
    return t;
  }
  function p(r, B, y, E, F) {
    var x = null,
      u = 0,
      q = 0,
      s = 0,
      t = 0,
      w = 0,
      v = 0;
    function H(I) {
      x = this;
      s = u - x.offsetLeft;
      t = q - x.offsetTop;
      w = document.all ? window.event.clientX : I.pageX;
      v = document.all ? window.event.clientY : I.pageY;
      E &&
        E.call(x, {
          x: w,
          y: v,
        });
    }
    function A(L) {
      u = document.all ? window.event.clientX : L.pageX;
      q = document.all ? window.event.clientY : L.pageY;
      var M = u - s,
        K = q - t,
        J = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        I = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      if (x !== null) {
        M > J - x.clientWidth - 10 && (M = J - x.clientWidth - 10);
        M < 10 && (M = 10);
        K > I - x.clientHeight - 10 && (K = I - x.clientHeight - 10);
        K < 10 && (K = 10);
        x.style.left = M + "px";
        x.style.top = K + "px";
        y &&
          y.call(x, {
            x: M,
            y: K,
          });
      }
    }
    function z(I) {
      x && B && B.call(I, Math.abs(w - u) < 5 && Math.abs(v - q) < 5);
      x = null;
    }
    this.bind(r, "mousedown", H);
    this.bind(document, "mousemove", A);
    this.bind(document, "mouseup", z);
    if (F) {
      var D, C;
      var G;
      for (D = 0; D < F.length; D++) {
        G = this.all(F[D]);
        for (C = 0; C < G.length; C++) {
          this.bind(G[C], "mousedown", function (J) {
            x = null;
            var I = J ? J : window.event;
            if (I.stopPropagation) {
              I.stopPropagation();
            }
            if (I.cancelBubble != null) {
              I.cancelBubble = true;
            }
          });
        }
      }
    }
  }
  function a() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }
  function o(q) {
    q.focus();
    q.tagName == "INPUT" &&
      q.setSelectionRange &&
      q.setSelectionRange(q.value.length, q.value.length);
  }
  function e(r, s) {
    if (typeof dataLayer == "object" && dataLayer.push) {
      var t = false;
      if (typeof gtag == "function") {
        for (var q = 0; q < dataLayer.length; q++) {
          if (dataLayer[q].length < 2) {
            continue;
          }
          if (dataLayer[q][0] == "config") {
            t = true;
            gtag("event", s, {
              send_to: dataLayer[q][1],
              event_category: r,
            });
          }
        }
      }
      if (!t) {
        dataLayer.push({
          event: "gaTriggerEvent",
          gaEventCategory: r,
          gaEventAction: s,
        });
      }
    } else {
      if (typeof ga == "function") {
        ga("send", "event", r, s);
      }
    }
  }
})();
var TELER_WD_SHOWN = false;
var TelerCatcher = new (function () {
  this.getDomain = k;
  this.parseUrl = e;
  this.createUtm = i;
  this.saveUtmLocal = d;
  this.getUtm = j;
  this.saveReferrerLocal = b;
  this.getReferrer = c;
  this.getTelerSessionId = h;
  this.getUniversalAnalyticsId = f;
  this.getClientId = g;
  var l = [
    {
      name: "google",
      regexp: /^www.google/,
      termParam: "q",
    },
    {
      name: "yandex",
      regexp: /yandex./,
      termParam: "text",
    },
    {
      name: "go.mail.ru",
      regexp: /^go.mail.ru$/,
      termParam: "q",
    },
    {
      name: "bing",
      regexp: /^www.bing/,
      termParam: "q",
    },
    {
      name: "yahoo",
      regexp: /^search.yahoo/,
      termParam: "p",
    },
    {
      name: "ask",
      regexp: /ask.com$/,
      termParam: "q",
    },
    {
      name: "rambler",
      regexp: /rambler.ru$/,
      termParam: "query",
    },
    {
      name: "ukr.net",
      regexp: /^search.ukr.net$/,
      termParam: "search_query",
    },
    {
      name: "meta.ua",
      regexp: /^search.meta.ua$/,
      termParam: "q",
    },
    {
      name: "i.ua",
      regexp: /^search.i.ua$/,
      termParam: "q",
    },
    {
      name: "all.by",
      regexp: /^all.by$/,
      termParam: "query",
    },
    {
      name: "search.tut.by",
      regexp: /^search.tut.by$/,
      termParam: "query",
    },
  ];
  var a = [
    {
      name: "vk.com",
      referrer: /vk.com/,
    },
    {
      name: "twitter.com",
      referrer: /t.co/,
    },
    {
      name: "facebook.com",
      referrer: /facebook.com/,
    },
    {
      name: "ok.ru",
      referrer: /ok.ru/,
    },
    {
      name: "google+",
      referrer: /plus.url.google.com/,
    },
    {
      name: "linkedin",
      referrer: /linkedin.com/,
    },
  ];
  function i(r, m) {
    if (!r) {
      return null;
    }
    var q = e(r);
    var n = e(m);
    var p;
    p = {};
    p.source = q.source || "";
    p.medium = q.medium || "";
    p.campaign = q.campaign || "";
    p.content = q.content || "";
    p.term = q.term || "";
    p.nooverride = q.nooverride || "";
    do {
      if (q.gclid || q.yclid) {
        p.medium = q.medium || "cpc";
        p.source = q.source || (q.gclid ? "google" : "yandex");
        p.source = (p.source + "").toLowerCase();
        break;
      } else {
        if (m) {
          if (k(m) == k(r)) {
            p.medium = p.medium || "other";
            p.medium = (p.medium + "").toLowerCase();
            break;
          }
          for (var o = 0; o < l.length; o++) {
            if (l[o].regexp.test(k(m))) {
              n = e(m, l[o].termParam);
              p.medium = p.medium || "organic";
              p.source = p.source || l[o].name;
              p.source = (p.source + "").toLowerCase();
              p.term = p.term || n.searchTerm || "";
              break;
            }
          }
          for (o = 0; o < a.length; o++) {
            if (a[o].referrer.test(k(m))) {
              p.medium = p.medium || "social";
              p.source = p.source || a[o].name;
              p.source = (p.source + "").toLowerCase();
              break;
            }
          }
          if (!p.source) {
            p.medium = p.medium || "referral";
            p.source = k(m);
            p.content = p.content || m;
            p.term = p.term || "";
          }
          p.source = (p.source + "").toLowerCase();
        } else {
          p.source = p.source || "direct";
        }
      }
    } while (false);
    p.source = p.source || "(not set)";
    p.medium = p.medium || "(not set)";
    p.campaign = p.campaign || "(not set)";
    p.content = p.content || "(not set)";
    p.term = p.term || "(not set)";
    p.source = (p.source + "").toLowerCase();
    return p;
  }
  function d(m) {
    if (m.nooverride === "1" && localStorage.getItem("callCatcherUtm")) {
      return;
    } else {
      if (
        localStorage.getItem("callCatcherUtm") &&
        document.referrer.indexOf(k(location.href)) !== -1
      ) {
        return;
      } else {
        if (localStorage.getItem("callCatcherUtm") && m.source === "direct") {
          return;
        } else {
          var n = JSON.parse(JSON.stringify(m));
          delete n.nooverride;
          localStorage.setItem("callCatcherUtm", JSON.stringify(n));
        }
      }
    }
  }
  function j() {
    if (
      localStorage.getItem("callCatcherUtm") &&
      localStorage.getItem("callCatcherUtm") !== ""
    ) {
      return JSON.parse(localStorage.getItem("callCatcherUtm"));
    }
  }
  function k(n) {
    if (!n) {
      return n;
    }
    var o = n.indexOf("://");
    o >= 0 && (n = n.slice(o + 3, n.length));
    o = n.indexOf("//");
    o === 0 && (n = n.slice(o + 2, n.length));
    o = n.indexOf("/");
    o === 0 && (n = n.slice(o + 1, n.length));
    var m = n.indexOf("/");
    m > 3 && (n = n.slice(0, m));
    return n;
  }
  function e(n, m) {
    if (!n || n.indexOf("?") < 0) {
      return {};
    }
    var o = n.substring(n.indexOf("?") + 1);
    return o.split("&").reduce(function (s, q) {
      if (q.substr(0, 4) == "utm_") {
        q = q.split("=");
        var r = q[0].substr(4);
        s[r] = decodeURIComponent(q[1]);
        if (s[r]) {
          try {
            s[r] = decodeURIComponent(s[r]);
          } catch (p) {}
        }
      } else {
        if (q.substr(0, 6) == "gclid=") {
          q = q.split("=");
          s.gclid = q[1];
        } else {
          if (q.substr(0, 6) == "yclid=") {
            q = q.split("=");
            s.yclid = q[1];
          } else {
            if (q.indexOf(m + "=") == 0) {
              q = q.split("=");
              s.searchTerm = decodeURIComponent(q[1]);
            }
          }
        }
      }
      return s;
    }, {});
  }
  function b(n, m, o) {
    if (n.source === "direct") {
      return;
    }
    if (m && m.indexOf(k(o)) === -1) {
      localStorage.setItem("callCatcherReferrer", JSON.stringify(m));
    }
  }
  function c(m) {
    if (m.source === "direct") {
      return "(not set)";
    }
    if (
      localStorage.getItem("callCatcherReferrer") &&
      localStorage.getItem("callCatcherReferrer") !== ""
    ) {
      return JSON.parse(localStorage.getItem("callCatcherReferrer"));
    } else {
      return "(not set)";
    }
  }
  function h() {
    var m = TelerWdMiniJS.cookie("TELERSESSIONID");
    if (!m) {
      function o() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (s) {
            var q = (Math.random() * 16) | 0,
              p = s === "x" ? q : (q & 3) | 8;
            return p.toString(16);
          }
        );
      }
      m = o();
      var n = 365;
      TelerWdMiniJS.cookie("TELERSESSIONID", m, n);
    }
    return m;
  }
  function f() {
    if (!window.ga || typeof ga.getAll !== "function") {
      return "";
    } else {
      return ga.getAll()[0].get("trackingId");
    }
  }
  function g() {
    if (!window.ga || typeof ga.getAll !== "function") {
      return "";
    } else {
      return ga.getAll()[0].get("clientId");
    }
  }
})();
(function () {
  var b = 1500;
  function a() {
    var c = navigator.userAgent.match(/MSIE \d*/);
    if (
      (c && c[0] && +c[0].slice(4, 6) < 9) ||
      TELER_WD_SHOWN ||
      window.location.hash == "#/?design=1" ||
      (window.frameElement && window.frameElement.id == "jivo_magic_iframe")
    ) {
      return;
    }
    TELER_WD_SHOWN = true;
    TelerWdMiniJS.ajax(
      "//" +
        telerWdDomain +
        "/rest/public/widget/call-catchers/" +
        telerWdWidgetId +
        "/trigger-content",
      function (d, e) {
        if (e.status != 200 || !d) {
          TELER_WD_SHOWN = false;
          return;
        }
        window.telerWdOpts = JSON.parse(d);
        window.telerWdOpts.displayNow &&
          TelerWdMiniJS.toDom(telerWdOpts.content);
        delete telerWdOpts.content;
        delete telerWdOpts.placeholders;
        if (!TelerWdMiniJS.cookie("TELERSESSION_REFERRER")) {
          TelerWdMiniJS.cookie("TELERSESSION_REFERRER", document.referrer, 365);
        }
      }
    );
  }
  setTimeout(a, b);
})();
