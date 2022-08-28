const buttonSection = document.querySelector(".button-section");
const buttonSurat = document.querySelector(".toogle-open");

buttonSurat.addEventListener("click", (e) => {
  buttonSection.classList.add("open-button");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwqIwZMptlAxO7iWXqyERKw-fNXD46hdc2bYGWdi6JIK7X35WLhVyQr9ZI1AA7sWrHowQ/exec";
const formYa = document.forms["iya"];

const formTidak = document.forms["tidak"];

formYa.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(formYa) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

formTidak.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(formTidak) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
