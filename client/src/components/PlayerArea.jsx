var React = require('react');
var HooliganCard =require('./HooliganCard')
;
var PlayerArea = function(props){
    var hooliganNodes = props.hooligans.map(function(hooligan, index){
      return(
        <HooliganCard index={index} name={hooligan.name} img={hooligan.img}eliminated={hooligan.eliminated} key={index} getThem={props.getThem}/>
        )
    })  

    return(
      <div className="play-area">
        <h1>{props.name}'s hit list</h1>
        <ul id="card-list">
        {hooliganNodes}
        </ul>
      </div>
      )

}


module.exports = PlayerArea;