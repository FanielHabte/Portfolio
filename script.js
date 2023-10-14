            



document.addEventListener('DOMContentLoaded', function() {
               // import Swup from 'swup';
    const mainMenu = document.querySelector('.navigations');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');  
    // const swup = new Swup();

    

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show() {
            mainMenu.style.display = 'flex';
            mainMenu.style.top = '0';

    }
    function close() {
            mainMenu.style.top = "-100%";
    }
});