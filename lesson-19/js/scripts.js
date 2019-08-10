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

