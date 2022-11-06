// menu button toggle

const menuBtn = document.querySelector('.menu-btn');
const container = document.querySelector('.container');
const navLinks = document.querySelector('.nav-links')
const navBar = document.getElementsByTagName('nav')
console.log(navLinks)
const menuClicked = false

function menuToggle(){
    menuBtn.addEventListener('click', function(){
        if(menuClicked == false){
            navLinks.classList.toggle('show');
            container.classList.toggle('preventscroll')
        }
    })
}

menuToggle();