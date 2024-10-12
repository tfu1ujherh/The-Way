document.addEventListener("DOMContentLoaded",  function() {
    // Get the form element by its ID
    const form = document.getElementById("contactForm");

    // Add a submit event listener to the form
    form.addEventListener("submit",async function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        console.log(message)
        console.log(email)
        console.log(name)
        // Perform simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simple email validation (optional, you can replace with a more robust solution)
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare the data to send (e.g., if you have an API or backend)
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Display the form data in the console (can be removed later)
        console.log("Form Submitted:", formData);
        const response=await fetch("http://localhost:4000/api/v1/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        const json=await response.json();
        console.log(json);

        // Simulate form submission (replace with actual API call or server-side processing)
        alert("Thank you for contacting us, " + name + ". We will get back to you shortly!");

        // Optionally, clear the form after submission
        form.reset();
    });
});






document.getElementById('user-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from bubbling up
    var dropMenu = document.getElementById('drop-menu');
    // Toggle display of dropdown
    dropMenu.style.display = dropMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown if clicking outside
document.addEventListener('click', function(event) {
    var dropMenu = document.getElementById('drop-menu');
    if (!dropMenu.contains(event.target) && !document.getElementById('user-icon').contains(event.target)) {
        dropMenu.style.display = 'none';
    }
});