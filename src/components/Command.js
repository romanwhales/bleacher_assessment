import React from 'react';
function Command(props){
    return <div className="command">
    <input type="text" value={props.playValues} onChange={props.onChange}/> 
    <button onClick={props.onClick}>Play!</button>
  </div>
}

export default Command