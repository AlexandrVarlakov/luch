// Показ и скрытие меню
$('.menu').click(function(){
  $('.sub__menu').css('transform','translateY(0%)');
  $('body').css('overflow','hidden');

});

$('.menu-close').click(function(){
  $('.sub__menu').css('transform','translateY(-120%)');
  $('body').css('overflow','visible');

});


window.onscroll = function () { // отслеживаем скролл
  var z = document.body.scrollTop; // Получаем высоту передвигаемого сролла
  var pixels = 300; // Указываем количество пикселей
  if (z > pixels){
      console.log("Прокручено на 200px") // Для демонстрации вывод сообщения. У себя меняете на выполнение Вашей функции.
  }
}



// Слайдеры
const swiperOffers = new Swiper('.offer__slider', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 20,
    navigation: {
      nextEl: '.offer__next',
      prevEl: '.offer__prev',
    },
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
});


const swiper_about = new Swiper('.about__swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});




const swiper_gal = new Swiper('.gallery__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


const swiper_events__mob = new Swiper('.events__mob', {
  slidesPerView: "1",
  spaceBetween: 30,
    navigation: {
      nextEl: '.events-button-next',
      prevEl: '.events-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const swiper_events__des = new Swiper('.events__des', {
  slidesPerView: "2",
  spaceBetween: 30,
    navigation: {
      nextEl: '.events-button-next',
      prevEl: '.events-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
})


let reviewSwiper = new Swiper('.review-swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 1000,
    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
  
    
})



const swiper__reviews = new Swiper('.reviews__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


const swiperEvents = new Swiper('.swiper-events', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  grid: {
    rows: 2,
  },
    navigation: {
      nextEl: '.events-next',
      prevEl: '.events-prev',
    },
    breakpoints: {
      
      600: {
        slidesPerView: 2,
          grid: {
              rows: 1,
          },
      }
  },
});






let includesSwiper = new Swiper('.includes-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1000,
    navigation: {
      nextEl: '.inc__next',
      prevEl: '.inc__prev',
    },
  
    breakpoints: {
      200: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 2,
        
      },
    }
});

let mapBlock = document.querySelector('#map');

if ( mapBlock ){
    ymaps.ready(init);
}



function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.823333, 37.441224],
        controls: [],
        zoom: 16
    }, {
        
    });

    


    
   
    
    
    
}



  $('.tooltip').tooltipster({
    
    animation: 'fade',
    delay: 200,
    theme: 'tooltipster-light',
    trigger: 'click',
    side: 'bottom'
  });
