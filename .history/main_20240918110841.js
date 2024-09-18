let btns = document.querySelectorAll("section div");
let main = document.querySelector("main");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    main.textContent = btn.textContent;
  });
});

// buttons.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // Update the content of the main section with the clicked email's content
//     main.textContent = "You selected: " + btn.textContent;
//   });
// });
