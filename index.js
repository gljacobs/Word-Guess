var inquirer = require("inquirer");
var Word = require("./word");

inquirer.prompt([
    {
        input: "input",
        message: "\nPlease guess a letter....\n",
        name: "userGuess"
    }
])
.then((iResponse) => {
    var input = new Word(iResponse.userGuess);
    input.display();
    console.log(input.guess);
    
})