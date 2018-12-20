window.onload

function openMenu() {

  var element = document.getElementById('closeMenu');
  element.classList.add('nav__mobile');
}

function closeMenu() {
  
  var element = document.getElementById('closeMenu');
  element.classList.remove('nav__mobile');
}

function toggleMenu(){
   
  var element = document.getElementById('closeMenu');
  element.classList.toggle('nav__mobile');
}

// document.querySelector('closed').addEventListener('click', classToggle);
// document.querySelector('open').addEventListener('click', classToggle);