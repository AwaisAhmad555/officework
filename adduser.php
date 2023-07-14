<?php

include 'connection.php';
//session_start();

/*if (!isset($_SESSION["user"])){

  header("Location: login.php");
} */

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-------------------------------------- Adding style sheets -------------------------------------------->
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">



</head>
<body>

<!----------------------------------------------------------------------------------------------------------->

<main class="d-flex flex-row">
  

  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " style="width: 280px;">
    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Dashboard</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto " id="menu-list">
      <li class="nav-item">
        <a href="home.php" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="addrecord.php" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Add New Record
        </a>
      </li>
      <li>
        <a href="editrecord.php" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Edit Existing Record
        </a>
      </li>

      <li>
        <a href="searchrecord.php" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Search Book
        </a>
      </li>

      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Manage Roles
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="login.php" class="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        
        <strong></strong>
      </a>
      
    </div>
  </div>

  <div class="b-example-divider"></div>

  <!----------------------------------------------------------------------------------------------------------->

  

  <div class="w-100">


    <!--<h1 align="center">This is Home Page</div>

        </br>

    <h1 align="center"><?php //print_r($_SESSION["user"]);?></div> -->

    <nav class="navbar navbar-dark bg-dark w-100 navbar-expand-lg px-5">
    <!-- Navbar content -->

    

    

    <a class="navbar-brand" href="#">User</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id = "top-menu-bar">
        <li class="nav-item active">
          <a class="nav-link" href="home.php">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="addrecord.php">Add Record</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="editrecord.php">Edit Record</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="searchrecord.php">Search Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Edit Roles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Settings</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 m-5">

        <div class="row">

          <div class="col-sm-9">
            <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </div><div class="col-sm-2">
            <button class="btn btn-success btn-sm my-2 my-sm-0" type="submit">Search</button>
            </div>
        </div>
      </form>
    </div>

    <!-- Navbar content -->

    </nav>


    <!-------------------------------------------------------------------------------------------------------->

                                      <!-------------Form-------------->


      </br></br>
      <div class="row mx-5"><h1>Dashboard/</h1><h5 id="page-title">Add New User</h5></div>
            <form class="m-5 w-75" id="submission_form" enctype="multipart/form-data"> 
                    
                    <div class="form-row">   <!-- Row 1 -->
                    <div class="row">
                        <div class="form-group col-md-6">
                                <label for="username">Name</label> <!-- Name -->
                                <input type="text" class="form-control form-control-sm" name="username" id="username" placeholder="Name">
                        </div>
                        <div class="form-group col-md-6">
                                <label for="email">Email</label>  <!-- Email -->
                                <input type="text" class="form-control form-control-sm" name="email" id="email" placeholder="Email">
                        </div>
                    </div>
                    </div>


                    <div class="form-row mt-4">   <!-- Row 2 -->
                    <div class="row">
                        <div class="form-group col-md-6">
                                <label for="password">Password</label>   <!-- password -->
                                <input type="text" class="form-control form-control-sm" name="password" id="password" placeholder="Password">
                        </div>
                        <div class="form-group col-md-6">
                                <label for="confirmpassword">Confirm Password</label>   <!-- password -->
                                <input type="text" class="form-control form-control-sm" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password">
                        </div>
                    </div>
                    </div>


                    <div class="form-row mt-4">   

                    
                        <div class="row mt-4">     <!-- Row 3 -->
                            
                            <div class="form-group col-md-6">
                                    <label for="userrole">User Role</label>  <!-- User role -->
                                    <input type="text" class="form-control form-control-sm" name="userrole" id="userrole" placeholder="User Role">
                            </div>
                        </div>

                    </div>


                    <div class="form-row mt-4"> <!-- Row 4 -->

                            <div class="row">

                                <div class="form-group col-md-6">
                                    <label for="date">Date</label>  <!-- Date of joining -->
                                    <input type="date" class="form-control form-control-sm  mt-1" name="date" id="date" placeholder="date">
                                </div>


                               

                            </div>
                    </div>


                    
                    
                    <div class="row mt-5">

                            

                            <div class = "col-sm-2">
                                
                                <button type="button" class="btn btn-success btn-sm px-3" id="add-btn">Add User</button>

                            </div>

                    
                        </div>

                        <!-- sending login variable to server for login operations -->
                    <input type="hidden" name="session-field" id="session-field" value = ''>
                    <input type="hidden" name="category-field" id="category-field" value = ''>

                </form>
    
    



    </div>

</main>
  <!----------------------------------------------------------------------------------------------------------->




    
</body>
</html>

<?php

//session_unset();

// destroy the session
//session_destroy();


?>