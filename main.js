'use strict'
// make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
});

// handle scrolling when tapping Contact button
const query = document.querySelector('.home__contact');
query.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
})

// disappear navbar when wheel go up 
let cnt = 0;
document.querySelector('body').addEventListener('wheel', (event) => {
    // if (event.deltaY < 0 && window.scrollY > 100) {
    //     navbar.classList.add('navbar--wheelDown');
    // } else {
    //     navbar.classList.remove('navbar--wheelDown');
    // }
    if (window.scrollY < 100) {
        navbar.classList.remove('navbar--wheelDown');
        return;
    }
    if (event.deltaY < 0) {
        cnt++;
    } else {
        cnt = 0;
    }
    if (cnt > 5) {
        navbar.classList.add('navbar--wheelDown');
    } else {
        navbar.classList.remove('navbar--wheelDown');
    }
})


const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = `${1 - window.scrollY / homeHeight}`;
})