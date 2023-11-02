const nvabar = document.querySelector('.navbar')
const mobilenavbar = document.querySelector('.navbar__mobile')
const button = document.querySelector('.burguer')

button.addEventListener('click', function (){
    mobilenavbar.classList.toggle('active')
})

window.addEventListener('scroll', function () {
    if(this.window.pageYOffset > 0) return nvabar.classList.add('active')
    return nvabar.classList.remove('active')
})

