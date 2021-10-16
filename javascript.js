function EmailValidation (enteredEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    setTimeout(function() {
    if(enteredEmail.value.match(mailformat)) {
        document.getElementById("message").innerHTML = "Thank you for your interest in Base Apparel!";
        document.emailValidation.emailAddress.focus();
        return true;
    } else {
        document.getElementById("message").innerHTML = "Please provide a valid email address";
        document.emailValidation.emailAddress.focus();
        return false;
    }
}, 1000);
}



