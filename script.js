
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault(); 

        const rollno = document.getElementById("rollno").value;
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const fatherName = document.getElementById("fatherName").value;
        const mobile = document.getElementById("mobilenumber").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        if (rollno === "" || name === "" || lastname === "" || fatherName === "" ||
            mobile === "" || email === "" || password === "") {

            alert("Please fill all required fields!");
            return;
        }

    
        if (mobile.length !== 11) {
            alert("Mobile number must be 11 digits!");
            return;
        }

    
        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        alert("Registration Successful ✅");

        form.reset(); 
    });

});