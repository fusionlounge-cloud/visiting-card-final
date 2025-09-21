// Ensure video keeps playing on iOS after first tap
const bg = document.getElementById('bg');
document.addEventListener('touchstart', () => { if (bg && bg.paused) bg.play(); }, { once:true });

// Subtle parallax for orbit to feel AR-like
document.addEventListener('mousemove', (e) => {
  const orbit = document.querySelector('.orbit');
  if(!orbit) return;
  const rect = orbit.getBoundingClientRect();
  const dx = (e.clientX - (rect.left + rect.width/2)) / 80;
  const dy = (e.clientY - (rect.top + rect.height/2)) / 80;
  orbit.style.transform = `translate(${dx}px, ${dy}px)`;
});