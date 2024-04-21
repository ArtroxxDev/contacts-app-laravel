const navbar = document.querySelector(".navbar");
const welcome = document.querySelector(".welcome");
const navbarToggle = document.querySelector("#navbarSupportedContent");

const resizeBackgroundImg = () => {
    const height = window.innerHeight - navbar.clientHeight;
    welcome.style.height = `${height}px`; // Corrección aquí
};

navbarToggle.ontransitionend = resizeBackgroundImg;
navbarToggle.ontransitionstart = resizeBackgroundImg; // Corrección aquí
window.onresize = resizeBackgroundImg;
window.onload = resizeBackgroundImg;
document.querySelector('main').classList.remove('py-4');
