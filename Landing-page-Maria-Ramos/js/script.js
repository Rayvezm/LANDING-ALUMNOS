document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Producto añadido al carrito");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        mobileMenu.classList.add("visible");
      } else {        
        mobileMenu.classList.remove("visible");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});
