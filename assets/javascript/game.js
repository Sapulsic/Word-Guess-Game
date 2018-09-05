<<<<<<< HEAD
var wordList = ["halo", "covenent", "elites", "sanghelios", "master chief", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc", "blue team"];

var count = 0;
var s;
var guesses = [];


var random = wordList[Math.floor(Math.random() * wordList.length)];


function start() {
    debugger;v
    for ( var i = 0; i < random.length; i++) {
        guesses[i] = "_";
    }

    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(random);
}


function Letters() {
    debugger;
    var letter = document.getElementById("gLetter");


    if (letter.length > 0) {
        for (var i = 0; i < random.length; i++) {
            if (random[i] === letter) {
                guesses[i] = letter
            }
        }

        count++;
        document.getElementById("wrong").innerHTML = "No. of clicks " + count;
        document.getElementById("answer").innerHTML = wordList.join(" ");

    }
    if (count > 9) {
        document.getElementById("status").innerHTML ="Bruhh, come on!";
    }

}



=======
var hm = document.getElementsByClassName("gGame");
var msgTitle = document.getElementsByClassName("title");
var restart = document.getElementsByClassName("restart");
var guess = document.getElementsByClassName("guess");
var wrong = document.getElementsByClassName("wrong");
// var wrongGuess = [];
// var rightGuess = [];
var gForm = document.getElementsByClassName("gForm");
var gLetter = document.getElementsByClassName("gLetter");

var correct = 0;
var wrongLimit = 9;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

hm = new GuessingGame();

document.onkeyup = function(event) {
    gLetter = event.key;
    console.log(gLetter);
    
    if(!hm.loss) {
        if (alphabet.includes(gLetter) && !hm.guessedLetters.includes(gLetter)) {
            hm.checkGuess(gLetter);
        }
    }   else {
        hm = new GuessingGame();
        hm.update();
    }
}

    function GuessingGame() {
        this.wordList = ["halo", "covenent", "elites", "sanghelios", "master chief", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc", "blue team"];

        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.wrongGuess = [];
        this.rightGuess = [];
        this.loss = false;
        this.wrong = 0;

        for (var i = 0; i < word.length; i++) {
            this.wrongGuess[i] = (false);      
        }

    }

    GuessingGame.prototype.checkGuess = function(char) {
        this.guessedLetters.push(char);
    
        var TheWord = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word.charAt(i) === char) {
                isInWord = true;
                this.wrongGuess[i] = true;
            }
        }
        if (!TheWord) {
            this.wrong++;
        }
    
        if (this.wrong >= wrongLimit) {
            losses++;
            this.loss = true;
        }
    
        if (!this.wrongGuess.includes(false)) {
            wins++;
            this.loss = true;
        }
    
        game.update();
    };

    Hangman.prototype.updatePageData = function() {
        var tempString = "";
        for (var i = 0; i < this.visibleLetters.length; i++) {
            tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i).toUpperCase() : "_");
            if (i < (this.visibleLetters.length - 1)) tempString += " ";
        }
        wordDisplayLettersElement.textContent = tempString;
    
        tempString = "";
        for (var i = 0; i < this.guessedLetters.length; i++) {
            tempString += (this.guessedLetters[i].toUpperCase());
            if (i < (this.guessedLetters.length - 1)) tempString += " ";
        }
        for (var i = tempString.length; i < 51; i++) {
            tempString += " ";
        }
        guessedLettersElement.textContent = tempString;
    
        tempString = this.errors + " / " + maxErrors;
        for (var i = tempString.length; i < 32; i++) {
            tempString += " ";
        }
        errorCountElement.textContent = tempString;
    
        tempString = wins + "";
        for (var i = tempString.length; i < 45; i++) {
            tempString += " ";
        }
        winCountElement.textContent = tempString;
    
        tempString = losses + "";
        for (var i = tempString.length; i < 43; i++) {
            tempString += " ";
        }
        lossCountElement.textContent = tempString;
    
        for (var i = 0; i < blinkElements.length; i++) {
            blinkElements[i].textContent = (this.gameOver ? pressAnyKeyToReset[i] : pressAnyKeyToStart[i]);
        }
    
        for (var i = 0; i < alertLineElements.length; i++) {
            alertLineElements[i].textContent = (this.alertLines[i]);
        }
    }
    
    game.updatePageData();
>>>>>>> 2e63625f2c640bd439fa2b6d41b4ef65000dcd71
