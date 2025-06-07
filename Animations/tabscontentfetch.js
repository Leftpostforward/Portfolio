document.querySelectorAll('.tab-panel').forEach(panel => {
  const tabName = panel.getAttribute('data-tab');
  fetch(`tabs/${tabName}.html`)
    .then(res => res.text())
    .then(html => {
      panel.innerHTML = html;
    });
});