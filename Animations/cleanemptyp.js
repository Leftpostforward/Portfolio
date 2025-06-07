document.querySelectorAll('#tab-content p').forEach(p => {
  if (!p.textContent.trim()) p.remove();
});
