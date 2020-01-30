function Snake() {
    this.x = 0; //snake initial x position
    this.y = 0; //snake initial y position
    this.xSpeed = scale * 1; //intial x direction of the snake
    this.ySpeed = 0; //initial y direction of the snake
    this.total = 1; //initial snake size
    this.score = 0; //initial score
    this.tail = []; //array to save the snake's position

    //audio files for sound effects
    var dead = new Audio("../audio/dead.mp3");
    var eat = new Audio("../audio/eat.mp3");
    var up = new Audio("../audio/up.mp3");
    var right = new Audio("../audio/right.mp3");
    var down = new Audio("../audio/down.mp3");
    var left = new Audio("../audio/left.mp3");

    //function to draw the snake
    this.draw = function () {
        ctx.fillStyle = "#FF3C1C";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    //level without border
    this.updateLevel1 = function () {
        document.getElementById("gameCanvas").style.border = "1px solid #9D9969";
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]; //keeps track of the snake position
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y }; //save the position of the snake
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x >= gameCanvas.width) { //if snake moves into border right
            this.x = 0; //it comes to the left again
        }
        if (this.y >= gameCanvas.height) { //if snake moves into border up
            this.y = 0; //it comes to the bottom
        }
        if (this.x < 0) { //if snake moves into the border left
            this.x = gameCanvas.width - 20; //it comes to the right
        }
        if (this.y < 0) { //if snake moves into the border down
            this.y = gameCanvas.height - 20; //it comes to the top
        }
    }

    //level with border
    this.updateLevel2 = function () {
        document.getElementById("gameCanvas").style.border = "3px solid #9D9969";
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y };
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x >= gameCanvas.width) { //if snake moves into right border
            let actualUser = sessionStorage.getItem('loggedInUsername'); //get the username logged in
            var existingArray = localStorage.getItem(actualUser); //create an array and store data of the user
            existingArray = existingArray ? JSON.parse(existingArray) : {}; //parse the data to be able to use it
            let actualScore = existingArray['score']; //get the score saved of the user
            if (actualScore < this.score) { //if the new score is greater than the stored one
                existingArray['score'] = this.score; //update the array with the new score
                localStorage.setItem(actualUser, JSON.stringify(existingArray)); //replace the user data in the local storage
            }
            gameOver(); //display the game over message
            dead.play(); //play the dead sound
            this.total = 1; //reset length of snake
            this.score = 0; //reset score of game
            this.tail = []; //reset snake position
            this.x = 0; //place the snake on the first square x axis
            this.y = 0; //place the snake on the first square y axis
            this.xSpeed = scale * 1; //reset direction of snake
            this.ySpeed = 0; //no initial vertical motion of the snake
        }
        if (this.y >= gameCanvas.height) { //if snake moves into bottom border
            let actualUser = sessionStorage.getItem('loggedInUsername'); //get the username logged in
            var existingArray = localStorage.getItem(actualUser); //create an array and store data of the user
            existingArray = existingArray ? JSON.parse(existingArray) : {}; //parse the data to be able to use it
            let actualScore = existingArray['score']; //get the score saved of the user
            if (actualScore < this.score) { //if the new score is greater than the stored one
                existingArray['score'] = this.score; //update the array with the new score
                localStorage.setItem(actualUser, JSON.stringify(existingArray)); //replace the user data in the local storage
            }
            gameOver(); //display the game over message
            dead.play(); //play the dead sound
            this.total = 1; //reset length of snake
            this.score = 0; //reset score of game
            this.tail = []; //reset snake position
            this.x = 0; //place the snake on the first square x axis
            this.y = 0; //place the snake on the first square y axis
            this.xSpeed = scale * 1; //reset direction of snake
            this.ySpeed = 0; //no initial vertical motion of the snake
        }
        if (this.x < 0) { //if snake moves into the left border
            let actualUser = sessionStorage.getItem('loggedInUsername'); //get the username logged in
            var existingArray = localStorage.getItem(actualUser); //create an array and store data of the user
            existingArray = existingArray ? JSON.parse(existingArray) : {}; //parse the data to be able to use it
            let actualScore = existingArray['score']; //get the score saved of the user
            if (actualScore < this.score) { //if the new score is greater than the stored one
                existingArray['score'] = this.score; //update the array with the new score
                localStorage.setItem(actualUser, JSON.stringify(existingArray)); //replace the user data in the local storage
            }
            gameOver(); //display the game over message
            dead.play(); //play the dead sound
            this.total = 1; //reset length of snake
            this.score = 0; //reset score of game
            this.tail = []; //reset snake position
            this.x = 0; //place the snake on the first square x axis
            this.y = 0; //place the snake on the first square y axis
            this.xSpeed = scale * 1; //reset direction of snake
            this.ySpeed = 0; //no initial vertical motion of the snake
        }
        if (this.y < 0) { //if snake moves into the top border
            let actualUser = sessionStorage.getItem('loggedInUsername'); //get the username logged in
            var existingArray = localStorage.getItem(actualUser); //create an array and store data of the user
            existingArray = existingArray ? JSON.parse(existingArray) : {}; //parse the data to be able to use it
            let actualScore = existingArray['score']; //get the score saved of the user
            if (actualScore < this.score) { //if the new score is greater than the stored one
                existingArray['score'] = this.score; //update the array with the new score
                localStorage.setItem(actualUser, JSON.stringify(existingArray)); //replace the user data in the local storage
            }
            gameOver(); //display the game over message
            dead.play(); //play the dead sound
            this.total = 1; //reset length of snake
            this.score = 0; //reset score of game
            this.tail = []; //reset snake position
            this.x = 0; //place the snake on the first square x axis
            this.y = 0; //place the snake on the first square y axis
            this.xSpeed = scale * 1; //reset direction of snake
            this.ySpeed = 0; //no initial vertical motion of the snake
        }
    }

    this.changeDirection = function (direction) { //function to choose direction of the snake
        switch (direction) { //switch case depending on key press
            case 'Up': //if arrow up pressed
                if (this.xSpeed != 0 && this.ySpeed != scale * 1) { //if snake is not in the same or opposite direction
                    up.play(); //play sound up
                    this.xSpeed = 0; //set x motion to 0
                    this.ySpeed = - scale * 1; //set y motion to up
                }
                break; //get out of switch case
            case 'Down':
                if (this.xSpeed != 0 && this.ySpeed != -scale * 1) { //if snake is not in the same or opposite direction
                    down.play(); //play sound down
                    this.xSpeed = 0; //set x motion to 0
                    this.ySpeed = scale * 1; //set y motion to down
                }
                break; //get out of switch case
            case 'Left':
                if (this.xSpeed != scale * 1 && this.ySpeed != 0) { //if snake is not in the same or opposite direction
                    left.play(); //play sound left
                    this.xSpeed = - scale * 1; //set x motion to left
                    this.ySpeed = 0; //set y motion to 0
                }
                break; //get out of switch case
            case 'Right':
                if (this.xSpeed != -scale * 1 && this.ySpeed != 0) { //if snake is not in the same or opposite direction
                    right.play(); //play sound right
                    this.xSpeed = scale * 1; //set x motion to right
                    this.ySpeed = 0; //set y motion to 0
                }
                break; //get out of switch case
        }
    }

    //function to check if the snake eats the food
    this.eat = function (food) {
        if (this.x === food.x && this.y === food.y) { //if the food and the head of the snake has the same coordinates
            eat.play(); //play the eat sound
            this.total++; //increase snake length by 1
            this.score++; //increase score by 1
            return true; //return true so that new food location is picked
        }
        return false; //if the snake does not eat the food, return false so that the food stays in the same location
    }

    //check if the snake collides against its body
    this.checkCollision = function () {
        for (var i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) { //if the snake's head has the same coordinates as its body
                let actualUser = sessionStorage.getItem('loggedInUsername'); //get the username logged in
                var existingArray = localStorage.getItem(actualUser); //create an array and store data of the user
                existingArray = existingArray ? JSON.parse(existingArray) : {}; //parse the data to be able to use it
                let actualScore = existingArray['score']; //get the score saved of the user
                if (actualScore < this.score) { //if the new score is greater than the stored one
                    existingArray['score'] = this.score; //update the array with the new score
                    localStorage.setItem(actualUser, JSON.stringify(existingArray)); //replace the user data in the local storage
                }
                gameOver(); //display the game over message
                dead.play(); //play the dead sound
                this.total = 1; //reset length of snake
                this.score = 0; //reset score of game
                this.tail = []; //reset snake position
                this.x = 0; //place the snake on the first square x axis
                this.y = 0; //place the snake on the first square y axis
                this.xSpeed = scale * 1; //reset direction of snake
                this.ySpeed = 0; //no initial vertical motion of the snake
            }
        }
    }
}

//function to display game over message
function gameOver() {
    document.getElementById("gameOverMessage").innerText = "GAME OVER !"; //display the message game over using html
    //wait for 2000 milliseconds before doing the function
    setTimeout(function () {
        clearTimeout(); //after the 2 seconds, clear the 2000 miliiseconds time out
        document.getElementById("gameOverMessage").innerText = ""; //delete the game over message
    }, 2000); //2000 milliseconds timeout
}