<?php
include('common-layout2.php'); //link to include php common file in the webpage
outputHeader("Leaderboard"); //opening the header function with "Snakes" as parameter
?>


  <section>
    <div class="leaderboard">
      <div class="container">
                             
        <!--Table for leaderboard-->    
        <table class="table">
          <thead>
            <tr>
            <th id="orangetitle">Rank</th>
            <th>Username</th>
            <th>Score</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
       </div>
            
            
      </div>

      <!--link for leaderboard javascript file-->
      <script src="js/leaderboard.js"></script>
                
      </section>

<?php
outputFooter(); //opening the footer function
?> 

</body>
</html>