const bar = document.querySelector('.menubar');
const item = document.querySelector('.header-item');

bar.addEventListener('click', () => {
    bar.classList.toggle('activo');
    item.classList.toggle('activo');
})