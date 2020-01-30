//after loading page, the function checkLogin is opened
window.onload = checkLogin;

//disable back and forward buttons
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};


if (document.title === "Play - Snakes") { //if user enters the game page
    if (sessionStorage.loggedInUsername === undefined) { //if no user is logged in
        location.replace("sign-in.php"); //page redirects to sign in
    }
}

//function to check if there is a user logged in (session storage)
function checkLogin() {
    if (sessionStorage.loggedInUsername !== undefined) { //if there is a user logged in
        let userObject = JSON.parse(localStorage[sessionStorage.loggedInUsername]); //get the details of the user from local storage
        if (document.title === "Snakes") { //if on homepage
            document.getElementById("showUserName").innerText = "Username: " + userObject['username']; //displays username of the user
            document.getElementById("play").outerHTML = '<a href="play.php" id="play">Play</a>'; //play button with href play page
        }
        document.getElementById("choice").outerHTML = '<a href="index.php" onclick="signOut()">Sign out</a>'; //sign out button appears
    } else { //if user not logged in
        document.getElementById("choice").outerHTML = '<a href="sign-in.php">Account</a>'; //sign in button appears
        if (document.title === "Snakes") { //if on homepage
            document.getElementById("play").outerHTML = '<a href="sign-in.php" id="play">Play</a>'; //play button with href sign in
        }
    }
}

//if user click on sign out, this function opens up
function signOut() {
    sessionStorage.clear(); //clear session storage and log out user
}