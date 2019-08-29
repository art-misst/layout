              
    // WOW анимация
    wow = new WOW({
        mobile: false
    });
    wow.init();

    // Модальное окно
    $('.header-contacts__button').on("click", function(){
        $('.overlay').show(500);
    });
    $('.popup-close').on("click", function(){
        $('.overlay').hide(500);
    });

    
    // Яндеск карты
    ymaps.ready(function () {

    const map = document.getElementById('map');

        const myMap = new ymaps.Map('map', {
                center: [54.752656, 56.002053],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Добрый картон',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/map_icon.png',
                // Размеры метки.
                iconImageSize: [60, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-50, -30]
            });
    
        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });



