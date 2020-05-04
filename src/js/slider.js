import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
  var containersSlider = document.querySelectorAll('.slider-target');
  var slidersArr = [];

  var mySwiper;

  window.addEventListener("resize", resize);


  function resize() {  
    if (window.innerWidth < 768) {
      initSwiper();
    } else {
      destroySwiper();
    }
  };

  function initSwiper() {
    for (var i = 0; i < containersSlider.length; i++) {
      var paginationSlider = document.createElement('div');
      paginationSlider.classList.add('swiper-pagination');
      
      var listSlider = containersSlider[i].querySelector('.slider-target__list');
      var itemsSlider = listSlider.querySelectorAll('.slider-target__item');
      
      if (!containersSlider[i].classList.contains('swiper-container')) {
        
        containersSlider[i].appendChild(paginationSlider);

        listSlider.classList.add('swiper-wrapper');
        containersSlider[i].classList.add('swiper-container');

        for (var j = 0; j < itemsSlider.length; j++) {
          itemsSlider[j].classList.add('swiper-slide');
        }

        mySwiper = new Swiper(containersSlider[i], {
          // Default parameters 
          direction: 'horizontal',
          loop: false,
          slidesPerView: 'auto',
          loop: 'true',
      
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            paginationClickable: true,
          },
        });
      }
      slidersArr.push(mySwiper);
    }
  }

  function destroySwiper() {
  
    for(var i = 0; i < containersSlider.length; i++) {
      
      var paginationSlider = containersSlider[i].querySelector('.swiper-pagination');
      var listSlider = containersSlider[i].querySelector('.slider-target__list');
      var itemsSlider = listSlider.querySelectorAll('.slider-target__item');

      if (containersSlider[i].classList.contains('swiper-container')) {
        slidersArr[i].destroy();
        containersSlider[i].removeChild(paginationSlider);
        listSlider.classList.remove('swiper-wrapper');
        containersSlider[i].classList.remove('swiper-container');
  
        for (var j = 0; j < itemsSlider.length; j++) {
          itemsSlider[j].classList.remove('swiper-slide');
        }
      }
    }
  }

  resize(); 
});