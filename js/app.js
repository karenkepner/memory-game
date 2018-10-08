
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
//let cards = [];
//let cardDeckHTML = [];
let deck = document.querySelector(".deck");
let cards = [];
let clickedCards = [];

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
 }

function makeClickable(card) {
  cards.forEach(function(card){
    card.addEventListener('click', function(){
        if (clickedCards.length === 2) {
          //compare cards.
          if (clickedCards[0].dataset.card === clickedCards[1].dataset.card) {
            clickedCards[0].classList.add('match');
            clickedCards[1].classList.add('match');
            console.log(card.dataset.card)
            clickedCards = [];
          } else {
            clickedCards[0].classList.remove('open', 'show');
            clickedCards[1].classList.remove('open', 'show');
            clickedCards = [];
          }
        //show cards
        } else {
          setTimeout(function(){
          if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
              card.classList.add('open', 'show');
              clickedCards.push(card);
              console.log('clickedCards length: ' + clickedCards.length + " and "+ clickedCards[0].dataset.card)
          }
        }, 1000)
      }

    })

  })
}

//this is all mixed up.....
//try this: add event listener to cards.
//if two cards are selected, compare them
//   if those two cards are the same, assign match class.
//   if the two cards are not the same, flip them back to hidden and empty the flipped card array and count the moves
//if two cards are not selected, allow selection of another card and push that card to the flip array.
//

// function makeClickable(card) {
//  cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//       if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
//         card.classList.add('open','show');
//         console.log('clicked');
//         clickedCards.push(card);
//         //console.log('clickedCards Array: ' + clickedCards[0]);
//       } else {
//        //do nothing.
//
//       if (clickedCards.length == 2) {
//         //compare cards
//         if (clickedCards[0] === clickedCards[1]) {
//           console.log(clickedCards + "It's a match!");
//           card.classList.remove('open', 'show');
//           card.classList.add('match');
//           //clickedCards = [];
//         }
//       }
//
//      }
//      clickedCards = [];
//    })
//  })
//
// }
//add event listener
// cards.addEventListener('click', function() {
// console.log('clicked it.')
// })


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
