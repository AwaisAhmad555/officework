<?php

include 'connection.php';


$query = 'SELECT * FROM cvtable';


$result = mysqli_query($connection, $query);

$information[] = array();


if (mysqli_num_rows($result) > 0) {
  // output data of each row
  
  while($row = mysqli_fetch_array($result)) {
    
    $information[] = $row;
    
  }
} else {

}

mysqli_close($connection);


$length = count($information);



// Search field filter

if (isset($_POST["submit"]) && $_POST["search"] != NULL){

    //error_reporting(E_ALL ^ E_WARNING); 
    //echo '<script> alert('.$information[2][6].'); </script>';

    unset($information[0]);
    $new = array_filter($information, function ($var) {
        

        return ($var[1] == $_POST["search"]); 

    
    });

    
    $information = $new;

    $length = count($information)+1;

    //echo $length;




}



?>