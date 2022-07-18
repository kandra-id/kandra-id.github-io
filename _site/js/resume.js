(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  
  // Using Youtube Profile Picture 
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    method: 'GET',
    dataType: 'json',
    data: {
      part: 'snippet',
      id: 'UCaL1L-np8fBWIW4jPE7IwcQ',
      key: 'AIzaSyCzENFDxuID-bKQgX_NocDQPYNtWp7uHjE'
    },
    success: function(data){
      let profileImgUrl = data.items[0].snippet.thumbnails.high.url;
        $(".img-profile").attr({
            src: profileImgUrl,
            alt: 'Kandra Wilko'
        });
    }
  });
})(jQuery); // End of use strict
