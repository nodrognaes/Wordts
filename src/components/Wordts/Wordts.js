import React, { useEffect } from "react";
import useWordts from "../../hooks/useWordts";
import Grid from "../Grid/Grid";

const Wordts = ({ solution }) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordts(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup );
        
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <p>solution: {solution}</p>
            <h1>current guess: {currentGuess}</h1>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </div>
    )
};

export default Wordts;