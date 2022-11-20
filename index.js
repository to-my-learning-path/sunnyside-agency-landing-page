var toggleButton = document.querySelector(".toggle-button");
var navMenu = document.querySelector("#primary-navigation");

toggleButton.addEventListener("click", () => {
  var isVisible = navMenu.getAttribute("data-visible");

  if (isVisible === "false") {
    navMenu.setAttribute("data-visible", true);
  } else {
    navMenu.setAttribute("data-visible", false);
  }
});
