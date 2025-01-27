$(document).ready(function () {
  // عند التمرير
  $(window).on("scroll", function () {
    // التحقق إذا كان التمرير قد تجاوز 50 بيكسل (يمكنك تغيير القيمة)
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });

  $(".owl-suggestions").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    navText: [
      '<i class="fas fa-chevron-right"></i>', // Font Awesome right arrow
      '<i class="fas fa-chevron-left"></i>', // Font Awesome left arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    speed: 500,
    loop: true,
    cssMode: true,
    navigation: true,
    pagination: true,
    scrollbar: true,
    mouseWheel: true,
    paginationClickable: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
