// THE JURASSICWORDS OBJECT *

window.onload = function() {
    var jurassicWords = {

        wins: 0,
        loses: 0,
        remainingGuesses: 8,
        words: ["tyrannosaurus","triceratops","velociraptor","stegosaurus","brachiosaurus","allosaurus","pachycephalosaurus","pterodactyls"],
        holdsWord: [],
        holdsDisplay: [],
        guessedLetters: [],
        correct: false,

    // JurassicWords Methods **

        beginNewRound() {
            newWord = this.words[Math.floor(Math.random() * this.words.length)];
            
            this.wins = 0;
            this.loses = 0;
            this.holdsDisplay = [];
            this.holdsWord = [];
            this.remainingGuesses = 8;
            this.guessedLetters = [];
            this.correct = false;

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

            if (this.holdsDisplay.join() === this.holdsWord.join()) {
                
                this.beginNewRound();
            } else if (this.remainingGuesses === 0) {
                this.beginNewRound();
            }
        },
    }

    function updateDisplays() {
        document.getElementById("DisplayWord").innerHTML = jurassicWords.holdsDisplay.join('  ');
        document.getElementById("Wins").innerHTML = "Wins " + jurassicWords.wins;
        document.getElementById("Loses").innerHTML = "Loses " + jurassicWords.loses;
        document.getElementById("GuessesRemaining").innerHTML = "Guesses Remaining  " + jurassicWords.remainingGuesses;
        document.getElementById("LettersGuessed").innerHTML = jurassicWords.guessedLetters.join('  ');
    }
    // My Run Game Function ***

    function runWordGame(userGuess) {
        if (jurassicWords.isNewLetter(userGuess)) {
            jurassicWords.logLetter(userGuess);
            jurassicWords.checkLetter(userGuess);
            jurassicWords.didYouWin();
            updateDisplays();
            console.log(jurassicWords.holdsDisplay);
            console.log(jurassicWords.holdsWord);
        } else {
            return
        }
    }

    jurassicWords.beginNewRound();

    document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode);
        runWordGame(letter);
    }
}

