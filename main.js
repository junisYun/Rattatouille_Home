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
const body = document.querySelector('body');
body.addEventListener('wheel', (event) => {
    wheelEvent(event);
})
const wheelEvent = (event) => {
    if (window.scrollY < 100) {
        navbar.classList.remove('navbar--wheelDown');
        return;
    }
    if (event.deltaY < 0) {
        cnt++;
    } else {
        cnt = 0;
    }
    if (cnt < 5) {
        navbar.classList.add('navbar--wheelDown');
    } else {
        navbar.classList.remove('navbar--wheelDown');
    }
}

// go to top when click the sideNav
const sideNav = document.querySelector('.sideNav');
sideNav.addEventListener('click', () => {
    scrollIntoView('#home');
})


// show sideNav 
document.addEventListener('scroll', () => {
    if (window.scrollY > 687) {
        sideNav.style.opacity = 1;
        sideNav.style.pointerEvents = "auto";
    } else {
        sideNav.style.opacity = 0;
        sideNav.style.pointerEvents = "none";
    }
})

// adjust opacity of home background when scroll down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = `${1 - window.scrollY / homeHeight}`;
})

// scrollTo custom function
const scrollIntoView = (selector) => {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView(
        {
            behavior: "smooth"
        }
    );
}

const workBtnContainer = document.querySelector('.work__categories');
const workProjectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.category || e.target.parentNode.dataset.category;
    if (filter === undefined) return;
    workProjectContainer.classList.add('animation-out');

    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.category) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        workProjectContainer.classList.remove('animation-out');
    }, 300);

})

