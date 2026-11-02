/*
 * ─────────────────────────────────────────────────────────────
 *  SITE LINKS — edit this one file to update every page.
 *  Leave a value as "" and the button shows "Link coming soon".
 * ─────────────────────────────────────────────────────────────
 */
window.SITE_LINKS = {
  /* Transcription portal: your FromThePage collection or project */
  fromthepage: "https://fromthepage.com/laurakmorrealellc/italian-accounts/ms-1321-ledger-of-medici-accounts",

  /* FromThePage: MS 1508 */
  fromthepage1508: "https://fromthepage.com/laurakmorrealellc/italian-accounts/ledger-of-medici-debtors-and-creditors-and-accounts",

  /* FromThePage sign-up instructions (Google Doc or similar) */
  ftpSignup: "https://fromthepage.com/users/sign_up",

  /* Project log (e.g. a shared Google Sheet) */
  projectLog: "https://docs.google.com/spreadsheets/d/1lVZmxgbQTec8g_j9pNfas0Fk7aPltwzUa4QFQePk_YI/edit",

  /* Transcription statement: shared drafting page (Claude artifact) */
  transcriptionStatement: "https://claude.ai/artifact/31godSTVCijaZ7PctVPnoP",

  /* Ledger Finds: shared board of discoveries (Claude artifact) */
  ledgerFinds: "https://claude.ai/artifact/WBfwep2igkaokonVgFq5Fg",

  /* Penn Libraries eScriptorium instance */
  escriptorium: "",

  /* Penn Libraries catalogue records (Colenda) */
  colenda1321: "https://colenda.library.upenn.edu/catalog/81431-p35q4rn2w",
  colenda1508: "https://colenda.library.upenn.edu/catalog/81431-p3wh2dg26",

  /* Penn Oversize Ms. Codex 1435 (home-page cover image credit): catalogue record and digital images */
  penn1435Catalog: "https://find.library.upenn.edu/catalog/9944553943503681",
  penn1435Image: "https://digitalcollections.library.upenn.edu/items/9ab66f85-443c-4b0b-94eb-faf996c3567b",

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
