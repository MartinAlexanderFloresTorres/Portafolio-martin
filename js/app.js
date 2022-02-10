const hamburger = document.querySelector('.header .header-nav .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .header-nav .nav-list ul');
const menu_item = document.querySelectorAll('.header .header-nav .nav-list ul li a');
const header = document.querySelector('.header.container');


// Agregamos una funcion para cambiar el tema de la pagina
const tema_iconos = document.querySelector('.tema-iconos');
const body = document.querySelector('body');

tema_iconos.addEventListener('click', () => {
    tema_iconos.classList.toggle('active');
    body.classList.toggle('claro');

    if (!body.classList.contains('claro')) {
        localStorage.setItem('modo', 'oscuro')
        header.style.backgroundColor = "#000";
    } else {
        localStorage.setItem('modo', 'claro');
        header.style.backgroundColor = "#4070F4";
    }    
})

let getmodo = localStorage.getItem('modo');

    if (getmodo === ('claro')) {
        body.classList.toggle('claro');
        tema_iconos.classList.toggle('active');
    } else {
        body.classList.remove('claro');
    }


// Agregamos una funcion para mostrar el menu de la pagina
hamburger.addEventListener('click',  () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

//--------------------------------------------------
menu_item.forEach(item => {
    item.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})