'use strict';

  let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };


  const all_tabs = document.querySelectorAll('.tab');
  const all_contents = document.querySelectorAll('.tab_content');

  all_tabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      all_tabs.forEach(tab => {tab.classList.remove('active')});
      tab.classList.add('active');

      all_contents.forEach(tab_content => {tab_content.classList.remove('active')});
      all_contents[index].classList.add('active');
    });
  });


  const swiper = new Swiper('.header-swiper',{
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    grabCursor: true,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'cube',
    cubeEffect:{
      slideShadows: false,
      shadow: false,
    },
    // breakpoints:{
    //   320:{slidesPerview: 1, slidesPerGroup: 1,},
    //   480:{slidesPerview: 2, slidesPerGroup: 2,},
    //   990:{slidesPerview: 3, slidesPerGroup: 3,},
    // },
  });

  const presentation_swiper = new Swiper('.presentation-swiper',{
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    watchOverflow: true,
    speed: 800,
    effect: 'fade',
  });

  const smi_swiper = new Swiper('.smi-swiper',{
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination:{
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
      // type: 'progressbar',
      type: 'fraction',
    },
    speed: 800,
    loop: true,
    loopedSlides: 2,
    slidesPerView: 3.2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    centeredSlides: true,

  });


  ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: '3000',
    delay: '500',
    easing: 'ease-out',
  });
  ScrollReveal().reveal('.slider-images', { delay: 300, origin: 'top' });
  ScrollReveal().reveal('.slider-content .slider-content__title, .slider-content__text, .slider-content__btn', { delay: 100, origin: 'left', interval: 1000 });