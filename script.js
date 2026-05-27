const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open");
  });
}

const banner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");
const consentKey = "cookie-consent-v1";

if (banner) {
  const consent = localStorage.getItem(consentKey);
  if (!consent) banner.hidden = false;

  const closeBanner = (value) => {
    localStorage.setItem(consentKey, value);
    banner.hidden = true;
  };

  acceptCookies?.addEventListener("click", () => closeBanner("accepted"));
  rejectCookies?.addEventListener("click", () => closeBanner("rejected"));
}
