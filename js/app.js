
let cardPicture = [ 'fa-bicycle', 'fa-bicycle',
                    'fa-hand-peace-o', 'fa-hand-peace-o',
                    'fa-recycle', 'fa-recycle',
                    'fa-rocket', 'fa-rocket',
                    'fa-paw', 'fa-paw',
                    'fa-soccer-ball-o', 'fa-soccer-ball-o',
                    'fa-snowflake-o', 'fa-snowflake-o',
                    'fa-lightbulb-o', 'fa-lightbulb-o'
                  ];



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
