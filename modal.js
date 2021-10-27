const div = document.querySelector('div')
const button = document.querySelector('button')

const html = document.querySelector('html')

button.addEventListener('click', openWindow)

function openWindow() {
  div.classList.remove('invisible')
}

html.onkeydown = function (event) {
  if (event.key === 'Escape') {
    div.classList.toggle('invisible')
  }
}
