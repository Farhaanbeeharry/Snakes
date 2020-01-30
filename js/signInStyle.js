//disable back and forward buttons
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

//if checkbox show password is clicked, the password field becomes in the text type
function showPwd() {
  var pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

//function for login
function checkAccount() {
  
  let username = document.getElementById("username").value; //get the username from the input field
  let password = document.getElementById("password").value; //get the password from the input field

  if (username === "") { //if username is empty
    document.getElementById("username").style.borderBottom = "2px solid red"; //field gets underlined in red
    document.getElementById("password").style.borderBottom = "1px solid";
    document.getElementById("alert").innerText = "";
    document.getElementById("alert").innerText = "Please input a username !"; //displays error message
    return false; //return false so that the form doesn't get submitted
  }
  else if (username in localStorage) { //if user has account
    let userObject = JSON.parse(localStorage[username]); //get the user data into an array 'userObject'
    if (password === userObject.password) { //if passwords from input and in local storage match
      sessionStorage.loggedInUsername = userObject.username; //user logged in, session storage is created
      return true; //form is submitted
    } else { //if passwords do not match
      if (password === "") { //if password is empty
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "2px solid red"; //password field gets highlighted
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Please enter a password !"; //displays error message
        return false; //return false so that the form doesn't get submitted
      } else { //if wrong password is typed
        document.getElementById("username").style.borderBottom = "1px solid";
        document.getElementById("password").style.borderBottom = "2px solid red"; //password field gets highlighted
        document.getElementById("alert").innerText = "";
        document.getElementById("alert").innerText = "Wrong password !"; //displays error message
        return false; //return false so that the form doesn't get submitted
      }
    }
  }
  else { //if username is not in local storage
    document.getElementById("username").style.borderBottom = "2px solid red"; //username field gets underlined
    document.getElementById("password").style.borderBottom = "1px solid";
    document.getElementById("alert").innerText = "";
    document.getElementById("alert").innerText = "Account not found !"; //displays error message
    return false; //return false so that the form doesn't get submitted
  }
}


