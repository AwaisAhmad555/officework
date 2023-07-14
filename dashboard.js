//object_accessors for accessing user ids

const userid = {

    idvalue : null,
    rowIndexvalue : null,
    set set_userid(id) {
        this.idvalue = id;
    },
    set set_rowid(rowIndex) {
        this.rowIndexvalue = rowIndex;
    }

}


const userpasswordobject = {

    passwordvalue : null,

    set set_userpassword(password) {
        this.passwordvalue = password;
    },

    
}

//----------------------------------------------------------------------------------------------------------------




            // ------------------------------------ edit information ---------------------------------------

            function edit_information(id, rowIndex, password){

                //row_id = '#user-edit-btn-'+id;
                
                // assigning table current values to pop up model form for updation
    
                document.getElementById("namefield").value = document.getElementById('usertable').rows[rowIndex].cells[1].innerHTML;
                username = document.getElementById("username").value = document.getElementById('usertable').rows[rowIndex].cells[2].innerHTML;
                email = document.getElementById("useremail").value = document.getElementById('usertable').rows[rowIndex].cells[3].innerHTML;
                role = document.getElementById("role").value = document.getElementById('usertable').rows[rowIndex].cells[4].innerHTML;
    
                document.getElementById("userpassword").value = password;
                document.getElementById("edituser").style.display = "inline";
                document.getElementById("adduser").style.display = "none";

                //alert(password);
                
                userid.set_userid = id;
    
                userid.set_rowid = rowIndex;

    
    
                //alert(id)
                //alert(rowIndex);
    
                }
    
    
                // ------------------------------------ delete information ---------------------------------------
    
                function delete_information(id, rowIndex){
    
    
                //alert(id);
    
                row_id = '#user-delete-btn-'+id;
                /*name = document.getElementById("namefield").value;
                username = document.getElementById("username").value;
                email = document.getElementById("useremail").value;
                role = document.getElementById("role").value; */
    
                //alert(row_id + "\n" + name + "\n" + username + "\n" + email + "\n" +role);
                
                check = confirm("Are you sure to delete following user?");
    
                if(check == true){
    
                    delete_userrecord(id);
                    $(row_id).parent().parent().parent().parent().remove();
    
                }
                
    
    
    
                }


