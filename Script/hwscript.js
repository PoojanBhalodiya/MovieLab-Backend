// Create Record
document.getElementById("hwinsert").onclick = function () {
  readForm();
  AddData("hollywood/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("hwread").onclick = function () {
  readForm();
  ViewData("hollywood/", _Number_);
};

// Update Record
document.getElementById("hwupdate").onclick = function () {
  readForm();
  UpdateData("hollywood/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("hwdelete").onclick = function () {
  readForm();
  DeleteData("hollywood/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("hwall").onclick = function () {
  cleartable();
  TableData("hollywood");
};
