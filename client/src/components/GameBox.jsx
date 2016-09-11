var React = require('react');
var PlayerArea = require('./PlayerArea');
var GuessBar = require('./GuessBar');
var EndGame = require('./EndGame');
var Welcomer = require('./Welcomer');
var GuessWhooligan = require('../models/GuessWhooligan');


var GameBox = React.createClass({
  getInitialState: function() {
    var game = new GuessWhooligan(this.props.hooligans, this.props.players)
    game.setupHooligans()
    return {
      game: game, 
      target: game.targetPlayer, 
      turn: 1,
      player: game.currentPlayer, 
      guesses:[], 
      hooligans:[], 
      endGame:"game-run", 
      foundLeader: null, 
      welcomer: 'show-welcomer',
      p1Battle: null,
      p2Battle: null,
      endBattleMessage: ''
    };
  },

  componentDidMount: function(){
    this.refresh();
  },

  toggleButton: function(){
    var button = document.getElementById('guess-button');
    var guesser = document.getElementById('guesser');
    var bribe = document.getElementById('bribe-button');

    if(button.style.display=="none"){
        button.style.display="inline";
        guesser.style.display="inline";
        bribe.style.display="inline";
    }else{
        button.style.display="none";
        guesser.style.display="none";
        bribe.style.display="none";
    }
  },

  useBribe: function(){
      var bribes = this.state.player.bribes;
      if(bribes > 0 ){
        this.state.game.bribe(this.state.target);
        this.state.player.useBribe();
        this.refresh();
        return;
      }
      console.log("No bribes");
  },


  handleGuess: function(event){
    this.toggleButton();
    setTimeout(this.toggleButton,1000);
    var guess = document.getElementById('guesser').value;
    this.state.game.handleGuess(this.state.target, guess);
    this.refresh();
    if(!this.state.game.changeTurn()){ 
      this.endBattle()
      return;
    }
    setTimeout(this.refresh,1000);
  },

  refresh: function(){
      var target = this.state.game.targetPlayer;
      var current = this.state.game.currentPlayer;
      var turn = this.state.game.turn();
      var hooligans = this.state.game.returnHooligans(target);
      var characteristics =this.state.game.returnGuesses();
      this.setState({guesses: characteristics, turn:turn, target: target, player: current, hooligans: hooligans});
  },

  getThem: function(event){
      console.log('clicked', event.target.value);
      var target = this.state.target.hooligans[event.target.value]
      if(target.leader){
        this.endGame(target);
      }else{
        target.eliminate();
        this.state.target.addBribe();
        this.refresh();
        if(!this.state.game.changeTurn()){ 
          this.endBattle()
          return;
          }
        setTimeout(this.refresh,250);
      }
  },

  endBattle: function(){
    console.log("battle!");
    var teams = this.state.game.decideBattle();
    var p1Hooligans = teams[0];
    var p2Hooligans = teams[1];
    this.setState({endGame: "game-ended", p1Battle: p1Hooligans, p2Battle: p2Hooligans, player: teams[2], foundLeader: teams[2].leader, endBattleMessage: teams[3]});
  },

  endGame: function(target){
    this.setState({endGame: "game-ended", foundLeader: target })
  },

  restart: function(){
      location.reload();
  },

  hideWelcomer: function(){
      this.state.welcomer = "hide-welcomer";
      this.refresh();
  },

  render: function() {
    console.log("rendering");
    return (
      <div className="main-window">
        <Welcomer  
          hide={this.hideWelcomer} 
          class={this.state.welcomer}
        />
        <EndGame 
          endGame={this.state.endGame} 
          winner={this.state.player} 
          leader={this.state.foundLeader} 
          restart={this.restart}
          p1Battle ={this.state.p1Battle}
          p2Battle ={this.state.p2Battle}
          endBattleMessage = {this.state.endBattleMessage}
        />
        <h1 id="title">Guess Whooligan</h1>
        <PlayerArea 
          player={this.state.player} 
          turn={this.state.turn}
          hooligans= {this.state.hooligans} 
          getThem={this.getThem}/>
        <GuessBar 
          guesses={this.state.guesses} 
          onClick={this.handleGuess} 
          useBribe= {this.useBribe} 
          bribes={this.state.player.bribes} />
      </div>
    );
  }
});

module.exports = GameBox;
