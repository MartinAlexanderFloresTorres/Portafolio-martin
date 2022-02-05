const hamburger = document.querySelector('.header .header-nav .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .header-nav .nav-list ul');
const menu_item = document.querySelectorAll('.header .header-nav .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',  () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if( scroll_position > 100){
        header.style.backgroundColor = "#000000";
    }
    else{
        header.style.backgroundColor = "rgba(31, 30, 30, 0.158)";
    }
})
menu_item.forEach(item => {
    item.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})