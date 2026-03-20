function welcomeMessage() {
    alert("Welcome to my professional portfolio!");
}
 
function openCert() {
    window.open("https://your-link.com", "_blank");
}
 
/* Form validation */
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
 
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }
 
    alert("Message sent successfully!");
    return true;
}
 
