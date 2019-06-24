var Letter = require("./letter.js");

var Word = function(wordIn) {
    this.addWord = function(wordInput) {
        var wordTemp = [];
        for(var i = 0; i < wordInput.length; i++){
            wordTemp.push(new Letter(wordInput[i]));
        }
        return wordTemp;
    }
    this.word = this.addWord(wordIn);
    this.makeGuess = function(num){
        var temp = "";
        for(var i = 0; i < num; i++){
            temp += "_";
        }
        return temp;
    };
    this.guess = this.makeGuess(this.word.length);
    this.display = function() {
        var showThis = ""
        for(var i = 0; i < this.word.length; i++){
            showThis += this.word[i].char;
        }
        console.log(showThis);
    }
}

module.exports = Word;