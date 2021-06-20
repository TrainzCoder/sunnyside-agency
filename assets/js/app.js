const navbar = document.querySelector('nav');
const menuToggle = document.querySelector('.toggle');

menuToggle.addEventListener('click',() => {
  navbar.classList.toggle('show');
})

function changeNavbarStyle() {
  if(window.pageYOffset > 15) {
    navbar.classList.add('scrolled');
  }
  else {
    navbar.classList.remove('scrolled');
  }
}; 
window.addEventListener("scroll", changeNavbarStyle);