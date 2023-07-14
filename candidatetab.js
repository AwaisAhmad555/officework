
//object_accessors for accessing candidates ids

const candidateid = {

    idvalue : null,
    rowIndexvalue : null,
    set set_candidateid(id) {
        this.idvalue = id;
    },
    set set_rowid(rowIndex) {
        this.rowIndexvalue = rowIndex;
    }

}

const values_array = [];

// ------------------------------------------ Adding server values in table -----------------------------------------


function addinformation(information){


    var table = document.getElementById("informationtable");


    for (var i = 0; i < information.length; i++){

        //var id = i;
        var row = table.insertRow(-1);

        if(i%2 == 0){
            row.style.backgroundColor = "#c5d5c5";
        }
        
        var id = information[i][0];

        var headerCell = document.createElement("th");

        headerCell.innerHTML = '<input type="checkbox" class="check" value = '+id+'>';
        row.appendChild(headerCell);

        //var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        
        var id = information[i][0];
        //cell1.innerHTML = "0";
        cell2.innerHTML = information[i][1];
        cell3.innerHTML = information[i][2];
        cell4.innerHTML = information[i][3];
        cell5.innerHTML = information[i][4];
        cell6.innerHTML = information[i][5];
        cell7.innerHTML = information[i][6];
        cell8.innerHTML = information[i][7];

        var status = information[i][8];

        

        cell9.innerHTML = '<div class="btn-group dropleft">'+
                    '<button class="btn dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+

                    '<i class="fa fa-ellipsis-v fa-lg"  style="font-size: 16px;" aria-hidden="true"></i>'+
                    '</button><div class="dropdown-menu" style="font-size: 14px;" aria-labelledby="dropdownMenuButton">'+
                    
                    '<button type="button" class="dropdown-item" ' +
                     'id="edit-btn-' +id+ '" onclick="edit_candidate('+id+', '+row.rowIndex+', \''+status+'\')"'+
                     'data-toggle="modal" data-target="#candidateform">Edit</button>'+
                     
                    '<button type="button" class="dropdown-item" ' + 
                    'id="delete-btn-' +id+ '"onclick="delete_candidate('+id+', '+row.rowIndex+')">Delete</button>'
                                +'</div></div>';

        cell9.style.textAlign = "center";


        
    }


}

// ------------------------------------ delete information ---------------------------------------
    
function delete_candidate(id, rowIndex){
    
            
            //alert(id);

            row_id = '#delete-btn-'+id;
            /*name = document.getElementById("namefield").value;
            username = document.getElementById("username").value;
            email = document.getElementById("useremail").value;
            role = document.getElementById("role").value; */

            //alert(row_id + "\n" + name + "\n" + username + "\n" + email + "\n" +role);
            
            check = confirm("Are you sure to delete following user?");
            //alert(id);
            if(check == true){

                
                delete_record(id);
                $(row_id).parent().parent().parent().parent().remove();

            }
            



    }


//----------------------------------------------------------------------------------------------------------------

//--------------------------------------------- deleting user Record ----------------------------------------------

// -----------------------------   delete user ------------------------------------


