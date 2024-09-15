document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Producto añadido al carrito");
    });
  });

  const mobileMenu = document.querySelector(".mobile-menu");
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        mobileMenu.classList.remove("d-none");
      } else {
        mobileMenu.classList.add("d-none");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});
