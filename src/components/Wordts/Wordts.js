import React, { useEffect } from "react";
import useWordts from "../../hooks/useWordts";

const Wordts = ({ solution }) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordts(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup );
        
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    })

    return (
        <div>
            <p>solution: {solution}</p>
            <h1>current guess: {currentGuess}</h1>
        </div>
    )
};

export default Wordts;