function formCheck() {
    var submit = document.forms["fname"]["lname"]["email"]["telephone"].value;
    if (submit == "") {
        alert("Name must be filled out");
        return false;
    }
}
