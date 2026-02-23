let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const navbar = document.querySelector('.bar')


const enableDarkmode = () => {
    document.body.classList.add ('darkmode')
    localStorage.setItem('darkmode', 'active')

}

const disableDarkmode = () => {
    document.body.classList.remove ('darkmode')
    localStorage.setItem('darkmode', 'null')

}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

