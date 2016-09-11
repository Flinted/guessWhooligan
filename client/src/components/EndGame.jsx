var React = require('react');
var HooliganCard = require('./HooliganCard');

var EndGame = function(props){


  if(!props.leader){ return(<div id={props.endGame}></div>)}


    if(!props.p1Battle){
      return(
        <div id={props.endGame}>
        <h3>GAME OVER: {props.winner.name} wins!</h3>
        <img id='win-image' src={props.leader.img}/>
        <button id="restart" onClick={props.restart}>Again?</button>
        <h6>You took out {props.leader.name} before he could get his squad together.</h6>
        </div>
        )
    }else{
      var p1hooliganNodes = props.p1Battle.map(function(hooligan, index){
        return(
          <HooliganCard index={index} name={hooligan.name} img={hooligan.img}eliminated={hooligan.eliminated} key={index} getThem={props.getThem}/>
          )
      })  
      var p2hooliganNodes = props.p2Battle.map(function(hooligan, index){
        return(
          <HooliganCard index={index} name={hooligan.name} img={hooligan.img}eliminated={hooligan.eliminated} key={index} getThem={props.getThem}/>
          )
      })  


      return(
        <div id={props.endGame}>
        <button id="restart" onClick={props.restart}>Again?</button>
        <h6>Neither of you found the other gangs leader, the day of the scrap has arrived.</h6>
        <h6>{props.winner.name}'s gang led by {props.leader.name} easily overpowered their rivals. </h6>

        <div id="battle-p1">
          {p1hooliganNodes}
        </div>
        <div id="battle-p2">
          {p2hooliganNodes}
        </div>

        </div>
        )
    }
  }





  module.exports = EndGame;