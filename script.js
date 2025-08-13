
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

