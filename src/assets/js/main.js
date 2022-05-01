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
const swiper = new Swiper('.offer__slider', {
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

