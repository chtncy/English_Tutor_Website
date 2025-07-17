document.addEventListener("DOMContentLoaded", () => {
  // 1) Menu toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  // only if both were found
  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // 2) Scroll spy
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", () => {
    const top = window.scrollY;
    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.id;
      if (top >= offset && top < offset + height) {
        navLinks.forEach((a) => a.classList.remove("active"));
        const activeLink = document.querySelector(
          `header nav a[href*="${id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  // 3) FAQ toggle
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("active");
    });
  });

  // 4) Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm && window.emailjs) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_3fsne3p",
          "template_1vt9ai1",
          this,
          "u_t5D9D5vi3kFIIdV"
        )
        .then(() => {
          alert("Your message has been sent successfully!");
          this.reset();
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          alert("Failed to send. See console for details.");
        });
    });
  }
});
