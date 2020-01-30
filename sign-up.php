<?php
include('common-layout1.php'); //link to include php common file in the webpage
outputHeader("Sign Up - Snakes"); //opening the header function with "Snakes" as parameter
?>

<div class="container">
    <p id="alert"></p><!--Validation and error messages-->
                <div class="sign-up">
                    <h2>Sign Up </h2> <!--Sign up title-->
                    <!--Sign up form to input name and password-->
                    <form onsubmit="storeUserSignUp1()" action="sign-up2.php">
                        <input type="text" name="uname" placeholder="username" id="username"><br>
                        <input type="password" name="pass" placeholder="password" id="password"><br>
                        <input type="password" name="pass" placeholder="confirm password" id="confirmPassword"><br>
                        <input type="checkbox" onclick="showPwd()" id="showPass"> Show Password
                        <input type="submit" value="Next" onclick="return validationSignUp1()">
                    </form>
                    <!--link to sign in if already have account-->
                    <div class="no-account">
                        <p>Already registered? <a href="sign-in.php">Sign in! </a></p>
                    </div>
                </div>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>