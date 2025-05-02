'use strict';
const burgerButton = document.querySelector(".burger");
const body = document.body;
const navigation = document.querySelector(".header__nav");
const buttonUp = document.querySelector(".button-up");


burgerButton.addEventListener("click", () => {
    body.classList.toggle("_active");
});

navigation.addEventListener("click", (e) => {
    if (e.target.closest(".navigation__link") && body.classList.contains("_active")) {
        body.classList.remove("_active");
    }
})

window.addEventListener("scroll", () => {
   buttonUp.classList.toggle("visible", document.documentElement.scrollTop > 200);
});
buttonUp.addEventListener("click", () => {
  document.documentElement.scrollIntoView({
    behavior: "smooth",
  });
});