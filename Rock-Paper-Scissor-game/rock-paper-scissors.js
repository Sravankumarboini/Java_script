let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function randomMove() {
    const a = Math.random();
    if (a >= 0 && a < 1 / 3) return 'rock';
    else if (a >= 1 / 3 && a < 2 / 3) return 'paper';
    else return 'scissors';
}

let isAutoPlaying=false;
let intervalId;
function autoplay(){
    if(!isAutoPlaying){
        intervalId=setInterval(function(){
        const playerMove=randomMove();
        playGame(playerMove);
         },1000);
         isAutoPlaying=true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
}

function playGame(playerMove) {
    const computerMove = randomMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') result = 'tie';
        else if (computerMove === 'paper') result = 'you lose';
        else result = 'you win';
    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') result = 'tie';
        else if (computerMove === 'scissors') result = 'you lose';
        else result = 'you win';
    } else {
        if (computerMove === 'scissors') result = 'tie';
        else if (computerMove === 'rock') result = 'you lose';
        else result = 'you win';
    }

    if (result === 'you win') {
        score.wins += 1;
    } else if (result === 'you lose') {
        score.losses += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = ` you <img src="images/${playerMove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}