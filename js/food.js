function Food() {
    this.x; //x location for food
    this.y; //y location for food

    //function to pick food location
    this.pickLocation = function () {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale; //random calculate x for food location
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale; //random calculate y for food location
        for (var position of snake.tail) { //get the x and y positions of the snake
            if (position.x == this.x && position.y == this.y) { //if food is behind snake's body
                this.pickLocation(); //generate food again
                break; //get out of for-loop 
            }
        }
        if (snake.x == this.x && snake.y == this.y) { //if food is behind snake's head
            this.pickLocation(); //generate food again
        }
    }

    //function to display the food
    this.draw = function () {
        var randomColour = '#' + Math.floor(Math.random() * 16777215).toString(16); //set random color to the food
        //when warnings shows up, food had a fixed color
        if (snake.score === 9 || snake.score === 19 || snake.score === 29 || snake.score === 39 || snake.score === 49 || snake.score === 59 || snake.score === 69) {
            ctx.fillStyle = '#9D9969';
        } else {
            ctx.fillStyle = randomColour; //random color when no warning shows up
        }
        //creates the food
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}