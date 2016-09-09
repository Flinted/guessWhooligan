var React = require('react');
var ReactDOM = require('react-dom');
var GameBox = require('./components/GameBox.jsx');
var Player = require('./models/Player');
var Hooligan = require('./models/Hooligan');


window.onload = function(){
    var player1= new Player("Malcolm");
    var player2=new Player('Steve');

    var hooligan1 ={
      name: 'jake', 
      image: '/images/hooligan1.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]};

    var hooligan2 ={
      name: 'Mike', 
      image: '/images/hooligan2.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]};

    var hooligan3 ={
      name: 'Vlad', 
      image: '/images/hooligan3.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: true},{description: 'had a weapon', valid: false}]};

    var hooligan4 ={
      name: 'Stephen', 
      image: '/images/hooligan4.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: false}]};

      var hooligan5 ={
        name: 'Jason', 
        image: '/images/hooligan5.jpg', 
        characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: false}]};

        var hooligan6 ={
          name: 'Dennis', 
          image: '/images/hooligan6.jpg', 
          characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]};

    var hooligans = [hooligan1,hooligan2,hooligan3,hooligan4,hooligan5,hooligan6];
    var players = [player1, player2];



  ReactDOM.render(
    <GameBox hooligans={hooligans} players={players}/>,
    document.getElementById('app')
  );
}
