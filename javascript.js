function EmailValidation (enteredEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
    if(enteredEmail.value.match(mailformat)) {
        document.getElementById("message").innerHTML = "Thank you for your interest in Base Apparel!";
    } else {
        document.getElementById("message").innerHTML = "Please provide a valid email address";
    }
}