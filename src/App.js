import {useState} from 'react'; //we are assigning a variable to a state


function Square({value, onSquareClick}) { //we are passing the value prop to the square component
  return (
  <button className="square" onClick={onSquareClick}> 
   {value} 
   </button>
  );
} //className connects elements to css files and <> is used for JSX and {value} is used to show whatever value is as text

//function cannot update anothers state without being inside of it

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
const winner = calculateWinner(squares); //if there is a winner then it send back 'X' or 'O', otherwise it sends back null which will define winner
const draw = !squares.includes(null); //.includes asks if there is somethign inluded in the list within (). And the '!' flips the meaning so if there are no null values draw = true
  let status;
  if (winner) { //if winner exsists and isnt null it will be used here
    status = "Winner: " + winner;
  } else if (draw) {  //if draw is true then it will show draw
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
//Board is the parent, passesing two props to Square: value and onSquareClick

//this is where we are passing the value prop to the square component
//() => handleClick(0) is an arrow function, which is a shorter way to define functions.

function calculateWinner(squares) {
  const lines = [ //all possible winning combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) { //i is a counter starting at 0  till 8 becauses lines.length is amount of lines (add 1 bc i++)
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //&& means 'and' also When you put a value inside an if, JavaScript asks, "Is there something here, or is it empty?", === shows identical values
      return squares[a];//retunr to line that called function 
    }
  }
  return null; 
}

// ';' is used to denoted end of a statement in JavaScript and seperate things.