
   // Тот слайдер, который показывается в текущий момент
   let slideIndex = 1,
   // Каждый слайд - фото, картинки
       slides = document.querySelectorAll('.reviews-item'),
           // Навигация вперед - стрелка
       prev = document.querySelector('.reviews__arrow_left'),
           // Навигация назад - стрелка
       next = document.querySelector('.reviews__arrow_right');


        // Функция показа слайдов 
       showSlides(slideIndex);
      
    // Функция показа слайдов 
   function showSlides(n) {
           // n - номер слайдера, если больше общего количества, то возвращаемся в начало 
       if (n > slides.length) {
           slideIndex = 1;
       }   // Если мы листаем назад, то возвращаем предыдущий слайдер
       if (n < 1) {
           slideIndex = slides.length;
       }

        // берем массив со слайдами, и перебираем их отключая
       slides.forEach((item) => {
           item.classList.remove('active-slide');
           item.style.display = 'none';
       });
        // Начали нумерацию с 0 и показали нужный слайдер из переменной
       slides[slideIndex - 1].classList.add('active-slide');
       slides[slideIndex - 1].style.display = 'flex';
   }

       // Функция увеличивающая параметр slideIndex 
   function plusSlides(n) {
           // В аргумент идет индекс, далее он увеличивается на 1 и вызывает функцию с новым параметром
       showSlides(slideIndex += n);
   }

       // Уменьшаем слайд на 1
   prev.addEventListener('click', function() {
       plusSlides(-1);
   });
       // Увеличиваем слайд на 1
   next.addEventListener('click', function() {
       plusSlides(1);
   });


// Слайдер на работы
   // Тот слайдер, который показывается в текущий момент
   let slideIndex1 = 1,
   // Каждый слайд - фото, картинки
       slides1 = document.querySelectorAll('.projects-item'),
           // Навигация вперед - стрелка
       prev1 = document.querySelector('.projects__arrow_left'),
           // Навигация назад - стрелка
       next1 = document.querySelector('.projects__arrow_right');

 
    // Функция показа слайдов 
    showSlides1(slideIndex1);
      
    // Функция показа слайдов 
   function showSlides1(n) {
           // n - номер слайдера, если больше общего количества, то возвращаемся в начало 
       if (n > slides.length) {
           slideIndex1 = 1;
       }   // Если мы листаем назад, то возвращаем предыдущий слайдер
       if (n < 1) {
           slideIndex1 = slides1.length;
       }

        // берем массив со слайдами, и перебираем их отключая
       slides1.forEach((item) => {
           item.classList.remove('active-slide');
           item.style.display = 'none';
       });
        // Начали нумерацию с 0 и показали нужный слайдер из переменной
       slides1[slideIndex1 - 1].classList.add('active-slide');
       slides1[slideIndex1 - 1].style.display = 'flex';
   }

       // Функция увеличивающая параметр slideIndex 
   function plusSlides1(n) {
           // В аргумент идет индекс, далее он увеличивается на 1 и вызывает функцию с новым параметром
       showSlides1(slideIndex1 += n);
   }

       // Уменьшаем слайд на 1
   prev1.addEventListener('click', function() {
       plusSlides1(-1);
   });
       // Увеличиваем слайд на 1
   next1.addEventListener('click', function() {
       plusSlides1(1);
});


if (document.documentElement.clientWidth < 932) {

// Слайдер на работы
   // Тот слайдер, который показывается в текущий момент
   let slideIndex2 = 1,
   // Каждый слайд - фото, картинки
       slides2 = document.querySelectorAll('.rates-block'),
           // Навигация вперед - стрелка
       prev2 = document.querySelector('.rates__arrow_left'),
           // Навигация назад - стрелка
       next2 = document.querySelector('.rates__arrow_right');

 
    // Функция показа слайдов 
    showSlides2(slideIndex2);
      
    // Функция показа слайдов 
   function showSlides2(n) {
           // n - номер слайдера, если больше общего количества, то возвращаемся в начало 
       if (n > slides2.length) {
           slideIndex2 = 1;
       }   // Если мы листаем назад, то возвращаем предыдущий слайдер
       if (n < 1) {
           slideIndex2 = slides1.length;
       }

        // берем массив со слайдами, и перебираем их отключая
       slides2.forEach((item) => {
           item.classList.remove('active-slide');
           item.style.display = 'none';
       });
        // Начали нумерацию с 0 и показали нужный слайдер из переменной
       slides2[slideIndex2 - 1].classList.add('active-slide');
       slides2[slideIndex2 - 1].style.display = 'flex';
   }

       // Функция увеличивающая параметр slideIndex 
   function plusSlides2(n) {
           // В аргумент идет индекс, далее он увеличивается на 1 и вызывает функцию с новым параметром
       showSlides2(slideIndex2 += n);
   }

       // Уменьшаем слайд на 1
   prev2.addEventListener('click', function() {
       plusSlides2(-1);
   });
       // Увеличиваем слайд на 1
   next2.addEventListener('click', function() {
       plusSlides2(1);
    });

}


