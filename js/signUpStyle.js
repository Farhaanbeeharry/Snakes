//disable back and forward buttons
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

//declaring a variable
var successfulMessage;

//if checkbox show password is clicked, the password field becomes in the text type
function showPwd() {
    var pass = document.getElementById("password");
    var confirmPass = document.getElementById("confirmPassword");
    if ((pass.type === "password") && (confirmPass.type === "password")) {
        pass.type = "text";
        confirmPass.type = "text";
    } else {
        pass.type = "password";
        confirmPass.type = "password";
    }
}

//validation for sign up page 1
function validationSignUp1() {
    var usernameRegex = new RegExp("^(?=.*[a-z]).{4,}$"); //regex for username verification - minimum 4 alphabets
    var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"); //regex for password verification - minimum 1 small letter, 1 caps letter and a number - minimum 6 characters
    var username = document.getElementById("username").value; //gets the username input of the user
    var password = document.getElementById("password").value; //gets the password input of the user
    var confirmPassword = document.getElementById("confirmPassword").value; //gets the confirm password input of the user
    if (username === "") { //if username is empty
        document.getElementById("username").style.borderBottom = "2px solid red"; //username field is underlined
        document.getElementById("password").style.borderBottom = "1px solid";
        document.getElementById("confirmPassword").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Please input a username !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (!usernameRegex.test(username)) { //if username does not match regex
        document.getElementById("username").style.borderBottom = "2px solid red"; //username field is underlined
        document.getElementById("password").style.borderBottom = "1px solid";
        document.getElementById("confirmPassword").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Username should have minimum 4 characters !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (username in localStorage) { //if username already exists
        document.getElementById("username").style.borderBottom = "2px solid red"; //username field is underlined
        document.getElementById("password").style.borderBottom = "1px solid";
        document.getElementById("confirmPassword").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Username already exists !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (password === "") { //if password is empty
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "2px solid red"; //password field is underlined
        document.getElementById("confirmPassword").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Password cannot be empty !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (!passwordRegex.test(password)) { //if password does not match regex
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "2px solid red"; //password field is underlined
        document.getElementById("confirmPassword").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Password too weak ! Minimum of 6 characters including numbers, small letters and caps letters."; //displays error message
        return false; //returns false to prevent form submission
    } else if (confirmPassword === "") { //if confirm password field is empty
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "1px solid";
        document.getElementById("confirmPassword").style.borderBottom = "2px solid red"; //confirm password field is underlined
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Enter a password to confirm !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (password != confirmPassword) { //if confirm password does not match with password
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "1px solid";
        document.getElementById("confirmPassword").style.borderBottom = "2px solid red"; //confirm password field is underlined
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Passwords do not match !"; //displays error message
        return false; //returns false to prevent form submission
    }
    return true; //submits the form if no errors found
}

//validation for sign up page 2
function validationSignUp2() {
    var birthday = document.getElementById("birthday").value; //get the input birthdate value from user
    var email = document.getElementById("email").value; //get the email user input
    var phoneNumber = document.getElementById("phone").value; //get the phone number input from the user
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //regex for email verification
    var phoneRegex = /^[0-9]{8}$/; //regex for phone verification

    var currentYear = new Date().getFullYear(); //gets the current year
    var validYear = currentYear - 12; //sets valid year to minimum 12 years ago
    var birthyear = birthday[0] + birthday[1] + birthday[2] + birthday[3]; //gets the user input year

    if (birthday.length == 0) { //if no date is input
        document.getElementById("birthday").style.borderBottom = "2px solid red"; //underline the birthday field
        document.getElementById("email").style.borderBottom = "1px solid";
        document.getElementById("phone").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "Please enter a birthdate !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (birthyear > currentYear) { //if year input is in the future
        document.getElementById("birthday").style.borderBottom = "2px solid red"; //underlines the birthday field
        document.getElementById("email").style.borderBottom = "1px solid";
        document.getElementById("phone").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "Year cannot be in the future !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (birthyear > validYear) { //if minimum age is not matched
        document.getElementById("birthday").style.borderBottom = "2px solid red"; //underlines birthday fields
        document.getElementById("email").style.borderBottom = "1px solid";
        document.getElementById("phone").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "Minimum age not matched !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (email === "") { //if email is empty
        document.getElementById("birthday").style.borderBottom = "1px solid";
        document.getElementById("email").style.borderBottom = "2px solid red"; //underlines email input
        document.getElementById("phone").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "Email cannot be empty !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (!emailRegex.test(email)) { //if email does not match with regex
        document.getElementById("birthday").style.borderBottom = "1px solid";
        document.getElementById("email").style.borderBottom = "2px solid red"; //underlines email field
        document.getElementById("phone").style.borderBottom = "1px solid";
        document.getElementById("alert").innerText = "Invalid email format !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (phoneNumber === "") { //if phone number is empty
        document.getElementById("birthday").style.borderBottom = "1px solid";
        document.getElementById("email").style.borderBottom = "1px solid";
        document.getElementById("phone").style.borderBottom = "2px solid red"; //underline phone number field
        document.getElementById("alert").innerText = "Phone number cannot be empty !"; //displays error message
        return false; //returns false to prevent form submission
    } else if (!phoneRegex.test(phoneNumber)) { //if phone number does not match with regex
        document.getElementById("birthday").style.borderBottom = "1px solid";
        document.getElementById("email").style.borderBottom = "1px solid";
        document.getElementById("phone").style.borderBottom = "2px solid red"; //underlines phone number field
        document.getElementById("alert").innerText = "Phone should have 8 numbers only !"; //displays error message
        return false; //returns false to prevent form submission
    }
    alert("Account Created\nClick OK to sign in !"); //alert the user that the account has been created
    return true; //submit the form
}

//store the data from sign up 1
function storeUserSignUp1() {
    var username = document.getElementById("username").value; //gets the username input
    var password = document.getElementById("password").value; //gets the password input
    localStorage.setItem('temporaryUsername', username); //save the temporary input username
    localStorage.setItem('temporaryPassword', password); //save the temporary input password
}

//store the complete user data into local storage
function storeUserSignUp2() {
    var username = localStorage.getItem('temporaryUsername'); //gets the temporary username
    var password = localStorage.getItem('temporaryPassword'); //gets the temporary password
    localStorage.removeItem('temporaryUsername'); //delete the temporary username
    localStorage.removeItem('temporaryPassword'); //delete the temporary password
    var userObject = {}; //create an array userObject
    userObject.username = username; //sets the username key with value username
    userObject.password = password; //sets the password key with value password
    var gender; //declare gender
    var genderBtn = document.getElementsByName("gender"); //access the radio gender button
    if (genderBtn[0].checked) { //if male is checked
        gender = "Male"; //set gender to male
    } else if (genderBtn[1].checked) { //if female is checked
        gender = "Female"; //set gender to female
    }
    userObject.gender = gender; //sets the gender key with the value gender
    userObject.birthday = document.getElementById("birthday").value; //sets the birthdate key with input date
    userObject.email = document.getElementById("email").value; //sets the email key with input email
    userObject.phoneNumber = document.getElementById("phone").value; //sets the phone key with phone input
    userObject.score = 0; //initialise a score of 0 in the user array
    localStorage[userObject.username] = JSON.stringify(userObject); //save the userObject array into local storage
}