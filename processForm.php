<?php

$name = $_POST["name"];
$phone = $_POST["phone"]; 
$email = $_POST["email"];
$message = $_POST["message"];

$host = 'localhost';
$dbname = 'contactus_db';
$username = 'root';
$password = '';

$conn = mysqli_connect( hostname: $host, 
                        username: $username,
                        password: $password,
                        database: $dbname);

if(mysqli_connect_error()) {
    die("Connection failed: " .mysqli_connect_error());
}

$sql = "INSERT INTO contactus (name, phone_num, email, message) VALUE (?, ?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if (! mysqli_stmt_prepare($stmt, $sql)) {
    die( mysqli_error($conn));
}

mysqli_stmt_bind_param( $stmt, "siss",
                        $name,
                        $phone_num,
                        $email,
                        $message);

mysqli_stmt_execute($stmt);

echo "Send to database";

// header("Location: ./contact.html")
?>