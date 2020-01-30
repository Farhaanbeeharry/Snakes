function getAllLocalStorage() {
    var existArray = new Array(); //creates an empty array
    for (var i = 0; i < localStorage.length; i++) { //for the amount of users in local storage
        var key = localStorage.key(i); //get the key for each user
        var temp = localStorage.getItem(key); //for each key, get the data of the user
        existArray[i] = JSON.parse(temp); //parse the data into an array
    }

    //sorting
    for (let i = 1; i < existArray.length; i++) { //for the amount of index in the array
        for (let j = 0; j < existArray.length - 1; j++) {
            if (existArray[j].score < existArray[j + 1].score) {
                //if score of A > score of B, order stays same
                //if score of C > score of B, swaps order
                //C goes to temp, B goes to C and C goes to B
                let temp = existArray[j + 1];
                existArray[j + 1] = existArray[j];
                existArray[j] = temp;
            }
        }
    }
    return existArray;
}

var allData = getAllLocalStorage(); //get the sorted array from the function above
let text = ''; //define text
let ranking = 1; //define ranking with integer 1
for (let i = 0; i < allData.length; i++) { //for each user in local storage
    text += "<tr>"; //opens a row in the table
    text += "<td>" + ranking + "</td>"; //shows the ranking 
    text += "<td>" + allData[i].username + "</td>"; //shows the username
    text += "<td>" + allData[i].score + "</td></tr>"; //shows the score and closes the row
    ranking++; //ranking increases by 1
}

document.getElementsByTagName("tbody")[0].innerHTML = text; //access the table row in the html table