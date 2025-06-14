const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // Add active to clicked
    tab.classList.add('active');
    const targetPanel = document.querySelector(`.tab-panel[data-tab="${tab.dataset.tab}"]`);
    if (targetPanel) targetPanel.classList.add('active');
  });
});
