const toggleButton = document.querySelector('.toggle-button')
const navLinks = document.querySelector('.nav-links')
const navButton = document.querySelectorAll('.button')

// ca fonctionne
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    navLinks.classList.toggle('active')
    navButton.classList.toggle('active')
})  

// a tester 
// toggleButton.addEventListener('click', () => {
//     navLinks.classList.toggle("close")
// })


// a tester
// navButton.addEventListener('click', () => {
//     navButton.classList.remove("active")
//     toggleButton.classList.remove("active")
// })






























