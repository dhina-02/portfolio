function scrollHeader() {
  const header = document.querySelector(".nav-ul");
  if (window.scrollY >= 400) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

// Event listener for scroll
window.addEventListener("scroll", scrollHeader);
