<?php
include('common-layout1.php'); //link to include php common file in the webpage
outputHeader("Play - Snakes"); //opening the header function with "Snakes" as parameter
?>

<!--Box for game window-->
    <canvas id="gameCanvas" height="540" width="540"></canvas>
    
    <!--a div for the scoreboard-->
    <div id="scoreboard">
         
        <p id="level"></p> <!--show the current level of the game-->
        <p id="score"></p> <!--show the current score of the game-->
        <p id="highscore"></p> <!--show the highest score of the user-->
    </div>

    <p id="message"></p> <!--shows warnings about next level-->
    <p id="gameOverMessage"></p> <!--message game over appears if snake dies-->


    <!--Link for javascript files-->
    <script src="js/food.js"></script>
    <script src="js/snake.js"></script>
    <script src="js/draw.js"></script>
    <script src="js/generalStyle.js"></script>
    

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>