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
    if ($title == "Instructions") {
        echo '<script src="js/generalStyle.js"></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/instructionsStyle.css">';
    } else if ($title == "Leaderboard") {
        echo '<script src="js/generalStyle.js" async></script>';
        echo '<link rel="stylesheet" type="text/css" href="css/leaderboardStyle.css">';
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
    
    //link for javaScript file
    //echo '<script src="js/myStyle.js"></script>';
    
    echo '</head>';
    echo '<body>';
    
    //cover image
    echo '<section id="cover">';
    echo '<div class="cover"></div>';
    echo '<div class="container">';
    
    //logo
    echo '<div id="logo" class="col-sm-2"></div>';
    echo '<div class="col-sm-8">';
    echo '<div id="navigation">';
    
    //navigation links
    echo '<a href="index.php">Home</a>'; //link for homepage
    
    //if statements to choose which navigation links to display depending on parameter
    if ($title == "Instructions") {
        echo '<a  data-toggle="modal" href="#myModal">Trailer</a>'; //link for modal to watch trailer
    } else if ($title == "Leaderboard") {
        echo '<a href="instructions.php">Instructions</a>'; //link for instructions page
    }
    
    echo '</div>';
    echo '</div>';
    echo '<div id="sign-in" class="pull-right">';
    echo '<div class="sign-in-img">';
    echo '<img src="images/account.png" alt="">'; //link for account logo
    echo '</div>';
    echo '<div class="text">';
    
    //if statement to choose what to display in account section
    if ($title == "Instructions") {
        echo '<a id="choice"></a>'; //link for sign in page
    } else if ($title == "Leaderboard") {
        echo '<a id="choice"></a>';
    }
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '<div class="text">';
    echo '<h2>' . $title . '</h2>'; //showing the page title
    echo '</div>';
    echo '</div>';
    echo '</section>';
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