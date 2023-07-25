
function scrollToTop() {
    const scrollDuration = 400; 
    const scrollStep = -window.scrollY / (scrollDuration / 15); 
  

    function scrollAnimation() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    }
  
 
    scrollAnimation();
  }
  

  function toggleScrollToTopButton() {
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
  

  window.addEventListener("scroll", toggleScrollToTopButton);
  