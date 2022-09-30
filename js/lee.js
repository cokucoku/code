let nav=document.querySelector('.sidebar-button')
let mark=document.querySelector('.sidebar-mask')
nav.addEventListener('click',function () {
    document.body.classList.add('open')
})
mark.addEventListener('click',function () {
    document.body.classList.remove('open')
})