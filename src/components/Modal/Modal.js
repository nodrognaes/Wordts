import React from "react";
import './modal.css';

const Modal = ({ isCorrect, turn, solution }) => {
    const reload = () => {
        setTimeout(() => window.location.reload(), 300);
    }

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You win!!</h1>
                    <p className="solution">The word was "{solution.toUpperCase()}"</p>
                    <p>You found the secret word in {turn > 1 ? `${turn} guesses` : `${turn} guess`}. Well done!</p>
                    <button id='submit' onClick={reload}>Play again</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>You lost!</h1>
                    <p className="solution">The word was "{solution.toUpperCase()}"</p>
                    <p>Better luck next time!</p>
                    <button onClick={reload}>Try again</button>
                </div>
            )}
        </div>
    )
};

export default Modal;