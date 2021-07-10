$(document).ready(function(){
  $(".header-burger").click(function(){
     $( ".header-items" ).slideToggle();
     $(".header-burger").toggleClass("header-burger--active");
});
});
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    }
  },
});
var headerScroll = $('.header');
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    headerScroll.addClass('show');
  } else {
    headerScroll.removeClass('show');
  }
});
$( document ).ready(function(){
  $( ".header-burger" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
    $( "header-items" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
  });
});