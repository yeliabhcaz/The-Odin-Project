const arr = ['rock','paper','scissors'];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winner = document.querySelector("#winner");
const user_score = document.querySelector("#user-score");
const cpu_score = document.querySelector("#cpu-score");
let computer_tally = 0;
let user_tally = 0;

function computerPlay(){
    const decision = Math.floor(Math.random() * arr.length);
    return decision;
}

function playRound(user) {
    user = arr.indexOf(user);
    cpu = computerPlay();
    if (user == cpu) {
        winner.textContent = "It's a Tie"
    }
    else if (user == arr.length - 1 && cpu == 0) {
        winner.textContent = "Computer Wins"
        computer_tally += 1;
        if (computer_tally == 5){
            cpu_score.textContent = "Computer Wins";
        }
        else {
            cpu_score.textContent = computer_tally;
        }
    }
    else if (cpu == arr.length - 1 && user == 0) {
        winner.textContent = "User Wins"
        user_tally += 1;
        if (user_tally == 5){
            user_score.textContent = "User Wins";
        }
        else {
            user_score.textContent = user_tally;
        }
    }
    else if (user > cpu) {
        winner.textContent = "User Wins"
        user_tally += 1;
        if (user_tally == 5){
            user_score.textContent = "User Wins";
        }
        else {
            user_score.textContent = user_tally;
        }
    }
    else {
        winner.textContent = "Computer Wins"
        computer_tally += 1;
        if (computer_tally == 5){
            cpu_score.textContent = "Computer Wins";
        }
        else {
            cpu_score.textContent = computer_tally;
        }
    }
}

document.querySelector("#rock").addEventListener("click",function(){playRound("rock")})
document.querySelector("#paper").addEventListener("click",function(){playRound("paper")})
document.querySelector("#scissors").addEventListener("click",function(){playRound("scissors")})







