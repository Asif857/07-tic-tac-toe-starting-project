export default function GameBoard({ onSelectSquare, board }) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex){
  //     setGameBoard((prevGameBoard) => {
  //         // Remember that we work in a functional paradigm, that's why whenever we want
  //         // to change something (not primitive) we deep copy it first in order to prevent
  //         // changing other refrences in the code.
  //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updatedBoard;
  //     });
  //     //Notice that onSelectSqure is a function defined in the app.jsx component!
  //     // This way we can tell the app.jsx that something happend in this component (in the
  //     // GameBoard component) and we can also pass this info to the Player component like
  //     // we wanted.
  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {" "}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}{" "}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
