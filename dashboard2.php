<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">


</head>
<body>

<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item active"><a href="#" class="nav-link px-2 text-white">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Add new user</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Edit user role</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Enter new CV</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Search CV</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Edit CV record</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-warning">Search</button>
        </div>
      </div>
    </div>
  </header>


  

<div class="d-flex flex-row">
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Dashboard</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Add new User
        </a>
      </li>

      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Edit User role
        </a>
      </li>

      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Enter New CV
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Search CV
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Edit CV Record
        </a>
      </li>
    </ul>
    <hr>

    

  </div>

  

  
  <?php include 'connection.php';?>

  <?php include 'getinformation.php';?>

  <div class="container">






      <div class="d-flex flex-row align-items-center justify-content-between m-5">
      <h1>Admin</h1> 


      
      
      <!-- Search Field form -->

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" method="post" action="dashboard.php">

      <div class="row">
        <div class="col-sm">
          <input type="search" class="form-control form-control-dark" 
          placeholder="Search..." aria-label="Search" name="search">
        </div>

        
        
        <div class="col-sm">
          <button type="submit" class="btn btn-light" name="submit" value="submit">Search</button>
        </div>
      </div>

        </form>

        

</div>


  <!-------------------------------------------------------------------------------------------------------->

                                      <!-------------main buttons-------------->

      <div class="container m-5 w-75" align="center">

        <div class="row m-5">

          <div class="col-sm">
          <a href="addrecord.php"><button type="button" class="btn btn-primary p-5">
          <i class="fa fa-book" style="font-size:20px;" aria-hidden="true">Add New User</i></button>
          </a></div>

          <div class="col-sm">
          <a href="editrecord.php"><button type="button" class="btn btn-success p-5">
            <i class="fa fa-pencil-square-o" style="font-size:20px;" aria-hidden="true">Edit User Role</i></button>
          </a></div>
          
        </div>

        <div class="row m-5">

          <div class="col-sm">
              <a href="manageroles.php" id="edit-roles-link"><button type="button" class="btn btn-danger p-5" id="edit-roles-btn">
              <i class="fa fa-users" style="font-size:20px;" aria-hidden="true">Enter new CV</i></button>
          </a></div>

            <div class="col-sm">
            <button type="button" class="btn btn-dark p-5">
            <i class="fa fa-tasks" style="font-size:20px;" aria-hidden="true">Search CV</i></button>
            </div>

        </div>


        <div class="row m-5">

          <div class="col-sm">
          <a href="searchrecord.php"><button type="button" class="btn btn-warning p-5">
          <i class="fa fa-search" style="font-size:20px;" aria-hidden="true">Edit CV Record</i></button>
          </a></div>
          
        </div>
      </div>

  <br>
  <br>



        <!-- cv informations from server -->

        <?php 

          //for ($i=1;$i<$length;$i++){

            foreach($information as $i=>$value){

              if(empty($information[$i])){

                
              }else 
              
              {
            

        ?>

        <div class="d-flex justify-content-between my-2 mx-5 border border-dark w-75">

          <div class="container">

              
                    <h3 class="m-2"> Name : <?php echo $information[$i][1]; ?></h3>
                  
              
                <div class="d-flex flex-row m-2">
                  
                    <h6> Email :</h6>

                    <h6 class="mx-1 text-primary"> <?php echo $information[$i][2]; ?> <!-- abc@xyz.com --> </h6>
                  
                    <h6 class="ms-5"> CNIC :</h6>

                    <h6 class="mx-1 text-primary"> <?php echo $information[$i][3]; ?><!--xxxxx xxxxxxx x--> </h6>
                  
                </div>



                <div class="d-flex flex-row m-2">
                  
                    <h6> Phone : </h6>

                    <h6 class="mx-1  text-primary"> <?php echo $information[$i][4]; ?> <!-- +92 xxx xxxxxxx --> </h6>
                  
                    <h6 class="ms-5"> Interview Date : </h6>

                    <h6 class="mx-1  text-primary"> <?php echo $information[$i][5]; ?> <!-- --/--/---- --> </h6>
                  
                </div>


                <div class="d-flex flex-row m-2">
                  
                    <h6> Comments : </h6>

                    <h6 class="mx-1  text-primary"> <?php echo $information[$i][7]; ?> <!-- comments --> </h6>
                  
                  
                </div>


                
          </div>

          <div class="container w-25">
            <img src="user.png" class="img-thumbnail border-0">

            <h6 class="text-center my-1 text-danger"> <?php echo $information[$i][6]; ?> <!-- Status --> </h6>
          </div>

        
        </div>

        <?php

            }};

        ?>

        <!-- END -->

    </div>

</div>




    
</body>
</html>