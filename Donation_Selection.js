function checkOption() {
  const select = document.getElementById('choice');
  const message = document.getElementById('message');
  
  // Show if "show" is selected, otherwise hide
  message.style.display = (select.value === 'show') ? 'block' : 'none';
}