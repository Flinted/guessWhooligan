var Hooligan =function(params){
  this.name = params.name,
  this.img = params.image,
  this.characteristics = params.characteristics,
  this.leader = false,
  this.eliminated = false
}

Hooligan.prototype = {


  checkGuess: function(guess,boolean){
    if(this.leader){
      for(var characteristic of this.characteristics){
        if(characteristic.description == guess){
          return characteristic.valid;
        }
      }
    }

  for(var characteristic of this.characteristics){
    if(characteristic.description == guess){
      if(characteristic.valid != boolean){
        this.eliminated = true;
        return;
      }
    }
  }
},

makeLeader: function(){
  this.leader=true;
},

eliminate: function(){
  this.eliminated = true;
}
}

module.exports = Hooligan;