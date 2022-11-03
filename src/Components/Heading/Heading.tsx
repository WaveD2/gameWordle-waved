import React from "react";
import "./Heading.css";
interface IProps {
  text: string[];
  type: String;
}

const Heading: React.FC<IProps> = (props) => {
  const { text, type } = props;

  return (
    <>
      <p className={`Heading-${type}`}>{text[0]}</p>
      <p className={`Question-${type}`}>Question : {text[1]}</p>
    </>
  );
};

export default Heading;
