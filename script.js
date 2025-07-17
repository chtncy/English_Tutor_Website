document.addEventListener("DOMContentLoaded", () => {
  // 1) Menu toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // 2) Scrollspy for nav links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop - 150;
      const sectionHeight = sec.offsetHeight;
      const sectionId = sec.id;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `header nav a[href*="${sectionId}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  // 3) FAQ accordion toggle
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      question.parentElement.classList.toggle("active");
    });
  });

  // 4) Contact form submission via EmailJS
  const contactForm = document.getElementById("contact-form");
  if (contactForm && window.emailjs) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm("service_3fsne3p", "template_1vt9ai1", this)
        .then(() => {
          alert("✉️ Your message has been sent successfully!");
          this.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Check console for details.");
        });
    });
  }
});
