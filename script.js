var B1 = document.getElementById('p1');
var B2 = document.querySelector('p2');
var p1Display = document.querySelector('#first');
var p2Display = document.querySelector('#second');
var resetBtn = document.getElementById('reset');
var limitGame = document.getElementById('limit');
var numInput = document.querySelector('input');
var winningScore = 5 ;
var gameOver = false;
var p1Score = 0 ;
var p2Score = 0 ;

function increase1() {
   
   if (!gameOver) {
    p1Score++;
    // console.log(p1Score , winningScore);
    if ( p1Score == winningScore) {
        gameOver=true;
        p1Display.style.color="green";
    }
    p1Display.textContent=p1Score;
   }      
    
}

function increase2() {
    if (!gameOver) {
    p2Score++;
    if ( p2Score == winningScore) {
        gameOver=true;
        p1Display.style.color="green";
    }
    p2Display.textContent=p2Score;
    }
}

function reset() {
    p1Score=0;
    p2Score=0;

    gameOver = false;

    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;

    p1Display.style.color=null;
    p2Display.style.color=null;
}

numInput.addEventListener('change', function() {
    limitGame.textContent=this.value;
    winningScore= parseInt(this.value) ;
    reset();
});