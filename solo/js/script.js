/*========================================
                Preloader
==========================================*/

//quando l'intero sito è stato caricato
$(window).on('load', function () {

    //gli elementi puntati vengono tolti
    //con il metodo fadeOut
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*========================================
                Team
==========================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*========================================
                Progress Bars
==========================================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*========================================
                Responsive Tabs
==========================================*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/*========================================
                Portfolio
==========================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        //this si riferisce al bottone premuto
        //con attr() restituisce l'attributo data-filter
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*========================================
                Magnifier
==========================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*========================================
                Testimonials
==========================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*========================================
                Stats
==========================================*/
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*========================================
                Clients
==========================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/*========================================
                Google Map
==========================================*/
$(window).on('load', function () {

    /* Map Variables */
    var addressString = 'v. Onesto Scavino 10, San Marino';
    var myLatlng = {
        lat: 43.989590,
        lng: 12.506140
    };

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    //2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    //3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    //4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter();

    });
});

/*========================================
                Navigation
==========================================*/

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on page load
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            // Show white nav
            //alert("Your scroll position is greater than 50 pixles. Your scroll position = " + $(window).scrollTop());
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            //alert("Your scroll position is less than 50 pixles. Your scroll position = " + $(window).scrollTop());
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/* Smooth Scrolling */
$(function () {

    $("a.smooth-scroll").click(function (event) {

        /* previene il comportamento di default dell'oggetto linkato */
        event.preventDefault();

        // get section id like #about, #services, #work, #team and etc.
        /* this si riferisce al link che viene cliccato */
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

/*========================================
                Mobile Menu
==========================================*/
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});