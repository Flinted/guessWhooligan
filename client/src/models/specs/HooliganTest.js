var assert = require('chai').assert;
var Hooligan = require('../Hooligan.js');
var Player = require('../Player.js');
var  GuessWhooligan = require('../GuessWhooligan.js');

describe("GuessWhooligan", function(){
  beforeEach(function(){
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

  })

  it("Should create Hooligan", function(){
    assert.deepEqual('Vlad', hooligan3.name);
  });

})