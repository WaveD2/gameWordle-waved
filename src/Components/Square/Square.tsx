import React, { useEffect, useState } from "react";
import "./Square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface";
interface IProps {
  value: string;
  squareIndex: number;
}

const Square: React.FC<IProps> = (props) => {
  const { value, squareIndex } = props;
  // Redux state
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const storageRow = useSelector((state: rootState) => state.board.row);

  // React state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setwrong] = useState<boolean>(false);

  // Check đúng hay k
  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;

  //variants những hiệu ứng
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    // console.log(value);
    // console.log(currentPos);
    // console.log(correctWord[currentPos]);
    if (correctWord[currentPos] === value) {
      setCorrect(true);
    } else if (!correct && value !== "" && correctWord.includes(value)) {
      setAlmost(true);
    } else if (!correct && value !== "" && !correctWord.includes(value)) {
      setwrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setwrong(false);
    };
  }, [value]);

  const status: any =
    Math.floor(squareIndex / 5) < storageRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  // console.log(squareIndex / 5);

  return (
    <motion.div animate={value ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {value}
      </div>
    </motion.div>
  );
};

export default Square;
