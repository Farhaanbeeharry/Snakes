const gameCanvas = document.getElementById("gameCanvas"); //accessing the canvas
const ctx = gameCanvas.getContext("2d"); //creating a 2d context
const scale = 20; //giving the canvas a scale of 1:20
const rows = gameCanvas.height / scale; //defining number of rows
const columns = gameCanvas.width / scale; //defining number of columns

//declaring variables
var snake;
var intervalTime = 150;
var inputValid = true;

//opening the game
(function setup() {
    theGame();
}());

function theGame() {
    snake = new Snake(); //creating object snake
    food = new Food(); //creating object food
    food.pickLocation(); //place the food at a random position
    customInterval(gameLogic);
}

function gameLogic() {
    let loggedUser = sessionStorage.getItem('loggedInUsername'); //check for login - save the login username
    var existArray = localStorage.getItem(loggedUser); //get all data of the login person
    existArray = existArray ? JSON.parse(existArray) : {}; //parse the data to an array
    let actualHighscore = existArray['score']; //get the saved score from the array
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //displaying the canvas
    food.draw(); //showing the food on the canvas

    //deciding levels
    if (snake.score > 69) { //if score is greater than 69
        intervalTIme = 50; //interval time changes to 50
        document.getElementById("level").innerText = "Level 8"; //displays level 8
        snake.updateLevel2(); //level 2 is played
    } else if (snake.score > 59) {
        intervalTIme = 65;
        document.getElementById("level").innerText = "Level 7";
        snake.updateLevel2();
    } else if (snake.score > 49) {
        intervalTIme = 70;
        document.getElementById("level").innerText = "Level 6";
        snake.updateLevel2();
    } else if (snake.score > 39) {
        intervalTime = 85;
        document.getElementById("level").innerText = "Level 5";
        snake.updateLevel2();
    } else if (snake.score > 29) {
        intervalTime = 110;
        document.getElementById("level").innerText = "Level 4";
        snake.updateLevel2();
    } else if (snake.score > 19) {
        intervalTime = 85;
        document.getElementById("level").innerText = "Level 3";
        snake.updateLevel1();
    } else if (snake.score > 9) {
        intervalTime = 110;
        document.getElementById("level").innerText = "Level 2";
        snake.updateLevel1();
    } else if (snake.score >= 0) {
        intervalTime = 150;
        document.getElementById("level").innerText = "Level 1";
        snake.updateLevel1();
    }

    //displaying warnings about next levels
    if (snake.score === 9) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 10) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else if (snake.score === 19) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 20) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else if (snake.score === 29) {
        document.getElementById("message").innerText = "The game will have borders soon !";
    } else if (snake.score === 30) {
        document.getElementById("message").innerText = "The game now has borders !";
    } else if (snake.score === 39) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 40) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else if (snake.score === 49) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 50) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else if (snake.score === 59) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 60) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else if (snake.score === 69) {
        document.getElementById("message").innerText = "Snake will move faster soon !";
    } else if (snake.score === 70) {
        document.getElementById("message").innerText = "Speed has now been increased !";
    } else {
        document.getElementById("message").innerText = "";
    }

    //displaying the snake
    snake.draw();

    //if the snake eats the food, a new food location is chosen
    if (snake.eat(food)) {
        food.pickLocation();
    }

    //check if the snake collides with itself
    snake.checkCollision();

    //displaying the score of the game
    document.getElementById("score").innerText = "Score = " + snake.score;

    //displaying the highest score of the user
    if (snake.score < actualHighscore) {
        document.getElementById("highscore").innerText = "Your highscore = " + actualHighscore;
    } else {
        document.getElementById("highscore").innerText = "Your highscore = " + snake.score;
    }
}

//function to change the time interval the canvas reloads
//depending of the level the user is at
function customInterval(callback) { 
    setTimeout(function () {
        if (typeof callback == "function") callback();
        customInterval(callback);
    }, intervalTime);
}

//check for key press
window.addEventListener('keydown', ((evt) => {
    if (inputValid) { //to allow only one key press at a time
        inputValid = false;
        const direction = evt.key.replace('Arrow', '');
        snake.changeDirection(direction); //parse the key press to decide the direction of the snake
        setTimeout(function(){
            inputValid = true;
        }, 50);
    }
}))