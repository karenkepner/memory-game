
let cardPicture = [ 'fa-bicycle', 'fa-bicycle',
                    'fa-hand-peace-o', 'fa-hand-peace-o',
                    'fa-recycle', 'fa-recycle',
                    'fa-rocket', 'fa-rocket',
                    'fa-paw', 'fa-paw',
                    'fa-soccer-ball-o', 'fa-soccer-ball-o',
                    'fa-bomb', 'fa-bomb',
                    'fa-lightbulb-o', 'fa-lightbulb-o'
                  ];
//generate cards.

let deck = document.querySelector(".deck");
let cards = [];
let clickedCards = [];
let moves = 0;
let movesCount = document.querySelector('.moves');

function createCards(card) {
  return `<li class="card" data-card=${card}><i class="fa ${card}"></i></li>`
}

function startGame() {
  let cardDeckHTML = shuffle(cardPicture).map(function(cards) {
    return createCards(cards);
  });
  deck.innerHTML = cardDeckHTML.join("");
  cards = Array.from(document.querySelectorAll(".card"));
  console.log(cards)
  makeClickable(cards);
  moves = 0;
 }

function makeClickable(card) {
  cards.forEach(function(card){
    card.addEventListener('click', function(){
        if (clickedCards.length === 2) {
          //compare cards.
          if (clickedCards[0].dataset.card === clickedCards[1].dataset.card) {
            clickedCards[0].classList.add('match');
            clickedCards[1].classList.add('match');
            console.log(card.dataset.card);
            clickedCards = [];
          } else {
            //setTimeout(function(){
            clickedCards[0].classList.remove('open', 'show');
            clickedCards[1].classList.remove('open', 'show');
            //}, 1000)
            clickedCards = [];
          };
        //show cards
        } else {
          if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
              card.classList.add('open', 'show');
              clickedCards.push(card);
              console.log('clickedCards length: ' + clickedCards.length + " and "+ clickedCards[0].dataset.card);
          }
      };
      moves++;
      movesCount.innerText = moves;
      console.log(moves);
    })
  })
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


startGame();
