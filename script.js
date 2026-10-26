(() => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Product cards prefill the enquiry topic and take visitors to the form.
  document.querySelectorAll("[data-product]").forEach(button => {
    button.addEventListener("click", () => {
      const topic = document.getElementById("topic");
      const message = document.getElementById("message");
      if (topic) topic.value = "Product quotation / sourcing";
      if (message) message.value = `I would like to enquire about ${button.dataset.product}. Please share available options, specifications and pricing.`;
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => document.getElementById("name")?.focus({ preventScroll: true }), 450);
    });
  });

  // CTA links with a subject hint preselect the relevant enquiry type.
  document.querySelectorAll('a[data-subject="Supplier or partnership enquiry"]').forEach(link => {
    link.addEventListener("click", () => {
      const topic = document.getElementById("topic");
      if (topic) topic.value = "Supplier or partnership enquiry";
    });
  });

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const get = key => String(data.get(key) || "").trim();
      const subject = encodeURIComponent(`[Website enquiry] ${get("topic")}`);
      const body = encodeURIComponent(
        `Hello Healthy Africa Medical and Engineering Solutions,\n\n` +
        `I would like to make an enquiry through your website.\n\n` +
        `Name: ${get("name")}\n` +
        `Hospital / organisation: ${get("organisation") || "Not provided"}\n` +
        `Email: ${get("email")}\n` +
        `Phone: ${get("phone") || "Not provided"}\n` +
        `Enquiry type: ${get("topic")}\n\n` +
        `Message:\n${get("message")}\n\nRegards,\n${get("name")}`
      );
      if (status) status.textContent = "Your email app should open with the enquiry ready to send. If it does not, email healthyafricamedical@gmail.com directly.";
      window.location.href = `mailto:healthyafricamedical@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Highlight the current navigation section as visitors scroll.
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(section => observer.observe(section));
  }
})();