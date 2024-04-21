// Hamburer menu and profile section links
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
const toggle = document.querySelectorAll('.toggle');
const linkedin = document.querySelector('.linkedin');
const github = document.querySelector('.github');

toggle.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    });
});

linkedin.addEventListener('click', () => window.open('https://www.linkedin.com/in/neelim-s-borah-40481126a/', '_blank'));
github.addEventListener('click', () => window.open('https://github.com/Neil-9352'));

// Dark mode Light mode theme switch
const themeButtonDesktop = document.getElementById('theme-switch-desktop');
const themeButtonMobile = document.getElementById('theme-switch-mobile');
const body = document.body;
let theme = localStorage.getItem('theme');

if(theme) {
    body.classList.add(theme);
}

themeButtonDesktop.onclick = () => {
    theme = body.classList.contains('light') ? 'light' : 'dark';

    if(theme === 'light') {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }

    else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeButtonMobile.onclick = () => {
    theme = body.classList.contains('light') ? 'light' : 'dark';

    if(theme === 'light') {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }

    else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// scrolling offset
const navLinks = document.querySelectorAll("#desktop-navbar a");

navLinks.forEach(link => {
    link.addEventListener('click', element => {
        element.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.getElementById("desktop-navbar").offsetHeight;
        const offsetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetPosition
        });
    });
});

// Project Links
const proj1Github = document.querySelector('.project-1-github');
const live1Github = document.querySelector('.live-demo-1');
const proj2Github = document.querySelector('.project-2-github');
const live2Github = document.querySelector('.live-demo-2');
const proj3Github = document.querySelector('.project-3-github');
const live3Github = document.querySelector('.live-demo-3');

proj1Github.addEventListener('click', () => window.open('https://github.com/Neil-9352/PRODIGY_WD_01', '_blank'));
proj2Github.addEventListener('click', () => window.open('https://github.com/Neil-9352/PRODIGY_WD_02', '_blank'));
proj3Github.addEventListener('click', () => window.open('https://github.com/Neil-9352/PRODIGY_WD_03', '_blank'));

live1Github.addEventListener('click', () => window.open('https://neil-9352.github.io/PRODIGY_WD_01/public/', '_blank'));
live2Github.addEventListener('click', () => window.open('https://neil-9352.github.io/PRODIGY_WD_02/public/', '_blank'));
live3Github.addEventListener('click', () => window.open('https://neil-9352.github.io/PRODIGY_WD_03/public/', '_blank'));