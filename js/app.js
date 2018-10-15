
let cardPicture = [ 'fa-bicycle', 'fa-bicycle',
                    'fa-hand-peace-o', 'fa-hand-peace-o',
                    'fa-recycle', 'fa-recycle',
                    'fa-rocket', 'fa-rocket',
                    'fa-paw', 'fa-paw',
                    'fa-soccer-ball-o', 'fa-soccer-ball-o',
                    'fa-bomb', 'fa-bomb',
                    'fa-lightbulb-o', 'fa-lightbulb-o'
                  ];

let deck = document.querySelector(".deck");
let cards = [];
let clickedCards = [];
let clicks = 0;
let moves = 0;
let movesCount = document.querySelector('.moves');
let matches = 0;
let gameResetButton = document.querySelector('.restart').addEventListener('click', resetGame);
let star = 3;
let timeKeeper = document.querySelector('.timer');
let gameRunning = false;
let sec = 0;
let min = 0;
let hour = 0;
let intervalID = window.setInterval(startTimer, 1000);

//generate cards.
function createCards(card) {
  return `<li class="card" data-card=${card}><i class="fa ${card}"></i></li>`
}
//start the game on pageload.

(function(){
  startGame();
})();

function startGame() {
  gameRunning = true;
  let cardDeckHTML = shuffle(cardPicture).map(function(cards) {
    return createCards(cards);
  });
  deck.innerHTML = cardDeckHTML.join("");
  cards = Array.from(document.querySelectorAll(".card"));
  makeClickable(cards);
  clicks = 0;
  resetCounters();
}

function makeClickable(card) {
  cards.forEach(function(card){
    card.addEventListener('click', function(){
      //start the timer on first click.
      if (moves <= 1 && gameRunning === true){
        startTimer();
      };
      console.log(timeKeeper.innerText);
      if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match') && clickedCards.length<2) {
          card.classList.add('open', 'show');
          clickedCards.push(card);
          console.log("card pushed to clickedCards");
          console.log("array length: " + clickedCards.length);
          moves++;
          console.log("moves clicked: " + moves);
      }
      compareCards();
      updateScorePanel();
      didPlayerWinYet();
    })
  })
}

function compareCards(){
  if (clickedCards.length === 2){
    if (clickedCards[0].dataset.card === clickedCards[1].dataset.card) {
      clickedCards[0].classList.add('match');
      clickedCards[1].classList.add('match');
      matches++;
      clickedCards = [];
    } else {
      setTimeout(function(){
        clickedCards[0].classList.remove('open', 'show');
        clickedCards[1].classList.remove('open', 'show');
        clickedCards = [];
      }, 1000)
    }
  }
}

function didPlayerWinYet(){
  if (matches === 8) {
    let gameDuration = timeKeeper.innerText;
    gameRunning = false;
    hours = 0;
    min = 0;
    sec = 0;
    alert(`You win! Moves Taken: ${moves} Star Rating: ${star} Game Duration: ${gameDuration}`)
    matches = 0;
    moves = 0;
    startGame();
  }
}

function updateScorePanel() {
  movesCount.innerText = moves;
  if (moves > 16 && moves < 26) {
    //remove one star
    document.querySelector('.stars li:first-child').style.display = 'none';
    star = 2;
  } else if (moves > 30) {
    //remove another star
    document.querySelector('.stars li:nth-child(2)').style.display = 'none';
    star = 1;
  };
};

//make the timer
//based on Daniel Hug's (https://jsfiddle.net/Daniel_Hug/pvk6p/) Thanks!

function startTimer() {
  if (gameRunning === true) {
    sec++;
    if (sec > 60) {
      sec = 0;
      min++;
    } else if (min > 60) {
      min = 0;
      hour++;
    }
    timeKeeper.textContent = (hour ? (hour >9 ? hour : "0" + hour) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ':' + (sec > 9 ? sec : "0" + sec);
    }
  };

function resetTimer() {
  //if (gameRunning === false) {
    clearInterval(intervalID);
    resetCounters();
  //}
};

function resetGame(){
  //resetCounters();
  //gameRunning = false;
  resetTimer();
  startGame();
};

//sets timer and counters back to zero for new game.
function resetCounters() {
  sec = 0;
  min = 0;
  hour = 0;
  timeKeeper.textContent = "00:00:00";
  matches = 0;
  moves = 0;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
