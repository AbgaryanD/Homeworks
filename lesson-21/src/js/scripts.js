// Обработка и отправка формы через технологию Ajax
$('#offer-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.good-success').html(data + ', спасибо за заявку, скоро мы вам перезвоним.');
    },
  });
  $( '#offer-form' ).each(function(){
    this.reset();
});
});

$(document).ready(function(){
   $('.slider').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
   });
});

var lastChanged;
lastChanged = $('.step')

$(lastChanged).css("margin-bottom", "17px");
$(lastChanged).next().css("margin-bottom", "26px");
lastChanged = $(lastChanged).next();
$(lastChanged).next().css("margin-bottom", "24px");
lastChanged = $(lastChanged).next();
$(lastChanged).next().css("margin-bottom", "25px");
lastChanged = $(lastChanged).next();
$(lastChanged).next().css("margin-bottom", "0px");

