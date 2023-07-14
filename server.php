<?php

session_start();
if (!isset($_SESSION["user"])){

  header("Location: signin.html");

}

include 'connection.php';

function Validate_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }


if (mysqli_connect_errno()) {
//echo "Failed to connect to MySQL: " . mysqli_connect_error();
exit();
}

// ------------------------------------------- getting user information ----------------------------------------

if (isset($_POST["users"])){

  $query = "SELECT * FROM user";

  $result = mysqli_query($connection,$query);

    $JSON_Array = array();
    $record = array();

    while($row = mysqli_fetch_array($result)){

        $sub_array = array();

        $sub_array['id'] = $row['id'];
        $sub_array['name'] = $row['name'];
        $sub_array['email'] = $row['email'];
        $sub_array['username'] = $row['username'];
        $sub_array['password'] = $row['password'];
        $sub_array['role'] = $row['role'];
        

        $JSON_Array[] = $sub_array;

    }

    echo json_encode($JSON_Array);



}

// ------------------------------------------- updating user --------------------------------------------------------

if(isset($_POST['update'])){


  $id = $_POST["id"];
  $name = $_POST["name"];
  $email = $_POST["email"];
  $username = $_POST["username"];
  $role = $_POST["role"];
  $password = $_POST["password"];

  $name = Validate_input($name);
  $email = Validate_input($email);
  $username = Validate_input($username);
  $role = Validate_input($role);
  $password = Validate_input($password);

  
  $query = "UPDATE user SET name='$name',username='$username',email='$email',role='$role', password = '$password'
   WHERE id = $id";


  $response = array();


  if (mysqli_query($connection,$query)){

      
      $response['success'] = 1;


  }else{

      $response['success'] = 0;

  }



  echo json_encode($response);


}


//------------------------------------------------- adding user -----------------------------------------------------


// Registration
if (isset($_POST['add'])){

  $name = $_POST["name"];
  $email = $_POST["email"];
  $username = $_POST["username"];
  $role = $_POST["role"];
  $password = $_POST["password"];
  

  if(empty($name) || empty($email) || empty($username)|| empty($role)){

      echo json_encode(['status'=>'error',"message"=>"Some values are misssing, fill form correctly"]);

  } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){


      echo json_encode(['status'=>'error',"message"=>"Invalid Email Address !"]);



  }  else if (!preg_match("/^[a-zA-Z-' ]*$/",$name) || !preg_match("/^[a-zA-Z-' ]*$/",$name)  || !preg_match("/^[a-zA-Z-' ]*$/",$name)) {


      echo json_encode(['status'=>'error',"message"=>"Only letters and white space allowed in Names field"]);
      //$nameErr = "Only letters and white space allowed";

  }  else {

      $name = Validate_input($name);
      $email = Validate_input($email);
      $username = Validate_input($username);
      $role = Validate_input($role);
      $password = Validate_input($password);


      $query = "INSERT INTO user(name, username, email, password, role) VALUES 
      ('$name','$username','$email', '$password', '$role')";


          $response = array();

          if(mysqli_query($connection,$query)){

              $last_id = mysqli_insert_id($connection);

              $response["success"] = 1;
              $response["last_id"] = $last_id;

          } else{

              $response["success"] = 0;
              $response["message"] = mysqli_error($connection);

          };


          echo json_encode($response);



  };

  

}

//-----------------------------------------------------------------------------------------------------------------

//------------------------------------------ delete information ------------------------------------------


if(isset($_POST['delete'])){


  $id = $_POST["id"];
  
  $query = "DELETE FROM user WHERE id ='$id' ";

  $response = array();


  if (mysqli_query($connection,$query)){

      
      $response['success'] = 1;


  }else{

      $response['success'] = 0;

  }



  echo json_encode($response);


}



?>