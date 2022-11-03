import { createSlice } from "@reduxjs/toolkit";
import wordList from "../../words.json";

let randomNumber = Math.floor(Math.random() * wordList.words.length);
const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  pos: 0,
  row: 0,
  correctWord: wordList.words[randomNumber].toUpperCase(),
  questionWord: wordList.question[randomNumber],
};

export const boardSlide = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    incPos: (state) => {
      state.pos++;
    },
    delePos: (state) => {
      state.pos--;
    },
    incRow: (state) => {
      state.row++;
    },
    setCorrectWord: (state, action) => {
      state.correctWord = action.payload;
    },
    setQuestionWord: (state, action) => {
      state.questionWord = action.payload;
    },
  },
});

export const {
  setBoard,
  incPos,
  delePos,
  incRow,
  setCorrectWord,
  setQuestionWord,
} = boardSlide.actions;
export default boardSlide.reducer;
