async function loadPartial(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Could not load ${path}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

async function initPartials() {
  await loadPartial("#site-header", "/partials/header.html");
  await loadPartial("#site-footer", "/partials/footer.html");

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
}

function initLeadForms() {
  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      /*
        Backend hook placeholder:
        Replace this alert with fetch() to your email/CRM endpoint later.

        Tracking hook placeholder:
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_form_submit",
          service: form.querySelector("[name='service']")?.value || "unknown",
          page: window.location.pathname
        });
      */

      alert("Thanks! This form is ready for backend connection.");
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPartials();
  initLeadForms();
});
