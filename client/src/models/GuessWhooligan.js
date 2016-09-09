var Hooligan = require('./Hooligan');
var Player =require('./player');


var GuessWhooligan = function(hooligans, players){
  this.turnCounter =  0,
  this.players = players,
  this.currentPlayer = players[0],
  this.hooligans = hooligans
};

GuessWhooligan.prototype ={

  setupHooligans: function(){
      for(player of this.players){
        player.setup(this.hooligans);
      };
  },

  changeTurn:  function(){
      this.turnCounter ++;
      return(this.turnCounter<5);
  },

  handleGuess: function(player){
      player.guessCheck;
  }

}


module.exports = GuessWhooligan;