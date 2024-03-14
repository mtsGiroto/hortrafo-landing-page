//let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

function openMenu() {
  if (!menuSection.classList.contains("on")) {
    menuSection.classList.add("on");
    document.body.style.overflow = "hidden";
  } else if (menuSection.classList.contains("on")) {
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
  }
}

//menuToggle.addEventListener("click", () => {
//   document.body.style.overflow = show ? "hidden" : "initial";
//   menuSection.classList.toggle("on", show);
//   show = !show;
//})

function linkClick() {
  document.body.style.overflow = "initial";
  if (menuSection.classList.contains("on")) {
    menuSection.classList.remove("on");
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document
    .getElementsByClassName("carousel-images")[0]
    .getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Alterado para 5 segundos
}

function moveSlide(n) {
  showSlides((slideIndex += n));
}
