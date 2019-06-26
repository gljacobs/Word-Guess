var inquirer = require("inquirer");
var Word = require("./word");

var log = ["tyrannosaurus", "pterodactyl", "velociraptor", "liopleurodon", "brachiosaurus", "triceratops", "stegosaurus"];

var wordToGuess = new Word(log[2]);
var blankString = wordToGuess.makeGuess();
var userIn = false;

console.log("\nLETS PLAY A GAME  OF HANGMAN");
console.log("\n~~~~~ Can you guess what dinosaur I am thinking of? ~~~~~");


//while(wordToGuess.word !== wordToGuess.guess && !userIn) {
var ask = function() {
    userIn = true;
    console.log(`\nGuesses left: ${blankString}`);
    inquirer.prompt([
        {
            input: "input",
            message: "What letter would you like to guess?",
            name: "userGuess"
        }
    ])
    .then((iResponse) => {
        userIn = false;
        var includes = false
        var temp = wordToGuess.display();
                
       while(temp.includes(iResponse.userGuess)) {
           console.log(temp.indexOf(iResponse.userGuess));
           
           blankString = blankString.split("");
           console.log(blankString);
           
           blankString[temp.indexOf(iResponse.userGuess)] = iResponse.userGuess;
           blankString = blankString.join("");
       }
        while(!userIn) {
            ask();
        }
    });    
}

ask();
//}