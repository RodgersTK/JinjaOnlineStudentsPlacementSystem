
//get the + button that displays the student forms when clicked.
document.getElementById("new_toggle_icon").addEventListener("click", function() {
    const form = document.getElementById("student_form");
    form.classList.toggle("hidden");
});

//get the + button that displays the school forms when clicked.
document.getElementById("news_toggle_icon").addEventListener("click", function() {
    const form = document.getElementById("school_form");
    form.classList.toggle("hidden");
});

//capturing user input data
document.getElementById("student_form").addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = captureUserData();        //create a variable to store the result of the function captureUserData
    if (selectedRow === null)  {            //ensure the selected row is strictly equal
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    } 
    clearForm();
}); 

let selectedRow = null;

// capture the user input
function captureUserData() {
    return {
        first_name : document.getElementById("first_name").value, 
        last_name : document.getElementById("last_name").value,
        sur_name : document.getElementById("sur_name").value,
        gender : document.getElementById("gender").value,
        phone : document.getElementById("phone").value,
        admission_number : document.getElementById("admission_number").value,
        year_of_study : document.getElementById("year_of_study").value,
        college_class : document.getElementById("college_class").value,
        school_allocated : document.getElementById("school_allocated").value,
        allocated_grade : document.getElementById("allocated_grade").value
    };
}

// creating a new record to the table
function insertNewRecord(data) {
    let table = document.getElementById("students_list").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();
    let fullName = data.first_name + " " + data.last_name + " " + data.sur_name;

    newRow.insertCell(0).innerHTML = fullName; // Name column
    newRow.insertCell(1).innerHTML = data.gender; // Gender column
    newRow.insertCell(2).innerHTML = data.admission_number; // Adm No column
    newRow.insertCell(3).innerHTML = data.school_allocated; // School placed
    newRow.insertCell(4).innerHTML = data.allocated_grade; // Grade placed
    newRow.insertCell(5).innerHTML = `<a href="#" onclick="editRecord(this)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>`; // Action column
}

// to edit an entry 
function editRecord(button) {
    selectedRow = button.closest("tr");

    // 1. Show the form (remove hidden if it exists)
    const form = document.getElementById("student_form");
    form.classList.remove("hidden");

    document.getElementById("first_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("last_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sur_name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[4].innerHTML;
    document.getElementById("admission_number").value = selectedRow.cells[5].innerHTML;
    document.getElementById("year_of_study").value = selectedRow.cells[6].innerHTML;
    document.getElementById("college_class").value = selectedRow.cells[7].innerHTML;
    document.getElementById("school_allocated").value = selectedRow.cells[8].innerHTML;
    document.getElementById("allocated_grade").value = selectedRow.cells[9].innerHTML;
  
}    



