
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

//generate cards.
function createCards(card) {
  return `<li class="card" data-card=${card}><i class="fa ${card}"></i></li>`
}

function startGame() {
  let cardDeckHTML = shuffle(cardPicture).map(function(cards) {
    return createCards(cards);
  });
  deck.innerHTML = cardDeckHTML.join("");
  cards = Array.from(document.querySelectorAll(".card"));
  //console.log(cards)
  makeClickable(cards);
  clicks = 0;
}

function makeClickable(card) {
  cards.forEach(function(card){
    card.addEventListener('click', function(){
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
    alert(`You win! Moves Taken: ${moves} Star Rating: ${star}`)
  }
}

function updateScorePanel() {
  movesCount.innerText = moves;
  if (moves > 16 && moves < 26) {
    //remove one star
    document.querySelector('.stars li:first-child').style.display = 'none';
    star = 2;
  } else if (moves > 40) {
    //remove another star
    document.querySelector('.stars li:nth-child(2)').style.display = 'none';
    star = 1;
  }
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

function resetGame(){
  startGame();
 }

startGame();
