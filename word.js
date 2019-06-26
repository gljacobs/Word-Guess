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
    this.makeGuess = function(){
        var blank = "";
        for(var i = 0; i < this.word.length; i++){
            blank += "_";
        }
        return blank;
    };
    this.display = function() {
        var showThis = ""
        for(var i = 0; i < this.word.length; i++){
            showThis += this.word[i].char;
        }
        return showThis;
    }
}

module.exports = Word;