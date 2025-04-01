// JavaScript to control the "Go to Top" button behavior
const goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when scrolled down
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
goToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});