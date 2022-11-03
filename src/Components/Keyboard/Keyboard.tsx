import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../interface";
import {
  delePos,
  incRow,
  setBoard,
  setCorrectWord,
  setQuestionWord,
} from "../redux/boardSlide";
import wordList from "../../words.json";

import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard: React.FC = () => {
  let randomNumber = Math.floor(Math.random() * wordList.words.length);
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state: rootState) => state.board.row);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const questionWord = useSelector(
    (state: rootState) => state.board.questionWord
  );

  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  let allWords: string[] = wordList.words;
  let board5Words: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();
  console.log(row);

  const handleBack = () => {
    if (Math.floor((position - 1) % 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(delePos());
    dispatch(setBoard(newBoard));
  };
  console.log(questionWord);
  console.log(correctWord);
  const handleClickEnter = () => {
    if (allWords.includes(board5Words) === false) {
      alert("Invalid words");
    } else if (allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
        dispatch(incRow());
        dispatch(setQuestionWord(wordList.question[randomNumber]));
        dispatch(setCorrectWord(wordList.words[randomNumber].toUpperCase()));
      }
      console.log(questionWord);
      console.log(correctWord);
    }
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, id) => {
        return (
          <div className="row" key={id}>
            {row.split(" ").map((alphabet, index) => {
              return (
                <>
                  {alphabet === "z" && (
                    <span className="alphabet-key" onClick={handleClickEnter}>
                      Enter
                    </span>
                  )}
                  <div className="alphabet-key">
                    <Key alphabet={alphabet.toLocaleUpperCase()} />
                  </div>
                  {alphabet === "m" && (
                    <span className="alphabet-key" onClick={handleBack}>
                      Back
                    </span>
                  )}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
