(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll(".coma-year").forEach(function (el) {
    el.textContent = year;
  });

  document.querySelectorAll(".elementor-invisible").forEach(function (el) {
    el.classList.remove("elementor-invisible");
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var banner = document.querySelector("#cmplz-cookiebanner-container .cmplz-cookiebanner");
  if (!banner) return;

  var key = "coma_cookie_consent";
  var hideBanner = function () {
    banner.classList.add("cmplz-hidden");
    banner.classList.remove("cmplz-show");
  };

  if (!localStorage.getItem(key)) {
    banner.classList.remove("cmplz-hidden");
    banner.classList.add("cmplz-show");
  }

  document.querySelectorAll(".cmplz-accept, .cmplz-btn.cmplz-accept").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "accepted");
      hideBanner();
    });
  });
  document.querySelectorAll(".cmplz-deny, .cmplz-btn.cmplz-deny").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "rejected");
      hideBanner();
    });
  });
  document.querySelectorAll(".cmplz-close").forEach(function (btn) {
    btn.addEventListener("click", hideBanner);
  });
  document.querySelectorAll(".cmplz-save-preferences").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "preferences");
      hideBanner();
    });
  });

  var legalPrefix = /^\/?$/.test(location.pathname) ? "" : "../";
  document.querySelectorAll(".cmplz-link.cookie-statement").forEach(function (link) {
    if (link.getAttribute("href") === "#" || !link.getAttribute("href")) {
      link.setAttribute("href", legalPrefix + "cookies/");
    }
  });
  document.querySelectorAll(".cmplz-link.privacy-statement").forEach(function (link) {
    if (link.getAttribute("href") === "#" || !link.getAttribute("href")) {
      link.setAttribute("href", legalPrefix + "privacidad/");
    }
  });
})();
