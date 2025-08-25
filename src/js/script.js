// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const toTop = document.querySelector('#totop');

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
       
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}


// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});