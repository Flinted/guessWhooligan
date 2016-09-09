var assert = require('chai').assert;
var Player = require('../Player.js');
var Hooligan = require('../Hooligan.js');

describe("GuessWhooligan", function(){

  beforeEach(function(){
    player1= new Player("Malcolm")
    player2= new Player('Steve')

    hooligan1 = new Hooligan({
      name: 'Jake', 
      image: '/images/hooligan1.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})

    hooligan2 = new Hooligan({
      name: 'Mike', 
      image: '/images/hooligan2.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})
})

    it("Should create player", function(){
    assert.deepEqual("Malcolm", player1.name)
  });

    it("Should setup Hooligans and pick a leader", function(){
      player1.setup([hooligan1]);
      assert.deepEqual(1,player1.hooligans.length);
      assert.deepEqual('Jake',player1.leader.name);
      


    })



  })