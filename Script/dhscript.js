// Create Record
document.getElementById("dhinsert").onclick = function () {
  readForm();
  AddData("dhollywood/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("dhread").onclick = function () {
  readForm();
  ViewData("dhollywood/", _Number_);
};

// Update Record
document.getElementById("dhupdate").onclick = function () {
  readForm();
  UpdateData("dhollywood/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("dhdelete").onclick = function () {
  readForm();
  DeleteData("dhollywood/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("dhall").onclick = function () {
  cleartable();
  TableData("dhollywood");
};
