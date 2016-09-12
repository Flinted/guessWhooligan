var React = require('react');

var HooliganCard = function(props){
  var className =''
  if(props.eliminated == 'bribed'){
    className= "game-card-out-bribed";
  }
  else if(props.eliminated){
    className= "game-card-out";
  }else{
    className= "game-card";
  }; 

  var divStyle = {
    backgroundImage: 'url(' + props.img + ')'
  };

  return (
    <li value= {props.index} onClick={props.getThem} className={className} style={divStyle}>
    <p className='name'>{props.name}</p>
    </li>
    );
}

module.exports = HooliganCard;