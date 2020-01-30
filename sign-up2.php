<?php
include('common-layout1.php'); //link to include php common file in the webpage
outputHeader("Sign Up - continued"); //opening the header function with "Snakes" as parameter
?>

<div class="container">
    <p id="alert"></p> <!--validation and error messages-->
                <div class="sign-up">
                    <h2>Sign Up </h2> <!--Sign up title-->
                    <!--Sign up form to input name and password-->
                    <form onsubmit="storeUserSignUp2()" action="sign-in.php">
                        <input type="radio" name="gender" value="male" checked id="male"> Male
                        <input type="radio" name="gender" value="female" id="female"> Female<br>
                        <div id="birthdayContainer">
                            <p id="birthdayTitle">DOB:</p>
                            <input type="date" name="birthday" id="birthday">
                        </div>
                        <br>
                        <input type="text" placeholder="email" name="email" id="email"><br>
                        
                        
                        <input type="tel" name="phone" placeholder="phone number" id="phone"><br>
                        <input type="submit" onclick="return validationSignUp2()" value="Sign Up">
                    </form>
                  
                </div>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>