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
const selection = document.querySelector("#selection");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
const rounds = document.querySelector("#rounds");

rock.addEventListener('click', () => getUserChoice('rock'));
paper.addEventListener('click', () => getUserChoice('paper'));
scissors.addEventListener('click', () => getUserChoice('scissors'));

let roundCount = 0;

function getUserChoice(UserChoice) {
    if (roundCount >= 5) {
        console.log('if you want to play again refresh the page');
        return;
    }
    
        ComputerChoice = getComputerChoice();
        playRound(UserChoice, ComputerChoice);
        roundCount++;

        const round = document.createElement("p");
        round.textContent = `Round ${roundCount}`;
        rounds.appendChild(round);

        const gameScore = document.createElement("p");
        gameScore.textContent = `Your score:${UserScore} VS computer score:${ComputerScore}`;
        rounds.appendChild(gameScore);

       if (roundCount === 5) {
            showResult();
        }
    
}


function playRound(UserChoice, ComputerChoice) {
        if (UserChoice == 'paper' && ComputerChoice == 'scissors') {
            
            const msg = document.createElement("p");
            msg.textContent = `You lose! Scissors beats Paper`;
            rounds.appendChild(msg);
            ComputerScore ++;

        } else if (UserChoice == 'paper' && ComputerChoice == 'rock') {
            
            const msg_2 = document.createElement("p");
            msg_2.textContent = `You win! Paper beats Rock`;
            rounds.appendChild(msg_2);
            UserScore++;

        } else if (UserChoice == 'rock' && ComputerChoice == 'paper') {
            
            const msg_3 = document.createElement("p");
            msg_3.textContent = `You lose! Paper beats Rock`;
            rounds.appendChild(msg_3);
            ComputerScore++;

        } else if (UserChoice == 'rock' && ComputerChoice == 'scissors') {
            
            const msg_4 = document.createElement("p");
            msg_4.textContent = `You win! Rock beats Scissor`;
            rounds.appendChild(msg_4);
            UserScore++;

        } else if (UserChoice == 'scissors' && ComputerChoice == 'rock') {
            
            const msg_5 = document.createElement("p");
            msg_5.textContent = `You lose! Rock beats Scissor`;
            rounds.appendChild(msg_5);
            ComputerScore++;

        }else if (UserChoice =='scissors' && ComputerChoice == 'paper') {
           
            const msg_6 = document.createElement("p");
            msg_6.textContent = `You win! Scissor beats Paper`;
            rounds.appendChild(msg_6);
            UserScore++;

        } else if (UserChoice === ComputerChoice) {
            const msg_7 = document.createElement("p");
            msg_7.textContent = `Draw! your choice was ${UserChoice} while the computer choice was ${
               ComputerChoice}`;
            rounds.appendChild(msg_7);
              return;
        }
}

function showResult() {
    if (UserScore > ComputerScore){
        const winResult = document.createElement("p");
            winResult.textContent = `You win, your score ${UserScore} and the computer score is ${ComputerScore}, if you wanna play again, refresh the window!`;
            rounds.appendChild(winResult);
    }
    else if (UserScore < ComputerScore) {
        const loseResult = document.createElement("p");
            loseResult.textContent = `You lose the game! Final score: ${UserScore} - ${ComputerScore}, if you wanna play again refresh the window`;
            rounds.appendChild(loseResult);
      } else if (UserScore === ComputerScore) {
        // console.log(`);
        const drawResult = document.createElement("p");
            drawResult.textContent = `It's a draw! Final score: ${UserScore} - ${ComputerScore} if you wanna play again refresh the window`;
            rounds.appendChild(drawResult);
      }
    
}

