
// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
}
//Function To Display Popup
function addTask() {
    document.getElementById('taskAdd').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('taskAdd').style.display = "none";
}

function editUser() {
    document.getElementById('userEdit').style.display = "block";
}
function editUserHide() {
    document.getElementById('userEdit').style.display = "none";
}