function delete_record(id){

                //sending id to server to delete record corresponding to the sent id

                $.ajax({
                url:"candidates.php",
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



//------------------------------------------------------------------------------------------------------

function edit_candidate(id, rowIndex, status){

    //alert(document.getElementById('informationtable').rows[rowIndex].cells[7].innerHTML);

    // assigning table current values to pop up model form for updation
    
    document.getElementById("appliedfor").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[6].innerHTML;

    document.getElementById("candidatenamefield").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[1].innerHTML;

    document.getElementById("candidateemail").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[3].innerHTML;

    document.getElementById("candidatecnic").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[2].innerHTML;
    //Number(document.getElementById('informationtable').rows[rowIndex].cells[2].innerHTML);



    document.getElementById("candidatephone").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[4].innerHTML;

    document.getElementById("description").value = status;

    //alert(status);

    // setting date

    var date = new Date(document.getElementById('informationtable').rows[rowIndex].cells[5].innerHTML.replace(/([0-9]+)\/([0-9]+)/,'$2/$1').replace(/\//g, "-"));

    var day = date.getDate();

    var month = date.getMonth() + 1;

    if (day < 10) {
        day = '0' + day;
    }
    
    if (month < 10) {
        month = '0' + month;
    }

    var date_string = date.getFullYear() + "-" + month + "-" + day;

    
    document.getElementById("interviewdate").value = date_string;

    document.getElementById("status").value = 
    document.getElementById('informationtable').rows[rowIndex].cells[7].innerHTML;

    

    candidateid.set_candidateid = id;
    
    candidateid.set_rowid = rowIndex;


    //alert(candidateid.idvalue);
    
}


//------------------------------------------------------------------------------------------------------


function server_request(){


    id = candidateid.idvalue

    rowindex = candidateid.rowIndexvalue
    
    appliedfor = document.getElementById("appliedfor").value;
    candidatename = document.getElementById("candidatenamefield").value;
    candidateemail = document.getElementById("candidateemail").value;
    candidatecnic = document.getElementById("candidatecnic").value;

    candidatephone = document.getElementById("candidatephone").value;
    interviewdate = document.getElementById("interviewdate").value;
    candidatestatus = document.getElementById("status").value;
    description = document.getElementById("description").value;


    $.ajax({
        url:"candidates.php",
        type:"POST",
        dataType:"json",
        data:{

            'update':1,
            'id':id,
            'name' : candidatename,
            'email' : candidateemail,
            'cnic' : candidatecnic,
            'phone' : candidatephone,
            'interviewdate' : interviewdate,
            'status' : candidatestatus,
            'appliedfor' : appliedfor,
            'description' : description,


        },
        success: function(response){

            var server_response = response.success;

            if(server_response == 1){

                alert("Record update Successfully !");


                // updating web page table

                document.getElementById('informationtable').rows[rowindex].cells[1].innerHTML = candidatename;
                document.getElementById('informationtable').rows[rowindex].cells[2].innerHTML = candidatecnic;
                document.getElementById('informationtable').rows[rowindex].cells[3].innerHTML = candidateemail;
                document.getElementById('informationtable').rows[rowindex].cells[4].innerHTML = candidatephone;

                document.getElementById('informationtable').rows[rowindex].cells[5].innerHTML = interviewdate;
                document.getElementById('informationtable').rows[rowindex].cells[6].innerHTML = appliedfor;
                document.getElementById('informationtable').rows[rowindex].cells[7].innerHTML = candidatestatus;


                // clearing input fields


                
                document.getElementById("appliedfor").value = "";

                document.getElementById("candidatenamefield").value = "";

                document.getElementById("candidateemail").value = "";

                document.getElementById("candidatecnic").value = "";



                document.getElementById("candidatephone").value = "";


                
                document.getElementById("interviewdate").value = "";

                document.getElementById("status").value = "";

                document.getElementById("description").value = "";


                userid.set_userid = null;

                userid.set_rowid = null;
                


            }else{

                alert("Error !");
                alert(server_response.message);

            };


        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }

    });

}

//------------------------------------------------------------------------------------------------------

function createTableHeader(){


    document.getElementById("informationtable").innerHTML = "";

    var table = document.getElementById("informationtable");

    //creating table head

    var header = table.createTHead();
    var row = header.insertRow(-1);
    //row.style.backgroundColor = "#3b3a30";
    //row.style.color = "#ffffff";
    

    var cell = document.createElement("th");
    var cell2 = document.createElement("th");
    var cell3 = document.createElement("th");
    var cell4 = document.createElement("th");
    var cell5 = document.createElement("th");
    var cell6 = document.createElement("th");
    var cell7 = document.createElement("th");
    var cell8 = document.createElement("th");
    var cell9 = document.createElement("th");

    cell.innerHTML = '<input type="checkbox" id="all"  value="1">';
    row.appendChild(cell);

    cell2.innerHTML = "Full Name";
    row.appendChild(cell2);

    cell3.innerHTML = "CNIC";
    row.appendChild(cell3);

    cell4.innerHTML = "Email";
    row.appendChild(cell4);

    cell5.innerHTML = "Phone";
    row.appendChild(cell5);

    cell6.innerHTML = "Interview date";
    row.appendChild(cell6);

    cell7.innerHTML = "Applied for";
    row.appendChild(cell7);

    cell8.innerHTML = "Status";
    row.appendChild(cell8);

    cell9.innerHTML = "Action";
    row.appendChild(cell9);

                //----------------------------------------------------------------------------------------------------------
                
                //checkbox function

                document.getElementById("all").addEventListener("click", function textfieldonkeydown(event){

                    
                    if(this.checked == true){

                        
                        const checkboxList = document.querySelectorAll(".check");

                        //alert(checkboxList);
                        for (let i = 0; i < checkboxList.length; i++) {

                            checkboxList[i].checked = true;
                            values_array.push(checkboxList[i].value);

                        }

                    }else if(this.checked == false){

                        
                        const checkboxList = document.querySelectorAll(".check");

                        for (let i = 0; i < checkboxList.length; i++) {


                            checkboxList[i].checked = false;


                            while (values_array.length > 0) {
                                values_array.pop();
                            }


                        }


                    }
                    
                    //alert(values_array);

                });

                //-----------------------------------------------------------------------------------------------------------
    

};

//------------------------------------------------------------------------------------------------------

$(document).ready(function(){


    document.getElementById("all").addEventListener("click", function textfieldonkeydown(event){


        if(this.checked == true){

            
            const checkboxList = document.querySelectorAll(".check");

            //alert(checkboxList);
            for (let i = 0; i < checkboxList.length; i++) {

                checkboxList[i].checked = true;
                values_array.push(checkboxList[i].value);


            }

        }else if(this.checked == false){

            
            const checkboxList = document.querySelectorAll(".check");

            for (let i = 0; i < checkboxList.length; i++) {

                checkboxList[i].checked = false;

            }


        }
        

    });




    //-----------------------------------------------------------------------------------

    //candidatecnic

    document.getElementById("candidatecnic").addEventListener("keydown", function textfieldonkeydown(event){


        if(event.keyCode != 8){
        
            if(this.value.length == 5){
            
            
             this.value = this.value + '-';
            
            
            }
            
            if(this.value.length == 13){
            
            
             this.value = this.value + '-';
            
            
            }
        
        }
        
        
        });

    //-----------------------------------------------------------------------------------

    information_array = [];

    var previousvalue = 0;
    var nextvalue = 0;

    document.getElementById("previous-label").innerHTML = previousvalue;

    document.getElementById("next-label").innerHTML = nextvalue;

    //----------------------------------------------------------------------------//

    if(previousvalue == 0){

        document.getElementById("previous-btn").disabled = true;
        
    }else{

        document.getElementById("previous-btn").disabled = false;
        
    }

    if(nextvalue > information_array.length){

        document.getElementById("next-btn").disabled = true;

    }else{

        document.getElementById("next-btn").disabled = false;

    }

    //----------------------------------------------------------------------------//

    
    // ------------------------------------ getting values from server -------------------------------------

    $.ajax({
        
            url:"candidates.php",
            type:"POST",
            dataType:"json",
            data:{
    
                'display':1,
    
            },
            success: function(response){
                

                
                const complete_array = [];

                

                for (var i = 0; i < response.length; i++){

                    var id = response[i].id;
                    var name = response[i].name;
                    
                    var cnic = response[i].cnic;
                    var email = response[i].email;
                    var phone = response[i].phone;
                    var appliedfor = response[i].appliedfor;
                    var interviewdate = response[i].interviewdate;
                    var status = response[i].status;
                    var comment = response[i].comment;
                    
                    
                    var date = new Date(interviewdate).toLocaleDateString('en-GB');

                    const server_information = [id,name,cnic,email,phone,date,appliedfor,status,comment];

                    //appending rows in array
                    
                    complete_array.push(server_information);
                    information_array.push(server_information);

                }

                // function to add server values in table

                //complete_array = information_array.slice(0,5);
                addinformation(complete_array.slice(0,document.getElementById("tablesize").value));

                document.getElementById("totalcv").innerHTML = complete_array.length;

                //document.getElementById("informationtable").classList.add("table-hover");

    
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

    });



    //------------------------------------------------------------------------------------------------------
    
    
    // -----------------------------   search button ------------------------------------

    document.getElementById("search").addEventListener("click",function(){


        filterarray = []
        document.getElementById("informationtable").innerHTML = "";

        var table = document.getElementById("informationtable");

        //creating table head

        var header = table.createTHead();
        var row = header.insertRow(-1);

        

        var cell = document.createElement("th");
        var cell2 = document.createElement("th");
        var cell3 = document.createElement("th");
        var cell4 = document.createElement("th");
        var cell5 = document.createElement("th");
        var cell6 = document.createElement("th");
        var cell7 = document.createElement("th");
        var cell8 = document.createElement("th");
        var cell9 = document.createElement("th");

        cell.innerHTML = '<input type="checkbox">';
        row.appendChild(cell);

        cell2.innerHTML = "Full Name";
        row.appendChild(cell2);

        cell3.innerHTML = "CNIC";
        row.appendChild(cell3);

        cell4.innerHTML = "Email";
        row.appendChild(cell4);

        cell5.innerHTML = "Phone";
        row.appendChild(cell5);

        cell6.innerHTML = "Interview date";
        row.appendChild(cell6);

        cell7.innerHTML = "Applied for";
        row.appendChild(cell7);

        cell8.innerHTML = "Status";
        row.appendChild(cell8);

        cell9.innerHTML = "Action";
        row.appendChild(cell9);

        name = document.getElementById("name").value;
        cnic = document.getElementById("cnic").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;

        //alert(name + "\n" + cnic + "\n" + email + "\n" +phone);


        for (var i = 0; i < information_array.length; i++){

            if (information_array[i][1].toLowerCase() == name.toLowerCase() || information_array[i][3] == email || information_array[i][2] == cnic || information_array[i][4] == phone){

                filterarray.push(information_array[i]);

                //alert(information_array[i])

            }
            

        }

        if(name == "" && email == "" && cnic == "" && phone == ""){

            addinformation(information_array.slice(0,document.getElementById("tablesize").value));
            
        }

        addinformation(filterarray);


    });


    //------------------------------------------------------------------------------------------------------
    
    
    // -----------------------------   next button ------------------------------------

    document.getElementById("next-btn").addEventListener("click",function(){

        
        filterarray = [];
        var value =  document.getElementById("tablesize").value;
        

        previousvalue = Number(nextvalue);

        if(nextvalue == 0){

            previousvalue = 0;

        }

        nextvalue = Number(nextvalue) + Number(value);
        
        //alert(previousvalue + "\n" + nextvalue);

        document.getElementById("previous-label").innerHTML = "-" + previousvalue + "-";

        document.getElementById("next-label").innerHTML = "-" + nextvalue + "-";

        //alert(information_array);


        filterarray = information_array.slice(previousvalue,nextvalue);
        createTableHeader();
            
        addinformation(filterarray);

        //----------------------------------------------------------------------------//

        if(previousvalue == 0){

            document.getElementById("previous-btn").disabled = true;
            
        }else{

            document.getElementById("previous-btn").disabled = false;
            
        }

        if(nextvalue > information_array.length){

            document.getElementById("next-btn").disabled = true;

        }else{

            document.getElementById("next-btn").disabled = false;

        }

        //----------------------------------------------------------------------------//


    });



    //---------------------------------------------------------------------------------------------------

    // -----------------------------   previous button ------------------------------------


    document.getElementById("previous-btn").addEventListener("click",function(){

        filterarray = [];
        var value =  document.getElementById("tablesize").value;
        
        nextvalue = Number(previousvalue);
        previousvalue = Number(nextvalue) - Number(value);

        if(nextvalue == 0){

            previousvalue = 0;

        }

        if(previousvalue < 0){

            previousvalue = 0;

        }

        //alert(previousvalue + "\n" + nextvalue);
        
        document.getElementById("previous-label").innerHTML = "-" + previousvalue + "-";

        document.getElementById("next-label").innerHTML = "-" + nextvalue + "-";

        filterarray = information_array.slice(previousvalue,nextvalue);
        createTableHeader();
            
        addinformation(filterarray);

        //----------------------------------------------------------------------------//

        if(previousvalue == 0){

            document.getElementById("previous-btn").disabled = true;
            
        }else{

            document.getElementById("previous-btn").disabled = false;

        }

        if(nextvalue > information_array.length){

            document.getElementById("next-btn").disabled = true;

        }else{

            document.getElementById("next-btn").disabled = false;

        }

        //----------------------------------------------------------------------------//
        
    });



    //---------------------------------------------------------------------------------------------------

    //----------------------------------- Search function using name ------------------------------------


    var check = 0;
    document.getElementById("name").addEventListener("input", function textfieldonfocus(event){

        filterarray = [];
        

        
        name = document.getElementById("name").value;


        for (var i = 0; i < information_array.length; i++){

            if (information_array[i][1].toLowerCase() == name.toLowerCase()){

                filterarray.push(information_array[i]);

                //alert(information_array[i])

            }
            

        }

        if(filterarray.length > 0){

            
            createTableHeader();
            
            addinformation(filterarray);

            check = 2;

        } else if(filterarray.length == 0 && check == 2){

            
            createTableHeader();
            addinformation(information_array.slice(0,document.getElementById("tablesize").value));

            check = 1;

            //alert("No Record Found !");

        }

        

    });

    //----------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------

    //----------------------------------- Search function using cnic ------------------------------------

    
    document.getElementById("cnic").addEventListener("input", function textfieldonfocus(event){

        filterarray = [];

        //
        cnic = document.getElementById("cnic").value;


        for (var i = 0; i < information_array.length; i++){

            if (information_array[i][2].toLowerCase().includes(cnic.toLowerCase()) == true){

                filterarray.push(information_array[i]);


            }
            

        }

        if(filterarray.length > 0){

            
            createTableHeader();
            
            addinformation(filterarray);

            check = 2;

        } else if(filterarray.length == 0 && check == 2){

            
            createTableHeader();
            addinformation(information_array.slice(0,document.getElementById("tablesize").value));

            check = 1;
            alert("No Record Found !");


        }

        

    });

    //----------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------

    //----------------------------------- Search function using email ------------------------------------

    
    document.getElementById("email").addEventListener("input", function textfieldonfocus(event){

        filterarray = [];

        //
        email = document.getElementById("email").value;


        for (var i = 0; i < information_array.length; i++){

            if (information_array[i][3].toLowerCase().includes(email.toLowerCase()) == true){

                filterarray.push(information_array[i]);


            }
            

        }

        if(filterarray.length > 0){

            
            createTableHeader();
            
            addinformation(filterarray);

            check = 2;

        } else if(filterarray.length == 0 && check == 2){

            
            createTableHeader();
            addinformation(information_array.slice(0,document.getElementById("tablesize").value));

            check = 1;
            alert("No Record Found !");


        }

        

    });

    //--------------------------------------------- table size menu -------------------------------------------------

    document.getElementById("tablesize").addEventListener("change", function selectchange(event){

        
        createTableHeader();
        addinformation(information_array.slice(0,this.value));

        
        

        //----------------------------------------------------------------------------//

        if(previousvalue == 0){

            document.getElementById("previous-btn").disabled = true;
            
        }else{

            document.getElementById("previous-btn").disabled = false;
            
        }

        if(this.value > information_array.length){

            document.getElementById("next-btn").disabled = true;

        }else{

            document.getElementById("next-btn").disabled = false;

        }

        //----------------------------------------------------------------------------//

        if(this.value == -1){

            document.getElementById("previous-btn").disabled = true;
            document.getElementById("next-btn").disabled = true;
            

        }

    });

    //---------------------------------------------------------------------------------------------------

    //----------------------------------- Search function using phone ------------------------------------

    
    document.getElementById("phone").addEventListener("input", function textfieldonfocus(event){

        filterarray = [];

        //
        phone = document.getElementById("phone").value;


        for (var i = 0; i < information_array.length; i++){

            if (information_array[i][4].toLowerCase().includes(phone.toLowerCase()) == true){

                filterarray.push(information_array[i]);


            }
            

        }

        if(filterarray.length > 0){

            
            createTableHeader();
            
            addinformation(filterarray);

            check = 2;

        } else if(filterarray.length == 0 && check == 2){

            
            createTableHeader();
            addinformation(information_array.slice(0,document.getElementById("tablesize").value));

            check = 1;
            alert("No Record Found !");


        }

        

    });

    //----------------------------------------------------------------------------------------------

    document.getElementById("candidateclosebtn").addEventListener("click",function(event){

        document.getElementById("appliedfor").value = " ";

        document.getElementById("candidatenamefield").value = ""

        document.getElementById("candidateemail").value = "";

        document.getElementById("candidatecnic").value = "";



        document.getElementById("candidatephone").value = "";

        document.getElementById("interviewdate").value = "";

        document.getElementById("status").value = " ";
        
    });

    




    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }else{

                event.preventDefault();

                //alert("Validation OK");
                server_request();

                

              }
      
              form.classList.add('was-validated')
            }, false)
          })
    })()
    
    
});

