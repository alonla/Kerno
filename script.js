var t4 = document.getElementById("myTable");
var t5 = document.getElementById("myTable5")
var table;
var x;

// Used to save the original table for reset map
var arr = [];

function ChooseTable(){
  x = document.getElementById("mySelectVar").value;
  if (x == "4"){
    table = t4;
    document.getElementById("4div").style="display:block;";
    document.getElementById("5div").style="display:none;";
  }
  if (x == "5"){
    table = t5;
    document.getElementById("5div").style="display:block;";
    document.getElementById("4div").style="display:none;";
  }
  document.getElementById("buttons").style="display:block;";

  // make a copy of the map that was chosen
  for (var i = 0, row; row = table.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
      arr[i*table.rows[1].cells.length+j] = col.innerHTML;
    }  
  }
}

function RunMap(){
  // Get the sum data
  var s = document.getElementById("data").value;
  s = s.split(",");

  
  
  for (var i = 1, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 1, col; col = row.cells[j]; j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      
      
      for (var t = 0; t < s.length; t++){
        if (col.innerHTML == s[t]){
          col.innerHTML = "300";
        }
      }
    }  
  }

  var ilength = table.rows.length;
  if (x == "5")
    ilength = ilength;

  for (var i = 1, row; row = table.rows[i], i < ilength; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 1, col; col = row.cells[j], j < row.cells.length; j++) {
      
      if (col.innerHTML == "300"){
        col.innerHTML = "1";
      }
      else
        col.innerHTML = "0";
      
    }  
  }

}

function ResetTable(){
  
  for (var i = 0, row; row = table.rows[i] ; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
      col.innerHTML = arr[i*table.rows[1].cells.length+j];
    }  
  }
}