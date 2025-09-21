document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Opening: ' + icon.href);
  });
});
