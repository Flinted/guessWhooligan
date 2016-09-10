var React = require('react');
var ReactDOM = require('react-dom');
var GameBox = require('./components/GameBox.jsx');
var Player = require('./models/Player');
var Hooligan = require('./models/Hooligan');
var Seeds = require('./Seeds');


window.onload = function(){
  var player1= new Player("Player 1", "player-area1");
  var player2=new Player('Player 2',"player-area2");
  var hooligans = Seeds.hooligans;
  var players = [player1, player2];

  ReactDOM.render(
    <GameBox hooligans={hooligans} players={players}/>,
    document.getElementById('app')
    );
}
