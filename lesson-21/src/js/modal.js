$(document).ready(function() {
 var button = $('#button');
 var modal = $('#modal');
 var close = $('#close');

 
 button.on('click', function() {
 modal.addClass('modal_active')
 });

 close.on('click', function() {
   modal.removeClass('modal_active')
 }); 



var button_2 = $('#offer__button');
var modal_2 = $('#second-modal');  
var close_2 = $('#good_close')
 
 button_2.on('click', function() {
 modal_2.addClass('second-modal_active')
 });

 close_2.on('click', function() {
   modal_2.removeClass('second-modal_active')
 });
 
});


  $('#offer__button').prop('disabled', true);
  $('input[type="text"]').keyup(function() {
     if($(this).val() != '') {
      $('#offer__button').prop('disabled', true);
     }
   $('input[type="tel"]').keyup(function() {
     if($(this).val() != '') {
       $('#offer__button').prop('disabled', false)
     }
   });  
  });

 