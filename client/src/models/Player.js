var Hooligan =require('./Hooligan');
 
var Player = function(name){
    this.name=name,
    this.hooligans= [],
    this.eliminated =[],
    this.leader = null,
    this.getEms = 0
}

Player.prototype={
  setup: function(hooligans){
    this.hooligans = hooligans.map(function(params){
       return new Hooligan(params);
    });
    var index = Math.floor((Math.random() * this.hooligans.length));
    this.leader = this.hooligans[index];
    this.leader.makeLeader();
  },

  guessCheck: function(guess){
      for(var hooligan of this.hooligans){
          hooligan.checkGuess(guess);
      }
  },

  addGetem: function(){
    this.getEms ++;
  }


}

module.exports = Player;