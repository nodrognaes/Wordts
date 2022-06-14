import React from "react";
import Row from "../Row/Row";
import './grid.css';

const Grid = ({ guesses, currentGuess, turn }) => {

    return (
        <div className="gameboard">
            {guesses.map((guess, index) => {
                if (turn === index) {
                    return <Row key={index} currentGuess={currentGuess} />
                }
                return <Row key={index} guess={guess} />
            })}
        </div>
    )
};

export default Grid;