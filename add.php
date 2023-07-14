<?php


include 'connection.php';


if (isset($_POST['add'])){


    $name = $_POST["name"];
    $email = $_POST["name"];
    $password = $_POST["password"];
    $role = $_POST["role"];


    $query = "INSERT INTO user(name, email, password, role) VALUES ('$name','$email','$password','$role')";

    if (mysqli_query($connection, $query)) {
        //echo "New record created successfully";

        <?php header("Location: adduser.php?message=1"); ?>

    } else {
        //echo "Error: " . $query . "<br>" . mysqli_error($connection);
    }
    
    mysqli_close($connection);


}






?>