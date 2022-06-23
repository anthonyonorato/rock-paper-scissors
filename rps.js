var choice = prompt("Rock, Paper, or Scissors?")
if (choice.toLowerCase() == "rock"){
  console.log("You used Rock!")
}
if (choice.toLowerCase() == "paper"){
  console.log("You used Paper!")
}
if (choice.toLowerCase() == "scissors"){
  console.log("You used Scissors!")
}

var cpuChoice = Math.random();
if (cpuChoice < 0.34){
    cpuChoice = "Rock";
    console.log("CPU used Rock!")
} else if(cpuChoice <= 0.67){
    cpuChoice = "Paper";
    console.log("Cpu used Paper!")
} else{
    cpuChoice = "Scissors";
    console.log("CPU used Scissors!")
}

var winner = function(player1,player2){
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
winner(choice,cpuChoice);