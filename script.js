// Find the button on the page
const toggleButton = document.getElementById("theme-toggle");

// 1. Check if the user has visited before and saved a theme choice
const savedTheme = localStorage.getItem("theme");

// If they have a saved choice, apply it to the HTML tag right away
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// 2. Listen for clicks on the toggle button
toggleButton.addEventListener("click", () => {
  // Check what the current theme is
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";

  // If it is currently light (or blank), switch it to dark
  if (currentTheme !== "dark") {
    newTheme = "dark";
  }

  // Apply the new theme to the website HTML tag
  document.documentElement.setAttribute("data-theme", newTheme);

  // Save the new choice in the browser memory
  localStorage.setItem("theme", newTheme);
});

const btnTop = document.querySelector(".btn-top");
console.log(btnTop.innerText);
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "auto" });
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search,
  );
});
