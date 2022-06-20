import React from "react";
import './instructions.css';
import yosh from '../../pngwing.com.png';

const Instructions = () => {

    return (
        <div className="instruct">
        <div className="instructText">
            <h2>Try to guess the secret word by entering any five-letter word</h2>
            <p>Type your guess or click the keys below</p>
            <p><span id="blue">___</span> means a correct letter was guessed in the correct spot</p>
            <p><span id="yellow">___</span> means a correct letter was guessed, but in the wrong spot</p>
            <p>and <span id="red">___</span> means tthe letter is not in the secret word.</p>
            <p>GOOD LUCK~!</p>
        </div>
        <div><img src={yosh} alt="Yoshi"></img></div>
    </div>
    )
};

export default Instructions;