const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// jQuery( document ).ready( function($) {
//     $( window ).scroll( function () {
//         if ( $(document).scrollTop() > 120 ) {
//             $('.navbar').addClass('animated fadeInDown');
//         } else {
//             $('.navbar').removeClass('fadeInDown');
//         }
//     });
// });

// document.addEventListener('mousemove', move);
// function move(e){
//     this.querySelectorAll('.move').forEach(layer =>{
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/120
//         const y = (window.innerHeight - e.pageY*speed)/120

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }

gsap.from('.navbar-brand, .navbar-toggler', {opacity: 0, duration: 1, delay: 0.5, y: 10})
gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 0.5, y: 30, stagger: 0.2,})
gsap.from('.rgs-title', {opacity: 0, duration: 1, delay:1.2, y: 30})
gsap.from('.rgs-sub-title', {opacity: 0, duration: 1, delay:1.2, y: 30})
gsap.from('.rgs-description', {opacity: 0, duration: 1, delay:1.3, y: 30})
gsap.from('section', {opacity: 0, duration: 1, delay:0.5, y: 30})
gsap.from('.rgs-btn', {opacity: 0, duration: 1, delay:1.5, y: 30})
gsap.from('.rgs-img', {opacity: 0, duration: 1, delay:1, y: 30})