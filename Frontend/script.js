const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 600);
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
