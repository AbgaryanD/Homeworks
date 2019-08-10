$(window).on('load', function() {
  $(".loader").fadeOut(1000, function() {
      $('body').removeClass('loading');
  });
});