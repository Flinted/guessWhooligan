var React = require('react');
var PlayerArea = require('./PlayerArea');
var GuessBar = require('./GuessBar');
var GuessWhooligan = require('../models/GuessWhooligan');


var GameBox = React.createClass({
  getInitialState: function() {
    var game = new GuessWhooligan(this.props.hooligans, this.props.players)
    game.setupHooligans()
    console.log(game);
    return {game: game, target: game.targetPlayer, guesses:[], player1: '', player1hooligans:[], player2: '',player2hooligans:[]};
  },

  componentDidMount: function(){
    this.refresh();
  },

  handleGuess: function(event){
    var guess = document.getElementById('guesser').value;
    this.state.game.handleGuess(this.state.target, guess);
    this.state.game.changeTurn();
    this.refresh()
  },

  refresh: function(){
      var names= this.state.game.players;
      var player1=names[0];
      var player2=names[1];
      var p1Hooligans= this.state.game.returnHooligans(player1);
      var p2Hooligans= this.state.game.returnHooligans(player2);
      var characteristics = this.state.game.returnGuesses();
      var current = this.state.game.targetPlayer;
      this.setState({guesses: characteristics, target: current, player1: player1, player1hooligans: p1Hooligans ,player2:player2,player2hooligans: p2Hooligans});
  },

  getThem: function(event){
      console.log('clicked', event.target.value);
      var target = this.state.target.hooligans[event.target.value]
      if(target.leader){
        this.endGame();
      }else{
        target.eliminate()
        this.state.target.addGetem();
        this.state.game.changeTurn();
        this.refresh();
      }
      // check if this player is the leader
      // end game if true
      // end turn and give getEm if false
  },

  endGame: function(){
      console.log("Game Over");
  },

  render: function() {
    console.log("rendering");
    return (
      <div className="main-window">
        <h1 id="title">Guess Whooligan</h1>
        <PlayerArea key="1" id='player1' name={this.state.player1.name}hooligans= {this.state.player1hooligans} getThem={this.getThem}/>
        <PlayerArea key="2" id='player2' name={this.state.player2.name}hooligans= {this.state.player2hooligans} getThem={this.getThem}/>
        <GuessBar guesses={this.state.guesses} onClick={this.handleGuess}/>
      </div>
    );
  }
});

module.exports = GameBox;
