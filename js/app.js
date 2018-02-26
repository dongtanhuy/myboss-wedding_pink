//document.documentElement.style.overflowX = 'hidden'; 


(function($) {
    "use strict";


    //parallax
    $('.parallax-window').parallax();
    //countdown
    $('#countdown').countdown({
        showYears: true
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
            target: '.navbar-fixed-top'
        })
        // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    //fitvid
    $(".entry-content").fitVids();
    //lightbox 
    $('.swipebox').swipebox();
    // fullscreen image slider
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            //speed: 3000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
            speed: 3000,
            timeout: 5000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 0
        }
    });
    //imagegallery
    $('#basicExample').justifiedGallery({
        rowHeight : 250,
        lastRow : 'justify',
        margins : 0
    });



    //Navigation Menu Slider
    $('#nav-expander').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });




})(jQuery);
