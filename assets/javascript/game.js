// Array
var wordList = ["halo", "elites", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc"];

// Variables
var s;
var guesses = [];
var wrongGuesses = [];
var count = 9;
var wins = 0;
var losses = 0;

var random = wordList[Math.floor(Math.random() * wordList.length)];

function start() {

    // Loop through wordlist
    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }

    // for ( var i = 0; i < random.length; i++) {
    //     guesses[i] = wrongGuesses;
    // }

    // displays the word as "_"
    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);

    
    wrongGuesses = guesses.join(i);
    document.getElementById('wrongLetters').innerHTML = wrongGuesses
}


function submit() {
    // grabs what you put into the text box
    var letter = document.getElementById("gLetter").value;

    
    // checks to see if the letter is inside the word
    if (letter.length > 0) {
        for (var i = 0; i < random.length; i++) {
            if (random[i] === letter) {
                guesses[i] = letter;
            }
        }


        
        // Every guess it adds up
        count--;
        document.getElementById("counting").innerHTML = "No. of Chances: " + count;
        document.getElementById("answer").innerHTML = guesses.join(" ");

        
        
    }
    

    // Displays Wins
    if (random === guesses.join('')) {
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        newGame();
    }

    // Displays Losses
    if (count === 0) {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        newGame();
    }
}

// When newGame() is called, restarts the values back to the original and begin a new game
function newGame() {
    count = 9;
    // losses 
    guesses = [];
    random = wordList[Math.floor(Math.random() * wordList.length)];
    
    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }
    
    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);
    
    var counter = document.getElementById('counting');
    
    counter.textContent = "No. of Chances: " + count;
    losses.textContent = "Losses: " + losses;

}


