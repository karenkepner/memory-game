/*
 * Create a list that holds all of your cards
 */
//let cardArray = Array.prototype.slice.call(document.querySelectorAll(".card"));
//console.log(cardArray);
let cardPicture = [ fa-bicycle, fa-bicycle.
                    fa-hand-peace-o, fa-hand-peace-o,
                    fa-recycle, fa-recycle,
                    fa-rocket, fa-rocket,
                    fa-paw, fa-paw,
                    fa-soccer-ball-o, fa-soccer-ball-o.
                    fa-snowflake-o, fa-snowflake-o,
                    fa-lightbulb-o, fa-lightbulb-o
                  ];
//let card = 'cat';
function generateCards(cardPicture){
  cardPicture.forEach('<li class="card"><i class="fa ${cardPicture[i]}"></i></li>');
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 let cardClicked = 0;

 function addClickable(e) {
   cardArray.forEach(function(e){
     e.addEventListener('click', function(){
      console.log('you clicked a card.');
      if (cardClicked === 0){
        e.className = 'card show';
        cardClicked++;}
      else if (cardClicked > 0) {
        e.className = 'card show spin';
      }
     })
   })
 }

 //change the class of the card on click here.
  //     ele.className = "open";//doesn't work.

let array = [];

function displayCards() {
  shuffle(cardArray);
  addClickable();
  replaceCards(array);
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

function replaceCards() {
  //put new array back into the cards container.
  //erase children of display Cards
  cardArray = array;

  //put new array of cards into the .cards element.
}

displayCards();
/*
 * set up the event listener for a card. If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
