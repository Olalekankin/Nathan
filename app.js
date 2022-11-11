// menu button toggle

const menuBtn = document.querySelector('.menu-btn');
const container = document.querySelector('.container');
const navLinks = document.querySelector('.nav-links')
const navBar = document.getElementsByTagName('nav')
const menuClicked = false

const menuToggle = ()=>{
    menuBtn.addEventListener('click', function(){
        if(menuClicked == false){
            navLinks.classList.toggle('show');
            container.classList.toggle('preventscroll')
        }
        console.log('clicked')
    })
}

menuToggle();

