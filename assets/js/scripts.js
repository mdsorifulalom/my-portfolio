
(function($) {
  'use strict';

  // Menu Fixed
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 20) {
        $('.header-area').addClass('menu_fixed');
    } else {
        $('.header-area').removeClass('menu_fixed');
    }
  });
  
  // Mobile Menu
  $("#offcanvasExample a").click(function(){
    $('.offcanvas').offcanvas('hide');
  });
           
  // ScrollTop
  $('body').materialScrollTop();

  // one page nav
  $("#nav").onePageNav({
    currentClass: "current",
  });

  // slick-slider
  $('.slick-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// counterUp
$('.counterup').counterUp ({
    delay: 100,
    time: 3000
});

// Typed Text
var typed = new Typed('.element', {
  strings: ["Social Media Manager","App and Website Designer","Banner Designer","Logo Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  startDelay: 100,
  loop: true,
});

// Aos Scroll 
AOS.init();

// Theme Switcher 
const input = document.querySelector(".theme-switcher-label input");

input.addEventListener("change", (e) => {
		
if (e.target.checked) {
    document.body.setAttribute("data-theme", "light");
} else {
		document.body.setAttribute("data-theme", "dark");
}
let themebuttons = document.querySelectorAll('.theme-buttons');
});

const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', function(){
this.classList.toggle('fasfa-moon'); 
});

// Portfolio Fancybox
var mixer = mixitup(".portfolio-list");
$(".gallery a").attr("data-fancybox", "mygallery"), $(".gallery a").each(function() {
      $(this).attr("data-caption", $(this).find("img").attr("alt")), $(this).attr("title", $(this).find("img").attr("alt"))
}), 
$(".gallery a").fancybox(), $("[data-fancybox]").fancybox({
  selector: ".mix:visible a",
    loop: !0,
    hash: !0,
    transitionEffect: "slide",
    clickContent: function(t, e) {
          return "image" === t.type && "next"
    }
});

// preloader
var isMobile=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), preloader=$("#preloader");
isMobile?preloader.remove(): (setTimeout(function() {
preloader.addClass("preloaded");
}
, 1000), setTimeout(function() {
preloader.remove();
}
, 2e3));
})(jQuery);


  

  



   