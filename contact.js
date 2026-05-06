document.getElementById("contactForm").addEventListener("submit", function (e) {

    const fullname = document.getElementById("fullname").value.trim();
    const namePattern = /^[A-Za-z\s]+$/;

    if (fullname.length < 5) {
        alert("Full name must contain at least 5 characters.");
        e.preventDefault();
        return;
    }

    if (!namePattern.test(fullname)) {
        alert("Full name must contain only letters and spaces.");
        e.preventDefault();
        return;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

    if (!emailPattern.test(email)) {
        alert("Email must be valid and end with @e-uvt.ro");
        e.preventDefault();
        return;
    }

    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[0-9]{10}$/;

    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Phone must contain exactly 10 digits.");
        e.preventDefault();
        return;
    }

    const subject = document.getElementById("subject").value;
    if (subject === "") {
        alert("Please select a subject.");
        e.preventDefault();
        return;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
        alert("Message cannot be empty.");
        e.preventDefault();
        return;
    }

    const radios = document.getElementsByName("hear");
    let radioChecked = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChecked = true;
        }
    }
    if (!radioChecked) {
        alert("Please select how you heard about me.");
        e.preventDefault();
        return;
    }

    const dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please enter your date of birth.");
        e.preventDefault();
        return;
    }
    const dobDate = new Date(dob);
    const today = new Date();
    let userAge = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        userAge--;
    }
    if (userAge < 18) {
        alert("You must be at least 18 years old.");
        e.preventDefault();
        return;
    }

    const age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 18 || age > 60) {
        alert("Age must be between 18 and 60.");
        e.preventDefault();
        return;
    }

    const website = document.getElementById("website").value.trim();
    if (!website.startsWith("https://")) {
        alert("Website URL must start with https://");
        e.preventDefault();
        return;
    }
    try {
        new URL(website);
    } catch (err) {
        alert("Website URL is not valid.");
        e.preventDefault();
        return;
    }

    const fileInput = document.getElementById("fileUpload");
    if (fileInput.files.length === 0) {
        alert("Please upload a file.");
        e.preventDefault();
        return;
    }
    const file = fileInput.files[0];
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")) {
        alert("File must be a .pdf or .docx file.");
        e.preventDefault();
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("File size must not exceed 2MB.");
        e.preventDefault();
        return;
    }

    const favColor = document.getElementById("favColor").value;
    if (favColor === "") {
        alert("Please choose a favorite color.");
        e.preventDefault();
        return;
    }

    const confirmSubmit = confirm("Are you sure you want to submit the form?");
    if (!confirmSubmit) {
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
