document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const mainScreen = document.getElementById("main-screen");

  startScreen.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
  });
});