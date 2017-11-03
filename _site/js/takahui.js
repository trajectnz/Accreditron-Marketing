(function($) {
    "use strict"; // Start of use strict

    // Add smooth scrolling on all links inside the navbar
    $("a.page-scroll").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

      } // End if

    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


        if ($(window).width() < 768) {
            var $nav = $(".navbar");
            $nav.addClass("navbar-light bg-light");
        };

    // change nav color
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());

        if ($(window).width() > 768) {
            $(".logo.large.dark").toggle( $(this).scrollTop() < $nav.height() );
            $(".logo.large.light").toggle( $(this).scrollTop() > $nav.height() );
        }
      });
    });

})(jQuery); // End of use strict
