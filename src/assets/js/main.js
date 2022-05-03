// Показ и скрытие меню
$('.menu').click(function(){
  $('.sub__menu').css('transform','translateY(0%)');
  $('body').css('overflow','hidden');

});
function closeMenu(){
    $('.sub__menu').css('transform','translateY(-120%)');
    $('body').css('overflow','visible');
}
$('.menu-close').click(function(){
  closeMenu();

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


const luchGallery = new Swiper('.luch-gallery', {
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,

  breakpoints: {
      
    768: {
      spaceBetween: 20,
    },
  },



    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
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



  let options = {
    //zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    //displayFog: 'block', //Значение по умолчанию flex
    //displayModal: 'flex', //Значение по умолчанию block
    showModalAnimationName: 'fadeInBottom', 
    closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['modal__close'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeIn',
    closeFogAnimationName: 'fadeOut',
    showFogAnimationDuration: 300,
    closeFogAnimationDuration: 300,

    documentScrolled: false, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}

let btnsReserve = document.querySelectorAll('.btn-reserve');


btnsReserve.forEach(  (btn) => {
  btn.onclick = function(event){
    event.preventDefault();
    
    closeMenu();

    let modal = new easyModal('modal-reserve', options);
  }
} )

let btnsContact = document.querySelectorAll('.btn-contact');

btnsContact.forEach(  (btn) => {
  btn.onclick = function(event){
    event.preventDefault();
    
    closeMenu();

    let modal = new easyModal('modal-contact', options);
  }
} )

let menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach( (link) => {
  link.onclick = function(){
    closeMenu();
  }
})



var dateEl = document.getElementById('date');
var timeEl = document.getElementById('time');

//document.getElementById('date-output').innerHTML = dateEl.type === 'date';
//document.getElementById('time-output').innerHTML = timeEl.type === 'time';

let reservForm = document.querySelector('.reserve-form');

reservForm.onsubmit = function(event){
  event.preventDefault();
  
  let data_body = "name=" +  this.querySelector('input[name="name"]').value;
  data_body = data_body + "phone=" +  this.querySelector('input[name="phone"]').value;
  data_body = data_body + "&date=" +  this.querySelector('input[name="date"]').value;
  data_body = data_body + "&time=" +  this.querySelector('input[name="time"]').value;
  data_body = data_body + "&msg=" +  this.querySelector('input[name="time"]').value;

  fetch("your-script-name.php", { 
    method: "POST",
    body: data_body,   
    headers:{"content-type": "application/x-www-form-urlencoded"} 
    })
    
  
  


  .then( (response) => {
          if (response.status !== 200) {           
              return Promise.reject();
              
          }   
        
          location.href = '/thanks.html'
          
          return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка'));
}


let contactForm = document.querySelector('.contact-form');

contactForm.onsubmit = function(event){
  event.preventDefault();
  
  let data_body = "name=" +  this.querySelector('input[name="name"]').value;
  data_body = data_body + "phone=" +  this.querySelector('input[name="phone"]').value;
  data_body = data_body + "&msg=" +  this.querySelector('input[name="time"]').value;

  fetch("your-script-name.php", { 
    method: "POST",
    body: data_body,   
    headers:{"content-type": "application/x-www-form-urlencoded"} 
    })
    
  
  


  .then( (response) => {
          if (response.status !== 200) {           
              return Promise.reject();
              
          }   
        
          location.href = '/thanks.html'
          
          return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка'));
}




let phoneMasks = document.querySelectorAll("input[name='phone']");

phoneMasks.forEach( (input) => {
    IMask(
        input, {
          mask: '+{7}(000)000-00-00'
      });
})