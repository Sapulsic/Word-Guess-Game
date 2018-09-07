var wordList = ["halo", "covenent", "elites", "sanghelios", "master chief", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc", "blue team"];

var count = 0;
var s;
var guesses = [];
var random = wordList[Math.floor(Math.random() * wordList.length)];
var wins = 0;
var losses = 0;


function start() {

    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }

    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);
}

// window.onkeydown = function(event){
//     if(event.keyCode == 13 || event.which == 13){
//         sendNew();
//         if(event.preventDefault) event.preventDefault(); // This should fix it
//         return false; // Just a workaround for old browsers
//     }
//     return true;
// }

// function sendNew() {
//     var msg=document.getElementById('gLetter').value.toString().trim();
//     if(msg!=="") {
//     //send message        
//     document.getElementById('gLetter').value = "";
//     }

// }


function submit() {
    // debugger;
    var letter = document.getElementById("gLetter").value;
    // var guess = event.key;

    if (letter.length > 0) {
        for (var i = 0; i < random.length; i++) {
            if (random[i] === letter) {
                guesses[i] = letter;
            }
        }

        

        count++;
        document.getElementById("counting").innerHTML = "No. of clicks: " + count;
        document.getElementById("answer").innerHTML = guesses.join(" ");

        
        
    }
    if (count >  9) {
        document.getElementById("status").innerHTML ="Bruhh, come on!";
    }
    
    if (count >= 9) {
        losses++;
        losses = document.getElementById('losses').innerHTML = "Losses: " + losses;
        newGame();
    }
}

function clearMyField() {
    if(document.getElementById('gLetter').value == 'Enter a Letter...') {
    document.getElementById('gLetter').value = '';
    }
}

// var input = document.getElementById('gLetter');
// input.addEventListener('keyup', function(event) {
//     event.key;
// });


function newGame() {
    count = 0;
    guesses = [];
    random = wordList[Math.floor(Math.random() * wordList.length)];
    
    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }
    
    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);
    
    var counter = document.getElementById('counting');
    var finished = document.getElementById('status');
    
    counter.textContent = "No. of clicks: " + count;
    finished.textContent = " ";
    losses.textContent = "Losses" + losses;


}


