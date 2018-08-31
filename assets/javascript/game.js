guessingGame = {
    init: function(words) {
        guessingGame.words = words,
        guessingGame.hm = $(".gGame"),
        guessingGame.message = $(".message"),
        guessingGame.msgTitle = $(".title"),
        guessingGame.msgText = $("text"),
        guessingGame.restart = $(".restart"),
        guessingGame.wrd = this.randomWord(),
        guessingGame.correct = 0,   
        guessingGame.guess = $(".guess"),
        guessingGame.wrong = $(".wrong"),
        guessingGame.wrongGuess = [],
        guessingGame.rightGuess = [],
        guessingGame.gForm = $(".gForm"),
        guessingGame.gLetter = $("gLetter"),
        guessingGame.setup();
    },
    
    
}
    
    var wordList = ["halo", "covenent", "elites", "sanghelios", "master chief", "grunts", "mythic", "jackals", "odst", "arbiter", "prophets", "ark", "flood", "brute", "spartans", "unsc", "blue team"];