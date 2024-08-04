const ui = {
  "name_btn": document.querySelector('.name-btn'),
}

ui.name_btn.addEventListener('click', () => {
  const name = prompt('enter your name');
  ui.name_btn.textContent = `player 1 : ${name}`
})