function validateForms(form) {
    $(form).validate({
        rules: {
            phone: "required",
        },
        messages: {

            phone: "Пожалуйста, введите свой номер телефона",
            
        }
    });
}

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
  });
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.catalog-wrappar').find('div.catalog__content').removeClass('catalog__content_active').
      eq($(this).index()).addClass('catalog__content_active');
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

$('.button_mini').each(function(i) {
    $(this).on('click', function(e) {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
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
        });
    });
  
  });