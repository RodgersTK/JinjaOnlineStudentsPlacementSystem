
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
   /* if (selectedRow === null)  {            //ensure the selected row is strictly equal
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    } */
    //clearForm();
}); 

let selectedRow = null;

// capture the user input
function captureUserData() {
    let data = {
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
    console.log("Captured data:", data); 
    return data;
}

