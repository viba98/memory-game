let lists = [];
var li=$('.card');
for ( let x=0; x<16; x++){
  lists.push(li.children()[x].className);
}
//select();
function resetBoard(){
  var newShuf = [];
  newShuf=shuffle(lists);


  for(let c=0; c<lists.length; c++){
    let deck = li.children()[c];
    li[c].innerHTML='<i class="'+lists[c]+'"></i>';
  }
}
resetBoard();
select();

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
$('.fa-repeat').on('click', function(){
  resetBoard();
  select();
});

function select(){
  flipOver();
  match();
};

function flipOver(){
  $('.card').on('click', function(event){
    //alert("ha");
    $(event.target).addClass("open show");
  });
}

function flipBack(){
  $('.card').on('click', function(event){
    //alert("ha");
    $(event.target).removeClass("open show");
  });
}

var memoryAr= [];

function match(){
  

}



/*function match(){
  $('.card').on('click', function(event){
    //alert("ha");
    var x=$(event.target).children();
    console.log(x);

    if(memoryAr.length<2){
      var firstCard = x.find('i').className;
      //memoryAr.push(firstCard);
      //console.log(firstCard);
      if(memoryAr.length==2){
        if (memoryAr[1]==memoryAr[0]){
          memoryAr[0,1].addClass("match").removeClass("open show");
        }
        else{
          memoryAr[0,1].removeClass("open show");
          console.log("fail");
        }
      }
    }
  });
}

/*for (let list of lists){
  on('click', function(){
    alert('clicked');
  });
}

// Shuffle function from http://stackoverflow.com/a/2450976

/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


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
