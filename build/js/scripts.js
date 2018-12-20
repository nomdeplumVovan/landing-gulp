

 function classToggle (){
  var element = document.getElementById('closeMenu');
  element.classList.toggle('nav__mobile'); 
}
// function classToggle() {
//   this.classList.toggle('closed');
//   this.classList.toggle('open');
// }

// document.querySelector('#closeMenu').addEventListener('click', classToggle);
document.querySelector('#closed').addEventListener('click', classToggle);
document.querySelector('#open').addEventListener('click', classToggle);


