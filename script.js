var btn = document.querySelector('.nav-btn');
var navList = document.querySelector('.nav-list');

btn.addEventListener('click', function(){
  navList.classList.toggle('nav-list-active');
});

var navListBtn = document.querySelector('.nav-list-btn');
var vanListCont = document.querySelector('.nav-list-cont');

navListBtn.addEventListener('click', function() {
  vanListCont.classList.toggle('nav-list-cont-activ');
});