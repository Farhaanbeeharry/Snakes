<?php
include('common-layout2.php'); //link to include php common file in the webpage
outputHeader("Instructions"); //opening the header function with "Snakes" as parameter
?>

<section>
        <div class="instructions">
                <div class="container">
                        <div class="row">
            <div class="col-sm-4 col-xs-12">

            <!--First card for AIM-->
                <div class="bg-img-1"></div>
                <h2>Aim</h2>
                <div class="text-bottom">
                    <p>The aim of this game is to guide a snake
                        drawn in the form of a line throughout the platform.
                        The snake will have to eat items on the display by
                        simply running into them with its head. As it consumes them,
                        the snake grows longer which makes controlling progressively
                        more difficult.</p>
                </div>
            </div>

            <!--Second card for RULES-->
            <div class="col-sm-4 col-xs-12">
                <div class="bg-img-2"></div>
                <h2>Rules</h2>
                <div class="text-bottom">
                    <p>The snake should not run into itself or an obstacle placed on the screen
                        or into the platform/screen border.
                    </p>
                </div>
            </div>

            <!--Third card for controls-->
            <div class="col-sm-4 col-xs-12">
                <div class="bg-img-3"></div>
                <h2>Controls</h2>
                <div class="text-bottom">
                    <p>The snake can move in 4 directions which can be controlled by the player
                        by simply pressing on the respective arrow key in which he/she wants the 
                        snake to move.
                    </p>
                </div>
            </div>


        </div>
        </div>
        </div>
    </section>

    <!--Modal for trailer video-->
    <div class="modal fade" id="myModal">
            <video src="video/trailer.mp4" controls autostart="false"></video>
        </div>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>