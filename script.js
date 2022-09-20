var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var n = 1;
var x = 0;

function AddRow() {
  var AddRow = document.getElementById("show");
  var NewRow = AddRow.insertRow(n);
  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("address").value;
  list4[x] = document.getElementById("pincode").value;
  list5[x] = document.getElementById("gender").value;
  list6[x] = document.getElementById("food").value;
  list7[x] = document.getElementById("state").value;
  list8[x] = document.getElementById("country").value;

  var cell1 = NewRow.insertCell(0);
  cell1.innerHTML = list1[x];
  var cell2 = NewRow.insertCell(1);
  cell2.innerHTML = list2[x];
  var cell3 = NewRow.insertCell(2);
  cell3.innerHTML = list3[x];
  var cell4 = NewRow.insertCell(3);
  cell4.innerHTML = list4[x];
  var cell5 = NewRow.insertCell(4);
  cell5.innerHTML = list5[x];
  var cell6 = NewRow.insertCell(5);
  cell6.innerHTML = list6[x];
  var cell7 = NewRow.insertCell(6);
  cell7.innerHTML = list7[x];
  var cell8 = NewRow.insertCell(7);
  cell8.innerHTML = list8[x];

  n++;
  x++;
}
