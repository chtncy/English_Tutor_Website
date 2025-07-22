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
      const sectionBottom = sectionTop + sec.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `header nav a[href*="${sec.id}"]`
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

      // Prepare both email requests
      const sendMessage = emailjs.sendForm(
        "service_scoq7zy",
        "template_orxa79p",
        this
      );
      const sendAutoReply = emailjs.send(
        "service_scoq7zy",
        "template_8bie1bs",
        {
          reply_to: this.reply_to.value,
          from_name: this.from_name.value,
        }
      );

      // Execute both and then reset the form
      Promise.all([sendMessage, sendAutoReply])
        .then(() => {
          alert("✉️ Your message has been sent successfully!");
          console.log("Visitor auto-reply sent");
          this.reset();
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          alert("❌ Failed to send message. Check console for details.");
        });
      then(() => {
        console.log("Visitor auto‑reply sent");
      }).catch((err) => {
        console.error("Auto‑reply error:", err);
      });

      // reset only after both have attempted
      this.reset();
    });
  }
});
