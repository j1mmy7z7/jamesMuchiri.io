function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let darkmode = localStorage.getItem('dark-mode')

const enableDarkmode = () => {
  document.body.classList.add('dark-mode')
  localStorage.setItem('dark-mode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('dark-mode')
  localStorage.setItem('dark-mode', null)
}

if(darkmode === 'active') enableDarkmode()

const themebtn = document.getElementById('theme')
themebtn.addEventListener("click", () => {
  darkmode = localStorage.getItem('dark-mode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
