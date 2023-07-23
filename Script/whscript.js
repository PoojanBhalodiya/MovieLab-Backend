// Create Record
document.getElementById("whinsert").onclick = function () {
  readForm();
  AddData("webhindi/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("whread").onclick = function () {
  readForm();
  ViewData("webhindi/", _Number_);
};

// Update Record
document.getElementById("whupdate").onclick = function () {
  readForm();
  UpdateData("webhindi/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("whdelete").onclick = function () {
  readForm();
  DeleteData("webhindi/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("whall").onclick = function () {
  cleartable();
  TableData("webhindi");
};
