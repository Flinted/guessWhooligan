var React = require('react');

var GuessBar= function(props){

  var characteristicsNodes = props.guesses.map(function(guess, index){
    return(
      <option index={index} key={index}>{guess} </option>
      );
  }) ;

  return(
    <div id='guess-bar'>
        <h4>Yeah officer, I saw the guys that did it, they...</h4>
        <select id="guesser">
            {characteristicsNodes}
        </select>
        <button onClick={props.onClick} id="guess-button">Inform</button>
        <button onClick={props.useBribe} id="bribe-button">Bribes: {props.bribes}</button>
    </div>
    );
}

module.exports = GuessBar;