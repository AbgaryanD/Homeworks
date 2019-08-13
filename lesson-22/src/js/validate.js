$('#brif-form').validate({
  rules: {
    userphone: "required",
    username: {
      required: true,
      minlength: 2
    },
  },
  messages: {
    username: {
      required: "Укажите ваше имя",
      minlength: jQuery.validator.format("Имя не может состоять из одного символа!")
    },
    userphone: "Укажите ваш номер"
  },
  errorClass: "invalid"
});

