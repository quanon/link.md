chrome.tabs.getSelected(null, function(tab) {
  const input = document.querySelector('input[name=link]');
  input.setAttribute('value', `[${tab.title}](${tab.url})`);
  input.setAttribute('readonly', true);
  input.addEventListener('click', () => {
    input.select();
  }, false);
});
