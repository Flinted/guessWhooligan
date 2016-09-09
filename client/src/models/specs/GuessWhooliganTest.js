var assert = require('chai').assert;
var Hooligan = require('../Hooligan.js');
var Player = require('../Player.js');
var  GuessWhooligan = require('../GuessWhooligan.js');

describe("GuessWhooligan", function(){

  beforeEach(function(){
    player1= new Player("Malcolm")
    player2=new Player('Steve')

    hooligan1 = new Hooligan({
      name: 'jake', 
      image: '/images/hooligan1.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})

    hooligan2 = new Hooligan({
      name: 'Mike', 
      image: '/images/hooligan2.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})

    hooligan3 = new Hooligan({
      name: 'Vlad', 
      image: '/images/hooligan3.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: true},{description: 'had a weapon', valid: false}]})

    hooligan4 = new Hooligan({
      name: 'Stephen', 
      image: '/images/hooligan4.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: false}]})

    var hooligans = [hooligan1,hooligan2,hooligan3,hooligan4]
    var players = [player1, player2]
    guessWhooligan  = new GuessWhooligan(hooligans, players)
  });



  it("Should create game", function(){
    assert.deepEqual(0, guessWhooligan.turnCounter)
  });

  it('Should start with two players', function(){
    assert.deepEqual(2,guessWhooligan.players.length)
  });

  it('Should initiate player Hooligan Setup', function(){
    guessWhooligan.setupHooligans();
    assert.deepEqual(4,guessWhooligan.players[0].hooligans.length)
  });
})