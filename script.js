const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Add event listener to close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar") && document.body.classList.contains("show-mobile-menu")) {
        document.body.classList.remove("show-mobile-menu");
    }
});

// Add click event listeners to all nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Close mobile menu when a link is clicked
        document.body.classList.remove('show-mobile-menu');
    });
});

// Initialize swiper 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spacebetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});

// Initialize Swiper for testimonials
const testimonialSwiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});