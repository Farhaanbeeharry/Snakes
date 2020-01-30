<?php
include('common-layout1.php'); //link to include php common file in the webpage
outputHeader("Sign In - Snakes"); //opening the header function with "Snakes" as parameter
?>

<div class="container">

            <p id="alert"></p> <!--Validation and error messages-->
                <div class="sign-in">
                    <h2>Sign In </h2> <!--Sign in title-->
                    <!--Sign up form to input name and password-->
                    <form onsubmit="return checkAccount()" action="index.php">
                        <input type="text" name="uname" placeholder="username" id="username"><br>
                        <input type="password" name="pass" placeholder="password" id="password"><br>
                        <input type="checkbox" onclick="showPwd()" id="showPass"> Show Password
                        <input type="submit" value="Sign In">
                    </form>
                    <!--link to sign up if not already have account-->
                    <div class="no-account">
                        <p>No account yet? <a href="sign-up.php">Sign up! </a></p>
                    </div>
                </div>
            </div>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>