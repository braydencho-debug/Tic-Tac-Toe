import {useState} from 'react'; //we are assigning a variable to a state


function Square({value}) {
  return <button className="square">{value}</button>; //this is where we are rendering the value prop that we passed from the board component
}


export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null)); //creates an array with 9 elements and fills it with null values

  return (
    <>
    <div className="board-row">
      <Square value={square[0]} /> //this is where we are passing the value prop to the square component
      <Square value={square[1]} />
      <Square value={square[2]} />
</div>
<div className="board-row">
      <Square value={square[3]} />
      <Square value={square[4]} />
      <Square value={square[5]} />
</div>
<div className="board-row">
      <Square value={square[6]} />
      <Square value={square[7]} />
      <Square value={square[8]} />
</div>
    </>
  );
}


