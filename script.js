const shareSpan = document.querySelector(".share");
const tooltip = document.querySelector(".tooltip");

shareSpan.addEventListener("mouseenter", () => {
  tooltip.classList.add("display");
  tooltip.classList.remove("none");
});

shareSpan.addEventListener("mouseleave", () => {
  tooltip.classList.remove("display");
  tooltip.classList.add("none");
});
