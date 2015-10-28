$(document).ready(function(){
  var deck1 = [
    "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King", "Ace"
  ];

  var deck2 = [
    "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King", "Ace"
  ];

  var playedDeck1 = [];
  var playedDeck2 = [];
  var currentCard = 0;
  var nextCard = function() {

    if (currentCard < 0){
      playedDeck1.push(!(".player1").val());
    }
    if (currentCard < deck1.length) {
      $(".player1").html(deck1[currentCard]);
      currentCard = currentCard + 1;
    }
    else {
      finalCard();
    }
  }
  var finalCard = function() {
    $(".player1").html("Deck is empty");
  }
  $(".player1").click(function(){
    nextCard();

    $("input").on("click",function(){
       $(".player1, .player2").empty()
     })
  })
})




//   if (currentCard < 0){
//     playedDeck2.push(!(".player2").val());
//   }
//   if (currentCard < deck2.length) {
//     $(".player2").html(deck2[currentCard]);
//     currentCard = currentCard + 1;
//   }
//   else {
//     finalCard();
//    }
//  })
//   var finalCard = function() {
//   $(".player2").html("Deck is empty");
//   }
//   $(".player2").click(function(){
//   nextCard();
//
//   $("input").on("click",function(){
//      $(".player1, .player2").empty()
//    })
// })













    // $("player1").innerHTML = deck1;

  //   $(this).append(Math.floor(Math.random(deck1)))
  // });
  //
  // $(".player2").on("click",function(){
  //   $(this).append(Math.floor(Math.random() * deck2))
  // });


  // if("player1" > "player2")
  //   alert("Player Blue wins!");
  // else if ("player2" > "player1")
  //   alert("Player Red wins!");
  // else()
  //   alert("Round is a tie!");


  // $("input").on("click",function(){
  //    $(".player1, .player2").empty()
  //  })
  //  $("input").on("click",function(){
  //     $(".player2").empty()
  //   })
