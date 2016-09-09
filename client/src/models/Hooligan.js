var Hooligan =function(params){
    this.name = params.name,
    this.img = params.img,
    this.characteristics = params.characteristics,
    this.leader = false,
    this.eliminated = false
}

Hooligan.prototype = {

  checkGuess: function(guess){
      for(characteristic of this.characteristics){
        if(characteristic.description = guess){
          this.eliminated = true;
          return;
        }
      }
  },

  makeLeader: function(){
    this.leader=true;
  }

}

module.exports = Hooligan;