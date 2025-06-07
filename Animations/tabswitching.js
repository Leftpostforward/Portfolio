document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('#tabs .tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide panels
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.tab === target);
      });
    });
  });
});
