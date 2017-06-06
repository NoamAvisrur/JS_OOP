<?php

$user_first_name = filter_var($_POST['first_name'], FILTER_SANITIZE_STRING);
$user_last_name = filter_var($_POST['last_name'], FILTER_SANITIZE_STRING);
$user_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

$user = $user_first_name . " " . $user_last_name . " " . $user_email;

file_put_contents("log.txt", $user, FILE_APPEND);
