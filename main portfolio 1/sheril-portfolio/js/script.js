/* Builds the pages from js/data.js. You normally never need to edit this file. */
(function () {
  var D = window.PORTFOLIO || {};
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function link(href, text, cls) {
    var a = el("a", cls, text); a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  function fill(id, items, build, emptyMsg) {
    var box = $(id); if (!box) return;
    if (!items || !items.length) { if (emptyMsg) box.appendChild(el("p", "empty", emptyMsg)); return; }
    items.forEach(function (it) { box.appendChild(build(it)); });
  }
  function docs(list) {
    if (!list || !list.length) return null;
    var d = el("div", "doclinks");
    list.forEach(function (x) { d.appendChild(link(x.file, "📄 " + x.label)); });
    return d;
  }

  /* About */
  fill("about-text", D.about, function (t) { return el("p", "", t); });
  var cv = $("cv-btn"); if (cv) { if (D.cv) { cv.href = D.cv; } else { cv.style.display = "none"; } }

  /* Skills */
  fill("skills-grid", D.skills, function (s) {
    var c = el("div", "card"); c.appendChild(el("span", "icon", s.icon));
    c.appendChild(el("h3", "", s.title)); c.appendChild(el("p", "", s.text)); return c;
  });

  /* Experience */
  fill("exp-list", D.experience, function (j) {
    var d = el("div", "job"); d.appendChild(el("span", "when", j.period));
    d.appendChild(el("h3", "", j.role + " · " + j.org));
    var ul = el("ul"); (j.points || []).forEach(function (p) { ul.appendChild(el("li", "", p)); });
    d.appendChild(ul); return d;
  });

  /* Projects */
  fill("projects-list", D.projects, function (p) {
    var c = el("div", "card proj"); c.appendChild(el("span", "icon", p.icon || "💡"));
    var b = el("div"); b.appendChild(el("h3", "", p.title)); b.appendChild(el("p", "", p.text));
    if (p.tools && p.tools.length) { var t = el("div", "tags"); p.tools.forEach(function (x) { t.appendChild(el("span", "", x)); }); b.appendChild(t); }
    if (p.link) b.appendChild(link(p.link, (p.linkLabel || "View project") + " →", "more"));
    c.appendChild(b); return c;
  }, "Projects coming soon.");

  /* Education */
  fill("edu-grid", D.education, function (e) {
    var c = el("div", "card edu"); c.appendChild(el("span", "when", e.period));
    c.appendChild(el("h3", "", e.title)); c.appendChild(el("p", "", e.school));
    if (e.note) c.appendChild(el("p", "", e.note));
    var d = docs(e.documents); if (d) c.appendChild(d); return c;
  });

  /* Certifications (section hidden when empty) */
  var cs = $("certs");
  if (cs) {
    if (!D.certifications || !D.certifications.length) { cs.style.display = "none"; }
    else fill("cert-grid", D.certifications, function (x) {
      var c = el("div", "card edu"); c.appendChild(el("span", "when", x.year));
      c.appendChild(el("h3", "", x.title)); c.appendChild(el("p", "", x.issuer));
      if (x.file) c.appendChild(docs([{ label: "View certificate", file: x.file }])); return c;
    });
  }

  /* References */
  fill("refs", D.references, function (r) {
    var d = el("div"); d.appendChild(el("b", "", r.name)); d.appendChild(el("span", "", r.role));
    if (D.showReferencePhones && r.phone) d.appendChild(el("span", "ph", r.phone));
    return d;
  });
  var rn = $("refs-note"); if (rn) rn.style.display = D.showReferencePhones ? "none" : "block";

  /* Contact */
  var row = $("contact-row");
  if (row) {
    row.appendChild(link("tel:" + D.phoneLink, "☎ " + D.phone));
    row.appendChild(link("mailto:" + D.email, "✉ " + D.email));
    row.appendChild(el("span", "", "⌖ " + D.location));
  }
  var soc = $("social");
  if (soc) {
    if (D.linkedin) soc.appendChild(link(D.linkedin, "LinkedIn"));
    if (D.github) soc.appendChild(link(D.github, "GitHub"));
  }

  var y = $("y"); if (y) y.textContent = new Date().getFullYear();
})();
