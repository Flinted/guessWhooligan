var Hooligan =require('./Hooligan');
var _ = require('lodash');

var Player = function(name, classid){
    this.name=name,
    this.hooligans= [],
    this.eliminated =[],
    this.classid=classid,
    this.leader = null,
    this.bribes = 0
}

Player.prototype={
  setup: function(hooligansToAdd){
    var hooligans = _.shuffle(hooligansToAdd);
    this.hooligans = hooligans.map(function(params){
       return new Hooligan(params);
    });
    var index = Math.floor((Math.random() * this.hooligans.length));
    this.leader = this.hooligans[index];
    this.leader.makeLeader();
  },

  guessCheck: function(guess){
    var binaryResult = this.leader.checkGuess(guess)
      for(var hooligan of this.hooligans){
          hooligan.checkGuess(guess,binaryResult);
      }
  },

  addBribe: function(){
    this.bribes ++;
  },

  knockOutOne: function(){
      for(var hooligan of this.hooligans){
          if(!hooligan.eliminated && hooligan != this.leader){
            hooligan.eliminated = true;
            return;
          }
      }
  },

  useBribe: function(){
     this.bribes --;
  }




}

module.exports = Player;