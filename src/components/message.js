import React from 'react';

const Message = ({message , nextPlayer})=>{
console.log(message);
if( message) {
    return (
      <div>
        <h1>Player {message} wins the match !!!</h1>
        </div>
    );}

    else{
        if(nextPlayer == true){
        return (
        <div>
            <h3>Player X turn</h3>
        </div>
    );}
    else {
        return (
        <div>
            <h3>Player O turn</h3>
        </div>);
    }

}

}


export default Message;