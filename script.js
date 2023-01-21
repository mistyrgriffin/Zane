var scoreNum = document.getElementById("score-num");
var deleteScore = document.getElementById("deletescore-el");
var gameSpace = document.getElementById("game-space");
var activeGame = document.getElementById("active-game");
var yourEl = document.getElementById("your-el");
var houseEl = document.getElementById("house-el");
var winLoseEl = document.getElementById("winlose-el");
var playEl = document.getElementById("play-el");
var selectRules = document.getElementById("rules-el");
var rulesPop = document.getElementById("rules-popup");
var closeRules = document.getElementById("close-img");
var scissorsEl = document.getElementById("scissors-choice").innerHTML;
var spockEl = document.getElementById("spock-choice").innerHTML;
var paperEl = document.getElementById("paper-choice").innerHTML;
var lizardEl = document.getElementById("lizard-choice").innerHTML;
var rockEl = document.getElementById("rock-choice").innerHTML;
var gameOptionsPlayer = [scissorsEl, spockEl, paperEl, lizardEl, rockEl];
var gameOptionsHouse = [scissorsEl, spockEl, paperEl, lizardEl, rockEl];
var winLoseMessage = ["YOU WIN", "SORRY, YOU LOSE", "IT'S A DRAW"];
var randomNum0To4 = 0;
var playerNum0To4 = 0;
var playerMessage = 0;
var gameScore = JSON.parse(localStorage.getItem("rpslsScore"));

function showPlayerScore() {
    scoreNum.textContent = localStorage.getItem("rpslsScore");
}
showPlayerScore();

function gameRules() {
    if(rulesPop.style.display == "none") {
        rulesPop.style.display = "block";
    } else {
        rulesPop.style.display = "none";
    }
}
gameRules();

function gameInPlay() {
    if( gameSpace.style.display == "block" ) {
        gameSpace.style.display = "none";
        activeGame.style.display = "block";
        winLoseEl.style.display = "block";
        playEl.style.display = "block";
    } else {
        gameSpace.style.display = "block";
        activeGame.style.display = "none";
        winLoseEl.style.display = "none";
        playEl.style.display = "none";
    }
    yourEl.innerHTML = gameOptionsPlayer[playerNum0To4];
    houseEl.innerHTML = gameOptionsHouse[randomNum0To4];
    winLoseEl.textContent = winLoseMessage[playerMessage];
    scoreNum.textContent = playerScore;
    localStorage.setItem("rpslsScore", playerScore);
}
gameInPlay();

function gameScissors() {
    playerNum0To4 = 0;
    randomNum0To4 = Math.floor(Math.random() * 5);
    function messageNumScissors() {
        if (randomNum0To4 === 2 || randomNum0To4 === 3) {
            return 0;
        } else if (randomNum0To4 === 1 || randomNum0To4 === 4) {
            return 1;
        } else {
            return 2;
        }
    }
    playerMessage = messageNumScissors();
    function gameScoreScissors() {
        if(messageNumScissors() === 0) {
            gameScore += 1;
        } else if(messageNumScissors() === 1) {
            gameScore -= 1;
        }
        return gameScore;
    }
    playerScore = gameScoreScissors();
    gameInPlay();
}
gameScissors();

function gameSpock() {
    playerNum0To4 = 1;
    randomNum0To4 = Math.floor(Math.random() * 5);
    function messageNumSpock() {
        if (randomNum0To4 === 0 || randomNum0To4 === 4) {
            return 0;
        } else if (randomNum0To4 === 3 || randomNum0To4 === 2) {
            return 1;
        } else {
            return 2;
        }
    }
    playerMessage = messageNumSpock();
    function gameScoreSpock() {
        if(messageNumSpock() === 0) {
            gameScore += 1;
        } else if(messageNumSpock() === 1) {
            gameScore -= 1;
        }
        return gameScore;
    }
    playerScore = gameScoreSpock();
    gameInPlay();
}
gameSpock();

function gamePaper() {
    playerNum0To4 = 2;
    randomNum0To4 = Math.floor(Math.random() * 5);
    function messageNumPaper() {
        if (randomNum0To4 === 1 || randomNum0To4 === 4) {
            return 0;
        } else if (randomNum0To4 === 0 || randomNum0To4 === 3) {
            return 1;
        } else {
            return 2;
        }
    }
    playerMessage = messageNumPaper();
    function gameScorePaper() {
        if(messageNumPaper() === 0) {
            gameScore += 1;
        } else if(messageNumPaper() === 1) {
            gameScore -= 1;
        }
        return gameScore;
    }
    playerScore = gameScorePaper();
    gameInPlay();
}
gamePaper();

function gameLizard() {
    playerNum0To4 = 3;
    randomNum0To4 = Math.floor(Math.random() * 5);
    function messageNumLizard() {
        if (randomNum0To4 === 1 || randomNum0To4 === 2) {
            return 0;
        } else if (randomNum0To4 === 0 || randomNum0To4 === 4) {
            return 1;
        } else {
            return 2;
        }
    }
    playerMessage = messageNumLizard();
    function gameScoreLizard() {
        if(messageNumLizard() === 0) {
            gameScore += 1;
        } else if(messageNumLizard() === 1) {
            gameScore -= 1;
        }
        return gameScore;
    }
    playerScore = gameScoreLizard();
    gameInPlay();
}
gameLizard();

function gameRock() {
    playerNum0To4 = 4;
    randomNum0To4 = Math.floor(Math.random() * 5);
    function messageNumRock() {
        if (randomNum0To4 === 0 || randomNum0To4 === 3) {
            return 0;
        } else if (randomNum0To4 === 1 || randomNum0To4 === 2) {
            return 1;
        } else {
            return 2;
        }
    }
    playerMessage = messageNumRock();
    function gameScoreRock() {
        if(messageNumRock() === 0) {
            gameScore += 1;
        } else if(messageNumRock() === 1) {
            gameScore -= 1;
        }
        return gameScore;
    }
    playerScore = gameScoreRock();
    gameInPlay();
}
gameRock();

function gameOn() {
    gameSpace.style.display = "block";
    activeGame.style.display = "none";
    winLoseEl.style.display = "none";
    playEl.style.display = "none";
}
gameOn();

function deletePlayerScore() {
    scoreNum.textContent = 0;
    playerScore = 0;
    gameScore = 0;
    localStorage.clear("rpslsScore");
}

