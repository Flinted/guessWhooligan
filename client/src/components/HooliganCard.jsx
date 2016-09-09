var React = require('react');

var HooliganCard = function(props){
  var className =''
  if(props.eliminated){
    console.log(props.eliminated)
    className= "game-card-out";
  }else{
    className= "game-card";
  }

  return (
    <li value= {props.index} onClick={props.getThem} className={className} >
    <h4 >{props.name}</h4>
    </li>
    )
}

module.exports = HooliganCard;