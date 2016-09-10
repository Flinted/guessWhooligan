var Hooligan = require('./Hooligan');
var Player =require('./player');
var _ = require('lodash');


var GuessWhooligan = function(hooligans, players){
  this.turnCounter =  0,
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
      this.turnCounter ++;
      if(this.targetPlayer === this.players[0]){
        this.targetPlayer= this.players[1];
        this.currentPlayer = this.players[0];
      }else{
        this.targetPlayer=this.players[0];
        this.currentPlayer = this.players[1];
      }
      return(this.turnCounter<5);
  },

  handleGuess: function(player, guess){
      player.guessCheck(guess);
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