import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer";
import Heading from "./Components/Heading/Heading";
import { rootState } from "./Components/interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board);

  const questionWord = useSelector(
    (state: rootState) => state.board.questionWord
  );

  console.log(questionWord);

  const intHeading: string[] = ["Wordle", questionWord];
  return (
    <div className="App">
      <Heading type="h1" text={intHeading} />
      <div className="board-container">
        <Board board={board} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
