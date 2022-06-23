let choice = prompt("Rock, Paper, or Scissors?")
if (choice.toLowerCase() == "rock"){
  console.log("You used Rock!")
}
if (choice.toLowerCase() == "paper"){
  console.log("You used Paper!")
}
if (choice.toLowerCase() == "scissors"){
  console.log("You used Scissors!")
}

let computer = Math.random();
if (computer < 0.34){
    computer = "Rock";
    console.log("computer used Rock!")
} else if(computer <= 0.67){
    computer = "Paper";
    console.log("computer used Paper!")
} else{
    computer = "Scissors";
    console.log("computer used Scissors!")
}

let winner = function(player1,player2){
  if(player1===player2){
    console.log("The result is a tie!");
    }
  if(player1==="Rock"){
  if(player2==="Scissors"){
    console.log("Player1 Wins!");
    }
  else{
    console.log("Player2 Wins!");
    }
    }
  if(player1==="Paper"){
  if(player2==="Rock"){
    console.log("Player1 Wins!");
    }
  else{
    console.log("Player2 Wins!");
    }
    }
  if(player1==="Scissors"){
  if(player2==="Rock"){
    console.log("Player2 Wins!");
    }
  else{
    console.log("Player1 Wins!");
    }
  }
};
winner(choice,computer);