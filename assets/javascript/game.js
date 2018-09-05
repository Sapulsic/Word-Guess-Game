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



