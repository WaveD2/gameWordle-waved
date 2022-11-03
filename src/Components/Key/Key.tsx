import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../interface";
import { incPos, setBoard } from "../redux/boardSlide";
import "./Key.css";
interface IProps {
  alphabet: string;
}

const Key: React.FC<IProps> = (props) => {
  const { alphabet } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const dispatch = useDispatch();
  const currentRow = Math.floor(position / 5);
  function handleClick() {
    if (position > 29 && position <= 0) return;

    if (currentRow > row) return;

    const newBoard = [...board];
    newBoard[position] = alphabet;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  }
  return (
    <div className="alphabet-key" onClick={handleClick}>
      {alphabet}
    </div>
  );
};

export default Key;
