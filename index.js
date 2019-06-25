var inquirer = require("inquirer");
var Word = require("./word");

var log = ["tyrannosaurus", "pterodactyl", "velociraptor", "liopleurodon", "brachiosaurus", "triceratops", "stegosaurus"];

var wordToGuess = new Word(log[2]);
var userIn = false;

//while(wordToGuess.word !== wordToGuess.guess && !userIn) {
var ask = function() {
    userIn = true;
    inquirer.prompt([
        {
            input: "input",
            message: "What letter would you like to guess?",
            name: "userGuess"
        }
    ])
    .then((iResponse) => {
        userIn = iResponse.userGuess;
        userIn = false;
        while(wordToGuess.word !== wordToGuess.guess && !userIn) {
            ask();
        }
    });    
}

ask();
//}