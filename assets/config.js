/*
 * ─────────────────────────────────────────────────────────────
 *  SITE LINKS — edit this one file to update every page.
 *  Leave a value as "" and the button shows "Link coming soon".
 * ─────────────────────────────────────────────────────────────
 */
window.SITE_LINKS = {
  /* Transcription portal: your FromThePage collection or project */
  fromthepage: "",

  /* FromThePage sign-up instructions (Google Doc or similar) */
  ftpSignup: "https://fromthepage.com/users/sign_up",

  /* Project log (e.g. a shared Google Sheet) */
  projectLog: "",

  /* Transcription statement / conventions (e.g. a Google Doc) */
  transcriptionStatement: "",

  /* Penn Libraries eScriptorium instance */
  escriptorium: "",

  /* Your deployed leggio viewer (GitHub Pages URL of your fork) */
  leggio: "",

  /* Optional: deep links into leggio for each manuscript, if supported */
  leggio1321: "",
  leggio1508: "",

  /* Penn Libraries catalogue records (Colenda) */
  colenda1321: "https://colenda.library.upenn.edu/catalog/81431-p35q4rn2w",
  colenda1508: "https://colenda.library.upenn.edu/catalog/81431-p3wh2dg26",

  /* Registration / contact */
  register: "",
  contactEmail: "laura_morreale@fas.harvard.edu"
};

/* Wire up every element that has data-link="key" */
document.addEventListener("DOMContentLoaded", function () {
  var L = window.SITE_LINKS || {};
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    var url = L[key];
    if (key === "contactEmail" && url) url = "mailto:" + url;
    if (url) {
      el.setAttribute("href", url);
      if (!/^mailto:/.test(url)) { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
    } else {
      el.removeAttribute("href");
      el.classList.add("pending");
      var note = el.querySelector(".status");
      if (note) note.textContent = "Link coming soon";
    }
  });
  /* mobile nav toggle */
  var t = document.querySelector(".nav-toggle");
  if (t) t.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
    t.setAttribute("aria-expanded", document.body.classList.contains("nav-open"));
  });
});
