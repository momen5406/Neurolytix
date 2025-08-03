const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menuBtn");
const menuLinks = document.querySelectorAll("#menu a");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("h-menu-height");
  menu.classList.toggle("h-0");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("h-menu-height");
    menu.classList.toggle("h-0");
  }) 
})

const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
})

lightMode.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
})

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const icon = button.querySelector("svg");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.paddingBottom = 0;
    icon.classList.remove("rotate-180");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.paddingBottom = "1rem";
    icon.classList.add("rotate-180");
  }
}
