let btns = document.querySelectorAll("section div");
let main = document.querySelector("main");

btns.forEach(btn){
btn.addEventListener("click", function () {
  main.textContent = btn.textContent;
})
}
