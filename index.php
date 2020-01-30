<?php
include('common-layout1.php'); //link to include php common file in the webpage
outputHeader("Snakes"); //opening the header function with "Snakes" as parameter
?>

<!--Slogan Title (Eat. Grow. Survive.)-->
    <div class="slogan">
    <!--if logged in, username will appear-->
        <p id="showUserName"></p>
        <h1> eat. grow. <br> <span> survive. </span></h1>
        <!--Play button-->
        <div class="play-btn">
            <a id="play"></a>
        </div>
    </div>
    <!--Modal for trailer-->
    <div class="modal fade" id="myModal">
        <video src="video/trailer.mp4" controls autostart="false"></video> <!--link for trailer video-->
    </div>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>