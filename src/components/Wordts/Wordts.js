import React, { useEffect } from "react";
import useWordts from "../../hooks/useWordts";
import Grid from "../Grid/Grid";
import Instructions from "../Instructions/Instructions";
import KeyBoard from "../KeyBoard/KeyBoard";
import './wordts.css';

const Wordts = ({ solution }) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordts(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div className="container">
                <Instructions />
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
                {/* {solution} */}
            </div>
            <KeyBoard usedKeys={usedKeys}/>
        </div>

    )
};

export default Wordts;