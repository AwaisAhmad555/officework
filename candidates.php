<?php


session_start();
if (!isset($_SESSION["user"])){

  header("Location: signin.html");
  
}

include 'connection.php';


if (isset($_POST["display"])){


    $query = "SELECT * FROM cvtable";

    $result = mysqli_query($connection,$query);

        $JSON_Array = array();

        while($row = mysqli_fetch_array($result)){

            $sub_array = array();

            $sub_array['id'] = $row['id'];
            $sub_array['name'] = $row['name'];
            $sub_array['email'] = $row['email'];
            $sub_array['cnic'] = $row['cnic'];
            $sub_array['phone'] = $row['phone'];
            $sub_array['appliedfor'] = $row['appliedfor'];
            $sub_array['interviewdate'] = $row['interviewdate'];
            $sub_array['status'] = $row['status'];
            $sub_array['comment'] = $row['comment'];
            

            $JSON_Array[] = $sub_array;

        }

        echo json_encode($JSON_Array);




}

//---------------------------------------------------------------------------------------------------------------


if (isset($_POST["update"])){

    $id = $_POST["id"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $cnic = $_POST["cnic"];
    $phone = $_POST["phone"];
    $interviewdate = date($_POST["interviewdate"]);
    $status = $_POST["status"];
    $appliedfor = $_POST["appliedfor"];
    $description = $_POST["description"];



    
  
  $query = "UPDATE cvtable SET name ='$name', email='$email', comment = '$description',
            cnic='$cnic', phone='$phone', appliedfor='$appliedfor',
             interviewdate='$interviewdate', status='$status' WHERE id = '$id' ";


  $response = array();


  if (mysqli_query($connection,$query)){

      
      $response['success'] = 1;


  }else{

      $response['success'] = 0;
      $response['error'] = mysqli_error($connection);

  }



  echo json_encode($response);
    
}


//---------------------------------------------------------------------------------------------------------------
if (isset($_POST["total"])){


    //first fetching total cvs

    $query = "SELECT COUNT(id) as totalcv FROM cvtable";

    $result = mysqli_query($connection,$query);

      $record = array();

      while($row = mysqli_fetch_array($result)){

          $record['totalcv'] = $row['totalcv'];


      }
      
    //first fetching total users

    $query1 = "SELECT COUNT(id) as totaluser FROM user";

    $result1 = mysqli_query($connection,$query1);


      while($row = mysqli_fetch_array($result1)){

          $record['totaluser'] = $row['totaluser'];


      }

  echo json_encode($record);


}


//-----------------------------------------------------------------------------------------------------------------

//------------------------------------------ delete information ------------------------------------------


if(isset($_POST['delete'])){


  $id = $_POST["id"];
  
  $query = "DELETE FROM cvtable WHERE id ='$id' ";

  $response = array();


  if (mysqli_query($connection,$query)){

      
      $response['success'] = 1;


  }else{

      $response['success'] = 0;

  }



  echo json_encode($response);


}






?>