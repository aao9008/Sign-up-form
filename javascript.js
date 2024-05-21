function validatePassword(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword){
        // Locate the element with the ID 'passwords'
        var passwordsElement = document.getElementById("passwords");

        // Create a new div element to hold the message
        var messageElement = document.createElement("p");
        
        messageElement.textContent = "*Passwords do not match";
        messageElement.id = "alert"

         // Insert the new element after the 'passwords' element
        passwordsElement.insertAdjacentElement("afterend", messageElement);
        return false;
    }
}