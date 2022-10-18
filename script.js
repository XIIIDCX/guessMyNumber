'use strict';

let secretNumber = Math.trunc( Math.random()*20 )+1;
let score = 20;
let highScore = 0;


const displayMessage = function( message ) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function( changeScore ) {
  document.querySelector('.score').textContent = changeScore;
};

const changeBackground = function( color ) {
  document.querySelector('body').style.backgroundColor = color;
};

const displaySecretNumber = function( sign ) {
  document.querySelector('.number').textContent = sign;
};

const disableButton = function( option ) {
  document.querySelector('.check').disabled = option;
};



displaySecretNumber('?')

// CHECK btn
document.querySelector('.check').addEventListener
('click', function() {
  let guess = Number( document.querySelector('.guess').value );

  //when there is no input or wrong number
  if( !guess | guess > 20 ) {
    displayMessage('Wrong number!');
    score--;
    updateScore(score);
    
    // when player lose
    if( score === 0 ) {
      displayMessage('GAME OVER');
      changeBackground('#ef233c');
      disableButton(true);
    }

  // when player wins  
  } else if( guess === secretNumber ) {
    displayMessage('Correct Number !!!');
    changeBackground('#60b347');
    document.querySelector('.number').style.width = '30rem'; 
    displaySecretNumber(secretNumber);
      
    if( score > highScore ) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

  } else if( guess !== secretNumber ){ 
      
      if( score > 1 ){
        displayMessage( guess > secretNumber ? 'Too high...' : 'Too low...' );
        score--;
      
      // when player lose 2
      } else if( score === 0 ) {
        displayMessage('GAME OVER');
        changeBackground('#ef233c');
        disableButton(true);
      } 
      updateScore(score);    
    }        
});

// AGAIN btn
document.querySelector('.again').addEventListener
('click', function() {
  
  score = 20;
  secretNumber = Math.trunc( Math.random()*20 )+1;
  displayMessage('Start guessing...');
  updateScore(score);
  changeBackground('#222');
  displaySecretNumber('?');
  disableButton(false);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem'; 
  
}); 