let fullBtn = document.getElementById('full'),
    fullClose = document.querySelector('.modal-block__close'),
    fullModal = document.querySelector('.overlay-full');


fullBtn.addEventListener('click', () => {

    fullModal.style.display = 'block';
    if (document.documentElement.clientWidth > 932) {
        document.body.style.overflow = 'hidden';
    }

});

fullClose.addEventListener('click', () => {

    fullModal.style.display = 'none';
    
    if (document.documentElement.clientWidth > 932) {
        document.body.style.overflow = '';
    }
    
});

let menu = document.querySelector('.menu-fixed'), 
    menuMobile = document.querySelector('.mobile-menu'),
    list = document.querySelector('.mobile-menu__list');

    menuMobile.addEventListener('click', () => {
    list.classList.toggle('active');
});


// Стрелка скролла вверх -> появление при прокрутке
const arrowTop = document.querySelector('.scroll-up');

arrowTop.onclick = function() {
   window.scrollTo(pageXOffset, 0);
   // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
   arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
   menu.hidden = (pageYOffset < document.documentElement.clientHeight);
});


    // Модальное окно по ссылкам вверху и внизу
    // Само модальное окно
let popap = document.getElementById('projectModal'),
    comersionModal = document.getElementById('comersionModal'),

        // Кнопка вызова модального окна
    btn = document.getElementsByClassName('btn')[1],
    btn1 = document.getElementsByClassName('btn')[0],
    btn2 = document.getElementsByClassName('btn')[2],
    btn3 = document.getElementsByClassName('btn')[3],
    btn4 = document.getElementsByClassName('btn')[4],
    btn5 = document.getElementsByClassName('btn')[6],
        // Кнопка закрыть
    popapClose = document.getElementById('projectModalClose'),
    comersionModalClose = document.getElementById('comersionModalClose'); // Закрытие окна
  
    function openComersionModal() {
        comersionModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } // Закрытие окна
  
    function openModal() {
        popap.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } // Закрытие окна
  
    function closeModal() {
      popap.style.display = 'none';
      comersionModal.style.display = 'none';
      document.body.style.overflow = '';
    } // Заказать звонок вверху сайта
  
  
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        openComersionModal();
    });

    btn1.addEventListener('click', function (event) {
      event.preventDefault();
      openModal();
    });
  
    btn2.addEventListener('click', function (event) {
      event.preventDefault();
      openModal();
    });

    btn3.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
      });

    btn4.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
    });

    btn5.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
    });
  
    window.addEventListener('click', function () {
      if (event.target == popap || event.target == comersionModal) {
        closeModal();
    }
}); // Закрыть модалку
  
    popapClose.addEventListener('click', closeModal);
    comersionModalClose.addEventListener('click', closeModal);



// Секция с вопросами 

let links = document.querySelectorAll('.questions-block__link');

let boxDescr = document.getElementsByClassName('questions-block__descr');


    function showBox(i) {
        boxDescr[i].classList.toggle('active');
    } // Закрытие окна

    links[0].addEventListener('click', function (event) {
        event.preventDefault();
        showBox(0);
    });
    links[1].addEventListener('click', function (event) {
        event.preventDefault();
        showBox(1);
    });
    links[2].addEventListener('click', function (event) {
        event.preventDefault();
        showBox(2);
    });
    links[3].addEventListener('click', function (event) {
        event.preventDefault();
        showBox(3);
    });


