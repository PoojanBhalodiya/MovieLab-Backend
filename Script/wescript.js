// Create Record
document.getElementById("weinsert").onclick = function () {
  readForm();
  AddData("webenglish/", _Number_);
  alert("Data Inserted");
  clearform();
};

// view record
document.getElementById("weread").onclick = function () {
  readForm();
  ViewData("webenglish/", _Number_);
};

// Update Record
document.getElementById("weupdate").onclick = function () {
  readForm();
  UpdateData("webenglish/", _Number_);
  alert("Data Update");
  clearform();
};

// Delete Record
document.getElementById("wedelete").onclick = function () {
  readForm();
  DeleteData("webenglish/", _Number_);
  alert("Data Deleted");
  clearform();
};

// view all in table
document.getElementById("weall").onclick = function () {
  cleartable();
  TableData("webenglish");
};