//----------------------------------------------------------------------------------------------------------------

    //--------------------------------------------- deleting user Record ----------------------------------------------

    // -----------------------------   delete user ------------------------------------


    function delete_userrecord(id){

        //sending id to server to delete record corresponding to the sent id

        $.ajax({
            url:"server.php",
            type:"POST",
            dataType:"json",
            data:{
    
                'delete':1,
                'id':id
    
            },
            success: function(response){
    
                var server_response = response.success;
    
                if(server_response == 1){
    
                    alert("Record deleted Successfully !");

    
                }else{

                    alert("Error !");

                };
    
    
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
    
        });

    };

    // --------------------------------------------------------------------------------------------


//------------------------------------------ Email Validation ----------------------------------------


function emailvalidation(value){


        
    document.getElementById("ValidUserEmail").style.display = "none";

    selectedvalue = value;
    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (pattern.test(selectedvalue)){

        document.getElementById("ValidUserEmail").style.display = "none";

        return true;

    } else {

        document.getElementById("ValidUserEmail").style.display = "block";

        return false;

    }

}


//------------------------------------------ Password Validation ----------------------------------------


function passwordvalidation(value){


        
    document.getElementById("ValidUserPassword").style.display = "none";

    //alert("validation");

    var selectedvalue = value;

    textlength = selectedvalue.length;

    if (textlength < 5){


        document.getElementById("ValidUserPassword").style.display = "block";
        document.getElementById("ValidUserPassword").innerHTML = "Password Should have atleast 5 Characters";

        return false;

    } else {

        return true;

    }

    if (selectedvalue == ""){

        document.getElementById("ValidUserPassword").style.display = "block";
        document.getElementById("ValidUserPassword").innerHTML = "Enter Valid Password";
        
        return false;

    } else {

        return true;

    }

}

//------------------------------------------ User Name Validation ----------------------------------------

function usernamevalidation(value){


    document.getElementById("Validusername").style.display = "none";

    var selectedvalue = value;

    textlength = selectedvalue.length;

    if (textlength < 5){


        document.getElementById("Validusername").style.display = "block";
        document.getElementById("Validusername").innerHTML = "Name Should have atleast 5 Characters";

        return false;

    } else {

        return true;

    }

    if (selectedvalue == ""){

        document.getElementById("Validusername").style.display = "block";
        document.getElementById("Validusername").innerHTML = "Enter Valid Name";
        
        return false;

    } else {

        return true;

    }


}

//------------------------------------------ Full Name Validation ----------------------------------------


function fullnamevalidation(value){


    document.getElementById("ValidFullName").style.display = "none";

    var selectedvalue = value;

    textlength = selectedvalue.length;

    if (textlength < 5){


        document.getElementById("ValidFullName").style.display = "block";
        document.getElementById("ValidFullName").innerHTML = "Name Should have atleast 5 Characters";

        return false;

    } else {

        return true;

    }

    if (selectedvalue == ""){

        document.getElementById("ValidfullName").style.display = "block";
        document.getElementById("ValidfullName").innerHTML = "Enter Valid Name";
        
        return false;

    } else {

        return true;

    }


}

//------------------------------------------ User Role Validation ----------------------------------------


function userrolevalidation(value){


    document.getElementById("Validuserrole").style.display = "none";

    var selectedvalue = value;
    

    if (selectedvalue == "--select--" || selectedvalue == ""){


        document.getElementById("Validuserrole").style.display = "block";
        //document.getElementById("Validuserrole").innerHTML = "Name Should have atleast 2 Characters";

        return false;

    } else {

        return true;

    }

    if (selectedvalue == ""){

        document.getElementById("Validuserrole").style.display = "block";
        document.getElementById("Validuserrole").innerHTML = "Enter Valid Name";
        
        return false;

    } else {

        return true;

    }


}


function validateform(){  

    check1 = userrolevalidation(document.getElementById("role").value);
    check2 = fullnamevalidation(document.getElementById("namefield").value);
    check3 = emailvalidation(document.getElementById("useremail").value);
    check4 = usernamevalidation(document.getElementById("username").value);
    check5 = passwordvalidation(document.getElementById("userpassword").value);
    
    

        if (check1 && check2 && check3 && check4 && check5){

            return true;

        } else {

            return false;
            
        }
     
            
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // --------------------------------- function to add server values in table--------------------------------------


    function adduserinformation(information){


        var table = document.getElementById("usertable");


        for (var i = 0; i < information.length; i++){

                var id = information[i][0];
                var row = table.insertRow(-1);

                var headerCell = document.createElement("th");

                headerCell.innerHTML = '<input type="checkbox">';
                row.appendChild(headerCell);

                //var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);

                //cell1.innerHTML = "0";
                cell2.innerHTML = information[i][1];
                cell3.innerHTML = information[i][2];
                cell4.innerHTML = information[i][3];
                cell5.innerHTML = information[i][4];
                cell6.innerHTML = '<div class="btn-group dropleft">'+
                                '<button class="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
        
                                '<i class="fa fa-ellipsis-v fa-lg"  style="font-size: 16px;" aria-hidden="true"></i>'+
                                '</button><div class="dropdown-menu" style="font-size: 14px;" aria-labelledby="dropdownMenuButton">'+
                                
                                '<button type="button" class="dropdown-item" ' +
                                'id="user-edit-btn-' +id+ '" onclick="edit_information(' +id+ ' , '+row.rowIndex+',\''+information[i][5]+'\')"'+
                                'data-toggle="modal" data-target="#exampleModalScrollable">Edit</button>'+

                                '<button type="button" class="dropdown-item" ' + 
                                'id="user-delete-btn-' +id+ '"onclick="delete_information(' +id+ ' , '+row.rowIndex+')">Delete</button>'
                                            +'</div></div>';

                cell6.style.textAlign = "center";

                
            }

    }

    // --------------------------------------------------------------------------------------------------------------


$(document).ready(function(){


    //alert("document loaded !");


    // ----------------------------------------- Form Validations ----------------------------------------------


    document.getElementById("role").addEventListener("change",function handleChange (event){

        userrolevalidation(event.target.value);
            
    });


    document.getElementById("namefield").addEventListener("change",function handleChange (event){

        fullnamevalidation(event.target.value);

    });


    document.getElementById("useremail").addEventListener("change",function handleChange (event){

        emailvalidation(event.target.value);

    });


    document.getElementById("username").addEventListener("change",function handleChange (event){

        usernamevalidation(event.target.value);
    
    });

    document.getElementById("userpassword").addEventListener("change",function handleChange (event){

        passwordvalidation(event.target.value);
    
    });

    // Calling AJAX request to get USERs information FROM RestFull API

    //////////////////////////////////////// Information display /////////////////////////////////////////////

    // server request for displaying record from database


    $.ajax({
        url:'server.php',
        type:'POST',
        dataType: 'json',
        data:{

            'users':1,

        },
        success: function(response){
            
            const complete_array = [];

            for (var i = 0; i < response.length; i++){

                var id = response[i].id;
                var name = response[i].name;
                var email = response[i].email;
                var username = response[i].username;
                var password = response[i].password;
                var role = response[i].role;

                const server_information = [id,name,username,email,role,password];

                //appending rows in array
                
                complete_array.push(server_information);

            }

            // function to add server values in table

            adduserinformation(complete_array);
            //alert(complete_array.length);

            
            document.getElementById("totaluser").innerHTML = complete_array.length;

            

        },
        error: function(jqXHR, textStatus, errorThrown){

            alert('Error: ' + textStatus + ' - ' + errorThrown);

        }
    });

    //---------------------------------------------------------------------------------------------------------------

    //--------------------------------------------- Updating user Record --------------------------------------------

    document.getElementById("edituser").addEventListener("click",function(){

        id = userid.idvalue;
        rowindex = userid.rowIndexvalue;
        
        
        value = validateform();

        if (value == true){

            confirm_response = confirm("Are You Sure to Edit following Information ?");

            if(confirm_response == true){


                name = document.getElementById("namefield").value;
                username = document.getElementById("username").value;
                email = document.getElementById("useremail").value;
                role = document.getElementById("role").value;

                password = document.getElementById("userpassword").value;

                //alert(name + "\n" + username + "\n" + email + "\n" + role);

                //------------------------------- AJAX Request to server -----------------------------//
                //------------------------------------------------------------------------------------//

                $.ajax({
                    url:'server.php',
                    type:'POST',
                    dataType: 'json',
                    data:{
                        
                        'update':1,
                        'id':id,
                        'name':name,
                        'role':role,
                        'email':email,
                        'username':username,
                        'password':password,
                        

                    },
                    success: function(response){
                        
                        //success event
                        var server_response = response.success;


                        if(server_response == 1){

                            alert("Information updated successfully!");


                            // updating web page table
                            document.getElementById('usertable').rows[rowindex].cells[1].innerHTML = name;
                            document.getElementById('usertable').rows[rowindex].cells[2].innerHTML = username;
                            document.getElementById('usertable').rows[rowindex].cells[3].innerHTML = email;
                            document.getElementById('usertable').rows[rowindex].cells[4].innerHTML = role;


                            // clearing input fields


                            document.getElementById("namefield").value = "";
                            username = document.getElementById("username").value = "";
                            email = document.getElementById("useremail").value = "";
                            role = document.getElementById("role").value = "";
                            document.getElementById("userpassword").value = "";


                            userid.set_userid = null;
    
                            userid.set_rowid = null;



                        }else{

                            alert("Updation Failed !");

                        };
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        alert('Error: ' + textStatus + ' - ' + errorThrown);
                    }
                });


                //------------------------------------------------------------------------------------//


            }


        };
        

    });


    //---------------------------------------------------------------------------------------------------------------

    //--------------------------------------------- Adding user Record ----------------------------------------------

    // -----------------------------   add user ------------------------------------


    document.getElementById("adduser").addEventListener("click",function(){

        value = validateform();

        if (value == true){


            confirm_response = confirm("Are You Sure to Add following User ?");

            if(confirm_response == true){


                name = document.getElementById("namefield").value;
                username = document.getElementById("username").value;
                email = document.getElementById("useremail").value;
                role = document.getElementById("role").value;

                password = document.getElementById("userpassword").value;

                //------------------------------- AJAX Request to server -----------------------------//
                //------------------------------------------------------------------------------------//

                $.ajax({
                    url:'server.php',
                    type:'POST',
                    dataType: 'json',
                    data:{
                        
                        'add':1,
                        'name':name,
                        'role':role,
                        'email':email,
                        'username':username,
                        'password':password,

                    },
                    success: function(response){
                        
                        //success event
                        var server_response = response.success;
                        var last_id = response.last_id;
                        
                        var id = last_id;

                        if(server_response == 1){

                            alert("Information updated successfully!");


                            // -------------------------- updating web page table ---------------------------

                            var table = document.getElementById("usertable");

                            var row_id = document.getElementById('usertable').rows.length;
                            var row = table.insertRow(-1);

                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);

                            
                            cell1.innerHTML = '<input type="checkbox">';
                            cell2.innerHTML = name;
                            cell3.innerHTML = username;
                            cell4.innerHTML = email;
                            cell5.innerHTML = role;
                            cell6.innerHTML = '<div class="btn-group dropleft">'+
                                            '<button class="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                    
                                            '<i class="fa fa-ellipsis-v fa-lg"  style="font-size: 16px;" aria-hidden="true"></i>'+
                                            '</button><div class="dropdown-menu" style="font-size: 14px;" aria-labelledby="dropdownMenuButton">'+
                                            
                                            '<button type="button" class="dropdown-item" ' +
                                            'id="user-edit-btn-' +id+ '" onclick="edit_information(' +id+ ' , '+row.rowIndex+')"'+
                                            'data-toggle="modal" data-target="#exampleModalScrollable">Edit</button>'+

                                            '<button type="button" class="dropdown-item" ' + 
                                            'id="user-delete-btn-' +id+ '"onclick="delete_information(' +id+ ' , '+row.rowIndex+')">Delete</button>'
                                                        +'</div></div>';

                            cell6.style.textAlign = "center";

                            // clearing input fields

                            document.getElementById("namefield").value = "";
                            username = document.getElementById("username").value = "";
                            email = document.getElementById("useremail").value = "";
                            role = document.getElementById("role").value = "";


                        }else{

                            alert("Registration Failed ! \n" + response.message);

                        };
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        alert('Error: ' + textStatus + ' - ' + errorThrown);
                    }
                });

                //------------------------------------------------------------------------------------//

            }

        }

    });


    // --------------------------------------------------------------------------------------------

    // close button of model form

    document.getElementById("closebtn").addEventListener("click",function(){

        document.getElementById("Validusername").style.display = "none";
        
        document.getElementById("ValidUserEmail").style.display = "none";

        
        document.getElementById("ValidFullName").style.display = "none";

        
        document.getElementById("Validuserrole").style.display = "none";


        document.getElementById("ValidUserPassword").style.display = "none";

    });

    // add user button
    document.getElementById("adduser1").addEventListener("click",function(){


        document.getElementById("adduser").style.display = "inline";
        document.getElementById("edituser").style.display = "none";


        document.getElementById("namefield").value = "";
        document.getElementById("username").value = "";
        document.getElementById("useremail").value = "";
        document.getElementById("role").value  = "";

        document.getElementById("userpassword").value  = "";

    });
    


    //------------------------------------------------------------------------------------------------------

    
    $.ajax({
                
        url:"candidates.php",
        type:"POST",
        dataType:"json",
        data:{

            'total':1,

        },
        success: function(response){
            

            //alert("response");

            var totalcv = response.totalcv;
            var totaluser = response.totaluser;
            
            
            //document.getElementById("totalcv").innerHTML = totalcv;
            //document.getElementById("totaluser").innerHTML = totaluser;
            
            
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }

});



//------------------------------------------------------------------------------------------------------



});