var React = require('react');

var GuessBar= function(props){

  var characteristicsNodes = props.guesses.map(function(guess, index){
    return(
      <option index={index} key={index}>{guess} </option>
      )
  }) 

  return(
    <div id='guess-bar'>
        <h4>I saw them officer, they </h4>
        <select id="guesser">
            {characteristicsNodes}
        </select>
        <button onClick={props.onClick}>Guess</button>
    </div>
    )
}

module.exports = GuessBar;