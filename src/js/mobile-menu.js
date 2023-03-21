




const openButton = document.querySelector('[type=button]')
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
  
    
openButton.addEventListener('click', openMobMenu);

function openMobMenu() {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');

   
  }

  mobileMenuRef.addEventListener ('click', onHide)     

  function onHide(){
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  }
  

// var express = require('express');
// var cleanUrls = require('clean-urls');

// var app = express();

// app.use(cleanUrls(['/app/**']));

// app.listen(3000, function () {
  
// });
  
  