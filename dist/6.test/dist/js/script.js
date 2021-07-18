$(document).ready(function() {
    $(".btn.rus_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          enLang[i].style.position = "static";
          rusLang[i].style.position = "absolute";
          rusLang[i].style.top = "-9999px";
          rusLang[i].style.left = "-9999px";
        }
      });
      
      $(".btn.en_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          rusLang[i].style.position = "static";
          enLang[i].style.position = "absolute";
          enLang[i].style.top = "-9999px";
          enLang[i].style.left = "-9999px";
        }
      });


      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('[data-modal=order]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });
    
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__item'),
          hamburger = document.querySelector('.hamburger');
    
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
    
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
          })
      })
    });


});
