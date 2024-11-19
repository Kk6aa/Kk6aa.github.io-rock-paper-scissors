// declare the needed vars, write a function that randomly chooses rock, paper or scissors
// 2- check if the random choice beat the userchoice, based on that, declare the winner.

let UserScore = 0;
let ComputerScore = 0;


function getComputerChoice() {
    // will randomly return one of the following string values: “rock”, “paper” or “scissors”
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    switch(ComputerChoice){
        case 1:{
            return "rock";
        }
        case 2:{
            return "paper";
        }
        case 3: {
            return "scissors";
        }
    }
}

function getUserChoice() {
    let UserChoice = prompt("choose: rock or paper or scissors?");
    return UserChoice.toLowerCase();
}

function playRound(UserChoice, ComputerChoice) {
        if (UserChoice == 'paper' && ComputerChoice == 'scissors') {
            console.log("You lose! Scissors beats Paper");
            ComputerScore ++;
        } else if (UserChoice == 'paper' && ComputerChoice == 'rock') {
            console.log("You win! Paper beats Rock");
            UserScore++;
        } else if (UserChoice == 'rock' && ComputerChoice == 'paper') {
            console.log("You lose! Paper beats Rock");
            ComputerScore++;
        } else if (UserChoice == 'rock' && ComputerChoice == 'scissors') {
            console.log("You win! Rock beats Scissor");
            UserScore++;
        } else if (UserChoice == 'scissors' && ComputerChoice == 'rock') {
            console.log("You lose! Rock beats Scissor");
            ComputerScore++;
        }else if (UserChoice =='scissors' && ComputerChoice == 'paper') {
            console.log("You win! Scissor beats Paper");
            UserScore++;
        } else if (UserChoice === ComputerChoice) {
            console.log(`Draw! your choice was ${getUserChoice()} while the computer choice was ${
              getComputerChoice()}`);
        }
    
//  console.log(`your score ${UserScore} and the computer score is ${ComputerScore}, if you wanna play again, refresh the window!`);
}

UserChoice = getUserChoice();
ComputerChoice = getComputerChoice();



function playGame(Round) {
    for (let i = 1; i <= Round; i++) {
        playRound(UserChoice, ComputerChoice);
        console.log(`Round ${i}`);
    }
    
}

playGame(5);

function showResult() {
}
if (UserScore > ComputerScore){
    console.log(`You win, your score ${UserScore} and the computer score is ${ComputerScore}, if you wanna play again, refresh the window!`);
}
else  {
    console.log(`You lose, your score ${UserScore} and the computer score is ${ComputerScore}, if you wanna play again, refresh the window!`);
}

showResult();