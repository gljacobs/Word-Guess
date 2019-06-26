var inquirer = require("inquirer");
var Word = require("./word");

var log = ["tyrannosaurus", "pterodactyl", "velociraptor", "liopleurodon", "brachiosaurus", "triceratops", "stegosaurus"];

var wordToGuess = new Word(log[Math.floor(Math.random() * 7)]);
var blankString = wordToGuess.makeGuess();
var userIn = false;
var guesses = 7;

console.log("\nLETS PLAY A GAME  OF HANGMAN");
console.log("\n~~~~~ Can you guess what dinosaur I am thinking of? ~~~~~");

var ask = function () {
    userIn = true;
    console.log(`\nYou have ${guesses} guesses left: ${blankString}`);
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
            iResponse.userGuess = iResponse.userGuess.toLowerCase();
            if(iResponse.userGuess.toUpperCase() != iResponse.userGuess.toLowerCase() ){
                if (temp.includes(iResponse.userGuess)) {
                    for (let i = 0; i < temp.length; i++) {
                        if (temp[i] === iResponse.userGuess) {
                            blankString = blankString.split("");
                            blankString[i] = iResponse.userGuess;
                            blankString = blankString.join("");
                        }
                    }
                }
                else {
                    guesses--;
                }

                if(guesses === 0){
                    console.log(`\nLooks like you're out of guesses! The word was ${temp}... YOU LOSE`);
                    userIn = true;
                }

                if(temp === blankString){
                    console.log("\nWOW! You won! You really know your dinos!!!!!!!");
                    userIn = true;
                }
            }
            else {
                console.log("\nPLEASE ENTER A VALID LETTER");
            }

            while (!userIn) {
                ask();
            }
        });
}

ask();
