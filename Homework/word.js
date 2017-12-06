var Letter = require('./Letter');


console.log();

//Used to create an object representing the current word the user is attempting to guess.This should contain word specific logic and data.
function Word(word) {
    //grab word store to variable
    this.word = word
    this.nLet = []
    this.underScores = [];
    this.count = 0
    //method for looping through word and displaying underscores
    this.genUnderScored = function(){
        for (let i = 0; i < this.word.length; i++) {
            var letter = new Letter(word[i])
            this.nLet.push(letter)
            this.underScores.push(letter.shower())
        }
        console.log(this.nLet)
        this.updateConsole()
    }
    //method to take in a user guess and 
    //
    this.userLetter = function (letter) {
        for (var i = 0; i < this.nLet.length; i++) {
            console.log("hmmmmm");
            if(this.nLet[i].userGuess(letter)){
                this.underScores[i] = this.nLet[i].shower()
                
            }
        }
        this.updateConsole()
    }
    this.updateConsole = function(){
        console.log(this.underScores.join(" "))
       
    }
};
module.exports = Word;