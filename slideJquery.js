$(document).ready(function () {
  $(".slick").slick({
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (3 seconds)
    dots: false, // Show navigation dots
    arrows: false, // Hide next and previous buttons
    responsive: [
      {
        breakpoint: 768, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
        },
      },
    ],
  });
});
