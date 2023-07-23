// Create Record
document.getElementById("coinsert").onclick = function () {
  readForm();
  AddData("course/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("coread").onclick = function () {
  readForm();
  ViewData("course/", _Number_);
};

// Update Record
document.getElementById("coupdate").onclick = function () {
  readForm();
  UpdateData("course/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("codelete").onclick = function () {
  readForm();
  DeleteData("course/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("coall").onclick = function () {
  cleartable();
  TableData("course");
};
