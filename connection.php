<?php

 $server = "localhost";
 $username = "root";
 $password = "";
 $database = "cv";

 $connection = mysqli_connect($server,$username,$password,$database);


 if (($connection) == TRUE){

    //echo "Connection Successful !";
 
}else {

    echo mysqli_error($connection);

}



?>