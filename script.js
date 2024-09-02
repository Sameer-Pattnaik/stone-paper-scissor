let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choicesY");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const genCompChoice =()=>{
     const options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random() * 3);
     return options[randIdx];
}
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText="Game is Draw,Play Again";
    msg.style.backgroundColor="violet"

};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You win");
        msg.innerText=`You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("You lose!Your ${compChoice} beats ${userChoice}");
        msg.style.backgroundColor="red";
        msg.innerText=`You Lose!.Your ${compChoice} beats ${userChoice}`;

    }
}
const playGame =(userChoice) => {
   console.log("user choice =",userChoice);
   const compChoice=genCompChoice();
   console.log("comp choice =",compChoice);
   if(userChoice === compChoice)
   {
    drawGame();
   }
   else{
    let userWin=true;
    if(userChoice === "rock")
    {
        userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice === "paper")
    {
        userWin = compChoice === "scissors"?false:true;
    }
    else{
        userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choicesY)=>{
    console.log(choicesY);
    choicesY.addEventListener("click",()=>{
        const userChoice=choicesY.getAttribute("id");
        playGame(userChoice);
    });
});