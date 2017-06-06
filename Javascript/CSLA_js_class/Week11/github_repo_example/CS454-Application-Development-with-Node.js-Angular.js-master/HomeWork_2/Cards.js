var card = function (inRank, inSuit) {
  var rank = inRank;
  var suit = inSuit;
  
  this.getRank = function() {
    return rank;
  };

  this.getSuit = function() {
    return suit;
  };

  this.value = function() {
    if (rank === 'Ace'){
      return 1;
    } else if (rank === ('Jack' || 'Queen' || 'King')){
      return 10;
    } else {
      return parseInt(rank);
    };
  };
};

card.prototype.toString = function(){
  var string = this.getRank()+" of "+this.getSuit();

  return string;
};


//------------------- Testing -----------------------------------//
var card1 = new card('Ace', 'Spades'); // Creates the Ace of Spades card
var card2 = new card('9', 'Hearts'); // Creates the 9 of Hearts card
console.log( card1.value() ); // Prints 11
console.log( card1.getRank() );
console.log( "Card1: "+card1 ); 
console.log( card1.toString() );// Ace of Spades
console.log( card2.value() ); // Prints 9
console.log( card2.toString() ); // 9 of Hearts
//------------------- Testing -----------------------------------//


var deck = function (){
  var suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var inDeck = [];

  this.inDeck = function() {
    return inDeck;
  };

  suit.forEach (function(i){
    rank.forEach (function(j){
      inDeck.push(new card(j, i));
    });
  });

  this.reset = function(){
    inDeck = [];
    suit.forEach (function(i){
      rank.forEach (function(j){
        inDeck.push(new card(j, i));
      });
    });
  };

}

deck.prototype.remaining = function (){
  return this.inDeck().length;
};

deck.prototype.shuffle = function (){
  var array = this.inDeck();
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  };
};

deck.prototype.deal = function (){
  var card = this.inDeck();
  this.inDeck().shift();
  return card[0];
};


//------------------- Testing -----------------------------------//
var myDeck = new deck();
myDeck.shuffle();
var hand1 = [];
hand1.push( myDeck.deal() );
hand1.push( myDeck.deal() );
console.log( 'Hand 1: '+hand1[0]+", "+hand1[1] ); // Hand 1: 2 of Hearts 9 of Clubs 

var hand2 = [];
hand2.push( myDeck.deal() );
hand2.push( myDeck.deal() );
console.log( 'Hand 2: '+hand2[0]+", "+hand2[1] ); // Hand 2: Queen of Diamonds Jack of Clubs
console.log('The value of Hand 1 is: '+ (hand1[0].value() + hand1[1].value()));
console.log('The value of Hand 2 is: '+ (hand2[0].value() + hand2[1].value()));
console.log('There are '+myDeck.remaining()+' cards remaining in the deck'); //48
myDeck.reset();
console.log('There are '+myDeck.remaining()+' cards remaining in the deck'); //52
//------------------- Testing -----------------------------------//