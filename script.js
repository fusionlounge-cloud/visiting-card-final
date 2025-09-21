// Add subtle parallax for AR feel
document.addEventListener("mousemove", (e) => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    const speed = 20;
    const x = (window.innerWidth / 2 - e.pageX) / speed;
    const y = (window.innerHeight / 2 - e.pageY) / speed;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
});