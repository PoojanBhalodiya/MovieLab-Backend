// Clear Form Fields
document.getElementById("clearform").onclick = function () {
  clearform();
};
function clearform() {
  document.getElementById("inNumber").value = "";
  document.getElementById("inAvatar").value = "";
  document.getElementById("inName").value = "";
  document.getElementById("inCategory").value = "";
  document.getElementById("inSize").value = "";
  document.getElementById("inLanguage").value = "";
  document.getElementById("inTrailer").value = "";
  document.getElementById("inDownload").value = "";
}

// Defined Things
let _Number_,
  _Avatar_,
  _Name_,
  _Category_,
  _Size_,
  _Language_,
  _Trailer_,
  _Download_;

// Read Form Details
function readForm() {
  _Number_ = document.getElementById("inNumber").value;
  _Avatar_ = document.getElementById("inAvatar").value;
  _Name_ = document.getElementById("inName").value;
  _Category_ = document.getElementById("inCategory").value;
  _Size_ = document.getElementById("inSize").value;
  _Language_ = document.getElementById("inLanguage").value;
  _Trailer_ = document.getElementById("inTrailer").value;
  _Download_ = document.getElementById("inDownload").value;
}

// Update Values on Firebase Keys
function UpdateData(to, _Number_) {
  firebase
    .database()
    .ref(to + _Number_)
    .update({
      Avatar: _Avatar_,
      Name: _Name_,
      Category: _Category_,
      Size: _Size_,
      Language: _Language_,
      Trailer: _Trailer_,
      Download: _Download_,
    });
}

// Assign Values on Firebase Keys
function AddData(to, _Number_) {
  firebase
    .database()
    .ref(to + _Number_)
    .set({
      Number: _Number_,
      Avatar: _Avatar_,
      Name: _Name_,
      Category: _Category_,
      Size: _Size_,
      Language: _Language_,
      Trailer: _Trailer_,
      Download: _Download_,
    });
}

// Delete From Firebase
function DeleteData(to, _Number_) {
  firebase
    .database()
    .ref(to + _Number_)
    .remove();
}

// View Data From Firebase
function ViewData(to, _Number_) {
  firebase
    .database()
    .ref(to + _Number_)
    .on("value", function (snap) {
      document.getElementById("inNumber").value = snap.val().Number;
      document.getElementById("inAvatar").value = snap.val().Avatar;
      document.getElementById("inName").value = snap.val().Name;
      document.getElementById("inCategory").value = snap.val().Category;
      document.getElementById("inSize").value = snap.val().Size;
      document.getElementById("inLanguage").value = snap.val().Language;
      document.getElementById("inTrailer").value = snap.val().Trailer;
      document.getElementById("inDownload").value = snap.val().Download;
    });
}

// Clear Form
document.getElementById("cleartable").onclick = function () {
  cleartable();
};
