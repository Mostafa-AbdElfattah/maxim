$(document).ready(function () {
  // first section menus functions
  $("#sectors-menu").click(function () {
    $(".business-sectors-menu").removeClass("hidden");
    $("#body").addClass("overflow-hidden");
  });
  $(".close-sectors-menu").click(function () {
    $(".business-sectors-menu").addClass("hidden");
    $("#body").removeClass("overflow-hidden");
  });

  $("#partners-menu").click(function () {
    $(".partners-menu").removeClass("hidden");
    $("#body").addClass("overflow-hidden");
  });
  $(".close-partners-menu").click(function () {
    $(".partners-menu").addClass("hidden");
    $("#body").removeClass("overflow-hidden");
  });

  // Latest Projects Carousel

  $("#latest-projects-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  });


  //News Carousel

  $('#news-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        1200:{
            items:3
        }
    }
});
});
