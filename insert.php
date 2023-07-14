<?php


session_start();
if (!isset($_SESSION["user"])){

    header("Location: signin.html");

}


include "connection.php";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["namefield"];
    $email = $_POST["email"];
    $cnic = $_POST["cnic"];
    $phone = $_POST["phone"];
    $interviewdate = date($_POST["interviewdate"]);
    $status = $_POST["status"];
    $comment = $_POST["comment"];
    $appliedfor = $_POST["appliedfor"];

    
    $query = "SELECT * FROM cvtable WHERE cnic = '$cnic' OR phone = '$phone' OR email = '$email' ";


    $result = mysqli_query($connection, $query);
    
        
    if(mysqli_num_rows($result) > 0){

        echo "Record already exists";

    }else {

        $query = "INSERT INTO cvtable(name, email, cnic, appliedfor, phone, interviewdate, status, comment) VALUES 
        ('$name','$email','$cnic', '$appliedfor','$phone' ,'$interviewdate','$status','$comment')";

        if (mysqli_query($connection, $query)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($connection);
        }
        
        mysqli_close($connection);

    }
        
    

    
    

}


?>