

const menu = document.querySelector('.promo__menu');
const btn = document.querySelector('.promo__menu_btn');


btn.addEventListener('click', function() {
    menu.classList.toggle('active');
});


const menuHidden = document.querySelector('.menu-hidden');

window.addEventListener('scroll', function() {
    menuHidden.hidden = (pageYOffset < document.documentElement.clientHeight);
});



// Слайдер на отзывах
$(function() {

    $('.reviews__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

});

