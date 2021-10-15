function EmailValidation (enteredEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(enteredEmail.value.match(mailformat)) {
        alert("Thank you for your interest in Base Apparel!");
        document.emailValidation.emailAddress.focus();
        return true;
    } else {
        alert("Please provide a valid email address");
        document.emailValidation.emailAddress.focus();
        return false;
    }
}



