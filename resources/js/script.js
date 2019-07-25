$(document).ready(function() {
    
    /* For the sticky navigation */
    
    $('.js--section-features').waypoint(function(direction){
         if (direction == "down"){
            $('nav').addClass('sticky');
         }
            else {
                $('nav').removeClass('sticky');
            }
                   }, {
      offset: '100px;'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 400)})

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 400)})
    
});

/* NAVIGATION SCROLL */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    
    
  });

    /* ANIMATIONS*/

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '60%'
        });



/*mobile navigation*/

$('.js--nav-icon').click(function() {
    var nav = $('.js--name-nav');
    var icon = $('.js--nav-icon ion-icon')
    
    nav.slideToggle(200);
    if (icon.hasClass('cross')){
        icon.addClass('icon ion-md-close-circle');
        icon.removeClass('cross');
    }
    else {
        icon.addClass('cross');
        icon.removeClass('icon ion-md-close-circle');
        
    }
 
});


                            




