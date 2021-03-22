const textHover = document.querySelector('.productive-text-link');
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger-animation')
    navList.classList.toggle('nav-active')
})

textHover.addEventListener('mouseover', function() {
    textHover.classList.add('hover');
})
textHover.addEventListener('mouseleave', function() {
    textHover.classList.remove('hover');
})

// var burgerMenu = document.querySelector('.burger-menu');
// var navList = document.querySelector('.nav-list');
// var navLinks = document.querySelectorAll('.nav-link');
// const section = document.querySelector('.our-creations-container');


// // Burger menu toggle and toggle animation
// burgerMenu.addEventListener('click', function () {
//     navList.classList.toggle('nav-active');
//     burgerMenu.classList.toggle('burger-menu-ani');

//     navLinks.forEach((link, index) => {
//         if (link.style.animation) {
//             link.style.animation = ""
//         } else {
//             link.style.animation = `navLinksFade 0.3s forwards ${index / 5}s `
//         }
//     });
// });



