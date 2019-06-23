var Letter = require("./letter.js");

var Word = function(word) {
    this.word = word;
    this.makeGuess = function(){
        var temp = ""
        for(var i = 0; i < this.word.length; i++){
            temp += "_";
        }
        return temp;
    };
    this.guess = this.makeGuess(word);
}

var ya = new Word("ya");

console.log(ya.guess);
