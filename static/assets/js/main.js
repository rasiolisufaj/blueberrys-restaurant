(function () {
  "use strict";

  // Welcome Popup
  function myFunction() {
    let isOpen = false;
    if (isOpen == false) {
        setTimeout(function () {
          document.getElementById("WelcomePopupSection").style.display = "none";
          document.getElementById("main").style.display = "block";
        }, 2500);
        document.getElementById("WelcomePopupSection").style.display = "flex";
        document.getElementById("main").style.display = "none";
    }
  }

  var x = window.matchMedia("(max-width: 500px)");
  myFunction(x); // Call listener function at run time
  // x.addListener(myFunction); // Attach listener function on state changes

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollTo", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollTo = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollTo
   */
  on(
    "click",
    ".scrollTo",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollTo(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollTo(window.location.hash);
      }
    }
  });

  /**
   * Home type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
  // swipper
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });
  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let GalleryContainer = select(".Gallery-container");
    if (GalleryContainer) {
      let GalleryIsotope = new Isotope(GalleryContainer, {
        itemSelector: ".Gallery-item",
      });

      let GalleryFilters = select("#Gallery-flters li", true);

      on(
        "click",
        "#Gallery-flters li",
        function (e) {
          e.preventDefault();
          GalleryFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          GalleryIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          GalleryIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Gallery details slider
   */
  new Swiper(".Gallery-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Read More
   */
  let readMoreButton = document.getElementById("readMoreButton");
  readMoreButton.addEventListener("click", function (e) {
    e.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreText");
    var aboutUsDescription = document.getElementById("aboutUsDescription");
    var upicon = document.getElementById("aboutUsArrowUp");
    var downicon = document.getElementById("aboutUsArrowDown");
    var aboutContainer = document.getElementById("about");
    // let height = window.innerHeight ;
    if (screen.width >= 800) {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        aboutUsDescription.style.height = "343px";
        downicon.style.display = "inline";
        upicon.style.display = "none";
        aboutUsDescription.style.transition = "height .1s ease";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        aboutUsDescription.style.height = "700px";
        downicon.style.display = "none";
        upicon.style.display = "inline";
        aboutUsDescription.style.transition = "height .1s ease";
      }
    } else {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        aboutUsDescription.style.height = "343px";
        downicon.style.display = "inline";
        upicon.style.display = "none";
        aboutUsDescription.style.transition = "height .1s ease";
        aboutContainer.style.removeProperty("height");
        aboutUsDescription.style.bottom = "0";
        // aboutContainer.style.height = "919px";
        // aboutContainer.scrollTo(0, 100000000000000000000000);
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        aboutUsDescription.style.height = "950px";
        downicon.style.display = "none";
        upicon.style.display = "inline";
        aboutUsDescription.style.transition = "height .1s ease";
        aboutContainer.style.height = "1500px";
        // aboutUsDescription.style.bottom = "auto";
      }
    }
  });
  /**
   * Gallery isotope and filter
   */
  window.addEventListener("load", () => {
    let GalleryContainer = select(".Gallery-container");
    if (GalleryContainer) {
      let GalleryIsotope = new Isotope(GalleryContainer, {
        itemSelector: ".Gallery-item",
      });

      let GalleryFilters = select("#Gallery-flters li", true);

      on(
        "click",
        "#Gallery-flters li",
        function (e) {
          e.preventDefault();
          GalleryFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          GalleryIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          GalleryIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate Gallery lightbox
   */
  const GalleryLightbox = GLightbox({
    selector: ".Gallery-lightbox",
  });

  /**
   * Gallery details slider
   */
  new Swiper(".Gallery-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
})();
