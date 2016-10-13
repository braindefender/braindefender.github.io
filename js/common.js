$(function() {

	var owl = $(".slider").owlCarousel({
    loop: true,
    nav: false,
    items: 5,
    autoplay: true,
    responsiveClass: true,
    responsive:{
        0:{
          items:3
        },
        525:{
          items:5
        },
        768:{
          items:3
        },
        910:{
          items:5
        },
        1200:{
          items:3
        },
        1410:{
          items:5
        }
    }
  });

});
