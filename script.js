var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["titulo"] = document.getElementById("titulo").value;
    formData["plataforma"] = document.getElementById("plataforma").value;
    formData["genero"] = document.getElementById("genero").value;
    formData["estado"] = document.getElementById("estado").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("mainList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.titulo;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.plataforma;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.genero;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.estado;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("titulo").value = "";
    document.getElementById("plataforma").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("estado").value = "";
    selectedRow = null;
}

function onEdit(td) {
    activeRow = td.parentElement.parentElement
    showPopup('edit', activeRow)
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titulo;
    selectedRow.cells[1].innerHTML = formData.plataforma;
    selectedRow.cells[2].innerHTML = formData.genero;
    selectedRow.cells[3].innerHTML = formData.estado;
}

function onDelete(td) {
    if (confirm('Estas seguro de que deseas eliminar este elemento?')) {
        row = td.parentElement.parentElement;
        document.getElementById("mainList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("titulo").value == "") {
        isValid = false;
        document.getElementById("tituloValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tituloValidationError").classList.contains("hide"))
            document.getElementById("tituloValidationError").classList.add("hide");
    }
    return isValid;
}
