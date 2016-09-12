var React = require('react');
var HooliganCard =require('./HooliganCard');
var PlayerArea = function(props){

  var hooliganNodes = props.hooligans.map(function(hooligan, index){  
    return(
      <HooliganCard index={index} name={hooligan.name} img={hooligan.img}eliminated={hooligan.eliminated} key={index} getThem={props.getThem}/>
      );
  });  

var turn =5;
 if(props.turn == 5){
  var turn = "5...LAST TURN!";
};




  return(
    <div className={props.player.classid}>
      <h1>{props.player.name} hit list...  Turn: {props.turn}/{turn}</h1>
        <ul id="card-list">
          
              {hooliganNodes}

        </ul>
    </div>
    );

}


module.exports = PlayerArea;