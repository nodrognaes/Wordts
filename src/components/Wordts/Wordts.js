import React, { useState, useEffect } from "react";
import useWordts from "../../hooks/useWordts";
import Grid from "../Grid/Grid";
import Instructions from "../Instructions/Instructions";
import KeyBoard from "../KeyBoard/KeyBoard";
import Modal from "../Modal/Modal";
import './wordts.css';

const Wordts = ({ solution }) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordts(solution);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {            
            setTimeout(() => setShowModal(true), 1050);
            window.removeEventListener('keyup', handleKeyup);
        };

        if (turn > 5 && !isCorrect) {
            setTimeout(() => setShowModal(true), 1050);
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <div className="container">
                <Instructions />
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
                {solution}
            </div>
            <KeyBoard usedKeys={usedKeys}/>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>

    )
};

export default Wordts;