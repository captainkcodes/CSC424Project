//Theme Toggling
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
  //change the theme of the website
  document.body.classList.toggle('dark');
})