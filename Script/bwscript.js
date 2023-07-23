// Create Record
document.getElementById("bwinsert").onclick = function () {
  readForm();
  AddData("bollywood/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("bwread").onclick = function () {
  readForm();
  ViewData("bollywood/", _Number_);
};

// Update Record
document.getElementById("bwupdate").onclick = function () {
  readForm();
  UpdateData("bollywood/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("bwdelete").onclick = function () {
  readForm();
  DeleteData("bollywood/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("bwall").onclick = function () {
  cleartable();
  TableData("bollywood");
};
