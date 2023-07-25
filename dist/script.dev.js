"use strict";

function scrollToTop() {
  var scrollDuration = 400;
  var scrollStep = -window.scrollY / (scrollDuration / 15);

  function scrollAnimation() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollAnimation);
    }
  }

  scrollAnimation();
}

function toggleScrollToTopButton() {
  var scrollToTopButton = document.querySelector(".scroll-to-top");

  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

window.addEventListener("scroll", toggleScrollToTopButton);