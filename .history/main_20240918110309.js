let btn = document.querySelector("section div");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  main.textContent = btn.textContent;
});
