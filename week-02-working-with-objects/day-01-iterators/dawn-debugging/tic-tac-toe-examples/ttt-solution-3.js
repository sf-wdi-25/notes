// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
$(function () {

  function Game() {
    this.player = "O"
  };

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    this.player = this.player === "X" ? "O" : "X";
    return this.player;
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    var board = new Board();
    board.attachListeners();
  };

  

  // A starter Board constructor.
  function Board() {
    this.$boxes = $(".box")
    console.log(this.$boxes)
    this.$restart = $('#restart');
    this.$restart.click(function(event) {
      location.reload();
    });

    
  }; 

   Board.prototype.attachListeners = function() {
    for(var i=0; i<9; i++) {
      this.$boxes.eq(i).on("click", function (){
        console.log("hello");
        if($(this).html() === "X" || $(this).html() === "O"){

        } else {
          console.log("hello2")
          var player = game.nextPlayer();
          $(this).html(game.player);
          $(this).addClass(game.player);
          game.getWinner(); 
        };
      });
    };
  };  

  Game.prototype.getWinner = function(){
    board.$boxes = $(".box")
    player = game.player;
    console.log("hi")
      if (board.$boxes.eq(0).html() ===  player &&
        board.$boxes.eq(1).html() ===  player &&
        board.$boxes.eq(2).html() ===  player){
        console.log("victory")
        alert("Winner is " + player )
        return location.reload();
      } else if (board.$boxes.eq(3).html() ===  player &&
        board.$boxes.eq(4).html() ===  player &&
        board.$boxes.eq(5).html() ===  player){
        alert("Winner is " + player )
        return location.reload();
      } else if (board.$boxes.eq(6).html() ===  player &&
        board.$boxes.eq(7).html() ===  player &&
        board.$boxes.eq(8).html() ===  player){
        alert("Winner is " + player )
        return location.reload();
      } else if (board.$boxes.eq(0).html() ===  player &&
        board.$boxes.eq(3).html() ===  player &&
        board.$boxes.eq(6).html() ===  player){
          alert("Winner is " + player )
        return location.reload();
      } else if (board.$boxes.eq(1).html() ===  player &&
        board.$boxes.eq(4).html() ===  player &&
        board.$boxes.eq(7).html() ===  player){
          alert("Winner is " + player )
        return location.reload();
      } else if (board.$boxes.eq(2).html() ===  player &&
        board.$boxes.eq(5).html() ===  player &&
        board.$boxes.eq(8).html() ===  player){
          alert("Winner is " + player )
          return location.reload();
      } else  if (board.$boxes.eq(0).html() ===  player &&
        board.$boxes.eq(4).html() ===  player &&
        board.$boxes.eq(8).html() ===  player){
          alert("Winner is " + player )
          return location.reload();
      } else if (board.$boxes.eq(2).html() ===  player &&
        board.$boxes.eq(4).html() ===  player &&
        board.$boxes.eq(6).html() ===  player){
          alert("Winner is " + player )
          return location.reload();
      }
       console.log(board)
   };

  

  // Start the game!
  var game = new Game();
  game.init();
  console.log("game started")

});

