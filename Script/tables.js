let tabledata;
async function TableData(from) {
  await firebase
    .database()
    .ref(from)
    .on("value", function (snap) {
      tabledata = snap.val();
    });
  tablehead = from;

  //   Updating Table Header
  var spanElement = document.getElementById("tabletitle");
  spanElement.textContent = tablehead;

  // Table
  var tableBody = document.querySelector("#data-table tbody");
  for (var Number in tabledata) {
    var item = tabledata[Number];
    var row = document.createElement("tr");
    row.classList.add(
      "px-6",
      "text-xl",
      "text-center",
      "whitespace-nowrap",
      "text-black"
    );

    var numberCell = document.createElement("td");
    numberCell.textContent = item.Number;
    row.appendChild(numberCell);

    var avatarCell = document.createElement("td");
    avatarCell.textContent = item.Avatar;
    row.appendChild(avatarCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = item.Name;
    row.appendChild(nameCell);

    var categoryCell = document.createElement("td");
    categoryCell.textContent = item.Category;
    row.appendChild(categoryCell);

    var sizeCell = document.createElement("td");
    sizeCell.textContent = item.Size;
    row.appendChild(sizeCell);

    var languageCell = document.createElement("td");
    languageCell.textContent = item.Language;
    row.appendChild(languageCell);

    var trailerCell = document.createElement("td");
    trailerCell.textContent = item.Trailer;
    row.appendChild(trailerCell);

    var downloadCell = document.createElement("td");
    downloadCell.textContent = item.Download;
    row.appendChild(downloadCell);

    // Add more cells as needed for additional data fields

    tableBody.appendChild(row);
  }
}

function cleartable() {
  var tableBodyy = document.querySelector("#data-table tbody");

  tableBodyy.innerHTML = "";
}
