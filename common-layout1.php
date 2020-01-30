<?php

//function for header with $title as parameter
function outputHeader($title)
{
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    
    //link for javaScript file and css
    //if statements to choose which css and js file to use
    if ($title == "Snakes") {
        echo '<script src="js/generalStyle.js" async></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/indexStyle.css">';
    } else if ($title == "Play - Snakes") {
        echo '<link rel="stylesheet" type="text/css" href="css/playStyle.css">';
    } else if ($title == "Sign In - Snakes") {
        echo '<script src="js/signInStyle.js"></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/signinStyle.css">';
    } else if ($title == "Sign Up - Snakes") {
        echo '<script src="js/signUpStyle.js"></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/signUpStyle.css">';
    } else if ($title == "Sign Up - continued") {
        echo '<script src="js/signUpStyle.js"></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/signUp2Style.css">';
    }
    
    //tab icon link
    echo '<link rel = "icon" type = "image/png" href = "images/minilogo.png">';
    
    //bootstrap link
    echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">';
    
    //Roboto font link
    echo '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet">';
    
    //jQuery link
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>';
    
    //bootstrap link
    echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>';
    
    echo '</head>';
    echo '<body>';
    echo '<div class="background">';
    echo '<div class="container">';
    echo '<div class="navbar">';
    
    //logo
    echo '<div id="logo" class="col-sm-2"></div>';
    echo '<div class="col-sm-8">';
    echo '<div id="navigation">';
    
    //navigation links
    echo '<a href="index.php">Home</a>'; //link for homepage
    
    //if statements to choose which navigation links to display depending on parameter
    if ($title == "Play - Snakes") {
        echo '<a href="leaderboard.php" onclick="showLeaderboard()" >Leaderboard</a>'; //link for leaderboard
    } else {
        if (($title != "Sign In - Snakes") && ($title != "Sign Up - Snakes") && ($title != "Sign Up - continued")) {
            echo '<a  data-toggle="modal" href="#myModal">Trailer</a>'; //open modal to watch trailer
        }
        echo '<a href="instructions.php">Instructions</a>'; //link for instructions page
    }
    
    echo '</div>';
    echo '</div>';
    echo '<div id="sign-in" class="pull-right">';
    echo '<div class="sign-in-img">';
    
    //if statement not to show account link if page is on sign in or sign up
    if (($title != "Sign In - Snakes") && ($title != "Sign Up - Snakes") && ($title != "Sign Up - continued")) {
        echo '<img src="images/account.png" alt="">'; //link for account logo
        echo '</div>';
        echo '<div class="text">';
        
        //if statement to choose what to display in account section
        echo '<a id="choice"></a>'; //link for sign in page
        
    }
    echo '</div>';
    echo '</div>';
    echo '</div>';
}

//function for footer
function outputFooter()
{
    echo '<div class="footer">Website by Farhaan Beeharry - CSSE Yr2 - M00681483.</div>'; //footer contents
    echo '</div>';
    echo '</body>';
    echo '</html>';
}

?>