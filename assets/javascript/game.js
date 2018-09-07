var wordList = ["halo", "covenent", "elites", "sanghelios", "master chief", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc", "blue team"];

var s;
var guesses = [];
var wrongGuesses = [];
var random = wordList[Math.floor(Math.random() * wordList.length)];
var count = 0;
var wins = 0;
var losses = 0;


function start() {

    // Loop through wordlist
    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }

    // displays the word as "_"
    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);
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

        

        count++;
        document.getElementById("counting").innerHTML = "No. of clicks: " + count;
        document.getElementById("answer").innerHTML = guesses.join(" ");

        
        
    }
    if (count >  9) {
        document.getElementById("status").innerHTML ="Bruhh, come on!";
    }
    
    if (count > 9) {
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


