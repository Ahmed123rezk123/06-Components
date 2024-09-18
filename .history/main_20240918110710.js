let btn = document.querySelectorAll("section div");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  main.textContent = btn.textContent;
});
