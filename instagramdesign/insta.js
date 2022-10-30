const addBtn = document.getElementById("new-post-btn");
const newpostbox = document.getElementById("newpost");

addBtn.addEventListener("click", function () {
  newpostbox.style.display = "block";
  newpostbox.style.animationName = "scale";
 9 newpostbox.style.animationDuration = "1s";
  addBtn.addEventListener("click", () => {
    newpostbox.style.animationName = "scaleDown";
    newpostbox.style.animationDuration = "1s";
  });
});

/* document.getElementById("body").addEventListener("click", function () {
  newpostbox.style.display = "none";
}); */
