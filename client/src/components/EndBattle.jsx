var React = require('react');

var EndBattle = function(props){
  
if(props.leader){
  return(
    <div id={props.endBattle}>
    <h3>GAME OVER: {props.winner.name} wins!</h3>
    <img id='win-image' src={props.leader.img}/>
    <button id="restart" onClick={props.restart}>Again?</button>
    <h6>You took out {props.leader.name} before he could get his squad together.</h6>
    </div>
    )
}
return(<div id={props.endGame}></div>)
}





module.exports = EndBattle;