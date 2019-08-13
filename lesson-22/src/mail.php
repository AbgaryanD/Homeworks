<?php 

$data = $_POST;
echo $data['username'];

$to = "mr.nout.2003@mail.ru"; 
$subject = "Ремонт Квартир"; 
$name = trim($_POST["username"]); 
$phone = trim($_POST["userphone"]); 
$message = "Имя: $name \nТелефон: $phone"; 

$pagetitle = "Новая заявку с сайта \"$subject\""; 
mail($to, $pagetitle, $message);
