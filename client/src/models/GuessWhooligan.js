var Hooligan = require('./Hooligan');
var Player =require('./player');
var _ = require('lodash');


var GuessWhooligan = function(hooligans, players){
  this.turnCounter =  1,
  this.players = players,
  this.currentPlayer= players[0],
  this.targetPlayer = players[1],
  this.hooligans = hooligans
};

GuessWhooligan.prototype ={

  setupHooligans: function(){
        this.players[0].setup(this.hooligans);
        this.players[1].setup(this.hooligans);
  },

  bribe: function(target){
    target.knockOutOne();
  },

  changeTurn:  function(){
      if(this.targetPlayer === this.players[0]){
        this.targetPlayer= this.players[1];
        this.currentPlayer = this.players[0];
        this.turnCounter ++
      }else{
        this.targetPlayer=this.players[0];
        this.currentPlayer = this.players[1];
      }
      console.log(this.turnCounter<6);
      return(this.turnCounter<6);
  },

  handleGuess: function(player, guess){
      player.guessCheck(guess);
  },

  turn: function(){
      return this.turnCounter;
  },

  decideBattle: function(){
      var player1 = this.players[0].getActiveHooligans();
      var player2 = this.players[1].getActiveHooligans();
      var winner = null;
      if(player1.length>player2.length){
          winner = this.players[0];
      }else{
          winner = this.players[1];
      } 


      return [player1,player2,winner];
  },  

  returnHooligans: function(playertoReturn){
        if(this.players[0] == playertoReturn){
          console.log("player1")
          return this.players[0].hooligans;
        }
        if(this.players[1] == playertoReturn){
          console.log("player2")
          return this.players[1].hooligans;
        }
  },

  returnGuesses: function(){
    var characteristics = this.hooligans[0].characteristics;
    var guesses = [];
    for(var i=0; i<characteristics.length; i++){
        guesses.push(characteristics[i].description);
    }
    var returnGuesses = _.shuffle(guesses);
    return returnGuesses;
  }

}


module.exports = GuessWhooligan;