/* ==========================================================================
   Site logic — you normally don't need to touch this file.
   All content lives in data.js
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- tiny helpers ---------- */
  function h(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined && text !== null) el.textContent = text;
    return el;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var FLOWER =
    '<svg class="flower" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">' +
    '<ellipse cx="50" cy="19" rx="12.5" ry="19"/>' +
    '<ellipse cx="50" cy="81" rx="12.5" ry="19"/>' +
    '<ellipse cx="19" cy="50" rx="19" ry="12.5"/>' +
    '<ellipse cx="81" cy="50" rx="19" ry="12.5"/>' +
    '<ellipse cx="50" cy="19" rx="12.5" ry="19" transform="rotate(45 50 50)"/>' +
    '<ellipse cx="50" cy="81" rx="12.5" ry="19" transform="rotate(45 50 50)"/>' +
    '<ellipse cx="19" cy="50" rx="19" ry="12.5" transform="rotate(45 50 50)"/>' +
    '<ellipse cx="81" cy="50" rx="19" ry="12.5" transform="rotate(45 50 50)"/>' +
    '<circle cx="50" cy="50" r="13"/></svg>';

  var ARROW_NE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var ARROW_R =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';

  function flowerEl(cls) {
    var wrap = document.createElement("span");
    wrap.innerHTML = FLOWER;
    var svg = wrap.firstChild;
    if (cls) svg.setAttribute("class", ("flower " + cls).trim());
    return svg;
  }

  /* ---------- theme ---------- */
  var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  function applyTheme() { document.documentElement.classList.toggle("dark", dark); }
  applyTheme();
  var themeBtn = $("#themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", function () { dark = !dark; applyTheme(); });

  /* ---------- simple text bindings ---------- */
  $all("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    if (SITE[key]) el.textContent = SITE[key];
  });
  document.title = SITE.name + " — " + SITE.role;

  /* ---------- nav shadow on scroll ---------- */
  var nav = $(".nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- inject flowers into placeholders ---------- */
  $all("[data-flower]").forEach(function (slot) {
    slot.appendChild(flowerEl(slot.getAttribute("data-flower")));
  });

  /* ================================================================
     HOME PAGE
     ================================================================ */
  var workGrid = $("#workGrid");
  if (workGrid) {
    /* avatar */
    var blob = $("#avatarBlob");
    if (blob) blob.style.backgroundImage = 'url("' + SITE.avatar + '")';

    /* live clock */
    var clockEl = $("#clockTime");
    var clockCity = $("#clockCity");
    if (clockCity) clockCity.textContent = (SITE.location || "").split(",")[0];
    function tick() {
      if (!clockEl) return;
      var now = new Date(), hm = "--:--", ss = "";
      try {
        var parts = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          hour12: false, timeZone: SITE.timezone || undefined
        }).formatToParts(now);
        var get = function (t) { return (parts.find(function (p) { return p.type === t; }) || {}).value || ""; };
        hm = get("hour") + ":" + get("minute");
        ss = get("second");
      } catch (e) {
        hm = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
        ss = String(now.getSeconds()).padStart(2, "0");
      }
      clockEl.innerHTML = "";
      clockEl.appendChild(document.createTextNode(hm));
      clockEl.appendChild(h("span", "sec", ss));
    }
    tick(); setInterval(tick, 1000);

    /* socials tile */
    var socialList = $("#socialList");
    if (socialList) {
      (SITE.socials || []).forEach(function (s) {
        var a = h("a", null, null);
        a.href = s.url; a.target = "_blank"; a.rel = "noopener";
        a.appendChild(h("span", null, s.label));
        var arr = h("span", "arr"); arr.innerHTML = ARROW_NE; a.appendChild(arr);
        socialList.appendChild(a);
      });
    }

    /* stats row */
    var statRow = $("#statRow");
    if (statRow) {
      (SITE.stats || []).forEach(function (s) {
        var t = h("div", "tile tile-stat reveal");
        var num = h("div", "stat-num", s.number);
        num.setAttribute("data-count", s.number);
        t.appendChild(num);
        t.appendChild(h("div", "stat-label", s.label));
        statRow.appendChild(t);
      });
    }

    /* skills marquee */
    var track = $("#marqueeTrack");
    if (track) {
      var one = [];
      (SITE.skills || []).forEach(function (sk) { one.push(sk); });
      for (var r = 0; r < 2; r++) {          // two identical halves = seamless loop
        one.forEach(function (sk) {
          track.appendChild(h("span", null, sk));
          track.appendChild(h("span", "spark", "✦"));
        });
      }
    }

    /* work cards */
    var count = $("#workCount");
    if (count) count.textContent = "( " + CASE_STUDIES.length + " selected projects )";
    CASE_STUDIES.forEach(function (cs, i) {
      var a = document.createElement("a");
      var color = cs.color || ["blue", "green", "yellow", "red"][i % 4];
      a.className = "card tile t-" + color + " reveal" + (cs.size === "large" ? " size-large" : "");
      a.href = "case-study.html?id=" + encodeURIComponent(cs.id);
      a.setAttribute("data-study", cs.id);

      var media = h("div", "card-media");
      var img = document.createElement("img");
      img.src = cs.cover; img.alt = cs.title; img.loading = "lazy";
      media.appendChild(img);

      var body = h("div", "card-body");
      var chips = h("div", "chip-row");
      (cs.tags || []).forEach(function (t) { chips.appendChild(h("span", "chip", t)); });
      body.appendChild(chips);
      body.appendChild(h("h3", "card-title", cs.title));
      body.appendChild(h("p", "card-sub", cs.subtitle));
      var cta = h("span", "card-cta", "View case study ");
      var ctaIc = h("span"); ctaIc.innerHTML = ARROW_R; cta.appendChild(ctaIc);
      body.appendChild(cta);

      var arrow = h("span", "card-arrow"); arrow.innerHTML = ARROW_NE;

      a.appendChild(media); a.appendChild(body); a.appendChild(arrow);
      workGrid.appendChild(a);
    });
  }

  /* ================================================================
     CASE STUDY PAGE  (also reused by the preview overlay)
     ================================================================ */
  function renderCaseStudyInto(root, cs, opts) {
    opts = opts || {};
    var rv = opts.animate === false ? "" : " reveal";
    root.innerHTML = "";

    var head = h("div", "cs-head" + rv);
    var back = document.createElement("a");
    back.className = "back-link";
    back.href = "index.html#work";
    back.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6 6-6-6 6-6"/></svg>';
    back.appendChild(document.createTextNode(" All work"));
    head.appendChild(back);

    var chips = h("div", "chip-row");
    (cs.tags || []).forEach(function (t) { chips.appendChild(h("span", "chip", t)); });
    head.appendChild(chips);
    head.appendChild(h("h1", "display", cs.title));
    if (cs.subtitle) head.appendChild(h("p", "cs-sub", cs.subtitle));
    root.appendChild(head);

    if (cs.meta && cs.meta.length) {
      var meta = h("div", "cs-meta" + rv);
      cs.meta.forEach(function (m) {
        var t = h("div", "tile");
        t.appendChild(h("div", "m-label", m.label));
        t.appendChild(h("div", "m-value", m.value));
        meta.appendChild(t);
      });
      root.appendChild(meta);
    }

    if (cs.cover) {
      var cov = h("div", "cs-cover" + rv);
      var ci = document.createElement("img");
      ci.src = cs.cover; ci.alt = cs.title;
      cov.appendChild(ci);
      root.appendChild(cov);
    }

    (cs.sections || []).forEach(function (sec) {
      var wrap = h("div", "cs-section" + rv);
      if (sec.type === "text") {
        wrap.classList.add("cs-text");
        if (sec.heading) wrap.appendChild(h("h2", null, sec.heading));
        String(sec.body || "").split(/\n\s*\n/).forEach(function (para) {
          if (para.trim()) wrap.appendChild(h("p", null, para.trim()));
        });
      } else if (sec.type === "image") {
        wrap.classList.add("cs-figure");
        var fig = document.createElement("figure");
        var im = document.createElement("img");
        im.src = sec.src; im.alt = sec.caption || cs.title; im.loading = "lazy";
        fig.appendChild(im);
        wrap.appendChild(fig);
        if (sec.caption) wrap.appendChild(h("figcaption", null, sec.caption));
      } else if (sec.type === "stats") {
        wrap.classList.add("cs-stats");
        (sec.items || []).forEach(function (s) {
          var t = h("div", "tile tile-stat");
          t.appendChild(h("div", "stat-num", s.number));
          t.appendChild(h("div", "stat-label", s.label));
          wrap.appendChild(t);
        });
      } else if (sec.type === "quote") {
        wrap.classList.add("tile", "cs-quote");
        wrap.appendChild(flowerEl());
        wrap.appendChild(h("div", null, "“" + sec.body + "”"));
        if (sec.by) wrap.appendChild(h("span", "by", "— " + sec.by));
      }
      root.appendChild(wrap);
    });

    /* prev / next */
    var idx = CASE_STUDIES.findIndex(function (c) { return c.id === cs.id; });
    var prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
    var next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
    if (CASE_STUDIES.length > 1) {
      var pager = h("div", "cs-pager" + rv);
      [[prev, "← Previous", "prev"], [next, "Next →", "next"]].forEach(function (row) {
        var a = document.createElement("a");
        a.className = "tile " + row[2];
        a.href = "case-study.html?id=" + encodeURIComponent(row[0].id);
        a.setAttribute("data-study", row[0].id);
        a.appendChild(h("div", "dir", row[1]));
        a.appendChild(h("div", "pt", row[0].title));
        pager.appendChild(a);
      });
      root.appendChild(pager);
    }
  }
  window.renderCaseStudyInto = renderCaseStudyInto;   // used by preview overlay

  var csRoot = $("#csRoot");
  if (csRoot) {
    var id = new URLSearchParams(window.location.search).get("id");
    var cs = CASE_STUDIES.find(function (c) { return c.id === id; });
    if (cs) {
      document.title = cs.title + " — " + SITE.name;
      renderCaseStudyInto(csRoot, cs);
    } else {
      var nf = h("div", "cs-notfound");
      nf.appendChild(h("h1", "display-2", "Hmm, that project isn’t here."));
      nf.appendChild(h("p", "muted", "It may have been renamed in data.js."));
      var back2 = document.createElement("a");
      back2.className = "btn btn-primary"; back2.href = "index.html";
      back2.textContent = "Back to home";
      nf.appendChild(back2);
      csRoot.appendChild(nf);
    }
  }

  /* ================================================================
     Shared enhancements (run after all rendering)
     ================================================================ */

  /* footer socials + year + email buttons */
  var footSoc = $("#footerSocials");
  if (footSoc) {
    (SITE.socials || []).forEach(function (s) {
      var a = h("a", "chip", s.label);
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      footSoc.appendChild(a);
    });
  }
  $all("[data-mail]").forEach(function (a) { a.href = "mailto:" + SITE.email; });
  var res = $("#resumeBtn");
  if (res) {
    if (SITE.resume) { res.href = SITE.resume; res.target = "_blank"; res.rel = "noopener"; }
    else res.remove();
  }
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* staggered entrance + scroll reveal */
  var revealEls = $all(".reveal");
  revealEls.forEach(function (el, i) { el.style.setProperty("--d", Math.min(i * 0.06, 0.5) + "s"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          countUp(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* count-up numbers inside a revealed element */
  function countUp(scope) {
    $all("[data-count]", scope.matches && scope.matches("[data-count]") ? scope.parentNode : scope)
      .forEach(function (el) {
        var raw = el.getAttribute("data-count");
        var m = raw.match(/^(\D*)(\d+)(.*)$/);
        if (!m) return;
        var pre = m[1], target = parseInt(m[2], 10), post = m[3];
        var t0 = null, dur = 900;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          p = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + Math.round(target * p) + post;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        el.removeAttribute("data-count");
      });
  }

  /* Material ripple on buttons */
  document.addEventListener("pointerdown", function (e) {
    var btn = e.target.closest ? e.target.closest(".btn") : null;
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var d = Math.max(rect.width, rect.height);
    var r = document.createElement("span");
    r.className = "ripple";
    r.style.width = r.style.height = d + "px";
    r.style.left = (e.clientX - rect.left - d / 2) + "px";
    r.style.top = (e.clientY - rect.top - d / 2) + "px";
    btn.appendChild(r);
    setTimeout(function () { r.remove(); }, 600);
  });
})();
