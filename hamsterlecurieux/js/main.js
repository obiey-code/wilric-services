;
(function($) {
    "use strict";

    $(document).ready(function() {

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        /*---------------------------
            Service carousel
        ---------------------------*/
        var $ServiceCarousel = $('.service-carousel');
        if ($ServiceCarousel.length > 0) {
            $ServiceCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                smartSpeed: 2000,
                margin: 30,
                autoplayHoverPause: true,
                dots: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }

        /*---------------------------
            Hero Slider
        ---------------------------*/
        var $headerCarousel = $('.hero-slider-two');
        if ($headerCarousel.length > 0) {
            $headerCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoplayTimeout: 3000,
                smartSpeed: 2000,
                autoplayHoverPause: true,
                margin: 0,
                dots: true,
                nav: true,
                mouseover: true,
                navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    460: {
                        items: 1,
                        nav: false,
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }


    });


    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

    /* Mobile Menu
    * ---------------------------------------------------- */ 
    var clMobileMenu = function() {

        var navWrap = $('.header-nav-wrap'),
            closeNavWrap = navWrap.find('.header-overlay-close'),
            menuToggle = $('.header-toggle-menu'),
            siteBody = $('body');
        
        menuToggle.on('click', function(e) {
            var $this = $(this);

            e.preventDefault();
            e.stopPropagation();
            siteBody.addClass('nav-wrap-is-visible');
        });

        closeNavWrap.on('click', function(e) {            
            var $this = $(this);
            
            e.preventDefault();
            e.stopPropagation();
        
            if(siteBody.hasClass('nav-wrap-is-visible')) {
                siteBody.removeClass('nav-wrap-is-visible');
            }
        });

        // open (or close) submenu items in mobile view menu. 
        // close all the other open submenu items.
        $('.header-nav .has-children').children('a').on('click', function (e) {
            e.preventDefault();

            if ($(".close-mobile-menu").is(":visible") == true) {

                $(this).toggleClass('sub-menu-is-open')
                    .next('ul')
                    .slideToggle(200)
                    .end()
                    .parent('.has-children')
                    .siblings('.has-children')
                    .children('a')
                    .removeClass('sub-menu-is-open')
                    .next('ul')
                    .slideUp(200);

            }
        });

    };

   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
    
        clMobileMenu();

    })();


})(jQuery);