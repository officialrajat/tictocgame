import React, {useState}  from 'react';
import Square from './square';
import '../board.css';
import {calculateWinner} from '../helper';
import Message from './message';

const Board = ()=>{
const [board , setBoard] = useState(Array(9).fill(null));
const [isXNext , setIsXNext] = useState(false);
const {winner, winningSquares } = calculateWinner(board);

const handleSquareClick = position => {
    
    if(board[position] || winner) {
       return;
   }
   
    setBoard(prev => {
        return prev.map((square,pos)=>{
              if(pos === position) {
                  return isXNext ? 'X' : 'O';
              }
              return square;
        });
    });

    setIsXNext(prev => !prev);
   
 
};

const renderSquare = position =>{
return (
    <Square value  = {board[position]} onClick = {()=> handleSquareClick(position)}></Square>
);
};



return (
    <div className = "Board">
        <Message message = {winner} nextPlayer = {isXNext} ></Message>
        <div className = "board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className = "board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className = "board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
);
}

export default Board;