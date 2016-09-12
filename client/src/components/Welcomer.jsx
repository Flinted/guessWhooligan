var React =require('react');

var Welcomer = function(props){
  return(
      <div className={props.class} onClick={props.hide}>
            <h1>Guess Whooligan</h1>
            <h6>There's a rival gang in town, and you need to find their ringleader before they find yours. </h6>  
            <h6>Give tips to the cops with what you think he looks like, if there's a chance he's going to get lifted he will use his connections to get the cops looking for gang members that don't fit his description... helping you find him.</h6>
            <h6>There's only 5 days until the showdown, if you can't find the leader just get as many of them off the street as you can!</h6>
            <h6>Jump a rival hooligan by clicking on them,  careful though,  if you jump the wrong guy the rival gang may bribe the cops to take out one of yours...</h6>

            <h6>Click anywhere to begin.</h6>
      </div>
    );
}

module.exports = Welcomer;