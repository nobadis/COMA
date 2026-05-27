(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll(".coma-year").forEach(function (el) {
    el.textContent = year;
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
  if (banner) {
    var key = "coma_cookie_consent";
    var stored = localStorage.getItem(key);
    if (!stored) {
      banner.classList.remove("cmplz-hidden");
      banner.classList.add("cmplz-show");
    }
    document.querySelectorAll(".cmplz-accept, .cmplz-btn.cmplz-accept").forEach(function (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(key, "accepted");
        banner.classList.add("cmplz-hidden");
        banner.classList.remove("cmplz-show");
      });
    });
    document.querySelectorAll(".cmplz-deny, .cmplz-btn.cmplz-deny").forEach(function (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(key, "rejected");
        banner.classList.add("cmplz-hidden");
        banner.classList.remove("cmplz-show");
      });
    });
  }
})();
