
$(document).ready(function(){

    $('.carousel__inner').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false  
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        }); 
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // Модальные окна на кнопках Заказать консультацию
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn(800);
        $('body').css({overflow: 'hidden'});    
    });
    // Закрыть все окна
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut(800);
        $('body').css({overflow: 'auto'});
    });

    // На кнопках купить в каталоге
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn(800);
            $('body').css({overflow: 'hidden'});
        });
    });

    // Валидация форм
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format('Минимум {0} символа!')
                },
                phone: "Введите номер телеофна",
                email: {
                  required: "Введите свою почту",
                  email: "Такой почты не существует"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    // Отправка форм на майл
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    
    
    // Скролл вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});


