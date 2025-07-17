document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar menu toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar   = document.querySelector(".navbar");
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // 2. Scroll spy for nav links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  window.onscroll = () => {
    sections.forEach(sec => {
      const top    = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id     = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove("active"));
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      }
    });
  };

  // 3. FAQ accordion
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      question.parentElement.classList.toggle("active");
    });
  });

  // 4. EmailJS contact form
  const contactForm = document.getElementById("contact-form");
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
        contactForm.reset();
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
        alert("Failed to send the message. Please check console for details.");
      });
  });
});
