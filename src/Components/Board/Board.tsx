import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Square from "../Square/Square";
import "./Board.css";
interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;

  return (
    <>
      <div className="board">
        {board.map((square, index) => {
          return (
            <>
              <Square value={square} squareIndex={index} key={index} />
            </>
          );
        })}
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
    </>
  );
};

export default Board;
