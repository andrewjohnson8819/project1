$(document).ready(function(){

  $(".player1").click(function(){
    var one = Math.floor(Math.random() * (14 - 2 + 1) + 2);
    alert(one);
  });

  $(".player2").on("click",function(){
    $(this).append(Math.floor(Math.random() * (14 - 2 + 1)) + 2)
  });



  // if("player1" > "player2")
  //   alert("Player Blue wins!");
  // else if ("player2" > "player1")
  //   alert("Player Red wins!");
  // else()
  //   alert("Round is a tie!");


  $("input").on("click",function(){
     $(".player1, .player2").empty()
   })
  //  $("input").on("click",function(){
  //     $(".player2").empty()
  //   })
})
