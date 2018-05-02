// THE JURASSICWORDS OBJECT *

var jurassicWords = {

    wins: 0,
    loses: 0,
    remainingGuesses: 15,
    words: ["tyrannosaurus"],
    holdsWord: [],
    holdsDisplay: [],
    guessedLetters: [],
    correct: false,

// JurassicWords Methods **

    beginNewRound() {
        newWord = this.words[Math.floor(Math.random() * this.words.length)];

        //this.holdsDisplay = [];
        //this.holdsWord = [];
        //this.remainingGuesses = 15;
        //this.guessedLetters = [];
        //this.correct = false;

        for ( i = 0; i < newWord.length; i++ ) {
            this.holdsDisplay.push("_")
            this.holdsWord.push(newWord.charAt(i));
        }
    },

    isNewLetter(userGuess) {
        var guess = userGuess.toLowerCase();
        var newLetter = true;

        for ( i = 0; i < this.guessedLetters.length; i++) {
            if ( guess === this.guessedLetters[i]) {
                newLetter = false;
            } 
        }

        if (newLetter) {
            return true;
        } else {
            return false;
        }
    },

    logLetter(userGuess) {
        var guess = userGuess.toLowerCase();
        this.guessedLetters.push(guess);
    },

    checkLetter(userGuess) {

        var guess = userGuess.toLowerCase();

        for ( i = 0; i < this.holdsWord.length; i++) {

            if (this.holdsWord[i] === guess) {
    
                this.holdsDisplay.splice(i,1,guess);
                this.correct = true;
                this.wins = this.wins + 1;
            }
        }

        if (this.correct) {
            this.correct = false;
        } else {
            this.remainingGuesses = this.remainingGuesses - 1;
            this.loses = this.loses + 1;
        }
    },

    didYouWin() {

        if ((this.holdsDisplay === this.holdsWord) || (this.remainingGuesses === 0)) {
            this.beginNewRound();
        }
    },

    updateDisplays() {

    }
}

// My Run Game Function ***

function runWordGame(userGuess) {
    if (jurassicWords.isNewLetter(userGuess)) {
        jurassicWords.logLetter(userGuess);
        jurassicWords.checkLetter(userGuess);
        jurassicWords.didYouWin();
        jurassicWords.updateDisplays();
    } else {
        return
    }
}

jurassicWords.beginNewRound();

runWordGame("n");
console.log(jurassicWords.remainingGuesses);
runWordGame("r")
console.log(jurassicWords.remainingGuesses);
runWordGame("r");
console.log(jurassicWords.remainingGuesses);
runWordGame("r");
console.log(jurassicWords.remainingGuesses);
runWordGame("T")

console.log(jurassicWords.holdsDisplay);
console.log(jurassicWords.holdsWord);
console.log(jurassicWords.guessedLetters);
console.log(jurassicWords.remainingGuesses);
