<?php


include 'connection.php';


function Validate_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }


if (empty($_POST["rememberme"])){


    $_POST["rememberme"] = 0;


}




if(isset($_POST["submit"])){


    
    

    $email = Validate_input(Validate_input(Validate_input(Validate_input(Validate_input(Validate_input($_POST["email"]))))));
    $password = Validate_input(Validate_input(Validate_input(Validate_input(Validate_input(Validate_input($_POST["password"]))))));

    $rememberme = Validate_input(Validate_input(Validate_input(Validate_input(Validate_input(Validate_input($_POST["rememberme"]))))));

    $query = "select * from user where email = '$email' and password = '$password'";


    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) > 0) {
        
        while($row = mysqli_fetch_array($result)) {

            //echo "Login Successfull ! </br></br>";
            //echo "role: " . $row["role"];
            // sending session information on further pages 
            
            session_start();

            session_regenerate_id();

            $_SESSION["user"] = $row['role'];

            if ($row['role'] == "admin"){
              
              header("Location: dashboard.html");

            }else{

              header("Location: form.html");

            }


          }
        
      } else {
        echo "Login Failed";
      }


}






?>