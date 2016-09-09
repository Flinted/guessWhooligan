var React = require('react');
var ReactDOM = require('react-dom');
var GameBox = require('./components/GameBox.jsx');
var Player = require('./models/Player');
var Hooligan = require('./models/Hooligan');


window.onload = function(){
    var player1= new Player("Malcolm")
    var player2=new Player('Steve')

    var hooligan1 = new Hooligan({
      name: 'jake', 
      image: '/images/hooligan1.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})

    var hooligan2 = new Hooligan({
      name: 'Mike', 
      image: '/images/hooligan2.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: true},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: true}]})

    var hooligan3 = new Hooligan({
      name: 'Vlad', 
      image: '/images/hooligan3.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: true},{description: 'had a weapon', valid: false}]})

    var hooligan4 = new Hooligan({
      name: 'Stephen', 
      image: '/images/hooligan4.jpg', 
      characteristics: [{description: 'had a leather jacket', valid: false},{description: 'had a skinhead', valid: false},{description: 'had a weapon', valid: false}]})

    var hooligans = [hooligan1,hooligan2,hooligan3,hooligan4]
    var players = [player1, player2]



  ReactDOM.render(
    <GameBox hooligans={hooligans} players={players}/>,
    document.getElementById('app')
  );
}
