const burgerButton = document.querySelector(".burger");
const body = document.querySelector("body");

burgerButton.addEventListener("click", () => {
    body.classList.toggle("_active");
});
