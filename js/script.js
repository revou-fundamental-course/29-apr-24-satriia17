const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "../assets/bgHero.jpg",
    "../assets/destinations-1.jpg",
    "../assets/destinations-2.jpg",
    "../assets/destinations-3.jpg",
    "../assets/destinations-4.jpg",
  ];

  const slideshowImage = document.getElementById("slideshow-image");
  let currentImageIndex = 0;

  function changeImage() {
    slideshowImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  changeImage();

  setInterval(changeImage, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const items = form.querySelectorAll(".item");
    let isValid = true;

    items.forEach((item) => {
      if (item.value.trim() === "") {
        isValid = false;
        item.classList.add("error");
      } else {
        item.classList.remove("error");
      }
    });

    const selectInput = form.querySelector(".select-input");
    if (selectInput.value.trim() === "") {
      isValid = false;
      selectInput.classList.add("error");
    } else {
      selectInput.classList.remove("error");
    }

    if (isValid) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully.",
        confirmButtonText: "OK",
      }).then(() => {
        form.reset();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
        confirmButtonText: "OK",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const sectionId = link.getAttribute("data-section");
      const section = document.querySelector(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
