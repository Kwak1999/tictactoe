import React from "react";
import "./Square.css";

// 함수형
const Squares = ({onClick, value}) => {
    return(
        <button className="square"
            onClick={onClick}>
            {value}
        </button>
    )
}
export default Squares;

