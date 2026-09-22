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
  const [square, setSquare] = useState(Array(9).fill(null)); //creates an array with 9 elements and fills it with null values

function handleClick(i) { //JavaScript supports closures which means an inner function can access Board's state and update function.
  const nextSquares = square.slice(); //creates a copy of the square array
  nextSquares[i] = "X";
  setSquare(nextSquares); // updates the state with the new array
}

  return ( //Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.
    <>
    <div className="board-row">
      <Square value={square[0]} onSquareClick={() => handleClick(0)} />
      <Square value={square[1]} onSquareClick={() => handleClick(1)} />
      <Square value={square[2]} onSquareClick={() => handleClick(2)} />
</div>
<div className="board-row">
      <Square value={square[3]} onSquareClick={() => handleClick(3)} />
      <Square value={square[4]} onSquareClick={() => handleClick(4)} />
      <Square value={square[5]} onSquareClick={() => handleClick(5)} />
</div>
<div className="board-row">
      <Square value={square[6]} onSquareClick={() => handleClick(6)} />
      <Square value={square[7]} onSquareClick={() => handleClick(7)} />
      <Square value={square[8]} onSquareClick={() => handleClick(8)} />
</div>
    </>
  );
}

//this is where we are passing the value prop to the square component
//() => handleClick(0) is an arrow function, which is a shorter way to define functions.