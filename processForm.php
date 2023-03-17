<?php

$name = $_POST["name"];
$phone = filter_input(INPUT_POST, "name", FILTER_VALIDATE_INT); 
$email = $_POST["email"];
$message = $_POST["message"];

var_dump($name, $phone, $email, $message);

?>