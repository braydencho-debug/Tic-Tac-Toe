import {useState} from 'react'; //we are assigning a variable to a state


function Square({value, onSquareClick}) { //we are passing the value prop to the square component
  return (
  <button className="square" onClick={onSquareClick}>
   {value}
   </button>
  );
}

//Since Square can't change Board's state directly,
//  Board instead passes Square a function — like a "callback" — 
// that Square can call when it's clicked. That function lives in Board,
//  so it has full permission to update Board's own state. Square just calls it,
//  without knowing or caring how the state update actually happens.

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); //creates an array with 9 elements and fills it with null values

function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
  const nextSquares = squares.slice(); //creates a copy of the square array
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
   setXIsNext(!xIsNext);
  setSquares(nextSquares); // updates the state with the new array
}
const winner = calculateWinner(squares);
const draw = !squares.includes(null);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (draw) {
    status = "Draw"
  } else { 
    status = "Next player: " + (xIsNext ? "X" : "O");
    
  };
  return ( //Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.
    <>
      <div className="status">{status}</div>
    <div className="board-row">
      
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
</div>
<div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
</div>
<div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
</div>
    </>
  );
}

//this is where we are passing the value prop to the square component
//() => handleClick(0) is an arrow function, which is a shorter way to define functions.

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}