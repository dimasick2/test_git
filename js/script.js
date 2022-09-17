"use strict"
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length>0){
  menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click", onMenu);
  });
  function onMenu(e){
    // const menulink
    //функция плавной прокрутки
  }
}

//меню бургер
const iconMenu = document.querySelector('.menu_icon');
if(iconMenu){
  const menuBody = document.querySelector('.menu_body');
  iconMenu.addEventListener("click", function(e){
  menuBody.classList.toggle('_active');
  iconMenu.classList.toggle('_active');

  });

}
//modal window
let modal = document.querySelector('.modal');
let card_login = document.getElementById('card_login');
let btn_close = document.querySelector('.btn_close');
card_login.onclick = function(){
  modal.classList.remove('close_modal');
}
btn_close.onclick = function(){
  modal.classList.add('close_modal');
}
