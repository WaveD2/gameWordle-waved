interface boardState {
  board: string[];
  pos: number;
  row: number;
  correctWord: string;
  questionWord: string;
}
export interface rootState {
  board: boardState;
}
