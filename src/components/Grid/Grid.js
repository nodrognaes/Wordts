import React from "react";
import Row from "../Row/Row";
import './grid.css';

const Grid = ({ guesses, currentGuess, turn }) => {

    return (
        <div>
            {guesses.map((guess, index) => {
                return <Row key={index} guess={guess} />
            })}
        </div>
    )
};

export default Grid;