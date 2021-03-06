var assert = require('chai').assert;
var Player = require('../Player.js');
var Hooligan = require('../Hooligan.js');

describe("Players", function(){

  beforeEach(function(){
    player1= new Player("Malcolm");
    player2= new Player('Steve');

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
    assert.deepEqual("Malcolm", player1.name);
  });

  it("Should setup Hooligans and pick a leader", function(){
    player1.setup([hooligan1]);
    assert.deepEqual(1,player1.hooligans.length);
    assert.deepEqual('Jake',player1.leader.name);
  });

  it("Should add Bribes", function(){
    player1.addBribe();
    player1.addBribe();
    assert.deepEqual(2,player1.bribes);
  });

  it("Should Knock out one non player hooligan with bribe", function(){
    player1.hooligans =[hooligan1,hooligan2];
    player1.leader = hooligan2;
    player1.knockOutOne();
    assert.deepEqual(false,hooligan2.eliminated);
  });

});