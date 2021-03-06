////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.


    if ((playerMove === "rock") && (computerMove === "rock")) { 
        winner = "tie"; 
    }
    else if ((playerMove === "rock") && (computerMove === "paper")) { 
        
        winner = "computer"; 
    }
    else if ((playerMove === "rock") && (computerMove === "scissors")) { 
        
        winner = "player"; 
    }
    else if ((playerMove === "paper") && (computerMove === "rock")) { 
        
        winner = "player"; 
    }
    else if (playerMove === "paper" && computerMove === "paper") { 
        
        winner = "tie"; 
    }
    else if (playerMove === "paper" && computerMove === "scissors") { 
        
        winner = "computer"; 
    }
    else if (playerMove === "scissors" && computerMove === "rock") { 
        
        winner = "computer"; 
    }
    else if (playerMove === "scissors" && computerMove === "paper") { 
        
        winner = "player"; 
    }
    else  {
    
    winner = "tie";
    }
    
return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5) && (computerWins < 5)) {
        
        playerMove = getPlayerMove();
            
        computerMove = getComputerMove();
    
        winner = getWinner(playerMove, computerMove);
        
        
        if (winner === "player"){
            playerWins += 1; 
            console.log ("Player chose " + playerMove + "\n" + " While computer chose " + computerMove + "\n" + " Player has won this round!");
        }
             
        else if (winner === "computer"){
            computerWins += 1;
            console.log ("Player chose " + playerMove + "\n" + " While computer chose " + computerMove + "\n" + " Computer has won this round.");
        }
        
        else   {
            console.log ("Its a tie.");
        }

        console.log("The score is currently: " + "Player" + " " + playerWins + " to " +      
        "Computer" + " " + computerWins + "\n");
        
    }
   
        if (playerWins === 5) 
              console.log ("The winner of the match is Player");
            
        if (computerWins === 5)
              console.log ("The winner of the match is Computer");

                return [playerWins, computerWins];
            }

// executes game
playToFive();


