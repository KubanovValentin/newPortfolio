"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });
});